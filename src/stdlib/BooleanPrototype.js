'use strict';

const PrimitiveValue = require('../values/PrimitiveValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

class BooleanPrototype extends EasyObjectValue {
	static *toString$e(thiz, argz) {
		let prim = thiz instanceof PrimitiveValue ? thiz : yield * thiz.toPrimitiveValue();
		if ( prim.truthy ) return Value.fromNative('true');
		else return Value.fromNative('false');
	}
}

module.exports = BooleanPrototype;
