"use strict";

const Value = require('../Value');
const BridgeValue = require('./BridgeValue');
const CompletionRecord = require('../CompletionRecord');

class EmptyValue extends Value {
	constructor() {
		super(null);
	}
	
	get truthy() { return false; }

	*not() { return Value.fromNative(true); }

	*doubleEquals(other) {
		if ( other instanceof EmptyValue ) return Value.true;
		else if ( other instanceof BridgeValue ) return this.fromNative(this.toNative() == other.toNative());
		else return Value.false;
	}

	*observableProperties() {
		return;
	}

}

module.exports = EmptyValue;
