"use strict";

const runner = require('./test-runner').es5;

describe("Expression", () => {
	describe("Loops", () => {
		describe("For loops", () => {
			it("should iterate through items", done => {
				let code = "var a = 0;\nfor (var i = 0; i < 10; i++) { a++; }\na==10;";
				runner.confirmBlock(code, done);
			});

			it("should stop iterating when break", done => {
				let code = "var a = 0;\nfor (var i = 0; i < 10; i++) { a++; if (a > 1) { break; } }\na==2;";
				runner.confirmBlock(code, done);
			});

			it("should use continue to skip statements", done => {
				let code = "var a = 0;\nfor (var i = 0; i < 10; i++) { if (a > 0) { continue; } a++; }\na==1;";
				runner.confirmBlock(code, done);
			});
		});

		describe("For-in loops", () => {
			it("should iterate through properties", done => {
				runner.confirmBlock("var a = {a:1,b:2,c:3},b='';\nfor(var prop in a) { b += prop; }\nb=='abc';", done);
			});

			it("should not iterate through nonenumerable properties", done => {
				runner.confirmBlock("var a = {a:1,b:2,c:3},passed=true;\nfor(var prop in a) { if (prop == 'hasOwnProperty') { passed=false; } }\npassed;", done);
			});

			it("should iterate through child properties", done => {
				let code = "var triangle = {a:1, b:2, c:3};\nfunction ColoredTriangle() {\n  this.color = 'red';\n}\n\nColoredTriangle.prototype = triangle;\n\nvar obj = new ColoredTriangle();\nvar passed = false;\n\nfor (var prop in obj) {\n	if (prop === 'a') {\n\n	passed = true;\n	}\n}\npassed;";
				runner.confirmBlock(code, done);
			});
		});

		describe("Do while loops", () => {
			it("should execute until false", done => {
				runner.confirmBlock("var counter=0;while (counter < 5) { counter++; }\ncounter==5;", done);
			});

			it("should never execute if the test is never true", done => {
				runner.confirmBlock("var counter=10;while (counter < 5) { counter = 20; }\ncounter==10;", done);
			});

			it("should keep executing until first time it because false for do-while", done => {
				runner.confirmBlock("var counter=10;do { counter = 20; } while (counter < 5)\ncounter==20;", done);
			});
		});
	});
});
