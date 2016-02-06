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


	static *toExponential(thiz, argz) {
		let a = undefined;
		if ( argz.length > 0 ) {
			a = ( yield * argz[0].toNumberValue() ).toNative();
		}
		let num = yield * thiz.toNumberValue(thiz);
		return this.fromNative(num.toNative().toExponential(a))
	}	

	static *toFixed(thiz, argz) {
		let a = undefined;
		if ( argz.length > 0 ) {
			a = ( yield * argz[0].toNumberValue() ).toNative();
		}
		let num = yield * thiz.toNumberValue(thiz);
		return this.fromNative(num.toNative().toFixed(a))
	}

	static *toString(thiz, argz) {
		let a = undefined;
		if ( argz.length > 0 ) {
			a = ( yield * argz[0].toNumberValue() ).toNative();
		}
		let num = yield * thiz.toNumberValue(thiz);
		return this.fromNative(num.toNative().toString(a))
	}


}

module.exports = NumberPrototype;
