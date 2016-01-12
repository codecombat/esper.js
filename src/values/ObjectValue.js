"use strict";
/* @flow */

const Value = require('../Value');
const Variable = require('./Variable');

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ObjectValue extends Value {
	
	constructor(scope) {
		super();
		this.env = scope.env;
		this.properties = Object.create(null);
	}

	ref(name) {
		return this.properties[name];
	}

	assign(name, value) {
		let variable = this.properties[name];
		if ( variable ) variable.value = value;
		else this.properties[name] = new Variable(value);
	}

	toNative() {
		var out = {};
		for ( var name in this.properties ) {
			out[name] = this.properties[name].value.toNative();
		}
		return out;
	}


	*member(name) { 
		let ref = this.ref(name);
		if ( ref ) return ref.value;
		return Value.undef;
	}

	*instanceOf(other) {
		if ( other.toNative() === Object ) return Value.true;
		else return Value.false;
	}

	*call(evaluator, thiz, args) {
		return yield evaluator.throw("Can't call a non-function object.");

	}

	*observableProperties() {
		for ( var p in this.properties ) {
			yield this.fromNative(p);
		}
		return;
	}

	setPrototype(val) {
		this.proto = val;
		Object.setPrototypeOf(this.properties, val.properties);
	}

	get truthy() {
		return true;
	}

	get jsTypeName() {
		return "object";
	}
}

module.exports = ObjectValue;