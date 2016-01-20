"use strict";
/* @flow */



var undef, nil;
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

		if ( typeof value !== "object" ) return new BridgeValue(env, value);
		//TODO: Implement a real envirionemnt
		//TODO: Is this cache dangerous?
		if ( !cache.has(value) ) {
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


	static createNativeBookmark(v) {
		var out = {type: 'Bookmark'};
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

	debugString() { 
		let native = this.toNative();
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
		return !this.truthy ? this.env.true : this.env.false;
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
		return other === this ? env.true : env.false;
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


const UndefinedValue = require('./values/UndefinedValue');
const NullValue = require('./values/NullValue');

undef = new UndefinedValue();
nil = new NullValue();

