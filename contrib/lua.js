"use strict";

var fs = require('fs');
var path = require('path');
var Engine = require('../src/index.js');
var argv = process.argv;
var engine = new Engine();
var lua2js = require('lua2js');
var ep = require('escodegen');
var opts = {forceVar: true, decorateLuaObjects: true, luaCalls: true, luaOperators: true, encloseWithFunctions: false };

if (!argv[2]) {
	console.log("Usage: " + argv[0] + " " + argv[1] + " <file>" );
	process.exit(1);
}

var toEval = [];

var stdlib = fs.readFileSync(path.join(__dirname, '..', 'node_modules', 'lua2js', 'stdlib.js'), 'utf8');

engine.addGlobalFx('r', function() {
	console.log.apply(console, arguments);
});


for ( var i = 2; i < argv.length; ++i ) {
	toEval.push(argv[i]);
}

function next() {
	if ( toEval.length === 0 ) return process.exit();
	var fn = toEval.shift();
	console.log(fn);
	var code = fs.readFileSync(fn, 'utf8');
	try {
		var ast = lua2js.parse(code, opts);
		var jsc = ep.generate(ast);
		console.log("EP", jsc);
		return engine.eval(jsc).then(function(val) {
			console.log("RESULT", val);
			return next();
		}).catch(function (e) {
			console.log(e.stack);
		});
	} catch ( e ) {
		console.log(e.stack);
		return;
	}
}

engine.eval(stdlib).then(function(val) {
	console.log(val);
	console.log("-----------------------");
	next();
});




