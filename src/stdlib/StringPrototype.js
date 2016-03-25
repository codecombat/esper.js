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

	static *valueOf(thiz) {
		if ( thiz.specTypeName === 'string' ) return thiz;
		if ( thiz.specTypeName === 'object' ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName == 'string' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}

	static *concat(thiz, args, realm) {
		let base = yield * thiz.toStringNative();
		let realArgs = yield * _g.map(args, function*(v) { return yield * v.toStringNative(); });
		let out = String.prototype.concat.apply(base, realArgs);
		return realm.fromNative(out);
	}

	static *toString(thiz) {
		return yield * StringPrototype.valueOf(thiz);
	}
}


StringPrototype.prototype.wellKnownName = '%StringProtoype%';
StringPrototype.prototype.clazz = 'String';

StringPrototype.charAt = wrapStringPrototype('charAt');
StringPrototype.charCodeAt = wrapStringPrototype('charCodeAt');
StringPrototype.substring = wrapStringPrototype('substring');
StringPrototype.substr = wrapStringPrototype('substr');
StringPrototype.split = wrapStringPrototype('split');
StringPrototype.slice = wrapStringPrototype('slice');
StringPrototype.lastIndexOf = wrapStringPrototype('lastIndexOf');
StringPrototype.indexOf = wrapStringPrototype('indexOf');
StringPrototype.search = wrapStringPrototype('search');
StringPrototype.trim = wrapStringPrototype('trim');
StringPrototype.toUpperCase = wrapStringPrototype('toUpperCase');
StringPrototype.toLocaleUpperCase = wrapStringPrototype('toLocaleUpperCase');
StringPrototype.toLowerCase = wrapStringPrototype('toLowerCase');
StringPrototype.toLocaleLowerCase = wrapStringPrototype('toLocaleLowerCase');
StringPrototype.localeCompare = wrapStringPrototype('localeCompare');


module.exports = StringPrototype;
