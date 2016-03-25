'use strict';
/* @flow */

class RuntimeError extends Error {
	constructor(message) {
		super();
		this.message = message;
	}

	static refrence(variable) {
		return new RuntimeError(`${variable} is not defined`);
	}
}

module.exports = RuntimeError;
