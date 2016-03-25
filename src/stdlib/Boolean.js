'use strict';

const Value = require('../Value');
const EasyObjectValue = require('../values/EasyObjectValue');


class Boolean extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			if ( args.length < 1 ) return Value.false;
			return yield * args[0].toNumberValue();
		}
		let pv = yield * args[0].toNumberValue();
		thiz.primativeValue = pv;
	}

	callPrototype(realm) { return realm.BooleanPrototype; }
}

module.exports = Boolean;
