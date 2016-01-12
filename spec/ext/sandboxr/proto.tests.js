const runner = require('./test-runner').es5;

describe("Prototype tests", () => {
	it("should create a new object", done => {
		runner.confirmBlock("function FooObj() {};var o=new FooObj();typeof o=='object';", done);
	});

	it("should inherit from object", done => {
		runner.confirmBlock("function foo() {};foo.prototype.bar = 'empty';\nvar o = new foo();\no.bar=='empty';", done);
	});
});
