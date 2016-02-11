"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');


class ObjectObject extends EasyObjectValue {
	*call(thiz, args, s, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( asConstructor ) {
			return new ObjectValue(s.env);
		}
	}

	callPrototype(env) { return env.ObjectPrototype; }
	//objPrototype(env) { return env.Function; }

	static *create$e(thiz, args) {
		console.log("object#create called");
		return new ObjectValue(this.env);
	}

	static *keys$e(thiz, args, s) {
		//TODO: Convert args[0] to object;
		let target = EasyObjectValue.undef;
		if ( args.length > 0 ) target = args[0];
		if ( !(target instanceof ObjectValue ) ) throw new TypeError('Cannot convert to object');
		let result = [];
		for ( let p of target.observableProperties() ) {
			result.push(p);
		}
		return ArrayValue.make(result, s.env);
	}

	static *getPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if ( args.length > 0 ) target = args[0];
		return target.getPrototype(s.env);
	}
}

module.exports = ObjectObject;
