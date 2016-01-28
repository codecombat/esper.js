"use strict";

/**
 * @flow
 */

const Scope = require('./Scope');
const Value = require('./Value');
const esprima = require('esprima');
const CompletionRecord = require('./CompletionRecord');
const ObjectValue = require('./values/ObjectValue');
const ASTPreprocessor = require('./ASTPreprocessor');

class EvalFunction extends ObjectValue {

	constructor(env) {
		super(env);
	}

	*call(thiz, args, evaluator, scope) {
		let code = args[0].toNative().toString();
		let ast;
		try {
			let oast = scope.env.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			var eo = e;
			if ( eo.description == "Invalid left-hand side in assignment" ) eo = new ReferenceError(eo.description);
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(eo));
		}
		let bak = yield evaluator.branchFrame('eval', ast, scope);
		//console.log("EVALED: ", bak);
		return bak;
	}
}

/**
 * Represents a javascript execution environment including
 * it's scopes and standard libraries.
 */
class Environment {
	print() {
		console.log.apply(console, arguments);
	}
	
	constructor(options) {
		this.parser = this.parser = (code) => esprima.parse(code, {loc: true});
		this.NaN = this.fromNative(NaN);

		/** @type {Value} */
		this.console = this.fromNative(console);
		/** @type {Value} */
		this.Math = new (require('./stdlib/Math.js'))(this);
		/** @type {Value} */
		
		this.ObjectPrototype =  new (require('./stdlib/ObjectPrototype'))(this);
		this.FunctionPrototype = new (require('./stdlib/FunctionPrototype'))(this);
		this.Object = new (require('./stdlib/Object.js'))(this);
		this.ObjectPrototype.set('constructor', this.Object); //Chickens and egs...
		this.Function = new (require('./stdlib/Function'))(this);
		this.Array = new (require('./stdlib/Array'))(this);

		let scope = new Scope(this);
		scope.strict = options.strict || true;
		let that = this;
		var printer = this.fromNative(function() {
			that.print.apply(that, arguments);
		});
		scope.set('print', printer);
		scope.set('log', printer);
		scope.set('NaN', this.fromNative(NaN));
		scope.set('Infinity', this.fromNative(Infinity));

		scope.set('console', this.console);
		scope.set('JSON', this.fromNative(JSON));
		scope.set('Math', this.Math);
		scope.set('parseInt', this.fromNative(parseInt));
		scope.set('Number', this.fromNative(Number));
		scope.set('Object', this.Object);
		scope.set('Function', this.Function);
		scope.set('Array', this.Array);
		scope.set('String', this.fromNative(String));
		scope.set('TypeError', this.fromNative(TypeError));
		scope.set('Error', this.fromNative(TypeError));
		scope.set('isNaN', this.fromNative(isNaN));
		scope.set('Date', this.fromNative(Date));
		scope.set('eval', new EvalFunction(this));
		scope.thiz = scope.object;
		/** @type {Scope} */
		this.globalScope = scope;
	}

	valueFromNative(native) {
		return Value.fromNative(native, this);
	}
	fromNative(native) {
		return Value.fromNative(native, this);
	}
};

module.exports = Environment;
