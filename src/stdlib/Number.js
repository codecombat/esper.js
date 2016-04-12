'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');


class NumberObject extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			if ( args.length < 1 ) return EasyObjectValue.zero;
			return yield * args[0].toNumberValue();
		}
		let pv = EasyObjectValue.zero;
		if ( args.length > 0 ) pv = yield * args[0].toNumberValue();
		thiz.primativeValue = pv;
	}

	callPrototype(realm) { return realm.NumberPrototype; }
	constructorFor(realm) { return realm.NumberPrototype; }

	static get MAX_VALUE$cew() { return Number.MAX_VALUE; }
	static get MIN_VALUE$cew() { return Number.MIN_VALUE; }
	static get POSITIVE_INFINITY$cew() { return Number.POSITIVE_INFINITY; }
	static get NEGATIVE_INFINITY$cew() { return Number.NEGATIVE_INFINITY; }
	static get NaN$cew() { return EasyObjectValue.nan; }

}

NumberObject.prototype.wellKnownName = '%Number%';
module.exports = NumberObject;

