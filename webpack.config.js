var path = require('path');
var webpack = require('webpack');

var target;
var profile = process.env.ESPER_PROFILE || 'web';
var libraryTarget = 'umd';
var args = process.argv.slice(0);
var min = false;
console.log(args);

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


var plugins = ['babel-plugin-transform-es2015-modules-commonjs'];
var polyfill = [];

switch ( profile ) {
	case 'node':
		target = 'node';
		libraryTarget = 'umd';
		break;
	case 'lean':
	case 'nashorn':
		target = 'web';
		polyfill.push('./contrib/core-lean.js');
		polyfill.push('babel-regenerator-runtime');
		break;
	default:
		target = 'web';
		polyfill.push('babel-polyfill');
}

if ( profile != 'node' ) {
	plugins = plugins.concat([
		"babel-plugin-transform-es2015-template-literals",
		"babel-plugin-transform-es2015-literals",
		"babel-plugin-transform-es2015-function-name",
		"babel-plugin-transform-es2015-arrow-functions",
		"babel-plugin-transform-es2015-block-scoped-functions",
		"babel-plugin-transform-es2015-classes",
		"babel-plugin-transform-es2015-object-super",
		"babel-plugin-transform-es2015-shorthand-properties",
		"babel-plugin-transform-es2015-computed-properties",
		["babel-plugin-transform-es2015-for-of", { loose: true }],
		"babel-plugin-transform-es2015-sticky-regex",
		"babel-plugin-transform-es2015-unicode-regex",
		"babel-plugin-check-es2015-constants",
		"babel-plugin-transform-es2015-spread",
		"babel-plugin-transform-es2015-parameters",
		"babel-plugin-transform-es2015-destructuring",
		"babel-plugin-transform-es2015-block-scoping",
		"babel-plugin-transform-es2015-typeof-symbol",
		["babel-plugin-transform-regenerator", { async: false, asyncGenerators: false }]
	]);
}

var cfg;
var parts = ['esper'];
if ( profile != 'web' ) parts.push(profile);
if ( min ) parts.push('min');
parts.push('js');
var file = process.env.ESPER_PROFILE ? 'esper.js' : parts.join('.');

var entry = polyfill.concat(['./src/index.js']);
console.log(entry);
module.exports = cfg = {
	entry: entry,
	output: {
		library: 'esper',
		libraryTarget: libraryTarget,
		path: __dirname,
		filename: file
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					plugins: plugins
				}
			}
		]
	},
	plugins: [
		
	],
	resolve: { alias: {} },
	target: target
};

if ( min ) {
	//new webpack.optimize.UglifyJsPlugin({minimize: true, beautify: 'beautify=false,semicolons=false,indent-level:1'})
	cfg.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

if ( profile == 'nashorn' ) {
	cfg.resolve.alias['esprima'] = path.join(__dirname, 'contrib', 'nash-esprima.js');
}
