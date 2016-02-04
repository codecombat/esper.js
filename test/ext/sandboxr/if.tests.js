const runner = require('./test-runner').es5;

describe("If", () => {
	it("should execute body when passing", () => {
		runner.confirmBlock("var a = 10;\nif (1 == 1) { a = 50; }\na==50;");
	});

	it("should not execute body when failing", () => {
		runner.confirmBlock("var a = 10;\nif (1 != 1) { a = 50; }\na==10;");
	});

	it("should not execute alternate when failing", () => {
		runner.confirmBlock("var a = 10;\nif (1 != 1) { a = 50; } else { a = 20; }\na==20;");
	});

	it("should evaluate true ternary expression", () => {
		runner.confirmBlock("true ? true : false;");
	});

	it("should evaluate false ternary expression", () => {
		runner.confirmBlock("false ? false : true;");
	});
});
