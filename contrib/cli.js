#!/usr/bin/env node
'use strict';


const fs = require('fs');
const repl = require('repl');
const program = require('commander');
const esper = require('..');
const Engine = esper.Engine;

function enterRepl() {
	function replEval(cmd, context, fn, cb) {
		engine.eval(cmd).then(function(result) {
			cb(null, result);
		}, function(err) {
			console.log(err.stack);
			cb(null);
		});
	}

	return repl.start({
		prompt: 'js> ',
		eval: replEval

	});
}




program
	.version(esper.version)
	.usage('[options] [script...]')
	.option('-i, --interactive', 'enter REPL')
	.option('-s, --strict', 'force strict mode')
	.option('-d, --debug', 'turn on performance debugging')
	.parse(process.argv);


let engine = new Engine({
	strict: !!program.strict,
	debug: !!program.debug,
	addInternalStack: !!program.debug

});


let toEval = program.args.slice(0);
if ( toEval.length < 1 ) program.interactive = true;

function next() {
	if ( toEval.length === 0 ) {
		if ( program.interactive ) return enterRepl();
		else return process.exit();
	}
	var fn = toEval.shift();
	console.log(fn);
	var code = fs.readFileSync(fn, 'utf8');
	return engine.eval(code).then(function(val) {
		return next();
	}).catch(function(e) {
		console.log(e.stack);
	});
}

next();



/*
Usage: node [options] [ -e script | script.js ] [arguments]
       node debug script.js [arguments]

Options:
  -v, --version         print Node.js version
  -e, --eval script     evaluate script
  -p, --print           evaluate script and print result
  -c, --check           syntax check script without executing
  -i, --interactive     always enter the REPL even if stdin
                        does not appear to be a terminal
  -r, --require         module to preload (option can be repeated)
  --no-deprecation      silence deprecation warnings
  --throw-deprecation   throw an exception anytime a deprecated function is used
  --trace-deprecation   show stack traces on deprecations
  --trace-sync-io       show stack trace when use of sync IO
                        is detected after the first tick
  --track-heap-objects  track heap object allocations for heap snapshots
  --v8-options          print v8 command line options
  --tls-cipher-list=val use an alternative default TLS cipher list
  --icu-data-dir=dir    set ICU data load path to dir
                        (overrides NODE_ICU_DATA)

Environment variables:
NODE_PATH               ':'-separated list of directories
                        prefixed to the module search path.
NODE_DISABLE_COLORS     set to 1 to disable colors in the REPL
NODE_ICU_DATA           data path for ICU (Intl object) data
NODE_REPL_HISTORY       path to the persistent REPL history file

Documentation can be found at https://nodejs.org/
*/

