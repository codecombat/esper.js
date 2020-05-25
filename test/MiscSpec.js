'use strict';
var expect = require('chai').expect;
var Engine = require('../src/index.js').Engine;

var FutureValue = require('../src/values/FutureValue');
var Value = require('../src/Value');
var ObjectValue = require('../src/values/ObjectValue');

function ensure_not_done(e) {
	expect(e.done).to.be.false;
}

function resolves(e, value) {
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

	describe('ES Realms', () => {
		function test(name, s) {
			it(name, () => new Engine({esRealms: true}).evalSync(s));
		}

		test('basic', `
			let r = new Realm();
			assert(!!r);
			x = 3;
			r.eval("x = 10");
			assert(r.global.x == 10);
			assert(x == 3);
			assert(typeof r !== "undefined");
			assert(typeof r.global.r === "undefined");
		`);

		test('function in', `
			let r = new Realm();
			assert(!!r);
			x = 3;
			r.global.f = function() { return x = 10; };
			assert(typeof f === "undefined");
			y = r.eval("f()");
			assert(y == 10);
			assert(typeof r.globalThis.x == 'undefined');
			assert(x == 10);
		`);

		test('function out', `
			let r = new Realm();
			r.eval('function f(a) { n = a }');
			assert(typeof f == 'undefined');
			assert(typeof n == 'undefined');
			r.globalThis.f(44);
			assert(typeof n == 'undefined');
			assert(r.globalThis.n == 44);
		`);

		test('examples', `
			const globalOne = globalThis;
			const globalTwo = new Realm().globalThis;

			let a1 = globalOne.eval('[1,2,3]');
			let a2 = globalTwo.eval('[1,2,3]');
			assert(Object.getPrototypeOf(a1) !== Object.getPrototypeOf(a2));
		`);

	});

	describe('Frozen Realms', () => {
		xit('has no unfrozen values', () => {
			let e = new Engine({frozenRealm: true});
			let checked = new WeakSet(); 
			function walk(o, path) {
				if ( o === null ) return;
				if ( checked.has(o) ) return;
				checked.add(o);
				if ( o instanceof ObjectValue ) {
					expect(o.extensable).to.be.false;
					for ( let pn in o.properties ) {
						let p = o.properties[pn];
						if (typeof p.value === 'undefined') continue;
						
						walk(p.value, path + "/" + pn);;
						expect(p.writable).to.be.false;
						expect(p.configurable).to.be.false;
						expect(Object.isFrozen(p)).to.be.true;
					}
					walk(o.getPrototype(), path + "%Prototype");
				}
			}
			for ( let g in e.realm.globalScope.object.properties ) {
				walk(e.realm.globalScope.object.properties[g].value,g);
			}
		})
	})
});
