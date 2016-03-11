const runner = require('./test-runner').es5;

describe("JSON", () => {
	describe("stringify", () => {
		it("should process string as expected", () => {
			runner.confirmBlock("JSON.stringify('foo')=='\"foo\"'");
		});

		it("should process number as expected", () => {
			runner.confirmBlock("JSON.stringify(123)=='123'");
		});

		it("should process boolean as expected", () => {
			runner.confirmBlock("JSON.stringify(true)=='true'");
		});

		xit("should process date as expected", () => {
			runner.confirmBlock("JSON.stringify(new Date(2000,1,1))=='\"' + (new Date(2000,1,1)).toJSON() + '\"'");
		});

		it("should process array as expected", () => {
			runner.confirmBlock("JSON.stringify([42])=='[42]'");
		});

		xit("should use replacer with array", () => {
			runner.confirmBlock("JSON.stringify([42], function (k,v) { return v===42?'fourtytwo':v; })=='[\"fourtytwo\"]'");
		});

		it("should throw type error for circular object", () => {
			runner.confirmError("var o={};o.prop=o;JSON.stringify(o);", TypeError);
		});

		it("should throw type error for circular array", () => {
			runner.confirmError("var a=[];a[0]=a;JSON.stringify(a);", TypeError);
		});

		it("should throw type error for nested circular reference", () => {
			runner.confirmError("var o={};o.a=[];o.a[0]=o;JSON.stringify(o);", TypeError);
		});

		it("should replace undefined values with null in sparse array", () => {
			runner.confirmBlock("JSON.stringify([,,])=='[null,null]'");
		});

		xit("should use an array for replacer if provided", () => {
			runner.confirmBlock("JSON.stringify({foo:'bar',bar:false},['foo'])=='{\"foo\":\"bar\"}';");
		});

		it("should serialize a regex as an empty object", () => {
			runner.confirmBlock("JSON.stringify(/abc/)=='{}';");
		});

		it("should serialize an Error as an empty object", () => {
			runner.confirmBlock("JSON.stringify(new Error('foo'))=='{}';");
		});

		it("should add a space for formatting when provided", () => {
			runner.confirmBlock("JSON.stringify({foo:1},null,2)=='{\\n  \"foo\": 1\\n}';");
		});

		it("should add a tab for formatting when provided", () => {
			runner.confirmBlock("JSON.stringify({foo:1},null,'\\t')=='{\\n\\t\"foo\": 1\\n}';");
		});
	});

	describe("parse", () => {
		it("should parse null correctly", () => {
			runner.confirmBlock("JSON.parse('null')===null;");
		});

		it("should parse number correctly", () => {
			runner.confirmBlock("JSON.parse('1.55')===1.55;");
		});

		it("should parse boolean correctly", () => {
			runner.confirmBlock("JSON.parse('true')===true;");
		});

		it("should parse string correctly", () => {
			runner.confirmBlock("JSON.parse('\"foo\"')==='foo';");
		});

		it("should parse array correctly", () => {
			runner.confirmBlock("JSON.parse('[1,2,3]').length===3;");
		});

		it("should parse object correctly", () => {
			runner.confirmBlock("JSON.parse('{\"foo\":true}').foo===true;");
		});

		xit("should parse with reviver correctly", () => {
			runner.confirmBlock("JSON.parse('{\"foo\":1}', function(k,v){return k=='foo'?v*2:v;}).foo===2;");
		});
	});
});