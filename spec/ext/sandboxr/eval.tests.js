import {expect} from "chai";
import * as SandBoxr from "./adapter";
import * as parser from "./ast-parser";

function createRunner (text) {
	return SandBoxr.create(parser.parse(text), { parser: parser.parse });
}

describe("Eval", () => {
	it("should eval expression if parser is defined", () => {
		let ast = parser.parse("eval('1 + 1')===2;");
		let runner = SandBoxr.create(ast, { parser: parser.parse });
		let result = runner.execute();
		expect(result.value).to.be.true;
	});

	it("should be able to add variables to current scope", () => {
		let ast = parser.parse("eval('var i = 2;');i==2;");
		let runner = SandBoxr.create(ast, { parser: parser.parse });
		let result = runner.execute();
		expect(result.value).to.be.true;
	});

	describe("with Function constructor", () => {
		it("should return a function instance", () => {
			let runner = createRunner("typeof (new Function('return 1+2')) === 'function'");
			let result = runner.execute();
			expect(result.value).to.be.true;
		});

		it("should resolve parsed code when called", () => {
			let runner = createRunner("(new Function('return 1+2'))() === 3;");
			let result = runner.execute();
			expect(result.value).to.be.true;
		});

		it("should allow arguments to be defined", () => {
			let runner = createRunner("(new Function('a', 'b', 'return a + b'))(1,2) === 3;");
			let result = runner.execute();
			expect(result.value).to.be.true;
		});

		it("should run in the global scope", () => {
			let runner = createRunner("function a() { return new Function('return this;'); }\na()() === this;");
			let result = runner.execute();
			expect(result.value).to.be.true;
		});

		it("should be able to call constructor with `call`", () => {
			let runner = createRunner("(Function.call(this, 'return 1+2;'))()==3;");
			let result = runner.execute();
			expect(result.value).to.be.true;
		});
	});
});
