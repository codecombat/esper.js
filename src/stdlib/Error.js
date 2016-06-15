'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const PrimitiveValue = require('../values/PrimitiveValue');
const EmptyValue = require('../values/EmptyValue');
const ErrorValue = require('../values/ErrorValue');
const CompletionRecord = require('../CompletionRecord');
const PropertyDescriptor = require('../values/PropertyDescriptor');
const Value = require('../Value');



class ErrorObject extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.realm = realm;
	}
	makeOne() {
		let nue = new ErrorValue(this.realm);
		let p = this.properties['prototype'];
		if ( p ) nue.setPrototype(p.value);
		return nue;
	}

	make(message, name) {
		let nue = this.makeOne();
		if ( message ) {
			nue.setImmediate('message', Value.fromNative(message));
			nue.properties['message'].enumerable = false;
			nue.createNativeAnalog().message = message;
		}

		if ( name ) {
			nue.setImmediate('name', Value.fromNative(name));
			nue.properties['name'].enumerable = false;
			nue.createNativeAnalog().name = name;
		}

		return nue;
	}

	makeFrom(err) {
		let nue = this.makeOne();
		if ( err.message ) nue.setImmediate('message', Value.fromNative(err.message));
		if ( err.name ) nue.setImmediate('name', Value.fromNative(err.name));
		err.native = err;
		return nue;
	}

	*makeThisForNew() {
		return this.makeOne();
	}

	*call(thiz, args, s, e) {

		if ( thiz instanceof EmptyValue ) {
			thiz = this.makeOne();
		}

		if ( args.length > 0 ) yield * thiz.set('message', args[0], s, {enumerable: false});
		if ( args.length > 1 ) yield * thiz.set('fileName', args[1], s, {enumerable: false});
		if ( args.length > 2 ) yield * thiz.set('lineNumber', args[2], s, {enumerable: false});

		return thiz;
	}

	makeErrorType(type) {
		let proto = new ObjectValue(this.realm);
		proto.setPrototype(this.realm.ErrorPrototype);
		proto.setImmediate('name', Value.fromNative(type.name));
		proto.properties.name.enumerable = false;
		proto.wellKnownName = `%${type.name}Prototype%`;
		proto.nativeClass = type;

		let obj = new ErrorObject(this.realm);
		obj.setPrototype(proto);
		obj.properties.prototype.value = proto;
		obj.wellKnownName = `%${type.name}%`;
		proto.rawSetProperty('constructor', new PropertyDescriptor(obj, false));
		return obj;

	}

	callPrototype(realm) { return realm.ErrorPrototype; }

}

ErrorObject.prototype.wellKnownName = '%Error%';

module.exports = ErrorObject;

