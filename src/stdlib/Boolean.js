'use strict';

const Value = require('../Value');
const EasyObjectValue = require('../values/EasyObjectValue');


class Boolean extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			if ( args.length < 1 ) return Value.false;
			return (yield * args[0].toNumberValue()).truthy ? Value.true : Value.false;
		}
		let pv = (yield * args[0].toNumberValue()).truthy ? Value.true : Value.false;
		thiz.primativeValue = pv;
	}

	callPrototype(realm) { return realm.BooleanPrototype; }
	constructorFor(realm) { return realm.BooleanPrototype; }
}

module.exports = Boolean;
