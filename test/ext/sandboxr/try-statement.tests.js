"use strict";
const runner = require('./test-runner').es5;

describe("Try-Catch-Finally", () => {
	it("should not throw an exception if an error occurs in a try-block", () => {
		runner.confirmBlock("try { var a = {}; a.b(); } catch (err) { }\ntrue==true;");
	});

	it("should throw an exception if an error occurs outside of a try-block", () => {
		runner.confirmError("var a = {}; a.b();", TypeError);
	});

	it("should not execute the catch block if no error is thrown", () => {
		runner.confirmBlock("var passed = true;try {;} catch (err) { passed = false; }\npassed==true;");
	});

	it("should execute the catch block if error is thrown", () => {
		runner.confirmBlock("var passed = false;try { a(); } catch (err) { passed = true; }\npassed==true;");
	});

	it("should execute the finalizer when no error occurs", () => {
		runner.confirmBlock("var passed = false;try { } finally { passed = true; }\npassed==true;");
	});

	it("should continue executing code outside of the try block.", () => {
		runner.confirmBlock("var passed = false;try { a(); } catch (err) {;}\npassed = true;passed==true;");
	});

	// it("should stop executing code within the try block.", () => {
	// 	let code = "var passed=true;try {\nvar object = {valueOf: function() {throw 'error'}, toString: function() {return 1}};\n~object;passed=false;}\ncatch (e) {;}\npassed==true;";
	// 	runner.confirmBlock(code);
	// });

	it("should prefer return from finalizer", () => {
		runner.confirmBlock("function f() { try { return false; } finally { return true; }\n}\nf();");
	});

	it("should be able to determine instanceof thrown error", () => {
		runner.confirmBlock("var result = false;try { throw new TypeError() } catch (err) { result = err instanceof TypeError; }\nresult==true;");
	});

	it("should bubble up exception from uncaught from a function", () => {
		runner.confirmError("function a() {\ntry { throw new TypeError(); } finally { }\n}\na();", TypeError);
	});
});
