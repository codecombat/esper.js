"use strict"

const EasyObjectValue = require('../values/EasyObjectValue');


class mObject extends EasyObjectValue {
	*call(thiz, args) {
		return this.fromNative("Ok?");
	}

	callPrototype(env) { return env.ObjectPrototype; }
	//objPrototype(env) { return env.Function; }
}

module.exports = mObject;
