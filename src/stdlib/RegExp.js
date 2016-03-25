'use strict';

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');
const RegExpValue = require('../values/RegExpValue');


class RegExpObject extends EasyObjectValue {

	*call(thiz, args, s) {
		let pattern = '';
		let flags = '';

		if ( (args.length > 0) && (args[0] instanceof RegExpValue) ) {
			if ( args.length > 1 && args[1].truthy ) return yield CompletionRecord.makeTypeError(s.realm, 'Cannot supply flags when constructing one RegExp from another');
			return RegExpValue.make(new RegExp(args[0].regexp), s.realm);
		}

		if ( args.length > 0 && args[0].jsTypeName !== 'undefined' ) pattern = yield * args[0].toStringNative();
		if ( args.length > 1 && args[1].jsTypeName !== 'undefined' ) flags = yield * args[1].toStringNative();

		let rx;
		try {
			rx = new RegExp(pattern, flags);
		} catch ( ex ) {
			return yield new CompletionRecord(CompletionRecord.THROW, Value.fromNative(ex, s.realm));
		}

		return RegExpValue.make(rx, s.realm);
	}

	callPrototype(realm) { return realm.RegExpPrototype; }
	get callLength() { return 2; }
}

RegExpObject.prototype.wellKnownName = '%RegExp%';

module.exports = RegExpObject;
