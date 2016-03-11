import {expect} from "chai";
import * as parser from "./ast-parser";


describe("API", () => {
	it("should allow a variable to be defined", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		let a = env.createVariable("a");
		a.setValue(env.objectFactory.createPrimitive(99));

		let ast = parser.parse("a === 99;");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
		
		expect(result.value).to.be.true;
	});

	it("should allow an object to be defined", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		let obj = env.objectFactory.createObject();
		obj.defineProperty("foo", {value: env.objectFactory.createPrimitive(99)});

		let a = env.createVariable("a");
		a.setValue(obj);

		let ast = parser.parse("a.foo === 99;");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
		
		expect(result.value).to.be.true;
	});

	it("should allow function to be removed", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		env.getValue("String").getValue("prototype").remove("trim");

		let ast = parser.parse("typeof String.prototype.trim === 'undefined';");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
		
		expect(result.value).to.be.true;
	});

	it("should allow functions to be added", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		env.getValue("String").define("concat", env.objectFactory.createFunction(function () {
			let stringValue = "";
			for (let i = 0, ln = arguments.length; i < ln; i++) {
				stringValue += arguments[i].value;
			}

			return env.objectFactory.createPrimitive(stringValue);
		}, null));

		let ast = parser.parse("String.concat('foo','bar')==='foobar';");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
		
		expect(result.value).to.be.true;
	});

	it("should keep variables and values if environment is reused", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		let a = env.createVariable("a");
		a.setValue(env.objectFactory.createPrimitive(99));

		let ast = parser.parse("a++;");
		let sandbox = SandBoxr.create(ast);

		sandbox.execute(env);
			
		ast = parser.parse("a===100;");
		sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
			
		expect(result.value).to.be.true;
	});

	it("should lose variables and values if environment is reinitialized", () => {
		let env = SandBoxr.createEnvironment();
		env.init();

		let a = env.createVariable("a");
		a.setValue(env.objectFactory.createPrimitive(99));

		let ast = parser.parse("a++;");
		let sandbox = SandBoxr.create(ast);
		sandbox.execute(env);
		
		env.init();
		ast = parser.parse("typeof a === 'undefined';");
		sandbox = SandBoxr.create(ast);
		let result = sandbox.execute(env);
		
		expect(result.value).to.be.true;
	});

	it("should allow an object to be converted to a native object", () => {
		let ast = parser.parse("({foo:true});");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute();
		
		expect(result.toNative().foo).to.be.true;
	});

	it("should allow a primitive to be toNativeped", () => {
		let ast = parser.parse("(1);");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute();
		
		expect(result.toNative()).to.equal(1);
	});

	it("should allow an array to be toNativeped", () => {
		let ast = parser.parse("([1,2,3]);");
		let sandbox = SandBoxr.create(ast);
		let result = sandbox.execute();
		
		expect(result.toNative()[2]).to.equal(3);
	});

	describe("Exclusions", () => {
		it("should be able to exclude api's", () => {
			let ast = parser.parse("typeof JSON === 'undefined'");
			let sandbox = SandBoxr.create(ast, {exclude: ["JSON"]});
			let result = sandbox.execute();
			
			expect(result.value).to.be.true;
		});

		it("should be able to exclude methods from prototype", () => {
			let ast = parser.parse("typeof String.prototype.trim === 'undefined'");
			let sandbox = SandBoxr.create(ast, {exclude: ["String.prototype.trim"]});
			let result = sandbox.execute();
			
			expect(result.value).to.be.true;
		});

		it("should not throw if api does not exist", () => {
			let ast = parser.parse("(1)");
			SandBoxr.create(ast, {exclude: "String.foo.bar"});
		});
	});

	describe("Operators", () => {
		it("should be able to replace an operators", () => {
			let env = SandBoxr.createEnvironment();
			env.init({
				operators: {
					coerciveEquals (a, b) {
						if (a.isPrimitive && b.isPrimitive) {
							return a.value === b.value;
						}

						if (a.isPrimitive || b.isPrimitive) {
							return false;
						}

						return a === b;
					}
				}
			});

			let ast = parser.parse("0 == '0'");
			let sandbox = SandBoxr.create(ast);

			let result = sandbox.execute(env);
			expect(result.value).to.be.false;

			ast = parser.parse("0 != '0'");
			sandbox = SandBoxr.create(ast);

			result = sandbox.execute(env);
			expect(result.value).to.be.true;	
		});
	});
	
	describe("Imports", () => {
		it("should allow an ast to be imported", () => {
			let importAst = parser.parse("var a = 2");
			
			let ast = parser.parse("a==2;");
			let sandbox = SandBoxr.create(ast, {imports:[{ast:importAst}]});
			
			let result = sandbox.execute();
			expect(result.value).to.be.true;
		});
		
		it("should allow text code to be passed if a parser is defined", () => {
			let ast = parser.parse("a==2;");
			let sandbox = SandBoxr.create(ast, {parser: parser.parse, imports: [{code: "var a = 2;"}]});
			
			let result = sandbox.execute();
			expect(result.value).to.be.true;
		});
	});
});