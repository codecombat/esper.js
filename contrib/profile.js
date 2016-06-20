'use strict';

const fs = require('fs');
const program = require('commander');
const esper = require('..');
var profiler = require('v8-profiler');

program
	.version(esper.version)
	.usage('[options] [script...]')
	.option('-o, --outfile <file>', 'file to write profiling data to.')
	.parse(process.argv);


let toEval = program.args.slice(0);
if ( toEval.length !== 1 ) {
	console.log("No script given to profile.");
}
let name = toEval[0];

let source = fs.readFileSync(name, 'utf8');

let engine = new esper.Engine({});
engine.load(source);

profiler.startProfiling('1', true);
engine.runSync();
var profile = profiler.stopProfiling();

profile.export()
	.pipe(fs.createWriteStream('profile.cpuprofile'))
	.on('finish', function() {
		profile.delete();
		process.exit();
	});
