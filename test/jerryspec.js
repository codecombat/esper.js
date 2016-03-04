"use strict";

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'ext', 'jerry');
var expect = require('chai').expect;

describe("Jerry Tests", function() {
	if ( !fs.existsSync(dir) ) return;
	var files = fs.readdirSync(dir);
	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		if ( !/.js$/.test(file) ) continue;

		if ( /assdfadsfd/.test(file) ) { } //Whitelist
		else if ( 
			/date|^array\.|array-prototype-(map|pop|push|reduce|shift|slice|splice|tolocal|unshift)|string-prototype-(match|replace|split)|-with-blocks|object-prototype|number-prototype|^object|regression-|json|global|function-construct/.test(file) ||
			/builtin-cons|error|escape-|eval|for-in|labelled|compact-profile|regexp-simple/.test(file) 
		) {
			xit(file, function() {});
			continue;
		}

		(function(file) {
			
			var Engine = require('../src/index.js');
			var src = fs.readFileSync(path.join(dir,file), 'utf8');

			it(file, function() {
				//console.log("\n");
				//console.log(file);
				var engine = new Engine({strict: false});
				engine.eval(src);
				expect(true).to.be.true;
			});
		})(files[i]);
	}

});