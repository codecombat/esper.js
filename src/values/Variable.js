"use strict";
/* @flow */

let serial = 0;

class Variable {
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
}

module.exports = Variable;