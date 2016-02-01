"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');


class BooleanPrototype extends EasyObjectValue {
	static *oink(other) { return this.fromNative("Oink!"); }
	
}

module.exports = BooleanPrototype;
