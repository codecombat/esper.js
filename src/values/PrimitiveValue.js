"use strict";
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class PrimitiveValue extends Value {
	
	constructor(value) {
		super(null);
		this.native = value;
	}

	ref(name, env) {
		let out = Object.create(null);
		let str = (value) => this.native[name] = value.toNative();
		Object.defineProperty(out, 'value', {
			get: () => this.fromNative(this.native[name]),
			set: str
		});
		out.set = str;

		return out;
	}

	assign(name, value, env) {
		
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) { return this.fromNative(this.native == other.toNative()); }
	*tripleEquals(other) { return this.fromNative(this.native === other.toNative()); }

	*add(other) { return this.fromNative(this.native + other.toNative()); }
	*subtract(other) { return this.fromNative(this.native - other.toNative()); }
	*multiply(other) { return this.fromNative(this.native * other.toNative()); }
	*divide(other) { return this.fromNative(this.native / other.toNative()); }
	*mod(other) { return this.fromNative(this.native % other.toNative()); }

	*shiftLeft(other) { return this.fromNative(this.native << other.toNative()); }
	*shiftRight(other) { return this.fromNative(this.native >> other.toNative()); }
	*shiftRightZF(other) { return this.fromNative(this.native >>> other.toNative()); }

	*bitAnd(other) { return this.fromNative(this.native & other.toNative()); }
	*bitOr(other) { return this.fromNative(this.native | other.toNative()); }
	*bitXor(other) { return this.fromNative(this.native ^ other.toNative()); }

	*gt(other) { return this.fromNative(this.native > other.toNative()); }
	*lt(other) { return this.fromNative(this.native < other.toNative()); }
	*gte(other) { return this.fromNative(this.native >= other.toNative()); }
	*lte(other) { return this.fromNative(this.native <= other.toNative()); }

	*inOperator(other) { return this.fromNative(this.native in other.toNative()); }
	*instanceOf(other) { return Value.false; }
	
	*unaryPlus() { return this.fromNative(+this.native); }
	*unaryMinus() { return this.fromNative(-this.native); }
	*not() { return this.fromNative(!this.native); }



	*member(name, env) { 
		return env.fromNative(this.native[name]); 
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
}

module.exports = PrimitiveValue;