'use strict';

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, '..', 'contrib', 'test-suites', 'jerry');
var expect = require('chai').expect;

describe('Jerry Tests', function() {
	if ( fs.existsSync && !fs.existsSync(dir) ) return;
	var files;
	if ( fs.readdirSync ) files = fs.readdirSync(dir);
	else files = require('../contrib/test-suites/jerry/auto.list');

	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		if ( !/.js$/.test(file) ) continue;

		if ( /assdfadsfd/.test(file) ) { } //Whitelist
		else if (
			/date|^array\.|array-prototype-(push|slice|splice|tolocal|unshift)|string-prototype-(match|replace|split)|-with-blocks|object-prototype-(ispro|propertyis|tolocal)|number-prototype|json|global-|function-construct/.test(file) ||
			/builtin-cons|object_|object-(get-own-property-descriptor|literal-2|define|getprototypeof)|eval|compact-profile|regexp-simple|label|regression-test-issue-(122|164|212|245|285|316|566|642|798|736)/.test(file)
		) {
			xit(file, function() {});
			continue;
		}

		(function(file) {

			var Engine = require('../src/index.js');
			var src;
			if ( fs.readFileSync ) src = fs.readFileSync(path.join(dir,file), 'utf8');
			else src = require('../contrib/test-suites/jerry/' + file.replace(/\.js$/,'') + '.js');

			it(file, function() {
				//console.log("\n");
				//console.log(file);
				var engine = new Engine({strict: false, executionLimit: 100000});
				engine.evalSync(src);
				expect(true).to.be.true;
			});
		})(files[i]);
	}

});
