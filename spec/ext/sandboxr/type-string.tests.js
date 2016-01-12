import {expect} from "chai";
import {es5 as runner, wrapArgs} from "./test-runner";

describe("Type: String", () => {
	[
		{fn: "charAt", args: [1]},
		{fn: "charAt", args: [99]},

		{fn: "charCodeAt", args: [1]},

		{fn: "concat", args: ["bar"]},
		{fn: "concat", args: ["bar", "baz"]},

		{fn: "indexOf", args: ["Foo"]},
		{fn: "indexOf", args: ["Foo", 0]},
		{fn: "indexOf", args: ["b"]},
		{fn: "indexOf", args: ["b", 1]},
		{fn: "indexOf", args: ["", 10]},

		{fn: "lastIndexOf", args: ["o"]},
		{fn: "lastIndexOf", args: ["o", 2]},
		{fn: "lastIndexOf", args: ["b"]},

		{fn: "localeCompare", args: ["Foo"]},
		{fn: "localeCompare", args: ["foo"]},
		{fn: "localeCompare", args: ["bar"]},

		{source: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", fn: "match", args: [/[A-E]/gi]},
		{source: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", fn: "match", args: [/[0-9]/gi]},

		{source: "Apples are round, and apples are juicy.", fn: "replace", args: [/apples/gi, "oranges"]},
		// {source: "ApplesAreRoundAndApplesAreJuicy", fn: "replace", args: [/[A-Z]/g, (match, p1) => " " + p1]},

		{source: "The morning is upon us.", fn: "search", args: [/morn/]},
		{source: "The morning is upon us.", fn: "search", args: [/[0-9]/]},

		{source: "The morning is upon us.", fn: "slice", args: [4, -2]},
		{source: "The morning is upon us.", fn: "slice", args: [-3]},
		{source: "The morning is upon us.", fn: "slice", args: [-3, -1]},
		{source: "The morning is upon us.", fn: "slice", args: [0, -1]},

		{source: "Oh brave new world that has such people in it.", fn: "split", args: [" "]},
		{source: "Oh brave new world that has such people in it.", fn: "split", args: []},
		{source: "Hello World. How are you doing?", fn: "split", args: [" ", 3]},
		{source: "Hello World. How are you doing?", fn: "split", args: [/\s/g]},

		{source: "abcdefghij", fn: "substr", args: [1, 2]},
		{source: "abcdefghij", fn: "substr", args: [-3, 2]},
		{source: "abcdefghij", fn: "substr", args: [-3]},
		{source: "abcdefghij", fn: "substr", args: [-20, 2]},
		{source: "abcdefghij", fn: "substr", args: [20, 2]},

		{source: "abcdefghij", fn: "substring", args: [0, 3]},
		{source: "abcdefghij", fn: "substring", args: [3, 0]},
		{source: "abcdefghij", fn: "substring", args: [4, 7]},
		{source: "abcdefghij", fn: "substring", args: [7, 4]},

		{source: "ABCD", fn: "toLocaleLowerCase", args: []},
		{source: "abcd", fn: "toLocaleUpperCase", args: []},
		{source: "ABCD", fn: "toLowerCase", args: []},
		{source: "abcd", fn: "toUpperCase", args: []},

		{fn: "toString", args: []},

		{source: "    foo     ", fn: "trim", args: []},
		{source: "foo    ", fn: "trim", args: []},

		{fn: "valueOf", args: []}
	].forEach(testCase => {
		it("String.prototype." + testCase.fn + ": should return expected results with args: " + wrapArgs(testCase.args), () => {
			let source = testCase.source || "Foo";
			let expected = source[testCase.fn](...testCase.args);
			let code = "'" + source + "'." + testCase.fn + "(" + wrapArgs(testCase.args) + ");";

			let result = runner.runBlock(code);

			if (Array.isArray(expected)) {
				expect(result.getProperty("length").getValue().value).to.equal(expected.length);
				expected.forEach((value, index) => {
					expect(result.getProperty(index).getValue().value).to.equal(value);
				});
			} else {
				expect(result.getValue().value).to.equal(expected);
			}
		});
	});

	describe("String.fromCharCode", () => {
		it("should return expected value", () => runner.confirmBlock("String.fromCharCode(65, 66, 67)=='ABC';"));
	});

	describe("String.prototype.length", () => {
		it("should return the length of the string.", () => runner.confirmBlock("'foo'.length==3;"));
		it("should ignore when length is set", () => runner.confirmBlock("var a = 'foo';a.length = 2;a.length==3;"));
	});

	describe("When using bracket notation", () => {
		it("should return character at that position", () => runner.confirmBlock("'foo'[1] == 'o';"));
		it("should return undefined if position is not in array", () => runner.confirmBlock("'foo'[99] === undefined;"));
		it("should not allow character to be replaced by position", () => runner.confirmBlock("var a = 'foo'; a[1] = 'f';a === 'foo';"));
	});

	describe("When converting", () => {
		it("should use overridden `toString` if set.", () => {
			runner.confirmBlock("var a = {toString:function() { return 'foo'; } };String(a) == 'foo';");
		});

		it("should throw a type error if overridden `toString` returns an object", () => {
			runner.confirmError("var a = {toString:function() { return {}; } };String(a);", TypeError);
		});
	});

	describe("as object", () => {
		it("should show typeof `object` when creating use `new`", () => runner.confirmBlock("typeof new String('foo') == 'object';"));
		it("should not strictly equal a primitive string", () => runner.confirmBlock("new String('foo') !== 'foo';"));
		it("should implicitly equal a primitive string", () => runner.confirmBlock("new String('foo') == 'foo';"));
	});
});
