'use strict';
/* @flow */

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
const EvaluatorInstruction = require('../EvaluatorInstruction');
const GenDash = require('../GenDash');

let serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

class PropertyDescriptor {
	constructor(value, enumerable) {
		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = enumerable !== undefined ? !!enumerable : true;
		this.writable = true;
		this.getter = undefined;
		this.setter = undefined;
		this.variable = false;
	}

	get direct() {
		return !this.getter && !this.setter && this.writable;
	}

	*getValue(thiz) {
		thiz = thiz || Value.null;
		if ( this.getter ) {
			let s = yield EvaluatorInstruction.getScope;
			return yield * this.getter.call(thiz, [], s);
		}
		return this.value;
	}

	*setValue(thiz, to, s) {
		thiz = thiz || Value.null;

		if ( this.setter ) {
			s = s || (yield EvaluatorInstruction.getScope);
			return yield * this.setter.call(thiz, [to], s);
		}
		if ( !this.writable ) {
			if ( !s || !s.strict ) {
				return this.value;
			}
			return yield CompletionRecord.typeError("Can't write to non-writable value.", {code: "WriteNonWritable"});
		}
		this.value = to;
		return this.value;
	}

	setValueImmediate(thiz, to, s) {
		return GenDash.syncGenHelper(this.setValue(thiz, to, s));
	}
}

module.exports = PropertyDescriptor;
