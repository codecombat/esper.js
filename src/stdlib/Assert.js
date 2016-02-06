"use strict";

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const ObjectValue = require('../values/ObjectValue');

class AssertFunction extends ObjectValue {
	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if ( args.length > 0 ) val = args[0];
		if ( val.truthy ) return Value.undef;
		let reason = "";
		if ( args.length > 1 ) {
			reason = ( yield * args[1].toStringValue() ).toNative();
		} else if ( ext.callNode && ext.callNode.arguments[0] ) {
			reason = (ext.callNode.arguments[0].srcName || '???');
		}
		let err = new Error(reason);
		err.name = 'AssertionError';
		return new CompletionRecord(CompletionRecord.THROW, err);
	}
}

module.exports = AssertFunction;