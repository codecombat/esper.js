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
				code = code.split(/\r\n|[\n\r\u2028\u2029]/g).join("\n");
				code = 'def foo():\n' + code + "\n\nfoo()";
				var ast = utils.parse(code);
				var engine = new esper.Engine({language: 'python'});
				engine.loadAST(ast);
				return engine.runSync().toNative();
			}
			catch (e) {
				console.log(code + "\n" + e.toString());
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
