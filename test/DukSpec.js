var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'ext', 'duktape');
var expect = require('chai').expect;

describe('Duk Tests', function() {
	if ( !fs.existsSync(dir) ) return;
	var files = fs.readdirSync(dir);

	function test(file) {

		var Engine = require('../src/index.js');
		var src = fs.readFileSync(path.join(dir, file), 'utf8');
		var expected = '';
		var options = {};

		src.replace(/\/\*===\s*\n([^]*?\n?)===\*\//mig, function(m, g) {
			expected += g;
			return '';
		});

		src.replace(/\/\*---\s*\n([^]*?\n)---\*\//mig, function(m, g) {
			Object.assign(options, JSON.parse(g));
			return '';
		});

		if ( options.slow ) {
			xit('duk-' + file, () => {});
			return;
		}

		it('duk-' + file, function() {
			var out = '';
			function print() {
				var list = new Array(arguments.length);
				for ( var i = 0; i < list.length; ++i ) {
					var val = arguments[i];
					if ( val === undefined ) list[i] = 'undefined';
					else list[i] = val.toString();
				}
				out += list.join(' ') + '\n';
			}
			var engine = new Engine({
				executionLimit: 1e6
			});
			engine.realm.print = print;
			if ( options.intended_uncaught ) {
				try {
					engine.evalSync(src);
				} catch ( e ) {

				}
			} else {
				engine.evalSync(src);
			}
			expect(out).to.equal(expected);
		});
	}

	for ( var i = 0; i < files.length; ++i ) {
		if ( !/misc-hello|^test-spec-program|^test-stmt|expr/.test(files[i]) ) continue;
		if ( /expr-add-coercion-order|newtarget-eval-code|expr-add-coercion-order|instanceof-hasinstance|expr-newtarget|stmt-with|expr-delete/.test(files[i]) ) continue;
		if ( /refcount|lhs/.test(files[i]) ) continue;
		test(files[i]);
	}
});
