"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class FunctionPrototype extends EasyObjectValue {
	static get caller$cew() { return null; }
	static get caller$cew() { return null; }
	static get length$ew() { return "?"; }
	static get name$ew() { return ""; }

	static *apply(thiz, args) { throw "Rob still needs to write this..."; }
	static *bind(thiz, args) { throw "Rob still needs to write this..."; }
	static *call(thiz, args) { throw "Rob still needs to write this..."; }
	static *toString(thiz, args) { throw "Rob still needs to write this..."; }

	
}

module.exports = FunctionPrototype;
