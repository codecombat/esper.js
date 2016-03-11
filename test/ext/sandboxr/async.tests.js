import {expect} from "chai";
import * as parser from "./ast-parser";

describe("Async", () => {
	it("should accept promises for returned values", done => {
		let env = SandBoxr.createEnvironment();
		env.init();

		let foo = env.objectFactory.createFunction(function () {
			let promise = new Promise(function (resolve) {
				setTimeout(function () {
					let result = env.objectFactory.createPrimitive(50);
					resolve(result);
				}, 4);
			});

			return promise;
		});

		env.global.define("foo", foo);

		let ast = parser.parse("foo()===50;");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.resolve(env);

		result.then(value => {
			expect(value.toNative()).to.be.true;
			done();
		});
	});

	it("should return a promise as a result", done => {
		let ast = parser.parse("true===true;");
		let sandbox = SandBoxr.create(ast);

		sandbox.resolve().then(value => {
			expect(value.toNative()).to.be.true;
			done();
		});
	});
});