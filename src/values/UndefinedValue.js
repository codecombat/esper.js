"use strict";
const EmptyValue = require('./EmptyValue');

class UndefinedValue extends EmptyValue {
	toNative() { return undefined; }
	get jsTypeName() { return "undefined"; }
	*tripleEquals(other, env) {
		return other instanceof UndefinedValue ? env.true : env.false;
	}

	*add(other) { return this.fromNative(undefined + other.toNative()); }
}

module.exports = UndefinedValue;