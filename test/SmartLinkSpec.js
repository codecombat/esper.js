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

function b(code) {
	var e = new Engine({
		foreignObjectMode: 'smart'
	});

	class User {
		constructor() {
			this.name = 'Annoner';
			this.secret = 'sauce';
		}
		ident() { return this.name + ' (' + this.age + ')'; }
	}

	User.prototype.apiProperties = ['name', 'age'];
	User.prototype.apiMethods = ['ident'];


	e.evalSync('var a = ' + code.toString());
	var fx = e.fetchFunctionSync('a');
	return fx.call(null, new User());
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


	describe('Respect API properties', () => {
		it('read allowed property', () => {
			expect(b(function(o) { return o.name; })).to.equal('Annoner');
			expect(b(function(o) { return o.age; })).to.be.undefined; 
		});

		it('can\'t read unregistered property', () => {
			expect(() => b(function(o) { return o.secret; })).to.throw();
		});

		it('can\'t overwrite properties', () => {
			expect(() => b(function(o) { return o.name = 'Rob'; })).to.throw();
			expect(() => b(function(o) { return o.secret = 'something'; })).to.throw();
		});

		it('supports user assinged properties', () => {
			expect(b(function(o) { 
				o.nue = 5;
				o.nue += 2;
				return o.nue;
			})).to.equal(7);
		});

	});

});