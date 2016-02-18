"use strict";
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
let StringValue;

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class PrimitiveValue extends Value {
	
	constructor(value) {
		super(null);
		this.native = value;
	}

	ref(name, realm) {
		let out = Object.create(null);
		let str = (value) => {};
		let pt = this.derivePrototype(realm);
		Object.defineProperty(out, 'value', {
			get: () => pt.get(name),
			set: str
		});
		out.set = str;

		return out;
	}

	derivePrototype(realm) {
		switch ( typeof this.native ) {
			case "string": return realm.StringPrototype;
			case "number": return realm.NumberPrototype;
			case "boolean": return realm.BooleanPrototype;
		}
	}

	assign(name, value, realm) {
		
	}

	toNative() {
		return this.native;
	}

	get debugString() { 
		if ( typeof this.native === 'object' ) return '[native object]';
		else if ( typeof this.native === 'function' ) return '[native function]';
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
	*tripleEquals(other) { return this.fromNative(this.native === other.toNative()); }

	*add(other) { return this.fromNative(this.native + other.toNative()); }
	*multiply(other) { return this.fromNative(this.native * other.toNative()); }
	*divide(other) { return this.fromNative(this.native / other.toNative()); }
	*mod(other) { return this.fromNative(this.native % other.toNative()); }

	*inOperator(other) { return this.fromNative(this.native in other.toNative()); }
	*instanceOf(other) { return Value.false; }
	
	*unaryPlus() { return this.fromNative(+this.native); }
	*unaryMinus() { return this.fromNative(-this.native); }
	*not() { return this.fromNative(!this.native); }



	*member(name, realm) { 
		let pt = this.derivePrototype(realm);
		return yield * pt.member(name, realm);
	}

	*observableProperties() {
		throw new Error("Dont do this yet");
	}

	*makeThisForNew() {
		throw new Error("Naw");
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) { return this; }
	*toStringValue() { 
		if ( typeof this.native === "string" ) return this;
		return this.fromNative(String(this.native));
	}

	*toNumberValue() { 
		if ( typeof this.native === "number" ) return this;
		return this.fromNative(Number(this.native));
	}


}
module.exports = PrimitiveValue;

StringValue = require('./StringValue');


