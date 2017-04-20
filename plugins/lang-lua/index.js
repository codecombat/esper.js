'use strict';

const lua2js = require('lua2js');

function parser(code, options) {
	options = options || {};
	let opts = {
		forceVar: false,
		decorateLuaObjects: true,
		luaCalls: true,
		luaOperators: true,
		encloseWithFunctions: false
	};

	let ast = lua2js.parse(code, opts);
	let wrap = function wrap(o) {
		o.loc = ast.loc;
		o.range = ast.range;
		return o;
	};
	let final = ast;
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
	if ( !options.inFunctionBody ) {
		final = wrap({
			type: 'FunctionExpression',
			params: [],
			body: final
		});
		final = wrap({
			type: 'CallExpression',
			callee: final,
			arguments: []
		});
		final = wrap({
			type: 'ExpressionStatement',
			expression: final
		});
		final = wrap({
			type: 'Program',
			body: [fixThis, final]
		});
	} else {
		let newBody = [fixThis];
		Array.prototype.push.apply(newBody, final.body)
		final = wrap({
			type: 'Program',
			body: newBody
		});
	}
	return final;
}

const startupCode = require('./startupCode.js');
let startupCodeAST;

let plugin = module.exports = {
	name: 'lang-lua',
	lua2js: lua2js,
	parser: parser,
	init: function(esper) {
		esper.languages.lua = plugin;
		startupCodeAST = esper.languages.javascript.esprima.parse(startupCode);
	},
	startupCode: () => startupCodeAST
};
