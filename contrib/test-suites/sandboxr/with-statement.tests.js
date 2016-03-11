import {es5 as runner} from "./test-runner";

describe("WithStatement", () => {
	it("should use the object in the scope", done => {
		runner.confirmBlock("var o={foo:true}, result;with(o){result = foo}\nresult==true;", done);
	});
});
