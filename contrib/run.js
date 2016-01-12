"use strict";

var fs = require('fs');
var Engine = require('../src/index.js');
var argv = process.argv;
var engine = new Engine();

if (!argv[2]) {
	console.log("Usage: " + argv[0] + " " + argv[1] + " <file>" );
	process.exit(1);
}

var string = fs.readFileSync(argv[2]);
engine.eval(string).then(function(result) {
	process.exit();
});



