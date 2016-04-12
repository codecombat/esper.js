'use strict';

const EmptyValue = require('./EmptyValue');
const Value = require('../Value');

class NullValue extends EmptyValue {
	toNative() { return null; }

	get jsTypeName() { return 'object'; }
	get specTypeName() { return 'null'; }

	*tripleEquals(other, realm) {
		return other instanceof NullValue ? Value.true : Value.false;
	}

	*asString() {
		return 'null';
	}

	*toPrimitiveValue(preferedType) { return this; }
	*toNumberValue() { return Value.zero; }
	*toStringValue() { return Value.fromNative('null'); }

	get debugString() { return 'null'; }
}

module.exports = NullValue;
