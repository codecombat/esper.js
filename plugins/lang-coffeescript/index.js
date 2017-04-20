'use strict';

const Preprocessor = require('coffee-script-redux/lib/preprocessor').Preprocessor;
const Parser = require('coffee-script-redux/lib/parser');
const Compiler = require('coffee-script-redux/lib/compiler').Compiler;
const CS = require('coffee-script-redux/lib/nodes');

function formatParserError(preprocessed, e) {
	let result = new SyntaxError(`Syntax error on line ${e.line} column ${e.column}: unexpected '${e.found}'`);
	return result;
}

function cparse(coffee, opts) {
	var parsed, preprocessed;
	try {
		preprocessed = Preprocessor.process(coffee, { literate: false });
		parsed = Parser.parse(preprocessed, {
			raw: true,
			inputSource: coffee,
			startRule: opts.inFunctionBody ? 'block' : 'program'
		});
		return parsed;
	} catch (e) {
		if (!(e instanceof Parser.SyntaxError))
			throw e;
		throw formatParserError(preprocessed, e);
	}
}

function ccompile(csAst, options) {
	return Compiler.compile(csAst, options).toBasicObject();
}


function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true};
	let csast = cparse(code, options);
	if ( options.inFunctionBody ) {
		//Gota fake being inside a function to trigger return rewriting.
		csast = new CS.Program(new CS.Function([], csast));
	}
	//console.log(JSON.stringify(csast,null, ' '));
	let ast = ccompile(csast, {bare: true});
	//console.log(JSON.stringify(ast,null, ' '))
	if ( options.inFunctionBody ) {
		ast = ast.body[0].expression.body;
	}
	return ast;
}


let plugin = module.exports = {
	name: 'lang-coffeescript',
	parser: parser,
	init: function(esper) {
		esper.languages.coffeescript = plugin;
	}
};
