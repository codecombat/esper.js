'use strict';
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
const ArrayValue = require('./ArrayValue');

function invoke(target, thiz, args) {
	return Function.prototype.apply.call(target, thiz, args);
}

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class LinkValue extends Value {

	constructor(value, realm) {
		super();
		this.native = value;
		this.realm = realm;
	}

	static make(native, realm) {
		let wellKnown = realm.lookupWellKnown(native);
		if ( wellKnown ) return wellKnown;

		if ( Array.isArray(native) ) {
			var ia = new Array(native.length);
			for ( let i = 0; i < native.length; ++i ) {
				ia[i] = LinkValue.make(native[i], realm);
			}
			return ArrayValue.make(ia, realm);
		}

		return new LinkValue(native, realm);
	}

	ref(name, realm) {

		let that = this;
		let out = Object.create(null);

		let getter;
		if ( this.native.hasOwnProperty(name) ) {
			getter = () => realm.import(this.native[name], this.linkKind);
		} else {
			getter = () => realm.import(this.native, this.linkKind).ref(name, realm).value;
		}

		out.getValue = function *() { return getter(); };
		out.setValue = function *(to) { return yield * that.set(name, to); };
		out.del = function() { return false; };

		return out;
	}

	*set(name, value, s, extra) {
		this.native[name] = value.toNative();
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	makeLink(value) {
		return this.realm.import(value, this.linkKind);
	}

	*doubleEquals(other) { return this.makeLink(this.native == other.toNative()); }
	*tripleEquals(other) { return this.makeLink(this.native === other.toNative()); }

	*add(other) { return this.makeLink(this.native + other.toNative()); }
	*subtract(other) { return this.makeLink(this.native - other.toNative()); }
	*multiply(other) { return this.makeLink(this.native * other.toNative()); }
	*divide(other) { return this.makeLink(this.native / other.toNative()); }
	*mod(other) { return this.makeLink(this.native % other.toNative()); }

	*shiftLeft(other) { return this.makeLink(this.native << other.toNative()); }
	*shiftRight(other) { return this.makeLink(this.native >> other.toNative()); }
	*shiftRightZF(other) { return this.makeLink(this.native >>> other.toNative()); }

	*bitAnd(other) { return this.makeLink(this.native & other.toNative()); }
	*bitOr(other) { return this.makeLink(this.native | other.toNative()); }
	*bitXor(other) { return this.makeLink(this.native ^ other.toNative()); }

	*gt(other) { return this.makeLink(this.native > other.toNative()); }
	*lt(other) { return this.makeLink(this.native < other.toNative()); }
	*gte(other) { return this.makeLink(this.native >= other.toNative()); }
	*lte(other) { return this.makeLink(this.native <= other.toNative()); }

	*inOperator(other) { return this.makeLink(other.toNative() in this.native); }
	*instanceOf(other) { return this.makeLink(this.native instanceof other.toNative()); }

	*unaryPlus() { return this.makeLink(+this.native); }
	*unaryMinus() { return this.makeLink(-this.native); }
	*not() { return this.makeLink(!this.native); }



	*get(name, realm) {
		if ( this.native.hasOwnProperty(name) ) {
			return this.makeLink(this.native[name], realm);
		}

		return yield * this.makeLink(Object.getPrototypeOf(this.native), realm).get(name, realm);
	}


	*observableProperties(realm) {
		for ( let p in this.native ) {
			yield this.makeLink(p);
		}
		return;
	}

	/**
	 *
	 * @param {Value} thiz
	 * @param {Value[]} args
	 * @param {Scope} s
	 */
	*call(thiz, args, s) {
		let realArgs = new Array(args.length);
		for ( let i = 0; i < args.length; ++i ) {
			realArgs[i] = args[i].toNative();
		}
		try {
			let result = invoke(this.native, thiz ? thiz.toNative() : undefined, realArgs);
			let val = this.makeLink(result, s.realm);
			if ( typeof s.realm.options.linkValueCallReturnValueWrapper === 'function' ) {
				val = s.realm.options.linkValueCallReturnValueWrapper(val);
			}
			return val;
		} catch ( e ) {
			let result = this.makeLink(e, s.realm);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}

	}

	get isCallable() {
		return ( typeof this.native === 'function' );
	}

	getPropertyValueMap() {
		let list  = {};
		for ( let p in this.native ) {
			let v = this.native[p];
			list[p] = this.makeLink(v);
		}
		return list;
	}

	*toNumberValue() { return Value.fromNative((Number(this.native))); }
	*toStringValue() { return Value.fromNative((String(this.native))); }

	getPrototype(realm) {
		return realm.ObjectPrototype;
	}

	*makeThisForNew() {
		return Value.undef;
	}

	get debugString() {
		return '[Link: ' + this.native + ']';
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) {
		switch ( preferedType ) {
			case 'string':
				return Value.fromNative(this.native.toString());
			default:
				return Value.fromNative(this.native.valueOf());
		}
	}

	get linkKind() { return 'link'; }
}

module.exports = LinkValue;
