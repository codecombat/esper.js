'use strict';

const PrimitiveValue = require('../values/PrimitiveValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

class BooleanPrototype extends EasyObjectValue {
	static *toString$e(thiz, argz) {
		let pv = thiz;
		if ( thiz.specTypeName !== 'boolean' ) {
			pv = thiz.primativeValue;
		}

		if ( pv.truthy ) return Value.fromNative('true');
		else return Value.fromNative('false');
	}

	static *valueOf$e(thiz) {
		if ( thiz.specTypeName === 'boolean' ) return thiz;
		if ( thiz.specTypeName === 'object' ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName === 'boolean' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}


}

module.exports = BooleanPrototype;
