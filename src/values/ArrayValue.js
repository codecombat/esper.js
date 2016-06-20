'use strict';


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');
let NumberValue;


class ArrayValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.ArrayPrototype);
	}

	*get(name, realm) {
		return yield * super.get(name, realm);
	}

	adjustLength(name) {
		if ( !isNaN(parseInt(name)) ) {
			let length = this.properties.length.value.native;
			if ( name >= length ) {
				this.properties.length.value = Value.fromNative(name + 1);
			}
		}
	}

	set(name, v) {
		this.adjustLength(name);
		return super.set(name, v);
	}

	setImmediate(name, v) {
		this.adjustLength(name);
		return super.setImmediate(name, v);
	}


	toNative() {
		let out = new Array();

		for ( let i of Object.keys(this.properties)) {
			let po = this.properties[i];
			if ( po && po.value ) out[i] = po.value.toNative();
		}
		return out;
	}

	static make(vals, realm) {

		let av = new ArrayValue(realm);

		av.setImmediate('length', Value.fromNative(0));
		av.properties.length.enumerable = false;

		for ( let i = 0; i < vals.length; ++i ) {
			let v = vals[i];
			if ( !(v instanceof Value) ) v = realm.fromNative(v);
			av.setImmediate(i, v);
		}
		return av;
	}

	get debugString() {
		if ( !this.properties.length ) return super.debugString;
		let length = this.properties.length.value.native;

		let loop = Math.min(length, 20);
		let r = new Array(loop);
		for ( let i = 0; i < loop; ++i ) {
			let po = this.properties[i];
			if ( po && po.value ) r[i] = po.value.debugString;
			else r[i] = '';
		}
		return '[' + r.join(', ') + ( loop < length ? '...' : '' ) + ']';
	}
}

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = require('./NumberValue');
