"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');


class ArrayPrototype extends EasyObjectValue {
	*call(thiz, args) {
		return this.fromNative("Ok?");
	}

	callPrototype(env) { return env.ArrayPrototype; }
	//objPrototype(env) { return env.Function; }
	
	static *forEach(thiz, args) {
		console.log("Arrayt#foreach called");
		return new ObjectValue(this.env);
	}
}
ArrayPrototype.prototype.clazz = 'Array';

module.exports = ArrayPrototype;
