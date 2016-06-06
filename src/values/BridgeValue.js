'use strict';
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
/**
 * Represents a value that maps directly to an untrusted local value.
 */
class BridgeValue extends Value {

	constructor(value) {
		super();
		this.native = value;
	}

	makeBridge(value) {
		return BridgeValue.make(value);
	}

	static make(native) {
		if ( native === undefined ) return Value.undef;
		let prim = Value.fromPrimativeNative(native);
		if ( prim ) return prim;

		if ( Value.hasBookmark(native) ) {
			return Value.getBookmark(native);
		}

		return new BridgeValue(native);
	}

	ref(name) {
		let that = this;
		let out = Object.create(null);
		let str = (value) => that.native[name] = value.toNative();
		out.getValue = function *() { return that.native[name]; };
		out.setValue = function *(to) { return str(to); };

		return out;
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) { return this.makeBridge(this.native == other.toNative()); }
	*tripleEquals(other) { return this.makeBridge(this.native === other.toNative()); }

	*add(other) { return this.makeBridge(this.native + other.toNative()); }
	*subtract(other) { return this.makeBridge(this.native - other.toNative()); }
	*multiply(other) { return this.makeBridge(this.native * other.toNative()); }
	*divide(other) { return this.makeBridge(this.native / other.toNative()); }
	*mod(other) { return this.makeBridge(this.native % other.toNative()); }

	*shiftLeft(other) { return this.makeBridge(this.native << other.toNative()); }
	*shiftRight(other) { return this.makeBridge(this.native >> other.toNative()); }
	*shiftRightZF(other) { return this.makeBridge(this.native >>> other.toNative()); }

	*bitAnd(other) { return this.makeBridge(this.native & other.toNative()); }
	*bitOr(other) { return this.makeBridge(this.native | other.toNative()); }
	*bitXor(other) { return this.makeBridge(this.native ^ other.toNative()); }

	*gt(other) { return this.makeBridge(this.native > other.toNative()); }
	*lt(other) { return this.makeBridge(this.native < other.toNative()); }
	*gte(other) { return this.makeBridge(this.native >= other.toNative()); }
	*lte(other) { return this.makeBridge(this.native <= other.toNative()); }

	*inOperator(other) { return this.makeBridge(this.native in other.toNative()); }
	*instanceOf(other) { return this.makeBridge(this.native instanceof other.toNative()); }

	*unaryPlus() { return this.makeBridge(+this.native); }
	*unaryMinus() { return this.makeBridge(-this.native); }
	*not() { return this.makeBridge(!this.native); }



	*get(name) {
		return this.makeBridge(this.native[name]);
	}

	*set(name, value) {
		this.native[name] = value.toNative();
	}

	*observableProperties(realm) {
		for ( let p in this.native ) {
			yield this.makeBridge(p);
		}
		return;
	}

	/**
	 *
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
			return this.makeBridge(result);
		} catch ( e ) {
			let result = this.makeBridge(e);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}

	}

	*makeThisForNew() {
		return this.makeBridge(Object.create(this.native.prototype));
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
