'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');

function roundtrip(what, test) {
	let name = what.replace(/^\s*/gism, ' ').replace(/\n/g,' ').replace(/\s*$/,'');
	let m = (v) => {
		return String(v);
	};

	it(name, function() {
		let source = new esper.Engine({frozenRealm: true});
		source.evalSync(what);

		let expected = [];
		source.realm.print = (...rest) => expected.push(rest.map(m).join(' '));
		let data = esper.plugin('dehydrate').dehydrateRealm(source.realm);

		source.load(test);
		source.runSync();

		let actual = [];
		let dest = new esper.Engine({frozenRealm: true});
		dest.realm.print = (...rest) => actual.push(rest.map(m).join(' '));
		esper.plugin('dehydrate').hydrateRealm(dest.realm, data);
		dest.load(test);
		dest.runSync();

		//console.log(actual,expected);

		expect(actual.join('\n')).to.equal(expected.join('\n'));
	});
}

describe('Plugin: Dehydrate', function() {
	describe('roundtrip realm', function() {
		roundtrip(`
			x = 10;
		`,`
			print(x);
		`);

		roundtrip(`
			let x = () => 10
		`,`
			print(x());
		`);

		roundtrip(`
			let x = [1,2,3,4]
		`,`
			print(x.toString());
		`);

		roundtrip(`
			let x = {n:10.0, s:'hi', b:false, o:{a: 1, b: 2}};
		`,`
			print(JSON.stringify(x));
		`);

		roundtrip(`
			let o = {a:1};
			let x = {a:o, b:o};
			x.x = x;
		`,`
			print(x.a === x.b);
		`);

		roundtrip(`
			function counter(n) {
				return {
					up: () => ++n,
					double: () => n *= 2
				}
			}
		`,`
			let c = counter(3);
			print(c.up());
			print(c.double());
			print(c.up());
		`);

		roundtrip(`
			function counter(n) {
				return {
					up: () => ++n,
					double: () => n *= 2
				}
			}
			let c = counter(3);
		`,`
			print(c.up());
			print(c.double());
			print(c.up());
		`);


		roundtrip(`
			function counter(n) {
				return {
					up: () => ++n,
					double: () => n *= 2
				}
			}
			let a = counter(3);
			let b = counter(5);
		`,`
			print(a.up());
			print(b.double());
			print(a.up());
		`);

		roundtrip(`Math.one = 1`, `print(Math.one); print(typeof Math.one);`);

		roundtrip(`
			let base = {a: 1};
			let o = Object.create(base);
			o.b = 2;
		`,`
			print(o.a);
			print(o.b);
			print(Object.getPrototypeOf(o) === base);
		`)

		roundtrip(`let x = new Function('y', 'return 2*y');`, `print(x(7))`)

		roundtrip(`
			a=7;
			let r = new Realm();
			r.eval("a = 10");
		`,`
			print(a);
			print(r.globalThis.a);
		`)

		roundtrip(`
			t=0;
			let r = new Realm();
			r.eval("function setZ(v) { z = v; }");
			r.globalThis.setZ(3);
		`,`
			print(t, "/", r.globalThis.z);
			//r.globalThis.setZ(7);
			r.eval('setZ(7)');
			print(t, "/", r.globalThis.z);
			r.eval('z = 9');
			print(t, "/", r.globalThis.z);
		`)


	});
});

