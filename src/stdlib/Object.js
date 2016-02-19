"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');
const PropertyDescriptor = require('../values/PropertyDescriptor');
const EmptyValue = require('../values/EmptyValue');

function *defObjectProperty(obj, name, desc, realm) {
	if ( name instanceof Value ) {
		name = (yield * name.toStringNative());
	}

	let value = yield * desc.member('value', realm);


	let v = new PropertyDescriptor(value);

	if ( desc.has('enumerable') ) {
		let enu = yield * desc.member('enumerable', realm);
		if ( !(enu instanceof EmptyValue) ) {
			v.enumerable = enu.truthy;
		}
	}

	if ( desc.has('get') ) {
		let get = yield * desc.member('get', realm);
		if ( !(get instanceof EmptyValue) ) {
			v.getter = get;
		}
	}

	if ( desc.has('set') ) {
		let set = yield * desc.member('set', realm);
		if ( !(set instanceof EmptyValue) ) {
			v.setter = set;
		}
	}

	obj.rawSetProperty(name, v);
	return true;
}

function *objOrThrow(i, realm) {
	let val = i ? i : Value.undef;
	if ( !(val instanceof ObjectValue) ) {
		 return yield CompletionRecord.makeTypeError(realm, 'Need an object');
	}
	return val;
}

class ObjectObject extends EasyObjectValue {
	*call(thiz, args, s, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( asConstructor ) {
			return new ObjectValue(s.realm);
		}
	}

	callPrototype(realm) { return realm.ObjectPrototype; }
	//objPrototype(realm) { return realm.Function; }

	static *create$e(thiz, args, s) {
		let v = new ObjectValue(this.realm);
		if ( args.length > 0 ) {
			v.setPrototype(args[1]);
		}
		if ( args.length > 1 ) {
			let propsobj = args[1];
			for ( let p of propsobj.observableProperties() ) {
				let podesc = yield * propsobj.member(p);
				yield * defObjectProperty(v, p, podesc, s.realm);
			}
		}
		return v;
	}

	static *defineProperty(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		let name = yield * args[1].toStringNative();
		let desc = args[2];
		yield * defObjectProperty(target, name, desc, s.realm);
		return Value.true;
	}

	static *seal$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		if (!(target instanceof ObjectValue) ) return CompletionRecord.makeTypeError(s.realm, 'Need an object');
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *freeze$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
			target.properties[p].writeable = false;
		}
		return target;
	}


	static *preventExtensions$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		target.extensable = false;
		return target;
	}

	static *isExtensible$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		return this.fromNative(target.extensable);
	}

	static *keys$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		let result = [];
		for ( let p of target.observableProperties() ) {
			result.push(p);
		}
		return ArrayValue.make(result, s.realm);
	}

	static *getOwnPropertyNames$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		let result = [];
		for ( let p in target.properties ) {
			if ( !Object.hasOwnProperty.call(target.properties,p) ) continue;
			result.push(this.fromNative(p));
		}
		return ArrayValue.make(result, s.realm);
	}

	static *getPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if ( args.length > 0 ) target = args[0];
		let proto = target.getPrototype(s.realm);
		if ( proto ) return proto;
		return EasyObjectValue.null;
	}

	toNativeCounterpart() { return Object; }
}

module.exports = ObjectObject;
