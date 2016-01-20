"use strict";

const EmptyValue = require('./EmptyValue');

class NullValue extends EmptyValue {	
	toNative() { return null; }
	get jsTypeName() { return "object"; }
	*tripleEquals(other, env) {
		return other instanceof NullValue ? env.true : env.false;
	}
}

module.exports = NullValue;