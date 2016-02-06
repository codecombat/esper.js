"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class EsperObject extends EasyObjectValue {
	
	static *dump$cew(thiz, args) {
		console.log("DUMP", args);
		if ( typeof window !== 'undefined' ) window.dumped = args[0];
		return this.fromNative(undefined);
	}
}



module.exports = EsperObject;
