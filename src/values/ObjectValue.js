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
		var v = new Variable(value, this);
		v.del = () => this.delete(name);
		this.properties[name] = v;
	}

	get(name) {
		let ref = this.ref(name);
		if ( ref ) return ref.value;
		return Value.undef;
	}

	set(name, value) {
		var v = new Variable(value, this);
		v.del = () => this.delete(name);
		this.properties[name] = v;
	}

	has(name) {
		return name in this.properties;
	}

	delete(name) {
		delete this.properties[name];
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

	*instanceOf(other, env) {
		if ( other.toNative() === Object ) return env.true;
		else return env.false;
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