var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'ext', 'duktape');
var expect = require('chai').expect;

describe("Duk Tests", function() {
	if ( !fs.existsSync(dir) ) return;
	var files = fs.readdirSync(dir);

	function test(file) {
		
		var Engine = require('../src/index.js');
		var src = fs.readFileSync(path.join(dir,file), 'utf8');
		var expected = "";

		src.replace(/\/\*===\s*\n([^]*?\n)===\*\//mig, function(m, g) {
			expected += g;
			return '';
		});

		console.log(file);
		it('duk-' + file, function() {
			var out = '';
			function print() {
				var list = new Array(arguments.length);
				for ( var i = 0; i < list.length; ++i ) {
					var val = arguments[i];
					if ( val === undefined ) list[i] = "undefined";
					else list[i] = val.toString();
				}
				out += list.join(' ') + "\n";
			}	
			var engine = new Engine();
			engine.env.print = print;
			engine.evalSync(src);
			expect(out).to.equal(expected);
		});
	}

	for ( var i = 0; i < files.length; ++i ) {
		if ( !/misc-hello|^test-spec-program|expr/.test(files[i]) ) continue;
		test(files[i]);
	}
});
