'use strict';

var fs = require('fs');
var path = require('path');
var root = path.join(__dirname, 'ext', 'test262', 'test', 'language', 'expressions');

describe('ES262', function() {
	//testDirectory(root);
});


function testDirectory(dir) {
	var files = fs.readdirSync(dir);
	var harness = fs.readFileSync(path.join(__dirname, 'ext', 'test262harness.js'), 'utf8');
	files.forEach(function(file) {

		var fpath = path.join(dir, file);
		var stats = fs.lstatSync(fpath);
		//console.log(path, stats);
		if ( stats.isDirectory() ) {
			describe(file, function() {
				testDirectory(fpath);
			});
		} else {
			var src = fs.readFileSync(fpath, 'utf8');
			it(file, function() {
				var Engine = require('../src/index.js');
				var engine = new Engine({strict: false});
				try {
					engine.eval(harness);
					engine.eval(src);
					expect(true).toBe(true);
				} catch ( e ) {
					expect(e).toBe(undefined);
				}
			});
		}
	});
}
