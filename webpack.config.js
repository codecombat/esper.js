var path = require('path');
var target = 'web';
var plugins = ['babel-plugin-transform-es2015-modules-commonjs'];
if ( target != 'node' ) {
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
		"babel-plugin-transform-es2015-for-of",
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

console.log(plugins);

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'esper.js'
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
	target: target
};
