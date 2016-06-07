'use strict';

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
	*get(name, realm) {
		let str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
		let err = CompletionRecord.makeTypeError(realm, str);
		yield * err.addExtra({code: 'IndexEmpty', target: this, prop: name});
		return err;
	}

}

module.exports = EmptyValue;
