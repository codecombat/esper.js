"use strict";
/* @flow */

const Value = require('../Value');
const Variable = require('./Variable');
const ObjectValue = require('./ObjectValue');
const CompletionRecord = require('../CompletionRecord');

class EasyNativeFunction extends ObjectValue {
	constructor(env) {
		super(env);
		this.setPrototype(env.FunctionPrototype);
	}

	static make(env, fx, binding) {
		let out = new EasyNativeFunction(env);
		out.fn = fx;
		out.binding = binding;
		return out;
	}

	static makeForNative(env, fx) {
		let out = new EasyNativeFunction(env);
		out.fn = function *(thiz, args) {
			let rargs = new Array(args.length);
			for ( let i = 0; i < args.length; ++i ) {
				rargs[i] = args[i].toNative();
			}
			let nt = thiz.toNative();
			let nr = fx.apply(nt, rargs);
			return Value.fromNative(nr);
		};
		return out;
	}

	*call(thiz, argz) {
		try {
			let o = yield yield * this.fn.apply(this.binding, arguments);
			if ( o instanceof CompletionRecord ) return o;
			if ( !(o instanceof Value) ) o = this.fromNative(o);
			return new CompletionRecord(CompletionRecord.NORMAL, o);
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, this.env.fromNative(e));
		}
	}

	*makeThisForNew() {
		return new CompletionRecord(CompletionRecord.THROW, new TypeError("function is not a constructor"));
	}

	get debugString() {
		return 'function() { [Native Code] }';
	}
}

module.exports = EasyNativeFunction;