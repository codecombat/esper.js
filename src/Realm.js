'use strict';

const Scope = require('./Scope');
const Value = require('./Value');
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
const Evaluator = require('./Evaluator');
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
const ProxyClass = require('./stdlib/Proxy');
const SymbolClass = require('./stdlib/Symbol');
const RealmClass = require('./stdlib/Realm');

const esper = require('./index.js');

class EvalFunction extends ObjectValue {

	constructor(realm) {
		super(realm);
		this.realm = realm;
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
			ast = ASTPreprocessor.process(oast, {source: code});
		} catch ( e ) {
			var eo;
			let desc = e.description || e.message;
			if (
				e.name == 'ReferenceError' ||
				(/Invalid left-hand side in/.test(desc) && !/for-in$/.test(desc))
			) eo = new ReferenceError(e.description, e.fileName, e.lineNumber);
			else eo = new SyntaxError(desc, e.fileName, e.lineNumber);

			if ( e.stack ) eo.stack = e.stack;
			return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(eo, scope.realm));
		}

		//TODO: Dont run in the parent scope if we are called indirectly
		let ts = this.realm === scope.realm ? scope : this.realm.globalScope;
		let bak = yield EvaluatorInstruction.branch('eval', ast, ts);
		//console.log("EVALED: ", bak);
		return bak;
	}
}


let timeoutIds = 0;;
class SetTimeoutFunction extends ObjectValue {

	constructor(realm, runtime, isSetInterval) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.runtime = runtime;
		this.isSetInterval = isSetInterval;
	}

	*call(thiz, args, scope) {
		let engine = scope.realm.engine;
		let ev = args[0];
		let evaluator = new Evaluator(scope.realm, null, scope.global);
		let time = args.length > 1 ? 0 + args[1].toNative() : 0;
		let id = timeoutIds++;
		let isSetInterval = this.isSetInterval;

		if ( !ev || ev.jsTypeName !== "function" && ev.jsTypeName !== "string" ) {
			return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(new TypeError('"callback" argument must be a function'), scope.realm));
		}

		evaluator.pushFrame({generator: (function*() {
			while ( true ) {
				yield esper.FutureValue.make(yield * engine.runtime.wait(time));
				if ( ev.jsTypeName == "function" ) {
					let tv = scope.strict ? esper.undef : scope.global.thiz;
					yield * ev.call(tv, args.slice(2), scope.global);
				} else if ( ev.jsTypeName == "string" ) {
					let oast = scope.realm.parser(yield * ev.toStringNative(), {loc: true});
					let ast = ASTPreprocessor.process(oast);
					yield EvaluatorInstruction.branch('eval', ast, scope.global);
				}
				if ( !isSetInterval ) break;
			}
			return Value.undef;
		})(), type: 'invoke'});

		let o = evaluator.generator();
		evaluator.id = id;
		engine.threads.push(o);
		return Value.fromNative(id);
	}
}

class ClearTimeoutFunction extends ObjectValue {

	constructor(realm, runtime) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.runtime = runtime;
	}

	*call(thiz, args, scope) {
		if ( args.length < 1 ) return Value.undef;
		let target = yield * args[0].toIntNative();
		let engine = scope.realm.engine;
					
		for ( let i = 0; i < engine.threads.length; ++i ) {
			if ( engine.threads[i].evaluator.id == target ) {
				let thr = engine.threads.splice(i, 1);
				thr[0].evaluator.dispose.map((x) => x());
				return Value.fromNative(true);
			}
		}
		return Value.fromNative(false);
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

	write() {
		this.print.apply(this, arguments);
	}

	parser(code, options) {
		if ( !esper.languages[this.language] ) {
			throw new Error(`Unknown language ${this.language}. Load the lang-${this.language} plugin?`);
		}
		return esper.languages[this.language].parser(code, options);
	}

	makeLiteralValue(v, n) {
		let lang = esper.languages[this.language];
		if ( lang && lang.makeLiteralValue ) {
			let langv = lang.makeLiteralValue(v, this, n);
			if ( langv ) return langv;
		}
		return this.fromNative(v, n);
	}

	constructor(options, engine) {
		this.engine = engine;
		this.options = options || {};
		this.language = options.language || 'javascript';
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
		this.FunctionPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Function, false));


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
		this.Proxy = new ProxyClass(this);

		this.Esper = new EsperClass(this);
		this.ErrorPrototype = new ErrorPrototype(this);
		this.Error = new ErrorClass(this);
		this.ErrorPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Error, false));

		/** @type {Value} */
		this.console = new ConsoleClass(this);

		this.intrinsics = {
			ObjectPrototype: this.ObjectPrototype,
			ArrayPrototype: this.ArrayPrototype,
			BooleanPrototype: this.BooleanPrototype,
			RegExpPrototype: this.RegExpPrototype,
			FunctionPrototype: this.FunctionPrototype
		};
		this.wellKnownNames = {
			'%ObjectPrototype%': this.ObjectPrototype,
			'%ArrayPrototype%': this.ArrayPrototype,
			'%Esper%': this.Esper
		};

		let scope = new Scope(this);
		scope.object.clazz = 'global';
		scope.object.wellKnownName = '%Global%';
		scope.strict = options.strict || false;
		this.intrinsicScope = scope;

		var printer = EasyNativeFunction.make(this, function*(thiz, args, s) {
			s.realm.print.apply(s.realm, args.map(x => x.toNative()));
		});
		this.addIntrinsic('print', printer);
		this.addIntrinsic('log', printer);

		this.intrinsicScope.addConst('NaN', this.fromNative(NaN));
		this.intrinsicScope.addConst('Infinity', this.fromNative(Infinity));

		this.addIntrinsic('console', this.console);
		this.addIntrinsic('JSON', new JSONClass(this));
		this.addIntrinsic('Symbol', this.SymbolObject = new SymbolClass(this));

		if ( options.exposeEsperGlobal ) {
			scope.set('Esper', this.Esper);
		}

		this.addIntrinsic('Math', this.Math);

		this.addIntrinsic('Number', this.Number);
		this.addIntrinsic('Boolean', this.Boolean);
		this.addIntrinsic('Object', this.Object);
		this.addIntrinsic('Function', this.Function);
		this.addIntrinsic('Array', this.Array);
		this.addIntrinsic('String', this.String);
		this.addIntrinsic('RegExp', this.RegExp);
		this.addIntrinsic('Proxy', this.Proxy);

		this.addIntrinsic('Error', this.Error);
		this.addIntrinsic('TypeError', this.TypeError = this.Error.makeErrorType(TypeError));
		this.addIntrinsic('SyntaxError', this.SyntaxError = this.Error.makeErrorType(SyntaxError));
		this.addIntrinsic('ReferenceError', this.ReferenceError = this.Error.makeErrorType(ReferenceError));
		this.addIntrinsic('RangeError', this.RangeError = this.Error.makeErrorType(RangeError));
		this.addIntrinsic('EvalError', this.EvalError = this.Error.makeErrorType(EvalError));
		this.addIntrinsic('URIError', this.URIError = this.Error.makeErrorType(URIError));


		this.addIntrinsic('parseInt', this.parseInt = EasyNativeFunction.makeForNative(this, parseInt));
		this.addIntrinsic('parseFloat', this.parseFloat = EasyNativeFunction.makeForNative(this, parseFloat));
		this.addIntrinsic('isNaN', this.isNaN = EasyNativeFunction.makeForNative(this, isNaN));
		this.addIntrinsic('isFinite', this.isFinite = EasyNativeFunction.makeForNative(this, isFinite));

		//this.addIntrinsic('Date', this.fromNative(Date));
		this.eval = new EvalFunction(this);
		this.addIntrinsic('eval', this.eval);
		this.addIntrinsic('assert', new AssertClass(this));

		if ( options.runtime ) {
			this.addIntrinsic("setTimeout", new SetTimeoutFunction(this, options.runtime, false));
			this.addIntrinsic("setInterval", new SetTimeoutFunction(this, options.runtime, true));	
			this.addIntrinsic("clearTimeout", new ClearTimeoutFunction(this, options.runtime));
			this.addIntrinsic("clearInterval", new ClearTimeoutFunction(this, options.runtime));
		}

		if ( options.esposeESHostGlobal ) {
			this.addIntrinsic("$", new (require('./stdlib/ESHostDollarsign'))(this));
		}

		if ( options.esRealms ) {
			this.addIntrinsic("Realm", new RealmClass(this));
		}

		scope.thiz = scope.object;
		this.importCache = new WeakMap();
		/** @type {Scope} */
		this.globalScope = scope;
		this.globalScope.put("globalThis", scope.thiz);

		let lang = esper.languages[this.language];
		if ( lang && lang.setupRealm ) lang.setupRealm(this);
	}

	addIntrinsic(name, instance) {
		this.intrinsics[name] = instance;
		this.intrinsicScope.set(name, instance);
		if ( !instance.wellKnownName ) {
			instance.wellKnownName = '%' + name + '%';
		}
		this.wellKnownNames[instance.wellKnownName] = instance;
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

	lookupWellKnownByName(v) {
		return this.wellKnownNames[v];
	}

	fromNative(native, x) {
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

	loadLangaugeStartupCode(ast) {
		let past = this.engine.preprocessAST(ast, {markNonUser: true});
		let stdlib_eval = new Evaluator(this, null, this.globalScope);
		stdlib_eval.frames = [];
		stdlib_eval.pushAST(past, this.globalScope);
		stdlib_eval.ast = past;

		let gen = stdlib_eval.generator();
		let val = gen.next();
		while ( !val.done ) val = gen.next();
	}
}

Realm.prototype.makeForForeignObject = Realm.prototype.import;

module.exports = Realm;
