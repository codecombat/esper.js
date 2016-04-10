'use strict';

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
		let name = yield * (yield * thiz.get('name')).toStringNative();
		let message = yield * (yield * thiz.get('message')).toStringNative();
		if ( name && message ) return Value.fromNative(`${name}: ${message}`);
		else if ( message ) return Value.fromNative(message);
		else return Value.fromNative(name);
	}

}

ErrorPrototype.prototype.wellKnownName = '%ErrorPrototype%';

module.exports = ErrorPrototype;

