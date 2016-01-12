const runner = require('./test-runner').es5;

describe("Expressions", () => {
	describe("Sequence", () => {
		it("should assign to last value in sequence", done => {
			runner.confirmBlock("var a = (7, 5);a===5;", done);
		});
	});
});
