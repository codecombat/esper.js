'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');


class NumberPrototype extends EasyObjectValue {

	static *valueOf(thiz) {
		if ( thiz.specTypeName === 'number' ) return thiz;
		if ( thiz.specTypeName === 'object' ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName === 'number' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}


	static *toExponential(thiz, argz) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return this.fromNative(num.toExponential(a));
	}

	static *toFixed(thiz, argz) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return this.fromNative(num.toFixed(a));
	}

	static *toPrecision(thiz, argz) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return this.fromNative(num.toPrecision(a));
	}

	static *toString(thiz, argz) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return this.fromNative(num.toString(a));
	}


}


NumberPrototype.prototype.wellKnownName = '%NumberPrototype%';
module.exports = NumberPrototype;
