'use strict';
/* @flow */

const Value = require('../Value');
const ObjectValue = require('./ObjectValue');
const CompletionRecord = require('../CompletionRecord');

class EasyNativeFunction extends ObjectValue {
	constructor(realm) {
		super(realm, realm.FunctionPrototype);
	}

	static make(realm, fx, binding) {
		let out = new EasyNativeFunction(realm);
		out.fn = fx;
		out.binding = binding;
		return out;
	}

	static makeForNative(realm, fx) {
		let out = new EasyNativeFunction(realm);
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

	*call(thiz, argz, scope, extra) {
		let profile = false;
		let start = 0;
		try {
			if ( extra && extra.evaluator && extra.evaluator.debug ) {
				profile = true;
				start = Date.now();
			}
			let s = scope ? scope.createChild() : scope;
			if ( s ) s.strict = true;
			let o = yield * this.fn.apply(this.binding, arguments, s, extra);
			if ( o instanceof CompletionRecord ) return o;
			if ( !(o instanceof Value) ) o = scope.realm.makeForForeignObject(o);
			if ( profile ) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.NORMAL, o);

		} catch ( e ) {
			if ( profile ) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.THROW, scope.realm.makeForForeignObject(e));
		}
	}

	*makeThisForNew(realm) {
		return yield CompletionRecord.makeTypeError(realm, 'function is not a constructor');
	}

	get debugString() {
		return 'function() { [Native Code] }';
	}
}
EasyNativeFunction.prototype.clazz = 'Function';

module.exports = EasyNativeFunction;
