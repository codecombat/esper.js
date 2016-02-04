"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');

class StringObject extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			//Called as a function...
			return yield * args[0].toStringValue();
		}
		if ( args.length > 0 ) {
			let pv = yield * args[0].toStringValue();
			thiz.primativeValue = pv;
		} else {
			thiz.primativeValue = EasyObjectValue.emptyString;
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
