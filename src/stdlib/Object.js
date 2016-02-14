"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');

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

	static *seal$e(thiz, args, s) {
		let target = args.length > 0 ? args[0] : Value.undef;
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *freeze$e(thiz, args, s) {
		let target = args.length > 0 ? args[0] : Value.undef;
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
			target.properties[p].writeable = false;
		}
		return target;
	}


	static *preventExtensions$e(thiz, args, s) {
		let target = args.length > 0 ? args[0] : Value.undef;
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
		target.extensable = false;
		return target;
	}

	static *isExtensible$e(thiz, args, s) {
		let target = args.length > 0 ? args[0] : Value.undef;
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
		return this.fromNative(target.extensable);
	}

	static *keys$e(thiz, args, s) {
		let target = args.length > 0 ? args[0] : Value.undef;
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
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
