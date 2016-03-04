var fx = require('./webpack-cfg');

var profile = process.env.ESPER_PROFILE || 'web';
var args = process.argv.slice(0);
var min = false;

while ( args.length ) {
	var opt = args.shift();
	if ( !/^--[a-z]+=?/.test(opt) ) continue;
	var parts = opt.split(/=/,2);
	switch ( parts[0] ) {
		case '--profile':
			profile = parts[1];
			break;
		case '--min':
			min = true;
	}
}


module.exports = fx(profile, {min: min, name: process.env.ESPER_PROFILE ? 'esper.js' : undefined});



