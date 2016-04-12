'use strict';
/* @flow */

const Value = require('../Value');
const PropertyDescriptor = require('./PropertyDescriptor');
const ObjectValue = require('./ObjectValue');
const CompletionRecord = require('../CompletionRecord');
const EasyNativeFunction = require('./EasyNativeFunction');

class EasyObjectValue extends ObjectValue {
	constructor(realm) {
		super(realm);

		let objProto = realm.ObjectPrototype;
		if ( typeof this.objPrototype === 'function' ) {
			objProto = this.objPrototype(realm);
		} else if ( typeof this.call === 'function' ) {
			objProto = realm.FunctionPrototype;
		}
		if ( this.call == 'function' ) this.clazz = 'Function';
		this.setPrototype(objProto);

		this._init(realm);
	}

	_init(realm) {
		var clazz = Object.getPrototypeOf(this);
		for ( let p of Object.getOwnPropertyNames(clazz.constructor) ) {
			if ( p === 'length' ) continue;
			if ( p === 'name' ) continue;
			if ( p === 'prototype' ) continue;
			if ( p === 'constructor' ) continue;
			if ( p === 'caller' ) continue;
			if ( p === 'callee') continue;
			if ( p === 'arguments' ) continue;
			let parts = p.split(/\$/);
			let name = parts[0];
			let flags = parts[1] || '';
			let d = Object.getOwnPropertyDescriptor(clazz.constructor, p);
			let v = new PropertyDescriptor();
			let length = 1;

			if ( d.get ) {
				//Its a property
				let val = d.get();
				if ( val instanceof Value ) v.value = val;
				else v.value = this.fromNative(val);
			} else {
				if ( d.value.esperLength !== undefined ) length = d.value.esperLength;
				let rb = EasyNativeFunction.make(realm, d.value, this);
				let rblen = new PropertyDescriptor(Value.fromNative(length));
				rblen.configurable = false;
				rblen.writable = false;
				rblen.enumerable = false;
				rb.properties['length'] = rblen;
				v.value = rb;
			}
			if ( flags.indexOf('e') !== -1 ) v.enumerable = false;
			if ( flags.indexOf('w') !== -1 ) v.writable = false;
			if ( flags.indexOf('c') !== -1 ) v.configurable = false;
			if ( flags.indexOf('g') !== -1 ) {
				v.getter = v.value;
				delete v.value;
			}
			this.properties[name] = v;
		}

		if ( this.callPrototype ) {
			let pt = new PropertyDescriptor(this.callPrototype(realm));
			pt.configurable = false;
			pt.enumerable = false;
			pt.writable = false;
			this.properties['prototype'] = pt;
		}

		if ( this.callLength !== undefined ) {
			let rblen = new PropertyDescriptor(Value.fromNative(this.callLength));
			rblen.configurable = false;
			rblen.writable = false;
			rblen.enumerable = false;
			this.properties['length'] = rblen;
		}

		if ( this.constructorFor ) {
			let target = this.constructorFor(realm);
			if ( target ) {
				let cs = new PropertyDescriptor(this);
				cs.configurable = false;
				cs.enumerable = false;
				target.properties['constructor'] = cs;
			}
		}

		if ( realm.Function ) {
			let cs = new PropertyDescriptor(realm.Function);
			cs.configurable = false;
			cs.enumerable = false;
			this.properties['constructor'] = cs;
		}

	}

	get jsTypeName() { return typeof this.call === 'function' ? 'function' : 'object'; }
}

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;
