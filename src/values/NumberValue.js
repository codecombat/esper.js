'use strict';

const PrimitiveValue = require('./PrimitiveValue');
const Value = require('../Value');
let StringValue;

class NumberValue extends PrimitiveValue {


	*doubleEquals(other) {
		let on;
		if ( other instanceof NumberValue) {
			return Value.fromNative(this.native == other.native);
		} else if ( other instanceof StringValue ) {
			on = yield * other.toNumberValue();
		} else if ( other.specTypeName == 'object' ) {
			on = yield * other.toPrimitiveValue();
		}
		if ( !on ) return Value.false;
		return yield * this.doubleEquals(on);
	}

	*add(other) { return this.fromNative(this.native + (yield * other.toPrimitiveNative())); }
}

module.exports = NumberValue;

StringValue = require('./StringValue');
