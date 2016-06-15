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
const EvaluatorInstruction = require('./EvaluatorInstruction');

const ObjectPrototype = require('./stdlib/ObjectPrototype');
const FunctionPrototype = require('./stdlib/FunctionPrototype');
const ObjectClass = require('./stdlib/Object');
const FunctionClass = require('./stdlib/Function');
const NumberPrototype = require('./stdlib/NumberPrototype');

const StringPrototype = require('./stdlib/StringPrototype');

const ArrayPrototype = require('./stdlib/ArrayPrototype');
const ArrayClass = require('./stdlib/Array');
const StringClass = require('./stdlib/String');
const NumberClass = require('./stdlib/Number');


const BooleanPrototype = require('./stdlib/BooleanPrototype');
const BooleanClass = require('./stdlib/Boolean');
const RegExpPrototype = require('./stdlib/RegExpPrototype');
const RegExpClass = require('./stdlib/RegExp');
const EsperClass = require('./stdlib/Esper');
const ErrorPrototype = require('./stdlib/ErrorPrototype');
const ErrorClass = require('./stdlib/Error');

const AssertClass = require('./stdlib/Assert');
const MathClass = require('./stdlib/Math.js');
const ConsoleClass = require('./stdlib/Console');
const JSONClass = require('./stdlib/JSON');

class EvalFunction extends ObjectValue {

	constructor(realm) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
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
			return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(eo, scope.realm));
		}

		//TODO: Dont run in the parent scope if we are called indirectly
		let bak = yield EvaluatorInstruction.branch('eval', ast, scope.parent ? scope.parent : scope);
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

	parser(code, options) {
		options = options || {};
		let opts = {loc: true, range: true};
		if ( options.inFunctionBody ) {
			opts.tolerant = true;
			opts.allowReturnOutsideFunction = true;
		}

		let ast = esprima.parse(code, opts);
		let errors = [];
		if ( ast.errors ) {
			errors = ast.errors.filter((x) => {
				if ( options.inFunctionBody && x.message === 'Illegal return statement' ) return false;
			});
		}
		delete ast.errors;
		if ( errors.length > 0 ) throw errors[0];
		return ast;
	}

	constructor(options) {
		this.options = options || {};
		/** @type {Value} */
		this.ObjectPrototype =  new ObjectPrototype(this);
		this.FunctionPrototype = new FunctionPrototype(this);
		this.Object = new ObjectClass(this);
		this.ObjectPrototype._init(this);
		this.FunctionPrototype._init(this);
		this.Object.setPrototype(this.ObjectPrototype);
		this.FunctionPrototype.setPrototype(this.ObjectPrototype);

		//TODO: Do this when we can make the property non enumerable.
		this.ObjectPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Object, false));

		this.Function = new FunctionClass(this);

		/** @type {Math} */
		this.Math = new MathClass(this);

		/** @type {NumberPrototype} */
		this.NumberPrototype = new NumberPrototype(this);

		/** @type {StringPrototype} */
		this.StringPrototype = new StringPrototype(this);

		this.ArrayPrototype = new ArrayPrototype(this);
		this.Array = new ArrayClass(this);
		this.String = new StringClass(this);
		this.Number = new NumberClass(this);


		this.BooleanPrototype = new BooleanPrototype(this);
		this.Boolean = new BooleanClass(this);

		this.RegExpPrototype = new RegExpPrototype(this);
		this.RegExp = new RegExpClass(this);

		this.Esper = new EsperClass(this);
		this.ErrorPrototype = new ErrorPrototype(this);
		this.Error = new ErrorClass(this);
		this.ErrorPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Error, false));

		/** @type {Value} */
		this.console = new ConsoleClass(this);

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
		scope.set('JSON', new JSONClass(this));

		if ( options.exposeEsperGlobal ) {
			scope.set('Esper', this.Esper);
		}

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
		scope.set('assert', new AssertClass(this));

		scope.thiz = scope.object;
		this.importCache = new WeakMap();
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

	import(native, modeHint) {
		if ( native instanceof Value ) return native;
		if ( native === undefined ) return Value.undef;

		let prim = Value.fromPrimativeNative(native);
		if ( prim ) return prim;

		//if ( this.importCache.has(native) ) {
		//	return this.importCache.get(native);
		//}

		if ( Value.hasBookmark(native) ) {
			return Value.getBookmark(native);
		}

		let result;
		switch ( modeHint || this.options.foreignObjectMode ) {
			case 'bridge':
				result = BridgeValue.make(native, this);
				break;
			case 'smart':
				result = SmartLinkValue.make(native, this);
				break;
			case 'link':
			default:
				result = LinkValue.make(native, this);
				break;
		}

		//this.importCache.set(native, result);
		return result;
	}
}

Realm.prototype.makeForForeignObject = Realm.prototype.import;

module.exports = Realm;
