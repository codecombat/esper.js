const es5 = require('./test-runner').es5;
const es6 = require('./test-runner').es6;

describe("Variables", () => {
	describe("with `var`", () => {
		it("should assign a variable to scope", () => es5.confirmBlock("var a = 1;a==1;"));
		it("should be unassigned for a variable that is not initialized", () => es5.confirmBlock("var a;a===undefined;"));
		it("should not add a property to an object during a check", () => es5.confirmBlock("var a = {};if (a.notexist !== undefined) {}\n!('notexist' in a);"));
		it("should hoist variables", () => es5.confirmBlock("(function () {return a===undefined;var a=1;})()"));
	});
	
	describe("with `const`", () => {
		it("should declare the variable", () => es6.confirmBlock("const a=true;a;"));
		it("should keep value if reassigned", () => es6.confirmBlock("const a=1;a=2;a===1;"));
		
		it("should throw TypeError on reasignment in strict mode", () => es6.confirmError("'use strict';const a=1;a=2;", TypeError));
	});
	
	describe("with `let`", () => {
		it("should declare the variable", () => es6.confirmBlock("let a=1;a===1;"));
		it("should not allow let variables to be accessed before defined", () => es6.confirmError("(function () {return a;let a=1;})()", ReferenceError));
	});
});
