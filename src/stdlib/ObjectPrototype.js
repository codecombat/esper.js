"use strict";

const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

class ObjectPrototype extends EasyObjectValue {
	constructor(env) {
		super(env);
		this.setPrototype(null);
	}
	static get pooja$e() { return "Happpy!"; }

	static *hasOwnProperty$e(thiz, args) {
		let name = yield * args[0].asString();
		if ( !(thiz instanceof ObjectValue) ) return Value.false;
		else if ( thiz.hasOwnProperty(name) ) return Value.true;
		return Value.false;
	}

	static *isPrototypeOf$e(thiz, args) { throw "Rob still needs to write this..."; }
	static *propertyIsEnumerable$e(thiz, args) { throw "Rob still needs to write this..."; }
	static *toLocaleString$e(thiz, args) { throw "Rob still needs to write this..."; }
	static *toString$e(thiz, args) { return this.fromNative("[object Object]"); }
	static *valueOf$e(thiz, args) { throw "Rob still needs to write this..."; }


}

module.exports = ObjectPrototype;
