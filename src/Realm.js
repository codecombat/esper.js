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
const EasyNativeFunction = require('./values/EasyNativeFunction');

class EvalFunction extends ObjectValue {

	constructor(realm) {
		super(realm);
	}

	*call(thiz, args, scope) {
		let code = args[0].toNative().toString();
		let ast;
		try {
			let oast = scope.realm.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			var eo = e;
			if ( eo.description == "Invalid left-hand side in assignment" ) eo = new ReferenceError(eo.description);
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(eo));
		}
		let bak = yield ['branch', 'eval', ast, scope];
		//console.log("EVALED: ", bak);
		return bak;
	}
}



/**
 * Represents a javascript execution environment including
 * it's scopes and standard libraries.
 */
class Realm {
	print() {
		console.log.apply(console, arguments);
	}
	
	constructor(options) {
		this.parser = this.parser = (code) => esprima.parse(code, {loc: true});
		this.NaN = this.fromNative(NaN);


		/** @type {Value} */
		
		this.ObjectPrototype =  new (require('./stdlib/ObjectPrototype'))(this);
		this.FunctionPrototype = new (require('./stdlib/FunctionPrototype'))(this);
		this.Object = new (require('./stdlib/Object.js'))(this);
		this.ObjectPrototype._init();
		this.FunctionPrototype._init();
		this.Object.setPrototype(this.ObjectPrototype);

		//TODO: Do this when we can make the property non enumerable.
		//this.ObjectPrototype.set('constructor', this.Object); //Chickens and egs...
		
		this.Function = new (require('./stdlib/Function'))(this);

		/** @type {Math} */
		this.Math = new (require('./stdlib/Math.js'))(this);

		/** @type {NumberPrototype} */
		this.NumberPrototype = new (require('./stdlib/NumberPrototype'))(this);

		/** @type {StringPrototype} */
		this.StringPrototype = new (require('./stdlib/StringPrototype'))(this);

		this.ArrayPrototype = new (require('./stdlib/ArrayPrototype'))(this);
		this.Array = new (require('./stdlib/Array'))(this);
		this.String = new (require('./stdlib/String'))(this);
		this.Number = new (require('./stdlib/Number'))(this);

		this.RegExpPrototype = new (require('./stdlib/RegExpPrototype'))(this);
		this.RegExp = new (require('./stdlib/RegExp'))(this);

		this.Esper = new (require('./stdlib/Esper'))(this);

		/** @type {Value} */
		this.console = new (require('./stdlib/Console'))(this);

		let scope = new Scope(this);
		scope.object.clazz = "global";
		scope.strict = options.strict || false;
		let that = this;
		var printer = EasyNativeFunction.makeForNative(this, function() {
			that.print.apply(that, arguments);
		});
		scope.set('print', printer);
		scope.set('log', printer);

		scope.addConst('NaN', this.fromNative(NaN));
		scope.addConst('Infinity', this.fromNative(Infinity));

		scope.set('console', this.console);
		//scope.set('JSON', this.fromNative(JSON));
		scope.set('Esper', this.Esper);
		scope.set('Math', this.Math);
		
		scope.set('Number', this.Number);
		scope.set('Object', this.Object);
		scope.set('Function', this.Function);
		scope.set('Array', this.Array);
		scope.set('String', this.String);
		scope.set('RegExp', this.RegExp);
		scope.set('TypeError', this.fromNative(TypeError));
		scope.set('SyntaxError', this.fromNative(SyntaxError));
		scope.set('ReferenceError', this.fromNative(ReferenceError));
		scope.set('RangeError', this.fromNative(RangeError));		
		scope.set('Error', this.fromNative(Error));

		scope.set('parseInt', EasyNativeFunction.makeForNative(this, parseInt));
		scope.set('parseFloat', EasyNativeFunction.makeForNative(this, parseFloat));
		scope.set('isNaN', EasyNativeFunction.makeForNative(this, isNaN));
		scope.set('isFinite', EasyNativeFunction.makeForNative(this, isFinite));

		//scope.set('Date', this.fromNative(Date));
		scope.set('eval', new EvalFunction(this));
		scope.set('assert', new (require('./stdlib/Assert'))(this));
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

module.exports = Realm;
