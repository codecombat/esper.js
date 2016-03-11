"use strict";

var path = require('path');
var dir = path.join(__dirname, 'ext', 'sandboxr');

global.expect = require('chai').expect;

describe("Sandboxr Tests", function() {

	var fs = require('fs');
	var files;
	if ( fs.readdirSync ) files = fs.readdirSync(dir);
	else files = ["api.tests.js","assignment-expressions.tests.js","ast-parser.js","async.tests.js","binary-expression.tests.js","eval.tests.js",
	"function.tests.js","if.tests.js","import.tests.js","json.tests.js","label-statement.tests.js","logical-expressions.tests.js",
	"loop-expressions.tests.js","proto.tests.js","scope.tests.js","sequence-expression.tests.js","switch.tests.js","test-runner.js",
	"try-statement.tests.js","type-array.tests.js","type-number.tests.js","type-object.tests.js","type-regex.tests.js","type-string.tests.js",
	"unary-expressions.tests.js","update-expression.tests.js","var.tests.js","with-statement.tests.js"];

	for ( var i = 0; i < files.length; ++i ) {
		var file = files[i];
		//if ( !/assignment|binary|logical|function|sequence|update-|unary-/.test(file) ) continue;
		if ( /api|async|ast|import|test-runner|with-/.test(file) ) continue;
		(function(file) {

			describe(file, function() {
				require('./ext/sandboxr/' + file);
			});
		})(files[i]);
	}

});
