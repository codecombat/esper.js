import {es5 as runner} from "./test-runner";

describe("Type: Number", () => {
	it("should show 'number' as typeof", () => runner.confirmBlock("typeof 5==='number';"));
	it("should evaluate signed numbers per spec", () => runner.confirmBlock("1/+0 !== 1/-0;"));

	["MIN_VALUE", "MAX_VALUE", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"].forEach(function (name) {
		it("should have constants: " + name, () => runner.confirmBlock("Number." + name + " == " + Number[name] + ";"));
	});

	describe("as object", () => {
		it("should return as object if called with `new`", () => runner.confirmBlock("typeof new Number(1) == 'object';"));
		it("should not strictly equal a number primitive", () => runner.confirmBlock("!(1 === new Number(1));"));
		it("should implicitly equal a number primitive", () => runner.confirmBlock("1 == new Number(1);"));
	});

	describe("when converting", () => {
		it("should create number when called as function", () => runner.confirmBlock("Number(5)===5"));

		it("should use toString if valueOf does not return number", () => {
			runner.confirmBlock("var __obj = {toString: function() {return '1'}, valueOf: function() {return new Object();}};Number(__obj)===1;");
		});

		it("should convert to string when calling toString", () => runner.confirmBlock("(5).toString()==='5';"));
	});
});
