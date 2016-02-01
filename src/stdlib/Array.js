"use strict"

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');


class mArray extends EasyObjectValue {
	*call(thiz, args) {
		return this.fromNative("Ok?");
	}

	callPrototype(env) { return env.ObjectPrototype; }
	//objPrototype(env) { return env.Function; }

	static *forEach(thiz, args) {
		console.log("Arrayt#foreach called");
		return new ObjectValue(this.env);
	}

	static *isArray(thiz, args) {
		return Array.isArray(args[0].toNative());
	}
}

module.exports = mArray;
