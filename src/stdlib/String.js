'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');
const PropertyDescriptor = require('../values/PropertyDescriptor');

class StringObject extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			//Called as a function...
			if ( args.length == 0 ) return scope.realm.fromNative('');
			return yield * args[0].toStringValue();
		}
		let len = 0;
		if ( args.length > 0 ) {
			let pv = yield * args[0].toStringValue();
			len = pv.native.length;
			thiz.primativeValue = pv;
		} else {
			thiz.primativeValue = EasyObjectValue.emptyString;
		}

		var plen = new PropertyDescriptor(scope.realm.fromNative(len));
		plen.enumerable = false;
		plen.configurable = false;
		plen.writable = false;
		thiz.rawSetProperty('length', plen);
		return thiz;
	}

	callPrototype(realm) { return realm.StringPrototype; }
	constructorFor(realm) { return realm.StringPrototype; }

	static *fromCharCode(thiz, args, s) {
		let argz = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			argz[i] = (yield * args[i].toNumberValue()).toNative();
		}

		return s.realm.fromNative(String.fromCharCode.apply(String, argz));
	}

	static *raw(thiz, args) {
		let raw = yield * args[0].get('raw');
		let result = yield * raw.get(0);
		for ( let i = 1; i < args.length; ++i ) {
			result = yield * result.add(args[i]);
			result = yield * result.add(yield * raw.get(i));
		}
		return result;
	}

}

StringObject.prototype.wellKnownName = '%String%'

module.exports = StringObject;
