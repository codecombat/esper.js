"use strict";

var Engine = require('../src/index.js');
var repl = require('repl');

var engine = new Engine();

function replEval(cmd, context, fn, cb) {
	engine.eval(cmd).then(function(result) {
		cb(null, result);
	});
}

var replServer = repl.start({
	prompt: 'js> ',
	eval: replEval

});



