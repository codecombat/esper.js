var fs = require('fs');
var path = require('path')
var dir = path.join(__dirname, 'ext', 'duktape');


describe("Duk Tests", function() {
	var files = fs.readdirSync(dir);

	function test(file) {
		console.log(file);
		var Engine = require('../src/index.js');
		var src = fs.readFileSync(path.join(dir,file), 'utf8');
		var expected = "";

		src.replace(/\/\*===\s*\n([^]*?\n)===\*\//mig, function(m, g) {
			expected += g;
			return '';
		});

		it(file, function() {
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
			engine.eval(src);
			fs.writeFileSync("/tmp/E", expected);
			fs.writeFileSync("/tmp/A", engine.out);
			expect(out).toBe(expected);
		});
	}

	for ( var i = 0; i < files.length; ++i ) {
		if ( !/misc-hello|^test-spec-program/.test(files[i]) ) continue;
		test(files[i]);
	}
});