'use strict';

const PrimitiveValue = require('./PrimitiveValue');
const Value = require('../Value');
let NumberValue;


class StringValue extends PrimitiveValue {
	*get(name, realm) {
		let idx = Number(name);
		if ( !isNaN(idx) ) {
			return StringValue.fromNative(this.native[idx]);
		}
		if ( name === 'length' ) return StringValue.fromNative(this.native.length);
		return yield * super.get(name, realm);
	}

	*doubleEquals(other) {

		if ( other instanceof StringValue) {
			return Value.fromNative(this.native == other.native);
		} else if ( other instanceof NumberValue ) {
			let rv = yield * this.toNumberValue();
			return yield * rv.doubleEquals(other);
		}

		if ( other.jsTypeName == "object") {
			let os = yield * other.toStringValue();
			if ( os.jsTypeName == "string" ) {
				return Value.fromNative(this.native == os.native);
			}
		}

		return yield * super.doubleEquals(other);

	}


	*add(other) { return Value.fromNative(this.native + (yield * other.toPrimitiveNative('string'))); }

	*observableProperties(realm) {
		for ( let p in this.native ) {
			yield Value.fromNative(p);
		}
		return;
	}

	has(name) {
		let idx = Number(name);
		if ( !isNaN(idx) ) {
			return idx >= 0 && idx < this.native.length;
		}
		return false;
	}

	*iterateAll() {
		let len = this.native.length;
		let idx = 0;
		let result = new Array(len);
		for ( let ii = 0; ii < len; ++ii ) {
			result[idx++] = Value.fromNative(this.native[ii]);
		}
		return result;
	}

}

module.exports = StringValue;

NumberValue = require('./NumberValue');
