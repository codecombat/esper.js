"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class FunctionPrototype extends EasyObjectValue {
	static get caller$cew() { return null; }
	static get length$ew() { return "?"; }
	static get name$ew() { return ""; }

	static *apply(thiz, args) { throw "Rob still needs to write this..."; }
	static *bind(thiz, args) { throw "Rob still needs to write this..."; }
	static *call(thiz, args, s) {
		let vthis = args.shift();
		return yield * thiz.call(vthis, args, s);
	}
	static *toString(thiz, args) { throw "Rob still needs to write this..."; }

	*call(thiz, args, s) {
		return EasyObjectValue.undef;
	}
	
}

module.exports = FunctionPrototype;
