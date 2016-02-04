"use strict";

const expect = require('chai').expect;
const runner = require('./test-runner').es5;

describe("Scope", () => {
	xdescribe("strict mode", () => {
		it("should detect 'use strict' literal and set scope to strict mode", () => {
			let scope = runner.getScope("'use strict';");
			expect(scope.isStrict()).toBe(true);
		});
	});

	describe("Global variables", () => {
		it("undefined exists", () => {
			runner.confirmBlock("typeof undefined==='undefined';");
		});

		it("Infinity exists", () => {
			runner.confirmBlock("typeof Infinity==='number';");
		});

		it("NaN exists", () => {
			runner.confirmBlock("NaN!==NaN;");
		});

		it("global this exists", () => {
			runner.confirmBlock("var x;'x' in this;");
		});

		it("`this` should refer to global object", () => {
			runner.confirmBlock("this.String === String");
		});

		it("a variable attached to global this is in the global", () => {
			runner.confirmBlock("this.foo = 2;this.foo === foo;");
		});

		it("should generate a reference error if variable does not exists", () => {
			runner.confirmError("foo;", ReferenceError);
		});

		it("should assign undeclared variable to global", () => {
			runner.confirmBlock("var obj = {};__ref = obj;__ref !== undefined;");
		});

		it("should create functions before they are called", () => {
			runner.confirmBlock("function f() { var x;return x;function x() {}\n}\ntypeof f() === 'function'");
		});

		it("should ignore debugger statements", () => {
			runner.confirmBlock("debugger;1==1;");
		});
	});
});
