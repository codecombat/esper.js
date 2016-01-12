"use strict";

const Value = require('./Value');
const RuntimeError = require('./RuntimeError');
const ClosureValue = require('./values/ClosureValue');
const ObjectValue = require('./values/ObjectValue');

class Evaluator {
	constructor(env, n, s) {
		this.env = env;
		let that = this;
		let lastValue = null;
		/** 
		 * @type {Object[]} 
		 * @property {Generator} generator
		 * @property {string} type
		 * @property {ast} ast
		 */
		this.frames = [];
		this.nextFn = function next() {
			let top = that.frames[0];
			let result = top.generator.next(lastValue);
			lastValue = result.value;
			if ( result.done ) {
				let lastFrame = that.popFrame();

				// Latient values can't cross function calls.
				// Dont do this, and you get coffeescript mode.
				if ( lastFrame.type === "function" ) lastValue = Value.undef;

				if ( that.frames.length === 0 ) return {done: true, value: result.value};
			} 
			
			return {done: false, val: lastValue};
		};
		var scop = s.createChild();
		scop.thiz = s.thiz;
		this.pushFrame({generator: this.dispatch(n,scop), type: 'program', scope: scop});
	}

	pushFrame(frame) {
		this.frames.unshift(frame);
	}

	popFrame() {
		let frame = this.frames.shift();

		return frame;
	}

	fromNative(native) {
		return this.env.valueFromNative(native);
	}

	*throw(what) {
		for ( let i = 0; i < this.frames.length; ++i ) {
			if ( this.frames[i].type == 'catch' ) {
				this.frames.splice(0,i+1);
				yield {error: true, obj: what};
				return Value.undef;
			}
		}
		console.log("PANIC");
		let line = -1;
		if ( this.frames[0].ast.attr) {
			this.frames[0].ast.attr.pos.start_line;
		}
		throw what.toNative();
	}

	*resolveRef(n, s, create) {
		switch (n.type) {
			case "Identifier":
				let iref = s.ref(n.name);
				if ( !iref ) {
					if ( !create ) throw new ReferenceError(`${n.name} not defined`);
					s.set(n.name, Value.undef);
					iref = s.ref(n.name);
				}
				return iref;
			case "MemberExpression":
				let idx;
				let ref = yield * this.branch(n.object, s);
				if ( n.computed ) {
					idx = (yield * this.branch(n.property, s)).toNative();
				} else {
					idx = n.property.name;
				}

				if ( !ref ) {
					throw "Cant write property of undefined: " + idx;
				}

				if ( !ref.ref ) {
					throw "Cant write property of non-object type: " + idx;
				}

				let result = ref.ref(idx);
				if ( result ) return result;

				ref.assign(idx, Value.undef);
				return ref.ref(idx);

			default:
				console.log("PANIC!");
				throw new Error("Couldnt resolve ref component: " + n.type);
		}
	}

	*evaluateArrayExpression(n,s) {
		//let result = new ObjectValue();
		let result = this.fromNative([]);
		for ( let i = 0; i < n.elements.length; ++i ) {
			result.assign(i, yield * this.branch(n.elements[i],s));
		}
		return result;
	}

	*evaluateAssignmentExpression(n,s) {
		//TODO: Account for not-strict mode
		let ref;
		try {
			ref = yield * this.resolveRef(n.left, s, n.operator === "=");
		} catch ( e ) {
			return yield * this.throw(this.fromNative(e));
		}

		if ( !ref && scope.strict ) {
			return yield * this.throw(this.fromNative(new ReferenceError(`target not defined`)));
		}

		let argument = yield * this.branch(n.right, s);
		let value;
		switch ( n.operator ) {
			case "=":
				value = argument;
				break;
			case "+=":
				value = yield * ref.value.add(argument);
				break;
			case "-=":
				value = yield * ref.value.subtract(argument);
				break;
			case "*=":
				value = yield * ref.value.multiply(argument);
				break;
			case "/=":
				value = yield * ref.value.divide(argument);
				break;
			case "%=":
				value = yield * ref.value.mod(argument);
				break;
			case "<<=":
				value = yield * ref.value.shiftLeft(argument);
				break;
			case ">>=":
				value = yield * ref.value.shiftRight(argument);
				break;
			case ">>>=":
				value = yield * ref.value.shiftRightZF(argument);
				break;
			case "|=":
				value = yield * ref.value.bitOr(argument);
				break;
			case "&=":
				value = yield * ref.value.bitAnd(argument);
				break;
			case "^=":
				value = yield * ref.value.bitXor(argument);
				break;
			default:
				throw new Error("Unknown assignment operator: " + n.operator);
		}

		if ( ref ) ref.value = value;
		else s.assign( n.left.name, value);

		return value;
	}

	*evaulateBinaryExpression(n,s) {
		let left = yield * this.branch(n.left,s);
		let right = yield * this.branch(n.right,s);
		switch ( n.operator ) {
			case '==': return yield * left.doubleEquals(right);
			case '!=': return yield * left.notEquals(right);
			case '===': return yield * left.tripleEquals(right);
			case '!==': return yield * left.doubleNotEquals(right);
			case '+': return yield * left.add(right);
			case '-': return yield * left.subtract(right);
			case '*': return yield * left.multiply(right);
			case '/': return yield * left.divide(right);
			case '%': return yield * left.mod(right);
			case '|': return yield * left.bitOr(right);
			case '^': return yield * left.bitXor(right);
			case '&': return yield * left.bitAnd(right);
			case 'in': return yield * left.inOperator(right);
			case 'instanceof': return yield * left.instanceOf(right);
			case '>': return yield * left.gt(right);
			case '<': return yield * left.lt(right);
			case '>=': return yield * left.gte(right);
			case '<=': return yield * left.lte(right);
			case '<<': return yield * left.shiftLeft(right);
			case '>>': return yield * left.shiftRight(right);
			case '>>>': return yield * left.shiftRightZF(right);
			default:
				throw new Error("Unknown binary operator: " + n.operator);
		}
	}

	*evaluateBlockStatement(n,s) {
		let result = Value.undef;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement,s);
		}
		return result;
	}


	*evaluateBreakStatement(n,s) {
		for ( let i = 0; i < this.frames.length; ++i ) {
			if ( this.frames[i].type == 'function' ) break;
			else if ( this.frames[i].type == 'loop' ) {
				this.frames.splice(0,i+1);
				yield;
				return;
			}
		}
		throw new Error('Cant find matching loop frame for break');
	}


	*evaluateCallExpression(n,s,e) {
		let thiz = Value.null;

		let callee;

		if ( n.callee.type === "MemberExpression" ) {
			thiz = yield * this.branch(n.callee.object, s);
			callee = yield * this.partialMemberExpression(thiz, n.callee, s);
		} else {
			callee = yield * this.branch(n.callee, s);
		}

		if ( n.type === "NewExpression" ) {
			thiz = yield * callee.makeThisForNew();
		}

		//console.log("Calling", callee, callee.call);

		let args = new Array(n.arguments.length);
		for ( let i = 0; i < n.arguments.length; ++i ) {
			args[i] = yield * this.branch(n.arguments[i],s);
		}

		if ( typeof callee.call !== "function" ) {
			return yield * this.throw("Cant call " + require('util').inspect(callee));
		}

		let result = yield * callee.call(this, thiz, args, s);
		if ( n.type === "NewExpression" ) {
			return thiz;
		} else {
			return result;
		}
	}

	*evaluateConditionalExpression(n,s) {
		let test = yield * this.branch(n.test, s);
		if ( test.truthy ) {
			return yield * this.branch(n.consequent, s);
		} else {
			if ( n.alternate ) {
				return yield * this.branch(n.alternate, s);
			}
		}
		return Value.undef;
	}


	*evaluateContinueStatement(n,s) {
		for ( let i = 0; i < this.frames.length; ++i ) {
			if ( this.frames[i].type == 'function' ) break;
			else if ( this.frames[i].type == 'continue' ) {
				this.frames.splice(0,i+1);
				yield;
				return;
			} else if ( this.frames[i].type == 'loop') {
				throw new Error('Somehow missing continue frame.');
			}
		}
		throw new Error('Cant find matching loop frame for break');
	}

	*evaluateDoWhileStatement(n,s) {
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			do {
				last = yield that.branchFrame('continue', n.body, s);
			} while ( (yield * that.branch(n.test,s)).truthy );
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	*evaluateEmptyStatement(n,s) {
		return Value.undef;
	}


	*evalutaeExpressionStatement(n,s) {
		return yield * this.branch(n.expression,s);
	}

	*evaluateIdentifier(n,s) {
		if ( n.name === "undefined" ) return Value.undef;
		if ( !s.has(n.name) ) {
			// Allow undeclared varibles to be null?
			if ( false ) return Value.undef;
			return yield * this.throw(this.fromNative(new ReferenceError(`${n.name} is not defined`)));
		}
		return s.get(n.name);
	}

	*evaluateIfStatement(n,s) {
		let test = yield * this.branch(n.test, s);
		if ( test.truthy ) {
			return yield * this.branch(n.consequent, s);
		} else {
			if ( n.alternate ) {
				return yield * this.branch(n.alternate, s);
			}
		}
		return Value.undef;
	}

	*evaluateForStatement(n,s) {
		let last = Value.undef;
		yield * this.branch(n.init,s);
		let that = this;
		var gen = function*() {
			while ( (yield * that.branch(n.test,s)).truthy ) {
				last = yield that.branchFrame('continue', n.body, s);
				yield * that.branch(n.update,s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	*evaluateForInStatement(n,s) {
		let last = Value.undef;
		let object = yield * this.branch(n.right,s);
		let names = object.observableProperties();
		let that = this;
		let ref;

		if ( n.left.type === "VariableDeclaration" ) {
			s.assign(n.left.declarations[0].id.name, Value.undef);
			ref = s.ref(n.left.declarations[0].id.name);
		} else {
			ref = s.ref(n.left.name);
		}

		var gen = function*() {
			for ( let name of names ) {
				ref.value = name;
				last = yield * that.branch(n.body, s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}


	*evaluateFunctionDeclaration(n,s) {
		let closure = new ClosureValue(n, s);
		s.add(n.id.name, closure);
		return Value.undef;
	}

	*evaluateFunctionExpression(n,s) {
		let value = new ClosureValue(n, s);
		if ( n.type === "ArrowFunctionExpression" ) {
			value.thiz = s.thiz;
		}
		return value;
	}

	*evaluateLabeledStatement(n,s) {
		return yield * this.branch(n.body);
	}

	*evaulateLiteral(n,s) {
		return this.fromNative(n.value);
	}

	*evaluateLogicalExpression(n,s) {
		let left = yield * this.branch(n.left,s);
		switch ( n.operator ) {
			case '&&':
				if ( left.truthy ) return yield * this.branch(n.right,s);
				return left;
			case '||': 
				if ( left.truthy ) return left;
				return yield * this.branch(n.right,s);
			default:
				throw new Error("Unknown logical operator: " + n.operator);
		}

	}

	*evaluateMemberExpression(n,s) {
		let left = yield * this.branch(n.object,s);
		return yield * this.partialMemberExpression(left, n, s);
	}

	*partialMemberExpression(left, n, s) {
		if ( n.computed ) {
			let right = yield * this.branch(n.property,s);
			return yield * left.member(right.toNative());
		} else if ( n.property.type == "Identifier") {
			return yield * left.member(n.property.name);
		} else {
			return yield * left.member(n.property.value.toString());
		}
	}

	*evaluateObjectExpression(n,s) {
		//TODO: Need to wire up native prototype
		var nat = new ObjectValue(s);
		for ( let i = 0; i < n.properties.length; ++i ) {
			let prop = n.properties[i];
			let key;
			if ( n.computed ) {
				key = (yield * this.branch(prop.key, s)).toNative().toString();
			} else if ( prop.key.type == 'Identifier') {
				key = prop.key.name;
			} else if ( prop.key.type == 'Literal' ) {
				key = prop.key.value.toString();
			}

			let value = yield * this.branch(prop.value, s);
			console.log(key, value);
			nat.assign(key, value);
		}
		return nat;
	}

	*evaluateProgram(n,s) {
		let result = Value.undef;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement,s);
		}
		return result;
	}

	*evaluateReturnStatement(n,s) {
		let retVal = yield * this.branch(n.argument,s);
		this.popFrame();
		yield retVal;
	}

	*evaluateSequenceExpression(n,s) {
		let last = Value.undef;
		for ( let expr of n.expressions ) {
			last = yield * this.branch(expr,s);
		}
		return last;
	}

	*evaluateThisExpression(n,s) {
		if ( s.thiz ) return s.thiz;
		else return Value.undef;
	}

	*evaluateThrowStatement(n,s) {
		let value = yield * this.branch(n.argument, s);
		return yield * this.throw(value);
	}

	*evaluateTryStatement(n,s) {
		let result = yield this.branchFrame('catch', n.block, s);
		if ( result.error ) {
			let handlerScope = s.createChild();
			handlerScope.add(n.handler.param.name, result.obj);
			return yield * this.branch(n.handler.body, handlerScope);
		}
		if ( n.finalizer ) {
			yield * this.branch(n.finalizer, s);
		}
		return result;
	}

	*evaluateUpdateExpression(n,s) {
		//TODO: Need to support something like ++x[1];
		let nue, ref;
		try {
			ref = yield * this.resolveRef(n.argument, s, true);
		} catch ( e ) {
			return yield * this.throw(this.fromNative(e));
		}
		let old = ref.value ? ref.value : Value.NaN;
		switch (n.operator) {
			case "++": nue = yield * old.add(this.fromNative(1)); break;
			case "--": nue = yield * old.subtract(this.fromNative(1)); break;
			default: throw new Error("Unknown update expression type: " + n.operator);
		}
		if ( ref ) ref.value = nue;

		if ( n.prefix ) return nue;
		return old;
	}

	*evaulateUnaryExpression(n,s) {
		if ( n.operator === "delete" ) {
			try {
				let ref = yield * this.resolveRef(n.argument, s);
			} catch ( e ) {
				return Value.true;
			}
			return Value.true;
		}

		if ( n.operator === "typeof" ) {
			if ( n.argument.type == "Identifier" ) {
				if ( !s.has(n.argument.name) ) return yield * Value.undef.typeOf();
			}
		}

		let left = yield * this.branch(n.argument,s);
		switch ( n.operator ) {
			case '-': return yield * left.unaryMinus();
			case '+': return yield * left.unaryPlus();
			case '!': return yield * left.not();
			case '~': return yield * left.bitNot();
			case 'typeof': return yield * left.typeOf();
			case 'void': return Value.undef;
			default:
				throw new Error("Unknown binary operator: " + n.operator);
		}
	}


	*evaluateVariableDeclaration(n,s) {
		let kind = n.kind;
		for ( let decl of n.declarations ) {
			let value = Value.undef;
			if ( decl.init ) value = yield * this.branch(decl.init,s);
			s.add(decl.id.name, value);
		}
		return Value.undef;
	}

	*evaluateWhileStatement(n,s) {
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			while ( (yield * that.branch(n.test,s)).truthy ) {
				last = yield that.branchFrame('continue', n.body, s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	/**
	 * @private
	 */
	dispatch(n,s) {
		switch ( n.type ) {
			case "ArrayExpression": return this.evaluateArrayExpression(n,s);
			case "ArrowFunctionExpression": return this.evaluateFunctionExpression(n,s);
			case "AssignmentExpression": return this.evaluateAssignmentExpression(n,s);
			case "BinaryExpression": return this.evaulateBinaryExpression(n,s);
			case "BreakStatement": return this.evaluateBreakStatement(n,s);
			case "BlockStatement": return this.evaluateBlockStatement(n,s);
			case "CallExpression": return this.evaluateCallExpression(n,s);
			case "ConditionalExpression": return this.evaluateConditionalExpression(n,s);
			case "DoWhileStatement": return this.evaluateDoWhileStatement(n,s);
			case "ContinueStatement": return this.evaluateContinueStatement(n,s);
			case "EmptyStatement": return this.evaluateEmptyStatement(n,s);
			case "ExpressionStatement": return this.evalutaeExpressionStatement(n,s);
			case "ForStatement": return this.evaluateForStatement(n,s);
			case "ForInStatement": return this.evaluateForInStatement(n,s);
			case "FunctionDeclaration": return this.evaluateFunctionDeclaration(n,s);
			case "FunctionExpression": return this.evaluateFunctionExpression(n,s);
			case "Identifier": return this.evaluateIdentifier(n,s);
			case "IfStatement": return this.evaluateIfStatement(n,s);
			case "LabeledStatement": return this.evaluateLabeledStatement(n,s);
			case "Literal": return this.evaulateLiteral(n,s);
			case "LogicalExpression": return this.evaluateLogicalExpression(n,s);
			case "MemberExpression": return this.evaluateMemberExpression(n,s);
			case "NewExpression": return this.evaluateCallExpression(n,s);
			case "ObjectExpression": return this.evaluateObjectExpression(n,s);
			case "Program": return this.evaluateProgram(n,s);
			case "ReturnStatement": return this.evaluateReturnStatement(n,s);
			case "SequenceExpression": return this.evaluateSequenceExpression(n,s);
			case "ThisExpression": return this.evaluateThisExpression(n,s);
			case "ThrowStatement": return this.evaluateThrowStatement(n,s);
			case "TryStatement": return this.evaluateTryStatement(n,s);
			case "UnaryExpression": return this.evaulateUnaryExpression(n,s);
			case "UpdateExpression": return this.evaluateUpdateExpression(n,s);
			case "VariableDeclaration": return this.evaluateVariableDeclaration(n,s);
			case "WhileStatement": return this.evaluateWhileStatement(n,s);
			default:
				throw new Error("Unknown AST Node Type: " + n.type);
		}
	}

	generator() {
		return {next: this.nextFn, throw: (e) => { throw e; }};
	}

	/**
	 * @private
	 */

	*branch(n,s) {
		let gen = this.dispatch(n,s);
		let oldAST = this.frames[0].ast;
		this.frames[0].ast = n;
		let result = gen.next();
		while ( !result.done ) {
			let down = yield result.value;
			result = gen.next(down);
		}
		yield result.value;
		this.frames[0].ast = oldAST;
		//yield result.value;
		return result.value;
	}

	branchFrame(type, n,s) {
		return this.pushFrame({generator: this.branch(n,s), type: type, scope: s});
	}
}

module.exports = Evaluator;