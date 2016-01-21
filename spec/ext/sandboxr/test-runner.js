"use strict";

const parser = require('./ast-parser');
const Engine = require('../../../src/index');

function getRunner (code, options) {
	let ast = parser.parse(code, options);
	return new Engine().evalASTSync(ast);
};

function wrapArgs (args) {
	return args.map(arg => {
		return typeof arg === "string" ? `'${arg}'` : String(arg);
	}).join(",");
}

const es6 = {
	confirmBlock (code) {
		return getRunner(code, {ecmaVersion: 6});;
	},
	
	confirmError (code, errType) {
		try {
			getRunner(code, {ecmaVersion: 6});

			expect(false).toBe(true);
		} catch (err) {
			// if (typeof err === "object" && err.toNative) {
			// 	err = err.toNative();
			// }
			
			expect(err).toEqual(jasmine.any(errType));
		}
	},
	
	parse (code) {
		return parser.parse(code, {ecmaVersion: 6, sourceType: "module"});
	}
};

const es5 = {
	runBlock (code) {
		var p = getRunner(code);
		return p;
	},

	confirmBlock (code, done) {
		let value = this.runBlock(code);
		expect(value.toNative()).toBe(true);
		done && done();
	},

	confirmError (code, errType, done) {
		try {
			this.runBlock(code);

			expect(false).toBe(true);
			done && done();
		} catch (err) {
			// if (typeof err === "object" && err.toNative) {
			// 	err = err.toNative();
			// }
			
			expect(err).toEqual(jasmine.any(errType));
			done && done();
		}
	},

	getScope (code) {
		let env = SandBoxr.createEnvironment();
		env.init();

		let runner = getRunner(code);
		runner.execute(env);
		return env;
	}
};

module.exports = {
	es5: es5,
	es6: es6,
	wrapArgs: wrapArgs
}
