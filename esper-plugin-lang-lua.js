/*!
 * esper.js
 * 
 * Compiled: Wed May 01 2019 00:41:50 GMT-0700 (PDT)
 * Target  : web (umd)
 * Profile : web
 * Version : acf9892-dirty
 * 
 * 
 * The MIT License (MIT)
 * Copyright (c) 2016 Robert Blanckaert
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("esper"));
	else if(typeof define === 'function' && define.amd)
		define(["esper"], factory);
	else if(typeof exports === 'object')
		exports["esper-plugin-lang-lua"] = factory(require("esper"));
	else
		root["esper-plugin-lang-lua"] = factory(root["esper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var esper_ref = __webpack_require__(1);
var plugin = __webpack_require__(110);
esper_ref._registerPlugin(plugin);

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lua2js = __webpack_require__(111);

function parser(code, options) {
	options = options || {};
	var opts = {
		forceVar: false,
		decorateLuaObjects: true,
		luaCalls: true,
		luaOperators: true,
		encloseWithFunctions: false
	};

	var ast = lua2js.parse(code, opts);
	var wrap = function wrap(o) {
		o.loc = ast.loc;
		o.range = ast.range;
		return o;
	};
	var final = ast;
	var fixThis = {
		'type': 'VariableDeclaration',
		'declarations': [{
			'type': 'VariableDeclarator',
			'id': {
				'type': 'Identifier',
				'name': 'self'
			},
			'init': {
				'type': 'ThisExpression'
			}
		}],
		'kind': 'var',
		'userCode': false
	};
	if (!options.inFunctionBody) {
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
		var newBody = [fixThis];
		Array.prototype.push.apply(newBody, final.body);
		final = wrap({
			type: 'Program',
			body: newBody
		});
	}
	return final;
}

var startupCode = __webpack_require__(114);
var startupCodeAST = void 0;

var plugin = module.exports = {
	name: 'lang-lua',
	lua2js: lua2js,
	parser: parser,
	init: function init(esper) {
		esper.languages.lua = plugin;
		startupCodeAST = esper.languages.javascript.parser(startupCode);
	},
	startupCode: function startupCode() {
		return startupCodeAST;
	}
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {


var parser = __webpack_require__(112);
var stdlib = __webpack_require__(113);

this.stdlib = stdlib;
this.parse = parser.parser.parse;




/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

this.parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = peg$FAILED,
        peg$c1 = function() { init(); return true; },
        peg$c2 = void 0,
        peg$c3 = null,
        peg$c4 = "#",
        peg$c5 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c6 = [],
        peg$c7 = /^[^\n]/,
        peg$c8 = { type: "class", value: "[^\\n]", description: "[^\\n]" },
        peg$c9 = "\n",
        peg$c10 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c11 = function(t) { return finalize(t); },
        peg$c12 = /^[ \r\t\n]/,
        peg$c13 = { type: "class", value: "[ \\r\\t\\n]", description: "[ \\r\\t\\n]" },
        peg$c14 = "--[",
        peg$c15 = { type: "literal", value: "--[", description: "\"--[\"" },
        peg$c16 = "]",
        peg$c17 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c18 = "--",
        peg$c19 = { type: "literal", value: "--", description: "\"--\"" },
        peg$c20 = { type: "any", description: "any character" },
        peg$c21 = ";",
        peg$c22 = { type: "literal", value: ";", description: "\";\"" },
        peg$c23 = function(r) {
                return builder.blockStatement([r]) 
            },
        peg$c24 = function(list, ret) {
                list = expandMultiStatements(list);
                return builder.blockStatement(ret === null ? list : list.concat([ret[1]])); 
            },
        peg$c25 = function(a, b) {  
                if ( a === null ) return [];
                if ( b === null ) return a;
                return listHelper(a,b,1);
            },
        peg$c26 = "if",
        peg$c27 = { type: "literal", value: "if", description: "\"if\"" },
        peg$c28 = "then",
        peg$c29 = { type: "literal", value: "then", description: "\"then\"" },
        peg$c30 = "elseif",
        peg$c31 = { type: "literal", value: "elseif", description: "\"elseif\"" },
        peg$c32 = "else",
        peg$c33 = { type: "literal", value: "else", description: "\"else\"" },
        peg$c34 = "do",
        peg$c35 = { type: "literal", value: "do", description: "\"do\"" },
        peg$c36 = "end",
        peg$c37 = { type: "literal", value: "end", description: "\"end\"" },
        peg$c38 = "return",
        peg$c39 = { type: "literal", value: "return", description: "\"return\"" },
        peg$c40 = "local",
        peg$c41 = { type: "literal", value: "local", description: "\"local\"" },
        peg$c42 = "nil",
        peg$c43 = { type: "literal", value: "nil", description: "\"nil\"" },
        peg$c44 = "true",
        peg$c45 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c46 = "false",
        peg$c47 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c48 = "function",
        peg$c49 = { type: "literal", value: "function", description: "\"function\"" },
        peg$c50 = "not",
        peg$c51 = { type: "literal", value: "not", description: "\"not\"" },
        peg$c52 = "break",
        peg$c53 = { type: "literal", value: "break", description: "\"break\"" },
        peg$c54 = "for",
        peg$c55 = { type: "literal", value: "for", description: "\"for\"" },
        peg$c56 = "until",
        peg$c57 = { type: "literal", value: "until", description: "\"until\"" },
        peg$c58 = "while",
        peg$c59 = { type: "literal", value: "while", description: "\"while\"" },
        peg$c60 = /^[a-zA-Z_]/,
        peg$c61 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c62 = /^[a-zA-Z0-9_]/,
        peg$c63 = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
        peg$c64 = function(a) { return a; },
        peg$c65 = /^[0-9]/,
        peg$c66 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c67 = ".",
        peg$c68 = { type: "literal", value: ".", description: "\".\"" },
        peg$c69 = "\\",
        peg$c70 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c71 = /^[abfrntv'"\\]/,
        peg$c72 = { type: "class", value: "[abfrntv'\"\\\\]", description: "[abfrntv'\"\\\\]" },
        peg$c73 = function(c) { return {
                "n": "\n",
                "b": "\b",
                "f": "\f",
                "r": "\r",
                "t": "\t",
                "v": "\v",
                '"': '"',
                "'": "'",
                "\\": "\\"
            }[c] },
        peg$c74 = "\\\n",
        peg$c75 = { type: "literal", value: "\\\n", description: "\"\\\\\\n\"" },
        peg$c76 = function() { return "\n" },
        peg$c77 = "\\z",
        peg$c78 = { type: "literal", value: "\\z", description: "\"\\\\z\"" },
        peg$c79 = function() { return "" },
        peg$c80 = "\\x",
        peg$c81 = { type: "literal", value: "\\x", description: "\"\\\\x\"" },
        peg$c82 = /^[0-9a-f]/,
        peg$c83 = { type: "class", value: "[0-9a-f]", description: "[0-9a-f]" },
        peg$c84 = function(a, b) { return String.fromCharCode(parseInt('0x' + a + b)); },
        peg$c85 = function(a, b, c) { return String.fromCharCode(parseInt('' + a + b + c)); },
        peg$c86 = function() { error('Invalid Escape Sequence') },
        peg$c87 = /^[^'"']/,
        peg$c88 = { type: "class", value: "[^'\"']", description: "[^'\"']" },
        peg$c89 = /^[']/,
        peg$c90 = { type: "class", value: "[']", description: "[']" },
        peg$c91 = function() { return wrapNode({}); },
        peg$c92 = /^["]/,
        peg$c93 = { type: "class", value: "[\"]", description: "[\"]" },
        peg$c94 = "'",
        peg$c95 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c96 = function(s, r, e) { return eUntermIfEmpty(e,"string","\"",s); },
        peg$c97 = function(s, r, e) { return r.join(''); },
        peg$c98 = "\"",
        peg$c99 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c100 = function(s, r, e) { return eUntermIfEmpty(e,"string","'",s); },
        peg$c101 = "[",
        peg$c102 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c103 = function(s) { return s; },
        peg$c104 = "=",
        peg$c105 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c106 = /^[\n]/,
        peg$c107 = { type: "class", value: "[\\n]", description: "[\\n]" },
        peg$c108 = function(a) { return a;},
        peg$c109 = function(e) { return eMsg("Found an expression but expected a statement: " + e)},
        peg$c110 = function(e) { return builder.emptyStatement(); },
        peg$c111 = function(e) { return eMsg("`=` expected")},
        peg$c112 = /^[^\n\t\r ]/,
        peg$c113 = { type: "class", value: "[^\\n\\t\\r ]", description: "[^\\n\\t\\r ]" },
        peg$c114 = function(e) { return eMsg("Parser error near `" + e + "`"); },
        peg$c115 = "debugger",
        peg$c116 = { type: "literal", value: "debugger", description: "\"debugger\"" },
        peg$c117 = function() { return {type: "ExpressionStatement", expression: {type: "Identifier", name:"debugger; "} } },
        peg$c118 = function(start, b, end) { return eUntermIfEmpty(end, "do", "end", start); },
        peg$c119 = function(start, b, end) { return b ? b[0] : {type: "BlockStatement", body: []}; },
        peg$c120 = ",",
        peg$c121 = { type: "literal", value: ",", description: "\",\"" },
        peg$c122 = function(start, a, b, c, d, body, end) { return eUntermIfEmpty(end, "for", "end", start); },
        peg$c123 = function(start, a, b, c, d, body, end) {
                var amount = d == null ? {type: "Literal", value: 1 } : d[3];
                

                var start = bhelper.tempVar(b);
                var updateBy = bhelper.tempVar(amount);
                var testValue = bhelper.tempVar(c);
                var idx = bhelper.tempVar();

                var update = builder.assignmentExpression("=", idx.id, bhelper.binaryExpression("+", idx.id, updateBy.id));

                var texp;
                if ( false ) {} else {
                    texp = bhelper.luaOperator("forcomp", updateBy.id, idx.id, testValue.id);
                }

                if ( !body ) body = {type: "BlockStatement", body: []};
                else body = body[0];

                body.body.unshift(builder.variableDeclaration("let",[
                    {
                            type: "VariableDeclarator",
                            id: a,
                            init: idx.id,
                            userCode: false
                    }
                ]));

                var out = {
                    type: "ForStatement",
                    init: builder.variableDeclaration("let", [
                        {
                            type: "VariableDeclarator",
                            id: idx.id,
                            init: start.id,
                            userCode: false
                        }
                    ]),
                    body: body,
                    update: update,
                    test: texp,
                    loc: loc(),
                    range: range()
                };

                return bhelper.encloseDecls([out], start, updateBy, testValue);
            },
        peg$c124 = "in",
        peg$c125 = { type: "literal", value: "in", description: "\"in\"" },
        peg$c126 = function(start, a, b, c, end) { return eUntermIfEmpty(end, "for", "end", start); },
        peg$c127 = function(start, a, b, c, end) {
                var statements = [];
                var nil = {type: "Literal", value: null };
                var uf = {type: "Identifier", name: 'undefined' };


                var iterator = bhelper.tempName();
                var context = bhelper.tempName();
                var curent = bhelper.tempName();

                var v1 = a[0];

                var varlist = [];
                for ( var idx in a ) {
                    varlist.push({type: "VariableDeclarator", id: a[idx] });
                }

                var call = builder.callExpression(iterator,[context, curent]);
                var assign;
                //if ( a.length > 1 ) {
                    assign = bhelper.bulkAssign(a, [call])
                //} else {
                //    assign = bhelper.assign(v1, call);
                //}

                var nullish = function(v) {
                    return builder.binaryExpression("||", builder.binaryExpression("===", v1, nil), builder.binaryExpression("===", v1, uf))
                }

                statements.push(builder.variableDeclaration("let", varlist));
                statements.push({
                    type: "WhileStatement",
                    test: {type: "Literal", value: true},
                    body: bhelper.blockStatement([
                    assign,
                    { type: "IfStatement", test: nullish(v1), consequent: {type: "BreakStatement" } },
                    bhelper.assign(curent, v1),
                    c.body

                    ])
                });

                return bhelper.encloseDeclsUnpack(statements, [iterator, context, curent], b);
            },
        peg$c128 = function(left, right) { 
                var result = builder.variableDeclaration("let", []);

                if ( !opt('decorateLuaObjects', false) || ( left.length < 2 && right.length < 2 )) { 
                    for ( var i = 0; i < left.length; ++i ) {
                        result.declarations.push(            {
                            type: "VariableDeclarator",
                            id: left[i],
                            init: right[i],
                        });
                    }

                    return result;
                } else {
                    var assign = bhelper.bulkAssign(left, right)
                    for ( var i = 0; i < left.length; ++i ) {
                        result.declarations.push({
                            type: "VariableDeclarator",
                            id: left[i]
                        });
                    }
                 
                    return [result, assign];   
                }
            
            },
        peg$c129 = function(left) {
                var result = builder.variableDeclaration("let", []);
                for ( var i = 0; i < left.length; ++i ) {
                    result.declarations.push({
                        type: "VariableDeclarator",
                        id: left[i]
                    });
                }
                return result;  
            },
        peg$c130 = function(left, right) { 
                // if ( left.length < 2 ) return bhelper.assign(left[0], right[0]).expression;
                return bhelper.bulkAssign(left, right).expression;
            },
        peg$c131 = function() { return {
                "type": "BreakStatement",
                loc: loc(),
                range: range()
            } },
        peg$c132 = function(e) { return {
                type: "ExpressionStatement",
                expression: e,
                loc: loc(),
                range: range()
            } },
        peg$c133 = function(test, then) { return wrapNode({test: test, then:then}); },
        peg$c134 = function() { return eUnterminated("if","then"); },
        peg$c135 = function(start, test, then, elzeifs, elze, end) { return eUntermIfEmpty(end, "if", "end", start); },
        peg$c136 = function(start, test, then, elzeifs, elze, end) {
                var result = { type: "IfStatement", test: test, consequent: then, loc: loc(), range: range()}
                var last = result;

                for ( var idx in elzeifs ) {
                    var elif = elzeifs[idx][1];
                    var nue = { type: "IfStatement", test: elif.test, consequent: elif.then, loc: elif.loc, range: elif.range }
                    last.alternate = nue;
                    last = nue;
                }

                if ( elze !== null ) last.alternate = elze[3];
                return result;
            },
        peg$c137 = function(argument) { 
                var arg;


                if ( argument == null ) { }
                else if ( argument.length == 1 ) arg = argument[0];
                else if ( argument.length > 1 ) {
                    if ( opt('decorateLuaObjects', false) ) arg = bhelper.luaOperatorA("makeMultiReturn", argument);
                    else  arg = {
                        type: "ArrayExpression",
                        elements: argument
                    };            
                }
                return {
                    type: "ReturnStatement",
                    argument: arg,
                    loc: loc(),
                    range: range()
                }
            },
        peg$c138 = function() {
                return {
                    type: "ReturnStatement",
                    loc: loc(),
                }     
            },
        peg$c139 = function() { return eUnterminated("if"); },
        peg$c140 = function(test, body) { return {
                type: "WhileStatement",
                test: test,
                body: body ? body[0] : {type: "EmptyStatement"},
                loc: loc(),
                range: range()

            } },
        peg$c141 = "repeat",
        peg$c142 = { type: "literal", value: "repeat", description: "\"repeat\"" },
        peg$c143 = function() { return eUnterminated("repeat", "until"); },
        peg$c144 = function() {return eMsg("repeat until needs terminations criteria"); },
        peg$c145 = function(body, test) { return {
                type: "DoWhileStatement",
                test: { 
                    type: "UnaryExpression",
                    operator: "!",
                    argument: test,
                    prefix: true,
                    loc: test.loc,
                    range: test.range
                },
                body: body ? body[0] : {type: "EmptyStatement"},
                loc: loc(),
                range: range()
            } },
        peg$c146 = "that",
        peg$c147 = { type: "literal", value: "that", description: "\"that\"" },
        peg$c148 = function() { return { "type": "ThisExpression" }; },
        peg$c149 = function(a, b) {
                a = bhelper.translateExpressionIfNeeded(a);
                if ( b === null ) return a;
                var tokens = [];
                for ( var idx in b ) {
                    var v = b[idx];
                    tokens.push(v[1]);
                    tokens.push(bhelper.translateExpressionIfNeeded(v[3]));
                }

                return precedenceClimber(tokens, a, 1);
            },
        peg$c150 = "-",
        peg$c151 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c152 = "+",
        peg$c153 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c154 = "==",
        peg$c155 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c156 = ">=",
        peg$c157 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c158 = "<=",
        peg$c159 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c160 = "~=",
        peg$c161 = { type: "literal", value: "~=", description: "\"~=\"" },
        peg$c162 = ">",
        peg$c163 = { type: "literal", value: ">", description: "\">\"" },
        peg$c164 = "<",
        peg$c165 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c166 = "..",
        peg$c167 = { type: "literal", value: "..", description: "\"..\"" },
        peg$c168 = "and",
        peg$c169 = { type: "literal", value: "and", description: "\"and\"" },
        peg$c170 = "or",
        peg$c171 = { type: "literal", value: "or", description: "\"or\"" },
        peg$c172 = "*",
        peg$c173 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c174 = "//",
        peg$c175 = { type: "literal", value: "//", description: "\"//\"" },
        peg$c176 = "/",
        peg$c177 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c178 = "%",
        peg$c179 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c180 = "^",
        peg$c181 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c182 = "(",
        peg$c183 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c184 = ")",
        peg$c185 = { type: "literal", value: ")", description: "\")\"" },
        peg$c186 = function(e) { return e; },
        peg$c187 = ":",
        peg$c188 = { type: "literal", value: ":", description: "\":\"" },
        peg$c189 = function(who, a) {
                var left = who
                for ( var idx = 0; idx < a.length; ++idx ) {
                    var v = a[idx];
                    if ( v[1] != null ) {
                        left = builder.memberExpression(left, v[1][1], false);
                        left.selfSuggar = true;
                    }
                    left = bhelper.callExpression(left,v[2]);
                }
                return left;
            },
        peg$c190 = function(b) { return [b]; },
        peg$c191 = function(c) { return [{type: "Literal", value: c, loc: loc(), range: range()}]; },
        peg$c192 = function(a) {

            // Wraping a call in ()'s reduces it to a singel value
            if ( a.type == "CallExpression" ) {
                return bhelper.luaOperator("oneValue", a);
            } else if ( a.type == "Identifier" && a.name == "__lua$rest" ) {
                return bhelper.luaOperator("oneValue", a);
            }
            return a;
        },
        peg$c193 = "...",
        peg$c194 = { type: "literal", value: "...", description: "\"...\"" },
        peg$c195 = function() {
                return wrapNode({type: "Identifier", name: "__lua$rest"});
            },
        peg$c196 = function(a, b) {
                var selfSuggar = false;
                if ( b.length == 0 ) return a;
                var left = a;
                for ( var i in b ) {
                    left = builder.memberExpression(left, b[i].exp, b[i].computed);
                    if ( b[i].suggar ) left.selfSuggar = true;
                }

                return left;
            },
        peg$c197 = /^[.:]/,
        peg$c198 = { type: "class", value: "[.:]", description: "[.:]" },
        peg$c199 = function(p, e) {
                return {exp: e, suggar: p == ':', computed: false }
            },
        peg$c200 = function(e) {
                return {exp: e, suggar: false, computed: true }
            },
        peg$c201 = function() { return eMsg("Malformed argument list."); },
        peg$c202 = function(a, b) {
                 return listHelper(a,b,3); 
            },
        peg$c203 = function(a, b) {
             return listHelper(a,b,3); 
        },
        peg$c204 = function() {return eUnterminated(")", "argument list"); },
        peg$c205 = function(a) {
                 return a; 
            },
        peg$c206 = function() {
                return []
            },
        peg$c207 = function(a, b, c) { 
                var left = builder.memberExpression(a, b[0], b[1]);
                for ( var idx in c ) {
                    left = builder.memberExpression(left, c[idx][0], c[idx][1]);
                }
                return left;
            },
        peg$c208 = function(b) { return [b, true]; },
        peg$c209 = function(b) { return [b,false]; },
        peg$c210 = "{",
        peg$c211 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c212 = "}",
        peg$c213 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c214 = function(f, s) { 
                var result = {
                    type: "ObjectExpression",
                    properties: [],
                    loc: loc(),
                    range: range()
                };

                var props = listHelper(f,s,3);
                var numeric = 0;
                var longProps = [];
                for ( var idx in props ) {
                    var p = props[idx];

                    if ( p.key === undefined ) p.key = {type: "Literal", value: ++numeric, arrayLike: true};
                    p.kind = "init";
                    result.properties.push(p);
                }


                if ( opt('decorateLuaObjects', false) ) {
                    var last;
                    var args = [];
                    var pp = [];
                    var last = true;
                    for ( var idx in result.properties ) {
                        var p = result.properties[idx];
                        if ( p.key.arrayLike ) {
                            args.push(p.value);
                            last = true;
                        } else {
                            longProps.push({
                                type: "ArrayExpression",
                                elements: [p.key, p.value]
                            });
                            pp.push(p);
                            last = false;
                        }
                    }
                    result.properties = pp;

                    result = {type: "ArrayExpression", elements: longProps };
                    if (pp.length < 1 ) result = {type:"Literal", value: null};

                    return bhelper.luaOperator.apply(bhelper, ["makeTable", result, {type: "Literal", value:last}].concat(args)); 
                }
                else return result;
            },
        peg$c215 = function(n, v) {
                if ( n.type == "Identifier" ) n = {type: "Literal", value: n.name};
                return { key: n, value: v };
            },
        peg$c216 = function(v) {
                return { value: v };
            },
        peg$c217 = function(k, v) {
                return { key: k, value: v }; 
            },
        peg$c218 = function(start, name, f, end) { return eUntermIfEmpty(end, "function", "end", start); },
        peg$c219 = function(start, name, f, end) {



                if ( name.type != "MemberExpression" && opt("allowRegularFunctions", false) ) {
                    //TODO: this would need to be decorated
                    return builder.functionDeclaration(name, f.params, f.body);
                }

                //TODO: Translate member expression into call
                var params = f.params.slice(0);
                if ( name.selfSuggar ) params = [{type: "Identifier", name: "self"}].concat(f.params);

                if ( f.rest ) {
                    bhelper.injectRest(f.body.body, params.length);
                }

                var out = builder.functionExpression(null, params, f.body)
                if ( opt('decorateLuaObjects', false) ) {
                    out = bhelper.luaOperator("makeFunction", out);
                }

                return bhelper.assign(name, out);
            },
        peg$c220 = function(start, name, f, end) {

                if ( f.rest ) {
                    bhelper.injectRest(f.body.body, f.params.length);
                }

                if ( opt("allowRegularFunctions", false) )
                    return builder.functionDeclaration(name, f.params, f.body);

                var func = builder.functionExpression(name, f.params, f.body);
                if ( opt('decorateLuaObjects', false) ) {
                    func = bhelper.luaOperator("makeFunction", func);
                }

                var decl = {type: "VariableDeclarator", id: name, init: func};
                var out = builder.variableDeclaration("let", [ decl ]);

                return out;
            },
        peg$c221 = function(f) {
                var result = {
                    type: "FunctionExpression",
                    body: f.body,
                    params: f.params,
                    loc:loc(),
                    range:range()
                }

                if ( f.rest ) {
                    bhelper.injectRest(f.body.body, f.params.length)
                }

                if ( opt('decorateLuaObjects', false) ) {
                    return bhelper.luaOperator("makeFunction", result);
                } else {
                    return result;
                }

            },
        peg$c222 = function(start, b, end) { return eUntermIfEmpty(end, "function", "end", start); },
        peg$c223 = function(start, b, end) { return b; },
        peg$c224 = function(p, rest, body) {
                return { params: p, body: body, rest: rest != null }
            },
        peg$c225 = function(body) {
                return { params: [], body: body, rest: true }
            },
        peg$c226 = function(a, b) {
                return listHelper(a,b); 
            },
        peg$c227 = function() { 
                return [] 
            },
        peg$c228 = function(o, e) { 
                var ops = {"not": "!", "-": "-", "#": "#" }
                if ( o == "#" ) {
                    e = bhelper.translateExpressionIfNeeded(e);
                    return bhelper.luaOperator("count", e);
                }
                return { 
                    type: "UnaryExpression",
                    operator: ops[o],
                    argument: bhelper.translateExpressionIfNeeded(e),
                    prefix: true,
                    loc: loc(),
                    range: range()
                }
            },
        peg$c229 = function(name) { return {
                type: "Identifier",
                name: name,
                loc: loc(),
                range: range()
            } },
        peg$c230 = function(a) {
                var values = {"nil": null, "false": false, "true": true} 
                return { type: "Literal", value: values[a], loc: loc(), range: range() }

            },
        peg$c231 = /^[eE]/,
        peg$c232 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c233 = function(b, c) {
                return { type: "Literal", value: parseFloat(b) * Math.pow(10, parseInt(c)), loc: loc(), range: range()  }

            },
        peg$c234 = "0",
        peg$c235 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c236 = /^[Xx]/,
        peg$c237 = { type: "class", value: "[Xx]", description: "[Xx]" },
        peg$c238 = /^[0-9a-fA-F]/,
        peg$c239 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c240 = function(b) {
                return { type: "Literal", value: parseInt(b), loc: loc(), range: range()  }

            },
        peg$c241 = function(b) {
                return { type: "Literal", value: parseFloat(b), loc: loc(), range: range()  }

            },
        peg$c242 = function(s) {
                return { type: "Literal", value: s, loc: loc(), range: range()  }

            },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      peg$reportedPos = peg$currPos;
      s1 = peg$c1();
      if (s1) {
        s1 = peg$c2;
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 35) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          if (peg$c7.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c7.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 10) {
              s5 = peg$c9;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c10); }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsews();
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseBlockStatement();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsews();
              if (s5 === peg$FAILED) {
                s5 = peg$c3;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c11(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1, s2, s3, s4, s5;

      s0 = [];
      if (peg$c12.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c14) {
          s2 = peg$c14;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsebalstringinsde();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s4 = peg$c16;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c18) {
            s2 = peg$c18;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            if (peg$c7.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c7.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 10) {
                s5 = peg$c9;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c10); }
              }
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
            if (s3 === peg$FAILED) {
              s3 = [];
              if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
              }
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                if (input.length > peg$currPos) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
              }
            }
            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c12.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s1 === peg$FAILED) {
            s1 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c14) {
              s2 = peg$c14;
              peg$currPos += 3;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parsebalstringinsde();
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s4 = peg$c16;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                }
                if (s4 !== peg$FAILED) {
                  s2 = [s2, s3, s4];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$c0;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$c0;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
            if (s1 === peg$FAILED) {
              s1 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c18) {
                s2 = peg$c18;
                peg$currPos += 2;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c19); }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = [];
                if (peg$c7.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c8); }
                }
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c7.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c8); }
                  }
                }
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 10) {
                    s5 = peg$c9;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$c0;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
                if (s3 === peg$FAILED) {
                  s3 = [];
                  if (input.length > peg$currPos) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c20); }
                  }
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    if (input.length > peg$currPos) {
                      s4 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c20); }
                    }
                  }
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$c0;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$c0;
              }
            }
          }
        }
      } else {
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsescws() {
      var s0, s1, s2, s3, s4;

      s0 = [];
      s1 = peg$currPos;
      s2 = peg$parsews();
      if (s2 === peg$FAILED) {
        s2 = peg$c3;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 59) {
          s3 = peg$c21;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsews();
          if (s4 === peg$FAILED) {
            s4 = peg$c3;
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$currPos;
          s2 = peg$parsews();
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 59) {
              s3 = peg$c21;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c22); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsews();
              if (s4 === peg$FAILED) {
                s4 = peg$c3;
              }
              if (s4 !== peg$FAILED) {
                s2 = [s2, s3, s4];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$c0;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        }
      } else {
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsews();
      }

      return s0;
    }

    function peg$parseBlockStatement() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseReturnStatement();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c23(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseStatementList();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          s4 = peg$parsescws();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsescws();
            }
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseReturnStatement();
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c24(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseStatementList() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseStatement();
      if (s1 === peg$FAILED) {
        s1 = peg$c3;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsescws();
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsescws();
          }
        } else {
          s4 = peg$c0;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStatement();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parsescws();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsescws();
            }
          } else {
            s4 = peg$c0;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStatement();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parsews();
          if (s5 === peg$FAILED) {
            s5 = peg$c3;
          }
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 59) {
              s6 = peg$c21;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c22); }
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parsews();
            if (s5 === peg$FAILED) {
              s5 = peg$c3;
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 59) {
                s6 = peg$c21;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c22); }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c25(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseReservedWord() {
      var s0, s1, s2;

      if (input.substr(peg$currPos, 2) === peg$c26) {
        s0 = peg$c26;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c28) {
          s0 = peg$c28;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c29); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c30) {
            s0 = peg$c30;
            peg$currPos += 6;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 4) === peg$c32) {
              s0 = peg$c32;
              peg$currPos += 4;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c33); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c34) {
                s0 = peg$c34;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c35); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 3) === peg$c36) {
                  s0 = peg$c36;
                  peg$currPos += 3;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c37); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c38) {
                    s0 = peg$c38;
                    peg$currPos += 6;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c39); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 5) === peg$c40) {
                      s0 = peg$c40;
                      peg$currPos += 5;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c41); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 3) === peg$c42) {
                        s0 = peg$c42;
                        peg$currPos += 3;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c43); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 4) === peg$c44) {
                          s0 = peg$c44;
                          peg$currPos += 4;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c45); }
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.substr(peg$currPos, 5) === peg$c46) {
                            s1 = peg$c46;
                            peg$currPos += 5;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c47); }
                          }
                          if (s1 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 8) === peg$c48) {
                              s2 = peg$c48;
                              peg$currPos += 8;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c49); }
                            }
                            if (s2 !== peg$FAILED) {
                              s1 = [s1, s2];
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 3) === peg$c50) {
                              s0 = peg$c50;
                              peg$currPos += 3;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c51); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 5) === peg$c52) {
                                s0 = peg$c52;
                                peg$currPos += 5;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c53); }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.substr(peg$currPos, 3) === peg$c54) {
                                  s0 = peg$c54;
                                  peg$currPos += 3;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c55); }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 5) === peg$c56) {
                                    s0 = peg$c56;
                                    peg$currPos += 5;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c57); }
                                  }
                                  if (s0 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 8) === peg$c48) {
                                      s0 = peg$c48;
                                      peg$currPos += 8;
                                    } else {
                                      s0 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c49); }
                                    }
                                    if (s0 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 5) === peg$c58) {
                                        s0 = peg$c58;
                                        peg$currPos += 5;
                                      } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c59); }
                                      }
                                      if (s0 === peg$FAILED) {
                                        s0 = peg$parsebinop();
                                        if (s0 === peg$FAILED) {
                                          s0 = peg$parseunop();
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseName() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$currPos;
      s3 = peg$parseReservedWord();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = peg$c2;
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c0;
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c2;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (peg$c60.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c62.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c63); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c62.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c63); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c64(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseNumber() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      if (peg$c65.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c65.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c66); }
          }
        }
      } else {
        s2 = peg$c0;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c67;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c68); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c65.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c66); }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c65.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c66); }
              }
            }
          } else {
            s5 = peg$c0;
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$c3;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsestringchar() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c69;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c71.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c73(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c74) {
          s1 = peg$c74;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c75); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c76();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c77) {
            s1 = peg$c77;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c78); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parsews();
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c79();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c80) {
              s1 = peg$c80;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c81); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos;
              if (peg$c82.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c83); }
              }
              if (s3 !== peg$FAILED) {
                s3 = input.substring(s2, peg$currPos);
              }
              s2 = s3;
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                if (peg$c82.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c83); }
                }
                if (s4 !== peg$FAILED) {
                  s4 = input.substring(s3, peg$currPos);
                }
                s3 = s4;
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c84(s2, s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 92) {
                s1 = peg$c69;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c70); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                if (peg$c65.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c66); }
                }
                if (s3 !== peg$FAILED) {
                  s3 = input.substring(s2, peg$currPos);
                }
                s2 = s3;
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  if (peg$c65.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c66); }
                  }
                  if (s4 === peg$FAILED) {
                    s4 = peg$c3;
                  }
                  if (s4 !== peg$FAILED) {
                    s4 = input.substring(s3, peg$currPos);
                  }
                  s3 = s4;
                  if (s3 !== peg$FAILED) {
                    s4 = peg$currPos;
                    if (peg$c65.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c66); }
                    }
                    if (s5 === peg$FAILED) {
                      s5 = peg$c3;
                    }
                    if (s5 !== peg$FAILED) {
                      s5 = input.substring(s4, peg$currPos);
                    }
                    s4 = s5;
                    if (s4 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c85(s2, s3, s4);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                  s1 = peg$c69;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c70); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c86();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (peg$c87.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c88); }
                  }
                  if (s1 !== peg$FAILED) {
                    s1 = input.substring(s0, peg$currPos);
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsesinglequote() {
      var s0, s1;

      s0 = peg$currPos;
      if (peg$c89.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c90); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsedoublequote() {
      var s0, s1;

      s0 = peg$currPos;
      if (peg$c92.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c93); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseString() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsedoublequote();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringchar();
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c94;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c95); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringchar();
          if (s3 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c94;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c95); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsedoublequote();
          if (s3 === peg$FAILED) {
            s3 = [];
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = peg$currPos;
            s4 = peg$c96(s1, s2, s3);
            if (s4) {
              s4 = peg$c2;
            } else {
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c97(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsesinglequote();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsestringchar();
          if (s3 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 34) {
              s3 = peg$c98;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c99); }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsestringchar();
            if (s3 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s3 = peg$c98;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c99); }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsesinglequote();
            if (s3 === peg$FAILED) {
              s3 = [];
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = peg$currPos;
              s4 = peg$c100(s1, s2, s3);
              if (s4) {
                s4 = peg$c2;
              } else {
                s4 = peg$c0;
              }
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c97(s1, s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 91) {
            s1 = peg$c101;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c102); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parsebalstringinsde();
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s3 = peg$c16;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c17); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c103(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        }
      }

      return s0;
    }

    function peg$parsebalstringinsde() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c104;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c105); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsebalstringinsde();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c104;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c105); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c64(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c101;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c102); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c106.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 93) {
              s8 = peg$c16;
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s8 !== peg$FAILED) {
              s9 = [];
              if (input.charCodeAt(peg$currPos) === 61) {
                s10 = peg$c104;
                peg$currPos++;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c105); }
              }
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                if (input.charCodeAt(peg$currPos) === 61) {
                  s10 = peg$c104;
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c105); }
                }
              }
              if (s9 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s10 = peg$c16;
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                }
                if (s10 !== peg$FAILED) {
                  s8 = [s8, s9, s10];
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$c0;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$c0;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$c0;
            }
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = peg$c2;
            } else {
              peg$currPos = s6;
              s6 = peg$c0;
            }
            if (s6 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$c0;
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$currPos;
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 93) {
                s8 = peg$c16;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c17); }
              }
              if (s8 !== peg$FAILED) {
                s9 = [];
                if (input.charCodeAt(peg$currPos) === 61) {
                  s10 = peg$c104;
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c105); }
                }
                while (s10 !== peg$FAILED) {
                  s9.push(s10);
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s10 = peg$c104;
                    peg$currPos++;
                  } else {
                    s10 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c105); }
                  }
                }
                if (s9 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s10 = peg$c16;
                    peg$currPos++;
                  } else {
                    s10 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c17); }
                  }
                  if (s10 !== peg$FAILED) {
                    s8 = [s8, s9, s10];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$c0;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$c0;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$c0;
              }
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = peg$c2;
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
              if (s6 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$c0;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
              }
            }
            if (s4 !== peg$FAILED) {
              s4 = input.substring(s3, peg$currPos);
            }
            s3 = s4;
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s4 = peg$c16;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c17); }
              }
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c108(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseStatement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$parseDebugger();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBreakStatement();
        if (s0 === peg$FAILED) {
          s0 = peg$parseNumericFor();
          if (s0 === peg$FAILED) {
            s0 = peg$parseForEach();
            if (s0 === peg$FAILED) {
              s0 = peg$parseRepeatUntil();
              if (s0 === peg$FAILED) {
                s0 = peg$parseWhileStatement();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseIfStatement();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseExpressionStatement();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseDoEndGrouped();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseLocalAssingment();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseFunctionDeclaration();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseLocalFunction();
                            if (s0 === peg$FAILED) {
                              s0 = peg$currPos;
                              s1 = peg$currPos;
                              peg$silentFails++;
                              s2 = peg$currPos;
                              s3 = peg$parsews();
                              if (s3 === peg$FAILED) {
                                s3 = peg$c3;
                              }
                              if (s3 !== peg$FAILED) {
                                s4 = peg$parseReservedWord();
                                if (s4 !== peg$FAILED) {
                                  s3 = [s3, s4];
                                  s2 = s3;
                                } else {
                                  peg$currPos = s2;
                                  s2 = peg$c0;
                                }
                              } else {
                                peg$currPos = s2;
                                s2 = peg$c0;
                              }
                              peg$silentFails--;
                              if (s2 === peg$FAILED) {
                                s1 = peg$c2;
                              } else {
                                peg$currPos = s1;
                                s1 = peg$c0;
                              }
                              if (s1 !== peg$FAILED) {
                                s2 = peg$currPos;
                                s3 = peg$parseExpression();
                                if (s3 !== peg$FAILED) {
                                  s3 = input.substring(s2, peg$currPos);
                                }
                                s2 = s3;
                                if (s2 !== peg$FAILED) {
                                  peg$reportedPos = peg$currPos;
                                  s3 = peg$c109(s2);
                                  if (s3) {
                                    s3 = peg$c2;
                                  } else {
                                    s3 = peg$c0;
                                  }
                                  if (s3 !== peg$FAILED) {
                                    peg$reportedPos = s0;
                                    s1 = peg$c110(s2);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$c0;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$c0;
                              }
                              if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$currPos;
                                peg$silentFails++;
                                s2 = peg$currPos;
                                s3 = peg$parsews();
                                if (s3 === peg$FAILED) {
                                  s3 = peg$c3;
                                }
                                if (s3 !== peg$FAILED) {
                                  s4 = peg$parseReservedWord();
                                  if (s4 !== peg$FAILED) {
                                    s3 = [s3, s4];
                                    s2 = s3;
                                  } else {
                                    peg$currPos = s2;
                                    s2 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s2;
                                  s2 = peg$c0;
                                }
                                peg$silentFails--;
                                if (s2 === peg$FAILED) {
                                  s1 = peg$c2;
                                } else {
                                  peg$currPos = s1;
                                  s1 = peg$c0;
                                }
                                if (s1 !== peg$FAILED) {
                                  s2 = peg$currPos;
                                  s3 = peg$parseIdentifier();
                                  if (s3 !== peg$FAILED) {
                                    s3 = input.substring(s2, peg$currPos);
                                  }
                                  s2 = s3;
                                  if (s2 !== peg$FAILED) {
                                    peg$reportedPos = peg$currPos;
                                    s3 = peg$c111(s2);
                                    if (s3) {
                                      s3 = peg$c2;
                                    } else {
                                      s3 = peg$c0;
                                    }
                                    if (s3 !== peg$FAILED) {
                                      peg$reportedPos = s0;
                                      s1 = peg$c110(s2);
                                      s0 = s1;
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$c0;
                                }
                                if (s0 === peg$FAILED) {
                                  s0 = peg$currPos;
                                  s1 = peg$currPos;
                                  peg$silentFails++;
                                  s2 = peg$currPos;
                                  s3 = peg$parsews();
                                  if (s3 === peg$FAILED) {
                                    s3 = peg$c3;
                                  }
                                  if (s3 !== peg$FAILED) {
                                    s4 = peg$parseReservedWord();
                                    if (s4 !== peg$FAILED) {
                                      s3 = [s3, s4];
                                      s2 = s3;
                                    } else {
                                      peg$currPos = s2;
                                      s2 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s2;
                                    s2 = peg$c0;
                                  }
                                  peg$silentFails--;
                                  if (s2 === peg$FAILED) {
                                    s1 = peg$c2;
                                  } else {
                                    peg$currPos = s1;
                                    s1 = peg$c0;
                                  }
                                  if (s1 !== peg$FAILED) {
                                    s2 = peg$currPos;
                                    if (peg$c112.test(input.charAt(peg$currPos))) {
                                      s3 = input.charAt(peg$currPos);
                                      peg$currPos++;
                                    } else {
                                      s3 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c113); }
                                    }
                                    if (s3 !== peg$FAILED) {
                                      s3 = input.substring(s2, peg$currPos);
                                    }
                                    s2 = s3;
                                    if (s2 !== peg$FAILED) {
                                      s3 = [];
                                      if (peg$c7.test(input.charAt(peg$currPos))) {
                                        s4 = input.charAt(peg$currPos);
                                        peg$currPos++;
                                      } else {
                                        s4 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c8); }
                                      }
                                      while (s4 !== peg$FAILED) {
                                        s3.push(s4);
                                        if (peg$c7.test(input.charAt(peg$currPos))) {
                                          s4 = input.charAt(peg$currPos);
                                          peg$currPos++;
                                        } else {
                                          s4 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c8); }
                                        }
                                      }
                                      if (s3 !== peg$FAILED) {
                                        if (peg$c106.test(input.charAt(peg$currPos))) {
                                          s4 = input.charAt(peg$currPos);
                                          peg$currPos++;
                                        } else {
                                          s4 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c107); }
                                        }
                                        if (s4 === peg$FAILED) {
                                          s4 = peg$currPos;
                                          peg$silentFails++;
                                          if (input.length > peg$currPos) {
                                            s5 = input.charAt(peg$currPos);
                                            peg$currPos++;
                                          } else {
                                            s5 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c20); }
                                          }
                                          peg$silentFails--;
                                          if (s5 === peg$FAILED) {
                                            s4 = peg$c2;
                                          } else {
                                            peg$currPos = s4;
                                            s4 = peg$c0;
                                          }
                                        }
                                        if (s4 !== peg$FAILED) {
                                          peg$reportedPos = peg$currPos;
                                          s5 = peg$c114(s2);
                                          if (s5) {
                                            s5 = peg$c2;
                                          } else {
                                            s5 = peg$c0;
                                          }
                                          if (s5 !== peg$FAILED) {
                                            peg$reportedPos = s0;
                                            s1 = peg$c110(s2);
                                            s0 = s1;
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$c0;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$c0;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$c0;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$c0;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseDebugger() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c115) {
        s1 = peg$c115;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c116); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c117();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseDoEndGrouped() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsedo();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseBlockStatement();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsews();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c36) {
              s4 = peg$c36;
              peg$currPos += 3;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
            }
            if (s4 === peg$FAILED) {
              s4 = [];
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = peg$currPos;
              s5 = peg$c118(s1, s3, s4);
              if (s5) {
                s5 = peg$c2;
              } else {
                s5 = peg$c0;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c119(s1, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseif() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c26) {
        s1 = peg$c26;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsedo() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c34) {
        s1 = peg$c34;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsefor() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c54) {
        s1 = peg$c54;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsefunction() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c48) {
        s1 = peg$c48;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c91();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseNumericFor() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18;

      s0 = peg$currPos;
      s1 = peg$parsefor();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseIdentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 61) {
                s5 = peg$c104;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c105); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 === peg$FAILED) {
                  s6 = peg$c3;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseExpression();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsews();
                    if (s8 === peg$FAILED) {
                      s8 = peg$c3;
                    }
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s9 = peg$c120;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c121); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parsews();
                        if (s10 === peg$FAILED) {
                          s10 = peg$c3;
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseExpression();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$currPos;
                            s13 = peg$parsews();
                            if (s13 === peg$FAILED) {
                              s13 = peg$c3;
                            }
                            if (s13 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 44) {
                                s14 = peg$c120;
                                peg$currPos++;
                              } else {
                                s14 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c121); }
                              }
                              if (s14 !== peg$FAILED) {
                                s15 = peg$parsews();
                                if (s15 === peg$FAILED) {
                                  s15 = peg$c3;
                                }
                                if (s15 !== peg$FAILED) {
                                  s16 = peg$parseExpression();
                                  if (s16 !== peg$FAILED) {
                                    s13 = [s13, s14, s15, s16];
                                    s12 = s13;
                                  } else {
                                    peg$currPos = s12;
                                    s12 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s12;
                                  s12 = peg$c0;
                                }
                              } else {
                                peg$currPos = s12;
                                s12 = peg$c0;
                              }
                            } else {
                              peg$currPos = s12;
                              s12 = peg$c0;
                            }
                            if (s12 === peg$FAILED) {
                              s12 = peg$c3;
                            }
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parsews();
                              if (s13 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c34) {
                                  s14 = peg$c34;
                                  peg$currPos += 2;
                                } else {
                                  s14 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c35); }
                                }
                                if (s14 !== peg$FAILED) {
                                  s15 = peg$parsews();
                                  if (s15 !== peg$FAILED) {
                                    s16 = peg$currPos;
                                    s17 = peg$parseBlockStatement();
                                    if (s17 !== peg$FAILED) {
                                      s18 = peg$parsews();
                                      if (s18 !== peg$FAILED) {
                                        s17 = [s17, s18];
                                        s16 = s17;
                                      } else {
                                        peg$currPos = s16;
                                        s16 = peg$c0;
                                      }
                                    } else {
                                      peg$currPos = s16;
                                      s16 = peg$c0;
                                    }
                                    if (s16 === peg$FAILED) {
                                      s16 = peg$c3;
                                    }
                                    if (s16 !== peg$FAILED) {
                                      if (input.substr(peg$currPos, 3) === peg$c36) {
                                        s17 = peg$c36;
                                        peg$currPos += 3;
                                      } else {
                                        s17 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c37); }
                                      }
                                      if (s17 === peg$FAILED) {
                                        s17 = [];
                                      }
                                      if (s17 !== peg$FAILED) {
                                        peg$reportedPos = peg$currPos;
                                        s18 = peg$c122(s1, s3, s7, s11, s12, s16, s17);
                                        if (s18) {
                                          s18 = peg$c2;
                                        } else {
                                          s18 = peg$c0;
                                        }
                                        if (s18 !== peg$FAILED) {
                                          peg$reportedPos = s0;
                                          s1 = peg$c123(s1, s3, s7, s11, s12, s16, s17);
                                          s0 = s1;
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$c0;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$c0;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$c0;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$c0;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseForEach() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      s1 = peg$parsefor();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenamelist();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c124) {
                s5 = peg$c124;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c125); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseexplist();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsews();
                    if (s8 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c34) {
                        s9 = peg$c34;
                        peg$currPos += 2;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c35); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parsews();
                        if (s10 === peg$FAILED) {
                          s10 = peg$c3;
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseBlockStatement();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parsews();
                            if (s12 === peg$FAILED) {
                              s12 = peg$c3;
                            }
                            if (s12 !== peg$FAILED) {
                              if (input.substr(peg$currPos, 3) === peg$c36) {
                                s13 = peg$c36;
                                peg$currPos += 3;
                              } else {
                                s13 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c37); }
                              }
                              if (s13 === peg$FAILED) {
                                s13 = [];
                              }
                              if (s13 !== peg$FAILED) {
                                peg$reportedPos = peg$currPos;
                                s14 = peg$c126(s1, s3, s7, s11, s13);
                                if (s14) {
                                  s14 = peg$c2;
                                } else {
                                  s14 = peg$c0;
                                }
                                if (s14 !== peg$FAILED) {
                                  peg$reportedPos = s0;
                                  s1 = peg$c127(s1, s3, s7, s11, s13);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$c0;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$c0;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseLocalAssingment() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c40) {
        s1 = peg$c40;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenamelist();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 61) {
                s5 = peg$c104;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c105); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 === peg$FAILED) {
                  s6 = peg$c3;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseexplist();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c128(s3, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c40) {
          s1 = peg$c40;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsews();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsenamelist();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c129(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseAssignmentExpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsevarlist();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c104;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c105); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexplist();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c130(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseBreakStatement() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c52) {
        s1 = peg$c52;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c131();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseExpressionStatement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseAssignmentExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$parseCallExpression();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c132(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseelseif() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c30) {
        s1 = peg$c30;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c28) {
                s5 = peg$c28;
                peg$currPos += 4;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c29); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseBlockStatement();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c133(s3, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseIfStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

      s0 = peg$currPos;
      s1 = peg$parseif();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c28) {
                s5 = peg$c28;
                peg$currPos += 4;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c29); }
              }
              if (s5 === peg$FAILED) {
                peg$reportedPos = peg$currPos;
                s5 = peg$c134();
                if (s5) {
                  s5 = peg$c2;
                } else {
                  s5 = peg$c0;
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseBlockStatement();
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$currPos;
                    s10 = peg$parsews();
                    if (s10 === peg$FAILED) {
                      s10 = peg$c3;
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parseelseif();
                      if (s11 !== peg$FAILED) {
                        s10 = [s10, s11];
                        s9 = s10;
                      } else {
                        peg$currPos = s9;
                        s9 = peg$c0;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$c0;
                    }
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$currPos;
                      s10 = peg$parsews();
                      if (s10 === peg$FAILED) {
                        s10 = peg$c3;
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseelseif();
                        if (s11 !== peg$FAILED) {
                          s10 = [s10, s11];
                          s9 = s10;
                        } else {
                          peg$currPos = s9;
                          s9 = peg$c0;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$c0;
                      }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$currPos;
                      s10 = peg$parsews();
                      if (s10 === peg$FAILED) {
                        s10 = peg$c3;
                      }
                      if (s10 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 4) === peg$c32) {
                          s11 = peg$c32;
                          peg$currPos += 4;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c33); }
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parsews();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parseBlockStatement();
                            if (s13 !== peg$FAILED) {
                              s10 = [s10, s11, s12, s13];
                              s9 = s10;
                            } else {
                              peg$currPos = s9;
                              s9 = peg$c0;
                            }
                          } else {
                            peg$currPos = s9;
                            s9 = peg$c0;
                          }
                        } else {
                          peg$currPos = s9;
                          s9 = peg$c0;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$c0;
                      }
                      if (s9 === peg$FAILED) {
                        s9 = peg$c3;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parsews();
                        if (s10 === peg$FAILED) {
                          s10 = peg$c3;
                        }
                        if (s10 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 3) === peg$c36) {
                            s11 = peg$c36;
                            peg$currPos += 3;
                          } else {
                            s11 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c37); }
                          }
                          if (s11 === peg$FAILED) {
                            s11 = [];
                          }
                          if (s11 !== peg$FAILED) {
                            peg$reportedPos = peg$currPos;
                            s12 = peg$c135(s1, s3, s7, s8, s9, s11);
                            if (s12) {
                              s12 = peg$c2;
                            } else {
                              s12 = peg$c0;
                            }
                            if (s12 !== peg$FAILED) {
                              peg$reportedPos = s0;
                              s1 = peg$c136(s1, s3, s7, s8, s9, s11);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseReturnStatement() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c38) {
        s1 = peg$c38;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexplist();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c137(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c38) {
          s1 = peg$c38;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c39); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c138();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseWhileStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c58) {
        s1 = peg$c58;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c34) {
                s5 = peg$c34;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c35); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  s7 = peg$currPos;
                  s8 = peg$parseBlockStatement();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsews();
                    if (s9 !== peg$FAILED) {
                      s8 = [s8, s9];
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$c0;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$c0;
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$c3;
                  }
                  if (s7 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 3) === peg$c36) {
                      s8 = peg$c36;
                      peg$currPos += 3;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c37); }
                    }
                    if (s8 === peg$FAILED) {
                      peg$reportedPos = peg$currPos;
                      s8 = peg$c139();
                      if (s8) {
                        s8 = peg$c2;
                      } else {
                        s8 = peg$c0;
                      }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c140(s3, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseRepeatUntil() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c141) {
        s1 = peg$c141;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c142); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseBlockStatement();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsews();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 5) === peg$c56) {
                s5 = peg$c56;
                peg$currPos += 5;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c57); }
              }
              if (s5 === peg$FAILED) {
                peg$reportedPos = peg$currPos;
                s5 = peg$c143();
                if (s5) {
                  s5 = peg$c2;
                } else {
                  s5 = peg$c0;
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseExpression();
                  if (s7 === peg$FAILED) {
                    peg$reportedPos = peg$currPos;
                    s7 = peg$c144();
                    if (s7) {
                      s7 = peg$c2;
                    } else {
                      s7 = peg$c0;
                    }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c145(s3, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseThat() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c146) {
        s1 = peg$c146;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c147); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c148();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseSimpleExpression() {
      var s0;

      s0 = peg$parseLiteral();
      if (s0 === peg$FAILED) {
        s0 = peg$parseResetExpression();
        if (s0 === peg$FAILED) {
          s0 = peg$parseFunctionExpression();
          if (s0 === peg$FAILED) {
            s0 = peg$parseCallExpression();
            if (s0 === peg$FAILED) {
              s0 = peg$parseThat();
              if (s0 === peg$FAILED) {
                s0 = peg$parseIdentifier();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseObjectExpression();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseUnaryExpression();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseParenExpr();
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExpression() {
      var s0;

      s0 = peg$parseAssignmentExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBinSimpleExpression();
      }

      return s0;
    }

    function peg$parseBinSimpleExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseMemberExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$parseSimpleExpression();
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$c3;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsebinop();
          if (s5 !== peg$FAILED) {
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseMemberExpression();
              if (s7 === peg$FAILED) {
                s7 = peg$parseSimpleExpression();
              }
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsews();
          if (s4 === peg$FAILED) {
            s4 = peg$c3;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsebinop();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseMemberExpression();
                if (s7 === peg$FAILED) {
                  s7 = peg$parseSimpleExpression();
                }
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c149(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseunop() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c150;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c151); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 35) {
            s1 = peg$c4;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c5); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsebinop() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 43) {
        s1 = peg$c152;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c153); }
      }
      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s1 = peg$c150;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c151); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c154) {
            s1 = peg$c154;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c155); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c156) {
              s1 = peg$c156;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c157); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c158) {
                s1 = peg$c158;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c159); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c160) {
                  s1 = peg$c160;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c161); }
                }
                if (s1 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 62) {
                    s1 = peg$c162;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c163); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 60) {
                      s1 = peg$c164;
                      peg$currPos++;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c165); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c166) {
                        s1 = peg$c166;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c167); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c168) {
                          s1 = peg$c168;
                          peg$currPos += 3;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c169); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 2) === peg$c170) {
                            s1 = peg$c170;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c171); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 42) {
                              s1 = peg$c172;
                              peg$currPos++;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c173); }
                            }
                            if (s1 === peg$FAILED) {
                              if (input.substr(peg$currPos, 2) === peg$c174) {
                                s1 = peg$c174;
                                peg$currPos += 2;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c175); }
                              }
                              if (s1 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 47) {
                                  s1 = peg$c176;
                                  peg$currPos++;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c177); }
                                }
                                if (s1 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 37) {
                                    s1 = peg$c178;
                                    peg$currPos++;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c179); }
                                  }
                                  if (s1 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 94) {
                                      s1 = peg$c180;
                                      peg$currPos++;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c181); }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseprefixexp() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$parsefuncname();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c182;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c183); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsews();
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseExpression();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsews();
              if (s4 === peg$FAILED) {
                s4 = peg$c3;
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s5 = peg$c184;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c185); }
                }
                if (s5 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c186(s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseCallExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c48) {
        s3 = peg$c48;
        peg$currPos += 8;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$c3;
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s5 = peg$c182;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c183); }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c0;
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c2;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseprefixexp();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parsews();
          if (s5 === peg$FAILED) {
            s5 = peg$c3;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 58) {
              s7 = peg$c187;
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c188); }
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseIdentifier();
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$c0;
            }
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parsecallsuffix();
              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = peg$parsews();
              if (s5 === peg$FAILED) {
                s5 = peg$c3;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 58) {
                  s7 = peg$c187;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c188); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseIdentifier();
                  if (s8 !== peg$FAILED) {
                    s7 = [s7, s8];
                    s6 = s7;
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 === peg$FAILED) {
                  s6 = peg$c3;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsecallsuffix();
                  if (s7 !== peg$FAILED) {
                    s5 = [s5, s6, s7];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$c0;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$c0;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            }
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c189(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsecallsuffix() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseargs();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c64(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseObjectExpression();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c190(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseString();
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c191(s1);
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseParenExpr() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c182;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c183); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c184;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c185); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c192(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseResetExpression() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c193) {
        s1 = peg$c193;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c194); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c195();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsefuncname() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseThat();
      if (s1 === peg$FAILED) {
        s1 = peg$parseIdentifier();
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsefuncnamesuffix();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsefuncnamesuffix();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c196(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefuncnamesuffix() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parsews();
      if (s1 === peg$FAILED) {
        s1 = peg$c3;
      }
      if (s1 !== peg$FAILED) {
        if (peg$c197.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c198); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsews();
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseIdentifier();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c199(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 === peg$FAILED) {
          s1 = peg$c3;
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 91) {
            s2 = peg$c101;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c102); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsews();
            if (s3 === peg$FAILED) {
              s3 = peg$c3;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseExpression();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsews();
                if (s5 === peg$FAILED) {
                  s5 = peg$c3;
                }
                if (s5 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s6 = peg$c16;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c17); }
                  }
                  if (s6 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c200(s4);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseexplist() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$c3;
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c120;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpression();
              if (s7 === peg$FAILED) {
                peg$reportedPos = peg$currPos;
                s7 = peg$c201();
                if (s7) {
                  s7 = peg$c2;
                } else {
                  s7 = peg$c0;
                }
              }
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsews();
          if (s4 === peg$FAILED) {
            s4 = peg$c3;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c120;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c121); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpression();
                if (s7 === peg$FAILED) {
                  peg$reportedPos = peg$currPos;
                  s7 = peg$c201();
                  if (s7) {
                    s7 = peg$c2;
                  } else {
                    s7 = peg$c0;
                  }
                }
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c202(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsevarlist() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parsevar();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$c3;
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c120;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parsevar();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsews();
          if (s4 === peg$FAILED) {
            s4 = peg$c3;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c120;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c121); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parsevar();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c203(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsenamelist() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsews();
        if (s4 === peg$FAILED) {
          s4 = peg$c3;
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c120;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseIdentifier();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsews();
          if (s4 === peg$FAILED) {
            s4 = peg$c3;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c120;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c121); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseIdentifier();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c202(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseargs() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c182;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c183); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexplist();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c184;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c185); }
              }
              if (s5 === peg$FAILED) {
                peg$reportedPos = peg$currPos;
                s5 = peg$c204();
                if (s5) {
                  s5 = peg$c2;
                } else {
                  s5 = peg$c0;
                }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c205(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c182;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c183); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsews();
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c184;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c185); }
            }
            if (s3 === peg$FAILED) {
              peg$reportedPos = peg$currPos;
              s3 = peg$c204();
              if (s3) {
                s3 = peg$c2;
              } else {
                s3 = peg$c0;
              }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c206();
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parsevar() {
      var s0;

      s0 = peg$parseMemberExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parseIdentifier();
      }

      return s0;
    }

    function peg$parseMemberExpression() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseCallExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$parseSimpleExpression();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseindexer();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseindexer();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseindexer();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c207(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseindexer() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c101;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c102); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c16;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c17); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c208(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c67;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c68); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseSimpleExpression();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c209(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseObjectExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c210;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c211); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefield();
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$currPos;
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s7 = peg$c120;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c121); }
              }
              if (s7 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 59) {
                  s7 = peg$c21;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parsews();
                if (s8 === peg$FAILED) {
                  s8 = peg$c3;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parsefield();
                  if (s9 !== peg$FAILED) {
                    s6 = [s6, s7, s8, s9];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$c0;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$c0;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$c0;
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$currPos;
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s7 = peg$c120;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c121); }
                }
                if (s7 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s7 = peg$c21;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsews();
                  if (s8 === peg$FAILED) {
                    s8 = peg$c3;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsefield();
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$c0;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$c0;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$c0;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
              }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parsews();
              if (s5 === peg$FAILED) {
                s5 = peg$c3;
              }
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s6 = peg$c212;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c213); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c214(s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefield() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      s0 = peg$currPos;
      s1 = peg$parseLiteral();
      if (s1 === peg$FAILED) {
        s1 = peg$parseIdentifier();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c104;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c105); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseBinSimpleExpression();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c215(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseBinSimpleExpression();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsews();
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c216(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsews();
          if (s1 === peg$FAILED) {
            s1 = peg$c3;
          }
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 91) {
              s2 = peg$c101;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c102); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parsews();
              if (s3 === peg$FAILED) {
                s3 = peg$c3;
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parseExpression();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsews();
                  if (s5 === peg$FAILED) {
                    s5 = peg$c3;
                  }
                  if (s5 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s6 = peg$c16;
                      peg$currPos++;
                    } else {
                      s6 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c17); }
                    }
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parsews();
                      if (s7 === peg$FAILED) {
                        s7 = peg$c3;
                      }
                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 61) {
                          s8 = peg$c104;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c105); }
                        }
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parsews();
                          if (s9 === peg$FAILED) {
                            s9 = peg$c3;
                          }
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parseBinSimpleExpression();
                            if (s10 !== peg$FAILED) {
                              peg$reportedPos = s0;
                              s1 = peg$c217(s4, s10);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        }
      }

      return s0;
    }

    function peg$parseFunctionDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parsefunction();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefuncname();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parsefuncbody();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 3) === peg$c36) {
                    s7 = peg$c36;
                    peg$currPos += 3;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c37); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = [];
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = peg$currPos;
                    s8 = peg$c218(s1, s3, s5, s7);
                    if (s8) {
                      s8 = peg$c2;
                    } else {
                      s8 = peg$c0;
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c219(s1, s3, s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseLocalFunction() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c40) {
        s1 = peg$c40;
        peg$currPos += 5;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefunction();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parsefuncname();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsews();
                if (s6 === peg$FAILED) {
                  s6 = peg$c3;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsefuncbody();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsews();
                    if (s8 === peg$FAILED) {
                      s8 = peg$c3;
                    }
                    if (s8 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 3) === peg$c36) {
                        s9 = peg$c36;
                        peg$currPos += 3;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c37); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = [];
                      }
                      if (s9 !== peg$FAILED) {
                        peg$reportedPos = peg$currPos;
                        s10 = peg$c218(s3, s5, s7, s9);
                        if (s10) {
                          s10 = peg$c2;
                        } else {
                          s10 = peg$c0;
                        }
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c220(s3, s5, s7, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseFunctionExpression() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsefuncdef();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c221(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsefuncdef() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parsefunction();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefuncbody();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 3) === peg$c36) {
                s5 = peg$c36;
                peg$currPos += 3;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s5 === peg$FAILED) {
                s5 = [];
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = peg$currPos;
                s6 = peg$c222(s1, s3, s5);
                if (s6) {
                  s6 = peg$c2;
                } else {
                  s6 = peg$c0;
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c223(s1, s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefuncbody() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c182;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c183); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseparamlist();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsews();
            if (s4 === peg$FAILED) {
              s4 = peg$c3;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c120;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c121); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parsews();
                if (s7 === peg$FAILED) {
                  s7 = peg$c3;
                }
                if (s7 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 3) === peg$c193) {
                    s8 = peg$c193;
                    peg$currPos += 3;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c194); }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsews();
                    if (s9 === peg$FAILED) {
                      s9 = peg$c3;
                    }
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$c0;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$c0;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$c0;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
              }
              if (s5 === peg$FAILED) {
                s5 = peg$c3;
              }
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s6 = peg$c184;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c185); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsews();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseBlockStatement();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c224(s3, s5, s8);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c182;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c183); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsews();
          if (s2 === peg$FAILED) {
            s2 = peg$c3;
          }
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c193) {
              s3 = peg$c193;
              peg$currPos += 3;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c194); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsews();
              if (s4 === peg$FAILED) {
                s4 = peg$c3;
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s5 = peg$c184;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c185); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsews();
                  if (s6 === peg$FAILED) {
                    s6 = peg$c3;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseBlockStatement();
                    if (s7 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c225(s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }

      return s0;
    }

    function peg$parseparamlist() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseIdentifier();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c120;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsews();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseIdentifier();
              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c120;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c121); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsews();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseIdentifier();
                if (s7 !== peg$FAILED) {
                  s5 = [s5, s6, s7];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$c0;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c226(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 === peg$FAILED) {
          s1 = peg$c3;
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c227();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseUnaryExpression() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseunop();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 === peg$FAILED) {
          s2 = peg$c3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMemberExpression();
          if (s3 === peg$FAILED) {
            s3 = peg$parseSimpleExpression();
            if (s3 === peg$FAILED) {
              s3 = peg$parseExpression();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c228(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseIdentifier() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c229(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseLiteral() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c42) {
        s1 = peg$c42;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c46) {
          s1 = peg$c46;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c47); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c44) {
            s1 = peg$c44;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c45); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c230(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNumber();
        if (s1 !== peg$FAILED) {
          if (peg$c231.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c232); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 45) {
              s5 = peg$c150;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c151); }
            }
            if (s5 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 43) {
                s5 = peg$c152;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c153); }
              }
            }
            if (s5 === peg$FAILED) {
              s5 = peg$c3;
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c65.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c66); }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c65.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c66); }
                  }
                }
              } else {
                s6 = peg$c0;
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c0;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              s4 = input.substring(s3, peg$currPos);
            }
            s3 = s4;
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c233(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 48) {
            s1 = peg$c234;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c235); }
          }
          if (s1 !== peg$FAILED) {
            if (peg$c236.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c237); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = [];
              if (peg$c238.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c239); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c238.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c239); }
                  }
                }
              } else {
                s4 = peg$c0;
              }
              if (s4 !== peg$FAILED) {
                s4 = input.substring(s3, peg$currPos);
              }
              s3 = s4;
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c240(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseNumber();
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c241(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseString();
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c242(s1);
              }
              s0 = s1;
            }
          }
        }
      }

      return s0;
    }


      function loc() { return {start: { line: line(), column: column() } } }
      function range() { return [offset(), offset() + text().length]; }
      function listHelper(a,b,c) { return a == null ? [] : [a].concat(b.map(function(b) { return b[c || 2]; })); }
      function opt(name, def) { return name in options ? options[name] : def }

      function expandMultiStatements(list) {
        var out = [];
        for ( var i = 0; i < list.length; ++i ) {
            var value = list[i];
            if (value instanceof Array) out = out.concat(value);
            else out.push(value);
        }
        return out;
      }

      function wrapNode(obj, hasScope) {
        hasScope = !!hasScope 
        obj.loc = loc();
        obj.range = range();
        obj.hasScope = hasScope;
        obj.text = text();
        return obj;
      }

      function eUntermIfEmpty(what, type, end, start) {
        if ( what.length == 0 ) return eUnterminated(type, end, start);
        return true;
      }

      function eUnterminated(type, end, start) {
        var xline = start !== undefined ? start.loc.start.line : (line());
        var xcol = start !== undefined ? start.loc.start.column : (column());

        eMsg("`" + (end || "end") + "` expected (to close " + type + " at " + xline + ":" + xcol + ") at " + line() +  ":" + column() );
        return true;
      }

      function eMsg(why) {
        if ( !opt("loose", false) ) error(why);
        errors.push({msg: why, loc: loc(), range: range()});
        return true;
      }

      var opPrecedence = {
        "^": 10,
        "not": 9,
        "*": 8, "/": 8, "%": 8, "//": 8,
        "+": 7, "-": 7,
        "..": 6,
        "<": 5, ">": 5, ">=": 5, "<=": 5, "==": 5, "~=": 5,
        "and": 4,
        "or": 3
      }

      function precedenceClimber(tokens, lhs, min) {
        while ( true ) { 
            if ( tokens.length == 0 ) return lhs;
            var op = tokens[0];
            var prec = opPrecedence[op];
            if ( prec < min ) return lhs;
            tokens.shift();

            var rhs = tokens.shift();
            while ( true ) {
                var peek = tokens[0];
                if ( peek == null || opPrecedence[peek] <= prec ) break;
                rhs = precedenceClimber(tokens, rhs, opPrecedence[peek]);
            }

            lhs = bhelper.binaryExpression(op, lhs, rhs);
        }

      }

      var errors;

      function init() {
        errors = [];
      }

      var builder = {
        assignmentExpression: function(op, left, right) { return wrapNode({type: "AssignmentExpression", operator: op, left: left, right: right }); },
        binaryExpression: function(op, left, right) { return wrapNode({type: (op == '||' || op == '&&') ? "LogicalExpression" : "BinaryExpression", operator: op, left: left, right: right }); },
        blockStatement: function(body) { return wrapNode({ type: "BlockStatement", body: body}); },
        callExpression: function(callee, args) { return wrapNode({ type: "CallExpression", callee: callee, arguments: args}); },
        emptyStatement: function() { return wrapNode({ type: "EmptyStatement" }); },
        functionDeclaration: function(name, args, body, isGenerator, isExpression) {
            return wrapNode({type: "FunctionDeclaration", id: name, params: args, body: body, generator: isGenerator, expression: isExpression });
        },
        memberExpression: function(obj, prop, isComputed) { return wrapNode({ type:"MemberExpression", object: obj, property: prop, computed: isComputed }); },
        variableDeclaration: function(kind, decls) { return { type: "VariableDeclaration", declarations: decls, kind: opt("forceVar", true) ? "var" : kind } },
        functionExpression: function(name, args, body) { return { type: "FunctionExpression", name: name, body: body, params: args } },
        returnStatement: function(arg) { return wrapNode({type: "ReturnStatement", argument: arg}); },
        generatedReturnStatement: function(arg) { return wrapNode({type: "ReturnStatement", argument: arg, userCode: false}); }
      };

      var i = function(n) { return { type: "Identifier", name: n}; }
      var id = i;
      var tmpVarCtr = 0;

      function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
      }



      function finalize(ast) {
        if ( opt("loose", false) ) ast.errors = errors;
        
        if ( opt("useStrict", false) ) {
            ast.body.unshift({
                type: "ExpressionStatement",
                expression: { type: "Literal", value: "use strict" }
            });
        }

        if ( opt("noSharedObjects", true) ) return clone(ast);
        return ast;
      }

      var bhelper = {
        blockStatement: function(body) {
            return builder.blockStatement(expandMultiStatements(body));
        },
        tempName: function() {
            return i("__lua$tmpvar$" + (++tmpVarCtr));
        },
        tempVar: function(exp) {
            return { type: "VariableDeclarator", id: bhelper.tempName(), init: exp };
        },
        assign: function(target, exp) {
            var out = builder.assignmentExpression("=", target, exp);
            if ( target.type == "MemberExpression" && opt("luaOperators", false) ) {
                var prop = target.property;
                if ( !target.computed ) prop = {"type": "Literal", "value": prop.name, loc: prop.loc, range: prop.range };
                
                var helper;
                var nue = bhelper.translateExpressionIfNeeded(target.object);

                if ( target.object.type == "Identifier" ) helper = target.object.name;

                if ( helper === undefined ) {
                    nue = bhelper.luaOperator("indexAssign", nue, prop, exp);
                } else {
                    nue = bhelper.luaOperator("indexAssign", nue, prop, exp, {type:"Literal", value: helper});
                }

                nue = {type: "ConditionalExpression",test: nue, consequent: exp, alternate: out};

                out = nue;
            }
                
            return {
                type: "ExpressionStatement",
                expression: out
            };
        },
        encloseDecls: function(body /*, decls...*/) {
            var decls = Array.prototype.slice.call(arguments, 1);
            return bhelper.encloseDeclsEx.apply(this, [body, opt("encloseWithFunctions", true) ].concat(decls));
        },
        encloseDeclsEx: function(body, enclose /*, decls...*/) {
            var decls = Array.prototype.slice.call(arguments, 2);
            var vals = [];
            var names = [];
            for ( var k in decls ) {
                var v = decls[k];
                vals.push(v.init);
                names.push(v.id);
            }

            if ( enclose ) {
                return {
                    expression: builder.callExpression(
                        builder.functionExpression(null, names, bhelper.blockStatement(body)),
                        vals
                    ),
                    type: "ExpressionStatement"
                }
            } else {
                if ( decls.length < 1 ) return body;
                return bhelper.blockStatement([ builder.variableDeclaration("let", decls) ].concat(body));
            }
        },
        encloseDeclsUnpack: function(body, names, explist, force) {

            if ( force || opt("encloseWithFunctions", true) ) {
                return {
                    expression: builder.callExpression(
                        builder.memberExpression(
                            builder.functionExpression(null, names, builder.blockStatement(body)),
                            i("apply")
                        ),
                        [{type: "Literal", value: null}, bhelper.luaOperatorA("expandReturnValues", explist)]
                    ),
                    type: "ExpressionStatement"
                }
            } else {
                var decls = [];
                for ( var idx in names ) {
                    decls.push({
                        type: "VariableDeclarator",
                        id: names[idx],
                        init: idx.id
                    });
                }
                return bhelper.blockStatement([ 
                    builder.variableDeclaration("let", decls),
                    bhelper.bulkAssign(names, explist)
                    ].concat(body));
            }
        },
        bulkAssign: function(names, explist) {
            var temps = [];
            var body = [];
            for ( var i = 0; i < names.length; ++i ) {
                temps[i] = bhelper.tempName();
            }

            // If we are refrencing a previously set value in a bulk assign as a property
            // we want to use the old value to look up the index, so we will pull that from
            // the temp var passed in
            var extra = 0;
            for ( var i = 0; i < names.length; ++i ) {
                var exp = names[i];
                if ( exp.type == "MemberExpression" && exp.property.type == "Identifier" ) {
                    for ( var j = 0; j < i; ++j) {
                        if ( names[j].name == exp.property.name ) {
                            var holding = bhelper.tempName();
                            temps.unshift(holding);
                            explist.unshift(exp.property);
                            exp.property = holding;
                            ++extra;
                        }
                    }
                }
            }

            for ( var i = 0; i < names.length; ++i ) {
                body[i] = bhelper.assign(names[i], temps[i+extra]);
            }

            if ( names.length > 1 ) {
                return bhelper.encloseDeclsUnpack(body, temps, explist, true);
            } else {
                var value = explist[0];
                if ( value.type == "CallExpression" ) value = bhelper.luaOperator("oneValue", value);
                return bhelper.assign(names[0], value);
            }
            
        },
        luaOperator: function(op /*, args */) {
            if ( op == "oneValue" && opt("noMutliReturnSquish", false) ) return arguments[1];
            var o = builder.callExpression(
                builder.memberExpression(i("__lua"), i(op)), 
                Array.prototype.slice.call(arguments, 1)
            );
            o.internal = true;
            return o;
        },
        luaOperatorA: function(op, args) {
            var o = builder.callExpression(
                builder.memberExpression(i("__lua"), i(op)), 
                args
            );
            o.internal = true;
            return o;
        },
        binaryExpression: function(op, a, b) {
            if ( opt("luaOperators", false) && op != "and" && op != "or" ) {
                var map = {"+": "add", "-": "sub", "*": "mul", "/": "div", "//": "intdiv", "^": "pow", "%":"mod",
                    "..": "concat", "==": "eq", "<": "lt", "<=": "lte", ">": "gt", ">=": "gte", "~=": "ne",
                    "and": "and", "or": "or"
                };
                
                return bhelper.luaOperator(map[op], a, b);
            } else {

                if ( op == "~=" ) xop = "!=";
                else if ( op == ".." ) op = "+";
                else if ( op == "or" ) op = "||";
                else if ( op == "and" ) op = "&&";
                else if ( op == "//" ) op = "/";

                a = bhelper.luaOperator("oneValue", a);
                b = bhelper.luaOperator("oneValue", b);

                return builder.binaryExpression(op, a, b);
            }
        },
        callExpression: function(callee, args) {
            if ( opt("luaCalls", false) ) {
                var that = {"type": "ThisExpression" };
                if ( callee.type == "MemberExpression" ) that = {"type":"Literal", "value": null};
                var flags = 0;
                if ( callee.selfSuggar ) {
                    flags = flags | 1;
                }

                if ( opt('decorateLuaObjects', false) ) {
                    flags = flags | 2;
                }

                var flagso = {"type": "Literal", "value": flags};
                var helper = null;
                
                if ( callee.type == "Identifier" ) helper = callee.name;
                else if ( callee.type == "MemberExpression" && !callee.computed ) helper = callee.property.name;

                helper = {"type": "Literal", "value": helper};

                if ( callee.selfSuggar ) {
                    if ( callee.object.type == "Identifier" ) {
                        //Dont bother making a function if we are just an identifer.
                        var rcallee = bhelper.translateExpressionIfNeeded(callee)
                        return bhelper.luaOperator.apply(bhelper, ["call", flagso , rcallee, callee.object, helper].concat(args));

                    } else {
                        var tmp = bhelper.tempVar(bhelper.translateExpressionIfNeeded(callee.object));
                        
                        var rexpr = builder.memberExpression(tmp.id, callee.property, callee.computed);
                        var rcallee = bhelper.translateExpressionIfNeeded(rexpr);
                        var expr = bhelper.luaOperator.apply(bhelper, ["call", flagso, rcallee, tmp.id, helper].concat(args));
                        return result = bhelper.encloseDeclsEx([
                            builder.returnStatement(
                                expr
                            )
                        ], true, tmp).expression;

                    }
                } else {
                    var rcallee = bhelper.translateExpressionIfNeeded(callee)
                    if ( rcallee.type == "Identifier" && rcallee.name == "assert" ) {
                        args.push({type: "Literal", value: args[0].text || "?"})
                    }
                    return bhelper.luaOperator.apply(bhelper, ["call", flagso , rcallee, that, helper].concat(args));
                }
            } else {
                return builder.callExpression(callee, args);
            }
        },
        memberExpression: function(obj, prop, isComputed) {
            if ( opt("luaOperators", false) && !isComputed ) {
                var helper;
                if ( obj.type == "Identifier") helper = obj.name;

                if ( helper == undefined ) {
                    return bhelper.luaOperator("index", obj, prop);
                } else {
                    return bhelper.luaOperator("index", obj, prop, {type:"Literal", value: helper});
                }
            }
            return builder.memberExpression(obj, prop, isComputed);
        },
        translateExpressionIfNeeded: function(exp) {
            if ( !opt("luaOperators", false) ) return exp;
            if ( exp.type == "MemberExpression" ) {
                var prop = exp.property;
                if ( !exp.computed ) prop = {"type": "Literal", value: prop.name };
                var nu = bhelper.memberExpression(bhelper.translateExpressionIfNeeded(exp.object), prop, false);
                nu.origional = exp;
                nu.range = exp.range;
                nu.loc = exp.loc;
                return nu;
            }

            return exp;
        },
        injectRest: function(block, count) {
            block.unshift(builder.variableDeclaration("let", [
                    {
                        type: "VariableDeclarator", 
                        id: {type: "Identifier", name:"__lua$rest"},
                        userCode: false,
                        init: bhelper.luaOperator("rest", 
                            {type: "Identifier", name:"arguments"},
                            {type: "Literal", value:count}
                        )
                    }
                 ]));
        },
        valueProvdier: function(statement) {
            return builder.functionExpression(null, [], bhelper.blockStatement([
                builder.generatedReturnStatement(statement)
            ]));
        }
      }



    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

var env = {};
var __lua = (function() {

	// Yoinked from underscore.
	var isJSArray = Array.isArray || function(obj) { return toString.call(obj) === '[object Array]'; };

	function type(what) {
		if ( what === null || what === undefined ) return "nil";
		if ( isNaN(what) ) return "number";
		var t = typeof what;
		if ( t == "object" ) return "table";
		return t;
	}

	function numberForArith(n) {
		if ( type(n) == "number" ) return n;
		else if ( typeof n == "string" ) {
			n = parseInt(n);
			if ( !isNaN(n) ) return n;

		}

		throw "attempt to perform arithmetic on a " +  type(n) + " value: " + n;
	}

	function makeString(a) { 
		a = oneValue(a);

		var mtf = lookupMetaTable(a, "__tostring");
		if ( mtf !== null ) return mtf(a);

		if ( a === undefined || a === null ) return "nil";
		if ( a instanceof LuaTable ) {
			return "table: 0x" + a.id;
		} else if ( typeof a == "number" ) {
			if ( ~~a == a ) return a.toString();
			var rep = a.toPrecision();
			if ( rep.length > 14 ) return a.toPrecision(14);
			return rep;
		}
		return "" + a;
	}

	function add(a,b) {
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__add");
		if ( mtf !== null ) return mtf(a,b);

		return numberForArith(a) + numberForArith(b); 
	}

	function sub(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__sub");
		if ( mtf !== null ) return mtf(a,b);

		return numberForArith(a) - numberForArith(b);
	}

	function mul(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__mul");
		if ( mtf !== null ) return mtf(a,b);

		return numberForArith(a) * numberForArith(b);
	}

	function div(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__div");
		if ( mtf !== null ) return mtf(a,b);

		return numberForArith(a) / numberForArith(b);
	}

	function intdiv(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__idiv");
		if ( mtf !== null ) return mtf(a,b);

		return ~~(numberForArith(a) / numberForArith(b));
	}

	function mod(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__mod");
		if ( mtf !== null ) return mtf(a,b);

		return numberForArith(a) % numberForArith(b);
	}

	function pow(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__pow");
		if ( mtf !== null ) return mtf(a,b);

		return Math.pow(numberForArith(a),numberForArith(b)); 
	}

	function concat(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__concat");
		if ( mtf !== null ) return mtf(a,b);
		if ( a === null || a === undefined || b === null || b === undefined ) throw "attempt to concatenate a nil value";

		return  makeString(a) + makeString(b); 
	}

	function lte(a,b) {
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__le");
		if ( mtf !== null ) return mtf(a,b);

		return a <= b; 
	}

	function lt(a,b) {
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__lt");
		if ( mtf !== null ) return mtf(a,b);

		return a < b; 
	}

	function gte(a,b) { return lte(b,a); }
	function gt(a,b) { return lt(b,a); }


	function forcomp(d,a,b) { 
		if ( d > 0 ) return a <= b; 
		else if ( d < 0 ) return b <= a;
		else return false;
	}

	
	function eq(a,b) { 
		a = oneValue(a); b = oneValue(b);

		var mtf = lookupMetaTableBin(a, b, "__eq");
		if ( mtf !== null ) return mtf(a,b);


		if ( a === null || a === undefined ) {
			return ( b === null || b === undefined );
		}
		if ( a === b ) return true;
		return false;
	}
	
	function ne(a,b) { return !eq(a,b); }

	function count(a) { 
		if ( a instanceof LuaTable ) {
			var cnt = 0;
			while ( a.numeric[cnt] !== undefined ) ++cnt;
			return cnt;
		}
		return a.length;
	}

	function and(a,b) { return a && b; }
	function or(a,b) { return a || b; }

	function call(flags, what, that, helper /*, args... */ ) {
		var injectSelf = !!(flags & 1); 
		var detectLua = !!(flags & 2); 

		if ( what === null || what === undefined ) {
			if ( helper === undefined ) throw "attempt to call a " + type(what) + " value";
			else throw "attempt to call '" + helper + "' (a " + type(what) + " value)"; 
		}

		var args = expand(Array.prototype.slice.call(arguments, 4), true);

		var doInject = true;

		if ( detectLua ) {
			doInject = what.__luaType == "function";
		}

		if ( injectSelf && doInject ) {
			args.unshift(that);
		}

		if ( detectLua && what.__luaType != "function" ) {
			var args2 = [];
			for ( var i = 0; i < args.length; ++i ) {
				var a = args[i];
				if ( a instanceof LuaTable ) {
					if ( a.numeric.length == 0 ) args2[i] = a.hash;
					else if ( Object.keys(a.hash).length == 0 ) args2[i] = a.numeric;
					else args2[i] = a;
				} else {
					args2[i] = a;
				}
			}
			args = args2;
		}

		return what.apply(that, args);
	}

	function rest(args, cnt) {
		var out = Object.create(LuaReturnValues.prototype, {});
		out.values = Array.prototype.slice.call(args, cnt);
		return out;
	}

	var id = 0;
	function LuaTable() {
		this.id = ++id;
		this.numeric = [];
		this.hash = {};
	}

	Object.defineProperty(LuaTable.prototype, "__luaType",  {value: "table",  enumerable: false});
	Object.defineProperty(LuaTable.prototype, "toString",  {value: function() {
		return makeString(this);
	},  enumerable: false});

	function makeTable(t, allowExpand /*, numeric ... */) {
		var out = new LuaTable();

		out.numeric = expand(Array.prototype.slice.call(arguments, 2), allowExpand);
		if ( !t ) return out;

		if ( isJSArray(t) ) {
			for ( var i = 0; i < t.length; ++i ) {
				var pair = t[i];
				var key = pair[0];
				var val = pair[1];
				if ( typeof key == "number" ) {
					out.numeric[key - 1] = val;
				} else {
					out.hash[key] = val;
				}
			}
		} else {
			for ( var k in t ) {
				out.hash[k] = t[k];
			}
		}

		return out;
	}

	function makeFunction(f) {
		f.__luaType = "function";
		return f;
	}

	function LuaReturnValues(v) {
		this.values = v;
	}

	Object.defineProperty(LuaReturnValues.prototype, "__luaType",  {value: "returnValues",  enumerable: false});

	function lookupMetaTable(table, entry) {
		if ( table instanceof LuaTable ) {
			if ( table.__metatable === undefined ) return null;

			var idx = table.__metatable.hash[entry];
			if ( idx === null || idx === undefined ) return null;

			return idx;
		}

		return null;
	}

	function lookupMetaTableBin(a, b, entry) {
		var mt = lookupMetaTable(a, entry);
		if ( mt == null ) return lookupMetaTable(b, entry);
		return mt;
	}

	function index(table, prop, helper) {
		if ( table === null || table === undefined || typeof table == "number" ) {
			if ( helper == undefined ) {
				throw "attempt to index a " + type(table) + " value";
			} else {
				throw "attempt to index '" + helper + "' (a " + type(table) + " value)";
			}
		} else if ( table instanceof LuaTable ) {
			var val;
			if ( typeof prop == "number") val = table.numeric[prop-1];
			else val = table.hash[prop];

			if ( val !== null & val !== undefined ) return val;

			var idxfx = lookupMetaTable(table, "__index");
			if ( idxfx == null ) return null;

			if ( typeof idxfx == "function" ) return oneValue(idxfx(table, prop));
			return index(idxfx, prop);
		} else if ( isJSArray(table) ) {
			return table[prop - 1];
		} else if ( typeof table == "string" ) {
			var sidx = tonumber(prop);
			if ( sidx < 0 ) sidx += (table.length + 1);
			return table[sidx-1];
		} else {
			return table[prop];
		}
	}

	function indexAssign(table, prop, value, helper) {

		if ( table === null || table === undefined || typeof table == "number" ) {
			if ( helper == undefined ) {
				throw "attempt to index a " + type(table) + " value";
			} else {
				throw "attempt to index '" + helper + "' (a " + type(table) + " value)";
			}
		}

		if ( table instanceof LuaTable ) {
			var val;

			if ( prop === undefined || prop === null ) throw "table index is nil";

			if ( typeof prop == "number" ) val = table.numeric[prop-1];
			else val = table.hash[prop];

			if ( val !== null & val !== undefined ) {
				if ( typeof prop == "number") table.numeric[prop-1] = value;
				else table.hash[prop] = value;
				return true;
			}

			if ( table.__metatable === undefined ) {
				if ( typeof prop == "number") table.numeric[prop-1] = value;
				else table.hash[prop] = value;
				return true;
			}



			var idx = table.__metatable.__newindex;
			if ( idx === null || idx === undefined ) {
				if ( typeof pop == "number") table.numeric[prop] = value;
				else table.hash[prop] = value;
				return true;	
			}

			if ( typeof idx == "function" ) idx(table, prop, value);
			else indexAssign(idx, prop, value);

			return true;


		} else if ( typeof table == "string" ) { 
			throw "attempt to index string value";
		} else if ( isJSArray(table) ) {
			table[prop-1] = value;
			return true;
		} else {
			return false;
		}
	}

	function oneValue(v) {
		if ( v instanceof LuaReturnValues ) return v.values[0];
		return v;
	}

	function makeMultiReturn() {
		return new LuaReturnValues(expand(arguments, true));
	}

	function expand(what, allowExpand) {
		if ( allowExpand === undefined ) allowExpand = false;

		var out = [];
		for ( var idx in what ) {
			var v = what[idx];
			if ( v instanceof LuaReturnValues ) {
				for ( var i in v.values ) {
					out.push(v.values[i]);
					if ( idx < what.length - 1 || !allowExpand) break;
				}
			} else {
				out.push(v);
			}
		}
		return out;
	}

	function expandReturnValues() {
		return expand(arguments, true);
	}

	function pcall(what /*, args... */ ) {
		try {
			var result = expand([what.apply(this, Array.prototype.slice.call(arguments, 1))], true);
			result.unshift(true);
			return makeMultiReturn.apply(__lua, result);
		} catch ( e ) {
			return makeMultiReturn(false, e);
		}
	}

	function isTable(a) { return a instanceof LuaTable; }

	function mark(o) {
		var seen = [];
		function domark(o) {
			if ( o in seen ) return;
			seen.push(o);
			if ( typeof o == "object" ) for ( var idx in o ) domark(o[idx]);
			else if ( typeof o == "function" ) o.__luaType = "function";
			
		}
		domark(o);
	}

	return {
		add: add,
		sub: sub,
		mul: mul,
		div: div,
		intdiv: intdiv,
		mod: mod,
		call: call,
		lte: lte,
		lt: lt,
		ne: ne,
		gt: gt,
		gte: gte,
		eq: eq,
		index: index,
		indexAssign: indexAssign,
		concat: concat,
		makeTable: makeTable,
		makeFunction: makeFunction,
		expandReturnValues: expandReturnValues,
		makeMultiReturn: makeMultiReturn,
		count: count,
		and: and,
		or: or,
		expand: expand,
		rest: rest,
		pcall: pcall,
		type: type,
		pow: pow,
		isTable: isTable,
		mark: mark,
		forcomp: forcomp,
		makeString: makeString,
		oneValue: oneValue,
		lookupMetaTable: lookupMetaTable,
		isJSArray: isJSArray
	};

})();


this.__lua = __lua;

env.string = {
	byte: function byte(s,i,j) {
		var chars = env.string.sub(s,i,j);
		var out = [];
		for ( var i = 0; i < chars.length; ++i ) out[i] = chars.charCodeAt(i);
		return __lua.makeMultiReturn.apply(__lua, out);
	},
	char: function char(/* arguments */) {
		var out = "";
		for ( var i = 0; i < arguments.length; ++i ) {
			out += String.fromCharCode(arguments[i]|0); 
		}
		return out;

	},
	dump: null,
	find: null,
	gmatch: null,
	gsub: null,
	len: function len(s) { return ("" + s).length; },
	lower: function lower(s) { return ("" + s).toLowerCase(); },
	match: null,
	reverse: function(s) {
		return ("" + s).split("").reverse().join("");
	},
	sub: function(s, i, j) {
		if ( i === undefined || i === null ) i = 1;
		if ( j === undefined || j === null ) j = s.length;
		if ( i < 0 ) i += (s.length+1);
		if ( j < 0 ) j += (s.length+1);

		return __lua.makeString(s).substring(i-1,j);

	},
	upper: function lower(s) { return ("" + s).toUpperCase(); },
	format: function format(format, etc) {
		var arg = arguments;
		var i = 1;
		return format.replace(/%([0-9.]+)?([%sfdgi])/g, function (m, w, t) {
			var r = null;
			if ( t == "%" ) return "%";
			else if ( t == "s") r = arg[i++];
			else if ( t == "d") r = parseInt(arg[i++]);
			else if ( t == "i") r = parseInt(arg[i++]);
			else if ( t == "f" ) r = arg[i++].toFixed(parseFloat(m[1]) || 6);
			else r = arg[i++]; 
			r = "" + r;
			if ( parseInt(w) ) {
				var extra = parseInt(w) - r.length;
				if ( extra > 0 ) r = new Array(extra).join(" ") + r;
			}
			return r;
		});
	}

};

env.table = {
	concat: null,
	insert: null,
	pack: function(/* arguments */) {
		var obj = {}
		for ( var i = 0; i < arguments.length; ++i) {
			obj[("" + (i + 1))] = arguments[i];
		}
		return __lua.makeTable(obj);
	},
	remove: null,
	sort: function sort(table) { return table; },
	unpack: function(table,i,j) {
		if ( i === undefined || i === null ) i = 1;
		if ( j === undefined || j === null ) j = __lua.count(table);

		var arr = [];
		if ( __lua.isTable(table) ) {
			for ( var a = i; a <= j; ++a ) {
				arr.push(table.numeric[a]);
			}
		} else {
			for ( var a = i; a <= j; ++a ) {
				arr.push(table[a]);
			}			
		}

		return __lua.makeMultiReturn.apply(__lua, arr);


	}

};

env.unpack = env.table.unpack;

env.tonumber = function(n) {
	return parseInt(n);
};

env.tostring = function(n) {
	return __lua.makeString(n);
};

env.os = {
	clock: null,
	date: null,
	difftime: function difftime(t1,t2) { return t2 - t1; },
	execute: null,
	exit: null,
	time: function time(table) {
		if ( table == null ) return new Date().getTime();
		throw "Time given a table not implemented yet.";
	}
};

env.io = {
	write: function() { env.print(arguments); }
};

env.error = function error(s) { throw s; };

env.assert = function assert(what, msg, code) {
	if ( code === undefined ) {
		code = msg;
		msg = undefined;
	}

	if ( !!what ) return what;

	throw("Assert Failed!! " + code);
};

env.type = function type(what) {
	return __lua.type(what);
};


env.pairs = function pairs(table) {

	var mtf = __lua.lookupMetaTable(table, "__pairs");
	if ( mtf !== null ) return mtf(table);

	var list = [];
	if ( __lua.isTable(table) ) {
		for ( var i = 0; i < table.numeric.length; ++i ) list.push([i + 1, i, table.numeric]);
		for ( var idx in table.hash ) list.push([idx, idx, table.hash]);
	} else if ( __lua.isJSArray(table) ) {
		for ( var i = 0; i < table.length; ++i ) list.push([i + 1, i, table]);
	} else {
		var keys = Object.keys(table);
		for ( var idx in keys ) list.push([keys[idx], keys[idx], table]);
	}

	return __lua.makeMultiReturn(function(handle, cur) {
		if ( handle.length < 1 ) return null;
		var nfo = handle.shift();
		var k = nfo[0];
		var v = nfo[2][nfo[1]];
		return __lua.makeMultiReturn(k,v);
	}, list, null);
};

env.ipairs = function ipairs(table) {

	var mtf = __lua.lookupMetaTable(table, "__ipairs");
	if ( mtf !== null ) return mtf(table);

	return __lua.makeMultiReturn(function ipairsitr(table, cur) {
		cur = cur + 1;
		if ( __lua.isJSArray(table) ) {
			if ( table.length < cur ) return null;
			return __lua.makeMultiReturn(cur, table[cur-1]);
		} else if ( __lua.isTable(table) ) {
			if ( table.numeric[cur-1] === null || table.numeric[cur-1] === undefined ) return null;
			return __lua.makeMultiReturn(cur, table.numeric[cur-1]);
		} else {
			return table[cur-1];
		}
	}, table, 0);
};

env.next = function next(table, cur) {
	if ( __lua.isTable(table) ) {
		var list = [];
		for ( var i = 0; i < table.numeric.length; ++i ) list.push([i + 1, table.numeric[i]]);
		for ( var tidx in table.hash ) list.push([tidx, table.hash[tidx]]);
		var trigger = false;
		for ( var i = 0; i < list.length; ++i ) {
			var itm = list[i];
			if ( cur === null || cur === undefined || trigger ) {
				if ( itm[1] !== undefined && itm[1] !== null )
					return __lua.makeMultiReturn(itm[0], itm[1]);
			}
			if ( cur === itm[0] ) trigger = true;
		}

		return null;
	} else {
		var listk = Object.keys(table);
		var trigger = false;
		for ( var i = 0; i < listk.length; ++i ) {
			var idx = listk[i];
			var sidx = idx;
			if ( typeof sidx == "number" ) sidx = sidx = 1;
			if ( cur === null || cur === undefined || trigger ) return __lua.makeMultiReturn(idx, table[sidx]);
			if ( cur === idx ) trigger = true;
		}
		return null;
	}
};

env.print = function print() { console.log.apply(console, arguments); };
env.pcall = this.__lua.pcall;

env.rawequals = function rawequals(a,b) { return a == b; };
env.rawget = function rawget(table, prop) { 
	if ( table instanceof LuaTable ) {
		if ( typeof prop == "number" ) return table.numeric[prop - 1];
		else return table.hash[prop];
	}
	return table[prop]; 
};
env.rawset = function rawset(table, prop, val) { 
	if ( table instanceof LuaTable ) {
		if ( typeof prop == "number" ) return table.numeric[prop - 1] = val;
		else return table.hash[prop] = val;
	}
	return table[prop] = val; 
};

env.something = function something(table) {
	var array = [];
	var idx = 1;
	while ( table[idx] !== undefined ) {
		array.push(table[idx]);
		++idx;
	}
	return __lua.makeMultiReturn.apply(__lua, array);
};
env.math = Math;

env.setmetatable = function setmetatable(target, meta) {

	Object.defineProperty(target, "__metatable", {value: meta, enumerable: false, configurable: true });
	return target;
};

env.getmetatable = function getmetatable(taget, meta) {
	return taget.__metatable;
};

var reduce = function reduce(arr, op) {
	if ( arr.length < 1 ) return undefined;
	var val = arr[0];
	for ( var i = 1; i < arr.length; ++i ) {
		val = op(val, arr[i]);
	}
	return val;
};

env.bit32 = {
	band: function band() { return reduce(arguments, function(a,b) { return a & b; }); },
	bor: function bor() { return reduce(arguments, function(a,b) { return a | b; }); },
	bxor: function bxor() { return reduce(arguments, function(a,b) { return a | b; }); },

	rshift: function rshift(b, disp) { return b >> disp; }
};

env.require = function require(what) {
	if ( what == "bit" ) return env.bit32;
	if ( what == "bit32" ) return env.bit32;
	throw "Module " + waht + " not found";
};

__lua.mark(env);
__lua.env = env;
for ( var idx in env ) this[idx] = env[idx];



/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var fs = __webpack_require__(93);
var path = __webpack_require__(94);

var str = void 0;

if (fs.readFileSync) str = fs.readFileSync(path.join(__dirname, 'node_modules', 'lua2js', 'stdlib.js'), 'utf8');else str = __webpack_require__(115);

module.exports = str.replace(/^var pythonRuntime = module.exports/, 'var __pythonRuntime');
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = "var env = {};\nvar __lua = (function() {\n\n\t// Yoinked from underscore.\n\tvar isJSArray = Array.isArray || function(obj) { return toString.call(obj) === '[object Array]'; };\n\n\tfunction type(what) {\n\t\tif ( what === null || what === undefined ) return \"nil\";\n\t\tif ( isNaN(what) ) return \"number\";\n\t\tvar t = typeof what;\n\t\tif ( t == \"object\" ) return \"table\";\n\t\treturn t;\n\t}\n\n\tfunction numberForArith(n) {\n\t\tif ( type(n) == \"number\" ) return n;\n\t\telse if ( typeof n == \"string\" ) {\n\t\t\tn = parseInt(n);\n\t\t\tif ( !isNaN(n) ) return n;\n\n\t\t}\n\n\t\tthrow \"attempt to perform arithmetic on a \" +  type(n) + \" value: \" + n;\n\t}\n\n\tfunction makeString(a) { \n\t\ta = oneValue(a);\n\n\t\tvar mtf = lookupMetaTable(a, \"__tostring\");\n\t\tif ( mtf !== null ) return mtf(a);\n\n\t\tif ( a === undefined || a === null ) return \"nil\";\n\t\tif ( a instanceof LuaTable ) {\n\t\t\treturn \"table: 0x\" + a.id;\n\t\t} else if ( typeof a == \"number\" ) {\n\t\t\tif ( ~~a == a ) return a.toString();\n\t\t\tvar rep = a.toPrecision();\n\t\t\tif ( rep.length > 14 ) return a.toPrecision(14);\n\t\t\treturn rep;\n\t\t}\n\t\treturn \"\" + a;\n\t}\n\n\tfunction add(a,b) {\n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__add\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn numberForArith(a) + numberForArith(b); \n\t}\n\n\tfunction sub(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__sub\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn numberForArith(a) - numberForArith(b);\n\t}\n\n\tfunction mul(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__mul\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn numberForArith(a) * numberForArith(b);\n\t}\n\n\tfunction div(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__div\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn numberForArith(a) / numberForArith(b);\n\t}\n\n\tfunction intdiv(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__idiv\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn ~~(numberForArith(a) / numberForArith(b));\n\t}\n\n\tfunction mod(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__mod\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn numberForArith(a) % numberForArith(b);\n\t}\n\n\tfunction pow(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__pow\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn Math.pow(numberForArith(a),numberForArith(b)); \n\t}\n\n\tfunction concat(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__concat\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\t\tif ( a === null || a === undefined || b === null || b === undefined ) throw \"attempt to concatenate a nil value\";\n\n\t\treturn  makeString(a) + makeString(b); \n\t}\n\n\tfunction lte(a,b) {\n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__le\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn a <= b; \n\t}\n\n\tfunction lt(a,b) {\n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__lt\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\t\treturn a < b; \n\t}\n\n\tfunction gte(a,b) { return lte(b,a); }\n\tfunction gt(a,b) { return lt(b,a); }\n\n\n\tfunction forcomp(d,a,b) { \n\t\tif ( d > 0 ) return a <= b; \n\t\telse if ( d < 0 ) return b <= a;\n\t\telse return false;\n\t}\n\n\t\n\tfunction eq(a,b) { \n\t\ta = oneValue(a); b = oneValue(b);\n\n\t\tvar mtf = lookupMetaTableBin(a, b, \"__eq\");\n\t\tif ( mtf !== null ) return mtf(a,b);\n\n\n\t\tif ( a === null || a === undefined ) {\n\t\t\treturn ( b === null || b === undefined );\n\t\t}\n\t\tif ( a === b ) return true;\n\t\treturn false;\n\t}\n\t\n\tfunction ne(a,b) { return !eq(a,b); }\n\n\tfunction count(a) { \n\t\tif ( a instanceof LuaTable ) {\n\t\t\tvar cnt = 0;\n\t\t\twhile ( a.numeric[cnt] !== undefined ) ++cnt;\n\t\t\treturn cnt;\n\t\t}\n\t\treturn a.length;\n\t}\n\n\tfunction and(a,b) { return a && b; }\n\tfunction or(a,b) { return a || b; }\n\n\tfunction call(flags, what, that, helper /*, args... */ ) {\n\t\tvar injectSelf = !!(flags & 1); \n\t\tvar detectLua = !!(flags & 2); \n\n\t\tif ( what === null || what === undefined ) {\n\t\t\tif ( helper === undefined ) throw \"attempt to call a \" + type(what) + \" value\";\n\t\t\telse throw \"attempt to call '\" + helper + \"' (a \" + type(what) + \" value)\"; \n\t\t}\n\n\t\tvar args = expand(Array.prototype.slice.call(arguments, 4), true);\n\n\t\tvar doInject = true;\n\n\t\tif ( detectLua ) {\n\t\t\tdoInject = what.__luaType == \"function\";\n\t\t}\n\n\t\tif ( injectSelf && doInject ) {\n\t\t\targs.unshift(that);\n\t\t}\n\n\t\tif ( detectLua && what.__luaType != \"function\" ) {\n\t\t\tvar args2 = [];\n\t\t\tfor ( var i = 0; i < args.length; ++i ) {\n\t\t\t\tvar a = args[i];\n\t\t\t\tif ( a instanceof LuaTable ) {\n\t\t\t\t\tif ( a.numeric.length == 0 ) args2[i] = a.hash;\n\t\t\t\t\telse if ( Object.keys(a.hash).length == 0 ) args2[i] = a.numeric;\n\t\t\t\t\telse args2[i] = a;\n\t\t\t\t} else {\n\t\t\t\t\targs2[i] = a;\n\t\t\t\t}\n\t\t\t}\n\t\t\targs = args2;\n\t\t}\n\n\t\treturn what.apply(that, args);\n\t}\n\n\tfunction rest(args, cnt) {\n\t\tvar out = Object.create(LuaReturnValues.prototype, {});\n\t\tout.values = Array.prototype.slice.call(args, cnt);\n\t\treturn out;\n\t}\n\n\tvar id = 0;\n\tfunction LuaTable() {\n\t\tthis.id = ++id;\n\t\tthis.numeric = [];\n\t\tthis.hash = {};\n\t}\n\n\tObject.defineProperty(LuaTable.prototype, \"__luaType\",  {value: \"table\",  enumerable: false});\n\tObject.defineProperty(LuaTable.prototype, \"toString\",  {value: function() {\n\t\treturn makeString(this);\n\t},  enumerable: false});\n\n\tfunction makeTable(t, allowExpand /*, numeric ... */) {\n\t\tvar out = new LuaTable();\n\n\t\tout.numeric = expand(Array.prototype.slice.call(arguments, 2), allowExpand);\n\t\tif ( !t ) return out;\n\n\t\tif ( isJSArray(t) ) {\n\t\t\tfor ( var i = 0; i < t.length; ++i ) {\n\t\t\t\tvar pair = t[i];\n\t\t\t\tvar key = pair[0];\n\t\t\t\tvar val = pair[1];\n\t\t\t\tif ( typeof key == \"number\" ) {\n\t\t\t\t\tout.numeric[key - 1] = val;\n\t\t\t\t} else {\n\t\t\t\t\tout.hash[key] = val;\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tfor ( var k in t ) {\n\t\t\t\tout.hash[k] = t[k];\n\t\t\t}\n\t\t}\n\n\t\treturn out;\n\t}\n\n\tfunction makeFunction(f) {\n\t\tf.__luaType = \"function\";\n\t\treturn f;\n\t}\n\n\tfunction LuaReturnValues(v) {\n\t\tthis.values = v;\n\t}\n\n\tObject.defineProperty(LuaReturnValues.prototype, \"__luaType\",  {value: \"returnValues\",  enumerable: false});\n\n\tfunction lookupMetaTable(table, entry) {\n\t\tif ( table instanceof LuaTable ) {\n\t\t\tif ( table.__metatable === undefined ) return null;\n\n\t\t\tvar idx = table.__metatable.hash[entry];\n\t\t\tif ( idx === null || idx === undefined ) return null;\n\n\t\t\treturn idx;\n\t\t}\n\n\t\treturn null;\n\t}\n\n\tfunction lookupMetaTableBin(a, b, entry) {\n\t\tvar mt = lookupMetaTable(a, entry);\n\t\tif ( mt == null ) return lookupMetaTable(b, entry);\n\t\treturn mt;\n\t}\n\n\tfunction index(table, prop, helper) {\n\t\tif ( table === null || table === undefined || typeof table == \"number\" ) {\n\t\t\tif ( helper == undefined ) {\n\t\t\t\tthrow \"attempt to index a \" + type(table) + \" value\";\n\t\t\t} else {\n\t\t\t\tthrow \"attempt to index '\" + helper + \"' (a \" + type(table) + \" value)\";\n\t\t\t}\n\t\t} else if ( table instanceof LuaTable ) {\n\t\t\tvar val;\n\t\t\tif ( typeof prop == \"number\") val = table.numeric[prop-1];\n\t\t\telse val = table.hash[prop];\n\n\t\t\tif ( val !== null & val !== undefined ) return val;\n\n\t\t\tvar idxfx = lookupMetaTable(table, \"__index\");\n\t\t\tif ( idxfx == null ) return null;\n\n\t\t\tif ( typeof idxfx == \"function\" ) return oneValue(idxfx(table, prop));\n\t\t\treturn index(idxfx, prop);\n\t\t} else if ( isJSArray(table) ) {\n\t\t\treturn table[prop - 1];\n\t\t} else if ( typeof table == \"string\" ) {\n\t\t\tvar sidx = tonumber(prop);\n\t\t\tif ( sidx < 0 ) sidx += (table.length + 1);\n\t\t\treturn table[sidx-1];\n\t\t} else {\n\t\t\treturn table[prop];\n\t\t}\n\t}\n\n\tfunction indexAssign(table, prop, value, helper) {\n\n\t\tif ( table === null || table === undefined || typeof table == \"number\" ) {\n\t\t\tif ( helper == undefined ) {\n\t\t\t\tthrow \"attempt to index a \" + type(table) + \" value\";\n\t\t\t} else {\n\t\t\t\tthrow \"attempt to index '\" + helper + \"' (a \" + type(table) + \" value)\";\n\t\t\t}\n\t\t}\n\n\t\tif ( table instanceof LuaTable ) {\n\t\t\tvar val;\n\n\t\t\tif ( prop === undefined || prop === null ) throw \"table index is nil\";\n\n\t\t\tif ( typeof prop == \"number\" ) val = table.numeric[prop-1];\n\t\t\telse val = table.hash[prop];\n\n\t\t\tif ( val !== null & val !== undefined ) {\n\t\t\t\tif ( typeof prop == \"number\") table.numeric[prop-1] = value;\n\t\t\t\telse table.hash[prop] = value;\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tif ( table.__metatable === undefined ) {\n\t\t\t\tif ( typeof prop == \"number\") table.numeric[prop-1] = value;\n\t\t\t\telse table.hash[prop] = value;\n\t\t\t\treturn true;\n\t\t\t}\n\n\n\n\t\t\tvar idx = table.__metatable.__newindex;\n\t\t\tif ( idx === null || idx === undefined ) {\n\t\t\t\tif ( typeof pop == \"number\") table.numeric[prop] = value;\n\t\t\t\telse table.hash[prop] = value;\n\t\t\t\treturn true;\t\n\t\t\t}\n\n\t\t\tif ( typeof idx == \"function\" ) idx(table, prop, value);\n\t\t\telse indexAssign(idx, prop, value);\n\n\t\t\treturn true;\n\n\n\t\t} else if ( typeof table == \"string\" ) { \n\t\t\tthrow \"attempt to index string value\";\n\t\t} else if ( isJSArray(table) ) {\n\t\t\ttable[prop-1] = value;\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tfunction oneValue(v) {\n\t\tif ( v instanceof LuaReturnValues ) return v.values[0];\n\t\treturn v;\n\t}\n\n\tfunction makeMultiReturn() {\n\t\treturn new LuaReturnValues(expand(arguments, true));\n\t}\n\n\tfunction expand(what, allowExpand) {\n\t\tif ( allowExpand === undefined ) allowExpand = false;\n\n\t\tvar out = [];\n\t\tfor ( var idx in what ) {\n\t\t\tvar v = what[idx];\n\t\t\tif ( v instanceof LuaReturnValues ) {\n\t\t\t\tfor ( var i in v.values ) {\n\t\t\t\t\tout.push(v.values[i]);\n\t\t\t\t\tif ( idx < what.length - 1 || !allowExpand) break;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tout.push(v);\n\t\t\t}\n\t\t}\n\t\treturn out;\n\t}\n\n\tfunction expandReturnValues() {\n\t\treturn expand(arguments, true);\n\t}\n\n\tfunction pcall(what /*, args... */ ) {\n\t\ttry {\n\t\t\tvar result = expand([what.apply(this, Array.prototype.slice.call(arguments, 1))], true);\n\t\t\tresult.unshift(true);\n\t\t\treturn makeMultiReturn.apply(__lua, result);\n\t\t} catch ( e ) {\n\t\t\treturn makeMultiReturn(false, e);\n\t\t}\n\t}\n\n\tfunction isTable(a) { return a instanceof LuaTable; }\n\n\tfunction mark(o) {\n\t\tvar seen = [];\n\t\tfunction domark(o) {\n\t\t\tif ( o in seen ) return;\n\t\t\tseen.push(o);\n\t\t\tif ( typeof o == \"object\" ) for ( var idx in o ) domark(o[idx]);\n\t\t\telse if ( typeof o == \"function\" ) o.__luaType = \"function\";\n\t\t\t\n\t\t}\n\t\tdomark(o);\n\t}\n\n\treturn {\n\t\tadd: add,\n\t\tsub: sub,\n\t\tmul: mul,\n\t\tdiv: div,\n\t\tintdiv: intdiv,\n\t\tmod: mod,\n\t\tcall: call,\n\t\tlte: lte,\n\t\tlt: lt,\n\t\tne: ne,\n\t\tgt: gt,\n\t\tgte: gte,\n\t\teq: eq,\n\t\tindex: index,\n\t\tindexAssign: indexAssign,\n\t\tconcat: concat,\n\t\tmakeTable: makeTable,\n\t\tmakeFunction: makeFunction,\n\t\texpandReturnValues: expandReturnValues,\n\t\tmakeMultiReturn: makeMultiReturn,\n\t\tcount: count,\n\t\tand: and,\n\t\tor: or,\n\t\texpand: expand,\n\t\trest: rest,\n\t\tpcall: pcall,\n\t\ttype: type,\n\t\tpow: pow,\n\t\tisTable: isTable,\n\t\tmark: mark,\n\t\tforcomp: forcomp,\n\t\tmakeString: makeString,\n\t\toneValue: oneValue,\n\t\tlookupMetaTable: lookupMetaTable,\n\t\tisJSArray: isJSArray\n\t};\n\n})();\n\n\nthis.__lua = __lua;\n\nenv.string = {\n\tbyte: function byte(s,i,j) {\n\t\tvar chars = env.string.sub(s,i,j);\n\t\tvar out = [];\n\t\tfor ( var i = 0; i < chars.length; ++i ) out[i] = chars.charCodeAt(i);\n\t\treturn __lua.makeMultiReturn.apply(__lua, out);\n\t},\n\tchar: function char(/* arguments */) {\n\t\tvar out = \"\";\n\t\tfor ( var i = 0; i < arguments.length; ++i ) {\n\t\t\tout += String.fromCharCode(arguments[i]|0); \n\t\t}\n\t\treturn out;\n\n\t},\n\tdump: null,\n\tfind: null,\n\tgmatch: null,\n\tgsub: null,\n\tlen: function len(s) { return (\"\" + s).length; },\n\tlower: function lower(s) { return (\"\" + s).toLowerCase(); },\n\tmatch: null,\n\treverse: function(s) {\n\t\treturn (\"\" + s).split(\"\").reverse().join(\"\");\n\t},\n\tsub: function(s, i, j) {\n\t\tif ( i === undefined || i === null ) i = 1;\n\t\tif ( j === undefined || j === null ) j = s.length;\n\t\tif ( i < 0 ) i += (s.length+1);\n\t\tif ( j < 0 ) j += (s.length+1);\n\n\t\treturn __lua.makeString(s).substring(i-1,j);\n\n\t},\n\tupper: function lower(s) { return (\"\" + s).toUpperCase(); },\n\tformat: function format(format, etc) {\n\t\tvar arg = arguments;\n\t\tvar i = 1;\n\t\treturn format.replace(/%([0-9.]+)?([%sfdgi])/g, function (m, w, t) {\n\t\t\tvar r = null;\n\t\t\tif ( t == \"%\" ) return \"%\";\n\t\t\telse if ( t == \"s\") r = arg[i++];\n\t\t\telse if ( t == \"d\") r = parseInt(arg[i++]);\n\t\t\telse if ( t == \"i\") r = parseInt(arg[i++]);\n\t\t\telse if ( t == \"f\" ) r = arg[i++].toFixed(parseFloat(m[1]) || 6);\n\t\t\telse r = arg[i++]; \n\t\t\tr = \"\" + r;\n\t\t\tif ( parseInt(w) ) {\n\t\t\t\tvar extra = parseInt(w) - r.length;\n\t\t\t\tif ( extra > 0 ) r = new Array(extra).join(\" \") + r;\n\t\t\t}\n\t\t\treturn r;\n\t\t});\n\t}\n\n};\n\nenv.table = {\n\tconcat: null,\n\tinsert: null,\n\tpack: function(/* arguments */) {\n\t\tvar obj = {}\n\t\tfor ( var i = 0; i < arguments.length; ++i) {\n\t\t\tobj[(\"\" + (i + 1))] = arguments[i];\n\t\t}\n\t\treturn __lua.makeTable(obj);\n\t},\n\tremove: null,\n\tsort: function sort(table) { return table; },\n\tunpack: function(table,i,j) {\n\t\tif ( i === undefined || i === null ) i = 1;\n\t\tif ( j === undefined || j === null ) j = __lua.count(table);\n\n\t\tvar arr = [];\n\t\tif ( __lua.isTable(table) ) {\n\t\t\tfor ( var a = i; a <= j; ++a ) {\n\t\t\t\tarr.push(table.numeric[a]);\n\t\t\t}\n\t\t} else {\n\t\t\tfor ( var a = i; a <= j; ++a ) {\n\t\t\t\tarr.push(table[a]);\n\t\t\t}\t\t\t\n\t\t}\n\n\t\treturn __lua.makeMultiReturn.apply(__lua, arr);\n\n\n\t}\n\n};\n\nenv.unpack = env.table.unpack;\n\nenv.tonumber = function(n) {\n\treturn parseInt(n);\n};\n\nenv.tostring = function(n) {\n\treturn __lua.makeString(n);\n};\n\nenv.os = {\n\tclock: null,\n\tdate: null,\n\tdifftime: function difftime(t1,t2) { return t2 - t1; },\n\texecute: null,\n\texit: null,\n\ttime: function time(table) {\n\t\tif ( table == null ) return new Date().getTime();\n\t\tthrow \"Time given a table not implemented yet.\";\n\t}\n};\n\nenv.io = {\n\twrite: function() { env.print(arguments); }\n};\n\nenv.error = function error(s) { throw s; };\n\nenv.assert = function assert(what, msg, code) {\n\tif ( code === undefined ) {\n\t\tcode = msg;\n\t\tmsg = undefined;\n\t}\n\n\tif ( !!what ) return what;\n\n\tthrow(\"Assert Failed!! \" + code);\n};\n\nenv.type = function type(what) {\n\treturn __lua.type(what);\n};\n\n\nenv.pairs = function pairs(table) {\n\n\tvar mtf = __lua.lookupMetaTable(table, \"__pairs\");\n\tif ( mtf !== null ) return mtf(table);\n\n\tvar list = [];\n\tif ( __lua.isTable(table) ) {\n\t\tfor ( var i = 0; i < table.numeric.length; ++i ) list.push([i + 1, i, table.numeric]);\n\t\tfor ( var idx in table.hash ) list.push([idx, idx, table.hash]);\n\t} else if ( __lua.isJSArray(table) ) {\n\t\tfor ( var i = 0; i < table.length; ++i ) list.push([i + 1, i, table]);\n\t} else {\n\t\tvar keys = Object.keys(table);\n\t\tfor ( var idx in keys ) list.push([keys[idx], keys[idx], table]);\n\t}\n\n\treturn __lua.makeMultiReturn(function(handle, cur) {\n\t\tif ( handle.length < 1 ) return null;\n\t\tvar nfo = handle.shift();\n\t\tvar k = nfo[0];\n\t\tvar v = nfo[2][nfo[1]];\n\t\treturn __lua.makeMultiReturn(k,v);\n\t}, list, null);\n};\n\nenv.ipairs = function ipairs(table) {\n\n\tvar mtf = __lua.lookupMetaTable(table, \"__ipairs\");\n\tif ( mtf !== null ) return mtf(table);\n\n\treturn __lua.makeMultiReturn(function ipairsitr(table, cur) {\n\t\tcur = cur + 1;\n\t\tif ( __lua.isJSArray(table) ) {\n\t\t\tif ( table.length < cur ) return null;\n\t\t\treturn __lua.makeMultiReturn(cur, table[cur-1]);\n\t\t} else if ( __lua.isTable(table) ) {\n\t\t\tif ( table.numeric[cur-1] === null || table.numeric[cur-1] === undefined ) return null;\n\t\t\treturn __lua.makeMultiReturn(cur, table.numeric[cur-1]);\n\t\t} else {\n\t\t\treturn table[cur-1];\n\t\t}\n\t}, table, 0);\n};\n\nenv.next = function next(table, cur) {\n\tif ( __lua.isTable(table) ) {\n\t\tvar list = [];\n\t\tfor ( var i = 0; i < table.numeric.length; ++i ) list.push([i + 1, table.numeric[i]]);\n\t\tfor ( var tidx in table.hash ) list.push([tidx, table.hash[tidx]]);\n\t\tvar trigger = false;\n\t\tfor ( var i = 0; i < list.length; ++i ) {\n\t\t\tvar itm = list[i];\n\t\t\tif ( cur === null || cur === undefined || trigger ) {\n\t\t\t\tif ( itm[1] !== undefined && itm[1] !== null )\n\t\t\t\t\treturn __lua.makeMultiReturn(itm[0], itm[1]);\n\t\t\t}\n\t\t\tif ( cur === itm[0] ) trigger = true;\n\t\t}\n\n\t\treturn null;\n\t} else {\n\t\tvar listk = Object.keys(table);\n\t\tvar trigger = false;\n\t\tfor ( var i = 0; i < listk.length; ++i ) {\n\t\t\tvar idx = listk[i];\n\t\t\tvar sidx = idx;\n\t\t\tif ( typeof sidx == \"number\" ) sidx = sidx = 1;\n\t\t\tif ( cur === null || cur === undefined || trigger ) return __lua.makeMultiReturn(idx, table[sidx]);\n\t\t\tif ( cur === idx ) trigger = true;\n\t\t}\n\t\treturn null;\n\t}\n};\n\nenv.print = function print() { console.log.apply(console, arguments); };\nenv.pcall = this.__lua.pcall;\n\nenv.rawequals = function rawequals(a,b) { return a == b; };\nenv.rawget = function rawget(table, prop) { \n\tif ( table instanceof LuaTable ) {\n\t\tif ( typeof prop == \"number\" ) return table.numeric[prop - 1];\n\t\telse return table.hash[prop];\n\t}\n\treturn table[prop]; \n};\nenv.rawset = function rawset(table, prop, val) { \n\tif ( table instanceof LuaTable ) {\n\t\tif ( typeof prop == \"number\" ) return table.numeric[prop - 1] = val;\n\t\telse return table.hash[prop] = val;\n\t}\n\treturn table[prop] = val; \n};\n\nenv.something = function something(table) {\n\tvar array = [];\n\tvar idx = 1;\n\twhile ( table[idx] !== undefined ) {\n\t\tarray.push(table[idx]);\n\t\t++idx;\n\t}\n\treturn __lua.makeMultiReturn.apply(__lua, array);\n};\nenv.math = Math;\n\nenv.setmetatable = function setmetatable(target, meta) {\n\n\tObject.defineProperty(target, \"__metatable\", {value: meta, enumerable: false, configurable: true });\n\treturn target;\n};\n\nenv.getmetatable = function getmetatable(taget, meta) {\n\treturn taget.__metatable;\n};\n\nvar reduce = function reduce(arr, op) {\n\tif ( arr.length < 1 ) return undefined;\n\tvar val = arr[0];\n\tfor ( var i = 1; i < arr.length; ++i ) {\n\t\tval = op(val, arr[i]);\n\t}\n\treturn val;\n};\n\nenv.bit32 = {\n\tband: function band() { return reduce(arguments, function(a,b) { return a & b; }); },\n\tbor: function bor() { return reduce(arguments, function(a,b) { return a | b; }); },\n\tbxor: function bxor() { return reduce(arguments, function(a,b) { return a | b; }); },\n\n\trshift: function rshift(b, disp) { return b >> disp; }\n};\n\nenv.require = function require(what) {\n\tif ( what == \"bit\" ) return env.bit32;\n\tif ( what == \"bit32\" ) return env.bit32;\n\tthrow \"Module \" + waht + \" not found\";\n};\n\n__lua.mark(env);\n__lua.env = env;\nfor ( var idx in env ) this[idx] = env[idx];\n\n"

/***/ }),

/***/ 93:
/***/ (function(module, exports) {



/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(95)))

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
});