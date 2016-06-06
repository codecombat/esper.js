'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ClosureValue = require('../values/ClosureValue');
const Value = require('../Value');
const ObjectValue = require('../values/ObjectValue');
const CompletionRecord = require('../CompletionRecord');
const PropertyDescriptor = require('../values/PropertyDescriptor');

class BoundFunction extends ObjectValue {
	constructor(func, realm) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.func = func;
		this.boundArgs = [];
	}

	*call(thiz, args, s, ext) {
		let tt = thiz;
		let asConstructor = ext && ext.asConstructor;

		if ( !asConstructor ) {
			tt = this.boundThis;
		}

		let rargs = [].concat(this.boundArgs, args);
		return yield * this.func.call(tt, rargs, s, ext);
	}


	*constructorOf(other, realm) {
		return yield * this.func.constructorOf(other, realm);
	}


	*makeThisForNew(realm) {
		return yield * this.func.makeThisForNew(realm);
	}

}

class FunctionPrototype extends EasyObjectValue {
	static get caller$cew() { return null; }
	static get length$ew() { return '?'; }
	static get name$ew() { return ''; }

	static *apply(thiz, args, s) {
		let vthis = args[0];
		let arga = [];
		if ( args.length > 1 ) {
			let arr = args[1];
			let length = yield * arr.get('length');
			length = (yield * length.toNumberValue()).toNative();
			for ( let i = 0; i < length; ++i ) {
				arga[i] = yield * arr.get(i);
			}
		}
		return yield * thiz.call(vthis, arga, s);
	}

	static *bind(thiz, args, s) {
		let bthis = s.realm.globalScope.object; //TODO: is this actually null in scrict mode?
		if ( args.length > 0 ) {
			if ( args[0].jsTypeName !== 'undefined') bthis = args[0];
		}
		var out = new BoundFunction(thiz, s.realm);
		if ( args.length > 1 ) out.boundArgs = args.slice(1);
		out.boundThis = bthis;

		if ( thiz.properties['length'] ) {
			let newlen = thiz.properties['length'].value.toNative() - out.boundArgs.length;
			out.properties['length'] = new PropertyDescriptor(this.fromNative(newlen));
		}
		return out;
	}

	static *call(thiz, args, s) {
		let vthis = Value.undef;
		if ( args.length > 0 ) vthis = args.shift();
		return yield * thiz.call(vthis, args, s);
	}
	static *toString(thiz, args, s) {
		if ( thiz instanceof ClosureValue ) {
			let astsrc = thiz.func.source();
			if ( astsrc ) return this.fromNative(astsrc);
			return this.fromNative('function() { [AST] }');
		} else if ( thiz instanceof BoundFunction ) {
			return this.fromNative('function() { [bound function] }');
		} else if ( thiz instanceof EasyObjectValue.EasyNativeFunction ) {
			return this.fromNative('function() { [native code] }');
		}
		return CompletionRecord.makeTypeError(s.realm, 'Function.prototype.toString is not generic');

	}

	*call(thiz, args, s) {
		return EasyObjectValue.undef;
	}

}

FunctionPrototype.prototype.wellKnownName = '%FunctionPrototype%';


module.exports = FunctionPrototype;
