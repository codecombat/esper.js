"use strict";

var fs = require('fs');
var Engine = require('../src/index.js');
var argv = process.argv;
var engine = new Engine();

if (!argv[2]) {
	console.log("Usage: " + argv[0] + " " + argv[1] + " <file>" );
	process.exit(1);
}

var toEval = [];

for ( var i = 2; i < argv.length; ++i ) {
	toEval.push(argv[i]);
}

function next() {
	if ( toEval.length === 0 ) return process.exit();
	var fn = toEval.shift();
	var code = fs.readFileSync(fn);
	return engine.eval(code).then(function(val) {
		return next();
	}).catch(function (e) {
		console.log(e.stack);
	});
}

next();




