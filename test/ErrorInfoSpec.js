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
			expect(e.canidates).to.contain('otherthing');
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
			expect(e.canidates).to.contain('a');
			expect(e.canidates).to.not.contain('b');
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
			expect(e.canidates).to.contain('y');
			expect(e.canidates).to.not.contain('z');
			expect(e.ast.type).to.equal('CallExpression');
		}
	});
})
