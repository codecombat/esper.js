import {es6} from "./test-runner";
import {expect} from "chai";

describe("Imports", () => {
	it("should allow named imports", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("export function square (x) { return x * x; }")
		};
		
		let ast = es6.parse("import {square} from 'lib';square(2)===4");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should allow default imports", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("export default function (x) { return x * x; }")
		};
		
		let ast = es6.parse("import square from 'lib';square(2)===4");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
		
	it("should allow default and named exports", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("export default 1;\nexport const named = 1;")
		};
		
		let ast = es6.parse("import {default as unnamed, named} from 'lib';\nnamed===unnamed;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should allow exports to be aliased", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("var foo = 1, b = 1;\nexport {foo as a, b}")
		};
		
		let ast = es6.parse("import {a, b} from 'lib';\na===b;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
			
	it("should export bindings", () => {
		let lib = {
			name: "lib",
			ast: es6.parse(`
			export let counter = 0;
    	export function inc() {
        counter++;
    	}`)
		};
		
		let ast = es6.parse("import { inc, counter } from 'lib';inc();counter===1;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should not import unused modules", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("throw Error('lib should not be called')")
		};
		
		let ast = es6.parse("true;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
		
	it("should allow wildcard exports", () => {
		let lib1 = {
			name: "lib1",
			ast: es6.parse("export const a = 1;")
		};
		
		let lib2 = {
			name: "lib2",
			ast: es6.parse("export * from 'lib1';")
		};
		
		let ast = es6.parse("import {a} from 'lib2';a===1;");
		let sandbox = SandBoxr.create(ast, {imports: [lib1, lib2]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should allow aliasing external exports", () => {
		let lib1 = {
			name: "lib1",
			ast: es6.parse("export const a = 1;")
		};
		
		let lib2 = {
			name: "lib2",
			ast: es6.parse("export {a as b} from 'lib1';")
		};
		
		let ast = es6.parse("import {b} from 'lib2';b===1;");
		let sandbox = SandBoxr.create(ast, {imports: [lib1, lib2]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should allow wildcard imports", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("var a = 1, b = 1;\nexport {a, b}")
		};
		
		let ast = es6.parse("import * as foo from 'lib';\nfoo.a===foo.b;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
	
	it("should allow import without assignments", () => {
		let lib = {
			name: "lib",
			ast: es6.parse("this.a = 1;")
		};
		
		let ast = es6.parse("import 'lib';\nthis.a===1;");
		let sandbox = SandBoxr.create(ast, {imports: [lib]});
		
		let result = sandbox.execute();
		expect(result.value).to.be.true;
	});
});