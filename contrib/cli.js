#!/usr/bin/env node
'use strict';


const fs = require('fs');
const repl = require('repl');
const program = require('commander');
const esper = require('..');
const Engine = esper.Engine;

function enterRepl() {
	function replEval(cmd, context, fn, cb) {
		engine.evalDetatched(cmd).then(function(result) {
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
	.option('-v, --version', 'print esper version')
	.option('-i, --interactive', 'enter REPL')
	.option('-s, --strict', 'force strict mode')
	.option('-d, --debug', 'turn on performance debugging')
	.option('-c, --compile <mode>', 'set compileing mode')
	.option('-e, --eval <script>', 'evaluate script')
	.option('-p, --print <script>', 'evaluate script and print result')	
	.option('-l, --language <language>', `set langauge (${Object.keys(esper.languages).join(', ')})`)
	.parse(process.argv);


if ( program.language ) esper.plugin('lang-' + program.language);

if ( program.v ) {
	console.log("v" + esper.version);
	process.exit();
}

let engine = new Engine({
	strict: !!program.strict,
	debug: !!program.debug,
	runtime: true,
	addInternalStack: !!program.debug,
	compile: program.compile || 'pre',
	language: program.language || 'javascript',
	esposeESHostGlobal: true,
	esRealms: true,
});


let toEval = program.args.slice(0).map((f) => ({type: 'file', value: f}));
if ( program.eval ) toEval.push({type: 'str', value: program.eval + '\n'});
if ( program.print ) toEval.push({type: 'str', value: program.print + '\n', print: true});

if ( toEval.length < 1 ) program.interactive = true;

function next() {
	if ( toEval.length === 0 ) {
		if ( program.interactive ) return enterRepl();
		else return process.exit();
	}
	var fn = toEval.shift();
	var code;
	if ( fn.type === 'file' ) {
		code = fs.readFileSync(fn.value, 'utf8');
	} else {
		code = fn.value;
	}
	return engine.evalDetatched(code).then(function(val) {
		if ( fn.print && val ) console.log(val.debugString);
		return next();
	}).catch(function(e) {
		if ( e.stack ) {
			process.stderr.write(e.stack + "\n");
		} else {
			process.stderr.write(`${e.name}: ${e.message}\n`);
		}
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

