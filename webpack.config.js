var fx = require('./webpack-cfg');

var profile = process.env.ESPER_PROFILE || 'web';
var args = process.argv.slice(0);

var opts = {min: false, name: process.env.ESPER_PROFILE ? 'esper.js' : undefined};

while ( args.length ) {
	var opt = args.shift();
	if ( !/^--[a-z]+=?/.test(opt) ) continue;
	var parts = opt.split(/=/,2);
	switch ( parts[0] ) {
		case '--profile':
			profile = parts[1];
			break;
		case '--min':
			opts.min = true;
			break;
		case '--test':
			opts.test = true;
			break;
	}
}

module.exports = fx(profile, opts);


