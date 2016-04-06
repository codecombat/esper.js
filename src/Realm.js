'use strict';

const Scope = require('./Scope');
const Value = require('./Value');
const esprima = require('esprima');
const CompletionRecord = require('./CompletionRecord');
const ObjectValue = require('./values/ObjectValue');
const PrimitiveValue = require('./values/PrimitiveValue.js');
const StringValue = require('./values/StringValue');
const LinkValue = require('./values/LinkValue');
const SmartLinkValue = require('./values/SmartLinkValue');
const BridgeValue = require('./values/BridgeValue');
const ASTPreprocessor = require('./ASTPreprocessor');
const EasyNativeFunction = require('./values/EasyNativeFunction');
const PropertyDescriptor = require('./values/PropertyDescriptor');

class EvalFunction extends ObjectValue {

	constructor(realm) {
		super(realm);
	}

	*call(thiz, args, scope) {
		let cv = Value.undef;
		if ( args.length > 0 ) cv = args[0];
		if ( !(cv instanceof StringValue) ) return cv;
		let code = yield * cv.toStringNative();
		let ast;
		try {
			let oast = scope.realm.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			var eo;

			if ( e.description == 'Invalid left-hand side in assignment' ) eo = new ReferenceError(e.description, e.fileName, e.lineNumber);
			else eo = new SyntaxError(e.description, e.fileName, e.lineNumber);

			if ( e.stack ) eo.stack = e.stack;

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

	parser(code) {
		return esprima.parse(code, {loc: true, range: true});
	}

	constructor(options) {
		this.options = options || {};
		/** @type {Value} */
		this.ObjectPrototype =  new (require('./stdlib/ObjectPrototype'))(this);
		this.FunctionPrototype = new (require('./stdlib/FunctionPrototype'))(this);
		this.Object = new (require('./stdlib/Object.js'))(this);
		this.ObjectPrototype._init();
		this.FunctionPrototype._init();
		this.Object.setPrototype(this.ObjectPrototype);
		this.FunctionPrototype.setPrototype(this.ObjectPrototype);

		//TODO: Do this when we can make the property non enumerable.
		this.ObjectPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Object, false));

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


		this.BooleanPrototype = new (require('./stdlib/BooleanPrototype'))(this);
		this.Boolean = new (require('./stdlib/Boolean'))(this);

		this.RegExpPrototype = new (require('./stdlib/RegExpPrototype'))(this);
		this.RegExp = new (require('./stdlib/RegExp'))(this);

		this.Esper = new (require('./stdlib/Esper'))(this);
		this.ErrorPrototype = new (require('./stdlib/ErrorPrototype'))(this);
		this.Error = new (require('./stdlib/Error'))(this);
		this.ErrorPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Error, false));

		/** @type {Value} */
		this.console = new (require('./stdlib/Console'))(this);

		let scope = new Scope(this);
		scope.object.clazz = 'global';
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
		scope.set('JSON', new (require('./stdlib/JSON'))(this));
		scope.set('Esper', this.Esper);
		scope.set('Math', this.Math);

		scope.set('Number', this.Number);
		scope.set('Boolean', this.Boolean);
		scope.set('Object', this.Object);
		scope.set('Function', this.Function);
		scope.set('Array', this.Array);
		scope.set('String', this.String);
		scope.set('RegExp', this.RegExp);

		scope.set('Error', this.Error);
		scope.set('TypeError', this.TypeError = this.Error.makeErrorType(TypeError));
		scope.set('SyntaxError', this.SyntaxError = this.Error.makeErrorType(SyntaxError));
		scope.set('ReferenceError', this.ReferenceError = this.Error.makeErrorType(ReferenceError));
		scope.set('RangeError', this.RangeError = this.Error.makeErrorType(RangeError));
		scope.set('EvalError', this.EvalError = this.Error.makeErrorType(EvalError));
		scope.set('URIError', this.URIError = this.Error.makeErrorType(URIError));


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

	lookupWellKnown(v) {
		if ( v === Object ) return this.Object;
		if ( v === Object.prototype ) return this.ObjectPrototype;
		if ( v === Function ) return this.Function;
		if ( v === Function.prototype ) return this.FunctionPrototype;
		if ( v === Math ) return this.Math;
		if ( v === Number ) return this.Number;
		if ( v === Number.prototype ) return this.NumberPrototype;
		if ( v === String ) return this.String;
		if ( v === String.prototype ) return this.StringPrototype;
		if ( v === Array ) return this.Array;
		if ( v === Array.prototype ) return this.ArrayPrototype;
		if ( v === RegExp ) return this.RegExp;
		if ( v === RegExp.prototype ) return this.RegExpPrototype;
		if ( typeof console !== 'undefined' && v === console ) return this.console;

	}

	valueFromNative(native) {
		return Value.fromNative(native, this);
	}

	fromNative(native) {
		return Value.fromNative(native, this);
	}

	makeForForeignObject(native) {
		if ( native instanceof Value ) return native;
		switch ( this.options.foreignObjectMode ) {
			case 'bridge':
				return BridgeValue.make(native, this);
			case 'smart':
				return SmartLinkValue.make(native, this);
			case 'link':
			default:
				return LinkValue.make(native, this);
		}
	}
}

module.exports = Realm;
