'use strict';

const PrimitiveValue = require('./PrimitiveValue');
const Value = require('../Value');
let StringValue;

class NumberValue extends PrimitiveValue {


	*doubleEquals(other) {
		if ( other instanceof NumberValue) {
			return Value.fromNative(this.native == other.native);
		} else if ( other instanceof StringValue ) {
			let on = yield * other.toNumberValue();
			return yield * this.doubleEquals(on);
		} else {
			let on = yield * other.toNumberValue();
			return yield * this.doubleEquals(on);
		}

		return Value.false;

	}

	*add(other) { return this.fromNative(this.native + (yield * other.toPrimitiveNative())); }
}

module.exports = NumberValue;

StringValue = require('./StringValue');
