'use strict';

const jaba = require('jaba');
const babylon = require('babylon');
const utils = require('jaba/utils');


const esper = require('../..');
const ASTPreprocessor = esper.ASTPreprocessor;

let cssast;

function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true, dialect: "cpp"};
	let cast = jaba(code, opts);
	let iast = ASTPreprocessor.process(cast);
	let extra = babylon.parse("main(null);", {plugins: ['estree', 'flow']});

	cast.body = cast.body.concat(extra.program.body);
	return cast;
}


let plugin = module.exports = {
	name: 'lang-cpp',
	parser: parser,
	init: function(esper) {
		esper.plugin('babylon');
		cssast = esper.plugin('ast-css');
		esper.languages.cpp = plugin;
	},
	setupEngine: function(esper, engine) {
		utils.javaifyEngine(engine);
	}
};
