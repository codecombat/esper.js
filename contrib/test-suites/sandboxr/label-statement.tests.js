"use strict";

const runner = require('./test-runner').es5;

describe("Label Statements", function () {
	it("should break to outer loop when expected", done => {
		let code = `
		var i, j, result='';
		loop1:
		for (i = 0; i < 3; i++) {
			loop2:
			for (j = 0; j < 3; j++) {
				if (i == 1 && j == 1) {
					continue loop1;
				}

				result += i + ' ' + j;
			}
		}

		result=='0 00 10 21 02 02 12 2';`;

		runner.confirmBlock(code, done);
	});
});
