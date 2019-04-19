'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');


class NumberPrototype extends EasyObjectValue {

	static *valueOf$e(thiz) {
		if ( thiz.specTypeName === 'number' ) return thiz;
		if ( thiz.specTypeName === 'object' ) {
			let pv = thiz.primativeValue;
			if ( pv.specTypeName === 'number' ) return pv;
		}
		throw new TypeError('Couldnt get there.');
	}


	static *toExponential$e(thiz, argz, s) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return s.realm.fromNative(num.toExponential(a));
	}

	static *toFixed$e(thiz, argz, s) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return s.realm.fromNative(num.toFixed(a));
	}

	static *toPrecision$e(thiz, argz, s) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return s.realm.fromNative(num.toPrecision(a));
	}

	static *toString$e(thiz, argz, s) {
		let a;
		if ( argz.length > 0 ) {
			a = yield * argz[0].toNumberNative();
		}
		let num = yield * thiz.toNumberNative(thiz);
		return s.realm.fromNative(num.toString(a));
	}


}


NumberPrototype.prototype.wellKnownName = '%NumberPrototype%';
module.exports = NumberPrototype;
