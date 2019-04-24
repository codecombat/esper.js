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

	*gt(other) { return Value.fromNative(this.native > (yield * other.toStringNative())); }
	*lt(other) { return Value.fromNative(this.native < (yield * other.toStringNative())); }
	*gte(other) { return Value.fromNative(this.native >= (yield * other.toStringNative())); }
	*lte(other) { return Value.fromNative(this.native <= (yield * other.toStringNative())); }
	*add(other) { return Value.fromNative(this.native + (yield * other.toPrimitiveNative('string'))); }

	*observableProperties(realm) {
		for ( let p in this.native ) {
			yield Value.fromNative(p);
		}
		return;
	}

}

module.exports = StringValue;

NumberValue = require('./NumberValue');
