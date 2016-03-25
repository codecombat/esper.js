'use strict';

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');

function *proxy(op, thiz, args, s) {
	let realm = s.realm;
	let printer = realm.print;
	let strings = new Array(args.length);
	for ( let i = 0; i < args.length; ++i ) {
		strings[i] = yield * args[i].toStringNative();
	}
	//console[op].apply(console, strings);
	printer.apply(realm, strings);
	return Value.undef;
}

class Console extends EasyObjectValue {
	static *log(thiz, argz, s) { return yield * proxy('log', thiz, argz, s); }
	static *info(thiz, argz, s) { return yield * proxy('info', thiz, argz, s); }
	static *warn(thiz, argz, s) { return yield * proxy('warn', thiz, argz, s); }
	static *error(thiz, argz, s) { return yield * proxy('error', thiz, argz, s); }
	static *trace(thiz, argz, s) { return yield * proxy('trace', thiz, argz, s); }
}

module.exports = Console;
