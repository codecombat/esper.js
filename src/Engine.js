'use strict';

const Evaluator = require('./Evaluator');
const Realm = require('./Realm');
const Scope = require('./Scope');
const Value = require('./Value');
const BridgeValue = require('./values/BridgeValue');
const ASTPreprocessor = require('./ASTPreprocessor');
const FutureValue = require('./values/FutureValue');
const EasyNativeFunction = require('./values/EasyNativeFunction');
const ClosureValue = require('./values/ClosureValue');

let defaultOptions = {
	strict: false,
	foreignObjectMode: 'link',
	addInternalStack: false,
	executionLimit: Infinity,
	exposeEsperGlobal: true,
	extraErrorInfo: false,
	addExtraErrorInfoToStacks: false,
	bookmarkInvocationMode: 'error',
	yieldPower: 5,
	debug: false
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
		this.evaluator = new Evaluator(this.realm, null, this.globalScope);
		if ( this.options.debug ) {
			this.evaluator.debug = true;
		}

		this.evaluator.defaultYieldPower = this.options.yieldPower;
		this.evaluator.yieldPower = this.options.yieldPower;
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
		return this.evalAST(ast, {source: code});
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
		return this.evalASTSync(ast, {source: code});
	}

	/**
	 * Evalute `ast` and return a promise for the result.
	 *
	 * @access public
	 * @param {Node} ast - ESTree AST representing the code to run.
	 * @param {string} codeRef - The code that was used to generate the AST.
	 * @return {Value} - The result of execution, as a promise.
	 */
	evalAST(ast, opts) {
		//console.log(escodegen.generate(ast));
		this.loadAST(ast, opts);
		let p = this.run();
		p.then(() => delete this.generator);
		return p;
	}

	evalASTSync(ast, opts) {
		this.loadAST(ast, opts);
		let value = this.runSync();
		delete this.generator;
		return value;
	}

	loadAST(ast, opts) {
		let past = ASTPreprocessor.process(ast, opts);
		this.evaluator.frames = [];
		this.evaluator.pushAST(past, this.globalScope);
		this.evaluator.ast = past;
		this.generator = this.evaluator.generator();
	}

	load(code) {
		let ast = this.realm.parser(code);
		this.loadAST(ast, code);
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
					return value.value.then((v) => {
						return {done: false, value: v};
					});
				}
				if ( ++steps > that.options.executionLimit ) throw new Error('Execution Limit Reached');
			}
			return value;
		}
		return new Promise(function(resolve, reject) {
			try {
				let  value = that.generator.next();
				resolve(value);
			} catch ( e ) {
				reject(e);
			}
		}).then(handler).then((v) => v.value);
	}

	runSync() {
		let steps = 0;
		let value = this.generator.next();
		while ( !value.done ) {
			value = this.generator.next();
			if ( value.value && value.value.then ) throw new Error('Can\'t deal with futures when running in sync mode');
			if ( ++steps > this.options.executionLimit ) throw new Error('Execution Limit Reached');
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

	addGlobal(name, what, opts) {
		opts = opts || {};
		if ( !(what instanceof Value) ) what = this.realm.makeForForeignObject(what);
		if ( !opts.const ) this.globalScope.add(name, what);
		else this.globalScope.addConst(name, what);
	}

	addGlobalFx(name, what, opts) {
		var x  = EasyNativeFunction.makeForNative(this.realm, what);
		this.addGlobal(name, x, opts);
	}

	addGlobalValue(name, what, opts) {
		this.addGlobal(name, Value.fromNative(what, this.realm), opts);
	}

	addGlobalBridge(name, what, opts) {
		this.addGlobal(name, new BridgeValue(what, this.realm), opts);
	}

	fetchFunctionSync(name, shouldYield) {
		var genfx = this.fetchFunction(name, shouldYield);
		return function() {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	fetchFunction(name, shouldYield) {
		var val = this.globalScope.get(name);
		return this.makeFunctionFromClosure(val, shouldYield);
	}

	functionFromSource(source, shouldYield) {
		let code = source;
		let ast = this.realm.parser(code, {inFunctionBody: true});
		return this.functionFromAST(ast, shouldYield);
	}

	functionFromAST(ast, shouldYield, source) {
		let past = {
			type: 'FunctionExpression',
			body: {type: 'BlockStatement', body: ast.body},
			params: [],
		};
		past = ASTPreprocessor.process(past, {source: source});
		let fx = new ClosureValue(past, this.globalScope);
		return this.makeFunctionFromClosure(fx, shouldYield, this.evaluator);
	}

	functionFromSourceSync(source, shouldYield) {
		let genfx = this.functionFromSource(source, shouldYield);
		return function() {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	functionFromASTSync(ast, shouldYield, source) {
		let genfx = this.functionFromAST(ast, shouldYield, source);
		return function() {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	makeFunctionFromClosure(val, shouldYield, evalu) {

		var realm = this.realm;
		var scope = this.globalScope;
		var that = this;
		let evaluator = evalu || this.evaluator;
		if ( !evaluator ) throw new Error("Evaluator is falsey");
		if ( !val ) return;

		return function*() {
			var realThis = realm.makeForForeignObject(this);
			var realArgs = new Array(arguments.length);
			for ( let i = 0; i < arguments.length; ++i ) {
				realArgs[i] = realm.makeForForeignObject(arguments[i]);
			}


			let c = val.call(realThis, realArgs, scope);
			evaluator.pushFrame({type: 'program', generator: c, scope: scope});
			let gen = evaluator.generator();

			let last = yield * that.filterGenerator(gen, shouldYield, evaluator);
			if ( last ) return last.toNative();
		};
	}

	/**
	 * Returns a new engine that executes in the same Realm.  Useful
	 * for creating threads / coroutines
	 * @return {Engine}
	 */
	fork() {
		let engine = new Engine(this.options);
		var scope = this.globalScope;

		engine.realm = this.realm;

		engine.evaluator = this.makeEvaluatorClone();
		return engine;
	}

	makeEvaluatorClone() {
		let evaluator = new Evaluator(this.realm, this.evaluator.ast, this.globalScope);
		evaluator.frames = [];
		if ( this.evaluator.insturment ) {
			evaluator.insturment = this.evaluator.insturment;
		}
		if ( this.evaluator.debug ) {
			evaluator.debug = true;
		}
		return evaluator;
	}

	*filterGenerator(gen, shouldYield, evaluator) {
		let value = gen.next();
		let steps = 0;
		if ( !evaluator ) throw new Error("Evaluator is falsey");
		while ( !value.done ) {
			if ( !shouldYield ) yield;
			else if ( evaluator.topFrame.type == 'await' ) {
				if ( !value.value.resolved ) yield;
			} else {
				var yieldValue = shouldYield(this, evaluator, value.value);
				if ( yieldValue !== false ) yield yieldValue;
			}
			value = gen.next(value.value);
			if ( ++steps > this.options.executionLimit ) throw new Error('Execution Limit Reached');
		}
		return value.value;
	}
}

module.exports = Engine;
