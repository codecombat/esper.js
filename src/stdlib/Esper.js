"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');


class EsperObject extends EasyObjectValue {
	
	static *dump$cew(thiz, args) {
		console.log("DUMP", args);
		if ( typeof window !== 'undefined' ) window.dumped = args[0];
		return this.fromNative(undefined);
	}

	static *str$cew(thiz, args) {
		var t = Value.undef;
		if ( args.length > 0 ) t = args[0];
		return this.fromNative(t.debugString);
	}

}



module.exports = EsperObject;
