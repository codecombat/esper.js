'use strict';

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'test-suites', 'js-corpus');
var vm = require('vm');
var files = fs.readdirSync(dir);
var out = {};
files.forEach(function(file, idx) {
	if ( /\.js$/.test(file) === false ) return;
	var source = fs.readFileSync(path.join(dir, file), 'utf8');
	var lines = [];
	//console.log(file);
	function stub() {
		let args = Array.prototype.slice.call(arguments, 0);
		let str = Array.prototype.join.call(args.map((x) => String(x)), '\t');
		lines.push(str);
	}
	vm.runInNewContext(source, {
		print: stub,
		console: {
			log: stub
		}
	}, "vm");

	out[file] = {
		source: source,
		stdout: lines
	};
});


fs.writeFileSync(path.join(dir, 'expected.json'), JSON.stringify(out, null, '\t'), 'utf8');
