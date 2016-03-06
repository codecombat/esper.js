"use strict";

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'ext', 'sandboxr');

global.expect = require('chai').expect;

describe("Sandboxr Tests", function() {
	var files = fs.readdirSync(dir);
	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		//if ( !/assignment|binary|logical|function|sequence|update-|unary-/.test(file) ) continue;
		if ( /api|async|ast|import|test-runner|with-/.test(file) ) continue;
		(function(file) {

			describe(file, function() {
				require(path.join(dir, file));
			});
		})(files[i]);
	}

});