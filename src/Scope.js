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
		this.writeToBlock = this.object;
		this.thiz = null;
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

	addBlock(name, value) {
		this.writeToBlock.setImmediate(name, value);
	}

	addConst(name, value) {
		this.set(name, value);
		this.writeToBlock.properties[name].writable = false;
		this.writeToBlock.properties[name].configurable = false;
	}

	/**
	 * Set the identifier in its nearest scope, or create a global.
	 * @param {string} name - Identifier to retreive
	 * @param {Value} value - New vaalue of variable
	 */
	set(name, value) {
		return this.put(name, value);
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

	createBlockChild() {
		let c = this.createChild();
		c.thiz = this.thiz;
		c.writeTo = this.writeTo;
		c.parent = this.parent;
		return c;
	}

	fromNative(value, x) {
		return this.realm.fromNative(value, x);
	}

	getVariableNames() {
		let list = [];
		for ( var o in this.object.properties ) list.push(o);
		return list;
	}

}

module.exports = Scope;
