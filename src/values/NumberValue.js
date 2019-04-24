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
		if ( !on ) return yield * super.doubleEquals(other);
		return yield * this.doubleEquals(on);
	}

	*add(other) { return Value.fromNative(this.native + (yield * other.toPrimitiveNative('number'))); }
}

module.exports = NumberValue;

StringValue = require('./StringValue');
