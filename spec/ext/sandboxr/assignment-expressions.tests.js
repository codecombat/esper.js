"use strict";

const runner = require('./test-runner').es5;

describe("Expressions", () => {
	describe("Assignment Expressions", () => {
		const left = 1;
		const right = 2;

		[
			{op: "=", name: "Assignment", expected: right},
			{op: "+=", name: "Addtion assignment", expected: left + right},
			{op: "-=", name: "Subtraction assignment", expected: left - right},
			{op: "*=", name: "Multiplication assignment", expected: left * right},
			{op: "/=", name: "Division assignment", expected: left / right},
			{op: "%=", name: "Remainder assignment", expected: left % right},
			{op: "<<=", name: "Left shift assignment", expected: left << right},
			{op: ">>=", name: "Right shift assignment", expected: left >> right},
			{op: ">>>=", name: "Unsigned right shift assignment", expected: left >>> right},
			{op: "|=", name: "Bitwise AND assignment", expected: left | right},
			{op: "^=", name: "Bitwise XOR assignment", expected: left ^ right},
			{op: "&=", name: "Bitwise OR assignment", expected: left & right}
		].forEach(current => {
			it("should apply " + current.op, () => {
				let code = "var a = " + left + "; a " + current.op + " " + right + ";a == " + current.expected + ";";
				runner.confirmBlock(code);
			});
		});
	});


	it("should error if the left side is null", () => {
		runner.confirmError("var x = (y *= 1);", ReferenceError);
	});

	it("should increment value", () => {
		let code = "var a = 0; a++;a==1;";
		runner.confirmBlock(code);
	});

	it("should decrement value", () => {
		let code = "var a = 0; a--;a==-1;";
		runner.confirmBlock(code);
	});

	it("should decrement value after returning", () => {
		let code = "var a = 0; var b = a--;b==0;";
		runner.confirmBlock(code);
	});
});
