"use strict";

const runner = require('./test-runner').es5;

describe("Switch Statement", () => {
	it("should execute the match block", done => {
		runner.confirmBlock("var a = 5;switch(a) { case 5: a = 10; break; default: a = 1; break; }\na==10;", done);
	});

	it("should execute default block if no matches", done => {
		runner.confirmBlock("var a = 5;switch(a) { case 1: a = 10; break; default: a = 1; break; }\na==1;", done);
	});

	it("should go to the next block if the case is empty", done => {
		runner.confirmBlock("var a = 5;switch(a) { case 1: case 2: case 5: a = 1; break; default: a = 10; break; }\na==1;", done);
	});

	it("should continue executing blocks if a passing block does not break", done => {
		runner.confirmBlock("var a = 1;switch(a) { case 1: a = 2; case 2: a = 3; break; default: a = 4; break; }\na==3;", done);
	});

	it("should allow return to break out of a switch", done => {
		let code = "function a(value) { switch (value) { case 1: return true; default: return false; } }\na(1)";
		runner.confirmBlock(code, done);
	});
});
