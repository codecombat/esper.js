'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var esper_plugins = require('./plugin-list.js');
var BabiliPlugin = require('babili-webpack-plugin');

module.exports = function configure(opts) {
	opts = opts || {};
	var target;
	var libraryTarget = 'umd';
	var plugins = ['babel-plugin-transform-es2015-modules-commonjs'];
	var polyfill = [];
	var profile = opts.profile || 'web';
	switch ( opts.profile ) {
		case 'node-old':
		case 'node':
			target = 'node';
			libraryTarget = 'commonjs';
			break;
		case 'lean':
		case 'nashorn':
			target = 'web';
			polyfill.push('./contrib/core-lean.js');
			polyfill.push('babel-regenerator-runtime');
			break;
		case 'web-ext':
		case 'modern':
			target = 'web';
			break;
		default:
			target = 'web';
	}

	var useBabel = profile != 'node' && profile != 'modern';
	if ( useBabel ) {
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

	if ( profile === 'web' || profile === 'node-old') {
		plugins.push('babel-plugin-transform-runtime');
	} else {
		//plugins.push(['babel-plugin-transform-runtime', {polyfill: false}]);
	}


	var version = '???';

	try {
		version = require('child_process').execSync('git describe --always --dirty', { cwd: __dirname });
	} catch ( e ) {

	}

	var banner = new webpack.BannerPlugin({banner: [
		'esper.js',
		'',
		'Compiled: ' + new Date().toString(),
		'Target  : ' + target + ' (' + libraryTarget + ')',
		'Profile : ' + profile,
		'Version : ' + version,
		'',
		fs.readFileSync(path.join(__dirname, 'LICENSE.txt'))
	].join("\n"), entryOnly: true});

	//Bundle everything when we make our tests.
	
	for ( var pl in esper_plugins ) {
		if ( opts.plugin && opts.plugin[pl] ) {
			console.log(pl,  opts.plugin[pl]);
			esper_plugins[pl] = opts.plugin[pl];
		} else if ( opts.plugin && opts.plugin.all ) {
			esper_plugins[pl] = opts.plugin.all;
		}
		if ( esper_plugins[pl] === 'addon' ) {
			if ( opts.test ) {
				esper_plugins[pl] = 'bundle';
			}
		} else if ( esper_plugins[pl] === 'off' ) {
			delete esper_plugins[pl];
		}
	}

	console.log('PLUGINS', esper_plugins);

	var pluginFilter = new webpack.ContextReplacementPlugin(/plugins/, function(req) {
		
		if ( req.request == '../plugins' ) {
			var pll = Object.keys(esper_plugins).filter(function(x) {
				return esper_plugins[x] == 'bundle';
			}).join('|');
			console.log(req.request, pll);
			if ( pll.length === 0 ) {
				req.regExp = new RegExp('$a');
			} else {
				req.regExp = new RegExp('(' + pll + ')\/index.js$','i');
			}
		}
	});

	var cfg;
	var name = opts.name || 'esper';
	var file = name;
	if ( opts.test ) file += "-test";


	var entry = {};
	for ( var pl in esper_plugins ) {
		if ( esper_plugins[pl] === "addon" ) {
			entry[file + "-plugin-" + pl ] = './contrib/webpack-loaders/stub-entry-loader.js!?' + pl;
		}
	}
	entry[file] = polyfill.concat(['./src/index.js']);

	var fn = '[name]';
	if ( profile != "web" ) fn += '-' + profile;
	if ( opts.min ) fn += ".min";
	fn += ".js";

	cfg = {
		mode: 'none',
		entry: entry,
		output: {
			library: '[name]',
			libraryTarget: libraryTarget,
			globalObject: "typeof self !== 'undefined' ? self : this",
			path: path.join(__dirname, 'dist'),
			filename: fn
		},
		externals: {
			'esper-refrence': 'esper'
		},
		module: {
			rules: [
				{
					test: /js$/,
					include: [path.join(__dirname, 'src'),path.join(__dirname, 'test'),path.join(__dirname, 'plugins')],
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							plugins: plugins
						}
					}
				},
				{
					test: /ASTemplates.js$/,
					loader: path.join(__dirname, 'contrib', 'webpack-loaders', 'astemplate-loader.js')
				},
				{
					test: /plugin-list.js/,
					loader: path.join(__dirname, 'contrib', 'webpack-loaders', 'export-object-loader.js'),
					options: {object: esper_plugins}
				}
			]
		},
		plugins: [
			banner,
			pluginFilter
		],
		resolve: {alias: {}},
		target: target,
		node: {fs: 'empty'}
	};

	if ( opts.min ) {
		//new webpack.optimize.UglifyJsPlugin({minimize: true, beautify: 'beautify=false,semicolons=false,indent-level:1'})
		if ( useBabel ) cfg.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
		else {
			cfg.plugins.push(new BabiliPlugin({}, {}));
		}
	}

	if ( profile == 'nashorn' ) {
		cfg.resolve.alias['esprima'] = path.join(__dirname, 'contrib', 'nash-esprima.js');
	}

	//if ( profile == 'modern' ) {
		cfg.resolve.alias['regenerator'] = path.join(__dirname, 'contrib', 'empty-module.js');
	//}

	if ( profile == 'node' || profile == 'node-old' || profile == 'web-ext' ) {
		cfg.externals.esprima = 'esprima';
		cfg.externals.escodegen = 'escodegen';

	}

	if ( opts.test ) {
		delete cfg.output.library;
		delete cfg.output.libraryTarget;

		cfg.module.rules.push({
			test: /\.js$/,
			include: [path.join(__dirname, 'contrib', 'test-suites', 'sandboxr')],
			loader: 'babel-loader',
			query: {plugins: plugins}
		});
		cfg.module.rules.push({
			test: /\.js$/,
			include: [path.join(__dirname, 'contrib', 'test-suites', 'jerry')],
			loader: 'raw-loader'
		});
		cfg.module.rules.push({
			test: /auto.list$/,
			include: [path.join(__dirname, 'contrib', 'test-suites')],
			loader: path.join(__dirname, 'contrib', 'webpack-loaders', 'list-loader.js')
		});
		cfg.entry[file] = './contrib/webpack-mocha-entry.js';
	}

	return cfg;

};
