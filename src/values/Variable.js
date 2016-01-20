"use strict";
/* @flow */

let serial = 0;

class Variable {
	constructor(value, owner) {
		this.value = value;
		this.serial = serial++;
	}
}

module.exports = Variable;