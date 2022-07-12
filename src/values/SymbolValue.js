'use strict';
const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

class SymbolValue extends Value {
	toNative() { return undefined; }
	get jsTypeName() { return 'undefined'; }
	*tripleEquals(other, realm) {
        //if (!other instanceof SymbolValue) return false;
        return other === this ? Value.true : Value.false;
	}

	*add(other) { return Value.fromNative(undefined + other.toNative()); }

	*asString() {
		return 'undefined';
	}

	*toPrimitiveValue(preferedType) { return this; }
	*toNumberValue() {
        return yield CompletionRecord.typeError("Cannot convert a Symbol value to a number", {code: "ConvertValueFailed", i18nParams: {orig: 'Symbol', new: 'Number'}});
    }
	*toStringValue() {
        return yield CompletionRecord.typeError("Cannot convert a Symbol value to a string", {code: "ConvertValueFailed", i18nParams: {orig: 'Symbol', new: 'String'}});
    }

	get debugString() { return 'Symbol(' + this.name + ')'; }
}

module.exports = SymbolValue;
