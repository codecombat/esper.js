"use strict";

const Value = require('../Value');
const BridgeValue = require('./BridgeValue');

class EmptyValue extends Value {
	constructor() {
		super(null);
	}
	
	get truthy() { return false; }

	*not() { return Value.fromNative(true); }

	*doubleEquals(other) {
		if ( other instanceof EmptyValue ) return this.fromNative(true);
		else if ( other instanceof BridgeValue ) return this.fromNative(this.toNative() == other.toNative());
	}

	*call(evaluator, thiz, args) {
		return yield * evaluator.throw("Can't call undefined or null.");
	}


}

module.exports = EmptyValue;
