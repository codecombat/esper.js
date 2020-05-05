'use strict';

const Value = require('../Value');
const BridgeValue = require('./BridgeValue');
const CompletionRecord = require('../CompletionRecord');
const EvaluatorInstruction = require('../EvaluatorInstruction');

class EmptyValue extends Value {
	constructor() {
		super(null);
	}

	get truthy() { return false; }

	*not() { return Value.fromNative(true); }

	*doubleEquals(other) {
		if ( other instanceof EmptyValue ) return Value.true;
		else if ( other instanceof BridgeValue ) return Value.fromNative(this.toNative() == other.toNative());
		else return Value.false;
	}

	*observableProperties(realm) {
		return;
	}

	*instanceOf() {
		return Value.false;
	}

	/**
	 * @param {String} name
	 * @param {Realm} realm
	 * @returns {CompletionRecord} Indexing empty values is a type error.
	 */
	*get(name) {
		let str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
		let realm = yield EvaluatorInstruction.getRealm;
		let err = CompletionRecord.makeTypeError(realm, str);
		yield * err.addExtra({code: 'IndexEmpty', target: this, prop: name});
		return err;
	}

	makeImmutable() {
		return true;
	}

}

module.exports = EmptyValue;
