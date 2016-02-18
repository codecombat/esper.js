"use strict";


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');


class RegExpValue extends ObjectValue {

	constructor(env) {
		super(env);
		this.setPrototype(this.env.RegExpPrototype);
	}


	static make(regexp, env) {

		let av = new RegExpValue(env);
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
