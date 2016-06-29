var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = function cfg(profile, opts) {
	opts = opts || {};
	var target;
	var libraryTarget = 'umd';
	var plugins = ['babel-plugin-transform-es2015-modules-commonjs'];
	var polyfill = [];

	switch ( profile ) {
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
	
	if ( profile != 'node' && profile != 'modern' ) {
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

	var banner = new webpack.BannerPlugin([
		'esper.js',
		'',
		'Compiled: ' + new Date().toString(),
		'Target  : ' + target + ' (' + libraryTarget + ')',
		'Profile : ' + profile,
		'Version : ' + version,
		'',
		fs.readFileSync(path.join(__dirname, 'LICENSE.txt'))
	].join("\n"), {entryOnly: true});

	var cfg;
	var parts = [opts.test ? 'esper-test' : 'esper'];
	if ( profile != 'web' ) parts.push(profile);
	if ( opts.min ) parts.push('min');
	parts.push('js');
	var file = opts.name ? opts.name : parts.join('.');


	var entry = polyfill.concat(['./src/index.js']);
	cfg = {
		entry: entry,
		output: {
			library: 'esper',
			libraryTarget: libraryTarget,
			path: path.join(__dirname, 'dist'),
			filename: file
		},
		module: {
			loaders: [
				{
					test: /json$/,
					loader: 'json-loader'
				},
				{
					test: /js$/,
					include: [path.join(__dirname, 'src'),path.join(__dirname, 'test')],
					loader: 'babel-loader',
					query: {
						plugins: plugins
					}
				}
			]
		},
		plugins: [
			banner
		],
		resolve: { alias: {} },
		target: target
	};

	if ( opts.min ) {
		//new webpack.optimize.UglifyJsPlugin({minimize: true, beautify: 'beautify=false,semicolons=false,indent-level:1'})
		cfg.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
	}

	if ( profile == 'nashorn' ) {
		cfg.resolve.alias['esprima'] = path.join(__dirname, 'contrib', 'nash-esprima.js');
	}

	if ( profile == 'node' || profile == 'node-old' || profile == 'web-ext' ) {
		cfg.externals = {
			'esprima': 'esprima',
			'escodegen': 'escodegen'
		};
	}

	if ( opts.test ) {
		delete cfg.output.library;
		delete cfg.output.libraryTarget;

		cfg.module.loaders.push({
			test: /\.js$/,
			include: [path.join(__dirname, 'contrib', 'test-suites', 'sandboxr')],
			loader: 'babel-loader',
			query: { plugins: plugins },
		});
		cfg.module.loaders.push({
			test: /\.js$/,
			include: [path.join(__dirname, 'contrib', 'test-suites', 'jerry')],
			loader: 'raw-loader'
		});
		cfg.module.loaders.push({
			test: /auto.list$/,
			include: [path.join(__dirname, 'contrib', 'test-suites')],
			loader: path.join(__dirname, 'contrib', 'list-loader.js')
		});	
		cfg.entry[0] = './contrib/webpack-mocha-entry.js';
		cfg.node = {fs: 'empty'};

	}

	return cfg;

};
