"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');

function wrapStringPrototype(name) {
	let fx = String.prototype[name];
	return function *(thiz, args, env) {
		let sv = yield * thiz.toStringValue();
		var argz = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			argz[i] = args[i].toNative();
		}

		let result = fx.apply(sv.toNative(), argz);
		let nv = env.fromNative(result);
		return nv;
	};
}

class StringPrototype extends EasyObjectValue {
	static get length$cew() { return StringPrototype.fromNative(0); }
	
	static *valueOf(thiz) {
		if ( thiz.specTypeName === "string" ) return thiz;
		if ( thiz.specTypeName === "object" ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName == 'string' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}	


	static *toString(thiz) {
		return yield * StringPrototype.valueOf(thiz);
	}	
}

StringPrototype.charAt = wrapStringPrototype('charAt');
StringPrototype.charCodeAt = wrapStringPrototype('charCodeAt');
StringPrototype.concat = wrapStringPrototype('concat');
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
