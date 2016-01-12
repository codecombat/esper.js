"use strict";
/* @flow */



var undef, nil, tru, fals, nan;
var cache = new WeakMap();
var bookmarks = new WeakMap();

/**
 * Represents a value a variable could take.
 */
class Value {
	
	/**
	 * Convert a native javascript value to a Value
	 * @param {any} value - The value to convert
	 * @param {Environment} value - The environment of the new value.
	 */
	static fromNative(value, env) {
		if ( value === undefined ) return undef;
		if ( value === null ) return nil;

		if ( bookmarks.has(value) ) {
			return bookmarks.get(value);
		}

		if ( typeof value !== "object" ) return new BridgeValue(value);
		//TODO: Implement a real envirionemnt
		//TODO: Is this cache dangerous?
		if ( !cache.has(value) ) {
			let nue = new BridgeValue(value);
			cache.set(value, nue);
			return nue;
		}
		return cache.get(value);
	}

	/**
	 * Holds a value representing `undefined`
	 * @returns {UndefinedValue}
	 */
	static get undef() {
		return undef;
	}

	/**
	 * Holds a value representing `null`
	 * @returns {UndefinedValue}
	 */
	static get null() {
		return nil;
	}

	static get NaN() {
		return nan;
	}


	static get true() {
		return tru;
	}

	static get false() {
		return fals;
	}


	static createNativeBookmark(v) {
		var out = {type: 'Bookmark'};
		bookmarks.set(out, v);
		return out;
	}

	/**
	 * Converts this value to a native javascript value.
	 * @abstract
	 * @returns {*}
	 */
	toNative() {

	}

	debugString() { 
		let native = this.toNative()
		return native ? native.toString() : '???';
	}


	fromNative(other) {
		return Value.fromNative(other, this.env);
	}

	/**
	 *
	 * @param {Evaluator} evaluator
	 * @param {Value} thiz
	 * @param {Value[]} args
	 */
	*call(evaluator, thiz, args) {
		return yield * evaluator.throw("Can't call that type");
	}


	*member(name) {
		throw new Error("Can't access member " + name + " of that type: " + require('util').inspect(this));
	}

	*not() {
		return !this.truthy ? Value.true : Value.false;
	}

	*typeOf() {
		return Value.fromNative(this.jsTypeName);
	}

	*notEquals(other) {
		var result = yield * this.doubleEquals(other);
		return yield * result.not();
	}

	*doubleNotEquals(other) {
		var result = yield * this.tripleEquals(other);
		return yield * result.not();
	}

	/**
	 * Is the value is truthy, i.e. `!!value`
	 * @abstract
	 * @type {boolean} 
	 */
	get truthy() {
		throw new Error('Unimplemented: Value#truthy');
	}

	get jsTypeName() {
		throw new Error('Unimplemented: Value#jsTypeName');
	}
}
module.exports = Value;

var BridgeValue = require('./values/BridgeValue');
if ( BridgeValue.default ) BridgeValue = BridgeValue.default;

class EmptyValue extends Value {
	get truthy() { return false; }

	*not() { return Value.fromNative(true); }

	*doubleEquals(other) {
		if ( other instanceof EmptyValue ) return true;
		else if ( other instanceof ProxyValue ) return this.toNative() == other.toNative();
	}

	*call(evaluator, thiz, args) {
		return yield * evaluator.throw("Can't call undefined or null.");
	}

}

class UndefinedValue extends EmptyValue {
	toNative() { return undefined; }
	get jsTypeName() { return "undefined"; }
	*tripleEquals(other) {
		return other instanceof UndefinedValue ? Value.true : Value.false;
	}
}

class NullValue extends EmptyValue {
	toNative() { return null; }
	get jsTypeName() { return "object"; }
	*tripleEquals(other) {
		return other instanceof NullValue ? Value.true : Value.false;
	}
}

tru = new BridgeValue(true);
fals = new BridgeValue(false);
nan = new BridgeValue(NaN);
undef = new UndefinedValue();
nil = new NullValue();

