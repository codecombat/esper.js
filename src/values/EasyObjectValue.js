"use strict";
/* @flow */

const Value = require('../Value');
const Variable = require('./Variable');
const ObjectValue = require('./ObjectValue');
const CompletionRecord = require('../CompletionRecord');

class EasyNativeFunction extends ObjectValue {
	constructor(env) {
		super(env);
		this.setPrototype(null);
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
		return new CompletionRecord(CompletionRecord.THROW, "function is not a constructor");
	}
}

class EasyObjectValue extends ObjectValue {
	constructor(env) {
		super(env);
		var clazz = Object.getPrototypeOf(this);

		let objProto = env.ObjectPrototype;
		if ( typeof this.objPrototype === "function" ) objProto = this.objPrototype(env);
		else if ( typeof this.call === "function" ) objProto = env.FunctionPrototype;
		this.setPrototype(objProto);

		for ( let p of Object.getOwnPropertyNames(clazz.constructor) ) {
			if ( p === 'length' ) continue;
			if ( p === 'name' ) continue;
			if ( p === 'prototype' ) continue;
			if ( p === 'constructor' ) continue;
			let parts = p.split(/\$/);
			let name = parts[0];
			let flags = parts[1] || '';
			let d = Object.getOwnPropertyDescriptor(clazz.constructor, p);
			let v = new Variable();

			if ( d.get ) {
				//Its a property
				let val = d.get();
				if ( val instanceof Value ) v.value = val;
				else v.value = this.fromNative(val);
			} else {
				var rb = new EasyNativeFunction(env);
				rb.fn = d.value;
				rb.binding = this;
				v.value = rb;
			}
			if ( flags.indexOf('e') !== -1 ) v.enumerable = false;
			if ( flags.indexOf('w') !== -1 ) v.writeable = false;
			if ( flags.indexOf('c') !== -1 ) v.configurable = false;
			this.properties[name] = v;
		}

		if ( this.callPrototype ) {
			let pt = new Variable(this.callPrototype(env));
			this.configurable = false;
			this.enumerable = false;
			this.properties['prototype'] = pt;
		}
		
	}

	get jsTypeName() { return typeof this.call === "function" ? 'function' : 'object'; }
}

module.exports = EasyObjectValue;