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

class EvalFunction extends Value {
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
		console.log("EVALED: ", bak);
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
		this.NaN = this.valueFromNative(NaN);

		/** @type {Value} */
		this.console = this.valueFromNative(console);
		/** @type {Value} */
		this.Math = new (require('./stdlib/Math.js'))(this);
		/** @type {Value} */
		
		this.ObjectPrototype =  new (require('./stdlib/ObjectPrototype.js'))(this);
		this.FunctionPrototype = new (require('./stdlib/FunctionPrototype.js'))(this);
		this.Object =  new (require('./stdlib/Object.js'))(this);
		this.ObjectPrototype.set('constructor', this.Object); //Chickens and egs...

		let scope = new Scope(this);
		scope.strict = options.strict || true;
		let that = this;
		var printer = this.valueFromNative(function() {
			that.print.apply(that, arguments);
		});
		scope.set('print', printer);
		scope.set('log', printer);
		scope.set('NaN', this.valueFromNative(NaN));
		scope.set('Infinity', this.valueFromNative(Infinity));

		scope.set('console', this.console);
		scope.set('JSON', this.valueFromNative(JSON));
		scope.set('Math', this.Math);
		scope.set('parseInt', this.valueFromNative(parseInt));
		scope.set('Number', this.valueFromNative(Number));
		scope.set('Object', this.Object);
		scope.set('Array', this.valueFromNative(Array));
		scope.set('String', this.valueFromNative(String));
		scope.set('TypeError', this.valueFromNative(TypeError));
		scope.set('Error', this.valueFromNative(TypeError));
		scope.set('isNaN', this.valueFromNative(isNaN));
		scope.set('Date', this.valueFromNative(Date));
		scope.set('eval', new EvalFunction());
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