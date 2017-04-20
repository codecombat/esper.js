'use strict';

const skulpty = require('skulpty');

function parser(code, options) {
	options = options || {};
	let opts = {locations: true, ranges: true};
	let ast = skulpty.parse(code, opts);
	let fixThis = {
		'type': 'VariableDeclaration',
		'declarations': [
			{
				'type': 'VariableDeclarator',
				'id': {
					'type': 'Identifier',
					'name': 'self'
				},
				'init': {
					'type': 'ThisExpression'
				}
			}
		],
		'kind': 'var',
		'userCode': false
	};
	ast.body.unshift(fixThis);
	return ast;
}

const startupCode = require('./startupCode.js');
let startupCodeAST;

let plugin = module.exports = {
	name: 'lang-python',
	skulpty: skulpty,
	parser: parser,
	init: function(esper) {
		esper.languages.python = plugin;
		startupCodeAST = esper.languages.javascript.esprima.parse(startupCode);
	},
	startupCode: () => startupCodeAST
};
