'use strict';

const jaba = require('jaba');
const babylon = require('babylon');
const utils = require('jaba/utils');


const esper = require('../..');
const ASTPreprocessor = esper.ASTPreprocessor;

let cssast;

function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true, dialect: 'java'};
	let cast = jaba(code, options);
	let iast = ASTPreprocessor.process(cast);
	let clazz = iast.find("ClassExpression:matches(* method[static=true])");
	let clazzName = clazz.length == 1 ? clazz[0].id.name : 'AI';
	let extra = babylon.parse(clazzName + ".main(null);", {plugins: ['estree', 'flow']});

	cast.body = cast.body.concat(extra.program.body);
	return cast;
}


let plugin = module.exports = {
	name: 'lang-java',
	parser: parser,
	init: function(esper) {
		esper.plugin('babylon');
		cssast = esper.plugin('ast-css');
		esper.languages.java = plugin;
	},
	setupEngine: function(esper, engine) {
		utils.javaifyEngine(engine);
	}
};
