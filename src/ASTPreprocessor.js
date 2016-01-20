"use strict";

function invokeCB(o, name) {
	if ( !(name in o ) ) return;
	var args = Array.prototype.slice.call(arguments, 2);
	o[name].apply(o, args);
}

class ASTPreprocessor {

	static process(ast) {
		let nast = JSON.parse(JSON.stringify(ast));
		ASTPreprocessor.processInPlace(nast);
		return nast;
	}

	static processInPlace(ast) {
		new ASTPreprocessor(ast).start();
	}

	static *walker(ast, cbs, parent) {
		var me = (a) => ASTPreprocessor.walker(a, cbs, ast);
		invokeCB(cbs, 'enter', ast);
		invokeCB(cbs, 'enter' + ast.type, ast);
		if ( parent ) ast.parent = parent;
		switch ( ast.type ) {
			case "Program":
				for ( let e of ast.body ) yield * me(e);
				break;
			case "BlockStatement":
				for ( let e of ast.body ) yield * me(e);
				break;
			case "WhileStatement":
			case "DoWhileStatement":
				if ( ast.test ) yield * me(ast.test);
				yield * me(ast.body);
				break;
			case "VariableDeclaration":
				for ( let e of ast.declarations ) yield * me(e);
				break;
			case "VariableDeclarator":
				invokeCB(cbs, 'decl', ast);
				if ( ast.init ) yield * me(ast.init);
				break;
			case "FunctionDeclaration":
				invokeCB(cbs, 'decl', ast);
				invokeCB(cbs, 'enterFunction', ast);
				yield * me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;

			case "FunctionExpression":
				invokeCB(cbs, 'enterFunction', ast);
				yield * me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;

			default:
				for (var p in ast) {
					if ( p === "parent" ) continue;
					if ( !ast[p] ) continue;
					if ( ast[p].type ) yield * me(ast[p]);
				}				
		}

		
		invokeCB(cbs, 'exit' + ast.type, ast);
		invokeCB(cbs, 'exit', ast);
	}


	constructor(ast) {
		this.ast = ast;
		this.gen = ASTPreprocessor.walker(ast, this);
	}

	start() {
		this.counter = 0;
		this.depth = 0;
		this.scopeStack = [];
		this.varStack = [];
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
		this.log("Entering", a.type);
	}

	decl(a) {
		if ( a.parent.type == "VariableDeclaration" && a.parent.kind != "var" ) return;
		this.varStack[0][a.id.name] = a;
	}

	enterProgram(a) {
		let scope = Object.create(null);
		a.vars = Object.create(null);
		this.scopeStack.unshift(scope);
		this.varStack.unshift(a.vars);
	}

	enterFunction(a) {
		let scope = Object.create(this.scopeStack[0]);
		this.scopeStack.unshift(scope);
		a.vars = Object.create(null);
		this.varStack.unshift(a.vars);
	}

	exitFunction(a) {
		this.scopeStack.shift();
		var vars = this.varStack.shift();
		this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exitProgram(a) {
		this.scopeStack.shift();
		var vars = this.varStack.shift();
		this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exit(a) {
		this.log("Exiting", a.type);
		--this.depth;
	}

}

module.exports = ASTPreprocessor;