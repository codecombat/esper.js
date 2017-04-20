'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');
var Engine = esper.Engine;

if ( !esper.pluginList['lang-lua'] ) {
	return it('Plugin: lang-lua [disabled]', function() {});
}

const tests = [
	["  return 10"  ,    10],
	["return 10"     ,   10],
	["return 20     ",   20],
	[
		['if true then',
		 ' return "yum"',
		 'else ',
		 ' return "ouch"',
		 'end'], "yum"
	],
	['if 0 then return "yum" else return "ouch" end', "ouch" ],
	['add = function(a,b) return a+b end return add(2,5)', 7],
	['function add(a,b) return a+b end return add(2,5)', 7],
	[
		[
		'function fastfib(n)',
		'fibs = {1,1}',
		'local i = 2',
		'while i < n do',
		'   i = i + 1',
		'   fibs[i] = fibs[i-1] + fibs[i-2]',
		'end',
		'return fibs[n]',
		'end',
		'return fastfib(10)'
		], 55
	],
	[
		[
		'local total = 0',
		'for i=1,20,3 do total = total + i end',
		'return total'
		], 70
	],
	[
		[
			'function add(a,b) return a*a+b*b,0 end',
			'local o = add(3,4)',
			'return ("a" .. o .. add(5,12))'
		], 'a25169'
	]
];

describe('Plugin: lang-lua', function() {
	describe("Simple Tests", function() {
		var idx = 0;
		tests.forEach(function(nfo) {
			var code = nfo[0];
			var result = nfo[1]
			it("Simple Test " + idx++, function(done) {
				if ( typeof(code) != "string" ) code = code.join("\n");
				var engine = new esper.Engine({language: 'lua'});
				var a = engine.functionFromSourceSync(code);
				expect(a()).to.equal(result);
				done();
			});

		});
	});
});
