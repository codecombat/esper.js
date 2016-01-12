const runner = require('./test-runner').es5;

describe("Update Expressions", () => {
	describe("++ operator", () => {
		it("should increment a value", done => {
			runner.confirmBlock("var a = 0;a++;a==1;", done);
		});

		it("should be NaN for undefined", done => {
			runner.confirmBlock("var a;isNaN(++a);", done);
		});

		it("should add the property to an object if it doesn't exist", done => {
			runner.confirmBlock("var a = {};a.foo++;'foo' in a;", done);
		});
	});

	describe("-- operator", () => {
		it("should decrement a value", done => {
			runner.confirmBlock("var a = 0;a--;a==-1;", done);
		});
	});
});
