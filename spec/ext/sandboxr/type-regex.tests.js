import {expect} from "chai";
import {es5 as runner} from "./test-runner";

describe("Type: RegExp", () => {
	it("should evaluate as typeof object", () => {
		runner.confirmBlock("typeof /a/ == 'object';");
	});

	describe("RegExp.prototype.test", () => {
		it("should return true when the string matches", () => {
			runner.confirmBlock("/a/.test('abc');");
		});

		it("should return false when the string does not match", () => {
			runner.confirmBlock("/a/.test('xyz')===false;");
		});
	});

	describe("RegExp.prototype.exec", () => {
		it("should return an array if matches", () => {
			runner.confirmBlock("Array.isArray(/a/.exec('abc'));");
		});

		it("should return a null if no matches", () => {
			runner.confirmBlock("/a/.exec('xyz')===null;");
		});

		it("should have the matches in the array", () => {
			let re = /quick\s(brown).+?(jumps)/ig;
			let expected = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");

			let actual = runner.runBlock("(/quick\\s(brown).+?(jumps)/ig).exec('The Quick Brown Fox Jumps Over The Lazy Dog')");

			for (let i = 0, ln = expected.length; i < ln; i++) {
				expect(actual.getProperty(i).getValue().value).to.equal(expected[i]);
			}

			expect(actual.getProperty("index").getValue().value).to.equal(expected.index);
			expect(actual.getProperty("input").getValue().value).to.equal(expected.input);
		});

		it("should update the lastIndex when a match is made", () => {
			let re = /quick\s(brown).+?(jumps)/ig;
			re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");

			runner.confirmBlock("var re = /quick\\s(brown).+?(jumps)/ig;re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');re.lastIndex===" + re.lastIndex + ";");
		});
	});
});
