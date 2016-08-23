'use strict';
var expect = require('chai').expect;
var Engine = require('../src/index.js').Engine;

var FutureValue = require('../src/values/FutureValue');
var Value = require('../src/Value');


describe('Extra Error Info', () => {
	it('UndefinedVariable', () => {
		try {
			new Engine({strict: true, extraErrorInfo: true}).evalSync('var otherthing; console.log(something);');
			expect(false).to.be.true;
		} catch ( e ) {
			expect(e.line).to.equal(1);
			expect(e.code).to.equal('UndefinedVariable');
			expect(e.when).to.equal('read');
			expect(e.strict).to.be.true;
			expect(e.candidates).to.contain('otherthing');
			expect(e.ast.type).to.equal('Identifier');
		}
	});

	it('CallNonFunction on Object', () => {
		try {
			new Engine({extraErrorInfo: true}).evalSync('var v = {a: function() {}, b:1};\nconsole.log(v.c());');
			expect(false).to.be.true;
		} catch ( e ) {
			expect(e.line).to.equal(2);
			expect(e.code).to.equal('CallNonFunction');
			expect(e.candidates).to.contain('a');
			expect(e.candidates).to.not.contain('b');
			expect(e.ast.type).to.equal('CallExpression');
		}
	});

	it('CallNonFunction on Link', () => {
		try {
			var e = new Engine({extraErrorInfo: true});
			e.addGlobal('rob', {a: 10, b: function() {}});
			e.evalSync('console.log(rob.c());');
			expect(false).to.be.true;
		} catch ( e ) {
			expect(e.line).to.equal(1);
			expect(e.code).to.equal('CallNonFunction');
			expect(e.candidates).to.contain('b');
			expect(e.candidates).to.not.contain('a');
			expect(e.ast.type).to.equal('CallExpression');
		}
	});

	it('CallNonFunction on SmartLink', () => {
		try {
			var e = new Engine({extraErrorInfo: true, foreignObjectMode: 'smart'});
			e.addGlobal('rob', {a: 10, b: function() {}, c: function() {}, apiMethods: ['c']});
			e.evalSync('console.log(rob.d());');
			expect(false).to.be.true;
		} catch ( e ) {
			expect(e.line).to.equal(1);
			expect(e.code).to.equal('CallNonFunction');
			expect(e.candidates).to.contain('c');
			expect(e.candidates).to.not.contain('b');
			expect(e.candidates).to.not.contain('a');
			expect(e.ast.type).to.equal('CallExpression');
		}
	});

	it('CallNonFunction on global', () => {
		try {
			new Engine({extraErrorInfo: true}).evalSync('function y() {};\nvar z = 10;\nvar a = 7;\na();');
			expect(false).to.be.true;
		} catch ( e ) {
			expect(e.line).to.equal(4);
			expect(e.code).to.equal('CallNonFunction');
			expect(e.candidates).to.contain('y');
			expect(e.candidates).to.not.contain('z');
			expect(e.ast.type).to.equal('CallExpression');
		}
	});

	it('Change an added global const', () => {
		var engine = new Engine({extraErrorInfo: true, strict: true});
		engine.addGlobalValue("pi", 3.14, {const: true});
		try {
			engine.evalSync('pi = 3;');
			expct(false).to.equal(true);
		} catch ( e ) {
			expect(e.name).to.equal('TypeError');
		}
		expect(engine.globalScope.get('pi').toNative()).to.equal(3.14);
	});
})
