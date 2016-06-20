'use strict';

function invokeCB(o, name) {
	if ( !(name in o ) ) return;
	var args = Array.prototype.slice.call(arguments, 2);
	o[name].apply(o, args);
}

function detectStrict(body) {
	if ( !body || body.length < 1 ) return;
	let first = body[0];
	if ( first.type === 'ExpressionStatement' ) {
		let exp = first.expression;
		if ( exp.type === 'Literal' && exp.value === 'use strict' ) {
			return true;
		}
	}
}


class ASTNode {
	constructor(o) {
		if ( typeof o === 'object' ) {
			for ( var k in o ) this[k] = o[k];
		}
	}

	addHiddenProperty(name, value) {
		Object.defineProperty(this, name, {
			value: value,
			configurable: true
		});
	}

	source() {
		if ( !this._source ) return;
		if ( !this.range ) return;
		return this._source.substring(this.range[0], this.range[1]);
	}

	toString() {
		let extra = Object.keys(this).map((k) => {
			let v = this[k];
			if ( v === null || typeof v === 'function' ) return;
			if ( k == 'range' || k == 'loc' || k == 'nodeID') return;
			if ( v instanceof ASTNode ) return `${k}: [ASTNode: ${v.type}]`;
			if ( Array.isArray(v) ) return '[...]';
			else return `${k}: ${JSON.stringify(v)}`;
		}).filter((v) => !!v).join(', ');
		return `[ASTNode: ${this.type} ${extra}]`;
	}

}

class ASTPreprocessor {

	static process(ast, extra) {
		if ( typeof ast !== 'object' ) throw new TypeError('Provided AST is invalid (type is ' + typeof ast + ')');
		let nast = JSON.parse(JSON.stringify(ast), function(n, o) {
			if ( o === null ) return null;
			if ( typeof o !== 'object' ) return o;
			if ( o.type ) {
				let z = new ASTNode(o);
				if ( extra && extra.source ) z.addHiddenProperty('_source', extra.source);
				return z;
			}
			return o;
		});
		new ASTPreprocessor(nast, extra).start();
		return nast;
	}

	static *walker(ast, cbs, parent) {
		var me = (a) => ASTPreprocessor.walker(a, cbs, ast);
		invokeCB(cbs, 'enter', ast);
		invokeCB(cbs, 'enter' + ast.type, ast);
		if ( parent && ast instanceof ASTNode ) ast.addHiddenProperty('parent', parent);
		switch ( ast.type ) {
			case 'Program':
				for ( let e of ast.body ) yield * me(e);
				break;
			case 'BlockStatement':
				for ( let e of ast.body ) yield * me(e);
				break;
			case 'NewExpression':
			case 'CallExpression':
				for ( let e of ast.arguments ) yield * me(e);
				yield * me(ast.callee);
				break;
			case 'WhileStatement':
			case 'DoWhileStatement':
				if ( ast.test ) yield * me(ast.test);
				yield * me(ast.body);
				break;
			case 'VariableDeclaration':
				for ( let e of ast.declarations ) yield * me(e);
				break;
			case 'VariableDeclarator':
				invokeCB(cbs, 'decl', ast);
				if ( ast.init ) yield * me(ast.init);
				break;
			case 'FunctionDeclaration':
				invokeCB(cbs, 'decl', ast);
				invokeCB(cbs, 'enterFunction', ast);
				yield * me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;

			case 'ArrowFunctionExpression':
			case 'FunctionExpression':
				invokeCB(cbs, 'enterFunction', ast);
				yield * me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;
			case 'Identifier':
				break;
			case 'ArrayExpression':
				if ( ast.elements ) {
					for ( let e of ast.elements ) {
						if ( e ) yield * me(e);
					}
				}
				break;
			case 'ObjectExpression':
				if ( ast.properties ) {
					for ( let e of ast.properties ) {
						if ( e ) yield * me(e);
					}
				}
				break;
			case 'Property':
				yield * me(ast.key);
				yield * me(ast.value);
				break;
			default:
				for (var p in ast) {
					let n = ast[p];
					if ( p === 'parent' ) continue;
					if ( p === 'loc' ) continue;
					if ( p === 'type' ) continue;
					if ( p === 'nodeID' ) continue;
					if ( p === 'parentFunction' ) continue;
					if ( p === 'funcs' ) continue;
					if ( n === null ) continue;
					if ( typeof n.type !== 'string' ) {
						continue;
					}
					yield * me(n);
				}
		}


		invokeCB(cbs, 'exit' + ast.type, ast);
		invokeCB(cbs, 'exit', ast);
	}


	constructor(ast, options) {
		this.options = options || {};
		this.ast = ast;
		this.gen = ASTPreprocessor.walker(ast, this);
	}

	start() {
		this.counter = 0;
		this.depth = 0;

		let globalScope = Object.create(null);
		let globalVars = Object.create(null);
		let globalFuncs = Object.create(null);

		this.scopeStack = [globalScope];
		this.varStack = [globalVars];
		this.funcStack = [globalFuncs];
		for ( var x of this.gen ) {

		}
	}

	log() {
		let str = Array.prototype.join.call(arguments, ', ');
		let indent = new Array(this.depth).join('  ');
		//console.log(indent + str);
	}

	enter(a) {
		++this.depth;
		a.nodeID = this.counter++;
		this.log('Entering', a.type);
	}

	enterIdentifier(a) {
		let fn = this.funcStack[0];
		fn.refs[a.name] = true;
	}

	decl(a) {
		if ( a.parent.type == 'VariableDeclaration' && a.parent.kind != 'var' ) return;
		let stack = this.varStack[0];
		stack[a.id.name] = a;
	}

	enterProgram(a) {
		let scope = Object.create(null);

		a.addHiddenProperty('refs', Object.create(null));
		a.addHiddenProperty('vars', Object.create(null));
		a.addHiddenProperty('funcs', Object.create(null));

		this.funcStack.unshift(a);
		this.scopeStack.unshift(scope);
		this.varStack.unshift(a.vars);

		this.mangleBody(a);

		let strict = detectStrict(a.body);
		if ( strict !== undefined ) a.strict = strict;
	}

	enterThisExpression(a) {
		a.srcName = 'this';
	}

	enterLabeledStatement(a) {
		a.body.label = a.label.name;
	}

	exitArrayExpression(a) {
		a.srcName = '[' + a.elements.map((e) => e ? e.srcName : '').join() + ']';
	}

	mangleBody(a) {
		function prehoist(s) {
			if ( s.type === 'VariableDeclaration' && s.kind == 'var' ) {
				for ( var decl of s.declarations ) {
					a.vars[decl.id.name] = decl;
				}

			} else if ( s.type === 'FunctionDeclaration' ) {
				a.vars[s.id.name] = s;
			}
		}

		if ( a.body.type === 'BlockStatement' ) {
			for ( let stmt of a.body.body ) prehoist(stmt);
		} else if ( Array.isArray(a.body) ) {
			for ( let stmt of a.body ) prehoist(stmt);
		} else {
			prehoist(a.body);
		}

	}

	enterFunction(a) {
		this.funcStack.unshift(a);
		let scope = Object.create(this.scopeStack[0]);
		this.scopeStack.unshift(scope);

		a.addHiddenProperty('refs', Object.create(null));
		a.addHiddenProperty('vars', Object.create(null));
		a.addHiddenProperty('funcs', Object.create(null));

		if ( this.options.nonUserCode ) {
			a.addHiddenProperty('nonUserCode', true);
		}

		for ( let o of a.params ) {
			a.vars[o.name] = a;
		}

		this.mangleBody(a);

		let strict = detectStrict(a.body.body);
		if ( strict !== undefined ) a.strict = strict;

		this.varStack.unshift(a.vars);
	}

	enterFunctionDeclaration(a) {
		let parent = this.funcStack[0];
		//a.parentFunction = parent.nodeID;
		a.srcName = 'function ' + a.id.name + ' {';
		parent.funcs[a.id.name] = a;
	}

	exitIdentifier(a) {
		a.srcName = a.name;
	}

	exitLiteral(a) {
		if ( a.regex ) {
			a.srcName = '/' + a.regex.pattern + '/' + a.regex.flags;
		} else if ( typeof a.value === 'string' ) {
			a.srcName = a.raw;
		} else if ( typeof a.value === 'undefined' ) {
			a.srcName = 'undefiend';
		} else {
			a.srcName = a.raw;
		}
	}


	exitBinaryExpression(a) {
		a.srcName = a.left.srcName + ' ' + a.operator + ' ' + a.right.srcName;
	}

	exitMemberExpression(a) {
		let left = a.object.srcName || '??';
		let right = a.property.srcName || '(intermediate value)';
		if (!a.computed) a.srcName = left + '.' + right;
		else a.srcName = a.srcName = left + '[' + right + ']';
	}

	exitCallExpression(a) {
		a.srcName = a.callee.srcName + '(...)';
	}


	exitFunction(a) {
		var vars = this.varStack.shift();
		var free = {};
		var upvars = {};
		for ( var r in a.refs ) {
			if ( r in vars ) {
				//Local refrence
			} else if ( r in this.varStack[0] ) {
				upvars[r] = true;
			} else {
				free[r] = true;
			}
		}
		a.upvars = upvars;
		a.freevars = free;

		this.scopeStack.shift();
		this.funcStack.shift();
		delete a.refs;
		//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exitProgram(a) {
		this.scopeStack.shift();
		var vars = this.varStack.shift();
		//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exit(a) {
		this.log('Exiting', a.type);
		--this.depth;
	}

}

module.exports = ASTPreprocessor;
