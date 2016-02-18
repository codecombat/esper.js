"use strict";


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');


class RegExpValue extends ObjectValue {

	constructor(realm) {
		super(realm);
		this.setPrototype(this.realm.RegExpPrototype);
	}


	static make(regexp, realm) {

		let av = new RegExpValue(realm);
		av.regexp = regexp;
		
		return av;
	}

	toNative() { return this.regexp; }

	get debugString() {
		return this.regexp.toString();
	}
}

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;
