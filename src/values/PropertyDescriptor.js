"use strict";
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

let serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

class PropertyDescriptor {
	constructor(value) {
		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = true;
		this.writeable = true;
	}

	set(value) {
		if ( !this.writeable ) return;
		this.value = value;
	}

	*getValue(thiz) {
		thiz = thiz || Value.null;
		if ( this.getter ) {
			return yield * this.getter.call(thiz, []);
		}
		return this.value;
	}

	*setValue(thiz, to, s) {
		thiz = thiz || Value.null;
		if ( this.getter ) {
			return yield * this.setter.call(thiz, [to]);
		}
		if ( !this.writeable ) {
			if ( !s || !s.strict ) return this.value;
			return new CompletionRecord.makeTypeError(s.realm, "Can't write to non-writable value.");
		}
		this.value = to;
		return this.value;
	}
}

module.exports = PropertyDescriptor;