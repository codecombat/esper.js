'use strict';
/* @flow */

const CompletionRecord = require('./CompletionRecord');
const GenDash = require('./GenDash');

let undef, nil, tru, fals, nan, emptyString, zero, one, negone, negzero, smallIntValues;
let cache = new WeakMap();
let bookmarks = new WeakMap();
let ObjectValue, PrimitiveValue, StringValue, NumberValue, BridgeValue, Evaluator;



let serial = 0;
/**
 * Represents a value a variable could take.
 */
class Value {
	/**
	 * Convert a native javascript primative value to a Value
	 * @param {any} value - The value to convert
	 */
	static fromPrimativeNative(value) {
		if ( !value )  {
			if ( value === undefined ) return undef;
			if ( value === null ) return nil;
			if ( value === false ) return fals;
			if ( value === '' ) return emptyString;
		}

		if ( value === true ) return tru;

		if ( typeof value === 'number' ) {
			if ( value === 0 ) {
				return 1/value > 0 ? zero : negzero;
			}
			if ( value|0 === value ) {
				let snv = smallIntValues[value+1];
				if ( snv ) return snv;
			}
			return new NumberValue(value);
		}
		if ( typeof value === 'string' ) return new StringValue(value);
		if ( typeof value === 'boolean' ) return new PrimitiveValue(value);
	}

	static hasBookmark(native) { return bookmarks.has(native); }
	static getBookmark(native) { return bookmarks.get(native); }

	/**
	 * Convert a native javascript value to a Value
	 *
	 * @param {any} value - The value to convert
	 * @param {Realm} realm - The realm of the new value.
	 */
	static fromNative(value, realm) {
		if ( value instanceof Value ) return value;
		let prim = Value.fromPrimativeNative(value);
		if ( prim ) return prim;

		if ( value instanceof Error ) {
			if ( !realm ) throw new Error('We needed a realm, but we didnt have one.  We were sad :(');
			if ( value instanceof TypeError ) return realm.TypeError.makeFrom(value);
			if ( value instanceof ReferenceError ) return realm.ReferenceError.makeFrom(value);
			if ( value instanceof SyntaxError ) return realm.SyntaxError.makeFrom(value);
			else return realm.Error.makeFrom(value);
		}

		if ( Value.hasBookmark(value) ) {
			return Value.getBookmark(value);
		}

		throw new TypeError('Tried to load an unsafe native value into the interperter:' + typeof value + ' / ' + value);
		//TODO: Is this cache dangerous?
		if ( !cache.has(value) ) {
			let nue = new BridgeValue(realm, value);
			cache.set(value, nue);
			return nue;
		}
		return cache.get(value);
	}

	/**
	 * Holds a value representing `undefined`
	 *
	 * @returns {UndefinedValue}
	 */
	static get undef() {
		return undef;
	}

	/**
	 * Holds a value representing `null`
	 *
	 * @returns {NullValue}
	 */
	static get null() {
		return nil;
	}

	/**
	 * Holds a value representing `true`
	 *
	 * @returns {BooleanValue} true
	 */
	static get true() {
		return tru;
	}

	/**
	 * Holds a value representing `fasle`
	 *
	 * @returns {BooleanValue} false
	 */
	static get false() {
		return fals;
	}

	/**
	 * Holds a value representing `NaN`
	 *
	 * @returns {NumberValue} NaN
	 */
	static get nan() {
		return nan;
	}

	/**
	 * Holds a value representing `''`
	 *
	 * @returns {StringValue} ''
	 */
	static get emptyString() {
		return emptyString;
	}

	/**
	 * Holds a value representing `0`
	 *
	 * @returns {NumberValue} 0
	 */
	static get zero() { return zero; }

	static createNativeBookmark(v, realm) {
		var out;
		let thiz = this;
		if ( typeof v.call === 'function' ) {
			switch ( realm.options.bookmarkInvocationMode ) {
				case 'loop':

				out = function Bookmark() {
					let Evaluator = require('./Evaluator');
					let cthis = realm.makeForForeignObject(this);
					let c = v.call(cthis, [], realm.globalScope);
					let evalu = new Evaluator(realm, null, realm.globalScope);
					evalu.pushFrame({type: 'program', generator: c, scope: realm.globalScope});
					let gen = evalu.generator();
					let result;
					do {
						result = gen.next();
					} while ( !result.done );
					return result.value.toNative();
				};
				break;
				default:
				out = function Bookmark() { throw new Error('Atempted to invoke bookmark for ' + v.debugString); };
			}
		} else {
			out = {};
		}
		Object.defineProperties(out, {
			toString: {value: function() { return v.debugString; }, writable: true},
			inspect: {value: function() { return v.debugString; }, writable: true},
		});
		bookmarks.set(out, v);
		return out;
	}

	constructor() {
		this.serial = serial++;
	}


	/**
	 * Converts this value to a native javascript value.
	 *
	 * @abstract
	 * @returns {*}
	 */
	toNative() {
		throw new Error('Unimplemented: Value#toNative');
	}

	/**
	 * A string representation of this Value suitable for display when
	 * debugging.
	 * @abstract
	 * @returns {string}
	 */
	get debugString() {
		let native = this.toNative();
		return native ? native.toString() : '???';
	}

	inspect() { return this.debugString; }

	//TODO: Kill this
	fromNative(other, realm) {
		return Value.fromNative(other, realm);
	}

	/**
	 * Indexes the value to get the value of a property.
	 * i.e. `value[name]`
	 * @param {String} name
	 * @param {Realm} realm
	 * @abstract
	 * @returns {Value}
	 */
	*get(name, realm) {
		let err = "Can't access get " + name + ' of that type: ' + require('util').inspect(this);
		return CompletionRecord.makeTypeError(realm, err);
	}

	getImmediate(name) {
		return GenDash.syncGenHelper(this.get(name));
	}

	/**
	 * Computes the javascript expression `!value`
	 * @returns {Value}
	 */
	*not() {
		return !this.truthy ? Value.true : Value.false;
	}

	/**
	 * Computes the javascript expression `+value`
	 * @returns {Value}
	 */
	*unaryPlus() {
		return Value.fromNative(+(yield * this.toNumberValue()));
	}

	/**
	 * Computes the javascript expression `-value`
	 * @returns {Value}
	 */
	*unaryMinus() {
		return Value.fromNative(-(yield * this.toNumberValue()));
	}

	/**
	 * Computes the javascript expression `typeof value`
	 * @returns {Value}
	 */
	*typeOf() {
		return Value.fromNative(this.jsTypeName);
	}

	/**
	 * Computes the javascript expression `!(value == other)`
	 * @param {Value} other - The other value
	 * @param {Realm} realm - The realm to use when creating resuls.
	 * @returns {Value}
	 */
	*notEquals(other, realm) {
		var result = yield * this.doubleEquals(other, realm);
		return yield * result.not();
	}

	/**
	 * Computes the javascript expression `!(value === other)`
	 * @param {Value} other - The other value
	 * @param {Realm} realm - The realm to use when creating resuls.
	 * @returns {Value}
	 */
	*doubleNotEquals(other, realm) {
		var result = yield * this.tripleEquals(other, realm);
		return yield * result.not();
	}

	/**
	 * Computes the javascript expression `value === other`
	 * @param {Value} other - The other value
	 * @param {Realm} realm - The realm to use when creating resuls.
	 * @returns {Value}
	 */
	*tripleEquals(other, realm) {
		return other === this ? Value.true : Value.false;
	}

	*makeThisForNew(realm) {
		var nue = new ObjectValue(realm);
		var p = this.properties['prototype'];
		if ( p ) nue.setPrototype(p.value);
		return nue;
	}

	/**
	 * Computes the javascript expression `value > other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*gt(other) { return this.fromNative((yield * this.toNumberNative()) > (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value < other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*lt(other) { return this.fromNative((yield * this.toNumberNative()) < (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value >= other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*gte(other) { return this.fromNative((yield * this.toNumberNative()) >= (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value <= other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*lte(other) { return this.fromNative((yield * this.toNumberNative()) <= (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value - other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*subtract(other) { return this.fromNative((yield * this.toNumberNative()) - (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value / other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*divide(other) { return this.fromNative((yield * this.toNumberNative()) / (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value * other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*multiply(other) { return this.fromNative((yield * this.toNumberNative()) * (yield * other.toNumberNative())); }

	/**
	 * Computes the javascript expression `value % other`
	 * @param {Value} other - The other value
	 * @returns {Value}
	 */
	*mod(other) { return this.fromNative((yield * this.toNumberNative()) % (yield * other.toNumberNative())); }

	*bitNot() { return this.fromNative(~(yield * this.toNumberNative())); }

	*shiftLeft(other) { return this.fromNative((yield * this.toNumberNative()) << (yield * other.toNumberNative())); }
	*shiftRight(other) { return this.fromNative((yield * this.toNumberNative()) >> (yield * other.toNumberNative())); }
	*shiftRightZF(other) { return this.fromNative((yield * this.toNumberNative()) >>> (yield * other.toNumberNative())); }

	*bitAnd(other) { return this.fromNative((yield * this.toNumberNative()) & (yield * other.toNumberNative())); }
	*bitOr(other) { return this.fromNative((yield * this.toNumberNative()) | (yield * other.toNumberNative())); }
	*bitXor(other) { return this.fromNative((yield * this.toNumberNative()) ^ (yield * other.toNumberNative())); }

	/**
	 * Is the value is truthy, i.e. `!!value`
	 *
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
		return ( typeof this.call === 'function' );
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

	*toPrimitiveValue(preferedType) { throw new Error('Unimplemented: Value#toPrimitiveValue'); }
	*toPrimitiveNative(preferedType) { return (yield * this.toPrimitiveValue(preferedType)).native; }

	/**
	 * Quickly make a generator for this value
	 */
	*fastGen() { return this; }

}
module.exports = Value;

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
emptyString = new StringValue('');

zero = new NumberValue(0);
negzero = new NumberValue(-0);
one = new NumberValue(1);
negone = new NumberValue(-1);
smallIntValues = [
	negone, zero,
	one, new NumberValue(2), new NumberValue(3), new NumberValue(4), new NumberValue(5),
	new NumberValue(6), new NumberValue(7), new NumberValue(8), new NumberValue(9)
	]
