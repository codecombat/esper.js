'use strict';

const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');
const NullValue = require('../values/NullValue');
const UndefinedValue = require('../values/UndefinedValue');
const CompletionRecord = require('../CompletionRecord');

class ObjectPrototype extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setPrototype(null);
	}

	static *hasOwnProperty$e(thiz, args) {
		let name = yield * args[0].toStringNative();
		if ( !(thiz instanceof ObjectValue) ) return Value.false;
		else if ( thiz.hasOwnProperty(name) ) return Value.true;
		return Value.false;
	}


	static *isPrototypeOf$e(thiz, args, s) {
		if ( args.length < 1 ) return Value.false;
		let target = args[0]; //TODO: Call ToObject();
		if ( !target.getPrototype ) return yield CompletionRecord.typeError('No prototype.');
		let pt = target.getPrototype(s.realm);
		let checked = [pt];
		while ( pt ) {
			if ( pt === thiz ) return Value.true;
			pt = pt.getPrototype(s.realm);
			if ( checked.indexOf(pt) !== -1 ) break;
			checked.push(pt);
		}
		return Value.false;
	}

	static *propertyIsEnumerable$e(thiz, args, s) {
		let nam = yield * args[0].toStringNative();
		let pd = thiz.properties[nam];
		return s.realm.fromNative(pd.enumerable);
	}
	static *toLocaleString$e(thiz, args) { return yield * ObjectPrototype.toString$e(thiz, args); }

	static *toString$e(thiz, args, s) {
		if ( thiz instanceof UndefinedValue ) return s.realm.fromNative('[object Undefined]');
		if ( thiz instanceof NullValue ) return s.realm.fromNative('[object Null]');
		switch ( thiz.jsTypeName ) {
			case "number": return Value.fromNative('[object Number]');
			case "boolean": return Value.fromNative('[object Boolean]');
			case "string": return Value.fromNative('[object String]');
		}

		return s.realm.fromNative('[object ' + thiz.clazz + ']');
	}

	static *valueOf$e(thiz, args) {
		if ( thiz.specTypeName === 'object' ) return thiz;
		//TODO: Need to follow the ToObject() conversion
		return thiz;
	}

}
ObjectPrototype.prototype.wellKnownName = '%ObjectPrototype%';

module.exports = ObjectPrototype;
