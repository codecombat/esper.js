const runner = require('./test-runner').es5;

describe("Expressions", () => {
	describe("Logical", () => {
		it("should evaluate && as true if both sides are true", done => {
			runner.confirmBlock("true && true;", done);
		});

		it("should evaluate && as false if one side is false", done => {
			runner.confirmBlock("!(true && false);", done);
		});

		it("should evaluate && as false if both sides are false", done => {
			runner.confirmBlock("!(false && false);", done);
		});

		it("should evaluate || as false if both sides are false", done => {
			runner.confirmBlock("!(false || false);", done);
		});

		it("should evaluate || as true if one side is true", done => {
			runner.confirmBlock("false || true;", done);
		});

		it("should evaluate || as true if both sides are true", done => {
			runner.confirmBlock("true || true;", done);
		});
	});
});
