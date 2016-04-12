'use strict';

const Evaluator = require('./Evaluator');
const Realm = require('./Realm');
const Scope = require('./Scope');
const Value = require('./Value');
const BridgeValue = require('./values/BridgeValue');
const ASTPreprocessor = require('./ASTPreprocessor');
const FutureValue = require('./values/FutureValue');
const EasyNativeFunction = require('./values/EasyNativeFunction');

let defaultOptions = {
	strict: false,
	foreignObjectMode: 'link',
	addInternalStack: false,
	executionLimit: Infinity,
	exposeEsperGlobal: true
};

/**
 * Container class for all of esper.
 */
class Engine {

	constructor(options) {
		options = options || {};
		this.options = {};
		for ( var k in defaultOptions ) {
			if ( k in options ) this.options[k] = options[k];
			else this.options[k] = defaultOptions[k];
		}
		this.realm = new Realm(this.options);
	}

	/**
	 * Evalute `code` and return a promise for the result.
	 *
	 * @access public
	 * @param {string} code - String of code to evaulate
	 * @return {Promise<Value>} - The result of execution, as a promise.
	 */
	eval(code) {
		let ast = this.realm.parser(code);
		return this.evalAST(ast);
	}

	/**
	 * Evalute `code` and return a the result.
	 *
	 * @access public
	 * @param {string} code - String of code to evaulate
	 * @return {Value} - The result of execution
	 */
	evalSync(code) {
		let ast = this.realm.parser(code);
		return this.evalASTSync(ast);
	}

	/**
	 * Evalute `ast` and return a promise for the result.
	 *
	 * @access public
	 * @param {Node} ast - ESTree AST representing the code to run.
	 * @return {Value} - The result of execution, as a promise.
	 */
	evalAST(ast) {
		//console.log(escodegen.generate(ast));
		this.loadAST(ast);
		let p = this.run();
		p.then(() => delete this.generator);
		return p;
	}

	evalASTSync(ast) {
		this.loadAST(ast);
		let value = this.runSync();
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
		if ( !this.generator ) throw new Error('No code loaded to step');
		let value = this.generator.next();
		return value.done;
	}

	run() {
		let that = this;
		let steps = 0;
		function handler(value) {
			while ( !value.done ) {
				value = that.generator.next();
				if ( value.value && value.value.then ) {
					return value.value.then(handler);
				}
				if ( ++steps > that.options.executionLimit ) throw 'Execution Limit Reached';
			}
			return value;
		}
		return new Promise(function(resolve, reject) {
			resolve(that.generator.next());
		}).then(handler).then((v) => v.value);
	}

	runSync() {
		let steps = 0;
		let value = this.generator.next();
		while ( !value.done ) {
			value = this.generator.next();
			if ( value.value && value.value.then ) throw "Can't deal with futures when running in sync mode";
			if ( ++steps > this.options.executionLimit ) throw 'Execution Limit Reached';
		}
		return value.value;
	}



	/**
	 * Refrence to the global scope.
	 * @return {Scope}
	 */
	get globalScope() {
		return this.realm.globalScope;
	}

	addGlobal(name, what) {
		this.globalScope.add(name, this.realm.makeForForeignObject(what));
	}

	addGlobalFx(name, what) {
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
			//TODO: Make sure we dont await as it will loop FOREVER.
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
			var realThis = realm.makeForForeignObject(this);
			var realArgs = new Array(arguments.length);
			for ( let i = 0; i < arguments.length; ++i ) {
				realArgs[i] = realm.makeForForeignObject(arguments[i]);
			}


			let c = val.call(realThis, realArgs, scope);
			that.evaluator.pushFrame({generator: c, type: 'program', scope: scope, ast: null});
			let gen = that.evaluator.generator();

			let value = gen.next();
			let steps = 0;

			while ( !value.done ) {
				if ( !shouldYield ) yield;
				else if ( that.evaluator.frames[0].type == 'await' ) yield;
				else {
					var yieldValue = shouldYield(that);
					if ( yieldValue !== false ) yield yieldValue;
				}
				value = gen.next();
				if ( ++steps > that.options.executionLimit ) throw 'Execution Limit Reached';
			}
			return value.value.toNative();
		};
	}

}

module.exports = Engine;
