"use strict";

const PrimitiveValue = require('./PrimitiveValue');

class StringValue extends PrimitiveValue {	
	*member(name, env) {
		let idx = Number(name);
		if ( !isNaN(idx) ) {
			return StringValue.fromNative(this.native[idx]);
		}
		if ( name === 'length' ) return StringValue.fromNative(this.native.length);
		return yield * super.member(name, env);
	}
}

module.exports = StringValue;