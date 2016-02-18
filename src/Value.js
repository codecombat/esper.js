"use strict";
/* @flow */

const CompletionRecord = require('./CompletionRecord');

let undef, nil, tru, fals, nan, emptyString, zero;
let cache = new WeakMap();
let bookmarks = new WeakMap();
let ObjectValue, PrimitiveValue, StringValue, NumberValue;

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
		if ( value === true ) return tru;
		if ( value === false ) return fals;



		if ( typeof value === "number" ) return new NumberValue(value);
		if ( typeof value === "string" ) return new StringValue(value);
		if ( typeof value === "boolean" ) return new PrimitiveValue(value);
		//TODO: Implement a real envirionemnt
		//TODO: Is this cache dangerous?

		if ( bookmarks.has(value) ) {
			return bookmarks.get(value);
		}

		if ( !cache.has(value) ) {
			if ( !env ) throw new Error("We needed an env, but we didnt have one.  We were sad :(");
			let nue = new BridgeValue(env, value);
				
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

	static get true() {
		return tru;
	}

	static get false() {
		return fals;
	}

	static get nan() {
		return nan;
	}

	static get emptyString() {
		return emptyString;
	}

	static get zero() { return zero; }

	static createNativeBookmark(v) {
		var out = function Bookmark() { throw "Atempted to invoke bookmark for " + v.debugString; };
		out.toString = function() { return v.debugString; };
		out.inspect = function() { return v.debugString; };
		bookmarks.set(out, v);
		return out;
	}

	constructor(env) {
		this.env = env;
	}
	

	/**
	 * Converts this value to a native javascript value.
	 * @abstract
	 * @returns {*}
	 */
	toNative() {

	}

	get debugString() { 
		let native = this.toNative();
		return native ? native.toString() : '???';
	}

	inspect() { return this.debugString; }

	fromNative(other) {
		return Value.fromNative(other, this.env);
	}

	*member(name) {
		let err = "Can't access member " + name + " of that type: " + require('util').inspect(this);
		return new CompletionRecord.makeTypeError(this.env, err);
	}

	*not() {
		return !this.truthy ? Value.true : Value.false;
	}

	*typeOf() {
		return Value.fromNative(this.jsTypeName);
	}

	*notEquals(other, env) {
		var result = yield * this.doubleEquals(other, env);
		return yield * result.not();
	}

	*doubleNotEquals(other, env) {
		var result = yield * this.tripleEquals(other, env);
		return yield * result.not();
	}

	*tripleEquals(other, env) {
		return other === this ? Value.true : Value.false;
	}

	*makeThisForNew() {
		var nue = new ObjectValue(this.env);
		var p = this.properties['prototype'];
		if ( p ) nue.setPrototype(p.value);
		return nue;
	}

	*gt(other) { return this.fromNative((yield * this.toNumberNative()) > (yield * other.toNumberNative())); }
	*lt(other) { return this.fromNative((yield * this.toNumberNative()) < (yield * other.toNumberNative())); }
	*gte(other) { return this.fromNative((yield * this.toNumberNative()) >= (yield * other.toNumberNative())); }
	*lte(other) { return this.fromNative((yield * this.toNumberNative()) <= (yield * other.toNumberNative())); }
	*subtract(other) { return this.fromNative((yield * this.toNumberNative()) - (yield * other.toNumberNative())); }

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

	get specTypeName() {
		return this.jsTypeName;
	}

	get isCallable() {
		return ( typeof this.call === "function" );
	}

	*toNumberValue() { throw new Error('Unimplemented: Value#toNumberValue'); }
	*toStringValue() { throw new Error('Unimplemented: Value#StringValue'); }
	*toStringNative() { return (yield * this.toStringValue()).native; }

	*toBooleanValue() { return this.truthy ? tru : fals; }
	
	*toUIntNative() { 
		let nv = yield * this.toNumberValue();
		return Math.floor(nv.native);
	}
	
	*toIntNative() { 
		let nv = yield * this.toNumberValue();
		return Math.floor(nv.native);
	}
	
	*toNumberNative() { 
		let nv = yield * this.toNumberValue();
		return nv.native;
	}

	*toPrimitiveValue(preferedType) { throw new Error('Unimplemented: Value#jsTypeName'); }
	
}
module.exports = Value;

var BridgeValue = require('./values/BridgeValue');
if ( BridgeValue.default ) BridgeValue = BridgeValue.default;


ObjectValue = require('./values/ObjectValue');
PrimitiveValue = require('./values/PrimitiveValue');
StringValue = require('./values/StringValue');
NumberValue = require('./values/NumberValue');
const UndefinedValue = require('./values/UndefinedValue');
const NullValue = require('./values/NullValue');

undef = new UndefinedValue();
nil = new NullValue();
tru = new PrimitiveValue(true);
fals = new PrimitiveValue(false);
nan = new PrimitiveValue(NaN);
emptyString = new PrimitiveValue('');
zero = new PrimitiveValue(0);

