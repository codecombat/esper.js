"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class NumberPrototype extends EasyObjectValue {
	static *oink(other) { return this.fromNative("Oink!"); }
	
	static *valueOf(thiz) {
		if ( thiz.specTypeName === "number" ) return thiz;
		return EasyObjectValue.undef;
	}	


}

module.exports = NumberPrototype;
