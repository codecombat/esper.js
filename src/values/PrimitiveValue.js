'use strict';
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
const EvaluatorInstruction = require('../EvaluatorInstruction');
const EmptyValue = require('./EmptyValue');
let StringValue;


function* convert(other) {
	if ( other instanceof PrimitiveValue ) return other.toNative();
	return yield * other.toPrimitiveNative();
}

/**
 * Represents a primitive value.
 */
class PrimitiveValue extends Value {

	constructor(value) {
		super(null);
		this.native = value;
		//Object.defineProperty(this, 'native', {
		//	'value': value,
		//	'enumerable': true
		//});
	}

	ref(name) {
		var that = this;
		let out = Object.create(null);
		out.getValue = function *() { return yield * that.get(name); };
		out.setValue = function *(to) { yield * that.set(name, to); };
		return out;
	}

	*get(name) {
		let realm = yield EvaluatorInstruction.getRealm;
		return yield * this.derivePrototype(realm).get(name, this);
	}

	*set(name, to) {
		//Can't set primative properties.
	}


	derivePrototype(realm) {
		switch ( typeof this.native ) {
			case 'string': return realm.StringPrototype;
			case 'number': return realm.NumberPrototype;
			case 'boolean': return realm.BooleanPrototype;
		}
	}

	toNative() {
		return this.native;
	}

	get debugString() {
		if ( typeof this.native === 'object' ) return '[native object]';
		else if ( typeof this.native === 'function' ) return '[native function]';
		else if ( typeof this.native === 'string' ) return JSON.stringify(this.native);
		else return '' + this.native;

	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) {
		let native = this.native;
		if ( other instanceof PrimitiveValue) {
			return Value.fromNative(this.native == other.native);
		} else if ( typeof native === 'number' ) {
			if ( other instanceof StringValue ) {
				let num = yield * other.toNumberValue();
				return Value.from(native === num.toNative());
			} else {
				return Value.false;
			}
		} else if ( typeof native == 'boolean' ) {
			let num = yield * this.toNumberValue();
			return yield * num.doubleEquals(other);
		}

		return Value.false;

	}
	*tripleEquals(other) { return this.native === other.toNative() ? Value.true : Value.false; }

	*add(other) { return Value.fromNative(this.native + (yield * other.toPrimitiveNative('number'))); }

	*instanceOf(other) { return Value.false; }

	*unaryPlus() { return Value.fromNative(+this.native); }
	*unaryMinus() { return Value.fromNative(-this.native); }
	*not() { return Value.fromNative(!this.native); }

	*gt(other) { return Value.fromNative(this.native > (yield * convert(other))); }
	*lt(other) { return Value.fromNative(this.native < (yield * convert(other))); }
	*gte(other) { return Value.fromNative(this.native >= (yield * convert(other))); }
	*lte(other) { return Value.fromNative(this.native <= (yield * convert(other))); }

	*observableProperties(realm) {
		yield * this.derivePrototype(realm).observableProperties(realm);
	}

	*makeThisForNew() {
		throw new Error('primative value is not a constructor');
	}

	getPrototype(realm) {
		return this.derivePrototype(realm);
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) { return this; }
	*toStringValue() {
		if ( typeof this.native === 'string' ) return this;
		return Value.fromNative(String(this.native));
	}

	*toNumberValue() {
		if ( typeof this.native === 'number' ) return this;
		return Value.fromNative(Number(this.native));
	}

	makeImmutable() {
		return true;
	}

}
module.exports = PrimitiveValue;

StringValue = require('./StringValue');
