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

	*add(other) { 
		switch ( other.specTypeName ) {
			case "null":
				return Value.zero;
			case "boolean":
				return other.native ? Value.one : Value.zero;
			case "number":
				return yield * Value.zero.add(other);
			case "undefined":
				return Value.nan;
			default:
				return yield * Value.fromNative("null").add(other);
		}
		
	}

	*toPrimitiveValue(preferedType) { 
		switch ( preferedType ) {
		case "number":
			return Value.zero
		default:
			return Value.fromNative("null");
		}
	}
	*toNumberValue() { return Value.zero; }
	*toStringValue() { return Value.fromNative('null'); }

	get debugString() { return 'null'; }
}

module.exports = NullValue;
