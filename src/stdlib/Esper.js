'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const EasyNativeFunction = require('../values/EasyNativeFunction');
const Value = require('../Value');


class EsperObject extends EasyObjectValue {
	static *dump$cew(thiz, args) {
		console.log('Esper#dump:', args);
		if ( typeof window !== 'undefined' ) window.dumped = args[0];
		return Value.undef;
	}

	static *str$cew(thiz, args) {
		var t = Value.undef;
		if ( args.length > 0 ) t = args[0];
		return this.fromNative(t.debugString);
	}

	static *stack$cew(thiz, args, scope, extra) {
		return Value.fromNative(extra.evaluator.buildStacktrace().join('\n'));
	}

	static *globals$cew(thiz, args, scope, extra) {
		return scope.global.object;
	}

	static *scope$cew(thiz, args, scope, extra) {
		return scope.object;
	}
}



module.exports = EsperObject;
