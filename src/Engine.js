"use strict";

/**
 * @flow
 */

const Evaluator = require('./Evaluator');
const Realm = require('./Realm');
const Scope = require('./Scope');
const Value = require('./Value');
const BridgeValue = require('./values/BridgeValue');
const ASTPreprocessor = require('./ASTPreprocessor');

function log(what) {
	console.log("LOG", what);
}


/**
 * Container class for all of esper.
 */
class Engine {

	constructor(options) {
		options = options || {};
		this.realm = new Realm(options);
	}

	/**
	 * Evalute `code` and return a promise for the result.
	 * @access public
	 * @param {string} code - String of code to evaulate
	 * @return {Promise<*>} - The result of execution, as a promise.
	 */
	eval(code) {
		let ast = this.realm.parser(code);
		return this.evalAST(ast);
	}


	evalSync(code) {
		let ast = this.realm.parser(code);
		return this.evalASTSync(ast);
	}


	evalAST(ast) {
		//console.log(escodegen.generate(ast));
		this.loadAST(ast);
		
		let value = this.run();
		delete this.generator;
		return Promise.resolve(value);
	}

	evalASTSync(ast) {
		this.loadAST(ast);
		let value = this.run();
		delete this.generator;
		return value;
	}

	loadAST(ast) {
		let past = ASTPreprocessor.process(ast);
		this.evaluator = new Evaluator(this.realm, past, this.globalScope);
		this.generator = this.evaluator.generator();
	}

	load(code) {
		let ast = this.realm.parser(code);
		this.loadAST(ast);
	}

	step() {
		if ( !this.generator ) throw new Error("No code loaded to step");
		let value = this.generator.next();
		return value.done;
	}

	run() {
		let steps = 0;
		let value = this.generator.next();
		while ( !value.done ) {
			value = this.generator.next();
			if ( ++steps > 10000000 ) throw "Inf loop. detected";
		}
		return value.value;
	}



	/**
	 * @return {Scope}
	 */
	get globalScope() {
		return this.realm.globalScope;
	}

	addGlobal(name, what) {
		this.globalScope.add(name, this.realm.makeLink(what));
	}

	addGlobalFx(name, what) {
		const EasyNativeFunction = require('./values/EasyNativeFunction');
		var x  = EasyNativeFunction.makeForNative(this.realm, what);
		this.globalScope.add(name, x);
	}



	addGlobalValue(name, what) {
		this.globalScope.add(name, Value.fromNative(what, this.realm));
	}
	addGlobalBridge(name, what) {
		this.globalScope.add(name, new BridgeValue(what, this.realm));
	}

	fetchFunctionSync(name, shouldYield) {
		var genfx = this.fetchFunction(name, shouldYield);
		return function() {
			let gen = genfx.call(this, arguments);
			let val = gen.next();
			while (!val.done) val = gen.next();		
			return val.value;	
		};
	}

	fetchFunction(name, shouldYield) {
		var val = this.globalScope.get(name);
		var realm = this.realm;
		var scope = this.globalScope;
		var that = this;
		if ( !val ) return;

		return function*() {
			var realThis = realm.makeLink(this);
			var realArgs = new Array(arguments.length);
			for ( let i = 0; i < arguments.length; ++i ) {
				realArgs[i] = realm.makeLink(arguments[i]);
			}


			let c = val.call(realThis, realArgs, scope);
			that.evaluator.pushFrame({generator: c, type: 'program', scope: scope, ast: null});
			let gen = that.evaluator.generator();

			let value = gen.next();
			let steps = 0;

			while ( !value.done ) {
				if ( !shouldYield ) yield;
				else {
					var yieldValue = shouldYield(that);
					if ( yieldValue !== false ) yield yieldValue;
				}
				value = gen.next();
				if ( ++steps > 100000 ) throw "Inf loop. detected";
			}		
			return value.value.toNative();
		};
	}

}

module.exports = Engine;