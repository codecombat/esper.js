'use strict';
var expect = require('chai').expect;
var Engine = require('../src/index.js').Engine;

var FutureValue = require('../src/values/FutureValue');
var Value = require('../src/Value');

function ensure_not_done(e) {
	expect(e.done).to.be.false;
}

function resolves(e,  value) {
	do {
		var f = e.next();
	} while ( !f.done );

	return f.value;
}

function b(code) {
	var e = new Engine({
		foreignObjectMode: 'smart'
	});

	class User {
		constructor() {
			this.name = 'Annoner';
		}
		toString() { return this.name; }
	}

	e.evalSync('var a = ' + code.toString());
	var fx = e.fetchFunctionSync('a');
	return fx.call(null, new User());
}

describe('Misc', () => {
	it('Function Parsing Tests', () => {

		var e = new Engine({
			foreignObjectMode: 'smart'
		});

		var f = e.functionFromSourceSync('return 10');
		var r = f();
		expect(r).to.equal(10);
	});

	describe('Boomark Tests', () => {
		it('Array of Links', () => {
			expect(b(function(o) {return [o,o,o];}).toString()).to.equal('Annoner,Annoner,Annoner');
		});

		it('boomarkInvokeMode', () => {
			var e = new Engine({
				foreignObjectMode: 'smart',
				bookmarkInvocationMode: 'loop'
			});
			e.evalSync('var get = (' + (function() {
				var o = {};
				o.rob = function() { return 'Rob is great!'; };
				return o;
			}).toString() + ')');
			var value = e.fetchFunctionSync('get')();
			expect(value.rob()).to.equal('Rob is great!');
		});
	});
});
