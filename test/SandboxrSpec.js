'use strict';

var path = require('path');
var dir = path.join(__dirname, '..', 'contrib', 'test-suites', 'sandboxr');

global.expect = require('chai').expect;

describe('Sandboxr Tests', function() {

	var fs = require('fs');
	var files;
	if ( fs.readdirSync ) files = fs.readdirSync(dir);
	else files = require('../contrib/test-suites/sandboxr/auto.list');

	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		//if ( !/assignment|binary|logical|function|sequence|update-|unary-/.test(file) ) continue;
		if ( /api|async|ast|import|test-runner|with-/.test(file) ) continue;
		if ( !/js$/.test(file) ) continue;
		(function(file) {
			describe(file, function() {
				require('../contrib/test-suites/sandboxr/' + file.replace(/\.js$/,'') + '.js');
			});
		})(files[i]);
	}

});
