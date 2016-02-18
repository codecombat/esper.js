"use strict";
/* @flow */

const Value = require('../Value');
const Variable = require('./Variable');
const ObjectValue = require('./ObjectValue');
const CompletionRecord = require('../CompletionRecord');
const EasyNativeFunction = require('./EasyNativeFunction');

class EasyObjectValue extends ObjectValue {
	constructor(realm) {
		super(realm);

		let objProto = realm.ObjectPrototype;
		if ( typeof this.objPrototype === "function" ) {
			objProto = this.objPrototype(realm);
		} else if ( typeof this.call === "function" ) {
			objProto = realm.FunctionPrototype;
		}
		if ( this.call == "function" ) this.clazz = 'Function';
		this.setPrototype(objProto);

		this._init();
	}

	_init() {
		let realm = this.realm;
		var clazz = Object.getPrototypeOf(this);
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
				let rb = EasyNativeFunction.make(realm, d.value, this);
				v.value = rb;
			}
			if ( flags.indexOf('e') !== -1 ) v.enumerable = false;
			if ( flags.indexOf('w') !== -1 ) v.writeable = false;
			if ( flags.indexOf('c') !== -1 ) v.configurable = false;
			this.properties[name] = v;
		}

		if ( this.callPrototype ) {
			let pt = new Variable(this.callPrototype(realm));
			pt.configurable = false;
			pt.enumerable = false;
			this.properties['prototype'] = pt;
		}
		if ( realm.Function ) {
			let cs = new Variable(realm.Function);
			cs.configurable = false;
			cs.enumerable = false;
			this.properties['constructor'] = cs;
		}

	}

	get jsTypeName() { return typeof this.call === "function" ? 'function' : 'object'; }
}

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;