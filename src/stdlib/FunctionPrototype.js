"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ClosureValue = require('../values/ClosureValue');
const Value = require('../Value');
const ObjectValue = require('../values/ObjectValue');
const CompletionRecord = require('../CompletionRecord');

class BoundFunction extends ObjectValue {
	constructor(func, env) {
		super(env);
		this.func = func;
		this.boundArgs = [];
	}

	*call(thiz, args, s) {
		let tt = this.boundThis;
		let rargs = [].concat(this.boundArgs, args);
		return yield * this.func.call(tt, rargs, s);
	}
}

class FunctionPrototype extends EasyObjectValue {
	static get caller$cew() { return null; }
	static get length$ew() { return "?"; }
	static get name$ew() { return ""; }

	static *apply(thiz, args, s) {
		let vthis = args[0];
		let arga = [];
		if ( args.length > 1 ) {
			let arr = args[1];
			let length = yield * arr.member('length');
			length = (yield * length.toNumberValue()).toNative();
			for ( let i = 0; i < length; ++i ) {
				arga[i] = yield * arr.member(i);
			}
		}
		return yield * thiz.call(vthis, arga, s);
	}

	static *bind(thiz, args) {
		let bthis = Value.null;
		if ( args.length > 0 ) bthis = args[0];
		var out = new BoundFunction(thiz, this.env);
		if ( args.length > 1 ) out.boundArgs = args.slice(1);
		out.boundThis = bthis;
		return out;
	}

	static *call(thiz, args, s) {
		let vthis = Value.undef;
		if ( args.length > 0 ) vthis = args.shift();
		return yield * thiz.call(vthis, args, s);
	}
	static *toString(thiz, args, s) { 
		if ( !(thiz instanceof ClosureValue) ) {
			return CompletionRecord.makeTypeError(s.env, 'Function.prototype.toString is not generic');
		}
		
		return this.fromNative('function() { [AST] }');
	}

	*call(thiz, args, s) {
		return EasyObjectValue.undef;
	}

}


module.exports = FunctionPrototype;
