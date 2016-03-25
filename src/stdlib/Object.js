'use strict';

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
	} else {
		v.enumerable = false;
	}

	if ( desc.has('writable') ) {
		let wri = yield * desc.member('writable', realm);
		if ( !(wri instanceof EmptyValue) ) {
			v.writable = wri.truthy;
		}
	} else {
		v.writable = false;
	}

	if ( desc.has('configurable') ) {
		let conf = yield * desc.member('configurable', realm);
		if ( !(conf instanceof EmptyValue) ) {
			v.writable = conf.truthy;
		}
	} else {
		v.writable = false;
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

function *getDescriptor(target, name, realm) {
	if ( !Object.hasOwnProperty.call(target.properties, name) ) {
		console.log(name, 'not in', target.properties);
		return Value.undef;
	}

	let pdesc = target.properties[name];
	let out = new ObjectValue(realm);

	if ( pdesc.value  ) yield * out.put('value', pdesc.value);
	if ( pdesc.getter ) yield * out.put('get', pdesc.getter);
	if ( pdesc.setter ) yield * out.put('set', pdesc.setter);

	yield * out.put('writable', Value.fromNative(pdesc.writable));
	yield * out.put('enumerable', Value.fromNative(pdesc.enumerable));
	yield * out.put('configurable', Value.fromNative(pdesc.configurable));
	return out;
}

function *objOrThrow(i, realm) {
	let val = i ? i : Value.undef;

	if ( val instanceof EmptyValue ) {
		return yield CompletionRecord.makeTypeError(realm, 'Cannot convert undefined or null to object');
	}

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
		let p = Value.undef;
		if ( args.length > 0 ) {
			p = args[0];
		}

		if ( p.jsTypeName !== 'object' && p.jsTypeName !== 'function' ) {
			return yield CompletionRecord.makeTypeError(s.realm, 'Object prototype may only be an Object or null');
		}

		v.setPrototype(p);

		if ( args.length > 1 ) {
			let propsobj = args[1];
			for ( let p of propsobj.observableProperties() ) {
				let strval = p.native;
				let podesc = yield * propsobj.member(strval, s.realm);
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

	static *defineProperties(thiz, args, s) {

		let target = yield * objOrThrow(args[0], s.realm);
		//let props = yield * objOrThrow(args[1], s.realm);

		let propsobj = yield * objOrThrow(args[1], s.realm);

		for ( let p of propsobj.observableProperties() ) {
			let strval = p.native;
			let podesc = yield * propsobj.member(strval, s.realm);
			yield * defObjectProperty(target, p, podesc, s.realm);
		}
		return Value.true;
	}

	static *seal$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);

		target.extensable = false;
		for ( let p of Object.keys(target.properties) ) {
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *isSealed(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		if ( target.extensable ) return Value.false;
		for ( let p of Object.keys(target.properties) ) {
			let ps = target.properties[p];
			if ( ps.configurable ) return Value.false;
		}
		return Value.true;
	}

	static *freeze$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
			target.properties[p].writable = false;
		}
		return target;
	}

	static *isFrozen(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		if ( target.extensable ) return Value.false;
		for ( let p of Object.keys(target.properties) ) {
			let ps = target.properties[p];
			if ( ps.configurable ) return Value.false;
			if ( ps.writable ) return Value.false;
		}
		return Value.true;
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
		for ( let p of Object.keys(target.properties) ) {
			if ( !target.properties[p].enumerable ) continue;
			result.push(p);
		}
		return ArrayValue.make(result, s.realm);
	}

	static *getOwnPropertyNames$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		return ArrayValue.make(Object.getOwnPropertyNames(target.properties), s.realm);
	}

	static *getOwnPropertyDescriptor(thiz, args, s) {
		let target = yield * objOrThrow(args[0], s.realm);
		let name = yield * args[1].toStringNative();
		return yield * getDescriptor(target, name, s.realm);
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
