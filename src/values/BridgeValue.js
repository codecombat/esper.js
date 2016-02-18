"use strict";
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
/**
 * Represents a value that maps directly to an untrusted local value.
 */
class BridgeValue extends Value {
	
	constructor(realm, value) {
		super(realm);
		this.native = value;
	}

	ref(name) {
		let out = Object.create(null);
		let str = (value) => this.native[name] = value.toNative();
		Object.defineProperty(out, 'value', {
			get: () => this.fromNative(this.native[name]),
			set: str
		});
		out.set = str;

		return out;
	}

	assign(name, value) {
		this.native[name] = value.toNative();
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
	*instanceOf(other) { return this.fromNative(this.native instanceof other.toNative()); }
	
	*unaryPlus() { return this.fromNative(+this.native); }
	*unaryMinus() { return this.fromNative(-this.native); }
	*not() { return this.fromNative(!this.native); }



	*member(name) { 
		return this.fromNative(this.native[name]); 
	}


	*observableProperties() {
		for ( let p in this.native ) {
			yield this.fromNative(p);
		}
		return;
	}

	/**
	 *
	 * @param {Evaluator} evaluator
	 * @param {Value} thiz
	 * @param {Value[]} args
	 */
	*call(thiz, args) {
		let realArgs = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			realArgs[i] = args[i].toNative();
		}
		try {
			let result = this.native.apply(thiz ? thiz.toNative() : undefined, realArgs);
			return this.fromNative(result);
		} catch ( e ) {
			let result = this.fromNative(e);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}

	}

	*makeThisForNew() {
		return this.fromNative(Object.create(this.native.prototype));
	}

	get debugString() {
		return '[Bridge: ' + this.native + ']';
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}
}

module.exports = BridgeValue;