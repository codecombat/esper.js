"use strict";
/* @flow */

const PropertyDescriptor = require("./values/PropertyDescriptor");

const Value = require("./Value");
const ObjectValue = require("./values/ObjectValue");

class Scope {
	constructor(realm) {
		this.parent = null;
		this.object = new ObjectValue(this);
		this.strict = false;
		this.realm = realm;
		this.global = this;
		this.writeTo = this.object;
	}

	/**
	 * @param {string} name - Identifier to retreive
	 * @returns {Value}
	 */
	get(name) {
		return this.object.get(name);
	}

	ref(name) {
		var vhar = this.object.properties[name];
		if (!vhar) return undefined;
		var that = this;
		var o = {
			setValue: vhar.setValue.bind(vhar, this),
			getValue: vhar.getValue.bind(vhar, this),
			set: (o, s) => vhar.value = o,
			isVariable: true
		};
		Object.defineProperty(o, 'value', {
			get: () => vhar.value,
			set: (v) => vhar.value = v
		});
		return o;
	}

	add(name, value) {
		this.writeTo.set(name, value);
	}

	addConst(name, value) {
		this.writeTo.set(name, value);
		this.writeTo.properties[name].writeable = false;
		this.writeTo.properties[name].configurable = false;
	}

	/**
	 * Sets an identifier in the scope to some value.
	 * @param {string} name - Identifier to set
	 * @param {Value} value - Value to set
	 */
	set(name, value) {
		this.writeTo.set(name, value);
	}

	unset(name) {
		delete this.variables[name];
	}

	has(name) {
		return this.object.has(name);
	}

	/**
	 * Set the identifier in its nearest scope, or create a global.
	 */
	assign(name, value) {
		let variable = this.object.properties[name];
		if ( variable ) {
			variable.value = value;
			return;
		}
		var v = new PropertyDescriptor(value, this);
		this.writeTo.properties[name] = v;
	}

	createChild() {
		let child = new Scope(this.realm);
		child.object.setPrototype(this.object);
		child.parent = this;
		child.strict = this.strict;
		child.global = this.global;
		return child;
	}

	//TODO: This is a patch to let a scope be a variable,
	//      but we could do it better.

	toNative() { return this; }
	fromNative(w) { return this.realm.fromNative(w); }
	*member(name) { 
		let ref = this.ref(name, this.realm);
		if ( ref ) return ref.value;
		return Value.undef;
	}

}

module.exports = Scope;