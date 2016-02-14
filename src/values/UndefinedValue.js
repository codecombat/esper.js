"use strict";
const EmptyValue = require('./EmptyValue');
const Value = require('../Value');

class UndefinedValue extends EmptyValue {
	toNative() { return undefined; }
	get jsTypeName() { return "undefined"; }
	*tripleEquals(other, env) {
		return other instanceof UndefinedValue ? Value.true : Value.false;
	}

	*add(other) { return this.fromNative(undefined + other.toNative()); }

	*asString() {
		return "undefined";
	}

	get debugString() { return "undefined"; }
	*toPrimitiveValue(preferedType) { return this; }
	*toNumberValue() { return Value.nan; }
}

module.exports = UndefinedValue;
