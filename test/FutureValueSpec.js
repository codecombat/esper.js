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

describe('FutureValue', function() {
	describe('Basic Tests', function() {

		it('simple', function() {

			var e = new Engine({
				foreignObjectMode: 'smart'
			});

			var fv = new FutureValue(e.realm);
			e.addGlobalFx('a', function() { return fv; });
			e.load('a()');

			for ( var i = 0; i < 20; ++i ) {
				ensure_not_done(e.generator.next());
			}

			fv.resolve(Value.fromNative(22));
			var val = resolves(e.generator);
			expect(val.toNative()).to.equal(22);
		});

		it('Fetch function', function() {

			var e = new Engine({
				foreignObjectMode: 'smart'
			});

			var fv = new FutureValue(e.realm);
			e.addGlobalFx('getFuture', function() { return fv; });
			e.evalSync('function a(o) { return getFuture(); };');
			var gen = e.fetchFunction('a')();

			for ( var i = 0; i < 20; ++i ) {
				ensure_not_done(gen.next());
			}

			fv.resolve(Value.fromNative(22));
			expect(resolves(gen)).to.equal(22);
		});
		it('Simple Run test', function() {
			var e = new Engine();
			e.load('2+2');
			return e.run().then((v) => {
				expect(v.toNative()).to.equal(4);
			});
		});
		it('Run with async callback.', function() {

			var e = new Engine({
				foreignObjectMode: 'smart'
			});

			var fv = new FutureValue(e.realm);
			e.addGlobal('fv', fv);
			e.load('function a(o) { return o; }; a(fv);');
			setTimeout(function() { fv.resolve(Value.fromNative(22)) }, 1000);

			return e.run().then((value) => {
				expect(value.toNative()).to.equal(22);
			});
		});

	});


});
