'use strict';

const esper = require('../..');

const Preprocessor = require('coffee-script-redux/lib/preprocessor').Preprocessor;
const Parser = require('coffee-script-redux/lib/parser');
const Compiler = require('coffee-script-redux/lib//compiler').Compiler;

function cparse(coffee) {
	var parsed, preprocessed;
	try {
		preprocessed = Preprocessor.process(coffee, { literate: false });
		parsed = Parser.parse(preprocessed, {
			raw: true,
			inputSource: void 0
		});
		return parsed;
	} catch (e) {
		if (!(e instanceof Parser.SyntaxError))
			throw e;
		throw new Error(formatParserError(preprocessed, e));
	}
}

function ccompile(csAst, options) {
	return Compiler.compile(csAst, options).toBasicObject();
}


function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true};
	let csast = cparse(code, {optimize: false, raw: true});
	//console.log(JSON.stringify(csast,null, ' '));
	let ast = ccompile(csast, {bare: true});
	//console.log(JSON.stringify(ast,null, ' '))
	return ast;
}


let plugin = module.exports = {
	name: 'coffeescript',
	parser: parser,
	init: function(esper) {
		esper.languages.coffeescript = plugin;
	}
};
