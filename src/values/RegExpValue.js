'use strict';


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');


class RegExpValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.RegExpPrototype);
	}

	static make(regexp, realm) {

		let av = new RegExpValue(realm);
		av.regexp = regexp;
		av.setImmediate('source', Value.fromNative(regexp.source));
		av.properties['source'].enumerable = false;
		av.setImmediate('global', Value.fromNative(regexp.global));
		av.properties['global'].enumerable = false;
		av.setImmediate('ignoreCase', Value.fromNative(regexp.ignoreCase));
		av.properties['ignoreCase'].enumerable = false;
		av.setImmediate('multiline', Value.fromNative(regexp.multiline));
		av.properties['multiline'].enumerable = false;
		return av;
	}

	toNative() { return this.regexp; }

	get debugString() {
		return this.regexp.toString();
	}
}

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;
