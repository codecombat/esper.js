"use strict";

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');
const RegExpValue = require('../values/RegExpValue');


class RegExpObject extends EasyObjectValue {

	*call(thiz, args, s) {
		let pattern = '';
		let flags = '';

		if ( args.length > 0 ) pattern = yield * args[0].toStringNative();
		if ( args.length > 1 ) flags = yield * args[1].toStringNative();

		return RegExpValue.make(new RegExp(pattern, flags), s.realm);
	}
	
	callPrototype(realm) { return realm.RegExpPrototype; }	

}

RegExpObject.prototype.wellKnownName = '%RegExp%';

module.exports = RegExpObject;