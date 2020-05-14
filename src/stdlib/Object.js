'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');
const PropertyDescriptor = require('../values/PropertyDescriptor');
const EmptyValue = require('../values/EmptyValue');
const BridgeValue = require('../values/BridgeValue');
const LinkValue = require('../values/LinkValue');

function *defObjectProperty(obj, name, desc) {
	if ( name instanceof Value ) {
		name = (yield * name.toStringNative());
	}

	let value = yield * desc.get('value');


	let v = new PropertyDescriptor(value);


	if ( desc.has('enumerable') ) {
		let enu = yield * desc.get('enumerable');
		if ( !(enu instanceof EmptyValue) ) {
			v.enumerable = enu.truthy;
		}
	} else {
		v.enumerable = false;
	}

	if ( desc.has('writable') ) {
		let wri = yield * desc.get('writable');
		if ( !(wri instanceof EmptyValue) ) {
			v.writable = wri.truthy;
		}
	} else {
		v.writable = false;
	}

	if ( desc.has('configurable') ) {
		let conf = yield * desc.get('configurable');
		if ( !(conf instanceof EmptyValue) ) {
			v.writable = conf.truthy;
		}
	} else {
		v.writable = false;
	}


	if ( desc.has('get') ) {
		let get = yield * desc.get('get');
		if ( !(get instanceof EmptyValue) ) {
			v.getter = get;
		}
	}

	if ( desc.has('set') ) {
		let set = yield * desc.get('set');
		if ( !(set instanceof EmptyValue) ) {
			v.setter = set;
		}
	}

	obj.rawSetProperty(name, v);
	return true;
}

function *getDescriptor(target, name, realm) {
	if ( !Object.hasOwnProperty.call(target.properties, name) ) {
		return Value.undef;
	}

	let pdesc = target.properties[name];
	let out = new ObjectValue(realm);

	if ( pdesc.value  ) yield * out.set('value', pdesc.value);
	if ( pdesc.getter ) yield * out.set('get', pdesc.getter);
	if ( pdesc.setter ) yield * out.set('set', pdesc.setter);

	yield * out.set('writable', Value.fromNative(pdesc.writable));
	yield * out.set('enumerable', Value.fromNative(pdesc.enumerable));
	yield * out.set('configurable', Value.fromNative(pdesc.configurable));
	return out;
}

function *objOrThrow(i) {
	let val = i ? i : Value.undef;

	if ( val instanceof EmptyValue ) {
		return yield CompletionRecord.typeError('Cannot convert undefined or null to object');
	}

	if ( !(val instanceof ObjectValue) ) {
		return yield CompletionRecord.typeError('Need an object');
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

	static *assign$e(thiz, args, s, ext) {
		let target = yield * objOrThrow(args[0]);
		for ( let i = 1; i < args.length; ++i ) {
			let source =  yield * objOrThrow(args[i]);
			for (let p of Object.keys(source.properties)) {
				if (!source.properties[p].enumerable) continue;
				yield * target.set(p, yield * source.get(p));
			}
		}
		return target;
	}

	static *create$e(thiz, args, s) {
		let v = new ObjectValue(s.realm);
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
			for ( let p of propsobj.observableProperties(s.realm) ) {
				let strval = p.native;
				let podesc = yield * propsobj.get(strval, s.realm);
				yield * defObjectProperty(v, p, podesc);
			}
		}
		return v;
	}

	static *defineProperty(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		let name = yield * args[1].toStringNative();
		let desc = args[2];
		yield * defObjectProperty(target, name, desc);
		return Value.true;
	}

	static *defineProperties(thiz, args, s) {

		let target = yield * objOrThrow(args[0]);
		//let props = yield * objOrThrow(args[1], s.realm);

		let propsobj = yield * objOrThrow(args[1]);

		for ( let p of propsobj.observableProperties(s.realm) ) {
			let strval = p.native;
			let podesc = yield * propsobj.get(strval);
			yield * defObjectProperty(target, p, podesc);
		}
		return Value.true;
	}

	static *seal$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);

		target.extensable = false;
		for ( let p of Object.keys(target.properties) ) {
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *isSealed(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		if ( target.extensable ) return Value.false;
		for ( let p of Object.keys(target.properties) ) {
			let ps = target.properties[p];
			if ( ps.configurable ) return Value.false;
		}
		return Value.true;
	}

	static *freeze$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		target.extensable = false;
		for ( let p in target.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(target.properties, p) ) continue;
			target.properties[p].configurable = false;
			target.properties[p].writable = false;
		}
		return target;
	}

	static *isFrozen(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		if ( target.extensable ) return Value.false;
		for ( let p of Object.keys(target.properties) ) {
			let ps = target.properties[p];
			if ( ps.configurable ) return Value.false;
			if ( ps.writable ) return Value.false;
		}
		return Value.true;
	}

	static *preventExtensions$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		target.extensable = false;
		return target;
	}

	static *isExtensible$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		return s.realm.fromNative(target.extensable);
	}

	static *keys$e(thiz, args, s) {
		if ( args[0] instanceof BridgeValue ) {
			return ArrayValue.make(Object.keys(args[0].native), s.realm);
		}
		if ( args[0] instanceof LinkValue ) {
			let keys = [];
			for ( let o of args[0].observableProperties() ) keys.push(o);
			return ArrayValue.make(keys, s.realm);
		}
		let target = yield * objOrThrow(args[0]);
		let result = [];
		for ( let p of Object.keys(target.properties) ) {
			if ( !target.properties[p].enumerable ) continue;
			result.push(p);
		}
		return ArrayValue.make(result, s.realm);
	}

	static *values$e(thiz, args, s) {
		if (args[0] instanceof BridgeValue) {
			return ArrayValue.make(Object.values(args[0].native), s.realm);
		}
		if (args[0] instanceof LinkValue) {
			let keys = [];
			for (let o of args[0].observableProperties()) keys.push(args[0][o]);
			return ArrayValue.make(keys, s.realm);
		}
		let target = yield* objOrThrow(args[0]);
		let result = [];
		for (let p of Object.keys(target.properties)) {
			if (!target.properties[p].enumerable) continue;
			result.push(yield * target.get(p));
		}
		return ArrayValue.make(result, s.realm);
	}

	static *getOwnPropertyNames$e(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		return ArrayValue.make(Object.getOwnPropertyNames(target.properties), s.realm);
	}

	static *getOwnPropertyDescriptor(thiz, args, s) {
		let target = yield * objOrThrow(args[0]);
		let name = yield * args[1].toStringNative();
		return yield * getDescriptor(target, name, s.realm);
	}

	static *getPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if ( args.length > 0 ) target = args[0];
		if ( !target.getPrototype ) return yield CompletionRecord.makeTypeError(s.realm, 'No prototype.');
		let proto = target.getPrototype(s.realm);
		if ( proto ) return proto;
		return EasyObjectValue.null;
	}

	static *setPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if (args.length > 0) target = args[0];
		if (!target.setPrototype) return yield CompletionRecord.makeTypeError(s.realm, 'No prototype.');
		target.setPrototype(args[1]);
		return target;
	}

	toNativeCounterpart() { return Object; }
}

ObjectObject.prototype.wellKnownName = '%Object%';

module.exports = ObjectObject;
