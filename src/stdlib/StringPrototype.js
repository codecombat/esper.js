'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');
const EmptyValue = require('../values/EmptyValue');
const ArrayValue = require('../values/ArrayValue');
const _g = require('../GenDash');

function wrapStringPrototype(name) {
	let fx = String.prototype[name];
	let genfx = function *(thiz, args, s) {
		if ( thiz instanceof EmptyValue ) {
			return yield CompletionRecord.makeTypeError(s.realm, 'called String function on null or undefined?');
		}
		let sv = yield * thiz.toStringValue(s.realm);
		var argz = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			argz[i] = args[i].toNative();
		}

		let result = fx.apply(sv.toNative(), argz);

		if ( Array.isArray(result) ) {
			var vals = new Array(result.length);
			for ( let i = 0; i < vals.length; ++i ) {
				vals[i] = s.realm.fromNative(result[i]);
			}
			return ArrayValue.make(vals, s.realm);
		} else {
			let nv = s.realm.fromNative(result);
			return nv;
		}
	};
	genfx.esperLength = fx.length;
	return genfx;
}

class StringPrototype extends EasyObjectValue {
	static get length$cew() { return StringPrototype.fromNative(0); }

	static *valueOf$e(thiz) {
		if ( thiz.specTypeName === 'string' ) return thiz;
		if ( thiz.specTypeName === 'object' ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName == 'string' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}

	static *concat$e(thiz, args, realm) {
		let base = yield * thiz.toStringNative();
		let realArgs = yield * _g.map(args, function*(v) { return yield * v.toStringNative(); });
		let out = String.prototype.concat.apply(base, realArgs);
		return realm.fromNative(out);
	}

	static *padEnd$e(thiz, args, realm) {
		let base = yield * thiz.toStringNative();
		if ( args.length < 1 ) return thiz;
		let length = yield * args[0].toIntNative();
		let hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';
		let pad = hasPad ? yield * args[1].toStringNative() : " ";
		return realm.fromNative(strPad(base, length, pad, false));
	}

	static *padStart$e(thiz, args, realm) {
		let base = yield * thiz.toStringNative();
		if ( args.length < 1 ) return thiz;
		let length = yield * args[0].toIntNative();
		let hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';
		let pad = hasPad ? yield * args[1].toStringNative() : " ";
		return realm.fromNative(strPad(base, length, pad, true));
	}

	static *toString$e(thiz) {
		return yield * StringPrototype.valueOf$e(thiz);
	}
}

function strPad(base, length, pad, left) {
	if ( length <= base.length ) return base;
	let extra = length - base.length;
	let padding = new Array(1+Math.ceil(extra / pad.length)).join(pad).substr(0, extra);
	return left ? padding+base : base+padding;

}

StringPrototype.prototype.wellKnownName = '%StringProtoype%';
StringPrototype.prototype.clazz = 'String';

StringPrototype.charAt$e = wrapStringPrototype('charAt');
StringPrototype.charCodeAt$e = wrapStringPrototype('charCodeAt');
StringPrototype.substring$e = wrapStringPrototype('substring');
StringPrototype.substr$e = wrapStringPrototype('substr');
StringPrototype.split$e = wrapStringPrototype('split');
StringPrototype.slice$e = wrapStringPrototype('slice');
StringPrototype.lastIndexOf$e = wrapStringPrototype('lastIndexOf');
StringPrototype.indexOf$e = wrapStringPrototype('indexOf');
StringPrototype.search$e = wrapStringPrototype('search');
StringPrototype.trim$e = wrapStringPrototype('trim');
StringPrototype.toUpperCase$e = wrapStringPrototype('toUpperCase');
StringPrototype.toLocaleUpperCase$e = wrapStringPrototype('toLocaleUpperCase');
StringPrototype.toLowerCase$e = wrapStringPrototype('toLowerCase');
StringPrototype.toLocaleLowerCase$e = wrapStringPrototype('toLocaleLowerCase');
StringPrototype.localeCompare$e = wrapStringPrototype('localeCompare');


module.exports = StringPrototype;
