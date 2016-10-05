'use strict';

const lua2js = require('lua2js');
const esprima = require('esprima');

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
	let final = wrap({
		type: 'FunctionExpression',
		params: [],
		body: ast
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
		body: [final]
	});
	return final;
}

const startupCode = require('./startupCode.js');
const startupCodeAST = esprima.parse(startupCode);

let plugin = module.exports = {
	name: 'lua',
	lua2js: lua2js,
	parser: parser,
	init: function(esper) {
		esper.languages.lua = plugin;
	},
	startupCode: () => startupCodeAST
};
