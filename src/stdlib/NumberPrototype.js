"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class NumberPrototype extends EasyObjectValue {
	static *oink(other) { return this.fromNative("Oink!"); }
	
	static *valueOf(thiz) {
		if ( thiz.specTypeName === "number" ) return thiz;
		if ( thiz.specTypeName === "object" ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName == 'number' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}	


	static *toString(thiz) {
		return yield * thiz.toStringValue(thiz);
	}	

}

module.exports = NumberPrototype;
