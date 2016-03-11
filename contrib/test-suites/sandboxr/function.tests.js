const runner = require('./test-runner').es5;

describe("Functions", () => {
	it("Function should have a prototype of function", done => {
		runner.confirmBlock("Object.getPrototypeOf(Function)===Function.prototype;", done);
	});

	it("should return a value from a named function", done => {
		runner.confirmBlock("function a() { return 50; }\na()==50;", done);
	});

	it("should return a value from a function assigned to variable", done => {
		runner.confirmBlock("var a = function () { return 50; };\na()==50;", done);
	});

	it("should pass parameters into function", done => {
		runner.confirmBlock("var a = function (b) { return b; };\na(50)==50;", done);
	});

	it("should be able to access variable in outer scope", done => {
		runner.confirmBlock("var a = 50;\nfunction b() { return a; }\nb()==50;", done);
	});

	it("should be able to `call` a function", done => {
		runner.confirmBlock("function a(x, y) { return x + y; }\na.call(null, 10, 40)==50;", done);
	});

	it("should be able to control `this` with `call`", done => {
		runner.confirmBlock("var a = {};function b() { return this === a; }\nb.call(a)==true;", done);
	});

	it("should be able to `apply` a function", done => {
		runner.confirmBlock("function a(x, y) { return x + y; }\na.apply(null, [10, 40])==50;", done);
	});

	it("should not alter `this` when provided through apply for builtin", done => {
		runner.confirmBlock("Object.prototype.toString.apply(null, []) == '[object Null]';", done);
	});

	it("should be able to coercively compare functions", done => {
		runner.confirmBlock("var a = function(){};var b = a;a == b;", done);
	});

	it("should link arguments object to the named parameters", done => {
		runner.confirmBlock("(function (a) { a++;return a===arguments[0]; })(1)==true;", done);
	});

	it("should allow function prototype to be called", done => {
		runner.confirmBlock("Function.prototype()===undefined;", done);
	});

	describe("Function.prototype.bind", () => {
		it("should return a function", done => {
			runner.confirmBlock("var a = function () {};typeof a.bind({}) === 'function';", done);
		});

		it("should return a new function", done => {
			runner.confirmBlock("var a = function () {};var b = a.bind({});a !== b;", done);
		});

		it("should set the scope of the new function", done => {
			runner.confirmBlock("var a = {};var b = function () { return this === a; };b.bind(a)()==true;", done);
		});

		it("should use the arguments assigned, along with those provided at call time", done => {
			runner.confirmBlock("var a = function (a,b,c) { return a + b + c; };a.bind(null,2,3)(-5)==0;", done);
		});
	});

	describe("scope", () => {
		it("should be able to read value from parent scope", done => {
			runner.confirmBlock("var a = (function(global) { return function (value) { return global.String(value); }; })(this);\na('foo')=='foo';", done);
		});
	});
});
