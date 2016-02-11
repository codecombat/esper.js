"use strict";

const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

class ObjectPrototype extends EasyObjectValue {
	constructor(env) {
		super(env);
		this.setPrototype(null);
	}

	static *hasOwnProperty$e(thiz, args) {
		let name = yield * args[0].asString();
		if ( !(thiz instanceof ObjectValue) ) return Value.false;
		else if ( thiz.hasOwnProperty(name) ) return Value.true;
		return Value.false;
	}

	static *isPrototypeOf$e(thiz, args) { 
		if ( args.length < 1 ) return Value.false;
		let target = args[1]; //TODO: Call ToObject();
		let pt = thiz.getPrototype(thiz.env);
		let checked = [];

		while ( pt ) {
			if ( pt === target ) return Value.true;
			checked.push(pt);
			pt = pt.getPrototype();
			if ( checked.indexOf(pt) !== -1 ) return Value.false;
		}
		return Value.false;
	}
	static *propertyIsEnumerable$e(thiz, args) { 

	}
	
	static *toString$e(thiz, args) { 
		return this.fromNative("[object " + thiz.clazz + "]");
	}
	static *toLocaleString$e(thiz, args) { 
		return this.fromNative("[object " + thiz.clazz + "]");
	}
	static *valueOf$e(thiz, args) { 
		if ( thiz.specTypeName === 'object' ) return thiz;
		//TODO: Need to follow the ToObject() conversion
		return thiz; 
	}


}

module.exports = ObjectPrototype;
