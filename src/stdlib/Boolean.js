'use strict';

const Value = require('../Value');
const EasyObjectValue = require('../values/EasyObjectValue');


class Boolean extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			if ( args.length < 1 ) return Value.false;
			return args[0].truthy ? Value.true : Value.false;
		}
		if ( args.length > 0 ) {
			let pv = args[0].truthy ? Value.true : Value.false;
			thiz.primativeValue = pv;
		} else {
			thiz.primativeValue = false;
		}
	}

	callPrototype(realm) { return realm.BooleanPrototype; }
	constructorFor(realm) { return realm.BooleanPrototype; }
}

module.exports = Boolean;
