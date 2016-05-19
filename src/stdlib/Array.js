'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');

class ArrayObject extends EasyObjectValue {
	*call(thiz, args, s) {
		if ( args.length === 1 && args[0].jsTypeName === 'number' ) {
			let result = ArrayValue.make([], s.realm);
			yield * result.set('length', args[0]);
			return result;
		}
		return ArrayValue.make(args, s.realm);
	}

	callPrototype(realm) { return realm.ArrayPrototype; }
	//objPrototype(realm) { return realm.Function; }



	static *isArray(thiz, args) {
		if ( args.length < 1 ) return EasyObjectValue.false;
		return EasyObjectValue.fromNative(args[0] instanceof ArrayValue);
	}
}

module.exports = ArrayObject;
