"use strict";

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');

function *toRegexp(x) {
	return x.regexp;
}

class RegExpProtoype extends EasyObjectValue {


	static *test(thiz, args) {
		var rx = yield * toRegexp(thiz);
		var str = undefined;
		if ( args.length > 0 ) str = yield * args[0].toStringNative();
		return this.fromNative(rx.test(str));
	}	

	static *toString(thiz, args) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.toString());
	}
}
RegExpProtoype.prototype.wellKnownName = '%RegExpProtoype%';

module.exports = RegExpProtoype;