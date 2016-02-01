"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');

class StringObject extends EasyObjectValue {
	*call(thiz, args, env, scope) {
		if ( thiz.specTypeName === "null" ) {
			//Called as a function...
			return yield * args[0].toStringValue();
		}
	}

	callPrototype(env) { return env.StringPrototype; }

	static *fromCharCode(thiz, args) {
		let argz = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			argz[i] = (yield * args[i].toNumberValue()).toNative();
		}

		return this.fromNative(String.fromCharCode.apply(String, argz));
	}
	
}

module.exports = StringObject;
