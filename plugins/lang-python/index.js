'use strict';

const skulpty = require('skulpty');
const esper = require('../..');
const esprima = require('esprima');

function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true};
	let ast = skulpty.parse(code, opts);
	return ast;
}

const startupCode = require('./startupCode.js');
const startupCodeAST = esprima.parse(startupCode);

esper.languages.python = module.exports = {
	name: 'python',
	skulpty: skulpty,
	parser: parser,
	startupCode: () => startupCodeAST
};
