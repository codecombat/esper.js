'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');
var Engine = esper.Engine;

if ( !esper.plugins['lang-python'] ) {
	return it('Plugin: lang-python [disabled]', function() {});
}

function dispatch(what) {
	describe(what, function() {
		require('skulpty/test/' + what + '_spec.js');
	})
}

describe('Plugin: lang-python', function() {
	describe('Skulpty tests under esper', function() {
		var utils = require('skulpty/test/util.js');
		var orig_run = utils.run;
		function run(code) {
			try {
				code = code.replace(/\s*$/,'')
				var lines = code.split(/\r\n|[\n\r\u2028\u2029]/g);

				lines = lines.map((function(line) { return line.replace(/\t/g,'    '); }));
				let toTrim = lines[0].match(/^[ ]*/)[0].length;
				lines = lines.map(function (line) { return line.substring(toTrim); });
				for (var i in lines) lines[i] = "  " + lines[i];

				code = 'def foo():\n' + lines.join("\n") + "\n\nfoo()";
				var ast = utils.parse(code);
				var engine = new esper.Engine({language: 'python'});
				engine.loadAST(ast);
				var result = engine.runSync();
				return result.toNative();
			}
			catch (e) {
				//console.log(code + "\n" + e.stack);
				return e;
			}
		}
		utils.run = run;
		utils.runInEnv = function() { throw new Error('Unsupported'); };
		dispatch('basics');
		dispatch('class');
		dispatch('dict');
		dispatch('errors');
		dispatch('lists');
		dispatch('operators');
		dispatch('problem');
		dispatch('ranges');
		dispatch('runtime');
		dispatch('scope');
		dispatch('slices');
		dispatch('strings');
		dispatch('tuples');
	});
});
