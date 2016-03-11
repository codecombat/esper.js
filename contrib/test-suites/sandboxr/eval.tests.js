"use strict";

const runner = require('./test-runner').es5;
const expect = require('chai').expect;

function createRunner (text) {
	return runner.runBlock(text);
}

describe("Eval", () => {
	it("should eval expression if parser is defined", () => {
		let result = createRunner("eval('1 + 1')===2;");
		expect(result.toNative()).to.be.true;
	});

	it("should be able to add variables to current scope", () => {
		let result = createRunner("eval('var i = 2;');i==2;");
		expect(result.toNative()).to.be.true;
	});

	describe("with Function constructor", () => {
		it("should return a function instance", () => {
			let result = createRunner("typeof (new Function('return 1+2')) === 'function'");
			expect(result.toNative()).to.be.true;
		});

		it("should resolve parsed code when called", () => {
			let result = createRunner("(new Function('return 1+2'))() === 3;");
			expect(result.toNative()).to.be.true;
		});

		it("should allow arguments to be defined", () => {
			let result = createRunner("(new Function('a', 'b', 'return a + b'))(1,2) === 3;");
			expect(result.toNative()).to.be.true;
		});

		it("should run in the global scope", () => {
			let result = createRunner("function a() { return new Function('return this;'); }\na()() === this;");
			expect(result.toNative()).to.be.true;
		});

		it("should be able to call constructor with `call`", () => {
			let result = createRunner("(Function.call(this, 'return 1+2;'))()==3;");
			expect(result.toNative()).to.be.true;
		});
	});
});
