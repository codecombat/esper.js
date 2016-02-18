"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');
const Variable = require('../values/Variable');
const EmptyValue = require('../values/EmptyValue');

function *defObjectProperty(obj, name, desc, env) {
	if ( name instanceof Value ) {
		name = (yield * name.toStringNative());
	}

	let value = yield * desc.member('value', env);


	let v = new Variable(value);

	let enu = yield * desc.member('enumerable', env);
	if ( !(enu instanceof EmptyValue) ) {
		v.enumerable = enu.truthy;
	}

	obj.rawSetProperty(name, v);
	return true;
}

function *objOrThrow(i, env) {
	let val = i ? i : Value.undef;
	if ( !(val instanceof ObjectValue) ) {
		 return CompletionRecord.makeTypeError(env, 'Need an object');
	}
	return val;
}

class ObjectObject extends EasyObjectValue {
	*call(thiz, args, s, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( asConstructor ) {
			return new ObjectValue(s.env);
		}
	}

	callPrototype(env) { return env.ObjectPrototype; }
	//objPrototype(env) { return env.Function; }

	static *create$e(thiz, args, s) {
		let v = new ObjectValue(this.env);
		if ( args.length > 0 ) {
			v.setPrototype(args[1]);
		}
		if ( args.length > 1 ) {
			let propsobj = args[1];
			for ( let p of propsobj.observableProperties() ) {
				let podesc = yield * propsobj.member(p);
				yield * defObjectProperty(v, p, podesc, s.env);
			}
		}
		return v;
	}

	static *defineProperty(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		let name = yield * args[1].toStringNative();
		let desc = args[2];
		yield * defObjectProperty(target, name, desc, s.env);
		return Value.true;
	}

	static *seal$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.env, 'Need an object');
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *freeze$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
			target.properties[p].writeable = false;
		}
		return target;
	}


	static *preventExtensions$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		target.extensable = false;
		return target;
	}

	static *isExtensible$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		return this.fromNative(target.extensable);
	}

	static *keys$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.env);
		let result = [];
		for ( let p of target.observableProperties() ) {
			result.push(p);
		}
		return ArrayValue.make(result, s.env);
	}

	static *getPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if ( args.length > 0 ) target = args[0];
		let proto = target.getPrototype(s.env);
		if ( proto ) return proto;
		return EasyObjectValue.null;
	}
}

module.exports = ObjectObject;
