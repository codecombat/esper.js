'use strict';

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, '..', 'contrib', 'test-suites', 'tiny-js');
var expect = require('chai').expect;

describe('TinyJS Tests', function() {
	var files = fs.readdirSync(dir);
	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		if ( !/^test\d+\.js/.test(file) ) continue;

		if ( /019|022|032|029/.test(file) ) {
			xit(file, function() {});
			continue;
		}

		(function(file) {

			var Engine = require('../src/index.js').Engine;
			var src = fs.readFileSync(path.join(dir,file), 'utf8');

			it(file, function() {
				//console.log("\n");
				//console.log(file);
				var engine = new Engine({strict: false});
				engine.evalSync(src);
				var result = engine.globalScope.get('result');
				expect(result.truthy).to.be.true;
			});
		})(files[i]);
	}

});
