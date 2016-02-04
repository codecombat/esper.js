"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class NumberPrototype extends EasyObjectValue {
	static *oink(other) { return this.fromNative("Oink!"); }
	
	static *valueOf(thiz) {
		if ( thiz.specTypeName === "number" ) return thiz;
		return EasyObjectValue.undef;
	}	

	static *toString(thiz) {
		let sv = yield * thiz.toStringValue();
		return sv;
	}

}

module.exports = NumberPrototype;
