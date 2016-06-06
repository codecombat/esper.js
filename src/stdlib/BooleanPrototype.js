'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

class BooleanPrototype extends EasyObjectValue {
	static *toString$e(thiz, argz) {
		if ( thiz.primativeValue.truthy ) return Value.fromNative('true');
		else return Value.fromNative('false');
	}
}

module.exports = BooleanPrototype;
