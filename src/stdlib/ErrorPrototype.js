"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const PrimitiveValue = require('../values/PrimitiveValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');




class ErrorPrototype extends EasyObjectValue {

	static get message() { return Value.emptyString; }
	static get name$() { return Value.fromNative('Error'); }

	static *toString(thiz, argz, s) {
		let name = yield * (yield * thiz.member('name')).toStringNative();
		let message = yield * (yield * thiz.member('message')).toStringNative();
		return Value.fromNative(`${name}: ${message}`);
	}

}

ErrorPrototype.prototype.wellKnownName = '%ErrorPrototype%';

module.exports = ErrorPrototype;

