'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');
var Engine = esper.Engine;

let tests = [];
let addTest = (a,b,c) => tests.push([a,b,c]);


addTest(`
	let a = 10;

	let p1 = Pointer.refrence(a);
	let p2 = Pointer.refrence(p1);


	console.log(p1.value);

	a = 20;

	console.log(p1.value);
	console.log(p2.value);
	console.log(p2.value.value);
	p1.value = 13;
	console.log(a);
`,[10,20,'[object Pointer]',20, 13], "a = 10; p = &a; *p; pp = &p; **pp; *p = 13; **pp");


addTest(`
	let o = {a: 1, b: 2};
	let p3 = Pointer.refrence(o.a);
	console.log(p3.value);
	o.a = 10;
	console.log(p3.value);
	o = {a: 3, b: 7};
	console.log(p3.value);
`, [1,10,10], "p = &a.b; *p")

addTest(`
	let b = [8,6,7,5,3];
	let p4 = Pointer.refrence(b[0]);
	console.log(p4.value);
	++p4;
	console.log(p4.value);
	p4.value = 10;
	console.log(b);
`, [8,6,'8,10,7,5,3'], "*p = 7")

addTest(`
	let c = "hello"
	let p5 = Pointer.refrence(c[0]);
	while ( p5.value ) {
		console.log((p5++).value);
	}
`,"hello".split(''), "while (*ptr) ++ptr");

addTest(`
	let c = "hello"
	let p5 = Pointer.refrence(c[0]);
	console.log(p5[3]);
`,["l"], "p[x]");

addTest(`
	let c = [1,2,3,4,5];
	let p5 = Pointer.refrence(c[0]);
	p5[3] = 10;
	console.log(c);
`,["1,2,3,10,5"], "p[x] = 7");

describe('Plugin: pointers', function() {
	if ( !esper.plugins['pointers'] ) {
		it('Plugin: pointers [disabled]', function() {});
		return;
	}
	describe("Simple Tests", function() {
		var idx = 0;
		tests.forEach(function(nfo) {
			var code = nfo[0];
			var result = nfo[1].map(x => '' + x).join('\n');
			it(nfo[2] || "Simple Test " + idx++, function(done) {
				if ( typeof(code) != "string" ) code = code.join("\n");
				var engine = new esper.Engine({language: 'javascript'});
				let out = [];
				engine.realm.print = (a) => out.push(a);
				var a = engine.functionFromSourceSync(code);
				a();
				expect(out.join('\n')).to.equal(result);
				done();
			});

		});
	});
});
