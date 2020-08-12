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
		this.top = this;
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
			isVariable: !!vhar.variable
		};

		if ( this.global.object.properties[name] === vhar ) {
			o.del = (s) => this.global.object.delete(name,s);
		}

		return o;
	}

	add(name, value) {
		this.writeTo.setImmediate(name, value);
		this.writeToBlock.properties[name].variable = true;
	}

	addBlock(name, value) {
		this.writeToBlock.setImmediate(name, value);
		this.writeToBlock.properties[name].variable = true;
	}

	addConst(name, value) {
		this.setImmediate(name, value);
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
	setImmediate(name, value) {
		return this.putImmediate(name, value);
	}

	has(name) {
		return this.object.has(name);
	}

	blockHas(name) {
		return !!Object.getOwnPropertyDescriptor(this.writeToBlock.properties, name);
	}

	/**
	 * Set the identifier in its nearest scope, or create a global.
	 * @param {string} name - Identifier to retreive
	 * @param {Value} value - New vaalue of variable
	 * @param {Scope} s - Code scope to run setter functions in
	 * Returns a generator.
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

	putImmediate(name, value, s) {
		let variable = this.object.properties[name];
		if ( variable ) {
			return variable.setValueImmediate(this.object, value, s);
		}
		var v = new PropertyDescriptor(value, this);
		this.writeTo.properties[name] = v;
		return Value.undef.fastGen();
	}

	removeImmediate(name, s) {
		if ( Object.prototype.hasOwnProperty.call(this.object.properties, name) )
			this.object.delete(name, s)
		if ( this.parent )
			this.parent.removeImmediate(name, s);
	}

	createChild() {
		let child = new Scope(this.realm);
		child.object.eraseAndSetPrototype(this.object);
		child.parent = this;
		child.strict = this.strict;
		child.global = this.global;
		child.realm = this.realm;
		child.top = this.top;
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
