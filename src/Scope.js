'use strict';

const PropertyDescriptor = require('./values/PropertyDescriptor');

const Value = require('./Value');
const ObjectValue = require('./values/ObjectValue');

class Scope {
	constructor(realm) {
		this.parent = null;
		this.object = new ObjectValue(realm);
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
		//Fast property access in the common case.
		let prop = this.object.properties[name];
		if ( !prop ) return Value.undef;
		if ( !prop.getter ) return prop.value;
		return this.object.getImmediate(name);
	}

	ref(name) {
		var vhar = this.object.properties[name];
		if (!vhar) return undefined;
		var that = this;
		var o = {
			setValue: vhar.setValue.bind(vhar, this),
			getValue: vhar.getValue.bind(vhar, this),
			isVariable: true
		};
		return o;
	}

	add(name, value) {
		this.writeTo.setImmediate(name, value);
	}

	addConst(name, value) {
		this.set(name, value);
		this.writeTo.properties[name].writable = false;
		this.writeTo.properties[name].configurable = false;
	}

	/**
	 * Sets an identifier in the scope to some value.
	 *
	 * @param {string} name - Identifier to set
	 * @param {Value} value - Value to set
	 */
	set(name, value) {
		this.writeTo.setImmediate(name, value);
	}

	has(name) {
		return this.object.has(name);
	}

	/**
	 * Set the identifier in its nearest scope, or create a global.
	 * @param {string} name - Identifier to retreive
	 * @param {Value} value - New vaalue of variable
	 * @param {Scope} s - Code scope to run setter functions in
	 */
	put(name, value, s) {
		let variable = this.object.properties[name];
		if ( variable ) {
			return variable.setValue(this.object, value, s);
		}
		var v = new PropertyDescriptor(value, this);
		this.writeTo.properties[name] = v;
		return Value.undef.fastGen();
	}

	createChild() {
		let child = new Scope(this.realm);
		child.object.eraseAndSetPrototype(this.object);
		child.parent = this;
		child.strict = this.strict;
		child.global = this.global;
		child.realm = this.realm;
		return child;
	}

	fromNative(value) {
		return this.realm.fromNative(value);
	}

	getVariableNames() {
		let list = [];
		for ( var o in this.object.properties ) list.push(o);
		return list;
	}

}

module.exports = Scope;
