"use strict";
/* @flow */

const Variable = require("./values/Variable");
const Value = require("./Value");

class Scope {
	constructor(env) {
		this.parent = null;
		this.variables = Object.create(null);
		this.strict = true;
		this.env = env;
		this.global = this;
	}

	/**
	 * @param {string} name - Identifier to retreive
	 * @returns {Value}
	 */
	get(name) {
		return this.variables[name].value;
	}

	ref(name) {
		return this.variables[name];
	}

	add(name, value) {
		this.variables[name] = new Variable(value);
	}

	/**
	 * Sets an identifier in the scope to some value.
	 * @param {string} name - Identifier to set
	 * @param {Value} value - Value to set
	 */
	set(name, value) {
		let variable = this.variables[name];
		if ( variable ) variable.value = value;
		else this.variables[name] = new Variable(value);
	}

	unset(name) {
		delete this.variables[name];
	}

	has(name) {
		return !!this.variables[name];
	}

	/**
	 * Set the identifier in its nearest scope, or create a global.
	 */
	assign(name, value) {
		let existing = this.variables[name];
		if ( existing ) {
			existing.value = value;
			return;
		}
		let parent = this;
		while ( parent.parent ) parent = parent.parent;
		parent.add(name, value);
	}

	createChild() {
		let child = new Scope();
		child.variables = Object.create(this.variables);
		child.parent = this;
		child.strict = this.strict;
		child.env = this.env;
		child.global = this.global;
		return child;
	}

	//TODO: This is a patch to let a scope be a variable,
	//      but we could do it better.

	toNative() { return this; }

	*member(name) { 
		let ref = this.ref(name);
		if ( ref ) return ref.value;
		return Value.undef;
	}

}

module.exports = Scope;