const runner = require('./test-runner').es5;

describe("Unary Expressions", () => {
	describe("typeof operator", () => {
		it("should return `undefined` for undefined variable", () => {
			runner.confirmBlock("typeof a === 'undefined';");
		});

		it("should return `undefined` for undefined property", () => {
			runner.confirmBlock("var a = {};typeof a.foo=='undefined';");
		});
	});

	describe("- operator", () => {
		it("should negate value", () => {
			runner.confirmBlock("-(2)===-2;");
		});
	});

	describe ("+ operator", () => {
		it("should convert value to number", () => {
			runner.confirmBlock("+(2)===2;");
		});
	});

	describe("! operator", () => {
		it("should convert value to a boolean", () => {
			runner.confirmBlock("typeof(!{})==='boolean';");
		});

		it("should convert a primitive wrapper object to appropriate boolean", () => {
			runner.confirmBlock("!(new String())===false");
		});

		it("should negate a boolean value", () => {
			runner.confirmBlock("!false");
		});
	});

	describe("delete operator", () => {
		it("should return true for non-reference", () => {
			runner.confirmBlock("delete 42;");
		});

		it("should return true for non-existant variable", () => {
			runner.confirmBlock("delete a;");
		});

		it("should return false when deleting non-configurable property", () => {
			runner.confirmBlock("delete NaN===false;");
		});

		it("should not delete a variable", () => {
			runner.confirmBlock("(function() { var a = [];var d = delete a; return d === false && Array.isArray(a); })()");
		});

		it("should throw a reference error if object doesn't exists", () => {
			runner.confirmError("delete o.a;", ReferenceError);
		});
	});
});
