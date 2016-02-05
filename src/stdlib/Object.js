"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');


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
}

module.exports = ObjectObject;
