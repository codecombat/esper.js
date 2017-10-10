'use strict';


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');
const GenDash = require('../GenDash');
let NumberValue;


class ArrayValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.ArrayPrototype);
	}

	*get(name, realm) {
		return yield * super.get(name, realm);
	}

	adjustLength(name, value) {
		if ( name == "length" && this.properties.length ) {
			//TODO: 15.4.5.2 specifies more complex behavior here.
			let target = GenDash.syncGenHelper(value.toIntNative());
			let length = this.getLengthSync();
			if ( target < length ) {
				for ( let i = length-1; i >= target; --i ) {
					delete this.properties[i];
				}
			}
		}

		if ( !isNaN(parseInt(name)) ) {
			let length = this.getLengthSync();
			if ( name >= length ) {
				this.properties.length.value = Value.fromNative(name + 1);
			}
		}
	}

	getLengthSync() {
		return this.properties.length.value.native;
	}

	set(name, v) {
		this.adjustLength(name, v);
		return super.set(name, v);
	}

	setImmediate(name, v) {
		this.adjustLength(name, v);
		return super.setImmediate(name, v);
	}


	toNative() {
		let out = new Array(this.getLengthSync());
		for ( let i of Object.keys(this.properties)) {
			if ( i === "length" ) continue;
			let po = this.properties[i];
			if ( po && po.value ) {
				if ( !po.direct ) {
					Object.defineProperty(out, i, {
						enumerable: po.enumerable,
						writable: po.writable,
						configurable: po.configurable,
						value: po.value.toNative()
					});
				} else {
					out[i] = po.value.toNative();
				}
			}
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
