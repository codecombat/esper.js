'use strict';
var expect = require('chai').expect;
var Engine = require('../src/index.js').Engine;

function a(code, o) {
	var e = new Engine({
		foreignObjectMode: 'smart'
	});

	e.evalSync('function a(arg) {\n' + code + '}');
	var fx = e.fetchFunctionSync('a');
	var args = Array.prototype.slice.call(arguments, 1);
	return fx.apply(null, args);

}

describe('Smart Link', () => {
	describe('Test Harness', () => {

		it('should run code with return values', () => {
			expect(a('return 2+2')).to.equal(4);
		});

		it('should be using smart objects', () => {
			expect(a('return Esper.str(arg)', {})).to.match(/^\[SmartLink/);
		});
	});

	describe('Passing Arguments to fetchFunctionSync', () => {

		it('should pass nothing as type undefined', () => {
			expect(a('return typeof arg')).to.equal('undefined');
		});

		it('should pass nothing as undefined', () => {
			expect(a('return arg')).to.equal(undefined);
		});

		it('should pass undefined as undefined', () => {
			expect(a('return typeof arg', void 0)).to.equal('undefined');
		});

		it('should pass null as typeof object', () => {
			expect(a('return typeof arg', null)).to.equal('object');
		});

		it('should pass null as null', () => {
			expect(a('return arg', null)).to.equal(null);
		});

		it('should pass numbers typeof number', () => {
			expect(a('return typeof arg', 7)).to.equal('number');
		});

		it('should pass numbers as numbers', () => {
			expect(a('return arg', 7)).to.equal(7);
		});

		it('should pass objects as objects', () => {
			expect(a('return typeof arg', {})).to.equal('object');
		});

		it('should pass functions as function', () => {
			expect(a('return typeof arg', function() {} )).to.equal('function');
		});

	});

	describe('Reading properties', () => {
		var obj =  {x: {y: 20}};
		it('should do subobjects', () => {
			expect(a('return arg.x.y', obj)).to.equal(20);
		});

		it('should do subobjects as object type', () => {
			expect(a('return typeof arg.x', obj)).to.equal('object');
		});

		it('subobjects should be SmartLinks', () => {
			expect(a('return Esper.str(arg.x)', obj)).to.match(/^\[SmartLink/);
		});

	});
});