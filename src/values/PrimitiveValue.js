'use strict';
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
let StringValue;

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

	ref(name, realm) {
		var that = this;
		let out = Object.create(null);
		out.getValue = function *() { return yield * that.get(name, realm); };
		out.setValue = function *(to) { yield * that.set(name, to, realm); };
		return out;
	}

	*get(what, realm) {
		return yield * this.derivePrototype(realm).get(what, realm);
	}

	*set(what, to, realm) {
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
			return yield * this.toNumberValue().doubleEquals(other);
		}

		return Value.false;

	}
	*tripleEquals(other) { return this.native === other.toNative() ? Value.true : Value.false; }

	*add(other) { return this.fromNative(this.native + (yield * other.toPrimitiveNative())); }

	*inOperator(other) { return this.fromNative(this.native in other.toNative()); }
	*instanceOf(other) { return Value.false; }

	*unaryPlus() { return this.fromNative(+this.native); }
	*unaryMinus() { return this.fromNative(-this.native); }
	*not() { return this.fromNative(!this.native); }



	*get(name, realm) {
		let pt = this.derivePrototype(realm);
		return yield * pt.get(name, realm, this);
	}

	*observableProperties(realm) {
		yield * this.derivePrototype(realm).observableProperties(realm);
	}

	*makeThisForNew() {
		throw new Error('Naw');
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
		return this.fromNative(String(this.native));
	}

	*toNumberValue() {
		if ( typeof this.native === 'number' ) return this;
		return this.fromNative(Number(this.native));
	}


}
module.exports = PrimitiveValue;

StringValue = require('./StringValue');


