"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const PrimitiveValue = require('../values/PrimitiveValue');
const EmptyValue = require('../values/EmptyValue');
const ErrorValue = require('../values/ErrorValue');
const CompletionRecord = require('../CompletionRecord');

const Value = require('../Value');



class ErrorObject extends EasyObjectValue {

	makeOne() {
		let nue = new ErrorValue(this.realm);
		let p = this.properties['prototype'];
		if ( p ) nue.setPrototype(p.value);
		return nue;
	}

	make(message) {
		let nue = this.makeOne();		
		if ( message ) nue.set('message', Value.fromNative(message));
		nue.createNativeAnalog().message = message;
		return nue;
	}

	makeFrom(err) {
		let nue = this.makeOne();
		if ( err.message ) nue.set('message', Value.fromNative(err.message));
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

		if ( args.length > 0 ) yield * thiz.put('message', args[0], s);
		if ( args.length > 1 ) yield * thiz.put('fileName', args[1], s);
		if ( args.length > 2 ) yield * thiz.put('lineNumber', args[2], s);		

		return thiz;
	}

	makeErrorType(type) {
		let proto = new ObjectValue(this.realm);
		proto.setPrototype(this.realm.ErrorPrototype);
		proto.set('name', Value.fromNative(type.name));
		proto.properties.name.enumerable = false;
		proto.wellKnownName = `%${type.name}ErrorPrototype%`;
		proto.nativeClass = type;

		let obj = new ErrorObject(this.realm);
		obj.setPrototype(proto);
		obj.properties.prototype.value = proto;
		obj.wellKnownName = `%${type.name}Error%`;
		return obj;

	}

	callPrototype(realm) { return realm.ErrorPrototype; }

}

ErrorObject.prototype.wellKnownName = '%Error%';

module.exports = ErrorObject;

