'use strict';

const skulpty = require('skulpty');
const PythonRuntime = require('./runtime');
let esper;

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
	init: function(e) {
		esper = e;
		esper.languages.python = plugin;
		startupCodeAST = esper.languages.javascript.parser(startupCode);
	},
	setupRealm: function(realm) {
		realm.PythonString = class PythonString extends esper.StringValue {
			derivePrototype(realm) {
				return realm.pythonStringBaseInstance;
			}
		} 

		class PythonStringBase extends esper.EasyObjectValue {
			static *join$e(thiz, args, s) {
				if ( args.length != 1 ) return esper.CompletionRecord.makeTypeError(s.realm, `join() takes exactly one argument (${args.length} given)`);
				let j = yield * s.realm.ArrayPrototype.get('join', s);

				return yield * j.call(args[0], [thiz], s);
			}
		}

		realm.pythonStringBaseInstance = new PythonStringBase(realm);

		//Copy JS string functions for python that are pretty close.
		let map = {
			uper: 'toUpperCase',
			lower: 'toLowerCase',
			find: 'indexOf',
			replace: 'replace',
			split: 'split',
			trim: 'trim',
			charCodeAt: 'charCodeAt', //Used by Skulpty stdlib
			substring: 'substring', //Used by Skulpty stdlib
			toString: 'toString',
			valueOf: 'valueOf'
		}
		for ( let k in map ) {
			realm.pythonStringBaseInstance.properties[k] = realm.StringPrototype.properties[map[k]];
		}
		realm.loadLangaugeStartupCode(startupCodeAST);
		realm.PythonRuntime = new PythonRuntime.PythonRuntime(realm);
		realm.PythonListProto = new PythonRuntime.PythonListProto(realm);
		realm.PythonList = new PythonRuntime.PythonList(realm);
	},
	startupCode: () => startupCodeAST,
	makeLiteralValue: function(v, realm, n) {
		if ( n.nonUserCode ) return;
		if ( typeof v !== 'string' ) return;
		return new realm.PythonString(v, realm);
	}
};
