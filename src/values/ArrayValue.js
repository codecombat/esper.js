"use strict";


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');
let NumberValue;


class ArrayValue extends ObjectValue {

	constructor(env) {
		super(env);
		this.setPrototype(this.env.ArrayPrototype);
	}


	*member(name, env) {
		
		return yield * super.member(name, env);
	}

	*doubleEquals(other) { 
		
		return Value.false;

	}

	set(name, v) {
		if ( Number.isInteger(name) ) {
			let length = this.properties.length.value.native;
			if ( name >= length ) {
				this.properties.length.value.native = 1 + name;
			}
		}
		super.set(name, v);
	}

	static make(vals, env) {
		let av = new ArrayValue(env);
		for ( let i = 0; i < vals.length; ++i ) {
			let v = vals[i];
			if ( !(v instanceof Value) ) v = this.fromNative(v);
			av.set(i, v);
		}
		av.set('length', Value.fromNative(vals.length));
		return av;
	}

	get debugString() {

		let length = this.properties.length.value.native;
		let r = new Array(length);
		for ( let i = 0; i < length; ++i ) {
			let v = this.properties[i].value;
			if ( v ) r[i] = v.debugString;
			else r[i] = '';
		}
		return '[' + r.join(', ') + ']';
	}
}

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = require('./NumberValue');
