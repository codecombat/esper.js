'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const EasyNativeFunction = require('../values/EasyNativeFunction');
const Value = require('../Value');


class EsperObject extends EasyObjectValue {

	static *dump$cew(thiz, args) {
		console.log('DUMP', args);
		if ( typeof window !== 'undefined' ) window.dumped = args[0];
		return Value.undef;
	}

	static *str$cew(thiz, args) {
		var t = Value.undef;
		if ( args.length > 0 ) t = args[0];
		return this.fromNative(t.debugString);
	}

	static *stack$cew(thiz, args, scope, extra) {
		console.log(extra.evaluator);
		return Value.fromNative(extra.evaluator.buildStacktrace().join('\n'));
	}
}



module.exports = EsperObject;
