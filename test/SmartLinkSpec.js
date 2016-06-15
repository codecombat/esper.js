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
		ident() { return this.name + ' (' + (this.age || '?') + ')'; }
		identity(o) { return o; }
		bad() { return 'oh no!'; }
		toString() { return this.name; }
	}
	User.prototype.type = "User";
	User.prototype.code = 1234;

	User.prototype.apiProperties = ['name', 'age', 'type'];
	User.prototype.apiMethods = ['ident', 'identity'];


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

	describe('Maps well known values', () => {
		it('should map Object', () => {
			expect(a('return arg === Object', Object)).to.be.true;
		});

		it('should use Object Prototype', () => {
			expect(a('return Object.getPrototypeOf(arg) === Object.prototype', {rob: 1})).to.be.true;
			expect(a('return arg.toString === Object.prototype.toString', {rob: 1})).to.be.true;
		});

		it('should use Function Prototype', () => {
			//expect(a('return Object.getPrototypeOf(arg) === Function.prototype', function() {} )).to.be.true;
			expect(a('return arg.call === Function.prototype.call', function() {} )).to.be.true;
		});

		it('should use Array Prototype', () => {
			expect(a('return Object.getPrototypeOf(arg) === Array.prototype', [1,2,3] )).to.be.true;
			expect(a('return arg.join === Array.prototype.join', [1,2,3] )).to.be.true;
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
			expect(b(function(o) { return o.type; })).to.equal('User');
			expect(b(function(o) { return o.ident(); })).to.equal('Annoner (?)');
			expect(b(function(o) { return o.somethingThatDoesntExist; })).to.be.undefined; 
		});

		it('methods', () => {
			expect(b(function(o) { return o.identity(7); })).to.equal(7);
			expect(b(function(o) { return o.identity.call(null, 7); })).to.equal(7);
		});

		it('can\'t read unregistered property', () => {
			expect(() => b(function(o) { return o.secret; })).to.throw();
			expect(() => b(function(o) { return o.bad(); })).to.throw();
			expect(() => b(function(o) { return o.code; })).to.throw();
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

	describe('esper_ method overrides', () => {
		it('will use an esper_ property if it exists', () => {
			expect(a('return arg.one();', {
				apiProperties: [],
				one: () => 1,
				esper_one: () => 2
			})).to.equal(2);
		});
	});

});
