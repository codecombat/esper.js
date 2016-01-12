var fs = require('fs');
var path = require('path')
var dir = '../duktape/tests/ecmascript/';


describe("Duk Tests", function() {
	var files = fs.readdirSync(dir);
	for ( var i = 0; i < files.length; ++i ) {
		continue;
		//if ( !/misc-hello|^test-spec-program|-stmt-/.test(file) ) return;
		(function(file) {
			var Engine = require('../src/index.js');
			var src = fs.readFileSync(path.join(dir,file), 'utf8');
			var expected = "";

			src.replace(/\/\*===\n([^_]*?\n)===\*\//mig, function(m, g) {
				expected += g;
				return '';
			});

			it(file, function() {
				var out = '';
				function print() {			
					out += Array.prototype.join.call(arguments, ' ') + "\n";
				}	
				var engine = new Engine();
				engine.print = print;
				engine.eval(src);
				fs.writeFileSync("/tmp/E", expected);
				fs.writeFileSync("/tmp/A", engine.out);
				expect(expected).toBe(out);
			});
		})(files[i]);
	}
});