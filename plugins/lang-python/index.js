'use strict';

const skulpty = require('skulpty');
const esprima = require('esprima');

function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true};
	let ast = skulpty.parse(code, opts);
	return ast;
}

const startupCode = require('./startupCode.js');
const startupCodeAST = esprima.parse(startupCode);

let plugin = module.exports = {
	name: 'python',
	skulpty: skulpty,
	parser: parser,
	init: function(esper) {
		esper.languages.python = plugin;
	},
	startupCode: () => startupCodeAST
};
