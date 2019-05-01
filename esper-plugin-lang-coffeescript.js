/*!
 * esper.js
 * 
 * Compiled: Tue Apr 30 2019 22:03:11 GMT-0700 (PDT)
 * Target  : web (umd)
 * Profile : web
 * Version : 4036339-dirty
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
		exports["esper-plugin-lang-coffeescript"] = factory(require("esper"));
	else
		root["esper-plugin-lang-coffeescript"] = factory(root["esper"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 2.0.0-beta9-dev
var beingDeclared, cache$, cleanMarkers, colourise, COLOURS, concat, concatMap, CS, difference, envEnrichments, envEnrichments_, foldl, humanReadable, map, nub, numberLines, pointToErrorLocation, SUPPORTS_COLOUR, usedAsExpression, usedAsExpression_;
cache$ = __webpack_require__(101);
concat = cache$.concat;
concatMap = cache$.concatMap;
difference = cache$.difference;
foldl = cache$.foldl;
map = cache$.map;
nub = cache$.nub;
CS = __webpack_require__(102);
COLOURS = {
  red: '\x1B[31m',
  green: '\x1B[32m',
  yellow: '\x1B[33m',
  blue: '\x1B[34m',
  magenta: '\x1B[35m',
  cyan: '\x1B[36m'
};
SUPPORTS_COLOUR = ('undefined' !== typeof process && null != process && null != process.stderr ? process.stderr.isTTY : void 0) && !process.env.NODE_DISABLE_COLORS;
colourise = function (colour, str) {
  if (SUPPORTS_COLOUR) {
    return '' + COLOURS[colour] + str + '\x1B[39m';
  } else {
    return str;
  }
};
this.numberLines = numberLines = function (input, startLine) {
  var currLine, i, line, lines, numbered, pad, padSize;
  if (null == startLine)
    startLine = 1;
  lines = input.split('\n');
  padSize = ('' + (lines.length + startLine - 1)).length;
  numbered = function (accum$) {
    for (var i$ = 0, length$ = lines.length; i$ < length$; ++i$) {
      line = lines[i$];
      i = i$;
      currLine = '' + (i + startLine);
      pad = Array(padSize + 1).join('0').slice(currLine.length);
      accum$.push('' + pad + currLine + ' : ' + lines[i]);
    }
    return accum$;
  }.call(this, []);
  return numbered.join('\n');
};
cleanMarkers = function (str) {
  return str.replace(/[\uEFEF\uEFFE\uEFFF]/g, '');
};
this.humanReadable = humanReadable = function (str) {
  return str.replace(/\uEFEF/g, '(INDENT)').replace(/\uEFFE/g, '(DEDENT)').replace(/\uEFFF/g, '(TERM)');
};
this.formatParserError = function (input, e) {
  var found, message, realColumn, unicode;
  realColumn = cleanMarkers(('' + input.split('\n')[e.line - 1] + '\n').slice(0, e.column)).length;
  if (!(null != e.found))
    return 'Syntax error on line ' + e.line + ', column ' + realColumn + ': unexpected end of input';
  found = JSON.stringify(humanReadable(e.found));
  found = found.replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"');
  unicode = e.found.charCodeAt(0).toString(16).toUpperCase();
  unicode = '\\u' + '0000'.slice(unicode.length) + unicode;
  message = 'Syntax error on line ' + e.line + ', column ' + realColumn + ": unexpected '" + found + "' (" + unicode + ')';
  return '' + message + '\n' + pointToErrorLocation(input, e.line, realColumn);
};
this.pointToErrorLocation = pointToErrorLocation = function (source, line, column, numLinesOfContext) {
  var currentLineOffset, lines, numberedLines, padSize, postLines, preLines, startLine;
  if (null == numLinesOfContext)
    numLinesOfContext = 3;
  lines = source.split('\n');
  if (!lines[lines.length - 1])
    lines.pop();
  currentLineOffset = line - 1;
  startLine = currentLineOffset - numLinesOfContext;
  if (startLine < 0)
    startLine = 0;
  preLines = lines.slice(startLine, +currentLineOffset + 1 || 9e9);
  preLines[preLines.length - 1] = colourise('yellow', preLines[preLines.length - 1]);
  postLines = lines.slice(currentLineOffset + 1, +(currentLineOffset + numLinesOfContext) + 1 || 9e9);
  numberedLines = numberLines(cleanMarkers([].slice.call(preLines).concat([].slice.call(postLines)).join('\n')), startLine + 1).split('\n');
  preLines = numberedLines.slice(0, preLines.length);
  postLines = numberedLines.slice(preLines.length);
  column = cleanMarkers(('' + lines[currentLineOffset] + '\n').slice(0, column)).length;
  padSize = (currentLineOffset + 1 + postLines.length).toString(10).length;
  return [].slice.call(preLines).concat(['' + colourise('red', Array(padSize + 1).join('^')) + ' : ' + Array(column).join(' ') + colourise('red', '^')], [].slice.call(postLines)).join('\n');
};
this.beingDeclared = beingDeclared = function (assignment) {
  switch (false) {
  case !!(null != assignment):
    return [];
  case !assignment['instanceof'](CS.Identifiers):
    return [assignment.data];
  case !assignment['instanceof'](CS.Rest):
    return beingDeclared(assignment.expression);
  case !assignment['instanceof'](CS.MemberAccessOps):
    return [];
  case !assignment['instanceof'](CS.DefaultParam):
    return beingDeclared(assignment.param);
  case !assignment['instanceof'](CS.ArrayInitialiser):
    return concatMap(assignment.members, beingDeclared);
  case !assignment['instanceof'](CS.ObjectInitialiser):
    return concatMap(assignment.vals(), beingDeclared);
  default:
    throw new Error('beingDeclared: Non-exhaustive patterns in case: ' + assignment.className);
  }
};
this.declarationsFor = function (node, inScope) {
  var vars;
  vars = envEnrichments(node, inScope);
  return foldl(new CS.Undefined().g(), vars, function (expr, v) {
    return new CS.AssignOp(new CS.Identifier(v).g(), expr).g();
  });
};
usedAsExpression_ = function (ancestors) {
  var grandparent, parent;
  parent = ancestors[0];
  grandparent = ancestors[1];
  switch (false) {
  case !!(null != parent):
    return true;
  case !parent['instanceof'](CS.Program, CS.Class):
    return false;
  case !parent['instanceof'](CS.SeqOp):
    return this === parent.right && usedAsExpression(parent, ancestors.slice(1));
  case !(parent['instanceof'](CS.Block) && parent.statements.indexOf(this) !== parent.statements.length - 1):
    return false;
  case !(parent['instanceof'](CS.Functions) && parent.body === this && null != grandparent && grandparent['instanceof'](CS.Constructor)):
    return false;
  default:
    return true;
  }
};
this.usedAsExpression = usedAsExpression = function (node, ancestors) {
  return usedAsExpression_.call(node, ancestors);
};
envEnrichments_ = function (inScope) {
  var possibilities;
  if (null == inScope)
    inScope = [];
  possibilities = nub(function () {
    switch (false) {
    case !this['instanceof'](CS.AssignOp):
      return concat([
        beingDeclared(this.assignee),
        envEnrichments(this.expression)
      ]);
    case !this['instanceof'](CS.Class):
      return concat([
        beingDeclared(this.nameAssignee),
        envEnrichments(this.parent)
      ]);
    case !this['instanceof'](CS.ForIn, CS.ForOf):
      return concat([
        beingDeclared(this.keyAssignee),
        beingDeclared(this.valAssignee),
        envEnrichments(this.target),
        envEnrichments(this.step),
        envEnrichments(this.filter),
        envEnrichments(this.body)
      ]);
    case !this['instanceof'](CS.Try):
      return concat([
        beingDeclared(this.catchAssignee),
        envEnrichments(this.body),
        envEnrichments(this.catchBody),
        envEnrichments(this.finallyBody)
      ]);
    case !this['instanceof'](CS.Functions):
      return [];
    default:
      return concatMap(this.childNodes, function (this$) {
        return function (child) {
          if (in$(child, this$.listMembers)) {
            return concatMap(this$[child], function (m) {
              return envEnrichments(m, inScope);
            });
          } else {
            return envEnrichments(this$[child], inScope);
          }
        };
      }(this));
    }
  }.call(this));
  return difference(possibilities, inScope);
};
this.envEnrichments = envEnrichments = function (node) {
  var args;
  args = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
  if (null != node) {
    return envEnrichments_.apply(node, args);
  } else {
    return [];
  }
};
function in$(member, list) {
  for (var i = 0, length = list.length; i < length; ++i)
    if (i in list && list[i] === member)
      return true;
  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(95)))

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// Generated by CoffeeScript 2.0.0-beta9-dev
var concat, foldl, map, nub, span;
this.any = function (list, fn) {
  var e;
  for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
    e = list[i$];
    if (fn(e))
      return true;
  }
  return false;
};
this.all = function (list, fn) {
  var e;
  for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
    e = list[i$];
    if (!fn(e))
      return false;
  }
  return true;
};
this.foldl = foldl = function (memo, list, fn) {
  var i;
  for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
    i = list[i$];
    memo = fn(memo, i);
  }
  return memo;
};
this.foldl1 = function (list, fn) {
  return foldl(list[0], list.slice(1), fn);
};
this.map = map = function (list, fn) {
  var e;
  return function (accum$) {
    for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
      e = list[i$];
      accum$.push(fn(e));
    }
    return accum$;
  }.call(this, []);
};
this.concat = concat = function (list) {
  var cache$;
  return (cache$ = []).concat.apply(cache$, [].slice.call(list));
};
this.concatMap = function (list, fn) {
  return concat(map(list, fn));
};
this.intersect = function (listA, listB) {
  var a;
  return function (accum$) {
    for (var i$ = 0, length$ = listA.length; i$ < length$; ++i$) {
      a = listA[i$];
      if (!in$(a, listB))
        continue;
      accum$.push(a);
    }
    return accum$;
  }.call(this, []);
};
this.difference = function (listA, listB) {
  var a;
  return function (accum$) {
    for (var i$ = 0, length$ = listA.length; i$ < length$; ++i$) {
      a = listA[i$];
      if (!!in$(a, listB))
        continue;
      accum$.push(a);
    }
    return accum$;
  }.call(this, []);
};
this.nub = nub = function (list) {
  var i, result;
  result = [];
  for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
    i = list[i$];
    if (!!in$(i, result))
      continue;
    result.push(i);
  }
  return result;
};
this.union = function (listA, listB) {
  var b;
  return listA.concat(function (accum$) {
    for (var cache$ = nub(listB), i$ = 0, length$ = cache$.length; i$ < length$; ++i$) {
      b = cache$[i$];
      if (!!in$(b, listA))
        continue;
      accum$.push(b);
    }
    return accum$;
  }.call(this, []));
};
this.flip = function (fn) {
  return function (b, a) {
    return fn.call(this, a, b);
  };
};
this.owns = function (hop) {
  return function (a, b) {
    return hop.call(a, b);
  };
}({}.hasOwnProperty);
this.span = span = function (list, f) {
  var cache$, ys, zs;
  if (list.length === 0) {
    return [
      [],
      []
    ];
  } else if (f(list[0])) {
    cache$ = span(list.slice(1), f);
    ys = cache$[0];
    zs = cache$[1];
    return [
      [list[0]].concat([].slice.call(ys)),
      zs
    ];
  } else {
    return [
      [],
      list
    ];
  }
};
this.divMod = function (a, b) {
  var c, div, mod;
  c = a % b;
  mod = c < 0 ? c + b : c;
  div = Math.floor(a / b);
  return [
    div,
    mod
  ];
};
this.partition = function (list, fn) {
  var item, result;
  result = [
    [],
    []
  ];
  for (var i$ = 0, length$ = list.length; i$ < length$; ++i$) {
    item = list[i$];
    result[+!fn(item)].push(item);
  }
  return result;
};
function in$(member, list) {
  for (var i = 0, length = list.length; i < length; ++i)
    if (i in list && list[i] === member)
      return true;
  return false;
}


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 2.0.0-beta9-dev
var ArrayInitialiser, Block, Bool, cache$, cache$1, Class, CompoundAssignOp, concat, concatMap, Conditional, createNodes, difference, exports, ForOf, FunctionApplications, Functions, GenSym, handleLists, handlePrimitives, HeregExp, Identifier, Identifiers, map, NegatedConditional, NewOp, Nodes, nub, ObjectInitialiser, Primitives, Range, RegExp, RegExps, Slice, StaticMemberAccessOps, Super, Switch, SwitchCase, union, While;
cache$ = __webpack_require__(101);
map = cache$.map;
concat = cache$.concat;
concatMap = cache$.concatMap;
difference = cache$.difference;
nub = cache$.nub;
union = cache$.union;
exports = null != ( true && null != module ? module.exports : void 0) ?  true && null != module ? module.exports : void 0 : this;
createNodes = function (subclasses, superclasses) {
  var className, specs;
  if (null == superclasses)
    superclasses = [];
  for (className in subclasses) {
    if (!isOwn$(subclasses, className))
      continue;
    specs = subclasses[className];
    (function (className) {
      var externalCtor$, isCategory, klass, params, superclass;
      superclass = null != superclasses[0] ? superclasses[0] : function () {
      };
      isCategory = 'undefined' !== typeof specs && null != specs && specs.length === 2;
      params = 'undefined' !== typeof specs && null != specs ? function () {
        switch (specs.length) {
        case 0:
          return [];
        case 1:
        case 2:
          return specs[0];
        }
      }.call(this) : null;
      if (null != params)
        params;
      else
        params = null != superclass.prototype.childNodes ? superclass.prototype.childNodes : [];
      klass = function (super$) {
        extends$(class$, super$);
        externalCtor$ = isCategory ? function () {
        } : function () {
          var i, param;
          for (var i$ = 0, length$ = params.length; i$ < length$; ++i$) {
            param = params[i$];
            i = i$;
            this[param] = arguments[i];
          }
          if (null != this.initialise)
            this.initialise.apply(this, arguments);
          return this;
        };
        function class$() {
          return externalCtor$.apply(this, arguments);
        }
        class$.prototype.className = className;
        class$.superclasses = superclasses;
        return class$;
      }(superclass);
      if (null != ('undefined' !== typeof specs && null != specs ? specs[0] : void 0))
        klass.prototype.childNodes = specs[0];
      if (isCategory)
        createNodes(specs[1], [klass].concat([].slice.call(superclasses)));
      return exports[className] = klass;
    }(className));
  }
};
createNodes({
  Nodes: [
    [],
    {
      BinOps: [
        [
          'left',
          'right'
        ],
        {
          AssignOps: [
            [
              'assignee',
              'expression'
            ],
            {
              AssignOp: null,
              ClassProtoAssignOp: null,
              CompoundAssignOp: [[
                  'op',
                  'assignee',
                  'expression'
                ]]
            }
          ],
          BitOps: [
            null,
            {
              BitAndOp: null,
              BitOrOp: null,
              BitXorOp: null,
              LeftShiftOp: null,
              SignedRightShiftOp: null,
              UnsignedRightShiftOp: null
            }
          ],
          ComparisonOps: [
            null,
            {
              EQOp: null,
              GTEOp: null,
              GTOp: null,
              LTEOp: null,
              LTOp: null,
              NEQOp: null
            }
          ],
          ConcatOp: null,
          ExistsOp: null,
          ExtendsOp: null,
          InOp: null,
          InstanceofOp: null,
          LogicalOps: [
            null,
            {
              LogicalAndOp: null,
              LogicalOrOp: null
            }
          ],
          MathsOps: [
            null,
            {
              ExpOp: null,
              DivideOp: null,
              MultiplyOp: null,
              RemOp: null,
              SubtractOp: null
            }
          ],
          OfOp: null,
          PlusOp: null,
          Range: [[
              'isInclusive',
              'left',
              'right'
            ]],
          SeqOp: null
        }
      ],
      Statements: [
        [],
        {
          Break: null,
          Continue: null,
          Debugger: null,
          Return: [['expression']],
          Throw: [['expression']]
        }
      ],
      UnaryOps: [
        ['expression'],
        {
          BitNotOp: null,
          DeleteOp: null,
          DoOp: null,
          LogicalNotOp: null,
          NewOp: [[
              'ctor',
              'arguments'
            ]],
          PreDecrementOp: null,
          PreIncrementOp: null,
          PostDecrementOp: null,
          PostIncrementOp: null,
          TypeofOp: null,
          UnaryExistsOp: null,
          UnaryNegateOp: null,
          UnaryPlusOp: null
        }
      ],
      MemberAccessOps: [
        null,
        {
          StaticMemberAccessOps: [
            [
              'expression',
              'memberName'
            ],
            {
              MemberAccessOp: null,
              ProtoMemberAccessOp: null,
              SoakedMemberAccessOp: null,
              SoakedProtoMemberAccessOp: null
            }
          ],
          DynamicMemberAccessOps: [
            [
              'expression',
              'indexingExpr'
            ],
            {
              DynamicMemberAccessOp: null,
              DynamicProtoMemberAccessOp: null,
              SoakedDynamicMemberAccessOp: null,
              SoakedDynamicProtoMemberAccessOp: null
            }
          ]
        }
      ],
      ChainedComparisonOp: [['expression']],
      FunctionApplications: [
        [
          'function',
          'arguments'
        ],
        {
          FunctionApplication: null,
          SoakedFunctionApplication: null
        }
      ],
      Super: [['arguments']],
      Program: [['body']],
      Block: [['statements']],
      Conditional: [[
          'condition',
          'consequent',
          'alternate'
        ]],
      ForIn: [[
          'valAssignee',
          'keyAssignee',
          'target',
          'step',
          'filter',
          'body'
        ]],
      ForOf: [[
          'isOwn',
          'keyAssignee',
          'valAssignee',
          'target',
          'filter',
          'body'
        ]],
      Switch: [[
          'expression',
          'cases',
          'alternate'
        ]],
      SwitchCase: [[
          'conditions',
          'consequent'
        ]],
      Try: [[
          'body',
          'catchAssignee',
          'catchBody',
          'finallyBody'
        ]],
      While: [[
          'condition',
          'body'
        ]],
      ArrayInitialiser: [['members']],
      ObjectInitialiser: [['members']],
      ObjectInitialiserMember: [[
          'key',
          'expression'
        ]],
      Class: [[
          'nameAssignee',
          'parent',
          'ctor',
          'body',
          'boundMembers'
        ]],
      Constructor: [['expression']],
      Functions: [
        [
          'parameters',
          'body'
        ],
        {
          Function: null,
          BoundFunction: null
        }
      ],
      DefaultParam: [[
          'param',
          'default'
        ]],
      Identifiers: [
        ['data'],
        {
          Identifier: null,
          GenSym: null
        }
      ],
      Null: null,
      Primitives: [
        ['data'],
        {
          Bool: null,
          JavaScript: null,
          Numbers: [
            null,
            {
              Int: null,
              Float: null
            }
          ],
          String: null
        }
      ],
      RegExps: [
        null,
        {
          RegExp: [[
              'data',
              'flags'
            ]],
          HeregExp: [[
              'expression',
              'flags'
            ]]
        }
      ],
      This: null,
      Undefined: null,
      Slice: [[
          'expression',
          'isInclusive',
          'left',
          'right'
        ]],
      Rest: [['expression']],
      Spread: [['expression']]
    }
  ]
});
cache$1 = exports;
Nodes = cache$1.Nodes;
Primitives = cache$1.Primitives;
CompoundAssignOp = cache$1.CompoundAssignOp;
StaticMemberAccessOps = cache$1.StaticMemberAccessOps;
Range = cache$1.Range;
ArrayInitialiser = cache$1.ArrayInitialiser;
ObjectInitialiser = cache$1.ObjectInitialiser;
NegatedConditional = cache$1.NegatedConditional;
Conditional = cache$1.Conditional;
Identifier = cache$1.Identifier;
ForOf = cache$1.ForOf;
Functions = cache$1.Functions;
While = cache$1.While;
Class = cache$1.Class;
Block = cache$1.Block;
NewOp = cache$1.NewOp;
Bool = cache$1.Bool;
FunctionApplications = cache$1.FunctionApplications;
RegExps = cache$1.RegExps;
RegExp = cache$1.RegExp;
HeregExp = cache$1.HeregExp;
Super = cache$1.Super;
Slice = cache$1.Slice;
Switch = cache$1.Switch;
Identifiers = cache$1.Identifiers;
SwitchCase = cache$1.SwitchCase;
GenSym = cache$1.GenSym;
Nodes.fromBasicObject = function (obj) {
  return exports[obj.type].fromBasicObject(obj);
};
Nodes.prototype.listMembers = [];
Nodes.prototype.toBasicObject = function () {
  var child, obj, p;
  obj = { type: this.className };
  if (null != this.line)
    obj.line = this.line;
  if (null != this.column)
    obj.column = this.column;
  if (null != this.raw) {
    obj.raw = this.raw;
    if (null != this.offset)
      obj.range = [
        this.offset,
        this.offset + this.raw.length
      ];
  }
  for (var i$ = 0, length$ = this.childNodes.length; i$ < length$; ++i$) {
    child = this.childNodes[i$];
    if (in$(child, this.listMembers)) {
      obj[child] = function (accum$) {
        for (var i$1 = 0, length$1 = this[child].length; i$1 < length$1; ++i$1) {
          p = this[child][i$1];
          accum$.push(p.toBasicObject());
        }
        return accum$;
      }.call(this, []);
    } else {
      obj[child] = null != this[child] ? this[child].toBasicObject() : void 0;
    }
  }
  return obj;
};
Nodes.prototype.fold = function (memo, fn) {
  var child, p;
  for (var i$ = 0, length$ = this.childNodes.length; i$ < length$; ++i$) {
    child = this.childNodes[i$];
    if (in$(child, this.listMembers)) {
      memo = function (accum$) {
        for (var i$1 = 0, length$1 = this[child].length; i$1 < length$1; ++i$1) {
          p = this[child][i$1];
          accum$.push(p.fold(memo, fn));
        }
        return accum$;
      }.call(this, []);
    } else {
      memo = this[child].fold(memo, fn);
    }
  }
  return fn(memo, this);
};
Nodes.prototype.clone = function () {
  var ctor, k, n, v;
  ctor = function () {
  };
  ctor.prototype = this.constructor.prototype;
  n = new ctor;
  for (k in this) {
    if (!isOwn$(this, k))
      continue;
    v = this[k];
    n[k] = v;
  }
  return n;
};
Nodes.prototype['instanceof'] = function () {
  var ctor, ctors, superclasses;
  ctors = arguments.length > 0 ? [].slice.call(arguments, 0) : [];
  superclasses = map(this.constructor.superclasses, function (c) {
    return c.prototype.className;
  });
  for (var i$ = 0, length$ = ctors.length; i$ < length$; ++i$) {
    ctor = ctors[i$];
    if (!in$(ctor.prototype.className, [this.className].concat([].slice.call(superclasses))))
      continue;
    return true;
  }
  return false;
};
Nodes.prototype.r = function (param$) {
  this.raw = param$;
  return this;
};
Nodes.prototype.p = function (param$, param$1, param$2) {
  this.line = param$;
  this.column = param$1;
  this.offset = param$2;
  return this;
};
Nodes.prototype.generated = false;
Nodes.prototype.g = function () {
  this.generated = true;
  return this;
};
handlePrimitives = function (ctor) {
  var primitives;
  primitives = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
  ctor.prototype.childNodes = difference(ctor.prototype.childNodes, primitives);
  return ctor.prototype.toBasicObject = function () {
    var obj, primitive;
    obj = Nodes.prototype.toBasicObject.call(this);
    for (var i$ = 0, length$ = primitives.length; i$ < length$; ++i$) {
      primitive = primitives[i$];
      obj[primitive] = this[primitive];
    }
    return obj;
  };
};
handlePrimitives(Class, 'boundMembers');
handlePrimitives(CompoundAssignOp, 'op');
handlePrimitives(ForOf, 'isOwn');
handlePrimitives(HeregExp, 'flags');
handlePrimitives(Identifiers, 'data');
handlePrimitives(Primitives, 'data');
handlePrimitives(Range, 'isInclusive');
handlePrimitives(RegExp, 'data', 'flags');
handlePrimitives(Slice, 'isInclusive');
handlePrimitives(StaticMemberAccessOps, 'memberName');
handleLists = function (ctor) {
  var listProps;
  listProps = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
  return ctor.prototype.listMembers = listProps;
};
handleLists(ArrayInitialiser, 'members');
handleLists(Block, 'statements');
handleLists(Functions, 'parameters');
handleLists(FunctionApplications, 'arguments');
handleLists(NewOp, 'arguments');
handleLists(ObjectInitialiser, 'members');
handleLists(Super, 'arguments');
handleLists(Switch, 'cases');
handleLists(SwitchCase, 'conditions');
Block.wrap = function (s) {
  return new Block(null != s ? [s] : []).r(s.raw).p(s.line, s.column);
};
Class.prototype.initialise = function () {
  if (null != this.boundMembers)
    this.boundMembers;
  else
    this.boundMembers = [];
  this.name = new GenSym('class');
  if (null != this.nameAssignee)
    return this.name = function () {
      switch (false) {
      case !this.nameAssignee['instanceof'](Identifier):
        return new Identifier(this.nameAssignee.data);
      case !this.nameAssignee['instanceof'](StaticMemberAccessOps):
        return new Identifier(this.nameAssignee.memberName);
      default:
        return this.name;
      }
    }.call(this);
};
Class.prototype.childNodes.push('name');
ObjectInitialiser.prototype.keys = function () {
  return map(this.members, function (m) {
    return m.key;
  });
};
ObjectInitialiser.prototype.vals = function () {
  return map(this.members, function (m) {
    return m.expression;
  });
};
RegExps.prototype.initialise = function (_, flags) {
  var flag;
  this.flags = {};
  for (var cache$2 = [
        'g',
        'i',
        'm',
        'y'
      ], i$ = 0, length$ = cache$2.length; i$ < length$; ++i$) {
    flag = cache$2[i$];
    this.flags[flag] = in$(flag, flags);
  }
};
exports.NegatedConditional = function (super$) {
  extends$(NegatedConditional, super$);
  function NegatedConditional() {
    Conditional.apply(this, arguments);
  }
  return NegatedConditional;
}(Conditional);
exports.NegatedWhile = function (super$1) {
  extends$(NegatedWhile, super$1);
  function NegatedWhile() {
    While.apply(this, arguments);
  }
  return NegatedWhile;
}(While);
exports.Loop = function (super$2) {
  extends$(Loop, super$2);
  function Loop(body) {
    While.call(this, new Bool(true).g(), body);
  }
  return Loop;
}(While);
function isOwn$(o, p) {
  return {}.hasOwnProperty.call(o, p);
}
function extends$(child, parent) {
  for (var key in parent)
    if (isOwn$(parent, key))
      child[key] = parent[key];
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
}
function in$(member, list) {
  for (var i = 0, length = list.length; i < length; ++i)
    if (i in list && list[i] === member)
      return true;
  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(103)(module)))

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

(function() {
  var StringScanner;
  StringScanner = (function() {
    function StringScanner(str) {
      this.str = str != null ? str : '';
      this.str = '' + this.str;
      this.pos = 0;
      this.lastMatch = {
        reset: function() {
          this.str = null;
          this.captures = [];
          return this;
        }
      }.reset();
      this;
    }
    StringScanner.prototype.bol = function() {
      return this.pos <= 0 || (this.str[this.pos - 1] === "\n");
    };
    StringScanner.prototype.captures = function() {
      return this.lastMatch.captures;
    };
    StringScanner.prototype.check = function(pattern) {
      var matches;
      if (this.str.substr(this.pos).search(pattern) !== 0) {
        this.lastMatch.reset();
        return null;
      }
      matches = this.str.substr(this.pos).match(pattern);
      this.lastMatch.str = matches[0];
      this.lastMatch.captures = matches.slice(1);
      return this.lastMatch.str;
    };
    StringScanner.prototype.checkUntil = function(pattern) {
      var matches, patternPos;
      patternPos = this.str.substr(this.pos).search(pattern);
      if (patternPos < 0) {
        this.lastMatch.reset();
        return null;
      }
      matches = this.str.substr(this.pos + patternPos).match(pattern);
      this.lastMatch.captures = matches.slice(1);
      return this.lastMatch.str = this.str.substr(this.pos, patternPos) + matches[0];
    };
    StringScanner.prototype.clone = function() {
      var clone, prop, value, _ref;
      clone = new this.constructor(this.str);
      clone.pos = this.pos;
      clone.lastMatch = {};
      _ref = this.lastMatch;
      for (prop in _ref) {
        value = _ref[prop];
        clone.lastMatch[prop] = value;
      }
      return clone;
    };
    StringScanner.prototype.concat = function(str) {
      this.str += str;
      return this;
    };
    StringScanner.prototype.eos = function() {
      return this.pos === this.str.length;
    };
    StringScanner.prototype.exists = function(pattern) {
      var matches, patternPos;
      patternPos = this.str.substr(this.pos).search(pattern);
      if (patternPos < 0) {
        this.lastMatch.reset();
        return null;
      }
      matches = this.str.substr(this.pos + patternPos).match(pattern);
      this.lastMatch.str = matches[0];
      this.lastMatch.captures = matches.slice(1);
      return patternPos;
    };
    StringScanner.prototype.getch = function() {
      return this.scan(/./);
    };
    StringScanner.prototype.match = function() {
      return this.lastMatch.str;
    };
    StringScanner.prototype.matches = function(pattern) {
      this.check(pattern);
      return this.matchSize();
    };
    StringScanner.prototype.matched = function() {
      return this.lastMatch.str != null;
    };
    StringScanner.prototype.matchSize = function() {
      if (this.matched()) {
        return this.match().length;
      } else {
        return null;
      }
    };
    StringScanner.prototype.peek = function(len) {
      return this.str.substr(this.pos, len);
    };
    StringScanner.prototype.pointer = function() {
      return this.pos;
    };
    StringScanner.prototype.setPointer = function(pos) {
      pos = +pos;
      if (pos < 0) {
        pos = 0;
      }
      if (pos > this.str.length) {
        pos = this.str.length;
      }
      return this.pos = pos;
    };
    StringScanner.prototype.reset = function() {
      this.lastMatch.reset();
      this.pos = 0;
      return this;
    };
    StringScanner.prototype.rest = function() {
      return this.str.substr(this.pos);
    };
    StringScanner.prototype.scan = function(pattern) {
      var chk;
      chk = this.check(pattern);
      if (chk != null) {
        this.pos += chk.length;
      }
      return chk;
    };
    StringScanner.prototype.scanUntil = function(pattern) {
      var chk;
      chk = this.checkUntil(pattern);
      if (chk != null) {
        this.pos += chk.length;
      }
      return chk;
    };
    StringScanner.prototype.skip = function(pattern) {
      this.scan(pattern);
      return this.matchSize();
    };
    StringScanner.prototype.skipUntil = function(pattern) {
      this.scanUntil(pattern);
      return this.matchSize();
    };
    StringScanner.prototype.string = function() {
      return this.str;
    };
    StringScanner.prototype.terminate = function() {
      this.pos = this.str.length;
      this.lastMatch.reset();
      return this;
    };
    StringScanner.prototype.toString = function() {
      return "#<StringScanner " + (this.eos() ? 'fin' : "" + this.pos + "/" + this.str.length + " @ " + (this.str.length > 8 ? "" + (this.str.substr(0, 5)) + "..." : this.str)) + ">";
    };
    return StringScanner;
  })();
  StringScanner.prototype.beginningOfLine = StringScanner.prototype.bol;
  StringScanner.prototype.clear = StringScanner.prototype.terminate;
  StringScanner.prototype.dup = StringScanner.prototype.clone;
  StringScanner.prototype.endOfString = StringScanner.prototype.eos;
  StringScanner.prototype.exist = StringScanner.prototype.exists;
  StringScanner.prototype.getChar = StringScanner.prototype.getch;
  StringScanner.prototype.position = StringScanner.prototype.pointer;
  StringScanner.StringScanner = StringScanner;
  module.exports = StringScanner;
}).call(this);


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() {
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

        peg$startRuleFunctions = { program: peg$parseprogram, block: peg$parseblock, statement: peg$parsestatement },
        peg$startRuleFunction  = peg$parseprogram,

        peg$c0 = peg$FAILED,
        peg$c1 = null,
        peg$c2 = function(leader, b) {return rp(new CS.Program(b));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c3 = [],
        peg$c4 = function(s) {return s;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c5 = function(s, ss) {return rp(new CS.Block([s].concat([].slice.call(ss))));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c6 = void 0,
        peg$c7 = ";",
        peg$c8 = { type: "literal", value: ";", description: "\";\"" },
        peg$c9 = function(e) {return e;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c10 = function(left, right) {if (!right)
          return left;
        return rp(new CS.SeqOp(left, right));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c11 = function(expr, postfixes) {return foldl(function (expr, postfixContainer) {
          var indicator, postfix;
          postfix = postfixContainer[1];
          indicator = postfix.type;
          switch (indicator) {
          case 'if':
            return rp(new CS.Conditional(postfix.cond, expr, null));
          case 'unless':
            return rp(new CS.NegatedConditional(new CS.LogicalNotOp(postfix.cond).g(), expr, null));
          case 'while':
            return rp(new CS.While(postfix.cond, expr));
          case 'until':
            return rp(new CS.NegatedWhile(new CS.LogicalNotOp(postfix.cond).g(), expr));
          case 'for-in':
            return rp(new CS.ForIn(postfix.val, postfix.key, postfix.list, postfix.step, postfix.filter, expr));
          case 'for-of':
            return rp(new CS.ForOf(postfix.own, postfix.key, postfix.val, postfix.obj, postfix.filter, expr));
          }
        }, expr, postfixes);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c12 = function(kw, e) {return {
          type: kw,
          cond: e
        };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c13 = ",",
        peg$c14 = { type: "literal", value: ",", description: "\",\"" },
        peg$c15 = function(a) {return a;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c16 = function(val, key) {return [
          val,
          key
        ];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c17 = function(valKey, list, step, filter) {var cache$, key, val;
        cache$ = null != valKey ? valKey : [
          null,
          null
        ];
        val = cache$[0];
        key = cache$[1];
        if (null != step)
          step;
        else
          step = new CS.Int(1).r('1').g();
        return {
          type: 'for-in',
          val: val,
          key: key,
          list: list,
          step: step,
          filter: filter
        };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c18 = function(own, key, val, obj, filter) {return {
          type: 'for-of',
          own: Boolean(own),
          key: key,
          val: val,
          obj: obj,
          filter: filter
        };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c19 = "=",
        peg$c20 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c21 = function(left, right) {return rp(new CS.AssignOp(left, right));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c22 = "?",
        peg$c23 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c24 = function(left, op, right) {return rp(new CS.CompoundAssignOp(constructorLookup[op].prototype.className, left, right));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c25 = "&&",
        peg$c26 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c27 = "||",
        peg$c28 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c29 = "**",
        peg$c30 = { type: "literal", value: "**", description: "\"**\"" },
        peg$c31 = /^[?&\^|*\/%]/,
        peg$c32 = { type: "class", value: "[?&\\^|*\\/%]", description: "[?&\\^|*\\/%]" },
        peg$c33 = "+",
        peg$c34 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c35 = "-",
        peg$c36 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c37 = "<<",
        peg$c38 = { type: "literal", value: "<<", description: "\"<<\"" },
        peg$c39 = ">>>",
        peg$c40 = { type: "literal", value: ">>>", description: "\">>>\"" },
        peg$c41 = ">>",
        peg$c42 = { type: "literal", value: ">>", description: "\">>\"" },
        peg$c43 = "?=",
        peg$c44 = { type: "literal", value: "?=", description: "\"?=\"" },
        peg$c45 = function(left, right) {return rp(new CS.CompoundAssignOp(constructorLookup['?'].prototype.className, left, right));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c46 = function(o, e) {return [
          o,
          e
        ];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c47 = function(left, rights) {var cache$, cache$1, expr, op;
        switch (rights.length) {
        case 0:
          return left;
        case 1:
          cache$ = rights[0];
          op = cache$[0];
          expr = cache$[1];
          return rp(new constructorLookup[op](left, expr));
        default:
          return rp(foldBinaryExpr((cache$1 = [left]).concat.apply(cache$1, [].slice.call(rights))));
        }
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c48 = "<=",
        peg$c49 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c50 = ">=",
        peg$c51 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c52 = "<",
        peg$c53 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c54 = ">",
        peg$c55 = { type: "literal", value: ">", description: "\">\"" },
        peg$c56 = "==",
        peg$c57 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c58 = "!=",
        peg$c59 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c60 = function(op) {return 'not ' + op;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c61 = function(e) {return rp(new CS.DoOp(e));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c62 = function(o) {return o;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c63 = function(ops, e) {return rp(foldr(function (e, op) {
          return new prefixConstructorLookup[op](e);
        }, e, ops));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c64 = "++",
        peg$c65 = { type: "literal", value: "++", description: "\"++\"" },
        peg$c66 = "--",
        peg$c67 = { type: "literal", value: "--", description: "\"--\"" },
        peg$c68 = "!",
        peg$c69 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c70 = "~",
        peg$c71 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c72 = function(a, f) {return rp(new CS.AssignOp(a, f));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c73 = function(e, ops) {return rp(foldl(function (e, op) {
          return new postfixConstructorLookup[op](e);
        }, e, ops));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c74 = "[..]",
        peg$c75 = { type: "literal", value: "[..]", description: "\"[..]\"" },
        peg$c76 = "(",
        peg$c77 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c78 = ")",
        peg$c79 = { type: "literal", value: ")", description: "\")\"" },
        peg$c80 = function(soaked, a) {return rp({
          op: soaked ? CS.SoakedFunctionApplication : CS.FunctionApplication,
          operands: [null != a ? a : []]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c81 = function(e, es) {return [e].concat([].slice.call(es));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c82 = /^[+-\/]/,
        peg$c83 = { type: "class", value: "[+-\\/]", description: "[+-\\/]" },
        peg$c84 = function(e, es, obj) {es.unshift(e);
        if (null != obj)
          es.push(obj);
        return es;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c85 = function(o) {return [o];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c86 = function(fn, accesses, secondaryArgs) {var cache$, list, secondaryCtor, soaked;
        if (null != accesses)
          fn = createMemberExpression(fn, accesses);
        if (null != secondaryArgs) {
          cache$ = secondaryArgs;
          soaked = cache$[0];
          list = cache$[1];
          secondaryCtor = soaked ? CS.SoakedFunctionApplication : CS.FunctionApplication;
          fn = rp(new secondaryCtor(fn, list));
        }
        return fn;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c87 = function(as) {return as;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c88 = function(as, bs) {return [].slice.call(as).concat([].slice.call(null != bs ? bs : []));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c89 = function(e) {return rp(new CS.NewOp(e, []));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c90 = function(e, args) {return rp(new CS.NewOp(e, args.operands[0]));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c91 = function(e, accesses) {return createMemberExpression(e, accesses);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c92 = function(e, args) {return rp(new CS.NewOp(e, args));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c93 = function(e, accesses) {var acc;
        acc = foldl(function (memo, a) {
          return memo.concat(a);
        }, [], accesses);
        return createMemberExpression(e, acc);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c94 = ".",
        peg$c95 = { type: "literal", value: ".", description: "\".\"" },
        peg$c96 = function(e) {return rp({
          op: CS.MemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c97 = "?.",
        peg$c98 = { type: "literal", value: "?.", description: "\"?.\"" },
        peg$c99 = function(e) {return rp({
          op: CS.SoakedMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c100 = "[",
        peg$c101 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c102 = "]",
        peg$c103 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c104 = function(e) {return rp({
          op: CS.DynamicMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c105 = "?[",
        peg$c106 = { type: "literal", value: "?[", description: "\"?[\"" },
        peg$c107 = function(e) {return rp({
          op: CS.SoakedDynamicMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c108 = "::",
        peg$c109 = { type: "literal", value: "::", description: "\"::\"" },
        peg$c110 = function(e) {return rp({
          op: CS.ProtoMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c111 = "::[",
        peg$c112 = { type: "literal", value: "::[", description: "\"::[\"" },
        peg$c113 = function(e) {return rp({
          op: CS.DynamicProtoMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c114 = "?::",
        peg$c115 = { type: "literal", value: "?::", description: "\"?::\"" },
        peg$c116 = function(e) {return rp({
          op: CS.SoakedProtoMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c117 = "?::[",
        peg$c118 = { type: "literal", value: "?::[", description: "\"?::[\"" },
        peg$c119 = function(e) {return rp({
          op: CS.SoakedDynamicProtoMemberAccessOp,
          operands: [e]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c120 = "..",
        peg$c121 = { type: "literal", value: "..", description: "\"..\"" },
        peg$c122 = function(left, exclusive, right) {return rp({
          op: CS.Slice,
          operands: [
            !exclusive,
            left,
            right
          ]
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c123 = "@",
        peg$c124 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c125 = function() {return rp(new CS.This);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c126 = function(e) {return r(e.clone());
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c127 = function(a, m) {return rp(new CS.MemberAccessOp(a, m));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c128 = "`",
        peg$c129 = { type: "literal", value: "`", description: "\"`\"" },
        peg$c130 = /^[^`]/,
        peg$c131 = { type: "class", value: "[^`]", description: "[^`]" },
        peg$c132 = function(d) {return rp(new CS.JavaScript(d));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c133 = "...",
        peg$c134 = { type: "literal", value: "...", description: "\"...\"" },
        peg$c135 = function(e) {return rp(new CS.Spread(e));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c136 = function(kw, cond, body, elseClause) {switch (kw) {
        case 'if':
          return rp(new CS.Conditional(cond, body.block, elseClause));
        case 'unless':
          return rp(new CS.NegatedConditional(new CS.LogicalNotOp(cond).g(), body.block, elseClause));
        }
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c137 = function(b) {return { block: b };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c138 = function(s) {return { block: s };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c139 = function() {return { block: null };
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c140 = function(b) {return b;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c141 = function(kw, cond, body) {switch (kw) {
        case 'while':
          return rp(new CS.While(cond, body.block));
        case 'until':
          return rp(new CS.NegatedWhile(new CS.LogicalNotOp(cond).g(), body.block));
        }
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c142 = function(body) {return rp(new CS.Loop(body.block));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c143 = function(body, c, f) {return rp(new CS.Try(body.block, null != (null != c ? c.assignee : void 0) ? null != c ? c.assignee : void 0 : null, null != (null != c ? c.block : void 0) ? null != c ? c.block : void 0 : null, null != (null != f ? f.block : void 0) ? null != f ? f.block : void 0 : null));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c144 = function(e, body) {return r({
          block: null != body ? body.block : new CS.Block([]),
          assignee: e
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c145 = function(body) {return r({ block: null != (null != body ? body.block : void 0) ? null != body ? body.block : void 0 : null });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c146 = function(name, parent, body) {var boundMembers, ctor, m, stmts;
        ctor = null;
        boundMembers = [];
        stmts = null != body ? null != body.statements ? body.statements : [body] : [];
        for (var i$ = 0, length$ = stmts.length; i$ < length$; ++i$) {
          m = stmts[i$];
          if (m['instanceof'](CS.Constructor)) {
            ctor = m;
          } else if (m['instanceof'](CS.ClassProtoAssignOp) && m.expression['instanceof'](CS.BoundFunction)) {
            boundMembers.push(m);
          }
        }
        return rp(new CS.Class(name, parent, ctor, body, boundMembers));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c147 = function(key) {return key['instanceof'](CS.String, CS.Identifier) && key.data === 'constructor';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c148 = ":",
        peg$c149 = { type: "literal", value: ":", description: "\":\"" },
        peg$c150 = function(key, fn) {if (fn['instanceof'](CS.BoundFunction))
          fn = c(new CS.Function(fn.parameters, fn.body).r(fn.raw), fn);
        return rp(new CS.Constructor(fn));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c151 = function(e) {return r({ expr: e });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c152 = function(key, e) {return rp(new CS.AssignOp(key, e.expr));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c153 = function(key, e) {return rp(new CS.ClassProtoAssignOp(key, e.expr));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c154 = function(own, key, val, obj, filter, body) {return rp(new CS.ForOf(Boolean(own), key, val, obj, filter, body.block));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c155 = function(valKey, list, step, filter, body) {var cache$, key, val;
        cache$ = null != valKey ? valKey : [
          null,
          null
        ];
        val = cache$[0];
        key = cache$[1];
        if (null != step)
          step;
        else
          step = new CS.Int(1).r('1').g();
        return rp(new CS.ForIn(val, key, list, step, filter, body.block));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c156 = function(e, body) {return rp(new CS.Switch(e, body.cases, null != body['else'] ? body['else'] : null));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c157 = function(b) {return r({
          cases: b.cases,
          'else': b['else']
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c158 = function(c) {return r({ cases: [c] });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c159 = function() {return r({ cases: [] });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c160 = function(c) {return c;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c161 = function(c, cs, elseClause) {return r({
          cases: [c].concat([].slice.call(cs)),
          'else': elseClause
        });
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c162 = function(conditions, body) {return rp(new CS.SwitchCase(conditions, body.block));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c163 = function(c, cs) {return [c].concat([].slice.call(cs));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c164 = function(p) {return p;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c165 = "->",
        peg$c166 = { type: "literal", value: "->", description: "\"->\"" },
        peg$c167 = "=>",
        peg$c168 = { type: "literal", value: "=>", description: "\"=>\"" },
        peg$c169 = function(params, arrow, body) {var constructor;
        constructor = function () {
          switch (arrow) {
          case '->':
            return CS.Function;
          case '=>':
            return CS.BoundFunction;
          }
        }.call(this);
        return rp(new constructor(null != params ? params : [], body));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c170 = function(param, default_) {return rp(new CS.DefaultParam(param, default_));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c171 = function(a, rest) {return rp(null != rest ? new CS.Rest(a) : a);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c172 = function(left, exclusiveDot, right) {var inclusive;
        inclusive = !exclusiveDot;
        return rp(new CS.Range(inclusive, left, right));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c173 = function(members) {return rp(new CS.ArrayInitialiser(members));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c174 = function(members) {return members;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c175 = function(members) {return null != members ? members : [];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c176 = "{",
        peg$c177 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c178 = "}",
        peg$c179 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c180 = function(members) {return rp(new CS.ObjectInitialiser(members));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c181 = function(v) {var key;
        key = p(new CS.String(v.memberName).g());
        return rp(new CS.ObjectInitialiserMember(key, v));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c182 = function(v) {return rp(new CS.ObjectInitialiserMember(v, v));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c183 = function(i) {return rp(new CS.Identifier(i));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c184 = function(key, val) {return rp(new CS.ObjectInitialiserMember(key, val));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c185 = "__LINE__",
        peg$c186 = { type: "literal", value: "__LINE__", description: "\"__LINE__\"" },
        peg$c187 = function() {return rp(new CS.Int(line()));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c188 = "__FILENAME__",
        peg$c189 = { type: "literal", value: "__FILENAME__", description: "\"__FILENAME__\"" },
        peg$c190 = function() {return rp(new CS.String(null != options.inputSource ? options.inputSource : ''));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c191 = "__DATE__",
        peg$c192 = { type: "literal", value: "__DATE__", description: "\"__DATE__\"" },
        peg$c193 = function() {return rp(new CS.String(new Date().toDateString().slice(4)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c194 = "__TIME__",
        peg$c195 = { type: "literal", value: "__TIME__", description: "\"__TIME__\"" },
        peg$c196 = function() {return rp(new CS.String(new Date().toTimeString().slice(0, 8)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c197 = "__DATETIMEMS__",
        peg$c198 = { type: "literal", value: "__DATETIMEMS__", description: "\"__DATETIMEMS__\"" },
        peg$c199 = function() {return rp(new CS.Int(+new Date));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c200 = "__COFFEE_VERSION__",
        peg$c201 = { type: "literal", value: "__COFFEE_VERSION__", description: "\"__COFFEE_VERSION__\"" },
        peg$c202 = function() {return rp(new CS.String(__webpack_require__(106).version));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c203 = function() {return rp(new CS.Bool(true));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c204 = function() {return rp(new CS.Bool(false));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c205 = "0b",
        peg$c206 = { type: "literal", value: "0b", description: "\"0b\"" },
        peg$c207 = function(bs) {return rp(new CS.Int(parseInt(bs, 2)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c208 = "0o",
        peg$c209 = { type: "literal", value: "0o", description: "\"0o\"" },
        peg$c210 = function(os) {return rp(new CS.Int(parseInt(os, 8)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c211 = "0x",
        peg$c212 = { type: "literal", value: "0x", description: "\"0x\"" },
        peg$c213 = function(hs) {return rp(new CS.Int(parseInt(hs, 16)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c214 = /^[eE]/,
        peg$c215 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c216 = /^[+\-]/,
        peg$c217 = { type: "class", value: "[+\\-]", description: "[+\\-]" },
        peg$c218 = function(base, e, sign, exponent) {return rp(new CS.Float(parseFloat('' + base.data + e + (null != sign ? sign : '') + exponent.data)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c219 = function(integral, fractional) {if (fractional) {
          return rp(new CS.Float(parseFloat(integral + fractional)));
        } else {
          return rp(new CS.Int(+integral));
        }
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c220 = "0",
        peg$c221 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c222 = /^[1-9]/,
        peg$c223 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c224 = /^[0-9]/,
        peg$c225 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c226 = /^[0-9a-fA-F]/,
        peg$c227 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c228 = /^[0-7]/,
        peg$c229 = { type: "class", value: "[0-7]", description: "[0-7]" },
        peg$c230 = /^[01]/,
        peg$c231 = { type: "class", value: "[01]", description: "[01]" },
        peg$c232 = "\"\"\"",
        peg$c233 = { type: "literal", value: "\"\"\"", description: "\"\\\"\\\"\\\"\"" },
        peg$c234 = "'",
        peg$c235 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c236 = "\"",
        peg$c237 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c238 = function(d) {return rp(new CS.String(stripLeadingWhitespace(d.join(''))));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c239 = "'''",
        peg$c240 = { type: "literal", value: "'''", description: "\"'''\"" },
        peg$c241 = "#",
        peg$c242 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c243 = function(d) {return rp(new CS.String(d.join('')));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c244 = /^[^"'\\#]/,
        peg$c245 = { type: "class", value: "[^\"'\\\\#]", description: "[^\"'\\\\#]" },
        peg$c246 = "\\x",
        peg$c247 = { type: "literal", value: "\\x", description: "\"\\\\x\"" },
        peg$c248 = function(h) {return String.fromCharCode(parseInt(h, 16));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c249 = "\\0",
        peg$c250 = { type: "literal", value: "\\0", description: "\"\\\\0\"" },
        peg$c251 = function() {return '\0';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c252 = function() {throw new SyntaxError(['string data'], 'octal escape sequence', offset(), line(), column());
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c253 = "\\b",
        peg$c254 = { type: "literal", value: "\\b", description: "\"\\\\b\"" },
        peg$c255 = function() {return '\b';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c256 = "\\t",
        peg$c257 = { type: "literal", value: "\\t", description: "\"\\\\t\"" },
        peg$c258 = function() {return '\t';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c259 = "\\n",
        peg$c260 = { type: "literal", value: "\\n", description: "\"\\\\n\"" },
        peg$c261 = function() {return '\n';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c262 = "\\v",
        peg$c263 = { type: "literal", value: "\\v", description: "\"\\\\v\"" },
        peg$c264 = function() {return '\x0B';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c265 = "\\f",
        peg$c266 = { type: "literal", value: "\\f", description: "\"\\\\f\"" },
        peg$c267 = function() {return '\f';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c268 = "\\r",
        peg$c269 = { type: "literal", value: "\\r", description: "\"\\\\r\"" },
        peg$c270 = function() {return '\r';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c271 = "\\",
        peg$c272 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c273 = { type: "any", description: "any character" },
        peg$c274 = "#{",
        peg$c275 = { type: "literal", value: "#{", description: "\"#{\"" },
        peg$c276 = function(es) {return rp(createInterpolation(stripLeadingWhitespaceInterpolation(es)));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c277 = function(es) {return rp(createInterpolation(es));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c278 = "///",
        peg$c279 = { type: "literal", value: "///", description: "\"///\"" },
        peg$c280 = /^[ \r\n]/,
        peg$c281 = { type: "class", value: "[ \\r\\n]", description: "[ \\r\\n]" },
        peg$c282 = function() {return [rp(new CS.String('').g())];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c283 = /^[^\\\/#[ \r\n]/,
        peg$c284 = { type: "class", value: "[^\\\\\\/#[ \\r\\n]", description: "[^\\\\\\/#[ \\r\\n]" },
        peg$c285 = function(s) {return [rp(new CS.String(s).g())];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c286 = /^[gimy]/,
        peg$c287 = { type: "class", value: "[gimy]", description: "[gimy]" },
        peg$c288 = function(es, flags) {var interp;
        if (!isValidRegExpFlags(flags))
          throw new SyntaxError(['regular expression flags'], 'regular expression flags', offset(), line(), column());
        interp = createInterpolation(foldl(function (memo, e) {
          return memo.concat(e);
        }, [], es));
        if (interp instanceof CS.String)
          return p(new CS.RegExp(interp.data, flags));
        return rp(new CS.HeregExp(interp, flags));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c289 = "/",
        peg$c290 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c291 = /^[^\/\\[\n]/,
        peg$c292 = { type: "class", value: "[^\\/\\\\[\\n]", description: "[^\\/\\\\[\\n]" },
        peg$c293 = function(d, flags) {if (!isValidRegExpFlags(flags))
          throw new SyntaxError(['regular expression flags'], 'regular expression flags', offset(), line(), column());
        return rp(new CS.RegExp(d, flags));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c294 = /^[^\\\]\n]/,
        peg$c295 = { type: "class", value: "[^\\\\\\]\\n]", description: "[^\\\\\\]\\n]" },
        peg$c296 = function(h) {return h[0];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c297 = /^[^\\\/\]]/,
        peg$c298 = { type: "class", value: "[^\\\\\\/\\]]", description: "[^\\\\\\/\\]]" },
        peg$c299 = function(s) {return p(new CS.String(s));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c300 = function(d) {return [p(new CS.String('['))].concat([].slice.call(d), [p(new CS.String(']'))]);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c301 = function(d) {return [rp(new CS.String(d))];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c302 = function(s) {return [rp(new CS.String(s))];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c303 = function(c) {return [rp(new CS.String(c))];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c304 = function(e) {return [e];
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c305 = function(e) {return rp(new CS.Throw(e));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c306 = function(e) {return rp(new CS.Return(e));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c307 = function() {return rp(new CS.Continue);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c308 = function() {return rp(new CS.Break);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c309 = function() {return rp(new CS.Debugger);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c310 = function() {return rp(new CS.Undefined);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c311 = function() {return rp(new CS.Null);
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c312 = "arguments",
        peg$c313 = { type: "literal", value: "arguments", description: "\"arguments\"" },
        peg$c314 = "eval",
        peg$c315 = { type: "literal", value: "eval", description: "\"eval\"" },
        peg$c316 = function(i) {return i;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c317 = function(v) {var key;
        key = rp(new CS.String(v.memberName));
        return rp(new CS.ObjectInitialiserMember(key, v));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c318 = function(i) {return rp(new CS.ObjectInitialiserMember(i, i));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c319 = /^[$_]/,
        peg$c320 = { type: "class", value: "[$_]", description: "[$_]" },
        peg$c321 = "###",
        peg$c322 = { type: "literal", value: "###", description: "\"###\"" },
        peg$c323 = /^[^#]/,
        peg$c324 = { type: "class", value: "[^#]", description: "[^#]" },
        peg$c325 = /^[\t\x0B\f \xA0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]/,
        peg$c326 = { type: "class", value: "[\\t\\x0B\\f \\xA0\\uFEFF\\u1680\\u180E\\u2000-\\u200A\\u202F\\u205F\\u3000]", description: "[\\t\\x0B\\f \\xA0\\uFEFF\\u1680\\u180E\\u2000-\\u200A\\u202F\\u205F\\u3000]" },
        peg$c327 = "\r",
        peg$c328 = { type: "literal", value: "\r", description: "\"\\r\"" },
        peg$c329 = "\n",
        peg$c330 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c331 = "\uEFEF",
        peg$c332 = { type: "literal", value: "\uEFEF", description: "\"\\uEFEF\"" },
        peg$c333 = function(ws) {return ws;
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c334 = "\uEFFE",
        peg$c335 = { type: "literal", value: "\uEFFE", description: "\"\\uEFFE\"" },
        peg$c336 = "\uEFFF",
        peg$c337 = { type: "literal", value: "\uEFFF", description: "\"\\uEFFF\"" },
        peg$c338 = function() {return '';
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c339 = "and",
        peg$c340 = { type: "literal", value: "and", description: "\"and\"" },
        peg$c341 = "break",
        peg$c342 = { type: "literal", value: "break", description: "\"break\"" },
        peg$c343 = "by",
        peg$c344 = { type: "literal", value: "by", description: "\"by\"" },
        peg$c345 = "catch",
        peg$c346 = { type: "literal", value: "catch", description: "\"catch\"" },
        peg$c347 = "continue",
        peg$c348 = { type: "literal", value: "continue", description: "\"continue\"" },
        peg$c349 = "class",
        peg$c350 = { type: "literal", value: "class", description: "\"class\"" },
        peg$c351 = "delete",
        peg$c352 = { type: "literal", value: "delete", description: "\"delete\"" },
        peg$c353 = "debugger",
        peg$c354 = { type: "literal", value: "debugger", description: "\"debugger\"" },
        peg$c355 = "do",
        peg$c356 = { type: "literal", value: "do", description: "\"do\"" },
        peg$c357 = "else",
        peg$c358 = { type: "literal", value: "else", description: "\"else\"" },
        peg$c359 = "extends",
        peg$c360 = { type: "literal", value: "extends", description: "\"extends\"" },
        peg$c361 = "false",
        peg$c362 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c363 = "finally",
        peg$c364 = { type: "literal", value: "finally", description: "\"finally\"" },
        peg$c365 = "for",
        peg$c366 = { type: "literal", value: "for", description: "\"for\"" },
        peg$c367 = "if",
        peg$c368 = { type: "literal", value: "if", description: "\"if\"" },
        peg$c369 = "in",
        peg$c370 = { type: "literal", value: "in", description: "\"in\"" },
        peg$c371 = "instanceof",
        peg$c372 = { type: "literal", value: "instanceof", description: "\"instanceof\"" },
        peg$c373 = "is",
        peg$c374 = { type: "literal", value: "is", description: "\"is\"" },
        peg$c375 = "isnt",
        peg$c376 = { type: "literal", value: "isnt", description: "\"isnt\"" },
        peg$c377 = "loop",
        peg$c378 = { type: "literal", value: "loop", description: "\"loop\"" },
        peg$c379 = "new",
        peg$c380 = { type: "literal", value: "new", description: "\"new\"" },
        peg$c381 = "no",
        peg$c382 = { type: "literal", value: "no", description: "\"no\"" },
        peg$c383 = "not",
        peg$c384 = { type: "literal", value: "not", description: "\"not\"" },
        peg$c385 = "null",
        peg$c386 = { type: "literal", value: "null", description: "\"null\"" },
        peg$c387 = "of",
        peg$c388 = { type: "literal", value: "of", description: "\"of\"" },
        peg$c389 = "off",
        peg$c390 = { type: "literal", value: "off", description: "\"off\"" },
        peg$c391 = "on",
        peg$c392 = { type: "literal", value: "on", description: "\"on\"" },
        peg$c393 = "or",
        peg$c394 = { type: "literal", value: "or", description: "\"or\"" },
        peg$c395 = "own",
        peg$c396 = { type: "literal", value: "own", description: "\"own\"" },
        peg$c397 = "return",
        peg$c398 = { type: "literal", value: "return", description: "\"return\"" },
        peg$c399 = "switch",
        peg$c400 = { type: "literal", value: "switch", description: "\"switch\"" },
        peg$c401 = "then",
        peg$c402 = { type: "literal", value: "then", description: "\"then\"" },
        peg$c403 = "this",
        peg$c404 = { type: "literal", value: "this", description: "\"this\"" },
        peg$c405 = "throw",
        peg$c406 = { type: "literal", value: "throw", description: "\"throw\"" },
        peg$c407 = "true",
        peg$c408 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c409 = "try",
        peg$c410 = { type: "literal", value: "try", description: "\"try\"" },
        peg$c411 = "typeof",
        peg$c412 = { type: "literal", value: "typeof", description: "\"typeof\"" },
        peg$c413 = "undefined",
        peg$c414 = { type: "literal", value: "undefined", description: "\"undefined\"" },
        peg$c415 = "unless",
        peg$c416 = { type: "literal", value: "unless", description: "\"unless\"" },
        peg$c417 = "until",
        peg$c418 = { type: "literal", value: "until", description: "\"until\"" },
        peg$c419 = "when",
        peg$c420 = { type: "literal", value: "when", description: "\"when\"" },
        peg$c421 = "while",
        peg$c422 = { type: "literal", value: "while", description: "\"while\"" },
        peg$c423 = "yes",
        peg$c424 = { type: "literal", value: "yes", description: "\"yes\"" },
        peg$c425 = "super",
        peg$c426 = { type: "literal", value: "super", description: "\"super\"" },
        peg$c427 = "case",
        peg$c428 = { type: "literal", value: "case", description: "\"case\"" },
        peg$c429 = "default",
        peg$c430 = { type: "literal", value: "default", description: "\"default\"" },
        peg$c431 = "function",
        peg$c432 = { type: "literal", value: "function", description: "\"function\"" },
        peg$c433 = "var",
        peg$c434 = { type: "literal", value: "var", description: "\"var\"" },
        peg$c435 = "void",
        peg$c436 = { type: "literal", value: "void", description: "\"void\"" },
        peg$c437 = "with",
        peg$c438 = { type: "literal", value: "with", description: "\"with\"" },
        peg$c439 = "const",
        peg$c440 = { type: "literal", value: "const", description: "\"const\"" },
        peg$c441 = "let",
        peg$c442 = { type: "literal", value: "let", description: "\"let\"" },
        peg$c443 = "enum",
        peg$c444 = { type: "literal", value: "enum", description: "\"enum\"" },
        peg$c445 = "export",
        peg$c446 = { type: "literal", value: "export", description: "\"export\"" },
        peg$c447 = "import",
        peg$c448 = { type: "literal", value: "import", description: "\"import\"" },
        peg$c449 = "native",
        peg$c450 = { type: "literal", value: "native", description: "\"native\"" },
        peg$c451 = "implements",
        peg$c452 = { type: "literal", value: "implements", description: "\"implements\"" },
        peg$c453 = "interface",
        peg$c454 = { type: "literal", value: "interface", description: "\"interface\"" },
        peg$c455 = "package",
        peg$c456 = { type: "literal", value: "package", description: "\"package\"" },
        peg$c457 = "private",
        peg$c458 = { type: "literal", value: "private", description: "\"private\"" },
        peg$c459 = "protected",
        peg$c460 = { type: "literal", value: "protected", description: "\"protected\"" },
        peg$c461 = "public",
        peg$c462 = { type: "literal", value: "public", description: "\"public\"" },
        peg$c463 = "static",
        peg$c464 = { type: "literal", value: "static", description: "\"static\"" },
        peg$c465 = "yield",
        peg$c466 = { type: "literal", value: "yield", description: "\"yield\"" },
        peg$c467 = "\\u",
        peg$c468 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c469 = function(h0, h1, h2, h3) {return String.fromCharCode(parseInt(h0 + h1 + h2 + h3, 16));
        function isOwn$(o, p) {
          return {}.hasOwnProperty.call(o, p);
        }
        function in$(member, list) {
          for (var i = 0, length = list.length; i < length; ++i)
            if (i in list && list[i] === member)
              return true;
          return false;
        }},
        peg$c470 = /^[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0531-\u0556\u10A0-\u10C5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uFF21-\uFF3Aa-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0561-\u0587\u1D00-\u1D2B\u1D62-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7C\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2D00-\u2D25\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7FA\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D61\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA717-\uA71F\uA770\uA788\uA9CF\uAA70\uAADD\uFF70\uFF9E\uFF9F\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BC0-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u2135-\u2138\u2D30-\u2D65\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400\u4DB5\u4E00\u9FCB\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA2D\uFA30-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]/,
        peg$c471 = { type: "class", value: "[A-Z\\xC0-\\xD6\\xD8-\\xDE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017B\\u017D\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019C\\u019D\\u019F\\u01A0\\u01A2\\u01A4\\u01A6\\u01A7\\u01A9\\u01AC\\u01AE\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7\\u01B8\\u01BC\\u01C4\\u01C7\\u01CA\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A\\u023B\\u023D\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u0386\\u0388-\\u038A\\u038C\\u038E\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0531-\\u0556\\u10A0-\\u10C5\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1FB8-\\u1FBB\\u1FC8-\\u1FCB\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFB\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E\\u213F\\u2145\\u2183\\u2C00-\\u2C2E\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uFF21-\\uFF3Aa-z\\xAA\\xB5\\xBA\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0561-\\u0587\\u1D00-\\u1D2B\\u1D62-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5E\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7C\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2D00-\\u2D25\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7FA\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u01C5\\u01C8\\u01CB\\u01F2\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FBC\\u1FCC\\u1FFC\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u0640\\u06E5\\u06E6\\u07F4\\u07F5\\u07FA\\u081A\\u0824\\u0828\\u0971\\u0E46\\u0EC6\\u10FC\\u17D7\\u1843\\u1AA7\\u1C78-\\u1C7D\\u1D2C-\\u1D61\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7D\\u2D6F\\u2E2F\\u3005\\u3031-\\u3035\\u303B\\u309D\\u309E\\u30FC-\\u30FE\\uA015\\uA4F8-\\uA4FD\\uA60C\\uA67F\\uA717-\\uA71F\\uA770\\uA788\\uA9CF\\uAA70\\uAADD\\uFF70\\uFF9E\\uFF9F\\u01BB\\u01C0-\\u01C3\\u0294\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u063F\\u0641-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u0800-\\u0815\\u0840-\\u0858\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0972-\\u0977\\u0979-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E45\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u1100-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17DC\\u1820-\\u1842\\u1844-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BC0-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C77\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u2135-\\u2138\\u2D30-\\u2D65\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3006\\u303C\\u3041-\\u3096\\u309F\\u30A1-\\u30FA\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FCB\\uA000-\\uA014\\uA016-\\uA48C\\uA4D0-\\uA4F7\\uA500-\\uA60B\\uA610-\\uA61F\\uA62A\\uA62B\\uA66E\\uA6A0-\\uA6E5\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA6F\\uAA71-\\uAA76\\uAA7A\\uAA80-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB\\uAADC\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA2D\\uFA30-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\u16EE-\\u16F0\\u2160-\\u2182\\u2185-\\u2188\\u3007\\u3021-\\u3029\\u3038-\\u303A\\uA6E6-\\uA6EF]", description: "[A-Z\\xC0-\\xD6\\xD8-\\xDE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017B\\u017D\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019C\\u019D\\u019F\\u01A0\\u01A2\\u01A4\\u01A6\\u01A7\\u01A9\\u01AC\\u01AE\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7\\u01B8\\u01BC\\u01C4\\u01C7\\u01CA\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A\\u023B\\u023D\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u0386\\u0388-\\u038A\\u038C\\u038E\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0531-\\u0556\\u10A0-\\u10C5\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1FB8-\\u1FBB\\u1FC8-\\u1FCB\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFB\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E\\u213F\\u2145\\u2183\\u2C00-\\u2C2E\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uFF21-\\uFF3Aa-z\\xAA\\xB5\\xBA\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0561-\\u0587\\u1D00-\\u1D2B\\u1D62-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5E\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7C\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2D00-\\u2D25\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7FA\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u01C5\\u01C8\\u01CB\\u01F2\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FBC\\u1FCC\\u1FFC\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u0640\\u06E5\\u06E6\\u07F4\\u07F5\\u07FA\\u081A\\u0824\\u0828\\u0971\\u0E46\\u0EC6\\u10FC\\u17D7\\u1843\\u1AA7\\u1C78-\\u1C7D\\u1D2C-\\u1D61\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7D\\u2D6F\\u2E2F\\u3005\\u3031-\\u3035\\u303B\\u309D\\u309E\\u30FC-\\u30FE\\uA015\\uA4F8-\\uA4FD\\uA60C\\uA67F\\uA717-\\uA71F\\uA770\\uA788\\uA9CF\\uAA70\\uAADD\\uFF70\\uFF9E\\uFF9F\\u01BB\\u01C0-\\u01C3\\u0294\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u063F\\u0641-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u0800-\\u0815\\u0840-\\u0858\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0972-\\u0977\\u0979-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E45\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u1100-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17DC\\u1820-\\u1842\\u1844-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BC0-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C77\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u2135-\\u2138\\u2D30-\\u2D65\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3006\\u303C\\u3041-\\u3096\\u309F\\u30A1-\\u30FA\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FCB\\uA000-\\uA014\\uA016-\\uA48C\\uA4D0-\\uA4F7\\uA500-\\uA60B\\uA610-\\uA61F\\uA62A\\uA62B\\uA66E\\uA6A0-\\uA6E5\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA6F\\uAA71-\\uAA76\\uAA7A\\uAA80-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB\\uAADC\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA2D\\uFA30-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\u16EE-\\u16F0\\u2160-\\u2182\\u2185-\\u2188\\u3007\\u3021-\\u3029\\u3038-\\u303A\\uA6E6-\\uA6EF]" },
        peg$c472 = "\uD82C",
        peg$c473 = { type: "literal", value: "\uD82C", description: "\"\\uD82C\"" },
        peg$c474 = /^[\uDC00\uDC01]/,
        peg$c475 = { type: "class", value: "[\\uDC00\\uDC01]", description: "[\\uDC00\\uDC01]" },
        peg$c476 = "\uD808",
        peg$c477 = { type: "literal", value: "\uD808", description: "\"\\uD808\"" },
        peg$c478 = /^[\uDC00-\uDF6E]/,
        peg$c479 = { type: "class", value: "[\\uDC00-\\uDF6E]", description: "[\\uDC00-\\uDF6E]" },
        peg$c480 = "\uD869",
        peg$c481 = { type: "literal", value: "\uD869", description: "\"\\uD869\"" },
        peg$c482 = /^[\uDED6\uDF00]/,
        peg$c483 = { type: "class", value: "[\\uDED6\\uDF00]", description: "[\\uDED6\\uDF00]" },
        peg$c484 = "\uD809",
        peg$c485 = { type: "literal", value: "\uD809", description: "\"\\uD809\"" },
        peg$c486 = /^[\uDC00-\uDC62]/,
        peg$c487 = { type: "class", value: "[\\uDC00-\\uDC62]", description: "[\\uDC00-\\uDC62]" },
        peg$c488 = "\uD835",
        peg$c489 = { type: "literal", value: "\uD835", description: "\"\\uD835\"" },
        peg$c490 = /^[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]/,
        peg$c491 = { type: "class", value: "[\\uDC00-\\uDC19\\uDC34-\\uDC4D\\uDC68-\\uDC81\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB5\\uDCD0-\\uDCE9\\uDD04\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD38\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD6C-\\uDD85\\uDDA0-\\uDDB9\\uDDD4-\\uDDED\\uDE08-\\uDE21\\uDE3C-\\uDE55\\uDE70-\\uDE89\\uDEA8-\\uDEC0\\uDEE2-\\uDEFA\\uDF1C-\\uDF34\\uDF56-\\uDF6E\\uDF90-\\uDFA8\\uDFCA\\uDC1A-\\uDC33\\uDC4E-\\uDC54\\uDC56-\\uDC67\\uDC82-\\uDC9B\\uDCB6-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDCCF\\uDCEA-\\uDD03\\uDD1E-\\uDD37\\uDD52-\\uDD6B\\uDD86-\\uDD9F\\uDDBA-\\uDDD3\\uDDEE-\\uDE07\\uDE22-\\uDE3B\\uDE56-\\uDE6F\\uDE8A-\\uDEA5\\uDEC2-\\uDEDA\\uDEDC-\\uDEE1\\uDEFC-\\uDF14\\uDF16-\\uDF1B\\uDF36-\\uDF4E\\uDF50-\\uDF55\\uDF70-\\uDF88\\uDF8A-\\uDF8F\\uDFAA-\\uDFC2\\uDFC4-\\uDFC9\\uDFCB]", description: "[\\uDC00-\\uDC19\\uDC34-\\uDC4D\\uDC68-\\uDC81\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB5\\uDCD0-\\uDCE9\\uDD04\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD38\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD6C-\\uDD85\\uDDA0-\\uDDB9\\uDDD4-\\uDDED\\uDE08-\\uDE21\\uDE3C-\\uDE55\\uDE70-\\uDE89\\uDEA8-\\uDEC0\\uDEE2-\\uDEFA\\uDF1C-\\uDF34\\uDF56-\\uDF6E\\uDF90-\\uDFA8\\uDFCA\\uDC1A-\\uDC33\\uDC4E-\\uDC54\\uDC56-\\uDC67\\uDC82-\\uDC9B\\uDCB6-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDCCF\\uDCEA-\\uDD03\\uDD1E-\\uDD37\\uDD52-\\uDD6B\\uDD86-\\uDD9F\\uDDBA-\\uDDD3\\uDDEE-\\uDE07\\uDE22-\\uDE3B\\uDE56-\\uDE6F\\uDE8A-\\uDEA5\\uDEC2-\\uDEDA\\uDEDC-\\uDEE1\\uDEFC-\\uDF14\\uDF16-\\uDF1B\\uDF36-\\uDF4E\\uDF50-\\uDF55\\uDF70-\\uDF88\\uDF8A-\\uDF8F\\uDFAA-\\uDFC2\\uDFC4-\\uDFC9\\uDFCB]" },
        peg$c492 = "\uD804",
        peg$c493 = { type: "literal", value: "\uD804", description: "\"\\uD804\"" },
        peg$c494 = /^[\uDC03-\uDC37\uDC83-\uDCAF]/,
        peg$c495 = { type: "class", value: "[\\uDC03-\\uDC37\\uDC83-\\uDCAF]", description: "[\\uDC03-\\uDC37\\uDC83-\\uDCAF]" },
        peg$c496 = "\uD800",
        peg$c497 = { type: "literal", value: "\uD800", description: "\"\\uD800\"" },
        peg$c498 = /^[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF30-\uDF40\uDF42-\uDF49\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]/,
        peg$c499 = { type: "class", value: "[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1E\\uDF30-\\uDF40\\uDF42-\\uDF49\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDD40-\\uDD74\\uDF41\\uDF4A\\uDFD1-\\uDFD5]", description: "[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1E\\uDF30-\\uDF40\\uDF42-\\uDF49\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDD40-\\uDD74\\uDF41\\uDF4A\\uDFD1-\\uDFD5]" },
        peg$c500 = "\uD80C",
        peg$c501 = { type: "literal", value: "\uD80C", description: "\"\\uD80C\"" },
        peg$c502 = /^[\uDC00-\uDFFF]/,
        peg$c503 = { type: "class", value: "[\\uDC00-\\uDFFF]", description: "[\\uDC00-\\uDFFF]" },
        peg$c504 = "\uD801",
        peg$c505 = { type: "literal", value: "\uD801", description: "\"\\uD801\"" },
        peg$c506 = /^[\uDC00-\uDC9D]/,
        peg$c507 = { type: "class", value: "[\\uDC00-\\uDC9D]", description: "[\\uDC00-\\uDC9D]" },
        peg$c508 = "\uD86E",
        peg$c509 = { type: "literal", value: "\uD86E", description: "\"\\uD86E\"" },
        peg$c510 = /^[\uDC1D]/,
        peg$c511 = { type: "class", value: "[\\uDC1D]", description: "[\\uDC1D]" },
        peg$c512 = "\uD803",
        peg$c513 = { type: "literal", value: "\uD803", description: "\"\\uD803\"" },
        peg$c514 = /^[\uDC00-\uDC48]/,
        peg$c515 = { type: "class", value: "[\\uDC00-\\uDC48]", description: "[\\uDC00-\\uDC48]" },
        peg$c516 = "\uD840",
        peg$c517 = { type: "literal", value: "\uD840", description: "\"\\uD840\"" },
        peg$c518 = /^[\uDC00]/,
        peg$c519 = { type: "class", value: "[\\uDC00]", description: "[\\uDC00]" },
        peg$c520 = "\uD87E",
        peg$c521 = { type: "literal", value: "\uD87E", description: "\"\\uD87E\"" },
        peg$c522 = /^[\uDC00-\uDE1D]/,
        peg$c523 = { type: "class", value: "[\\uDC00-\\uDE1D]", description: "[\\uDC00-\\uDE1D]" },
        peg$c524 = "\uD86D",
        peg$c525 = { type: "literal", value: "\uD86D", description: "\"\\uD86D\"" },
        peg$c526 = /^[\uDF34\uDF40]/,
        peg$c527 = { type: "class", value: "[\\uDF34\\uDF40]", description: "[\\uDF34\\uDF40]" },
        peg$c528 = "\uD81A",
        peg$c529 = { type: "literal", value: "\uD81A", description: "\"\\uD81A\"" },
        peg$c530 = /^[\uDC00-\uDE38]/,
        peg$c531 = { type: "class", value: "[\\uDC00-\\uDE38]", description: "[\\uDC00-\\uDE38]" },
        peg$c532 = "\uD802",
        peg$c533 = { type: "literal", value: "\uD802", description: "\"\\uD802\"" },
        peg$c534 = /^[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDD00-\uDD15\uDD20-\uDD39\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72]/,
        peg$c535 = { type: "class", value: "[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE60-\\uDE7C\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72]", description: "[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE60-\\uDE7C\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72]" },
        peg$c536 = "\uD80D",
        peg$c537 = { type: "literal", value: "\uD80D", description: "\"\\uD80D\"" },
        peg$c538 = /^[\uDC00-\uDC2E]/,
        peg$c539 = { type: "class", value: "[\\uDC00-\\uDC2E]", description: "[\\uDC00-\\uDC2E]" },
        peg$c540 = /^[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0900-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1DC0-\u1DE6\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u19B0-\u19C0\u19C8\u19C9\u1A19-\u1A1B\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]/,
        peg$c541 = { type: "class", value: "[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0900-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF1\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFC-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u094F\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1BF2\\u1BF3\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]", description: "[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0900-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF1\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFC-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u094F\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1BF2\\u1BF3\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]" },
        peg$c542 = "\uDB40",
        peg$c543 = { type: "literal", value: "\uDB40", description: "\"\\uDB40\"" },
        peg$c544 = /^[\uDD00-\uDDEF]/,
        peg$c545 = { type: "class", value: "[\\uDD00-\\uDDEF]", description: "[\\uDD00-\\uDDEF]" },
        peg$c546 = "\uD834",
        peg$c547 = { type: "literal", value: "\uD834", description: "\"\\uD834\"" },
        peg$c548 = /^[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDD65\uDD66\uDD6D-\uDD72]/,
        peg$c549 = { type: "class", value: "[\\uDD67-\\uDD69\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44\\uDD65\\uDD66\\uDD6D-\\uDD72]", description: "[\\uDD67-\\uDD69\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44\\uDD65\\uDD66\\uDD6D-\\uDD72]" },
        peg$c550 = /^[\uDC01\uDC38-\uDC46\uDC80\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8]/,
        peg$c551 = { type: "class", value: "[\\uDC01\\uDC38-\\uDC46\\uDC80\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDC00\\uDC02\\uDC82\\uDCB0-\\uDCB2\\uDCB7\\uDCB8]", description: "[\\uDC01\\uDC38-\\uDC46\\uDC80\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDC00\\uDC02\\uDC82\\uDCB0-\\uDCB2\\uDCB7\\uDCB8]" },
        peg$c552 = /^[\uDDFD]/,
        peg$c553 = { type: "class", value: "[\\uDDFD]", description: "[\\uDDFD]" },
        peg$c554 = /^[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F]/,
        peg$c555 = { type: "class", value: "[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F]", description: "[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F]" },
        peg$c556 = /^[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/,
        peg$c557 = { type: "class", value: "[0-9\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]", description: "[0-9\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]" },
        peg$c558 = /^[\uDFCE-\uDFFF]/,
        peg$c559 = { type: "class", value: "[\\uDFCE-\\uDFFF]", description: "[\\uDFCE-\\uDFFF]" },
        peg$c560 = /^[\uDC66-\uDC6F]/,
        peg$c561 = { type: "class", value: "[\\uDC66-\\uDC6F]", description: "[\\uDC66-\\uDC6F]" },
        peg$c562 = /^[\uDCA0-\uDCA9]/,
        peg$c563 = { type: "class", value: "[\\uDCA0-\\uDCA9]", description: "[\\uDCA0-\\uDCA9]" },
        peg$c564 = /^[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]/,
        peg$c565 = { type: "class", value: "[_\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]", description: "[_\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]" },
        peg$c566 = "\u200C",
        peg$c567 = { type: "literal", value: "\u200C", description: "\"\\u200C\"" },
        peg$c568 = "\u200D",
        peg$c569 = { type: "literal", value: "\u200D", description: "\"\\u200D\"" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$cache = {},
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

    function peg$parseprogram() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 0,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINATOR();
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsetoplevelBlock();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c2(s1, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetoplevelBlock() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 1,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsetoplevelStatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTERMINATOR();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsetoplevelStatement();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c4(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsetoplevelStatement();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c4(s7);
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
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c5(s1, s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetoplevelStatement() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 2,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsereturn();
      if (s2 === peg$FAILED) {
        s2 = peg$parsecontinue();
        if (s2 === peg$FAILED) {
          s2 = peg$parsebreak();
        }
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c6;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestatement();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c4(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseblock() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 3,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsestatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTERMINATOR();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsestatement();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c4(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsestatement();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c4(s7);
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
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c5(s1, s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestatement() {
      var s0;

      var key    = peg$currPos * 204 + 4,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseexpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parsereturn();
        if (s0 === peg$FAILED) {
          s0 = peg$parsecontinue();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebreak();
            if (s0 === peg$FAILED) {
              s0 = peg$parsethrow();
              if (s0 === peg$FAILED) {
                s0 = peg$parsedebugger();
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexpression() {
      var s0;

      var key    = peg$currPos * 204 + 5,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseexpressionworthy();
      if (s0 === peg$FAILED) {
        s0 = peg$parseseqExpression();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryStatement() {
      var s0;

      var key    = peg$currPos * 204 + 6,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsesecondaryExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parsereturn();
        if (s0 === peg$FAILED) {
          s0 = peg$parsecontinue();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebreak();
            if (s0 === peg$FAILED) {
              s0 = peg$parsethrow();
              if (s0 === peg$FAILED) {
                s0 = peg$parsedebugger();
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryExpression() {
      var s0;

      var key    = peg$currPos * 204 + 7,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseexpressionworthy();
      if (s0 === peg$FAILED) {
        s0 = peg$parseassignmentExpression();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryExpressionNoImplicitObjectCall() {
      var s0;

      var key    = peg$currPos * 204 + 8,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseexpressionworthy();
      if (s0 === peg$FAILED) {
        s0 = peg$parseassignmentExpressionNoImplicitObjectCall();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexpressionworthy() {
      var s0;

      var key    = peg$currPos * 204 + 9,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsefunctionLiteral();
      if (s0 === peg$FAILED) {
        s0 = peg$parseconditional();
        if (s0 === peg$FAILED) {
          s0 = peg$parsewhile();
          if (s0 === peg$FAILED) {
            s0 = peg$parseloop();
            if (s0 === peg$FAILED) {
              s0 = peg$parsetry();
              if (s0 === peg$FAILED) {
                s0 = peg$parseforOf();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseforIn();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseswitch();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseimplicitObjectLiteral();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseclass();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseseqExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 10,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsepostfixControlFlowExpression();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 59) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 === peg$FAILED) {
              s5 = peg$c1;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseexpression();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s2;
                  s3 = peg$c9(s7);
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
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c10(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfixControlFlowExpression() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 11,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsesecondaryStatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsepostfixControlFlowOp();
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsepostfixControlFlowOp();
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
          peg$reportedPos = s0;
          s1 = peg$c11(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfixControlFlowOp() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      var key    = peg$currPos * 204 + 12,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIF();
      if (s1 === peg$FAILED) {
        s1 = peg$parseUNLESS();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseassignmentExpression();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c12(s1, s3);
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
        s1 = peg$parseWHILE();
        if (s1 === peg$FAILED) {
          s1 = peg$parseUNTIL();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseassignmentExpression();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c12(s1, s3);
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
          s1 = peg$parseFOR();
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$parseAssignable();
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s7 = peg$c13;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c14); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseAssignable();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s6;
                          s7 = peg$c15(s9);
                          s6 = s7;
                        } else {
                          peg$currPos = s6;
                          s6 = peg$c0;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                  if (s6 === peg$FAILED) {
                    s6 = peg$c1;
                  }
                  if (s6 !== peg$FAILED) {
                    peg$reportedPos = s3;
                    s4 = peg$c16(s4, s6);
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
              if (s3 === peg$FAILED) {
                s3 = peg$c1;
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parseIN();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseassignmentExpression();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$currPos;
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseBY();
                        if (s9 !== peg$FAILED) {
                          s10 = peg$parse_();
                          if (s10 !== peg$FAILED) {
                            s11 = peg$parseassignmentExpression();
                            if (s11 !== peg$FAILED) {
                              peg$reportedPos = s7;
                              s8 = peg$c15(s11);
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
                      } else {
                        peg$currPos = s7;
                        s7 = peg$c0;
                      }
                      if (s7 === peg$FAILED) {
                        s7 = peg$c1;
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$currPos;
                        s9 = peg$parse_();
                        if (s9 !== peg$FAILED) {
                          s10 = peg$parseWHEN();
                          if (s10 !== peg$FAILED) {
                            s11 = peg$parse_();
                            if (s11 !== peg$FAILED) {
                              s12 = peg$parseassignmentExpression();
                              if (s12 !== peg$FAILED) {
                                peg$reportedPos = s8;
                                s9 = peg$c15(s12);
                                s8 = s9;
                              } else {
                                peg$currPos = s8;
                                s8 = peg$c0;
                              }
                            } else {
                              peg$currPos = s8;
                              s8 = peg$c0;
                            }
                          } else {
                            peg$currPos = s8;
                            s8 = peg$c0;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$c0;
                        }
                        if (s8 === peg$FAILED) {
                          s8 = peg$c1;
                        }
                        if (s8 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c17(s3, s6, s7, s8);
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
            s1 = peg$parseFOR();
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$parseOWN();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
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
                  s3 = peg$c1;
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parseAssignable();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse_();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s7 = peg$c13;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c14); }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parse_();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseAssignable();
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parse_();
                            if (s10 !== peg$FAILED) {
                              peg$reportedPos = s6;
                              s7 = peg$c15(s9);
                              s6 = s7;
                            } else {
                              peg$currPos = s6;
                              s6 = peg$c0;
                            }
                          } else {
                            peg$currPos = s6;
                            s6 = peg$c0;
                          }
                        } else {
                          peg$currPos = s6;
                          s6 = peg$c0;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                      if (s6 === peg$FAILED) {
                        s6 = peg$c1;
                      }
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parseOF();
                        if (s7 !== peg$FAILED) {
                          s8 = peg$parse_();
                          if (s8 !== peg$FAILED) {
                            s9 = peg$parseassignmentExpression();
                            if (s9 !== peg$FAILED) {
                              s10 = peg$currPos;
                              s11 = peg$parse_();
                              if (s11 !== peg$FAILED) {
                                s12 = peg$parseWHEN();
                                if (s12 !== peg$FAILED) {
                                  s13 = peg$parse_();
                                  if (s13 !== peg$FAILED) {
                                    s14 = peg$parseassignmentExpression();
                                    if (s14 !== peg$FAILED) {
                                      peg$reportedPos = s10;
                                      s11 = peg$c15(s14);
                                      s10 = s11;
                                    } else {
                                      peg$currPos = s10;
                                      s10 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s10;
                                    s10 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s10;
                                  s10 = peg$c0;
                                }
                              } else {
                                peg$currPos = s10;
                                s10 = peg$c0;
                              }
                              if (s10 === peg$FAILED) {
                                s10 = peg$c1;
                              }
                              if (s10 !== peg$FAILED) {
                                peg$reportedPos = s0;
                                s1 = peg$c18(s3, s4, s6, s9, s10);
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignmentExpression() {
      var s0;

      var key    = peg$currPos * 204 + 13,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseassignmentOp();
      if (s0 === peg$FAILED) {
        s0 = peg$parsecompoundAssignmentOp();
        if (s0 === peg$FAILED) {
          s0 = peg$parseexistsAssignmentOp();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebinaryExpression();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignmentOp() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 14,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            if (input.charCodeAt(peg$currPos) === 61) {
              s5 = peg$c19;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = peg$c6;
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsesecondaryExpression();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c9(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsesecondaryExpression();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c9(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c21(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecompoundAssignmentOp() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 204 + 15,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCompoundAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 63) {
            s4 = peg$c22;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = peg$c6;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCompoundAssignmentOperators();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 61) {
                s5 = peg$c19;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                s7 = peg$parseTERMINDENT();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsesecondaryExpression();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseDEDENT();
                    if (s9 !== peg$FAILED) {
                      peg$reportedPos = s6;
                      s7 = peg$c9(s8);
                      s6 = s7;
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 === peg$FAILED) {
                  s6 = peg$currPos;
                  s7 = peg$parseTERMINATOR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$c1;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsesecondaryExpression();
                      if (s9 !== peg$FAILED) {
                        peg$reportedPos = s6;
                        s7 = peg$c9(s9);
                        s6 = s7;
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c24(s1, s4, s6);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCompoundAssignmentOperators() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 16,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$parseAND();
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c27) {
            s1 = peg$c27;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
          if (s1 === peg$FAILED) {
            s1 = peg$parseOR();
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c29) {
                s1 = peg$c29;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c30); }
              }
              if (s1 === peg$FAILED) {
                if (peg$c31.test(input.charAt(peg$currPos))) {
                  s1 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c32); }
                }
                if (s1 === peg$FAILED) {
                  s1 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 43) {
                    s2 = peg$c33;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 43) {
                      s4 = peg$c33;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = peg$c6;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$c0;
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
                  if (s1 === peg$FAILED) {
                    s1 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 45) {
                      s2 = peg$c35;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c36); }
                    }
                    if (s2 !== peg$FAILED) {
                      s3 = peg$currPos;
                      peg$silentFails++;
                      if (input.charCodeAt(peg$currPos) === 45) {
                        s4 = peg$c35;
                        peg$currPos++;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c36); }
                      }
                      peg$silentFails--;
                      if (s4 === peg$FAILED) {
                        s3 = peg$c6;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$c0;
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
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c37) {
                        s1 = peg$c37;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c38); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c39) {
                          s1 = peg$c39;
                          peg$currPos += 3;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c40); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 2) === peg$c41) {
                            s1 = peg$c41;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c42); }
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexistsAssignmentOp() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 17,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCompoundAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c43) {
            s3 = peg$c43;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsesecondaryExpression();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c9(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsesecondaryExpression();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c9(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c45(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignmentExpressionNoImplicitObjectCall() {
      var s0;

      var key    = peg$currPos * 204 + 18,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseassignmentOpNoImplicitObjectCall();
      if (s0 === peg$FAILED) {
        s0 = peg$parsecompoundAssignmentOpNoImplicitObjectCall();
        if (s0 === peg$FAILED) {
          s0 = peg$parseexistsAssignmentOpNoImplicitObjectCall();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebinaryExpressionNoImplicitObjectCall();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseassignmentOpNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 19,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            peg$silentFails++;
            if (input.charCodeAt(peg$currPos) === 61) {
              s5 = peg$c19;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            peg$silentFails--;
            if (s5 === peg$FAILED) {
              s4 = peg$c6;
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c9(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c9(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c21(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecompoundAssignmentOpNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 204 + 20,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCompoundAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 63) {
            s4 = peg$c22;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = peg$c6;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseCompoundAssignmentOperators();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 61) {
                s5 = peg$c19;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                s7 = peg$parseTERMINDENT();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseDEDENT();
                    if (s9 !== peg$FAILED) {
                      peg$reportedPos = s6;
                      s7 = peg$c9(s8);
                      s6 = s7;
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 === peg$FAILED) {
                  s6 = peg$currPos;
                  s7 = peg$parseTERMINATOR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$c1;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                      if (s9 !== peg$FAILED) {
                        peg$reportedPos = s6;
                        s7 = peg$c9(s9);
                        s6 = s7;
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c24(s1, s4, s6);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexistsAssignmentOpNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 21,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCompoundAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c43) {
            s3 = peg$c43;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c9(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c9(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c45(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebinaryExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 22,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseprefixExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsebinaryOperator();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseTERMINATOR();
            if (s6 === peg$FAILED) {
              s6 = peg$c1;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseexpressionworthy();
                if (s8 === peg$FAILED) {
                  s8 = peg$parseprefixExpression();
                }
                if (s8 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c46(s5, s8);
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
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsebinaryOperator();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseTERMINATOR();
              if (s6 === peg$FAILED) {
                s6 = peg$c1;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseexpressionworthy();
                  if (s8 === peg$FAILED) {
                    s8 = peg$parseprefixExpression();
                  }
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s3;
                    s4 = peg$c46(s5, s8);
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
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c47(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebinaryOperator() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 23,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseCompoundAssignmentOperators();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 61) {
          s4 = peg$c19;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c48) {
          s0 = peg$c48;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c50) {
            s0 = peg$c50;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c51); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 60) {
              s0 = peg$c52;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c53); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 62) {
                s0 = peg$c54;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c55); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c56) {
                  s0 = peg$c56;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c57); }
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$parseIS();
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c58) {
                      s0 = peg$c58;
                      peg$currPos += 2;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c59); }
                    }
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseISNT();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseEXTENDS();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseINSTANCEOF();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseIN();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parseOF();
                              if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$parseNOT();
                                if (s1 !== peg$FAILED) {
                                  s2 = peg$parse_();
                                  if (s2 !== peg$FAILED) {
                                    s3 = peg$parseINSTANCEOF();
                                    if (s3 === peg$FAILED) {
                                      s3 = peg$parseIN();
                                      if (s3 === peg$FAILED) {
                                        s3 = peg$parseOF();
                                      }
                                    }
                                    if (s3 !== peg$FAILED) {
                                      peg$reportedPos = s0;
                                      s1 = peg$c60(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebinaryExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 24,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseprefixExpressionNoImplicitObjectCall();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsebinaryOperator();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseTERMINATOR();
            if (s6 === peg$FAILED) {
              s6 = peg$c1;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseexpressionworthy();
                if (s8 === peg$FAILED) {
                  s8 = peg$parseprefixExpressionNoImplicitObjectCall();
                }
                if (s8 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c46(s5, s8);
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
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsebinaryOperator();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseTERMINATOR();
              if (s6 === peg$FAILED) {
                s6 = peg$c1;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseexpressionworthy();
                  if (s8 === peg$FAILED) {
                    s8 = peg$parseprefixExpressionNoImplicitObjectCall();
                  }
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s3;
                    s4 = peg$c46(s5, s8);
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
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c47(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprefixExpression() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 25,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsepostfixExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDO();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsenfe();
            if (s3 === peg$FAILED) {
              s3 = peg$parseexpressionworthy();
              if (s3 === peg$FAILED) {
                s3 = peg$parseprefixExpression();
              }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c61(s3);
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
          s1 = [];
          s2 = peg$currPos;
          s3 = peg$parsePrefixOperators();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s2;
              s3 = peg$c62(s3);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$currPos;
              s3 = peg$parsePrefixOperators();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  peg$reportedPos = s2;
                  s3 = peg$c62(s3);
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$c0;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
            }
          } else {
            s1 = peg$c0;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseexpressionworthy();
            if (s2 === peg$FAILED) {
              s2 = peg$parseprefixExpression();
            }
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c63(s1, s2);
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePrefixOperators() {
      var s0;

      var key    = peg$currPos * 204 + 26,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (input.substr(peg$currPos, 2) === peg$c64) {
        s0 = peg$c64;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c65); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c66) {
          s0 = peg$c66;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c67); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 43) {
            s0 = peg$c33;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c34); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s0 = peg$c35;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c36); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 33) {
                s0 = peg$c68;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c69); }
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseNOT();
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 126) {
                    s0 = peg$c70;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c71); }
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseDO();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseTYPEOF();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseDELETE();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenfe() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 27,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseunassignable();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c6;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseAssignable();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 61) {
              s4 = peg$c19;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsefunctionLiteral();
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c72(s2, s6);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprefixExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 28,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsepostfixExpressionNoImplicitObjectCall();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDO();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsenfe();
            if (s3 === peg$FAILED) {
              s3 = peg$parseexpressionworthy();
              if (s3 === peg$FAILED) {
                s3 = peg$parseprefixExpressionNoImplicitObjectCall();
              }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c61(s3);
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
          s1 = [];
          s2 = peg$currPos;
          s3 = peg$parsePrefixOperators();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s2;
              s3 = peg$c62(s3);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$currPos;
              s3 = peg$parsePrefixOperators();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  peg$reportedPos = s2;
                  s3 = peg$c62(s3);
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$c0;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
            }
          } else {
            s1 = peg$c0;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseexpressionworthy();
            if (s2 === peg$FAILED) {
              s2 = peg$parseprefixExpressionNoImplicitObjectCall();
            }
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c63(s1, s2);
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfixExpression() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 29,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseleftHandSideExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsePostfixOperators();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsePostfixOperators();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c73(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsePostfixOperators() {
      var s0;

      var key    = peg$currPos * 204 + 30,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (input.charCodeAt(peg$currPos) === 63) {
        s0 = peg$c22;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c74) {
          s0 = peg$c74;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c75); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c64) {
            s0 = peg$c64;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c65); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c66) {
              s0 = peg$c66;
              peg$currPos += 2;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c67); }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepostfixExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 31,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseleftHandSideExpressionNoImplicitObjectCall();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsePostfixOperators();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsePostfixOperators();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c73(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseleftHandSideExpression() {
      var s0;

      var key    = peg$currPos * 204 + 32,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsecallExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$parsenewExpression();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseargumentList() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 33,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 63) {
        s1 = peg$c22;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c76;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c77); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseargumentListContents();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s6 = peg$c78;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c79); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c80(s1, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseargumentListContents() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 34,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseargument();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c13;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s5 === peg$FAILED) {
            s5 = peg$parseTERMINATOR();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseargument();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c15(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c13;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s5 === peg$FAILED) {
              s5 = peg$parseTERMINATOR();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseargument();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c15(s7);
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
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c13;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseTERMINATOR();
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c81(s1, s2);
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
        s1 = peg$parseTERMINDENT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseargumentListContents();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseDEDENT();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseTERMINATOR();
              if (s4 === peg$FAILED) {
                s4 = peg$c1;
              }
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c15(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseargument() {
      var s0;

      var key    = peg$currPos * 204 + 35,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsespread();
      if (s0 === peg$FAILED) {
        s0 = peg$parseexpression();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      var key    = peg$currPos * 204 + 36,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse__();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$currPos;
        if (peg$c82.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c83); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse__();
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
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesecondaryArgument();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$currPos;
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s7 = peg$c13;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseTERMINATOR();
                  if (s9 === peg$FAILED) {
                    s9 = peg$c1;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parse_();
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parsesecondaryArgument();
                      if (s11 !== peg$FAILED) {
                        peg$reportedPos = s5;
                        s6 = peg$c15(s11);
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
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s7 = peg$c13;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c14); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseTERMINATOR();
                    if (s9 === peg$FAILED) {
                      s9 = peg$c1;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsesecondaryArgument();
                        if (s11 !== peg$FAILED) {
                          peg$reportedPos = s5;
                          s6 = peg$c15(s11);
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
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c13;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s6 === peg$FAILED) {
                s6 = peg$c1;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTERMINDENT();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseimplicitObjectLiteral();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseDEDENT();
                    if (s9 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c62(s8);
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
                s5 = peg$c1;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c84(s3, s4, s5);
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
        s1 = peg$parseTERMINDENT();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseimplicitObjectLiteral();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseDEDENT();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c85(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryArgument() {
      var s0;

      var key    = peg$currPos * 204 + 37,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsespread();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesingleLineImplicitObjectLiteral();
        if (s0 === peg$FAILED) {
          s0 = peg$parsesecondaryExpression();
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseleftHandSideExpressionNoImplicitObjectCall() {
      var s0;

      var key    = peg$currPos * 204 + 38,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsecallExpressionNoImplicitObjectCall();
      if (s0 === peg$FAILED) {
        s0 = peg$parsenewExpressionNoImplicitObjectCall();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryArgumentListNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      var key    = peg$currPos * 204 + 39,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse__();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$currPos;
        if (peg$c82.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c83); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse__();
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
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesecondaryArgumentNoImplicitObjectCall();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$currPos;
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s7 = peg$c13;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseTERMINATOR();
                  if (s9 === peg$FAILED) {
                    s9 = peg$c1;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parse_();
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parsesecondaryArgumentNoImplicitObjectCall();
                      if (s11 !== peg$FAILED) {
                        peg$reportedPos = s5;
                        s6 = peg$c9(s11);
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
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s7 = peg$c13;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c14); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseTERMINATOR();
                    if (s9 === peg$FAILED) {
                      s9 = peg$c1;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsesecondaryArgumentNoImplicitObjectCall();
                        if (s11 !== peg$FAILED) {
                          peg$reportedPos = s5;
                          s6 = peg$c9(s11);
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
              peg$reportedPos = s0;
              s1 = peg$c81(s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesecondaryArgumentNoImplicitObjectCall() {
      var s0;

      var key    = peg$currPos * 204 + 40,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsespreadNoImplicitObjectCall();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesecondaryExpressionNoImplicitObjectCall();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecallExpression() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 41,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsememberExpression();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecallExpressionAccesses();
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 63) {
            s4 = peg$c22;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$c1;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsesecondaryArgumentList();
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
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c86(s1, s2, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecallExpressionAccesses() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 42,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecallExpressionAccesses();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEDENT();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c87(s2);
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
        s1 = [];
        s2 = peg$parseargumentList();
        if (s2 === peg$FAILED) {
          s2 = peg$parseMemberAccessOps();
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseargumentList();
            if (s2 === peg$FAILED) {
              s2 = peg$parseMemberAccessOps();
            }
          }
        } else {
          s1 = peg$c0;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsecallExpressionAccesses();
          if (s2 === peg$FAILED) {
            s2 = peg$c1;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c88(s1, s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecallExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 43,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsememberExpressionNoImplicitObjectCall();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseargumentList();
        if (s3 === peg$FAILED) {
          s3 = peg$parseMemberAccessOps();
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseargumentList();
          if (s3 === peg$FAILED) {
            s3 = peg$parseMemberAccessOps();
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 63) {
            s4 = peg$c22;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$c1;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsesecondaryArgumentListNoImplicitObjectCall();
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
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c86(s1, s2, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenewExpression() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 44,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsememberExpression();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNEW();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseexpressionworthy();
            if (s3 === peg$FAILED) {
              s3 = peg$parsenewExpression();
              if (s3 === peg$FAILED) {
                s3 = peg$parseprefixExpression();
              }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c89(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenewExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 45,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsememberExpressionNoImplicitObjectCall();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNEW();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseexpressionworthy();
            if (s3 === peg$FAILED) {
              s3 = peg$parsenewExpressionNoImplicitObjectCall();
              if (s3 === peg$FAILED) {
                s3 = peg$parseprefixExpressionNoImplicitObjectCall();
              }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c89(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsememberExpression() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 46,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseprimaryExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parseNEW();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsememberExpression();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseargumentList();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s1;
                s2 = peg$c90(s4, s5);
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
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseMemberAccessOps();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseMemberAccessOps();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c91(s1, s2);
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
        s1 = peg$parseNEW();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsememberExpression();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsesecondaryArgumentList();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c92(s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsememberAccess() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 47,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseprimaryExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parseNEW();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsememberExpression();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseargumentList();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s1;
                s2 = peg$c90(s4, s5);
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
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseargumentList();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseMemberAccessOps();
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
          s3 = peg$parseMemberAccessOps();
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parseargumentList();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseMemberAccessOps();
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
              s3 = peg$parseMemberAccessOps();
            }
          }
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c93(s1, s2);
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
        s0 = peg$parsecontextVar();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseMemberAccessOps() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      var key    = peg$currPos * 204 + 48,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c94;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c95); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseidentifierName();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseMemberAccessOps();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseMemberAccessOps();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseDEDENT();
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c96(s4);
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
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseTERMINATOR();
        if (s1 === peg$FAILED) {
          s1 = peg$c1;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s3 = peg$c94;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c95); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseTERMINATOR();
              if (s4 === peg$FAILED) {
                s4 = peg$c1;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseidentifierName();
                  if (s6 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c96(s6);
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
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c97) {
            s1 = peg$c97;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c98); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseidentifierName();
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c99(s3);
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
              s1 = peg$c100;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c101); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseexpression();
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse_();
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s5 = peg$c102;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c103); }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c104(s3);
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
              if (input.substr(peg$currPos, 2) === peg$c105) {
                s1 = peg$c105;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c106); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parse_();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseexpression();
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s5 = peg$c102;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c103); }
                      }
                      if (s5 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c107(s3);
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
                if (input.substr(peg$currPos, 2) === peg$c108) {
                  s1 = peg$c108;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c109); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parse_();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseidentifierName();
                    if (s3 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c110(s3);
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
                  if (input.substr(peg$currPos, 3) === peg$c111) {
                    s1 = peg$c111;
                    peg$currPos += 3;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c112); }
                  }
                  if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                      s3 = peg$parseexpression();
                      if (s3 !== peg$FAILED) {
                        s4 = peg$parse_();
                        if (s4 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 93) {
                            s5 = peg$c102;
                            peg$currPos++;
                          } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c103); }
                          }
                          if (s5 !== peg$FAILED) {
                            peg$reportedPos = s0;
                            s1 = peg$c113(s3);
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
                    if (input.substr(peg$currPos, 3) === peg$c114) {
                      s1 = peg$c114;
                      peg$currPos += 3;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c115); }
                    }
                    if (s1 !== peg$FAILED) {
                      s2 = peg$parse_();
                      if (s2 !== peg$FAILED) {
                        s3 = peg$parseidentifierName();
                        if (s3 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c116(s3);
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
                      if (input.substr(peg$currPos, 4) === peg$c117) {
                        s1 = peg$c117;
                        peg$currPos += 4;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c118); }
                      }
                      if (s1 !== peg$FAILED) {
                        s2 = peg$parse_();
                        if (s2 !== peg$FAILED) {
                          s3 = peg$parseexpression();
                          if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 93) {
                                s5 = peg$c102;
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c103); }
                              }
                              if (s5 !== peg$FAILED) {
                                peg$reportedPos = s0;
                                s1 = peg$c119(s3);
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
                        if (input.charCodeAt(peg$currPos) === 91) {
                          s1 = peg$c100;
                          peg$currPos++;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c101); }
                        }
                        if (s1 !== peg$FAILED) {
                          s2 = peg$parse_();
                          if (s2 !== peg$FAILED) {
                            s3 = peg$parseassignmentExpression();
                            if (s3 === peg$FAILED) {
                              s3 = peg$c1;
                            }
                            if (s3 !== peg$FAILED) {
                              s4 = peg$parse_();
                              if (s4 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c120) {
                                  s5 = peg$c120;
                                  peg$currPos += 2;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c121); }
                                }
                                if (s5 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 46) {
                                    s6 = peg$c94;
                                    peg$currPos++;
                                  } else {
                                    s6 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c95); }
                                  }
                                  if (s6 === peg$FAILED) {
                                    s6 = peg$c1;
                                  }
                                  if (s6 !== peg$FAILED) {
                                    s7 = peg$parse_();
                                    if (s7 !== peg$FAILED) {
                                      s8 = peg$parseassignmentExpression();
                                      if (s8 === peg$FAILED) {
                                        s8 = peg$c1;
                                      }
                                      if (s8 !== peg$FAILED) {
                                        s9 = peg$parse_();
                                        if (s9 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 93) {
                                            s10 = peg$c102;
                                            peg$currPos++;
                                          } else {
                                            s10 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c103); }
                                          }
                                          if (s10 !== peg$FAILED) {
                                            peg$reportedPos = s0;
                                            s1 = peg$c122(s3, s6, s8);
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
                  }
                }
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsememberExpressionNoImplicitObjectCall() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 49,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseprimaryExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parseNEW();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsememberExpressionNoImplicitObjectCall();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseargumentList();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s1;
                s2 = peg$c90(s4, s5);
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
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseMemberAccessOps();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseMemberAccessOps();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c91(s1, s2);
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
        s1 = peg$parseNEW();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsememberExpressionNoImplicitObjectCall();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsesecondaryArgumentListNoImplicitObjectCall();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c92(s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseprimaryExpression() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 50,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsemacro();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNumbers();
        if (s0 === peg$FAILED) {
          s0 = peg$parsebool();
          if (s0 === peg$FAILED) {
            s0 = peg$parsenull();
            if (s0 === peg$FAILED) {
              s0 = peg$parseundefined();
              if (s0 === peg$FAILED) {
                s0 = peg$parsecontextVar();
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseTHIS();
                  if (s1 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 64) {
                      s1 = peg$c123;
                      peg$currPos++;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c124); }
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c125();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseidentifier();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parserange();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parsearrayLiteral();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseobjectLiteral();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parseinterpolation();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parseJSLiteral();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parsestring();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parseregexp();
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 40) {
                                      s1 = peg$c76;
                                      peg$currPos++;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c77); }
                                    }
                                    if (s1 !== peg$FAILED) {
                                      s2 = peg$parseTERMINDENT();
                                      if (s2 !== peg$FAILED) {
                                        s3 = peg$parseexpression();
                                        if (s3 !== peg$FAILED) {
                                          s4 = peg$parseDEDENT();
                                          if (s4 !== peg$FAILED) {
                                            s5 = peg$parseTERMINATOR();
                                            if (s5 === peg$FAILED) {
                                              s5 = peg$c1;
                                            }
                                            if (s5 !== peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 41) {
                                                s6 = peg$c78;
                                                peg$currPos++;
                                              } else {
                                                s6 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c79); }
                                              }
                                              if (s6 !== peg$FAILED) {
                                                peg$reportedPos = s0;
                                                s1 = peg$c126(s3);
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
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$currPos;
                                      if (input.charCodeAt(peg$currPos) === 40) {
                                        s1 = peg$c76;
                                        peg$currPos++;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c77); }
                                      }
                                      if (s1 !== peg$FAILED) {
                                        s2 = peg$parse_();
                                        if (s2 !== peg$FAILED) {
                                          s3 = peg$parseexpression();
                                          if (s3 !== peg$FAILED) {
                                            s4 = peg$parse_();
                                            if (s4 !== peg$FAILED) {
                                              s5 = peg$parseTERMINATOR();
                                              if (s5 === peg$FAILED) {
                                                s5 = peg$c1;
                                              }
                                              if (s5 !== peg$FAILED) {
                                                s6 = peg$parse_();
                                                if (s6 !== peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 41) {
                                                    s7 = peg$c78;
                                                    peg$currPos++;
                                                  } else {
                                                    s7 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c79); }
                                                  }
                                                  if (s7 !== peg$FAILED) {
                                                    peg$reportedPos = s0;
                                                    s1 = peg$c126(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecontextVar() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 51,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s2 = peg$c123;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c124); }
      }
      if (s2 !== peg$FAILED) {
        peg$reportedPos = s1;
        s2 = peg$c125();
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifierName();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c127(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseJSLiteral() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 52,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 96) {
        s1 = peg$c128;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c129); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (peg$c130.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c131); }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c130.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c131); }
          }
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s3 = peg$c128;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c129); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c132(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsespread() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 53,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsepostfixExpression();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c133) {
          s2 = peg$c133;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c135(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsespreadNoImplicitObjectCall() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 54,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsepostfixExpressionNoImplicitObjectCall();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c133) {
          s2 = peg$c133;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c135(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconditional() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 55,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseIF();
      if (s1 === peg$FAILED) {
        s1 = peg$parseUNLESS();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseassignmentExpressionNoImplicitObjectCall();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseconditionalBody();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseelseClause();
              if (s5 === peg$FAILED) {
                s5 = peg$c1;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c136(s1, s3, s4, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconditionalBody() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 56,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTERMINDENT();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseblock();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseDEDENT();
            if (s4 !== peg$FAILED) {
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
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseTERMINATOR();
        if (s1 === peg$FAILED) {
          s1 = peg$c1;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseTHEN();
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsestatement();
                if (s5 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c138(s5);
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
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseTHEN();
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c139();
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseelseClause() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 57,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTERMINATOR();
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseELSE();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsefunctionBody();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c140(s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsewhile() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 58,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseWHILE();
      if (s1 === peg$FAILED) {
        s1 = peg$parseUNTIL();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseassignmentExpressionNoImplicitObjectCall();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseconditionalBody();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c141(s1, s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseloop() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 59,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseLOOP();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseconditionalBody();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c142(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetry() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 60,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTRY();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsetryBody();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsecatchClause();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsefinallyClause();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c143(s2, s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsetryBody() {
      var s0, s1;

      var key    = peg$currPos * 204 + 61,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsefunctionBody();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c137(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecatchClause() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 62,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINATOR();
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseCATCH();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseAssignable();
              if (s5 === peg$FAILED) {
                s5 = peg$c1;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseconditionalBody();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c144(s5, s6);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefinallyClause() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 63,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINATOR();
      if (s1 === peg$FAILED) {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseFINALLY();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsetryBody();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c145(s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseclass() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 64,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCLASS();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAssignable();
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s2;
            s3 = peg$c15(s4);
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
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseEXTENDS();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsesecondaryExpressionNoImplicitObjectCall();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c9(s7);
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
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseclassBody();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c146(s2, s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseclassBody() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 65,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTERMINDENT();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseclassBlock();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseDEDENT();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c140(s3);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseTHEN();
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseclassStatement();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c4(s4);
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
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseTHEN();
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
            s0 = peg$c1;
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseclassBlock() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 66,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseclassStatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTERMINATOR();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseclassStatement();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c4(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseclassStatement();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c4(s7);
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
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c5(s1, s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseclassStatement() {
      var s0;

      var key    = peg$currPos * 204 + 67,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseconstructor();
      if (s0 === peg$FAILED) {
        s0 = peg$parseclassProtoAssignment();
        if (s0 === peg$FAILED) {
          s0 = peg$parsestaticAssignment();
          if (s0 === peg$FAILED) {
            s0 = peg$parseexpression();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconstructor() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 68,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseObjectInitialiserKeys();
      if (s2 !== peg$FAILED) {
        peg$reportedPos = peg$currPos;
        s3 = peg$c147(s2);
        if (s3) {
          s3 = peg$c6;
        } else {
          s3 = peg$c0;
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
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c148;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseexpression();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c9(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseexpression();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c9(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c150(s2, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestaticAssignment() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 69,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsecontextVar();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c148;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseexpression();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c151(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseTERMINATOR();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseexpression();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s5;
                      s6 = peg$c151(s8);
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
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c152(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseclassProtoAssignment() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 70,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseObjectInitialiserKeys();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c148;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parseTERMINDENT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseexpression();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDEDENT();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s5;
                    s6 = peg$c151(s7);
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
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parsesingleLineImplicitObjectLiteral();
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s5;
                  s6 = peg$c151(s6);
                }
                s5 = s6;
                if (s5 === peg$FAILED) {
                  s5 = peg$currPos;
                  s6 = peg$parseTERMINATOR();
                  if (s6 === peg$FAILED) {
                    s6 = peg$c1;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parsesecondaryExpression();
                      if (s8 !== peg$FAILED) {
                        peg$reportedPos = s5;
                        s6 = peg$c151(s8);
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
                }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c153(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseforOf() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;

      var key    = peg$currPos * 204 + 71,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseFOR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseOWN();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
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
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseAssignable();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 44) {
                  s7 = peg$c13;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c14); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseAssignable();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        peg$reportedPos = s6;
                        s7 = peg$c15(s9);
                        s6 = s7;
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseOF();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseassignmentExpressionNoImplicitObjectCall();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;
                          s12 = peg$parseWHEN();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parseassignmentExpressionNoImplicitObjectCall();
                              if (s14 !== peg$FAILED) {
                                s15 = peg$parse_();
                                if (s15 !== peg$FAILED) {
                                  peg$reportedPos = s11;
                                  s12 = peg$c9(s14);
                                  s11 = s12;
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$c0;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$c0;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$c0;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$c0;
                          }
                          if (s11 === peg$FAILED) {
                            s11 = peg$c1;
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseconditionalBody();
                            if (s12 !== peg$FAILED) {
                              peg$reportedPos = s0;
                              s1 = peg$c154(s3, s4, s6, s9, s11, s12);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseforIn() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

      var key    = peg$currPos * 204 + 72,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseFOR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseAssignable();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s7 = peg$c13;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseAssignable();
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parse_();
                    if (s10 !== peg$FAILED) {
                      peg$reportedPos = s6;
                      s7 = peg$c15(s9);
                      s6 = s7;
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
              if (s6 === peg$FAILED) {
                s6 = peg$c1;
              }
              if (s6 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c16(s4, s6);
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
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseIN();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseassignmentExpressionNoImplicitObjectCall();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$currPos;
                    s9 = peg$parseBY();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseassignmentExpressionNoImplicitObjectCall();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            peg$reportedPos = s8;
                            s9 = peg$c9(s11);
                            s8 = s9;
                          } else {
                            peg$currPos = s8;
                            s8 = peg$c0;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$c0;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$c0;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$c0;
                    }
                    if (s8 === peg$FAILED) {
                      s8 = peg$c1;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$currPos;
                      s10 = peg$parseWHEN();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseassignmentExpressionNoImplicitObjectCall();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();
                            if (s13 !== peg$FAILED) {
                              peg$reportedPos = s9;
                              s10 = peg$c9(s12);
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
                        s9 = peg$c1;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseconditionalBody();
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c155(s3, s6, s8, s9, s10);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseswitch() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 73,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseSWITCH();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexpressionworthy();
          if (s3 === peg$FAILED) {
            s3 = peg$parseassignmentExpression();
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseswitchBody();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c156(s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseswitchBody() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 74,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTERMINDENT();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseswitchBlock();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseDEDENT();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c157(s3);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseTHEN();
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsecase();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c158(s4);
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
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseTHEN();
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c159();
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseswitchBlock() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 75,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsecase();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTERMINATOR();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsecase();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c160(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsecase();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c160(s7);
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
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseTERMINATOR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseelseClause();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c9(s7);
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
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseTERMINATOR();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c161(s1, s2, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecase() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 76,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseWHEN();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsecaseConditions();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseconditionalBody();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c162(s3, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecaseConditions() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 77,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseassignmentExpressionNoImplicitObjectCall();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c13;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseassignmentExpressionNoImplicitObjectCall();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c160(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c13;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseassignmentExpressionNoImplicitObjectCall();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c160(s7);
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
          s1 = peg$c163(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunctionLiteral() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 78,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c76;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c77); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parseTERMINDENT();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseparameterList();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseDEDENT();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseTERMINATOR();
                if (s8 !== peg$FAILED) {
                  peg$reportedPos = s4;
                  s5 = peg$c164(s6);
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
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseparameterList();
          }
          if (s4 === peg$FAILED) {
            s4 = peg$c1;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c78;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c79); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s1;
                  s2 = peg$c164(s4);
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
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c165) {
          s2 = peg$c165;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c166); }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c167) {
            s2 = peg$c167;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c168); }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefunctionBody();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c169(s1, s2, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsefunctionBody() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 79,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTERMINDENT();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseblock();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseDEDENT();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c140(s3);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestatement();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c4(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseparameter() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 80,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseAssignable();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsesecondaryExpression();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c170(s1, s5);
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
        s0 = peg$parserest();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parserest() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 81,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseAssignable();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c133) {
          s2 = peg$c133;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c171(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseparameterList() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 82,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseparameter();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s6 = peg$c13;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parseTERMINATOR();
            if (s7 === peg$FAILED) {
              s7 = peg$c1;
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
          if (s5 === peg$FAILED) {
            s5 = peg$parseTERMINATOR();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseparameter();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c9(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c13;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTERMINATOR();
              if (s7 === peg$FAILED) {
                s7 = peg$c1;
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
            if (s5 === peg$FAILED) {
              s5 = peg$parseTERMINATOR();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseparameter();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c9(s7);
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
          s1 = peg$c81(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parserange() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      var key    = peg$currPos * 204 + 83,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c100;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesecondaryExpression();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c120) {
                s5 = peg$c120;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c121); }
              }
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c94;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c95); }
                }
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parsesecondaryExpression();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parse_();
                      if (s9 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s10 = peg$c102;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c103); }
                        }
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c172(s3, s6, s8);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearrayLiteral() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 84,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c100;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearrayLiteralBody();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c102;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c103); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c173(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearrayLiteralBody() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 85,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearrayLiteralMemberList();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEDENT();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c174(s2);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsearrayLiteralMemberList();
          if (s2 === peg$FAILED) {
            s2 = peg$c1;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c175(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearrayLiteralMemberList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 86,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsearrayLiteralMember();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parsearrayLiteralMemberSeparator();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsearrayLiteralMember();
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  peg$reportedPos = s4;
                  s5 = peg$c9(s7);
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
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parsearrayLiteralMemberSeparator();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsearrayLiteralMember();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s4;
                    s5 = peg$c9(s7);
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
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsearrayLiteralMemberSeparator();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c81(s1, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearrayLiteralMember() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 87,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsespread();
      if (s0 === peg$FAILED) {
        s0 = peg$parseexpression();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTERMINDENT();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseimplicitObjectLiteral();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseDEDENT();
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c62(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsearrayLiteralMemberSeparator() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 88,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseTERMINATOR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c13;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$c1;
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
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c13;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
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
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseobjectLiteral() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 89,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c176;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c177); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseobjectLiteralBody();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c178;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c179); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c180(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseobjectLiteralBody() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 90,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseobjectLiteralMemberList();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEDENT();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c174(s2);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseobjectLiteralMemberList();
          if (s2 === peg$FAILED) {
            s2 = peg$c1;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c175(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseobjectLiteralMemberList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 91,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseobjectLiteralMember();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parsearrayLiteralMemberSeparator();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseobjectLiteralMember();
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  peg$reportedPos = s4;
                  s5 = peg$c9(s7);
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
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parsearrayLiteralMemberSeparator();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseobjectLiteralMember();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s4;
                    s5 = peg$c9(s7);
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
            } else {
              peg$currPos = s4;
              s4 = peg$c0;
            }
          }
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c13;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c81(s1, s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseobjectLiteralMember() {
      var s0, s1;

      var key    = peg$currPos * 204 + 92,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseimplicitObjectLiteralMember();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsecontextVar();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c181(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseObjectInitialiserKeys();
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c182(s1);
          }
          s0 = s1;
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseObjectInitialiserKeys() {
      var s0, s1;

      var key    = peg$currPos * 204 + 93,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseidentifierName();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c183(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parsestring();
        if (s0 === peg$FAILED) {
          s0 = peg$parseNumbers();
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseimplicitObjectLiteral() {
      var s0, s1;

      var key    = peg$currPos * 204 + 94,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseimplicitObjectLiteralMemberList();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c180(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseimplicitObjectLiteralMemberList() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 95,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseimplicitObjectLiteralMember();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseimplicitObjectLiteralMemberSeparator();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseimplicitObjectLiteralMember();
          if (s5 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c9(s5);
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
          s4 = peg$parseimplicitObjectLiteralMemberSeparator();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseimplicitObjectLiteralMember();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c9(s5);
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
          peg$reportedPos = s0;
          s1 = peg$c81(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseimplicitObjectLiteralMemberSeparator() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 96,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINATOR();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c13;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s2 = peg$c13;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseTERMINATOR();
            if (s3 === peg$FAILED) {
              s3 = peg$c1;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseimplicitObjectLiteralMember() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 97,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseObjectInitialiserKeys();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c148;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseimplicitObjectLiteralMemberValue();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c184(s1, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseimplicitObjectLiteralMemberValue() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 98,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsesingleLineImplicitObjectLiteral();
      if (s0 === peg$FAILED) {
        s0 = peg$parseexpression();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTERMINDENT();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseexpression();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseDEDENT();
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c62(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingleLineImplicitObjectLiteral() {
      var s0, s1;

      var key    = peg$currPos * 204 + 99,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsesingleLineImplicitObjectLiteralMemberList();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c180(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingleLineImplicitObjectLiteralMemberList() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 100,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseimplicitObjectLiteralMember();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsesingleLineImplicitObjectLiteralMemberSeparator();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseimplicitObjectLiteralMember();
          if (s5 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c9(s5);
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
          s4 = peg$parsesingleLineImplicitObjectLiteralMemberSeparator();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseimplicitObjectLiteralMember();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c9(s5);
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
          peg$reportedPos = s0;
          s1 = peg$c81(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingleLineImplicitObjectLiteralMemberSeparator() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 101,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c13;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsemacro() {
      var s0, s1;

      var key    = peg$currPos * 204 + 102,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c185) {
        s1 = peg$c185;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c186); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c187();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c188) {
          s1 = peg$c188;
          peg$currPos += 12;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c189); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c190();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 8) === peg$c191) {
            s1 = peg$c191;
            peg$currPos += 8;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c192); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c193();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 8) === peg$c194) {
              s1 = peg$c194;
              peg$currPos += 8;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c195); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c196();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 14) === peg$c197) {
                s1 = peg$c197;
                peg$currPos += 14;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c198); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c199();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 18) === peg$c200) {
                  s1 = peg$c200;
                  peg$currPos += 18;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c201); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c202();
                }
                s0 = s1;
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebool() {
      var s0, s1;

      var key    = peg$currPos * 204 + 103,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTRUE();
      if (s1 === peg$FAILED) {
        s1 = peg$parseYES();
        if (s1 === peg$FAILED) {
          s1 = peg$parseON();
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c203();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseFALSE();
        if (s1 === peg$FAILED) {
          s1 = peg$parseNO();
          if (s1 === peg$FAILED) {
            s1 = peg$parseOFF();
          }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c204();
        }
        s0 = s1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNumbers() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 104,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c205) {
        s1 = peg$c205;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c206); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        s4 = peg$parsebit();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsebit();
          }
        } else {
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c207(s2);
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
        if (input.substr(peg$currPos, 2) === peg$c208) {
          s1 = peg$c208;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c209); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          s4 = peg$parseoctalDigit();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoctalDigit();
            }
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s3 = input.substring(s2, peg$currPos);
          }
          s2 = s3;
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c210(s2);
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
          if (input.substr(peg$currPos, 2) === peg$c211) {
            s1 = peg$c211;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c212); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parsehexDigit();
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsehexDigit();
              }
            } else {
              s3 = peg$c0;
            }
            if (s3 !== peg$FAILED) {
              s3 = input.substring(s2, peg$currPos);
            }
            s2 = s3;
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c213(s2);
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
            s1 = peg$parsedecimal();
            if (s1 !== peg$FAILED) {
              if (peg$c214.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c215); }
              }
              if (s2 !== peg$FAILED) {
                if (peg$c216.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c217); }
                }
                if (s3 === peg$FAILED) {
                  s3 = peg$c1;
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parsedecimal();
                  if (s4 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c218(s1, s2, s3, s4);
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
              s0 = peg$parsedecimal();
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedecimal() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 105,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseinteger();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c94;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c95); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parsedecimalDigit();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsedecimalDigit();
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
          s3 = peg$c1;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c219(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 106,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (input.charCodeAt(peg$currPos) === 48) {
        s0 = peg$c220;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c221); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c222.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c223); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsedecimalDigit();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsedecimalDigit();
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedecimalDigit() {
      var s0;

      var key    = peg$currPos * 204 + 107,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c224.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c225); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      var key    = peg$currPos * 204 + 108,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c226.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c227); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseoctalDigit() {
      var s0;

      var key    = peg$currPos * 204 + 109,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c228.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c229); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebit() {
      var s0;

      var key    = peg$currPos * 204 + 110,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c230.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c231); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 204 + 111,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c232) {
        s1 = peg$c232;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c233); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringData();
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c234;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c235); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 34) {
              s5 = peg$c236;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c237); }
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s6 = peg$c236;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c237); }
              }
              if (s6 === peg$FAILED) {
                s6 = peg$c1;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 34) {
                  s8 = peg$c236;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                peg$silentFails--;
                if (s8 === peg$FAILED) {
                  s7 = peg$c6;
                } else {
                  peg$currPos = s7;
                  s7 = peg$c0;
                }
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
              s4 = input.substring(s3, peg$currPos);
            }
            s3 = s4;
          }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsestringData();
            if (s3 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 39) {
                s3 = peg$c234;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c235); }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 34) {
                  s5 = peg$c236;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                if (s5 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 34) {
                    s6 = peg$c236;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c237); }
                  }
                  if (s6 === peg$FAILED) {
                    s6 = peg$c1;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 34) {
                      s8 = peg$c236;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c237); }
                    }
                    peg$silentFails--;
                    if (s8 === peg$FAILED) {
                      s7 = peg$c6;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$c0;
                    }
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
                  s4 = input.substring(s3, peg$currPos);
                }
                s3 = s4;
              }
            }
          }
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c232) {
            s3 = peg$c232;
            peg$currPos += 3;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c233); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c238(s2);
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
        if (input.substr(peg$currPos, 3) === peg$c239) {
          s1 = peg$c239;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c240); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsestringData();
          if (s3 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 34) {
              s3 = peg$c236;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c237); }
            }
            if (s3 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 35) {
                s3 = peg$c241;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c242); }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 39) {
                  s5 = peg$c234;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c235); }
                }
                if (s5 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 39) {
                    s6 = peg$c234;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c235); }
                  }
                  if (s6 === peg$FAILED) {
                    s6 = peg$c1;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 39) {
                      s8 = peg$c234;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c235); }
                    }
                    peg$silentFails--;
                    if (s8 === peg$FAILED) {
                      s7 = peg$c6;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$c0;
                    }
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
                  s4 = input.substring(s3, peg$currPos);
                }
                s3 = s4;
              }
            }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsestringData();
              if (s3 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 34) {
                  s3 = peg$c236;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                if (s3 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 35) {
                    s3 = peg$c241;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c242); }
                  }
                  if (s3 === peg$FAILED) {
                    s3 = peg$currPos;
                    s4 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 39) {
                      s5 = peg$c234;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c235); }
                    }
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 39) {
                        s6 = peg$c234;
                        peg$currPos++;
                      } else {
                        s6 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c235); }
                      }
                      if (s6 === peg$FAILED) {
                        s6 = peg$c1;
                      }
                      if (s6 !== peg$FAILED) {
                        s7 = peg$currPos;
                        peg$silentFails++;
                        if (input.charCodeAt(peg$currPos) === 39) {
                          s8 = peg$c234;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c235); }
                        }
                        peg$silentFails--;
                        if (s8 === peg$FAILED) {
                          s7 = peg$c6;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$c0;
                        }
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
                      s4 = input.substring(s3, peg$currPos);
                    }
                    s3 = s4;
                  }
                }
              }
            }
          } else {
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c239) {
              s3 = peg$c239;
              peg$currPos += 3;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c240); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c238(s2);
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
          if (input.charCodeAt(peg$currPos) === 34) {
            s1 = peg$c236;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c237); }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsestringData();
            if (s3 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 39) {
                s3 = peg$c234;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c235); }
              }
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsestringData();
              if (s3 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s3 = peg$c234;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c235); }
                }
              }
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s3 = peg$c236;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c237); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c243(s2);
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
            if (input.charCodeAt(peg$currPos) === 39) {
              s1 = peg$c234;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c235); }
            }
            if (s1 !== peg$FAILED) {
              s2 = [];
              s3 = peg$parsestringData();
              if (s3 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 34) {
                  s3 = peg$c236;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                if (s3 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 35) {
                    s3 = peg$c241;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c242); }
                  }
                }
              }
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsestringData();
                if (s3 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 34) {
                    s3 = peg$c236;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c237); }
                  }
                  if (s3 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 35) {
                      s3 = peg$c241;
                      peg$currPos++;
                    } else {
                      s3 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c242); }
                    }
                  }
                }
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s3 = peg$c234;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c235); }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c243(s2);
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestringData() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 112,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c244.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c245); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseUnicodeEscapeSequence();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c246) {
            s1 = peg$c246;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c247); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = peg$currPos;
            s4 = peg$parsehexDigit();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsehexDigit();
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
              s1 = peg$c248(s2);
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
            if (input.substr(peg$currPos, 2) === peg$c249) {
              s1 = peg$c249;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c250); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos;
              peg$silentFails++;
              s3 = peg$parsedecimalDigit();
              peg$silentFails--;
              if (s3 === peg$FAILED) {
                s2 = peg$c6;
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c251();
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
              if (input.substr(peg$currPos, 2) === peg$c249) {
                s1 = peg$c249;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c250); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parsedecimalDigit();
                peg$silentFails--;
                if (s3 !== peg$FAILED) {
                  peg$currPos = s2;
                  s2 = peg$c6;
                } else {
                  s2 = peg$c0;
                }
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c252();
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
                if (input.substr(peg$currPos, 2) === peg$c253) {
                  s1 = peg$c253;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c254); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c255();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c256) {
                    s1 = peg$c256;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c257); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c258();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c259) {
                      s1 = peg$c259;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c260); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c261();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.substr(peg$currPos, 2) === peg$c262) {
                        s1 = peg$c262;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c263); }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c264();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c265) {
                          s1 = peg$c265;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c266); }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c267();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.substr(peg$currPos, 2) === peg$c268) {
                            s1 = peg$c268;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c269); }
                          }
                          if (s1 !== peg$FAILED) {
                            peg$reportedPos = s0;
                            s1 = peg$c270();
                          }
                          s0 = s1;
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 92) {
                              s1 = peg$c271;
                              peg$currPos++;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c272); }
                            }
                            if (s1 !== peg$FAILED) {
                              if (input.length > peg$currPos) {
                                s2 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c273); }
                              }
                              if (s2 !== peg$FAILED) {
                                peg$reportedPos = s0;
                                s1 = peg$c160(s2);
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
                              if (input.charCodeAt(peg$currPos) === 35) {
                                s1 = peg$c241;
                                peg$currPos++;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c242); }
                              }
                              if (s1 !== peg$FAILED) {
                                s2 = peg$currPos;
                                peg$silentFails++;
                                if (input.charCodeAt(peg$currPos) === 123) {
                                  s3 = peg$c176;
                                  peg$currPos++;
                                } else {
                                  s3 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c177); }
                                }
                                peg$silentFails--;
                                if (s3 === peg$FAILED) {
                                  s2 = peg$c6;
                                } else {
                                  peg$currPos = s2;
                                  s2 = peg$c0;
                                }
                                if (s2 !== peg$FAILED) {
                                  peg$reportedPos = s0;
                                  s1 = peg$c160(s1);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseinterpolation() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      var key    = peg$currPos * 204 + 113,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c232) {
        s1 = peg$c232;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c233); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsestringData();
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s5 = peg$c234;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c235); }
          }
          if (s5 === peg$FAILED) {
            s5 = peg$currPos;
            s6 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 34) {
              s7 = peg$c236;
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c237); }
            }
            if (s7 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s8 = peg$c236;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c237); }
              }
              if (s8 === peg$FAILED) {
                s8 = peg$c1;
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 34) {
                  s10 = peg$c236;
                  peg$currPos++;
                } else {
                  s10 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                peg$silentFails--;
                if (s10 === peg$FAILED) {
                  s9 = peg$c6;
                } else {
                  peg$currPos = s9;
                  s9 = peg$c0;
                }
                if (s9 !== peg$FAILED) {
                  s7 = [s7, s8, s9];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$c0;
            }
            if (s6 !== peg$FAILED) {
              s6 = input.substring(s5, peg$currPos);
            }
            s5 = s6;
          }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsestringData();
            if (s5 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 39) {
                s5 = peg$c234;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c235); }
              }
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 34) {
                  s7 = peg$c236;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 34) {
                    s8 = peg$c236;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c237); }
                  }
                  if (s8 === peg$FAILED) {
                    s8 = peg$c1;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 34) {
                      s10 = peg$c236;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c237); }
                    }
                    peg$silentFails--;
                    if (s10 === peg$FAILED) {
                      s9 = peg$c6;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$c0;
                    }
                    if (s9 !== peg$FAILED) {
                      s7 = [s7, s8, s9];
                      s6 = s7;
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 !== peg$FAILED) {
                  s6 = input.substring(s5, peg$currPos);
                }
                s5 = s6;
              }
            }
          }
        } else {
          s4 = peg$c0;
        }
        if (s4 !== peg$FAILED) {
          peg$reportedPos = s3;
          s4 = peg$c243(s4);
        }
        s3 = s4;
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c274) {
            s4 = peg$c274;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c275); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseexpression();
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s8 = peg$c178;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c179); }
                  }
                  if (s8 !== peg$FAILED) {
                    peg$reportedPos = s3;
                    s4 = peg$c9(s6);
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
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = [];
            s5 = peg$parsestringData();
            if (s5 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 39) {
                s5 = peg$c234;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c235); }
              }
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 34) {
                  s7 = peg$c236;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c237); }
                }
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 34) {
                    s8 = peg$c236;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c237); }
                  }
                  if (s8 === peg$FAILED) {
                    s8 = peg$c1;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 34) {
                      s10 = peg$c236;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c237); }
                    }
                    peg$silentFails--;
                    if (s10 === peg$FAILED) {
                      s9 = peg$c6;
                    } else {
                      peg$currPos = s9;
                      s9 = peg$c0;
                    }
                    if (s9 !== peg$FAILED) {
                      s7 = [s7, s8, s9];
                      s6 = s7;
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$c0;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
                if (s6 !== peg$FAILED) {
                  s6 = input.substring(s5, peg$currPos);
                }
                s5 = s6;
              }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parsestringData();
                if (s5 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 39) {
                    s5 = peg$c234;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c235); }
                  }
                  if (s5 === peg$FAILED) {
                    s5 = peg$currPos;
                    s6 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 34) {
                      s7 = peg$c236;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c237); }
                    }
                    if (s7 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 34) {
                        s8 = peg$c236;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c237); }
                      }
                      if (s8 === peg$FAILED) {
                        s8 = peg$c1;
                      }
                      if (s8 !== peg$FAILED) {
                        s9 = peg$currPos;
                        peg$silentFails++;
                        if (input.charCodeAt(peg$currPos) === 34) {
                          s10 = peg$c236;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c237); }
                        }
                        peg$silentFails--;
                        if (s10 === peg$FAILED) {
                          s9 = peg$c6;
                        } else {
                          peg$currPos = s9;
                          s9 = peg$c0;
                        }
                        if (s9 !== peg$FAILED) {
                          s7 = [s7, s8, s9];
                          s6 = s7;
                        } else {
                          peg$currPos = s6;
                          s6 = peg$c0;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$c0;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$c0;
                    }
                    if (s6 !== peg$FAILED) {
                      s6 = input.substring(s5, peg$currPos);
                    }
                    s5 = s6;
                  }
                }
              }
            } else {
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c243(s4);
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c274) {
                s4 = peg$c274;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c275); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseexpression();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s8 = peg$c178;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c179); }
                      }
                      if (s8 !== peg$FAILED) {
                        peg$reportedPos = s3;
                        s4 = peg$c9(s6);
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
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            }
          }
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c232) {
            s3 = peg$c232;
            peg$currPos += 3;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c233); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c276(s2);
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
        if (input.charCodeAt(peg$currPos) === 34) {
          s1 = peg$c236;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c237); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parsestringData();
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s5 = peg$c234;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c235); }
            }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsestringData();
              if (s5 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s5 = peg$c234;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c235); }
                }
              }
            }
          } else {
            s4 = peg$c0;
          }
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c243(s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c274) {
              s4 = peg$c274;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c275); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseexpression();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c178;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c179); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s3;
                      s4 = peg$c9(s6);
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
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = [];
              s5 = peg$parsestringData();
              if (s5 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s5 = peg$c234;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c235); }
                }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsestringData();
                  if (s5 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 39) {
                      s5 = peg$c234;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c235); }
                    }
                  }
                }
              } else {
                s4 = peg$c0;
              }
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c243(s4);
              }
              s3 = s4;
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c274) {
                  s4 = peg$c274;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c275); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseexpression();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parse_();
                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s8 = peg$c178;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c179); }
                        }
                        if (s8 !== peg$FAILED) {
                          peg$reportedPos = s3;
                          s4 = peg$c9(s6);
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
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              }
            }
          } else {
            s2 = peg$c0;
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 34) {
              s3 = peg$c236;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c237); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c277(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseregexp() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 114,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c278) {
        s1 = peg$c278;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c279); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        if (peg$c280.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c281); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c280.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c281); }
            }
          }
        } else {
          s4 = peg$c0;
        }
        if (s4 !== peg$FAILED) {
          peg$reportedPos = s3;
          s4 = peg$c282();
        }
        s3 = s4;
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$currPos;
          s5 = [];
          if (peg$c283.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c284); }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c283.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c284); }
              }
            }
          } else {
            s5 = peg$c0;
          }
          if (s5 !== peg$FAILED) {
            s5 = input.substring(s4, peg$currPos);
          }
          s4 = s5;
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c285(s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$parsehereregexpData();
          }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = [];
            if (peg$c280.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c281); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c280.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c281); }
                }
              }
            } else {
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c282();
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$currPos;
              s5 = [];
              if (peg$c283.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c284); }
              }
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  if (peg$c283.test(input.charAt(peg$currPos))) {
                    s6 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c284); }
                  }
                }
              } else {
                s5 = peg$c0;
              }
              if (s5 !== peg$FAILED) {
                s5 = input.substring(s4, peg$currPos);
              }
              s4 = s5;
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c285(s4);
              }
              s3 = s4;
              if (s3 === peg$FAILED) {
                s3 = peg$parsehereregexpData();
              }
            }
          }
        } else {
          s2 = peg$c0;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c278) {
            s3 = peg$c278;
            peg$currPos += 3;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c279); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            if (peg$c286.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c287); }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c286.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c287); }
              }
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c288(s2, s4);
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
        if (input.charCodeAt(peg$currPos) === 47) {
          s1 = peg$c289;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c290); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          s4 = peg$parseregexpData();
          if (s4 === peg$FAILED) {
            s4 = [];
            if (peg$c291.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c292); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c291.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c292); }
                }
              }
            } else {
              s4 = peg$c0;
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseregexpData();
            if (s4 === peg$FAILED) {
              s4 = [];
              if (peg$c291.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c292); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c291.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c292); }
                  }
                }
              } else {
                s4 = peg$c0;
              }
            }
          }
          if (s3 !== peg$FAILED) {
            s3 = input.substring(s2, peg$currPos);
          }
          s2 = s3;
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s3 = peg$c289;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c290); }
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c286.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c287); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c286.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c287); }
                }
              }
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c293(s2, s4);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseregexpData() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 115,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c100;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c294.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c295); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseregexpData();
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c294.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c295); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseregexpData();
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c102;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c103); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
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
          s1 = peg$c271;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c272); }
        }
        if (s1 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c273); }
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsehereregexpData() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 116,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c100;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsehereregexpData();
        if (s4 !== peg$FAILED) {
          peg$reportedPos = s3;
          s4 = peg$c296(s4);
        }
        s3 = s4;
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          if (peg$c297.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c298); }
          }
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c299(s4);
          }
          s3 = s4;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsehereregexpData();
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c296(s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            if (peg$c297.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c298); }
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c299(s4);
            }
            s3 = s4;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c102;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c103); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c300(s2);
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
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 92) {
          s3 = peg$c271;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c272); }
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c273); }
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
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c301(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 47) {
            s3 = peg$c289;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c290); }
          }
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s4 = peg$c289;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c290); }
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 47) {
                s6 = peg$c289;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c290); }
              }
              peg$silentFails--;
              if (s6 === peg$FAILED) {
                s5 = peg$c6;
              } else {
                peg$currPos = s5;
                s5 = peg$c0;
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
          if (s2 !== peg$FAILED) {
            s2 = input.substring(s1, peg$currPos);
          }
          s1 = s2;
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c302(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 35) {
              s1 = peg$c241;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c242); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 123) {
                s3 = peg$c176;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c177); }
              }
              peg$silentFails--;
              if (s3 === peg$FAILED) {
                s2 = peg$c6;
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c303(s1);
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
              if (input.substr(peg$currPos, 2) === peg$c274) {
                s1 = peg$c274;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c275); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parse_();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseexpression();
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s5 = peg$c178;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c179); }
                      }
                      if (s5 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c304(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsethrow() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 117,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTHROW();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesecondaryExpression();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c305(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsereturn() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 118,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseRETURN();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesecondaryExpression();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c306(s3);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecontinue() {
      var s0, s1;

      var key    = peg$currPos * 204 + 119,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseCONTINUE();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c307();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsebreak() {
      var s0, s1;

      var key    = peg$currPos * 204 + 120,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseBREAK();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c308();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsedebugger() {
      var s0, s1;

      var key    = peg$currPos * 204 + 121,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseDEBUGGER();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c309();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseundefined() {
      var s0, s1;

      var key    = peg$currPos * 204 + 122,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseUNDEFINED();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c310();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenull() {
      var s0, s1;

      var key    = peg$currPos * 204 + 123,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseNULL();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c311();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseunassignable() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 124,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c312) {
        s1 = peg$c312;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c313); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c314) {
          s1 = peg$c314;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c315); }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCompoundAssignable() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 125,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsememberAccess();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseunassignable();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = peg$c6;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseidentifier();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c316(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseAssignable() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 126,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsememberAccess();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseunassignable();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = peg$c6;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseidentifier();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c316(s2);
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
          s0 = peg$parsepositionalDestructuring();
          if (s0 === peg$FAILED) {
            s0 = peg$parsenamedDestructuring();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepositionalDestructuring() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 127,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c100;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepositionalDestructuringBody();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c102;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c103); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c173(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepositionalDestructuringBody() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 128,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepositionalDestructuringMemberList();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEDENT();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c174(s2);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsepositionalDestructuringMemberList();
          if (s2 === peg$FAILED) {
            s2 = peg$c1;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c175(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepositionalDestructuringMemberList() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 204 + 129,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsepositionalDestructuringMember();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c13;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsepositionalDestructuringMember();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c9(s7);
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
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c13;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsepositionalDestructuringMember();
                if (s7 !== peg$FAILED) {
                  peg$reportedPos = s3;
                  s4 = peg$c9(s7);
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
          s1 = peg$c81(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsepositionalDestructuringMember() {
      var s0;

      var key    = peg$currPos * 204 + 130,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parserest();
      if (s0 === peg$FAILED) {
        s0 = peg$parseAssignable();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenamedDestructuring() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 131,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c176;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c177); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsenamedDestructuringBody();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseTERMINATOR();
          if (s3 === peg$FAILED) {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c178;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c179); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c180(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenamedDestructuringBody() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 132,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseTERMINDENT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsenamedDestructuringMemberList();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEDENT();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c174(s2);
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
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsenamedDestructuringMemberList();
          if (s2 === peg$FAILED) {
            s2 = peg$c1;
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c175(s2);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenamedDestructuringMemberList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 204 + 133,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsenamedDestructuringMember();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseTERMINATOR();
        if (s4 === peg$FAILED) {
          s4 = peg$c1;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c13;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c14); }
            }
            if (s6 === peg$FAILED) {
              s6 = peg$parseTERMINATOR();
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTERMINATOR();
              if (s7 === peg$FAILED) {
                s7 = peg$c1;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parsenamedDestructuringMember();
                  if (s9 !== peg$FAILED) {
                    peg$reportedPos = s3;
                    s4 = peg$c9(s9);
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
          s4 = peg$parseTERMINATOR();
          if (s4 === peg$FAILED) {
            s4 = peg$c1;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c13;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s6 === peg$FAILED) {
                s6 = peg$parseTERMINATOR();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTERMINATOR();
                if (s7 === peg$FAILED) {
                  s7 = peg$c1;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsenamedDestructuringMember();
                    if (s9 !== peg$FAILED) {
                      peg$reportedPos = s3;
                      s4 = peg$c9(s9);
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
          s1 = peg$c81(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenamedDestructuringMember() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 134,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseObjectInitialiserKeys();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c148;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c149); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseAssignable();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c184(s1, s5);
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
        s1 = peg$parsecontextVar();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c317(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          peg$silentFails++;
          s2 = peg$parseunassignable();
          peg$silentFails--;
          if (s2 === peg$FAILED) {
            s1 = peg$c6;
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseidentifier();
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c318(s2);
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
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 135,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsereserved();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c6;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifierName();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c183(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseidentifierName() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 136,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseidentifierStart();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseidentifierPart();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseidentifierPart();
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseidentifierStart() {
      var s0;

      var key    = peg$currPos * 204 + 137,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseUnicodeLetter();
      if (s0 === peg$FAILED) {
        if (peg$c319.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c320); }
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseUnicodeEscapeSequence();
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseidentifierPart() {
      var s0;

      var key    = peg$currPos * 204 + 138,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseidentifierStart();
      if (s0 === peg$FAILED) {
        s0 = peg$parseUnicodeCombiningMark();
        if (s0 === peg$FAILED) {
          s0 = peg$parseUnicodeDigit();
          if (s0 === peg$FAILED) {
            s0 = peg$parseUnicodeConnectorPunctuation();
            if (s0 === peg$FAILED) {
              s0 = peg$parseZWNJ();
              if (s0 === peg$FAILED) {
                s0 = peg$parseZWJ();
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse__() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 139,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$parsewhitespace();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhitespace();
        }
      } else {
        s2 = peg$c0;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parseblockComment();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parsewhitespace();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsewhitespace();
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
          s3 = peg$c1;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse_() {
      var s0;

      var key    = peg$currPos * 204 + 140,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parse__();
      if (s0 === peg$FAILED) {
        s0 = peg$c1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsecomment() {
      var s0;

      var key    = peg$currPos * 204 + 141,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseblockComment();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesingleLineComment();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesingleLineComment() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 142,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s2 = peg$c241;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c242); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseTERM();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = peg$c6;
        } else {
          peg$currPos = s5;
          s5 = peg$c0;
        }
        if (s5 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c273); }
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
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseTERM();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = peg$c6;
          } else {
            peg$currPos = s5;
            s5 = peg$c0;
          }
          if (s5 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c273); }
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseblockComment() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 204 + 143,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c321) {
        s2 = peg$c321;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c322); }
      }
      if (s2 !== peg$FAILED) {
        if (peg$c323.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c324); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          if (peg$c323.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c324); }
          }
          if (s5 === peg$FAILED) {
            s5 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 35) {
              s6 = peg$c241;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c242); }
            }
            if (s6 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 35) {
                s7 = peg$c241;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c242); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$c1;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 35) {
                  s9 = peg$c241;
                  peg$currPos++;
                } else {
                  s9 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c242); }
                }
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = peg$c6;
                } else {
                  peg$currPos = s8;
                  s8 = peg$c0;
                }
                if (s8 !== peg$FAILED) {
                  s6 = [s6, s7, s8];
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
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c323.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c324); }
            }
            if (s5 === peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 35) {
                s6 = peg$c241;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c242); }
              }
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 35) {
                  s7 = peg$c241;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c242); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$c1;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 35) {
                    s9 = peg$c241;
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c242); }
                  }
                  peg$silentFails--;
                  if (s9 === peg$FAILED) {
                    s8 = peg$c6;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$c0;
                  }
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
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
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c321) {
              s5 = peg$c321;
              peg$currPos += 3;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c322); }
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
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
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsewhitespace() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 144,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c325.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c326); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 13) {
          s0 = peg$c327;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c328); }
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 92) {
            s2 = peg$c271;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c272); }
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 13) {
              s3 = peg$c327;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c328); }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$c1;
            }
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 10) {
                s4 = peg$c329;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c330); }
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
            s1 = input.substring(s0, peg$currPos);
          }
          s0 = s1;
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINDENT() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 145,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse__();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61423) {
          s2 = peg$c331;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c332); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c333(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDEDENT() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 146,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      s3 = peg$parseTERMINATOR();
      if (s3 === peg$FAILED) {
        s3 = peg$c1;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
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
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61438) {
          s2 = peg$c334;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c335); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c333(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTERM() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 147,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 13) {
        s2 = peg$c327;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c328); }
      }
      if (s2 === peg$FAILED) {
        s2 = peg$c1;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s3 = peg$c329;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c330); }
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
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61439) {
          s1 = peg$c336;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c337); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c338();
        }
        s0 = s1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTERMINATOR() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 204 + 148,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsecomment();
        if (s4 === peg$FAILED) {
          s4 = peg$c1;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTERM();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseblockComment();
            if (s6 === peg$FAILED) {
              s6 = peg$c1;
            }
            if (s6 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6];
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
      } else {
        peg$currPos = s2;
        s2 = peg$c0;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsecomment();
            if (s4 === peg$FAILED) {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseTERM();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseblockComment();
                if (s6 === peg$FAILED) {
                  s6 = peg$c1;
                }
                if (s6 !== peg$FAILED) {
                  s3 = [s3, s4, s5, s6];
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
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTERMINDENT() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 149,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseTERMINATOR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseINDENT();
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseAND() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 150,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c339) {
        s2 = peg$c339;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c340); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBREAK() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 151,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c341) {
        s2 = peg$c341;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c342); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseBY() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 152,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c343) {
        s2 = peg$c343;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c344); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCATCH() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 153,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c345) {
        s2 = peg$c345;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c346); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONTINUE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 154,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c347) {
        s2 = peg$c347;
        peg$currPos += 8;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c348); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCLASS() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 155,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c349) {
        s2 = peg$c349;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c350); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDELETE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 156,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c351) {
        s2 = peg$c351;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c352); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDEBUGGER() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 157,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c353) {
        s2 = peg$c353;
        peg$currPos += 8;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c354); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseDO() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 158,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c355) {
        s2 = peg$c355;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c356); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseELSE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 159,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c357) {
        s2 = peg$c357;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c358); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseEXTENDS() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 160,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c359) {
        s2 = peg$c359;
        peg$currPos += 7;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c360); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFALSE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 161,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c361) {
        s2 = peg$c361;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c362); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFINALLY() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 162,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c363) {
        s2 = peg$c363;
        peg$currPos += 7;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c364); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseFOR() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 163,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c365) {
        s2 = peg$c365;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c366); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIF() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 164,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c367) {
        s2 = peg$c367;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c368); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIN() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 165,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c369) {
        s2 = peg$c369;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c370); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseINSTANCEOF() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 166,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c371) {
        s2 = peg$c371;
        peg$currPos += 10;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c372); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseIS() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 167,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c373) {
        s2 = peg$c373;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c374); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseISNT() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 168,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c375) {
        s2 = peg$c375;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c376); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseLOOP() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 169,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c377) {
        s2 = peg$c377;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c378); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNEW() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 170,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c379) {
        s2 = peg$c379;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c380); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNO() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 171,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c381) {
        s2 = peg$c381;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c382); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNOT() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 172,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c383) {
        s2 = peg$c383;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c384); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseNULL() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 173,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c385) {
        s2 = peg$c385;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c386); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOF() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 174,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c387) {
        s2 = peg$c387;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c388); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOFF() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 175,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c389) {
        s2 = peg$c389;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c390); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseON() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 176,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c391) {
        s2 = peg$c391;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c392); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOR() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 177,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c393) {
        s2 = peg$c393;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c394); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseOWN() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 178,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c395) {
        s2 = peg$c395;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c396); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseRETURN() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 179,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c397) {
        s2 = peg$c397;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c398); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSWITCH() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 180,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c399) {
        s2 = peg$c399;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c400); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTHEN() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 181,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c401) {
        s2 = peg$c401;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c402); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTHIS() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 182,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c403) {
        s2 = peg$c403;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c404); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTHROW() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 183,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c405) {
        s2 = peg$c405;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c406); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTRUE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 184,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c407) {
        s2 = peg$c407;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c408); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTRY() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 185,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c409) {
        s2 = peg$c409;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c410); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseTYPEOF() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 186,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c411) {
        s2 = peg$c411;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c412); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUNDEFINED() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 187,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c413) {
        s2 = peg$c413;
        peg$currPos += 9;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c414); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUNLESS() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 188,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c415) {
        s2 = peg$c415;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c416); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUNTIL() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 189,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c417) {
        s2 = peg$c417;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c418); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseWHEN() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 190,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c419) {
        s2 = peg$c419;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c420); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseWHILE() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 191,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 5) === peg$c421) {
        s2 = peg$c421;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c422); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseYES() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 204 + 192,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c423) {
        s2 = peg$c423;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c424); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = peg$c6;
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseSharedKeywords() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 193,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c407) {
        s1 = peg$c407;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c408); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c361) {
          s1 = peg$c361;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c362); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c385) {
            s1 = peg$c385;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c386); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 4) === peg$c403) {
              s1 = peg$c403;
              peg$currPos += 4;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c404); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 3) === peg$c379) {
                s1 = peg$c379;
                peg$currPos += 3;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c380); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 6) === peg$c351) {
                  s1 = peg$c351;
                  peg$currPos += 6;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c352); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c411) {
                    s1 = peg$c411;
                    peg$currPos += 6;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c412); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 10) === peg$c371) {
                      s1 = peg$c371;
                      peg$currPos += 10;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c372); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c369) {
                        s1 = peg$c369;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c370); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 6) === peg$c397) {
                          s1 = peg$c397;
                          peg$currPos += 6;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c398); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 5) === peg$c405) {
                            s1 = peg$c405;
                            peg$currPos += 5;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c406); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c341) {
                              s1 = peg$c341;
                              peg$currPos += 5;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c342); }
                            }
                            if (s1 === peg$FAILED) {
                              if (input.substr(peg$currPos, 8) === peg$c347) {
                                s1 = peg$c347;
                                peg$currPos += 8;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c348); }
                              }
                              if (s1 === peg$FAILED) {
                                if (input.substr(peg$currPos, 8) === peg$c353) {
                                  s1 = peg$c353;
                                  peg$currPos += 8;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c354); }
                                }
                                if (s1 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 2) === peg$c367) {
                                    s1 = peg$c367;
                                    peg$currPos += 2;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c368); }
                                  }
                                  if (s1 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 4) === peg$c357) {
                                      s1 = peg$c357;
                                      peg$currPos += 4;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c358); }
                                    }
                                    if (s1 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 6) === peg$c399) {
                                        s1 = peg$c399;
                                        peg$currPos += 6;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c400); }
                                      }
                                      if (s1 === peg$FAILED) {
                                        if (input.substr(peg$currPos, 3) === peg$c365) {
                                          s1 = peg$c365;
                                          peg$currPos += 3;
                                        } else {
                                          s1 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c366); }
                                        }
                                        if (s1 === peg$FAILED) {
                                          if (input.substr(peg$currPos, 5) === peg$c421) {
                                            s1 = peg$c421;
                                            peg$currPos += 5;
                                          } else {
                                            s1 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c422); }
                                          }
                                          if (s1 === peg$FAILED) {
                                            if (input.substr(peg$currPos, 2) === peg$c355) {
                                              s1 = peg$c355;
                                              peg$currPos += 2;
                                            } else {
                                              s1 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c356); }
                                            }
                                            if (s1 === peg$FAILED) {
                                              if (input.substr(peg$currPos, 3) === peg$c409) {
                                                s1 = peg$c409;
                                                peg$currPos += 3;
                                              } else {
                                                s1 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c410); }
                                              }
                                              if (s1 === peg$FAILED) {
                                                if (input.substr(peg$currPos, 5) === peg$c345) {
                                                  s1 = peg$c345;
                                                  peg$currPos += 5;
                                                } else {
                                                  s1 = peg$FAILED;
                                                  if (peg$silentFails === 0) { peg$fail(peg$c346); }
                                                }
                                                if (s1 === peg$FAILED) {
                                                  if (input.substr(peg$currPos, 7) === peg$c363) {
                                                    s1 = peg$c363;
                                                    peg$currPos += 7;
                                                  } else {
                                                    s1 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c364); }
                                                  }
                                                  if (s1 === peg$FAILED) {
                                                    if (input.substr(peg$currPos, 5) === peg$c349) {
                                                      s1 = peg$c349;
                                                      peg$currPos += 5;
                                                    } else {
                                                      s1 = peg$FAILED;
                                                      if (peg$silentFails === 0) { peg$fail(peg$c350); }
                                                    }
                                                    if (s1 === peg$FAILED) {
                                                      if (input.substr(peg$currPos, 7) === peg$c359) {
                                                        s1 = peg$c359;
                                                        peg$currPos += 7;
                                                      } else {
                                                        s1 = peg$FAILED;
                                                        if (peg$silentFails === 0) { peg$fail(peg$c360); }
                                                      }
                                                      if (s1 === peg$FAILED) {
                                                        if (input.substr(peg$currPos, 5) === peg$c425) {
                                                          s1 = peg$c425;
                                                          peg$currPos += 5;
                                                        } else {
                                                          s1 = peg$FAILED;
                                                          if (peg$silentFails === 0) { peg$fail(peg$c426); }
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
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseJSKeywords() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 194,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c427) {
        s1 = peg$c427;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c428); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 7) === peg$c429) {
          s1 = peg$c429;
          peg$currPos += 7;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c430); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c431) {
            s1 = peg$c431;
            peg$currPos += 8;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c432); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c433) {
              s1 = peg$c433;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c434); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c435) {
                s1 = peg$c435;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c436); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 4) === peg$c437) {
                  s1 = peg$c437;
                  peg$currPos += 4;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c438); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c439) {
                    s1 = peg$c439;
                    peg$currPos += 5;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c440); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 3) === peg$c441) {
                      s1 = peg$c441;
                      peg$currPos += 3;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c442); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 4) === peg$c443) {
                        s1 = peg$c443;
                        peg$currPos += 4;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c444); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 6) === peg$c445) {
                          s1 = peg$c445;
                          peg$currPos += 6;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c446); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 6) === peg$c447) {
                            s1 = peg$c447;
                            peg$currPos += 6;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c448); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.substr(peg$currPos, 6) === peg$c449) {
                              s1 = peg$c449;
                              peg$currPos += 6;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c450); }
                            }
                            if (s1 === peg$FAILED) {
                              if (input.substr(peg$currPos, 10) === peg$c451) {
                                s1 = peg$c451;
                                peg$currPos += 10;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c452); }
                              }
                              if (s1 === peg$FAILED) {
                                if (input.substr(peg$currPos, 9) === peg$c453) {
                                  s1 = peg$c453;
                                  peg$currPos += 9;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c454); }
                                }
                                if (s1 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 7) === peg$c455) {
                                    s1 = peg$c455;
                                    peg$currPos += 7;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c456); }
                                  }
                                  if (s1 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 7) === peg$c457) {
                                      s1 = peg$c457;
                                      peg$currPos += 7;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c458); }
                                    }
                                    if (s1 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 9) === peg$c459) {
                                        s1 = peg$c459;
                                        peg$currPos += 9;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c460); }
                                      }
                                      if (s1 === peg$FAILED) {
                                        if (input.substr(peg$currPos, 6) === peg$c461) {
                                          s1 = peg$c461;
                                          peg$currPos += 6;
                                        } else {
                                          s1 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c462); }
                                        }
                                        if (s1 === peg$FAILED) {
                                          if (input.substr(peg$currPos, 6) === peg$c463) {
                                            s1 = peg$c463;
                                            peg$currPos += 6;
                                          } else {
                                            s1 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c464); }
                                          }
                                          if (s1 === peg$FAILED) {
                                            if (input.substr(peg$currPos, 5) === peg$c465) {
                                              s1 = peg$c465;
                                              peg$currPos += 5;
                                            } else {
                                              s1 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c466); }
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
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCSKeywords() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 204 + 195,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c413) {
        s1 = peg$c413;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c414); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c401) {
          s1 = peg$c401;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c402); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c415) {
            s1 = peg$c415;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c416); }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 5) === peg$c417) {
              s1 = peg$c417;
              peg$currPos += 5;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c418); }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c377) {
                s1 = peg$c377;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c378); }
              }
              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 3) === peg$c389) {
                  s1 = peg$c389;
                  peg$currPos += 3;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c390); }
                }
                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c343) {
                    s1 = peg$c343;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c344); }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c419) {
                      s1 = peg$c419;
                      peg$currPos += 4;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c420); }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 3) === peg$c339) {
                        s1 = peg$c339;
                        peg$currPos += 3;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c340); }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c393) {
                          s1 = peg$c393;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c394); }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.substr(peg$currPos, 4) === peg$c375) {
                            s1 = peg$c375;
                            peg$currPos += 4;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c376); }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.substr(peg$currPos, 2) === peg$c373) {
                              s1 = peg$c373;
                              peg$currPos += 2;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c374); }
                            }
                            if (s1 === peg$FAILED) {
                              if (input.substr(peg$currPos, 3) === peg$c383) {
                                s1 = peg$c383;
                                peg$currPos += 3;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c384); }
                              }
                              if (s1 === peg$FAILED) {
                                if (input.substr(peg$currPos, 3) === peg$c423) {
                                  s1 = peg$c423;
                                  peg$currPos += 3;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c424); }
                                }
                                if (s1 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 2) === peg$c381) {
                                    s1 = peg$c381;
                                    peg$currPos += 2;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c382); }
                                  }
                                  if (s1 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 2) === peg$c391) {
                                      s1 = peg$c391;
                                      peg$currPos += 2;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c392); }
                                    }
                                    if (s1 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 2) === peg$c387) {
                                        s1 = peg$c387;
                                        peg$currPos += 2;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c388); }
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
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parseidentifierPart();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = peg$c6;
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsereserved() {
      var s0, s1;

      var key    = peg$currPos * 204 + 196,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsemacro();
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseSharedKeywords();
        if (s0 === peg$FAILED) {
          s0 = peg$parseCSKeywords();
          if (s0 === peg$FAILED) {
            s0 = peg$parseJSKeywords();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUnicodeEscapeSequence() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 204 + 197,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c467) {
        s1 = peg$c467;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c468); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsehexDigit();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsehexDigit();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsehexDigit();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsehexDigit();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c469(s2, s3, s4, s5);
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUnicodeLetter() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 198,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c470.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c471); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 55340) {
          s1 = peg$c472;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c473); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c474.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c475); }
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
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 55304) {
            s1 = peg$c476;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c477); }
          }
          if (s1 !== peg$FAILED) {
            if (peg$c478.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c479); }
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
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 55401) {
              s1 = peg$c480;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c481); }
            }
            if (s1 !== peg$FAILED) {
              if (peg$c482.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c483); }
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
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 55305) {
                s1 = peg$c484;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c485); }
              }
              if (s1 !== peg$FAILED) {
                if (peg$c486.test(input.charAt(peg$currPos))) {
                  s2 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c487); }
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
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 55349) {
                  s1 = peg$c488;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c489); }
                }
                if (s1 !== peg$FAILED) {
                  if (peg$c490.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c491); }
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
                  s0 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 55300) {
                    s1 = peg$c492;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c493); }
                  }
                  if (s1 !== peg$FAILED) {
                    if (peg$c494.test(input.charAt(peg$currPos))) {
                      s2 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c495); }
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
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 55296) {
                      s1 = peg$c496;
                      peg$currPos++;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c497); }
                    }
                    if (s1 !== peg$FAILED) {
                      if (peg$c498.test(input.charAt(peg$currPos))) {
                        s2 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c499); }
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
                      s0 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 55308) {
                        s1 = peg$c500;
                        peg$currPos++;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c501); }
                      }
                      if (s1 !== peg$FAILED) {
                        if (peg$c502.test(input.charAt(peg$currPos))) {
                          s2 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c503); }
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
                        s0 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 55297) {
                          s1 = peg$c504;
                          peg$currPos++;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c505); }
                        }
                        if (s1 !== peg$FAILED) {
                          if (peg$c506.test(input.charAt(peg$currPos))) {
                            s2 = input.charAt(peg$currPos);
                            peg$currPos++;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c507); }
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
                          s0 = peg$currPos;
                          if (input.charCodeAt(peg$currPos) === 55406) {
                            s1 = peg$c508;
                            peg$currPos++;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c509); }
                          }
                          if (s1 !== peg$FAILED) {
                            if (peg$c510.test(input.charAt(peg$currPos))) {
                              s2 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c511); }
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
                            s0 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 55299) {
                              s1 = peg$c512;
                              peg$currPos++;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c513); }
                            }
                            if (s1 !== peg$FAILED) {
                              if (peg$c514.test(input.charAt(peg$currPos))) {
                                s2 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c515); }
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
                              s0 = peg$currPos;
                              if (input.charCodeAt(peg$currPos) === 55360) {
                                s1 = peg$c516;
                                peg$currPos++;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c517); }
                              }
                              if (s1 !== peg$FAILED) {
                                if (peg$c518.test(input.charAt(peg$currPos))) {
                                  s2 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c519); }
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
                                s0 = peg$currPos;
                                if (input.charCodeAt(peg$currPos) === 55422) {
                                  s1 = peg$c520;
                                  peg$currPos++;
                                } else {
                                  s1 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c521); }
                                }
                                if (s1 !== peg$FAILED) {
                                  if (peg$c522.test(input.charAt(peg$currPos))) {
                                    s2 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s2 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c523); }
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
                                  s0 = peg$currPos;
                                  if (input.charCodeAt(peg$currPos) === 55405) {
                                    s1 = peg$c524;
                                    peg$currPos++;
                                  } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c525); }
                                  }
                                  if (s1 !== peg$FAILED) {
                                    if (peg$c526.test(input.charAt(peg$currPos))) {
                                      s2 = input.charAt(peg$currPos);
                                      peg$currPos++;
                                    } else {
                                      s2 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c527); }
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
                                    s0 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 55322) {
                                      s1 = peg$c528;
                                      peg$currPos++;
                                    } else {
                                      s1 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c529); }
                                    }
                                    if (s1 !== peg$FAILED) {
                                      if (peg$c530.test(input.charAt(peg$currPos))) {
                                        s2 = input.charAt(peg$currPos);
                                        peg$currPos++;
                                      } else {
                                        s2 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c531); }
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
                                      s0 = peg$currPos;
                                      if (input.charCodeAt(peg$currPos) === 55298) {
                                        s1 = peg$c532;
                                        peg$currPos++;
                                      } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c533); }
                                      }
                                      if (s1 !== peg$FAILED) {
                                        if (peg$c534.test(input.charAt(peg$currPos))) {
                                          s2 = input.charAt(peg$currPos);
                                          peg$currPos++;
                                        } else {
                                          s2 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c535); }
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
                                        s0 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 55309) {
                                          s1 = peg$c536;
                                          peg$currPos++;
                                        } else {
                                          s1 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c537); }
                                        }
                                        if (s1 !== peg$FAILED) {
                                          if (peg$c538.test(input.charAt(peg$currPos))) {
                                            s2 = input.charAt(peg$currPos);
                                            peg$currPos++;
                                          } else {
                                            s2 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c539); }
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

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUnicodeCombiningMark() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 199,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c540.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c541); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 56128) {
          s1 = peg$c542;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c543); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c544.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c545); }
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
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 55348) {
            s1 = peg$c546;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c547); }
          }
          if (s1 !== peg$FAILED) {
            if (peg$c548.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c549); }
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
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 55300) {
              s1 = peg$c492;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c493); }
            }
            if (s1 !== peg$FAILED) {
              if (peg$c550.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c551); }
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
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 55296) {
                s1 = peg$c496;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c497); }
              }
              if (s1 !== peg$FAILED) {
                if (peg$c552.test(input.charAt(peg$currPos))) {
                  s2 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c553); }
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
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 55298) {
                  s1 = peg$c532;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c533); }
                }
                if (s1 !== peg$FAILED) {
                  if (peg$c554.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c555); }
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
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUnicodeDigit() {
      var s0, s1, s2;

      var key    = peg$currPos * 204 + 200,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c556.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c557); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 55349) {
          s1 = peg$c488;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c489); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c558.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c559); }
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
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 55300) {
            s1 = peg$c492;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c493); }
          }
          if (s1 !== peg$FAILED) {
            if (peg$c560.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c561); }
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
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 55297) {
              s1 = peg$c504;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c505); }
            }
            if (s1 !== peg$FAILED) {
              if (peg$c562.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c563); }
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
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseUnicodeConnectorPunctuation() {
      var s0;

      var key    = peg$currPos * 204 + 201,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (peg$c564.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c565); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseZWNJ() {
      var s0;

      var key    = peg$currPos * 204 + 202,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (input.charCodeAt(peg$currPos) === 8204) {
        s0 = peg$c566;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c567); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseZWJ() {
      var s0;

      var key    = peg$currPos * 204 + 203,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      if (input.charCodeAt(peg$currPos) === 8205) {
        s0 = peg$c568;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c569); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    // Generated by CoffeeScript 2.0.0-beta9-dev
    var associativities, c, chainableComparisonOps, constructorLookup, createInterpolation, createMemberExpression, CS, foldBinaryExpr, foldl, foldr, id, isValidRegExpFlags, LEFT_ASSOCIATIVE, negatableOps, op, p, postfixConstructorLookup, precedenceHierarchy, precedenceTable, prefixConstructorLookup, r, RIGHT_ASSOCIATIVE, rightAssocOps, rp, stripLeadingWhitespace, stripLeadingWhitespaceInterpolation;
    CS = __webpack_require__(102);
    constructorLookup = {
      '||': CS.LogicalOrOp,
      or: CS.LogicalOrOp,
      '&&': CS.LogicalAndOp,
      and: CS.LogicalAndOp,
      '|': CS.BitOrOp,
      '^': CS.BitXorOp,
      '&': CS.BitAndOp,
      '?': CS.ExistsOp,
      '==': CS.EQOp,
      is: CS.EQOp,
      '!=': CS.NEQOp,
      isnt: CS.NEQOp,
      '<=': CS.LTEOp,
      '>=': CS.GTEOp,
      '<': CS.LTOp,
      '>': CS.GTOp,
      'extends': CS.ExtendsOp,
      'instanceof': CS.InstanceofOp,
      'in': CS.InOp,
      of: CS.OfOp,
      '<<': CS.LeftShiftOp,
      '>>': CS.SignedRightShiftOp,
      '>>>': CS.UnsignedRightShiftOp,
      '+': CS.PlusOp,
      '-': CS.SubtractOp,
      '*': CS.MultiplyOp,
      '/': CS.DivideOp,
      '%': CS.RemOp,
      '**': CS.ExpOp
    };
    negatableOps = [
      'instanceof',
      'in',
      'of'
    ];
    chainableComparisonOps = [
      '<=',
      '>=',
      '<',
      '>',
      '==',
      'is',
      '!=',
      'isnt'
    ];
    rightAssocOps = [
      ';',
      '=',
      '?',
      '**'
    ];
    precedenceHierarchy = [
      [
        'or',
        '||'
      ],
      [
        'and',
        '&&'
      ],
      ['|'],
      ['^'],
      ['&'],
      ['?'],
      [
        'is',
        '==',
        'isnt',
        '!='
      ],
      [
        'instanceof',
        'in',
        'of',
        '<=',
        '>=',
        '<',
        '>'
      ],
      [
        '<<',
        '>>',
        '>>>'
      ],
      [
        '+',
        '-'
      ],
      [
        '*',
        '/',
        '%'
      ],
      ['**']
    ];
    precedenceTable = function () {
      var level, op, ops, table;
      table = {};
      for (var i$ = 0, length$ = precedenceHierarchy.length; i$ < length$; ++i$) {
        ops = precedenceHierarchy[i$];
        level = i$;
        for (var i$1 = 0, length$1 = ops.length; i$1 < length$1; ++i$1) {
          op = ops[i$1];
          table[op] = level;
        }
      }
      return table;
    }();
    RIGHT_ASSOCIATIVE = {};
    LEFT_ASSOCIATIVE = {};
    associativities = function () {
      var op, result, rightAssocOp;
      result = {};
      for (op in precedenceTable) {
        if (!isOwn$(precedenceTable, op))
          continue;
        result[op] = LEFT_ASSOCIATIVE;
      }
      for (var i$ = 0, length$ = rightAssocOps.length; i$ < length$; ++i$) {
        rightAssocOp = rightAssocOps[i$];
        result[rightAssocOp] = RIGHT_ASSOCIATIVE;
      }
      return result;
    }();
    for (var i$ = 0, length$ = negatableOps.length; i$ < length$; ++i$) {
      op = negatableOps[i$];
      (function (op) {
        var fn, negatedOp;
        fn = function (a, b) {
          return new CS.LogicalNotOp(new constructorLookup[op](a, b));
        };
        fn.prototype = constructorLookup[op].prototype;
        negatedOp = 'not ' + op;
        constructorLookup[negatedOp] = fn;
        precedenceTable[negatedOp] = precedenceTable[op];
        return associativities[negatedOp] = associativities[op];
      }(op));
    }
    prefixConstructorLookup = {
      '++': CS.PreIncrementOp,
      '--': CS.PreDecrementOp,
      '+': CS.UnaryPlusOp,
      '-': CS.UnaryNegateOp,
      '!': CS.LogicalNotOp,
      not: CS.LogicalNotOp,
      '~': CS.BitNotOp,
      'do': CS.DoOp,
      'typeof': CS.TypeofOp,
      'delete': CS.DeleteOp
    };
    postfixConstructorLookup = {
      '?': CS.UnaryExistsOp,
      '[..]': CS.ShallowCopyArray,
      '++': CS.PostIncrementOp,
      '--': CS.PostDecrementOp
    };
    foldl = function (fn, memo, list) {
      var item;
      for (var i$1 = 0, length$1 = list.length; i$1 < length$1; ++i$1) {
        item = list[i$1];
        memo = fn(memo, item);
      }
      return memo;
    };
    foldr = function (fn, memo, list) {
      var i, item;
      i = list.length;
      while (i--) {
        item = list[i];
        memo = fn(memo, item);
      }
      return memo;
    };
    foldBinaryExpr = function (parts, ignoreChains) {
      var chainStack, expr, leftOperand, nextOp, nextPrec, operator, prec, rightOperand, stack;
      if (parts.length < 3)
        return parts[0];
      stack = [].slice.call(parts, 0, 3);
      parts = [].slice.call(parts, 3);
      while (parts.length > 0) {
        nextOp = parts[0];
        if (!ignoreChains && stack.length > 2) {
          operator = stack[stack.length - 2];
          if (in$(operator, chainableComparisonOps) && in$(nextOp, chainableComparisonOps)) {
            chainStack = stack.slice(-3);
            stack = stack.slice(0, stack.length - 3);
            while (true) {
              operator = nextOp;
              chainStack.push(parts.shift(), parts.shift());
              nextOp = parts[0];
              if (nextOp) {
                nextPrec = precedenceTable[nextOp];
                prec = precedenceTable[operator];
              }
              if (!(null != nextOp && (nextPrec > prec || in$(nextOp, chainableComparisonOps))))
                break;
            }
            stack.push(new CS.ChainedComparisonOp(foldBinaryExpr(chainStack, true)));
            continue;
          }
        }
        while (stack.length > 2 && (operator = stack[stack.length - 2], (prec = precedenceTable[operator], (nextPrec = precedenceTable[nextOp], nextPrec < prec || in$(operator, chainableComparisonOps) && in$(nextOp, chainableComparisonOps) || nextPrec === prec && associativities[operator] === LEFT_ASSOCIATIVE)))) {
          rightOperand = stack.pop();
          stack.pop();
          leftOperand = stack.pop();
          stack.push(new constructorLookup[operator](leftOperand, rightOperand));
        }
        stack.push(parts.shift());
        stack.push(parts.shift());
      }
      expr = stack.pop();
      while (stack.length > 0) {
        expr = new constructorLookup[(stack.pop())](stack.pop(), expr);
      }
      return expr;
    };
    createInterpolation = function (es) {
      var init;
      init = new CS.String('').g().r('');
      return foldl(function (memo, s) {
        var left;
        if (s instanceof CS.String) {
          left = memo;
          while (left) {
            if (left instanceof CS.String) {
              if (left === init) {
                c(left, s);
                left.raw = s.raw;
                delete left.generated;
              }
              left.data = '' + left.data + s.data;
              return memo;
            } else if (left instanceof CS.ConcatOp) {
              left = left.right;
            } else {
              break;
            }
          }
        }
        return new CS.ConcatOp(memo, s);
      }, init, es);
    };
    createMemberExpression = function (e, accesses) {
      return foldl(function (left, access) {
        var F, o;
        F = function () {
        };
        F.prototype = access.op.prototype;
        o = new F;
        access.op.call.apply(access.op, [
          o,
          left
        ].concat([].slice.call(access.operands)));
        return c(o.r(left.raw + access.raw), e);
      }, e, accesses);
    };
    isValidRegExpFlags = function (flags) {
      var f, flag;
      if (!flags)
        return true;
      if (flags.length > 4)
        return false;
      flags.sort();
      flag = null;
      for (var i$1 = 0, length$1 = flags.length; i$1 < length$1; ++i$1) {
        f = flags[i$1];
        if (flag === f)
          return false;
        flag = f;
      }
      return true;
    };
    stripLeadingWhitespace = function (str) {
      var attempt, cache$, indent, match, matchStr, wholeMatch;
      str = str.trimRight();
      matchStr = str;
      indent = null;
      while (match = /\n+([^\n\S]*)/.exec(matchStr)) {
        cache$ = match;
        wholeMatch = cache$[0];
        attempt = cache$[1];
        matchStr = matchStr.slice(match.index + wholeMatch.length);
        if (!(null != indent) || 0 < attempt.length && attempt.length < indent.length)
          indent = attempt;
      }
      if (indent)
        str = str.replace(new RegExp('\\n' + indent, 'g'), '\n');
      str = str.replace(/^\n/, '');
      return str;
    };
    stripLeadingWhitespaceInterpolation = function (pieces) {
      var attempt, cache$, indent, index, match, matchStr, piece, wholeMatch;
      indent = null;
      for (var i$1 = 0, length$1 = pieces.length; i$1 < length$1; ++i$1) {
        piece = pieces[i$1];
        index = i$1;
        if (piece instanceof CS.String) {
          if (index === pieces.length - 1)
            piece.data = piece.data.replace(/\s+$/, '');
          matchStr = piece.data;
          while (match = /\n+([^\n\S]*)/.exec(matchStr)) {
            cache$ = match;
            wholeMatch = cache$[0];
            attempt = cache$[1];
            matchStr = matchStr.slice(match.index + wholeMatch.length);
            if (!(null != indent) || 0 < attempt.length && attempt.length < indent.length)
              indent = attempt;
          }
        }
      }
      if (indent)
        for (var i$2 = 0, length$2 = pieces.length; i$2 < length$2; ++i$2) {
          piece = pieces[i$2];
          index = i$2;
          if (piece instanceof CS.String) {
            piece.data = piece.data.replace(new RegExp('\\n' + indent, 'g'), '\n');
            if (index === pieces.length - 1)
              piece.data = piece.data.replace(/(\n\s*)+$/, '');
            if (index === 0)
              piece.data = piece.data.replace(/^\n/, '');
          }
        }
      return pieces;
    };
    r = function (node) {
      node.raw = text().replace(/[\uEFEF\uEFFE\uEFFF]/g, '');
      return node;
    };
    p = function (node) {
      node.line = line();
      node.column = column();
      node.offset = offset();
      return node;
    };
    rp = function (node) {
      return r(p(node));
    };
    c = function (to, from) {
      to.line = from.line;
      to.column = from.column;
      to.offset = from.offset;
      return to;
    };
    id = function (x) {
      return x;
    };
    if (!options.raw)
      r = p = rp = id;
    eval('\n  // XXX: The functions below override the default code generated by PEGjs.\n  // CoffeeScriptRedux has a preprocessor that adds control characters to\n  // mark indents/outdents/etc for PEGjs. These characters cause the line,\n  // column, and offset values to differ from the original input source code,\n  // so this section exists to properly hide those control characters when\n  // reporting location information. See #117 & #335.\n\n  var csr$controlCharacterCount = 0;\n\n  function offset() {\n    return peg$reportedPos - csr$controlCharacterCount;\n  }\n\n  function peg$computePosDetails(pos) {\n    function advance(details, startPos, endPos) {\n      var p, ch;\n\n      for (p = startPos; p < endPos; p++) {\n        ch = input.charAt(p);\n        if (ch === "\\n") {\n          if (!details.seenCR) { details.line++; }\n          details.column = 1;\n          details.seenCR = false;\n        } else if (ch === "\\r" || ch === "\\u2028" || ch === "\\u2029") {\n          details.line++;\n          details.column = 1;\n          details.seenCR = true;\n        } else if(!/[\\uEFEF\\uEFFE\\uEFFF]/.test(ch)) {\n          details.column++;\n          details.seenCR = false;\n        } else {\n          csr$controlCharacterCount++;\n        }\n      }\n    }\n\n    if (peg$cachedPos !== pos) {\n      if (peg$cachedPos > pos) {\n        csr$controlCharacterCount = 0;\n        peg$cachedPos = 0;\n        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };\n      }\n      advance(peg$cachedPosDetails, peg$cachedPos, pos);\n      peg$cachedPos = pos;\n    }\n\n    return peg$cachedPosDetails;\n  }\n  ');
    function isOwn$(o, p) {
      return {}.hasOwnProperty.call(o, p);
    }
    function in$(member, list) {
      for (var i = 0, length = list.length; i < length; ++i)
        if (i in list && list[i] === member)
          return true;
      return false;
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

/***/ 106:
/***/ (function(module) {

module.exports = {"_from":"git://github.com/basicer/CoffeeScriptRedux.git","_id":"coffee-script-redux@2.0.0-beta9-dev","_inBundle":false,"_integrity":"","_location":"/coffee-script-redux","_phantomChildren":{},"_requested":{"type":"git","raw":"coffee-script-redux@git://github.com/basicer/CoffeeScriptRedux.git","name":"coffee-script-redux","escapedName":"coffee-script-redux","rawSpec":"git://github.com/basicer/CoffeeScriptRedux.git","saveSpec":"git://github.com/basicer/CoffeeScriptRedux.git","fetchSpec":"git://github.com/basicer/CoffeeScriptRedux.git","gitCommittish":null},"_requiredBy":["/"],"_resolved":"git://github.com/basicer/CoffeeScriptRedux.git#b1c747564a576f3c9d5e414e450d82c6b7bcbad6","_spec":"coffee-script-redux@git://github.com/basicer/CoffeeScriptRedux.git","_where":"/Users/basicer/code/esper-master/plugins/lang-coffeescript","author":{"name":"Michael Ficarra"},"bin":{"coffee":"./bin/coffee"},"bugs":{"url":"https://github.com/michaelficarra/CoffeeScriptRedux/issues"},"bundleDependencies":false,"dependencies":{"StringScanner":"~0.0.3","cscodegen":"git+https://github.com/michaelficarra/cscodegen.git#73fd7202ac086c26f18c9d56f025b18b3c6f5383","escodegen":"~1.2.0","esmangle":"~1.0.0","nopt":"~2.1.2","source-map":"0.1.x"},"deprecated":false,"description":"Unfancy JavaScript","devDependencies":{"cluster":"~0.7.7","commonjs-everywhere":"~0.9.0","mocha":"~1.12.0","pegjs":"~0.8.0","pegjs-each-code":"~0.2.0","semver":"~2.1.0"},"engines":{"node":"0.8.x || 0.10.x"},"homepage":"https://github.com/michaelficarra/CoffeeScriptRedux","keywords":["coffeescript","javascript","language","compiler"],"license":"3-clause BSD","licenses":[{"type":"3-clause BSD","url":"https://raw.github.com/michaelficarra/CoffeeScriptRedux/master/LICENSE"}],"main":"./lib/module","name":"coffee-script-redux","optionalDependencies":{"cscodegen":"git+https://github.com/michaelficarra/cscodegen.git#73fd7202ac086c26f18c9d56f025b18b3c6f5383","escodegen":"~1.2.0","esmangle":"~1.0.0","source-map":"0.1.x"},"repository":{"type":"git","url":"git://github.com/michaelficarra/CoffeeScriptRedux.git"},"scripts":{"build":"make -j build","test":"make -j test"},"version":"2.0.0-beta9-dev","warnings":[{"code":"ENOTSUP","required":{"node":"0.8.x || 0.10.x"},"pkgid":"coffee-script-redux@2.0.0-beta9-dev"}]};

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 2.0.0-beta9-dev
var any, assignment, beingDeclared, cache$, cache$1, collectIdentifiers, concat, concatMap, CS, declarationsNeeded, declarationsNeededRecursive, defaultRules, difference, divMod, dynamicMemberAccess, enabledHelpers, envEnrichments, exports, expr, extractNumber, extractStaticRange, fn, foldl, foldl1, forceBlock, generateMutatingWalker, generateSoak, genSym, h, hasSoak, helperNames, helpers, inlineHelpers, intersect, isIdentifierName, isScopeBoundary, JS, jsReserved, makeReturn, makeVarDeclaration, map, mapChildNodes, memberAccess, needsCaching, nub, owns, partition, span, stmt, union, usedAsExpression, variableDeclarations;
cache$ = __webpack_require__(101);
any = cache$.any;
concat = cache$.concat;
concatMap = cache$.concatMap;
difference = cache$.difference;
divMod = cache$.divMod;
foldl = cache$.foldl;
foldl1 = cache$.foldl1;
intersect = cache$.intersect;
map = cache$.map;
nub = cache$.nub;
owns = cache$.owns;
partition = cache$.partition;
span = cache$.span;
union = cache$.union;
cache$1 = __webpack_require__(100);
beingDeclared = cache$1.beingDeclared;
usedAsExpression = cache$1.usedAsExpression;
envEnrichments = cache$1.envEnrichments;
CS = __webpack_require__(102);
JS = __webpack_require__(108);
exports = null != ( true && null != module ? module.exports : void 0) ?  true && null != module ? module.exports : void 0 : this;
jsReserved = [
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
  'arguments',
  'eval'
];
mapChildNodes = function (node, mapper, reducer, identity, opts) {
  var child, childName;
  if (null == opts)
    opts = {};
  if (null != opts.listReducer)
    opts.listReducer;
  else
    opts.listReducer = reducer;
  if (null != opts.listIdentity)
    opts.listIdentity;
  else
    opts.listIdentity = identity;
  return foldl(identity, function (accum$) {
    for (var i$ = 0, length$ = node.childNodes.length; i$ < length$; ++i$) {
      childName = node.childNodes[i$];
      if (!(null != node[childName]))
        continue;
      accum$.push(in$(childName, node.listMembers) ? foldl(opts.listIdentity, function (accum$1) {
        for (var i$1 = 0, length$1 = node[childName].length; i$1 < length$1; ++i$1) {
          child = node[childName][i$1];
          if (!('undefined' !== typeof child && null != child))
            continue;
          accum$1.push(mapper(child, childName));
        }
        return accum$1;
      }.call(this, []), opts.listReducer) : mapper(node[childName], childName));
    }
    return accum$;
  }.call(this, []), reducer);
};
genSym = function () {
  var genSymCounter;
  genSymCounter = 0;
  return function (pre) {
    return new JS.GenSym(pre, ++genSymCounter);
  };
}();
stmt = function (e) {
  var walk;
  if (!(null != e))
    return e;
  if (e.isStatement) {
    return e;
  } else if (e['instanceof'](JS.SequenceExpression)) {
    walk = function (seq) {
      return concatMap(seq.expressions, function (e) {
        if (e['instanceof'](JS.SequenceExpression)) {
          return walk(e);
        } else {
          return [stmt(e)];
        }
      });
    };
    return new JS.BlockStatement(walk(e));
  } else if (e['instanceof'](JS.ConditionalExpression)) {
    return new JS.IfStatement(expr(e.test), stmt(e.consequent), stmt(e.alternate));
  } else {
    return new JS.ExpressionStatement(e);
  }
};
expr = function (s) {
  var accum, alternate, block, consequent, iife, lastExpression, push;
  if (!(null != s))
    return s;
  if (s.isExpression) {
    return s;
  } else if (s['instanceof'](JS.BlockStatement)) {
    switch (s.body.length) {
    case 0:
      return helpers.undef();
    case 1:
      return expr(s.body[0]);
    default:
      return new JS.SequenceExpression(map(s.body, expr));
    }
  } else if (s['instanceof'](JS.ExpressionStatement)) {
    return s.expression;
  } else if (s['instanceof'](JS.ThrowStatement)) {
    return new JS.CallExpression(new JS.FunctionExpression(null, [], forceBlock(s)), []);
  } else if (s['instanceof'](JS.IfStatement)) {
    consequent = expr(null != s.consequent ? s.consequent : helpers.undef());
    alternate = expr(null != s.alternate ? s.alternate : helpers.undef());
    return new JS.ConditionalExpression(s.test, consequent, alternate);
  } else if (s['instanceof'](JS.ForInStatement, JS.ForStatement, JS.WhileStatement)) {
    accum = genSym('accum');
    push = function (x) {
      return stmt(new JS.CallExpression(memberAccess(accum, 'push'), [x]));
    };
    s.body = forceBlock(s.body);
    if (s.body.body.length) {
      lastExpression = s.body.body.slice(-1)[0];
      if (!lastExpression['instanceof'](JS.ThrowStatement))
        s.body.body[s.body.body.length - 1] = push(expr(lastExpression));
    } else {
      s.body.body.push(push(helpers.undef()));
    }
    block = new JS.BlockStatement([
      s,
      new JS.ReturnStatement(accum)
    ]);
    iife = new JS.FunctionExpression(null, [accum], block);
    return new JS.CallExpression(memberAccess(iife.g(), 'call'), [
      new JS.ThisExpression,
      new JS.ArrayExpression([])
    ]);
  } else if (s['instanceof'](JS.SwitchStatement, JS.TryStatement)) {
    block = new JS.BlockStatement([makeReturn(s)]);
    iife = new JS.FunctionExpression(null, [], block);
    return new JS.CallExpression(memberAccess(iife.g(), 'call'), [new JS.ThisExpression]);
  } else {
    throw new Error('expr: Cannot use a ' + s.type + ' as a value');
  }
};
isScopeBoundary = function (node) {
  return node['instanceof'](JS.FunctionExpression, JS.FunctionDeclaration) && !node.generated;
};
makeReturn = function (node) {
  var stmts;
  if (!(null != node))
    return new JS.ReturnStatement;
  if (node['instanceof'](JS.BlockStatement)) {
    return new JS.BlockStatement([].slice.call(node.body.slice(0, -1)).concat([makeReturn(node.body.slice(-1)[0])]));
  } else if (node['instanceof'](JS.SequenceExpression)) {
    return new JS.SequenceExpression([].slice.call(node.expressions.slice(0, -1)).concat([makeReturn(node.expressions.slice(-1)[0])]));
  } else if (node['instanceof'](JS.IfStatement)) {
    return new JS.IfStatement(node.test, makeReturn(node.consequent), null != node.alternate ? makeReturn(node.alternate) : null);
  } else if (node['instanceof'](JS.SwitchStatement)) {
    return new JS.SwitchStatement(node.discriminant, map(node.cases, makeReturn));
  } else if (node['instanceof'](JS.SwitchCase)) {
    if (!node.consequent.length)
      return node;
    stmts = node.consequent.slice(-1)[0]['instanceof'](JS.BreakStatement) ? node.consequent.slice(0, -1) : node.consequent;
    return new JS.SwitchCase(node.test, [].slice.call(stmts.slice(0, -1)).concat([makeReturn(stmts.slice(-1)[0])]));
  } else if (node['instanceof'](JS.TryStatement)) {
    return new JS.TryStatement(makeReturn(node.block), map(node.handlers, makeReturn), null != node.finalizer ? makeReturn(node.finalizer) : null);
  } else if (node['instanceof'](JS.CatchClause)) {
    return new JS.CatchClause(node.param, makeReturn(node.body));
  } else if (node['instanceof'](JS.ThrowStatement, JS.ReturnStatement, JS.BreakStatement, JS.ContinueStatement, JS.DebuggerStatement)) {
    return node;
  } else if (node['instanceof'](JS.UnaryExpression) && node.operator === 'void') {
    return new JS.ReturnStatement;
  } else {
    return new JS.ReturnStatement(expr(node));
  }
};
generateMutatingWalker = function (fn) {
  return function (node) {
    var args, mapper, reducer;
    args = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
    mapper = function (child, nameInParent) {
      return [
        nameInParent,
        fn.apply(child, args)
      ];
    };
    reducer = function (parent, param$) {
      var cache$2, name, newChild;
      {
        cache$2 = param$;
        name = cache$2[0];
        newChild = cache$2[1];
      }
      parent[name] = newChild;
      return parent;
    };
    return mapChildNodes(node, mapper, reducer, node, {
      listReducer: function (param$, param$1) {
        var _, accum, cache$2, cache$3, name, newChild;
        {
          cache$2 = param$;
          _ = cache$2[0];
          accum = cache$2[1];
        }
        {
          cache$3 = param$1;
          name = cache$3[0];
          newChild = cache$3[1];
        }
        return [
          name,
          accum.concat(newChild)
        ];
      },
      listIdentity: [
        null,
        []
      ]
    });
  };
};
declarationsNeeded = function (node) {
  if (!(null != node))
    return [];
  if (node['instanceof'](JS.AssignmentExpression) && node.operator === '=' && node.left['instanceof'](JS.Identifier)) {
    return [node.left.name];
  } else if (node['instanceof'](JS.ForInStatement) && node.left['instanceof'](JS.Identifier)) {
    return [node.left.name];
  } else {
    return [];
  }
};
declarationsNeededRecursive = function (node) {
  if (!(null != node))
    return [];
  if (isScopeBoundary(node)) {
    return [];
  } else {
    return union(declarationsNeeded(node), mapChildNodes(node, declarationsNeededRecursive, function (a, b) {
      return a.concat(b);
    }, []));
  }
};
variableDeclarations = function (node) {
  if (!(null != node))
    return [];
  if (node['instanceof'](JS.FunctionDeclaration)) {
    return [node.id];
  } else if (isScopeBoundary(node)) {
    return [];
  } else if (node['instanceof'](JS.VariableDeclarator)) {
    return [node.id];
  } else {
    return mapChildNodes(node, variableDeclarations, function (a, b) {
      return a.concat(b);
    }, []);
  }
};
collectIdentifiers = function (node) {
  return nub(function () {
    switch (false) {
    case !!(null != node):
      return [];
    case !node['instanceof'](JS.Identifier):
      return [node.name];
    case !(node['instanceof'](JS.MemberExpression) && !node.computed):
      return collectIdentifiers(node.object);
    default:
      return mapChildNodes(node, collectIdentifiers, function (a, b) {
        return a.concat(b);
      }, []);
    }
  }.call(this));
};
needsCaching = function (node) {
  if (!(null != node))
    return false;
  return envEnrichments(node, []).length > 0 || node['instanceof'](CS.FunctionApplications, CS.DoOp, CS.NewOp, CS.ArrayInitialiser, CS.ObjectInitialiser, CS.RegExp, CS.HeregExp, CS.PreIncrementOp, CS.PostIncrementOp, CS.PreDecrementOp, CS.PostDecrementOp, CS.Range) || mapChildNodes(node, needsCaching, function (a, b) {
    return a || b;
  }, false);
};
forceBlock = function (node) {
  if (!(null != node))
    return new JS.BlockStatement([]);
  node = stmt(node);
  if (node['instanceof'](JS.BlockStatement)) {
    return node;
  } else {
    return new JS.BlockStatement([node]);
  }
};
makeVarDeclaration = function (vars) {
  var decls, v;
  vars.sort(function (a, b) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  decls = function (accum$) {
    for (var i$ = 0, length$ = vars.length; i$ < length$; ++i$) {
      v = vars[i$];
      accum$.push(new JS.VariableDeclarator(v));
    }
    return accum$;
  }.call(this, []);
  return new JS.VariableDeclaration('var', decls);
};
isIdentifierName = function (name) {
  return !in$(name, jsReserved) && /^[$_a-z][$_a-z0-9]*$/i.test(name);
};
memberAccess = function (e, member) {
  if (isIdentifierName(member)) {
    return new JS.MemberExpression(false, expr(e), new JS.Identifier(member));
  } else {
    return new JS.MemberExpression(true, expr(e), new JS.Literal(member));
  }
};
dynamicMemberAccess = function (e, index) {
  if (index['instanceof'](JS.Literal) && typeof index.value === 'string') {
    return memberAccess(e, index.value);
  } else {
    return new JS.MemberExpression(true, expr(e), expr(index));
  }
};
assignment = function (assignee, expression, valueUsed) {
  var alternate, assignments, consequent, e, elements, i, index, m, numElements, p, propName, restName, size, test;
  if (null == valueUsed)
    valueUsed = false;
  assignments = [];
  expression = expr(expression);
  switch (false) {
  case !assignee.rest:
  case !assignee['instanceof'](JS.ArrayExpression):
    e = expression;
    if (valueUsed || assignee.elements.length > 1) {
      e = genSym('cache');
      assignments.push(new JS.AssignmentExpression('=', e, expression));
    }
    elements = assignee.elements;
    for (var i$ = 0, length$ = elements.length; i$ < length$; ++i$) {
      m = elements[i$];
      i = i$;
      if (m.rest)
        break;
      assignments.push(assignment(m, dynamicMemberAccess(e, new JS.Literal(i)), valueUsed));
    }
    if (elements.length > 0) {
      if (elements.slice(-1)[0].rest) {
        numElements = elements.length;
        restName = elements[numElements - 1] = elements[numElements - 1].expression;
        test = new JS.BinaryExpression('<=', new JS.Literal(numElements), memberAccess(e, 'length'));
        consequent = helpers.slice(e, new JS.Literal(numElements - 1));
        alternate = new JS.ArrayExpression([]);
        assignments.push(stmt(new JS.AssignmentExpression('=', restName, new JS.ConditionalExpression(test, consequent, alternate))));
      } else if (any(elements, function (p) {
          return p.rest;
        })) {
        restName = index = null;
        for (var i$1 = 0, length$1 = elements.length; i$1 < length$1; ++i$1) {
          p = elements[i$1];
          i = i$1;
          if (!p.rest)
            continue;
          restName = p.expression;
          index = i;
          break;
        }
        elements.splice(index, 1);
        numElements = elements.length;
        size = genSym('size');
        assignments.push(new JS.AssignmentExpression('=', size, memberAccess(e, 'length')));
        test = new JS.BinaryExpression('>', size, new JS.Literal(numElements));
        consequent = helpers.slice(e, new JS.Literal(index), new JS.BinaryExpression('-', size, new JS.Literal(numElements - index)));
        assignments.push(new JS.AssignmentExpression('=', restName, new JS.ConditionalExpression(test, consequent, new JS.ArrayExpression([]))));
        for (var i$2 = 0, length$2 = elements.slice(index).length; i$2 < length$2; ++i$2) {
          p = elements.slice(index)[i$2];
          i = i$2;
          assignments.push(stmt(new JS.AssignmentExpression('=', p, new JS.MemberExpression(true, e, new JS.BinaryExpression('-', size, new JS.Literal(numElements - index - i))))));
        }
      }
      if (any(elements, function (p) {
          return p.rest;
        }))
        throw new Error('Positional destructuring assignments may not have more than one rest operator');
    }
    break;
  case !assignee['instanceof'](JS.ObjectExpression):
    e = expression;
    if (valueUsed || assignee.properties.length > 1) {
      e = genSym('cache');
      assignments.push(new JS.AssignmentExpression('=', e, expression));
    }
    for (var i$3 = 0, length$3 = assignee.properties.length; i$3 < length$3; ++i$3) {
      m = assignee.properties[i$3];
      propName = m.key['instanceof'](JS.Identifier) ? new JS.Literal(m.key.name) : m.key;
      assignments.push(assignment(m.value, dynamicMemberAccess(e, propName), valueUsed));
    }
    break;
  case !assignee['instanceof'](JS.Identifier, JS.GenSym, JS.MemberExpression):
    assignments.push(new JS.AssignmentExpression('=', assignee, expr(expression)));
    break;
  default:
    throw new Error('compile: assignment: unassignable assignee: ' + assignee.type);
  }
  switch (assignments.length) {
  case 0:
    if (e === expression) {
      return helpers.undef();
    } else {
      return expression;
    }
  case 1:
    return assignments[0];
  default:
    return new JS.SequenceExpression(valueUsed ? [].slice.call(assignments).concat([e]) : assignments);
  }
};
hasSoak = function (node) {
  switch (false) {
  case !node['instanceof'](CS.SoakedFunctionApplication, CS.SoakedMemberAccessOp, CS.SoakedProtoMemberAccessOp, CS.SoakedDynamicMemberAccessOp, CS.SoakedDynamicProtoMemberAccessOp):
    return true;
  case !node['instanceof'](CS.FunctionApplication):
    return hasSoak(node['function']);
  case !node['instanceof'](CS.MemberAccessOps):
    return hasSoak(node.expression);
  default:
    return false;
  }
};
generateSoak = function () {
  var fn;
  fn = function (node) {
    var cache$2, cache$3, cache$4, cache$5, cache$6, ctor, e, memberName, sym, tests, typeofTest;
    switch (false) {
    case !node['instanceof'](CS.MemberAccessOp, CS.ProtoMemberAccessOp):
      cache$2 = fn(node.expression);
      tests = cache$2[0];
      e = cache$2[1];
      return [
        tests,
        new node.constructor(e, node.memberName)
      ];
    case !node['instanceof'](CS.DynamicMemberAccessOp, CS.DynamicProtoMemberAccessOp):
      cache$3 = fn(node.expression);
      tests = cache$3[0];
      e = cache$3[1];
      return [
        tests,
        new node.constructor(e, node.indexingExpr)
      ];
    case !node['instanceof'](CS.FunctionApplication):
      cache$4 = fn(node['function']);
      tests = cache$4[0];
      e = cache$4[1];
      return [
        tests,
        new CS.FunctionApplication(e, node['arguments'])
      ];
    case !node['instanceof'](CS.SoakedFunctionApplication):
      cache$5 = fn(node['function']);
      tests = cache$5[0];
      e = cache$5[1];
      typeofTest = function (e) {
        return new CS.EQOp(new CS.String('function'), new CS.TypeofOp(e));
      };
      if (needsCaching(e)) {
        sym = new CS.GenSym('cache');
        return [
          [].slice.call(tests).concat([typeofTest(new CS.AssignOp(sym, e))]),
          new CS.FunctionApplication(sym, node['arguments'])
        ];
      } else {
        return [
          [].slice.call(tests).concat([typeofTest(e)]),
          new CS.FunctionApplication(e, node['arguments'])
        ];
      }
    case !node['instanceof'](CS.SoakedMemberAccessOp, CS.SoakedProtoMemberAccessOp, CS.SoakedDynamicMemberAccessOp, CS.SoakedDynamicProtoMemberAccessOp):
      memberName = function () {
        switch (false) {
        case !node['instanceof'](CS.SoakedMemberAccessOp, CS.SoakedProtoMemberAccessOp):
          return 'memberName';
        case !node['instanceof'](CS.SoakedDynamicMemberAccessOp, CS.SoakedDynamicProtoMemberAccessOp):
          return 'indexingExpr';
        }
      }.call(this);
      ctor = function () {
        switch (false) {
        case !node['instanceof'](CS.SoakedMemberAccessOp):
          return CS.MemberAccessOp;
        case !node['instanceof'](CS.SoakedProtoMemberAccessOp):
          return CS.ProtoMemberAccessOp;
        case !node['instanceof'](CS.SoakedDynamicMemberAccessOp):
          return CS.DynamicMemberAccessOp;
        case !node['instanceof'](CS.SoakedDynamicProtoMemberAccessOp):
          return CS.DynamicProtoMemberAccessOp;
        }
      }.call(this);
      cache$6 = fn(node.expression);
      tests = cache$6[0];
      e = cache$6[1];
      if (needsCaching(e)) {
        sym = new CS.GenSym('cache');
        return [
          [].slice.call(tests).concat([new CS.UnaryExistsOp(new CS.AssignOp(sym, e))]),
          new ctor(sym, node[memberName])
        ];
      } else {
        return [
          [].slice.call(tests).concat([new CS.UnaryExistsOp(e)]),
          new ctor(e, node[memberName])
        ];
      }
    default:
      return [
        [],
        node
      ];
    }
  };
  return function (node) {
    var cache$2, e, tests;
    cache$2 = fn(node);
    tests = cache$2[0];
    e = cache$2[1];
    return new CS.Conditional(foldl1(tests, function (memo, t) {
      return new CS.LogicalAndOp(memo, t);
    }), e);
  };
}();
extractNumber = function (what) {
  if (what['instanceof'](CS.Int))
    return what.data;
  if (!what['instanceof'](CS.UnaryNegateOp))
    return false;
  if (!what.expression['instanceof'](CS.Int))
    return false;
  return 0 - what.expression.data;
};
extractStaticRange = function (range) {
  var left, right;
  if (!range['instanceof'](CS.Range))
    return;
  left = extractNumber(range.left);
  right = extractNumber(range.right);
  if (left === false)
    return;
  if (right === false)
    return;
  return [
    left,
    right
  ];
};
helperNames = {};
helpers = {
  'extends': function () {
    var block, child, ctor, f, key, parent, protoAccess;
    protoAccess = function (e) {
      return memberAccess(e, 'prototype');
    };
    child = new JS.Identifier('child');
    parent = new JS.Identifier('parent');
    ctor = new JS.Identifier('ctor');
    key = new JS.Identifier('key');
    block = [
      new JS.ForInStatement(new JS.VariableDeclaration('var', [new JS.VariableDeclarator(key, null)]), parent, new JS.IfStatement(helpers.isOwn(parent, key), f = stmt(new JS.AssignmentExpression('=', new JS.MemberExpression(true, child, key), new JS.MemberExpression(true, parent, key))))),
      new JS.FunctionDeclaration(ctor, [], new JS.BlockStatement([stmt(new JS.AssignmentExpression('=', memberAccess(new JS.ThisExpression, 'constructor'), child))])),
      new JS.AssignmentExpression('=', protoAccess(ctor), protoAccess(parent)),
      new JS.AssignmentExpression('=', protoAccess(child), new JS.NewExpression(ctor, [])),
      new JS.AssignmentExpression('=', memberAccess(child, '__super__'), protoAccess(parent)),
      new JS.ReturnStatement(child)
    ];
    return new JS.FunctionDeclaration(helperNames['extends'], [
      child,
      parent
    ], new JS.BlockStatement(map(block, stmt)));
  },
  construct: function () {
    var args, block, child, ctor, fn, result;
    child = new JS.Identifier('child');
    ctor = new JS.Identifier('ctor');
    fn = new JS.Identifier('fn');
    args = new JS.Identifier('args');
    result = new JS.Identifier('result');
    block = [
      new JS.VariableDeclaration('var', [new JS.VariableDeclarator(fn, new JS.FunctionExpression(null, [], new JS.BlockStatement([])))]),
      new JS.AssignmentExpression('=', memberAccess(fn, 'prototype'), memberAccess(ctor, 'prototype')),
      new JS.VariableDeclaration('var', [
        new JS.VariableDeclarator(child, new JS.NewExpression(fn, [])),
        new JS.VariableDeclarator(result, new JS.CallExpression(memberAccess(ctor, 'apply'), [
          child,
          args
        ]))
      ]),
      new JS.ReturnStatement(new JS.ConditionalExpression(new JS.BinaryExpression('===', result, new JS.CallExpression(new JS.Identifier('Object'), [result])), result, child))
    ];
    return new JS.FunctionDeclaration(helperNames.construct, [
      ctor,
      args
    ], new JS.BlockStatement(map(block, stmt)));
  },
  isOwn: function () {
    var args, functionBody, hop, params;
    hop = memberAccess(new JS.ObjectExpression([]), 'hasOwnProperty');
    params = args = [
      new JS.Identifier('o'),
      new JS.Identifier('p')
    ];
    functionBody = [new JS.CallExpression(memberAccess(hop, 'call'), args)];
    return new JS.FunctionDeclaration(helperNames.isOwn, params, makeReturn(new JS.BlockStatement(map(functionBody, stmt))));
  },
  'in': function () {
    var functionBody, i, length, list, loopBody, member, varDeclaration;
    member = new JS.Identifier('member');
    list = new JS.Identifier('list');
    i = new JS.Identifier('i');
    length = new JS.Identifier('length');
    varDeclaration = new JS.VariableDeclaration('var', [
      new JS.VariableDeclarator(i, new JS.Literal(0)),
      new JS.VariableDeclarator(length, memberAccess(list, 'length'))
    ]);
    loopBody = new JS.IfStatement(new JS.LogicalExpression('&&', new JS.BinaryExpression('in', i, list), new JS.BinaryExpression('===', new JS.MemberExpression(true, list, i), member)), new JS.ReturnStatement(new JS.Literal(true)));
    functionBody = [
      new JS.ForStatement(varDeclaration, new JS.BinaryExpression('<', i, length), new JS.UpdateExpression('++', true, i), loopBody),
      new JS.Literal(false)
    ];
    return new JS.FunctionDeclaration(helperNames['in'], [
      member,
      list
    ], makeReturn(new JS.BlockStatement(map(functionBody, stmt))));
  }
};
enabledHelpers = [];
for (h in helpers) {
  if (!isOwn$(helpers, h))
    continue;
  fn = helpers[h];
  helperNames[h] = genSym(h);
  helpers[h] = function (h, fn) {
    return function () {
      enabledHelpers.push(fn());
      return (helpers[h] = function () {
        return new JS.CallExpression(helperNames[h], arguments);
      }).apply(this, arguments);
    };
  }(h, fn);
}
inlineHelpers = {
  exp: function () {
    return new JS.CallExpression(memberAccess(new JS.Identifier('Math'), 'pow'), arguments);
  },
  undef: function () {
    return new JS.UnaryExpression('void', new JS.Literal(0));
  },
  slice: function () {
    return new JS.CallExpression(memberAccess(memberAccess(new JS.ArrayExpression([]), 'slice'), 'call'), arguments);
  }
};
for (h in inlineHelpers) {
  if (!isOwn$(inlineHelpers, h))
    continue;
  fn = inlineHelpers[h];
  helpers[h] = fn;
}
exports.Compiler = function () {
  Compiler.compile = function (this$) {
    return function () {
      var cache$2;
      return (cache$2 = new this$()).compile.apply(cache$2, [].slice.call(arguments));
    };
  }(Compiler);
  defaultRules = [
    [
      CS.Program,
      function (param$) {
        var block, body, cache$2, cache$3, decls, fnDeclHelpers, inScope, options, otherHelpers, pkg, program;
        {
          cache$2 = param$;
          body = cache$2.body;
          inScope = cache$2.inScope;
          options = cache$2.options;
        }
        if (!(null != body))
          return new JS.Program([]);
        block = stmt(body);
        block = block['instanceof'](JS.BlockStatement) ? block.body : [block];
        cache$3 = partition(enabledHelpers, function (helper) {
          return helper['instanceof'](JS.FunctionDeclaration);
        });
        fnDeclHelpers = cache$3[0];
        otherHelpers = cache$3[1];
        [].push.apply(block, fnDeclHelpers);
        [].unshift.apply(block, otherHelpers);
        decls = nub(concatMap(block, declarationsNeededRecursive));
        if (decls.length && !options.bare)
          block = [stmt(new JS.UnaryExpression('void', new JS.CallExpression(memberAccess(new JS.FunctionExpression(null, [], new JS.BlockStatement(block)), 'call'), [new JS.ThisExpression])))];
        pkg = __webpack_require__(106);
        program = new JS.Program(block);
        program.leadingComments = [{
            type: 'Line',
            value: ' Generated by CoffeeScript ' + pkg.version
          }];
        return program;
      }
    ],
    [
      CS.Block,
      function (param$) {
        var statements;
        statements = param$.statements;
        switch (statements.length) {
        case 0:
          return new JS.EmptyStatement;
        case 1:
          return new stmt(statements[0]);
        default:
          return new JS.BlockStatement(concatMap(statements, function (s) {
            if (s['instanceof'](JS.BlockStatement)) {
              return map(s.body, stmt);
            } else if (s['instanceof'](JS.SequenceExpression)) {
              return map(s.expressions, stmt);
            } else {
              return [stmt(s)];
            }
          }));
        }
      }
    ],
    [
      CS.SeqOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.SequenceExpression([
          left,
          right
        ]);
      }
    ],
    [
      CS.Conditional,
      function (param$) {
        var ancestry, cache$2, condition;
        var alternate, consequent;
        {
          cache$2 = param$;
          condition = cache$2.condition;
          consequent = cache$2.consequent;
          alternate = cache$2.alternate;
          ancestry = cache$2.ancestry;
        }
        if (null != alternate) {
          if (!(null != consequent))
            throw new Error('Conditional with non-null alternate requires non-null consequent');
          if (!alternate['instanceof'](JS.IfStatement))
            alternate = forceBlock(alternate);
        }
        if (null != alternate || (null != ancestry[0] ? ancestry[0]['instanceof'](CS.Conditional) : void 0))
          consequent = forceBlock(consequent);
        return new JS.IfStatement(expr(condition), stmt(consequent), alternate);
      }
    ],
    [
      CS.ForIn,
      function (param$) {
        var block, body, cache$2, compile, e, filter, i, increment, k, keyAssignee, length, numericRange, op, step, target, update, valAssignee, varDeclaration;
        {
          cache$2 = param$;
          valAssignee = cache$2.valAssignee;
          keyAssignee = cache$2.keyAssignee;
          target = cache$2.target;
          step = cache$2.step;
          filter = cache$2.filter;
          body = cache$2.body;
          compile = cache$2.compile;
        }
        i = genSym('i');
        length = genSym('length');
        block = forceBlock(body);
        if (!block.body.length)
          block.body.push(stmt(helpers.undef()));
        numericRange = extractStaticRange(this.target);
        increment = null != this.step && !(this.step['instanceof'](CS.Int) && this.step.data === 1) ? function (x) {
          return new JS.AssignmentExpression('+=', x, step);
        } : null != numericRange && numericRange[1] < numericRange[0] ? function (x) {
          return new JS.UpdateExpression('--', true, x);
        } : function (x) {
          return new JS.UpdateExpression('++', true, x);
        };
        if (null != numericRange) {
          varDeclaration = new JS.VariableDeclaration('var', [new JS.VariableDeclarator(i, compile(this.target.left))]);
          update = increment(i);
          if (null != this.filter)
            block.body.unshift(stmt(new JS.IfStatement(new JS.UnaryExpression('!', filter), new JS.ContinueStatement)));
          if (null != keyAssignee) {
            k = genSym('k');
            varDeclaration.declarations.unshift(new JS.VariableDeclarator(k, new JS.Literal(0)));
            update = new JS.SequenceExpression([
              increment(k),
              update
            ]);
            block.body.unshift(stmt(new JS.AssignmentExpression('=', keyAssignee, k)));
          }
          if (null != valAssignee)
            block.body.unshift(stmt(new JS.AssignmentExpression('=', valAssignee, i)));
          if (numericRange[1] > numericRange[0]) {
            op = this.target.isInclusive ? '<=' : '<';
          } else {
            op = this.target.isInclusive ? '>=' : '>';
          }
          return new JS.ForStatement(varDeclaration, new JS.BinaryExpression(op, i, compile(this.target.right)), update, block);
        }
        e = needsCaching(this.target) ? genSym('cache') : target;
        varDeclaration = new JS.VariableDeclaration('var', [
          new JS.VariableDeclarator(i, new JS.Literal(0)),
          new JS.VariableDeclarator(length, memberAccess(e, 'length'))
        ]);
        if (!(e === target))
          varDeclaration.declarations.unshift(new JS.VariableDeclarator(e, target));
        if (null != this.filter)
          block.body.unshift(stmt(new JS.IfStatement(new JS.UnaryExpression('!', filter), new JS.ContinueStatement)));
        if (null != keyAssignee)
          block.body.unshift(stmt(assignment(keyAssignee, i)));
        if (null != valAssignee)
          block.body.unshift(stmt(assignment(valAssignee, new JS.MemberExpression(true, e, i))));
        return new JS.ForStatement(varDeclaration, new JS.BinaryExpression('<', i, length), increment(i), block);
      }
    ],
    [
      CS.ForOf,
      function (param$) {
        var block, body, cache$2, e, filter, keyAssignee, right, target, valAssignee;
        {
          cache$2 = param$;
          keyAssignee = cache$2.keyAssignee;
          valAssignee = cache$2.valAssignee;
          target = cache$2.target;
          filter = cache$2.filter;
          body = cache$2.body;
        }
        block = forceBlock(body);
        if (!block.body.length)
          block.body.push(stmt(helpers.undef()));
        e = this.isOwn && needsCaching(this.target) ? genSym('cache') : expr(target);
        if (null != this.filter)
          block.body.unshift(stmt(new JS.IfStatement(new JS.UnaryExpression('!', filter), new JS.ContinueStatement)));
        if (null != valAssignee)
          block.body.unshift(stmt(assignment(valAssignee, new JS.MemberExpression(true, e, keyAssignee))));
        if (this.isOwn)
          block.body.unshift(stmt(new JS.IfStatement(new JS.UnaryExpression('!', helpers.isOwn(e, keyAssignee)), new JS.ContinueStatement)));
        right = e === target ? e : new JS.AssignmentExpression('=', e, target);
        return new JS.ForInStatement(keyAssignee, right, block);
      }
    ],
    [
      CS.While,
      function (param$) {
        var body, cache$2, condition;
        {
          cache$2 = param$;
          condition = cache$2.condition;
          body = cache$2.body;
        }
        return new JS.WhileStatement(expr(condition), forceBlock(body));
      }
    ],
    [
      CS.Switch,
      function (param$) {
        var alternate, c, cache$2;
        var cases, expression;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          cases = cache$2.cases;
          alternate = cache$2.alternate;
        }
        cases = concat(cases);
        if (!(null != expression)) {
          expression = new JS.Literal(false);
          for (var i$ = 0, length$ = cases.length; i$ < length$; ++i$) {
            c = cases[i$];
            c.test = new JS.UnaryExpression('!', c.test);
          }
        }
        if (null != alternate)
          cases.push(new JS.SwitchCase(null, [stmt(alternate)]));
        for (var i$1 = 0, length$1 = cases.slice(0, -1).length; i$1 < length$1; ++i$1) {
          c = cases.slice(0, -1)[i$1];
          if (!((null != c.consequent ? c.consequent.length : void 0) > 0))
            continue;
          c.consequent.push(new JS.BreakStatement);
        }
        return new JS.SwitchStatement(expression, cases);
      }
    ],
    [
      CS.SwitchCase,
      function (param$) {
        var block, cache$2, cases, conditions, consequent;
        {
          cache$2 = param$;
          conditions = cache$2.conditions;
          consequent = cache$2.consequent;
        }
        cases = map(conditions, function (c) {
          return new JS.SwitchCase(c, []);
        });
        block = stmt(consequent);
        block = null != block ? block['instanceof'](JS.BlockStatement) ? block.body : [block] : [];
        cases[cases.length - 1].consequent = block;
        return cases;
      }
    ],
    [
      CS.Try,
      function (param$) {
        var body, cache$2, catchAssignee, catchBlock, catchBody, e, finallyBlock, finallyBody, handlers;
        {
          cache$2 = param$;
          body = cache$2.body;
          catchAssignee = cache$2.catchAssignee;
          catchBody = cache$2.catchBody;
          finallyBody = cache$2.finallyBody;
        }
        finallyBlock = null != this.finallyBody ? forceBlock(finallyBody) : null;
        if (null != this.catchBody || !(null != this.finallyBody)) {
          e = genSym('e');
          catchBlock = forceBlock(catchBody);
          if (null != catchAssignee)
            catchBlock.body.unshift(stmt(assignment(catchAssignee, e)));
          handlers = [new JS.CatchClause(e, catchBlock)];
        } else {
          handlers = [];
        }
        return new JS.TryStatement(forceBlock(body), handlers, finallyBlock);
      }
    ],
    [
      CS.Throw,
      function (param$) {
        var expression;
        expression = param$.expression;
        return new JS.ThrowStatement(expression);
      }
    ],
    [
      CS.Range,
      function (param$) {
        var accum, ancestry, body, cache$2, condition, conditionAlternate, conditionConsequent, conditionTest, i, left, left_, range, rawLeft, rawRight, right, right_, update, vars;
        {
          cache$2 = param$;
          left_ = cache$2.left;
          right_ = cache$2.right;
          ancestry = cache$2.ancestry;
        }
        if ((this.left['instanceof'](CS.Int) || this.left['instanceof'](CS.UnaryNegateOp) && this.left.expression['instanceof'](CS.Int)) && (this.right['instanceof'](CS.Int) || this.right['instanceof'](CS.UnaryNegateOp) && this.right.expression['instanceof'](CS.Int))) {
          rawLeft = this.left['instanceof'](CS.UnaryNegateOp) ? -this.left.expression.data : this.left.data;
          rawRight = this.right['instanceof'](CS.UnaryNegateOp) ? -this.right.expression.data : this.right.data;
          if (Math.abs(rawLeft - rawRight) <= 20) {
            range = this.isInclusive ? function () {
              var accum$;
              accum$ = [];
              for (var i$ = rawLeft; rawLeft <= rawRight ? i$ <= rawRight : i$ >= rawRight; rawLeft <= rawRight ? ++i$ : --i$)
                accum$.push(i$);
              return accum$;
            }.apply(this, arguments) : function () {
              var accum$;
              accum$ = [];
              for (var i$ = rawLeft; rawLeft <= rawRight ? i$ < rawRight : i$ > rawRight; rawLeft <= rawRight ? ++i$ : --i$)
                accum$.push(i$);
              return accum$;
            }.apply(this, arguments);
            return new JS.ArrayExpression(map(range, function (n) {
              if (n < 0) {
                return new JS.UnaryExpression('-', new JS.Literal(-n));
              } else {
                return new JS.Literal(n);
              }
            }));
          }
        }
        accum = genSym('accum');
        body = [stmt(new JS.AssignmentExpression('=', accum, new JS.ArrayExpression([])))];
        if (needsCaching(left_)) {
          left = genSym('from');
          body.push(stmt(new JS.AssignmentExpression('=', left, left_)));
        } else {
          left = left_;
        }
        if (needsCaching(right_)) {
          right = genSym('to');
          body.push(stmt(new JS.AssignmentExpression('=', right, right_)));
        } else {
          right = right_;
        }
        i = genSym('i');
        vars = new JS.VariableDeclaration('var', [new JS.VariableDeclarator(i, left)]);
        conditionTest = new JS.BinaryExpression('<=', left, right);
        conditionConsequent = new JS.BinaryExpression(this.isInclusive ? '<=' : '<', i, right);
        conditionAlternate = new JS.BinaryExpression(this.isInclusive ? '>=' : '>', i, right);
        condition = new JS.ConditionalExpression(conditionTest, conditionConsequent, conditionAlternate);
        update = new JS.ConditionalExpression(conditionTest, new JS.UpdateExpression('++', true, i), new JS.UpdateExpression('--', true, i));
        body.push(new JS.ForStatement(vars, condition, update, stmt(new JS.CallExpression(memberAccess(accum, 'push'), [i]))));
        body.push(new JS.ReturnStatement(accum));
        if (any(ancestry, function (ancestor) {
            return ancestor['instanceof'](CS.Functions);
          })) {
          return new JS.CallExpression(memberAccess(new JS.FunctionExpression(null, [], new JS.BlockStatement(body)), 'apply'), [
            new JS.ThisExpression,
            new JS.Identifier('arguments')
          ]);
        } else {
          return new JS.CallExpression(memberAccess(new JS.FunctionExpression(null, [], new JS.BlockStatement(body)), 'call'), [new JS.ThisExpression]);
        }
      }
    ],
    [
      CS.ArrayInitialiser,
      function () {
        var groupMembers;
        groupMembers = function (members) {
          var cache$2, cache$3, sliced, ys, zs;
          if (members.length === 0) {
            return [];
          } else {
            cache$2 = span(members, function (x) {
              return !x.spread;
            });
            ys = cache$2[0];
            zs = cache$2[1];
            if (ys.length === 0) {
              sliced = helpers.slice(zs[0].expression);
              cache$3 = [
                sliced,
                zs.slice(1)
              ];
              ys = cache$3[0];
              zs = cache$3[1];
              cache$3;
            } else {
              ys = new JS.ArrayExpression(map(ys, expr));
            }
            return [ys].concat(groupMembers(zs));
          }
        };
        return function (param$) {
          var cache$2, compile, grouped, members;
          {
            cache$2 = param$;
            members = cache$2.members;
            compile = cache$2.compile;
          }
          if (any(members, function (m) {
              return m.spread;
            })) {
            grouped = map(groupMembers(members), expr);
            if (grouped.length <= 1) {
              return grouped[0];
            } else {
              return new JS.CallExpression(memberAccess(grouped[0], 'concat'), grouped.slice(1));
            }
          } else {
            return new JS.ArrayExpression(map(members, expr));
          }
        };
      }()
    ],
    [
      CS.Spread,
      function (param$) {
        var expression;
        expression = param$.expression;
        return {
          spread: true,
          expression: expr(expression)
        };
      }
    ],
    [
      CS.ObjectInitialiser,
      function (param$) {
        var members;
        members = param$.members;
        return new JS.ObjectExpression(members);
      }
    ],
    [
      CS.ObjectInitialiserMember,
      function (param$) {
        var cache$2, expression, keyName;
        var key;
        {
          cache$2 = param$;
          key = cache$2.key;
          expression = cache$2.expression;
        }
        keyName = this.key.data;
        key = isIdentifierName(keyName) ? new JS.Identifier(keyName) : new JS.Literal(keyName);
        return new JS.Property(key, expr(expression));
      }
    ],
    [
      CS.DefaultParam,
      function (param$) {
        var cache$2, d, param;
        {
          cache$2 = param$;
          param = cache$2.param;
          d = cache$2['default'];
        }
        return {
          param: param,
          'default': d
        };
      }
    ],
    [
      CS.Function,
      CS.BoundFunction,
      function () {
        var handleParam;
        handleParam = function (param, original, block, inScope) {
          var decls, p;
          switch (false) {
          case !original['instanceof'](CS.Rest):
            return param;
          case !original['instanceof'](CS.Identifier):
            return param;
          case !original['instanceof'](CS.MemberAccessOps, CS.ObjectInitialiser, CS.ArrayInitialiser):
            p = genSym('param');
            decls = map(intersect(inScope, beingDeclared(original)), function (i) {
              return new JS.Identifier(i);
            });
            block.body.unshift(stmt(assignment(param, p)));
            if (decls.length)
              block.body.unshift(makeVarDeclaration(decls));
            return p;
          case !original['instanceof'](CS.DefaultParam):
            p = handleParam.call(this, param.param, original.param, block, inScope);
            block.body.unshift(new JS.IfStatement(new JS.BinaryExpression('==', new JS.Literal(null), p), stmt(assignment(p, param['default']))));
            return p;
          default:
            throw new Error('Unsupported parameter type: ' + original.className);
          }
        };
        return function (param$) {
          var alternate, ancestry, block, cache$2, consequent, i, index, inScope, last, newThis, numArgs, numParams, p, parameters_, paramName, performedRewrite, pIndex, reassignments, rewriteThis, test;
          var body, parameters;
          {
            cache$2 = param$;
            parameters = cache$2.parameters;
            body = cache$2.body;
            ancestry = cache$2.ancestry;
            inScope = cache$2.inScope;
          }
          if (!(null != ancestry[0] ? ancestry[0]['instanceof'](CS.Constructor) : void 0))
            body = makeReturn(body);
          block = forceBlock(body);
          last = block.body.slice(-1)[0];
          if ((null != last ? last['instanceof'](JS.ReturnStatement) : void 0) && !(null != last.argument))
            block.body = block.body.slice(0, -1);
          parameters_ = parameters.length === 0 ? [] : (pIndex = parameters.length, function (accum$) {
            while (pIndex--) {
              accum$.push(handleParam.call(this, parameters[pIndex], this.parameters[pIndex], block, inScope));
            }
            return accum$;
          }.call(this, []));
          parameters = parameters_.reverse();
          if (parameters.length > 0) {
            if (parameters.slice(-1)[0].rest) {
              paramName = parameters.pop().expression;
              numParams = parameters.length;
              test = new JS.BinaryExpression('>', memberAccess(new JS.Identifier('arguments'), 'length'), new JS.Literal(numParams));
              consequent = helpers.slice(new JS.Identifier('arguments'), new JS.Literal(numParams));
              alternate = new JS.ArrayExpression([]);
              if (paramName['instanceof'](JS.Identifier) && in$(paramName.name, inScope))
                block.body.unshift(makeVarDeclaration([paramName]));
              block.body.unshift(stmt(new JS.AssignmentExpression('=', paramName, new JS.ConditionalExpression(test, consequent, alternate))));
            } else if (any(parameters, function (p) {
                return p.rest;
              })) {
              paramName = index = null;
              for (var i$ = 0, length$ = parameters.length; i$ < length$; ++i$) {
                p = parameters[i$];
                i = i$;
                if (!p.rest)
                  continue;
                paramName = p.expression;
                index = i;
                break;
              }
              parameters.splice(index, 1);
              numParams = parameters.length;
              numArgs = genSym('numArgs');
              reassignments = new JS.IfStatement(new JS.BinaryExpression('>', new JS.AssignmentExpression('=', numArgs, memberAccess(new JS.Identifier('arguments'), 'length')), new JS.Literal(numParams)), new JS.BlockStatement([stmt(new JS.AssignmentExpression('=', paramName, helpers.slice(new JS.Identifier('arguments'), new JS.Literal(index), new JS.BinaryExpression('-', numArgs, new JS.Literal(numParams - index)))))]), new JS.BlockStatement([stmt(new JS.AssignmentExpression('=', paramName, new JS.ArrayExpression([])))]));
              for (var i$1 = 0, length$1 = parameters.slice(index).length; i$1 < length$1; ++i$1) {
                p = parameters.slice(index)[i$1];
                i = i$1;
                reassignments.consequent.body.push(stmt(new JS.AssignmentExpression('=', p, new JS.MemberExpression(true, new JS.Identifier('arguments'), new JS.BinaryExpression('-', numArgs, new JS.Literal(numParams - index - i))))));
              }
              if (paramName['instanceof'](JS.Identifier) && in$(paramName.name, inScope))
                block.body.unshift(makeVarDeclaration([paramName]));
              block.body.unshift(reassignments);
            }
            if (any(parameters, function (p) {
                return p.rest;
              }))
              throw new Error('Parameter lists may not have more than one rest operator');
          }
          performedRewrite = false;
          if (this['instanceof'](CS.BoundFunction)) {
            newThis = genSym('this');
            rewriteThis = generateMutatingWalker(function () {
              if (this['instanceof'](JS.ThisExpression)) {
                performedRewrite = true;
                return newThis;
              } else if (this['instanceof'](JS.FunctionExpression, JS.FunctionDeclaration)) {
                return this;
              } else {
                return rewriteThis(this);
              }
            });
            rewriteThis(block);
          }
          fn = new JS.FunctionExpression(null, parameters, block);
          if (performedRewrite) {
            return new JS.CallExpression(new JS.FunctionExpression(null, [newThis], new JS.BlockStatement([new JS.ReturnStatement(fn)])), [new JS.ThisExpression]);
          } else {
            return fn;
          }
        };
      }()
    ],
    [
      CS.Rest,
      function (param$) {
        var expression;
        expression = param$.expression;
        return {
          rest: true,
          expression: expression,
          isExpression: true,
          isStatement: true
        };
      }
    ],
    [
      CS.Class,
      function (param$) {
        var _, args, block, body, c, cache$2, compile, ctorBody, ctorIndex, ctorRef, i, iife, instance, member, memberName, nameAssignee, params, parent, parentRef, protoAssignOp, protoMember, ps, rewriteThis;
        var ctor, name;
        {
          cache$2 = param$;
          nameAssignee = cache$2.nameAssignee;
          parent = cache$2.parent;
          name = cache$2.name;
          ctor = cache$2.ctor;
          body = cache$2.body;
          compile = cache$2.compile;
        }
        args = [];
        params = [];
        parentRef = genSym('super');
        block = forceBlock(body);
        if (name['instanceof'](JS.Identifier) && in$(name.name, jsReserved))
          name = genSym(name.name);
        if (null != ctor) {
          for (var i$ = 0, length$ = block.body.length; i$ < length$; ++i$) {
            c = block.body[i$];
            i = i$;
            if (!c['instanceof'](JS.FunctionDeclaration))
              continue;
            ctorIndex = i;
            break;
          }
          block.body.splice(ctorIndex, 1, ctor);
        } else {
          ctorBody = new JS.BlockStatement([]);
          if (null != parent)
            ctorBody.body.push(stmt(new JS.CallExpression(memberAccess(parentRef, 'apply'), [
              new JS.ThisExpression,
              new JS.Identifier('arguments')
            ])));
          ctor = new JS.FunctionDeclaration(name, [], ctorBody);
          ctorIndex = 0;
          block.body.unshift(ctor);
        }
        ctor.id = name;
        if (null != this.ctor && !this.ctor.expression['instanceof'](CS.Functions)) {
          ctorRef = genSym('externalCtor');
          ctor.body.body.push(makeReturn(new JS.CallExpression(memberAccess(ctorRef, 'apply'), [
            new JS.ThisExpression,
            new JS.Identifier('arguments')
          ])));
          block.body.splice(ctorIndex, 0, stmt(new JS.AssignmentExpression('=', ctorRef, expr(compile(this.ctor.expression)))));
        }
        if (this.boundMembers.length > 0) {
          instance = genSym('instance');
          for (var i$1 = 0, length$1 = this.boundMembers.length; i$1 < length$1; ++i$1) {
            protoAssignOp = this.boundMembers[i$1];
            memberName = protoAssignOp.assignee.data.toString();
            ps = function (accum$) {
              for (var i$2 = 0, length$2 = protoAssignOp.expression.parameters.length; i$2 < length$2; ++i$2) {
                _ = protoAssignOp.expression.parameters[i$2];
                accum$.push(genSym());
              }
              return accum$;
            }.call(this, []);
            member = memberAccess(new JS.ThisExpression, memberName);
            protoMember = memberAccess(memberAccess(name, 'prototype'), memberName);
            fn = new JS.FunctionExpression(null, ps, new JS.BlockStatement([makeReturn(new JS.CallExpression(memberAccess(protoMember, 'apply'), [
                instance,
                new JS.Identifier('arguments')
              ]))]));
            ctor.body.body.unshift(stmt(new JS.AssignmentExpression('=', member, fn)));
          }
          ctor.body.body.unshift(stmt(new JS.AssignmentExpression('=', instance, new JS.ThisExpression)));
        }
        if (null != parent) {
          params.push(parentRef);
          args.push(parent);
          block.body.unshift(stmt(helpers['extends'](name, parentRef)));
        }
        block.body.push(new JS.ReturnStatement(new JS.ThisExpression));
        rewriteThis = generateMutatingWalker(function () {
          if (this['instanceof'](JS.ThisExpression)) {
            return name;
          } else if (this['instanceof'](JS.FunctionExpression, JS.FunctionDeclaration)) {
            return this;
          } else {
            return rewriteThis(this);
          }
        });
        rewriteThis(block);
        iife = new JS.CallExpression(new JS.FunctionExpression(null, params, block).g(), args);
        if (null != nameAssignee) {
          return assignment(nameAssignee, iife);
        } else {
          return iife;
        }
      }
    ],
    [
      CS.Constructor,
      function (param$) {
        var expression, tmpName;
        expression = param$.expression;
        tmpName = genSym('class');
        if (this.expression['instanceof'](CS.Functions)) {
          return new JS.FunctionDeclaration(tmpName, expression.params, forceBlock(expression.body));
        } else {
          return new JS.FunctionDeclaration(tmpName, [], new JS.BlockStatement([]));
        }
      }
    ],
    [
      CS.ClassProtoAssignOp,
      function (param$) {
        var assignee, cache$2, compile, expression, protoMember;
        {
          cache$2 = param$;
          assignee = cache$2.assignee;
          expression = cache$2.expression;
          compile = cache$2.compile;
        }
        if (this.expression['instanceof'](CS.BoundFunction)) {
          return compile(new CS.ClassProtoAssignOp(this.assignee, new CS.Function(this.expression.parameters, this.expression.body)));
        } else {
          protoMember = memberAccess(memberAccess(new JS.ThisExpression, 'prototype'), this.assignee.data);
          return new JS.AssignmentExpression('=', protoMember, expression);
        }
      }
    ],
    [
      CS.AssignOp,
      function (param$) {
        var ancestry, assignee, cache$2, expression;
        {
          cache$2 = param$;
          assignee = cache$2.assignee;
          expression = cache$2.expression;
          ancestry = cache$2.ancestry;
        }
        return assignment(assignee, expression, usedAsExpression(this, ancestry));
      }
    ],
    [
      CS.CompoundAssignOp,
      function (param$) {
        var assignee, cache$2, condition, expression, inScope, op;
        {
          cache$2 = param$;
          assignee = cache$2.assignee;
          expression = cache$2.expression;
          inScope = cache$2.inScope;
        }
        op = function () {
          switch (this.op) {
          case CS.LogicalAndOp.prototype.className:
            return '&&';
          case CS.LogicalOrOp.prototype.className:
            return '||';
          case CS.ExistsOp.prototype.className:
            return '?';
          case CS.BitOrOp.prototype.className:
            return '|';
          case CS.BitXorOp.prototype.className:
            return '^';
          case CS.BitAndOp.prototype.className:
            return '&';
          case CS.LeftShiftOp.prototype.className:
            return '<<';
          case CS.SignedRightShiftOp.prototype.className:
            return '>>';
          case CS.UnsignedRightShiftOp.prototype.className:
            return '>>>';
          case CS.PlusOp.prototype.className:
            return '+';
          case CS.SubtractOp.prototype.className:
            return '-';
          case CS.MultiplyOp.prototype.className:
            return '*';
          case CS.DivideOp.prototype.className:
            return '/';
          case CS.RemOp.prototype.className:
            return '%';
          case CS.ExpOp.prototype.className:
            return '**';
          default:
            throw new Error('Unrecognised compound assignment operator');
          }
        }.call(this);
        if ((op === '&&' || op === '||' || op === '?') && assignee['instanceof'](JS.Identifier) && !in$(assignee.name, inScope))
          throw new Error('the variable "' + assignee.name + '" can\'t be assigned with ?= because it has not been defined.');
        switch (op) {
        case '&&':
        case '||':
          return new JS.LogicalExpression(op, assignee, new JS.AssignmentExpression('=', assignee, expr(expression)));
        case '?':
          condition = new JS.BinaryExpression('!=', new JS.Literal(null), assignee);
          return new JS.ConditionalExpression(condition, assignee, new JS.AssignmentExpression('=', assignee, expr(expression)));
        case '**':
          return new JS.AssignmentExpression('=', assignee, helpers.exp(assignee, expr(expression)));
        default:
          return new JS.AssignmentExpression('' + op + '=', assignee, expr(expression));
        }
      }
    ],
    [
      CS.ChainedComparisonOp,
      function (param$) {
        var cache$2, compile, expression, left, lhs;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          compile = cache$2.compile;
        }
        if (!this.expression.left['instanceof'](CS.ComparisonOps))
          return expression;
        left = expression.left.right;
        lhs = compile(new CS.ChainedComparisonOp(this.expression.left));
        if (needsCaching(this.expression.left.right)) {
          left = genSym('cache');
          if (this.expression.left.left['instanceof'](CS.ComparisonOps)) {
            lhs.right.right = new JS.AssignmentExpression('=', left, lhs.right.right);
          } else {
            lhs.right = new JS.AssignmentExpression('=', left, lhs.right);
          }
        }
        return new JS.LogicalExpression('&&', lhs, new JS.BinaryExpression(expression.operator, left, expression.right));
      }
    ],
    [
      CS.FunctionApplication,
      function (param$) {
        var args, cache$2, compile, context, lhs;
        var fn;
        {
          cache$2 = param$;
          fn = cache$2['function'];
          args = cache$2['arguments'];
          compile = cache$2.compile;
        }
        if (any(args, function (m) {
            return m.spread;
          })) {
          lhs = this['function'];
          context = new CS.Null;
          if (needsCaching(this['function'])) {
            context = new CS.GenSym('cache');
            lhs = this['function']['instanceof'](CS.StaticMemberAccessOps) ? new this['function'].constructor(new CS.AssignOp(context, lhs.expression), this['function'].memberName) : this['function']['instanceof'](CS.DynamicMemberAccessOps) ? new this['function'].constructor(new CS.AssignOp(context, lhs.expression), this['function'].indexingExpr) : new CS.AssignOp(context, lhs);
          } else if (lhs['instanceof'](CS.MemberAccessOps)) {
            context = lhs.expression;
          }
          if (this['function']['instanceof'](CS.ProtoMemberAccessOp, CS.DynamicProtoMemberAccessOp)) {
            context = new CS.MemberAccessOp(context, 'prototype');
          } else if (this['function']['instanceof'](CS.SoakedProtoMemberAccessOp, CS.SoakedDynamicProtoMemberAccessOp)) {
            context = new CS.SoakedMemberAccessOp(context, 'prototype');
          }
          return compile(new CS.FunctionApplication(new CS.MemberAccessOp(lhs, 'apply'), [
            context,
            new CS.ArrayInitialiser(this['arguments'])
          ]));
        } else if (hasSoak(this)) {
          return compile(generateSoak(this));
        } else {
          return new JS.CallExpression(expr(fn), map(args, expr));
        }
      }
    ],
    [
      CS.SoakedFunctionApplication,
      function (param$) {
        var compile;
        compile = param$.compile;
        return compile(generateSoak(this));
      }
    ],
    [
      CS.NewOp,
      function (param$) {
        var args, cache$2, compile, ctor;
        {
          cache$2 = param$;
          ctor = cache$2.ctor;
          args = cache$2['arguments'];
          compile = cache$2.compile;
        }
        if (any(args, function (m) {
            return m.spread;
          })) {
          return helpers.construct(ctor, compile(new CS.ArrayInitialiser(this['arguments'])));
        } else {
          return new JS.NewExpression(ctor, map(args, expr));
        }
      }
    ],
    [
      CS.HeregExp,
      function (param$) {
        var args, expression, flag, flags;
        expression = param$.expression;
        args = [expression];
        if (flags = function (accum$) {
            for (var cache$2 = [
                  'g',
                  'i',
                  'm',
                  'y'
                ], i$ = 0, length$ = cache$2.length; i$ < length$; ++i$) {
              flag = cache$2[i$];
              if (!this.flags[flag])
                continue;
              accum$.push(flag);
            }
            return accum$;
          }.call(this, []).join(''))
          args.push(new JS.Literal(flags));
        return new JS.NewExpression(new JS.Identifier('RegExp'), args);
      }
    ],
    [
      CS.RegExp,
      function () {
        var flag, flags, re;
        flags = function (accum$) {
          for (var cache$2 = [
                'g',
                'i',
                'm',
                'y'
              ], i$ = 0, length$ = cache$2.length; i$ < length$; ++i$) {
            flag = cache$2[i$];
            if (!this.flags[flag])
              continue;
            accum$.push(flag);
          }
          return accum$;
        }.call(this, []).join('');
        re = new RegExp(this.data, flags);
        return new JS.Literal(re);
      }
    ],
    [
      CS.ConcatOp,
      function (param$) {
        var ancestry, cache$2, left, leftmost, plusOp, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
          ancestry = cache$2.ancestry;
        }
        plusOp = new JS.BinaryExpression('+', expr(left), expr(right));
        if (!ancestry[0]['instanceof'](CS.ConcatOp)) {
          leftmost = plusOp;
          while (null != (null != leftmost.left ? leftmost.left.left : void 0)) {
            leftmost = leftmost.left;
          }
          if (!(leftmost.left['instanceof'](JS.Literal) && 'string' === typeof leftmost.left.value))
            leftmost.left = new JS.BinaryExpression('+', new JS.Literal(''), leftmost.left);
        }
        return plusOp;
      }
    ],
    [
      CS.MemberAccessOp,
      CS.SoakedMemberAccessOp,
      function (param$) {
        var access, cache$2, compile, expression, offset;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          compile = cache$2.compile;
        }
        if (hasSoak(this)) {
          return expr(compile(generateSoak(this)));
        } else {
          access = memberAccess(expression, this.memberName);
          if (this.raw) {
            access.property.raw = this.memberName;
            access.property.line = this.line;
            offset = this.raw.length - this.memberName.length;
            access.property.column = this.column + offset - 1;
            access.property.offset = this.offset + offset - 1;
            this.column += this.expression.raw.length;
            this.offset += this.expression.raw.length;
          }
          return access;
        }
      }
    ],
    [
      CS.ProtoMemberAccessOp,
      CS.SoakedProtoMemberAccessOp,
      function (param$) {
        var cache$2, compile, expression;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          compile = cache$2.compile;
        }
        if (hasSoak(this)) {
          return expr(compile(generateSoak(this)));
        } else {
          return memberAccess(memberAccess(expression, 'prototype'), this.memberName);
        }
      }
    ],
    [
      CS.DynamicMemberAccessOp,
      CS.SoakedDynamicMemberAccessOp,
      function (param$) {
        var cache$2, compile, expression, indexingExpr;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          indexingExpr = cache$2.indexingExpr;
          compile = cache$2.compile;
        }
        if (hasSoak(this)) {
          return expr(compile(generateSoak(this)));
        } else {
          return dynamicMemberAccess(expression, indexingExpr);
        }
      }
    ],
    [
      CS.DynamicProtoMemberAccessOp,
      CS.SoakedDynamicProtoMemberAccessOp,
      function (param$) {
        var cache$2, compile, expression, indexingExpr;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          indexingExpr = cache$2.indexingExpr;
          compile = cache$2.compile;
        }
        if (hasSoak(this)) {
          return expr(compile(generateSoak(this)));
        } else {
          return dynamicMemberAccess(memberAccess(expression, 'prototype'), indexingExpr);
        }
      }
    ],
    [
      CS.Slice,
      function (param$) {
        var args, cache$2, expression, left, right;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          left = cache$2.left;
          right = cache$2.right;
        }
        args = null != left ? [left] : null != right ? [new JS.Literal(0)] : [];
        if (null != right)
          args.push(this.isInclusive ? right['instanceof'](JS.Literal) && typeof right.data === 'number' ? new JS.Literal(right.data + 1) : new JS.LogicalExpression('||', new JS.BinaryExpression('+', new JS.UnaryExpression('+', right), new JS.Literal(1)), new JS.Literal(9e9)) : right);
        return new JS.CallExpression(memberAccess(expression, 'slice'), args);
      }
    ],
    [
      CS.ExistsOp,
      function (param$) {
        var ancestry, cache$2, condition, e, inScope, node;
        var left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
          ancestry = cache$2.ancestry;
          inScope = cache$2.inScope;
        }
        left = expr(left);
        right = expr(right);
        e = needsCaching(this.left) ? genSym('cache') : left;
        condition = new JS.BinaryExpression('!=', new JS.Literal(null), e);
        if (e['instanceof'](JS.Identifier) && !in$(e.name, inScope))
          condition = new JS.LogicalExpression('&&', new JS.BinaryExpression('!==', new JS.Literal('undefined'), new JS.UnaryExpression('typeof', e)), condition);
        node = new JS.ConditionalExpression(condition, e, right);
        if (e === left) {
          return node;
        } else {
          return new JS.SequenceExpression([
            new JS.AssignmentExpression('=', e, left),
            node
          ]);
        }
      }
    ],
    [
      CS.UnaryExistsOp,
      function (param$) {
        var cache$2, expression, inScope, nullTest, typeofTest;
        {
          cache$2 = param$;
          expression = cache$2.expression;
          inScope = cache$2.inScope;
        }
        nullTest = new JS.BinaryExpression('!=', new JS.Literal(null), expression);
        if (expression['instanceof'](JS.Identifier) && !in$(expression.name, inScope)) {
          typeofTest = new JS.BinaryExpression('!==', new JS.Literal('undefined'), new JS.UnaryExpression('typeof', expression));
          return new JS.LogicalExpression('&&', typeofTest, nullTest);
        } else {
          return nullTest;
        }
      }
    ],
    [
      CS.DoOp,
      function () {
        var deriveArgsFromParams;
        deriveArgsFromParams = function (params) {
          var args, index, param;
          return args = function (accum$) {
            for (var i$ = 0, length$ = params.length; i$ < length$; ++i$) {
              param = params[i$];
              index = i$;
              accum$.push(function () {
                switch (false) {
                case !param['instanceof'](CS.DefaultParam):
                  params[index] = param.param;
                  return param['default'];
                case !param['instanceof'](CS.Identifier, CS.MemberAccessOp):
                  return param;
                default:
                  return helpers.undef();
                }
              }.call(this));
            }
            return accum$;
          }.call(this, []);
        };
        return function (param$) {
          var args, cache$2, compile, expression;
          {
            cache$2 = param$;
            expression = cache$2.expression;
            compile = cache$2.compile;
          }
          args = [];
          if (this.expression['instanceof'](CS.AssignOp) && this.expression.expression['instanceof'](CS.Functions)) {
            args = deriveArgsFromParams(this.expression.expression.parameters);
          } else if (this.expression['instanceof'](CS.Functions)) {
            args = deriveArgsFromParams(this.expression.parameters);
          }
          return compile(new CS.FunctionApplication(this.expression, args));
        };
      }()
    ],
    [
      CS.Return,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.ReturnStatement(expr(e));
      }
    ],
    [
      CS.Break,
      function () {
        return new JS.BreakStatement;
      }
    ],
    [
      CS.Continue,
      function () {
        return new JS.ContinueStatement;
      }
    ],
    [
      CS.Debugger,
      function () {
        return new JS.DebuggerStatement;
      }
    ],
    [
      CS.ExpOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return helpers.exp(expr(left), expr(right));
      }
    ],
    [
      CS.DivideOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('/', expr(left), expr(right));
      }
    ],
    [
      CS.MultiplyOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('*', expr(left), expr(right));
      }
    ],
    [
      CS.RemOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('%', expr(left), expr(right));
      }
    ],
    [
      CS.PlusOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('+', expr(left), expr(right));
      }
    ],
    [
      CS.SubtractOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('-', expr(left), expr(right));
      }
    ],
    [
      CS.OfOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('in', expr(left), expr(right));
      }
    ],
    [
      CS.InOp,
      function (param$) {
        var cache$2, comparisons, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        if (right['instanceof'](JS.ArrayExpression) && right.elements.length < 5) {
          switch (right.elements.length) {
          case 0:
            if (needsCaching(this.left)) {
              return new JS.SequenceExpression([
                left,
                new JS.Literal(false)
              ]);
            } else {
              return new JS.Literal(false);
            }
          case 1:
            return new JS.BinaryExpression('===', left, right.elements[0]);
          default:
            if (needsCaching(this.left)) {
              return helpers['in'](expr(left), expr(right));
            } else {
              comparisons = map(right.elements, function (e) {
                return new JS.BinaryExpression('===', left, e);
              });
              return foldl1(comparisons, function (l, r) {
                return new JS.LogicalExpression('||', l, r);
              });
            }
          }
        } else {
          return helpers['in'](expr(left), expr(right));
        }
      }
    ],
    [
      CS.ExtendsOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return helpers['extends'](expr(left), expr(right));
      }
    ],
    [
      CS.InstanceofOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('instanceof', expr(left), expr(right));
      }
    ],
    [
      CS.LogicalAndOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.LogicalExpression('&&', expr(left), expr(right));
      }
    ],
    [
      CS.LogicalOrOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.LogicalExpression('||', expr(left), expr(right));
      }
    ],
    [
      CS.EQOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('===', expr(left), expr(right));
      }
    ],
    [
      CS.NEQOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('!==', expr(left), expr(right));
      }
    ],
    [
      CS.GTEOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('>=', expr(left), expr(right));
      }
    ],
    [
      CS.GTOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('>', expr(left), expr(right));
      }
    ],
    [
      CS.LTEOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('<=', expr(left), expr(right));
      }
    ],
    [
      CS.LTOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('<', expr(left), expr(right));
      }
    ],
    [
      CS.BitAndOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('&', expr(left), expr(right));
      }
    ],
    [
      CS.BitOrOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('|', expr(left), expr(right));
      }
    ],
    [
      CS.BitXorOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('^', expr(left), expr(right));
      }
    ],
    [
      CS.LeftShiftOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('<<', expr(left), expr(right));
      }
    ],
    [
      CS.SignedRightShiftOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('>>', expr(left), expr(right));
      }
    ],
    [
      CS.UnsignedRightShiftOp,
      function (param$) {
        var cache$2, left, right;
        {
          cache$2 = param$;
          left = cache$2.left;
          right = cache$2.right;
        }
        return new JS.BinaryExpression('>>>', expr(left), expr(right));
      }
    ],
    [
      CS.PreDecrementOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UpdateExpression('--', true, expr(e));
      }
    ],
    [
      CS.PreIncrementOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UpdateExpression('++', true, expr(e));
      }
    ],
    [
      CS.PostDecrementOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UpdateExpression('--', false, expr(e));
      }
    ],
    [
      CS.PostIncrementOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UpdateExpression('++', false, expr(e));
      }
    ],
    [
      CS.UnaryPlusOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('+', expr(e));
      }
    ],
    [
      CS.UnaryNegateOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('-', expr(e));
      }
    ],
    [
      CS.LogicalNotOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('!', expr(e));
      }
    ],
    [
      CS.BitNotOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('~', expr(e));
      }
    ],
    [
      CS.TypeofOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('typeof', expr(e));
      }
    ],
    [
      CS.DeleteOp,
      function (param$) {
        var e;
        e = param$.expression;
        return new JS.UnaryExpression('delete', expr(e));
      }
    ],
    [
      CS.Identifier,
      function () {
        return new JS.Identifier(this.data);
      }
    ],
    [
      CS.GenSym,
      function () {
        var memos, symbols;
        symbols = [];
        memos = [];
        return function () {
          var memo;
          if (in$(this, symbols)) {
            return memos[symbols.indexOf(this)];
          } else {
            symbols.push(this);
            memos.push(memo = genSym(this.data));
            return memo;
          }
        };
      }()
    ],
    [
      CS.Bool,
      CS.Int,
      CS.Float,
      CS.String,
      function () {
        return new JS.Literal(this.data);
      }
    ],
    [
      CS.Null,
      function () {
        return new JS.Literal(null);
      }
    ],
    [
      CS.Undefined,
      function () {
        return helpers.undef();
      }
    ],
    [
      CS.This,
      function () {
        return new JS.ThisExpression;
      }
    ],
    [
      CS.JavaScript,
      function () {
        return new JS.CallExpression(new JS.Identifier('eval'), [new JS.Literal(this.data)]);
      }
    ]
  ];
  function Compiler() {
    var cache$2, ctor, ctors, handler, size$;
    this.rules = {};
    for (var i$ = 0, length$ = defaultRules.length; i$ < length$; ++i$) {
      {
        cache$2 = defaultRules[i$];
        size$ = cache$2.length;
        ctors = size$ > 1 ? [].slice.call(cache$2, 0, size$ - 1) : [];
        handler = cache$2[size$ - 1];
      }
      for (var i$1 = 0, length$1 = ctors.length; i$1 < length$1; ++i$1) {
        ctor = ctors[i$1];
        this.addRule(ctor, handler);
      }
    }
  }
  Compiler.prototype.addRule = function (ctor, handler) {
    this.rules[ctor.prototype.className] = handler;
    return this;
  };
  Compiler.prototype.compile = function () {
    var defaultRule, generateSymbols, walk;
    walk = function (fn, inScope, ancestry, options) {
      var child, childName, children, jsNode, member;
      if ((null != ancestry[0] ? ancestry[0]['instanceof'](CS.Function, CS.BoundFunction) : void 0) && this === ancestry[0].body)
        inScope = union(inScope, concatMap(ancestry[0].parameters, beingDeclared));
      ancestry.unshift(this);
      children = {};
      for (var i$ = 0, length$ = this.childNodes.length; i$ < length$; ++i$) {
        childName = this.childNodes[i$];
        if (!(null != this[childName]))
          continue;
        children[childName] = in$(childName, this.listMembers) ? function (accum$) {
          for (var i$1 = 0, length$1 = this[childName].length; i$1 < length$1; ++i$1) {
            member = this[childName][i$1];
            jsNode = walk.call(member, fn, inScope, ancestry);
            inScope = union(inScope, envEnrichments(member, inScope));
            accum$.push(jsNode);
          }
          return accum$;
        }.call(this, []) : (child = this[childName], jsNode = walk.call(child, fn, inScope, ancestry), inScope = union(inScope, envEnrichments(child, inScope)), jsNode);
      }
      children.inScope = inScope;
      children.ancestry = ancestry;
      children.options = options;
      children.compile = function (node) {
        return walk.call(node, fn, inScope, ancestry);
      };
      ancestry.shift();
      jsNode = fn.call(this, children);
      jsNode.raw = this.raw;
      jsNode.line = this.line;
      jsNode.column = this.column - 1;
      jsNode.offset = this.offset;
      return jsNode;
    };
    generateSymbols = function () {
      var format, generateChildSymbols, generatedSymbols, generateName;
      generatedSymbols = {};
      format = function (pre, counter) {
        var cache$2, div, mod;
        if (pre) {
          return '' + pre + '$' + (counter || '');
        } else if (counter < 26) {
          return String.fromCharCode(97 + counter);
        } else {
          cache$2 = divMod(counter, 26);
          div = cache$2[0];
          mod = cache$2[1];
          return format(pre, div - 1) + format(pre, mod);
        }
      };
      generateName = function (node, param$) {
        var cache$2, formatted, nsCounters, usedSymbols;
        {
          cache$2 = param$;
          usedSymbols = cache$2.usedSymbols;
          nsCounters = cache$2.nsCounters;
        }
        if (owns(generatedSymbols, node.uniqueId)) {
          return generatedSymbols[node.uniqueId];
        } else {
          nsCounters[node.ns] = owns(nsCounters, node.ns) ? 1 + nsCounters[node.ns] : 0;
          while (in$(formatted = format(node.ns, nsCounters[node.ns]), usedSymbols)) {
            ++nsCounters[node.ns];
          }
          return generatedSymbols[node.uniqueId] = formatted;
        }
      };
      generateChildSymbols = generateMutatingWalker(function (state) {
        var alreadyDeclared, cache$2, declaredSymbols, declNames, decls, k, newNode, nsCounters, nsCounters_, params, undeclared, usedSymbols, v;
        state.declaredSymbols = union(state.declaredSymbols, declarationsNeeded(this));
        cache$2 = state;
        declaredSymbols = cache$2.declaredSymbols;
        usedSymbols = cache$2.usedSymbols;
        nsCounters = cache$2.nsCounters;
        newNode = this['instanceof'](JS.GenSym) ? (newNode = new JS.Identifier(generateName(this, state)), usedSymbols.push(newNode.name), newNode) : isScopeBoundary(this) ? (params = concatMap(this.params, collectIdentifiers), nsCounters_ = {}, function (accum$) {
          for (k in nsCounters) {
            if (!isOwn$(nsCounters, k))
              continue;
            v = nsCounters[k];
            accum$.push(nsCounters_[k] = v);
          }
          return accum$;
        }.call(this, []), newNode = generateChildSymbols(this, {
          declaredSymbols: union(declaredSymbols, params),
          usedSymbols: union(usedSymbols, params),
          nsCounters: nsCounters_
        }), newNode.body = forceBlock(newNode.body), undeclared = declarationsNeededRecursive(this.body), undeclared = difference(undeclared, map(variableDeclarations(this.body), function (id) {
          return id.name;
        })), alreadyDeclared = union(declaredSymbols, concatMap(this.params, collectIdentifiers)), declNames = nub(difference(undeclared, alreadyDeclared)), decls = map(declNames, function (name) {
          return new JS.Identifier(name);
        }), decls.length > 0 ? newNode.body.body.unshift(makeVarDeclaration(decls)) : void 0, newNode) : generateChildSymbols(this, state);
        state.declaredSymbols = union(declaredSymbols, declarationsNeededRecursive(newNode));
        return newNode;
      });
      return function (jsAST, state) {
        var inScope, needed, program;
        inScope = (null != state.declaredSymbols ? state.declaredSymbols : []).slice();
        program = generateChildSymbols(jsAST, state);
        if (program['instanceof'](JS.Program)) {
          needed = nub(difference(concatMap(program.body, declarationsNeededRecursive), inScope));
          if (needed.length > 0)
            program.body.unshift(makeVarDeclaration(needed.map(function (n) {
              return new JS.Identifier(n);
            })));
        }
        return program;
      };
    }();
    defaultRule = function () {
      throw new Error('compile: Non-exhaustive patterns in case: ' + this.className);
    };
    return function (ast, options) {
      var inScope, jsAST, rules;
      if (null == options)
        options = {};
      if (null != options.bare)
        options.bare;
      else
        options.bare = false;
      rules = this.rules;
      inScope = null != options.inScope ? options.inScope : [];
      jsAST = walk.call(ast, function () {
        return (null != rules[this.className] ? rules[this.className] : defaultRule).apply(this, arguments);
      }, inScope, [], options);
      return generateSymbols(jsAST, {
        declaredSymbols: inScope,
        usedSymbols: union(jsReserved.slice(), collectIdentifiers(jsAST)),
        nsCounters: {}
      });
    };
  }();
  return Compiler;
}();
function in$(member, list) {
  for (var i = 0, length = list.length; i < length; ++i)
    if (i in list && list[i] === member)
      return true;
  return false;
}
function isOwn$(o, p) {
  return {}.hasOwnProperty.call(o, p);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(103)(module)))

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 2.0.0-beta9-dev
var ArrayExpression, AssignmentExpression, BinaryExpression, BlockStatement, cache$, cache$1, CallExpression, createNode, ctor, difference, exports, FunctionDeclaration, FunctionExpression, GenSym, handleLists, handlePrimitives, Identifier, isStatement, Literal, LogicalExpression, MemberExpression, NewExpression, node, nodeData, Nodes, ObjectExpression, params, Program, SequenceExpression, SwitchCase, SwitchStatement, TryStatement, UnaryExpression, UpdateExpression, VariableDeclaration;
difference = __webpack_require__(101).difference;
exports = null != ( true && null != module ? module.exports : void 0) ?  true && null != module ? module.exports : void 0 : this;
createNode = function (type, props) {
  return function (super$) {
    extends$(class$, super$);
    function class$() {
      var i, prop;
      for (var i$ = 0, length$ = props.length; i$ < length$; ++i$) {
        prop = props[i$];
        i = i$;
        this[prop] = arguments[i];
      }
    }
    class$.prototype.type = type;
    class$.prototype.childNodes = props;
    return class$;
  }(Nodes);
};
this.Nodes = Nodes = function () {
  function Nodes() {
  }
  Nodes.prototype.listMembers = [];
  Nodes.prototype['instanceof'] = function () {
    var ctor, ctors;
    ctors = arguments.length > 0 ? [].slice.call(arguments, 0) : [];
    for (var i$ = 0, length$ = ctors.length; i$ < length$; ++i$) {
      ctor = ctors[i$];
      if (!(this.type === ctor.prototype.type))
        continue;
      return true;
    }
    return false;
  };
  Nodes.prototype.toBasicObject = function () {
    var child, obj, p;
    obj = { type: this.type };
    if (null != this.leadingComments)
      obj.leadingComments = this.leadingComments;
    for (var i$ = 0, length$ = this.childNodes.length; i$ < length$; ++i$) {
      child = this.childNodes[i$];
      if (in$(child, this.listMembers)) {
        obj[child] = function (accum$) {
          for (var i$1 = 0, length$1 = this[child].length; i$1 < length$1; ++i$1) {
            p = this[child][i$1];
            accum$.push('undefined' !== typeof p && null != p ? p.toBasicObject() : void 0);
          }
          return accum$;
        }.call(this, []);
      } else {
        obj[child] = null != this[child] ? this[child].toBasicObject() : void 0;
      }
    }
    if (null != this.line && null != this.column)
      obj.loc = {
        start: {
          line: this.line,
          column: this.column
        }
      };
    if (null != this.offset)
      obj.range = [
        this.offset,
        null != this.raw ? this.offset + this.raw.length : void 0
      ];
    if (null != this.raw)
      obj.raw = this.raw;
    return obj;
  };
  return Nodes;
}();
nodeData = [
  [
    'ArrayExpression',
    false,
    ['elements']
  ],
  [
    'AssignmentExpression',
    false,
    [
      'operator',
      'left',
      'right'
    ]
  ],
  [
    'BinaryExpression',
    false,
    [
      'operator',
      'left',
      'right'
    ]
  ],
  [
    'BlockStatement',
    true,
    ['body']
  ],
  [
    'BreakStatement',
    true,
    ['label']
  ],
  [
    'CallExpression',
    false,
    [
      'callee',
      'arguments'
    ]
  ],
  [
    'CatchClause',
    true,
    [
      'param',
      'body'
    ]
  ],
  [
    'ConditionalExpression',
    false,
    [
      'test',
      'consequent',
      'alternate'
    ]
  ],
  [
    'ContinueStatement',
    true,
    ['label']
  ],
  [
    'DebuggerStatement',
    true,
    []
  ],
  [
    'DoWhileStatement',
    true,
    [
      'body',
      'test'
    ]
  ],
  [
    'EmptyStatement',
    true,
    []
  ],
  [
    'ExpressionStatement',
    true,
    ['expression']
  ],
  [
    'ForInStatement',
    true,
    [
      'left',
      'right',
      'body'
    ]
  ],
  [
    'ForStatement',
    true,
    [
      'init',
      'test',
      'update',
      'body'
    ]
  ],
  [
    'FunctionDeclaration',
    true,
    [
      'id',
      'params',
      'body'
    ]
  ],
  [
    'FunctionExpression',
    false,
    [
      'id',
      'params',
      'body'
    ]
  ],
  [
    'GenSym',
    false,
    [
      'ns',
      'uniqueId'
    ]
  ],
  [
    'Identifier',
    false,
    ['name']
  ],
  [
    'IfStatement',
    true,
    [
      'test',
      'consequent',
      'alternate'
    ]
  ],
  [
    'LabeledStatement',
    true,
    [
      'label',
      'body'
    ]
  ],
  [
    'Literal',
    false,
    ['value']
  ],
  [
    'LogicalExpression',
    false,
    [
      'operator',
      'left',
      'right'
    ]
  ],
  [
    'MemberExpression',
    false,
    [
      'computed',
      'object',
      'property'
    ]
  ],
  [
    'NewExpression',
    false,
    [
      'callee',
      'arguments'
    ]
  ],
  [
    'ObjectExpression',
    false,
    ['properties']
  ],
  [
    'Program',
    true,
    ['body']
  ],
  [
    'Property',
    true,
    [
      'key',
      'value'
    ]
  ],
  [
    'ReturnStatement',
    true,
    ['argument']
  ],
  [
    'SequenceExpression',
    false,
    ['expressions']
  ],
  [
    'SwitchCase',
    true,
    [
      'test',
      'consequent'
    ]
  ],
  [
    'SwitchStatement',
    true,
    [
      'discriminant',
      'cases'
    ]
  ],
  [
    'ThisExpression',
    false,
    []
  ],
  [
    'ThrowStatement',
    true,
    ['argument']
  ],
  [
    'TryStatement',
    true,
    [
      'block',
      'handlers',
      'finalizer'
    ]
  ],
  [
    'UnaryExpression',
    false,
    [
      'operator',
      'argument'
    ]
  ],
  [
    'UpdateExpression',
    false,
    [
      'operator',
      'prefix',
      'argument'
    ]
  ],
  [
    'VariableDeclaration',
    true,
    [
      'kind',
      'declarations'
    ]
  ],
  [
    'VariableDeclarator',
    true,
    [
      'id',
      'init'
    ]
  ],
  [
    'WhileStatement',
    true,
    [
      'test',
      'body'
    ]
  ],
  [
    'WithStatement',
    true,
    [
      'object',
      'body'
    ]
  ]
];
for (var i$ = 0, length$ = nodeData.length; i$ < length$; ++i$) {
  {
    cache$ = nodeData[i$];
    node = cache$[0];
    isStatement = cache$[1];
    params = cache$[2];
  }
  exports[node] = ctor = createNode(node, params);
  ctor.prototype.isStatement = isStatement;
  ctor.prototype.isExpression = !isStatement;
}
cache$1 = exports;
Program = cache$1.Program;
BlockStatement = cache$1.BlockStatement;
Literal = cache$1.Literal;
Identifier = cache$1.Identifier;
FunctionExpression = cache$1.FunctionExpression;
CallExpression = cache$1.CallExpression;
SequenceExpression = cache$1.SequenceExpression;
ArrayExpression = cache$1.ArrayExpression;
BinaryExpression = cache$1.BinaryExpression;
UnaryExpression = cache$1.UnaryExpression;
NewExpression = cache$1.NewExpression;
VariableDeclaration = cache$1.VariableDeclaration;
ObjectExpression = cache$1.ObjectExpression;
MemberExpression = cache$1.MemberExpression;
UpdateExpression = cache$1.UpdateExpression;
AssignmentExpression = cache$1.AssignmentExpression;
LogicalExpression = cache$1.LogicalExpression;
GenSym = cache$1.GenSym;
FunctionDeclaration = cache$1.FunctionDeclaration;
VariableDeclaration = cache$1.VariableDeclaration;
SwitchStatement = cache$1.SwitchStatement;
SwitchCase = cache$1.SwitchCase;
TryStatement = cache$1.TryStatement;
handlePrimitives = function (ctor, primitives) {
  ctor.prototype.childNodes = difference(ctor.prototype.childNodes, primitives);
  return ctor.prototype.toBasicObject = function () {
    var obj, primitive;
    obj = Nodes.prototype.toBasicObject.call(this);
    for (var i$1 = 0, length$1 = primitives.length; i$1 < length$1; ++i$1) {
      primitive = primitives[i$1];
      obj[primitive] = this[primitive];
    }
    return obj;
  };
};
handlePrimitives(AssignmentExpression, ['operator']);
handlePrimitives(BinaryExpression, ['operator']);
handlePrimitives(LogicalExpression, ['operator']);
handlePrimitives(GenSym, [
  'ns',
  'uniqueId'
]);
handlePrimitives(Identifier, ['name']);
handlePrimitives(Literal, ['value']);
handlePrimitives(MemberExpression, ['computed']);
handlePrimitives(UnaryExpression, ['operator']);
handlePrimitives(UpdateExpression, [
  'operator',
  'prefix'
]);
handlePrimitives(VariableDeclaration, ['kind']);
handleLists = function (ctor, listProps) {
  return ctor.prototype.listMembers = listProps;
};
handleLists(ArrayExpression, ['elements']);
handleLists(BlockStatement, ['body']);
handleLists(CallExpression, ['arguments']);
handleLists(FunctionDeclaration, ['params']);
handleLists(FunctionExpression, ['params']);
handleLists(NewExpression, ['arguments']);
handleLists(ObjectExpression, ['properties']);
handleLists(Program, ['body']);
handleLists(SequenceExpression, ['expressions']);
handleLists(SwitchCase, ['consequent']);
handleLists(SwitchStatement, ['cases']);
handleLists(TryStatement, ['handlers']);
handleLists(VariableDeclaration, ['declarations']);
FunctionDeclaration.prototype.generated = FunctionExpression.prototype.generated = false;
FunctionDeclaration.prototype.g = FunctionExpression.prototype.g = function () {
  this.generated = true;
  return this;
};
function isOwn$(o, p) {
  return {}.hasOwnProperty.call(o, p);
}
function extends$(child, parent) {
  for (var key in parent)
    if (isOwn$(parent, key))
      child[key] = parent[key];
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
}
function in$(member, list) {
  for (var i = 0, length = list.length; i < length; ++i)
    if (i in list && list[i] === member)
      return true;
  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(103)(module)))

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


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var esper_ref = __webpack_require__(1);
var plugin = __webpack_require__(98);
esper_ref._registerPlugin(plugin);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Preprocessor = __webpack_require__(99).Preprocessor;
var Parser = __webpack_require__(105);
var Compiler = __webpack_require__(107).Compiler;
var CS = __webpack_require__(102);

function formatParserError(preprocessed, e) {
	var result = new SyntaxError('Syntax error on line ' + e.line + ' column ' + e.column + ': unexpected \'' + e.found + '\'');
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
		if (!(e instanceof Parser.SyntaxError)) throw e;
		throw formatParserError(preprocessed, e);
	}
}

function ccompile(csAst, options) {
	return Compiler.compile(csAst, options).toBasicObject();
}

function parser(code, options) {
	options = options || {};
	var opts = { locations: true, ranges: true };
	var csast = cparse(code, options);
	if (options.inFunctionBody) {
		//Gota fake being inside a function to trigger return rewriting.
		csast = new CS.Program(new CS.Function([], csast));
	}
	//console.log(JSON.stringify(csast,null, ' '));
	var ast = ccompile(csast, { bare: true });
	//console.log(JSON.stringify(ast,null, ' '))
	if (options.inFunctionBody) {
		ast = ast.body[0].expression.body;
	}
	return ast;
}

var plugin = module.exports = {
	name: 'lang-coffeescript',
	parser: parser,
	init: function init(esper) {
		esper.languages.coffeescript = plugin;
	}
};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 2.0.0-beta9-dev
var DEDENT, INDENT, pointToErrorLocation, Preprocessor, StringScanner, TERM, ws;
pointToErrorLocation = __webpack_require__(100).pointToErrorLocation;
StringScanner = __webpack_require__(104);
this.Preprocessor = Preprocessor = function () {
  ws = '\\t\\x0B\\f\\r \\xA0\\u1680\\u180E\\u2000-\\u200A\\u202F\\u205F\\u3000\\uFEFF';
  INDENT = '\uEFEF';
  DEDENT = '\uEFFE';
  TERM = '\uEFFF';
  function Preprocessor(param$) {
    if (null == param$)
      param$ = {};
    this.options = param$;
    this.preprocessed = '';
    this.base = null;
    this.indents = [];
    this.context = [];
  }
  Preprocessor.process = function (input, options) {
    if (null == options)
      options = {};
    return new Preprocessor(options).process(input);
  };
  Preprocessor.prototype.err = function (c) {
    var columns, context, lines, token;
    token = function () {
      switch (c) {
      case INDENT:
        return 'INDENT';
      case DEDENT:
        return 'DEDENT';
      case TERM:
        return 'TERM';
      default:
        return '"' + c.replace(/"/g, '\\"') + '"';
      }
    }.call(this);
    lines = this.ss.str.substr(0, this.ss.pos).split(/\n/) || [''];
    columns = null != lines[lines.length - 1] ? lines[lines.length - 1].length : 0;
    context = pointToErrorLocation(this.ss.str, lines.length, columns);
    throw new Error('Unexpected ' + token + '\n' + context);
  };
  Preprocessor.prototype.peek = function () {
    if (this.context.length) {
      return this.context[this.context.length - 1];
    } else {
      return null;
    }
  };
  Preprocessor.prototype.observe = function (c) {
    var top;
    top = this.peek();
    switch (c) {
    case '"""':
    case "'''":
    case '"':
    case "'":
    case '###':
    case '`':
    case '///':
    case '/':
      if (top === c) {
        this.context.pop();
      } else {
        this.context.push(c);
      }
      break;
    case INDENT:
    case '#':
    case '#{':
    case '[':
    case '(':
    case '{':
    case '\\':
    case 'regexp-[':
    case 'regexp-(':
    case 'regexp-{':
    case 'heregexp-#':
    case 'heregexp-[':
    case 'heregexp-(':
    case 'heregexp-{':
      this.context.push(c);
      break;
    case DEDENT:
      if (!(top === INDENT))
        this.err(c);
      this.indents.pop();
      this.context.pop();
      break;
    case '\n':
      if (!(top === '#' || top === 'heregexp-#'))
        this.err(c);
      this.context.pop();
      break;
    case ']':
      if (!(top === '[' || top === 'regexp-[' || top === 'heregexp-['))
        this.err(c);
      this.context.pop();
      break;
    case ')':
      if (!(top === '(' || top === 'regexp-(' || top === 'heregexp-('))
        this.err(c);
      this.context.pop();
      break;
    case '}':
      if (!(top === '#{' || top === '{' || top === 'regexp-{' || top === 'heregexp-{'))
        this.err(c);
      this.context.pop();
      break;
    case 'end-\\':
      if (!(top === '\\'))
        this.err(c);
      this.context.pop();
      break;
    default:
      throw new Error('undefined token observed: ' + c);
    }
    return this.context;
  };
  Preprocessor.prototype.p = function (s) {
    if (null != s)
      this.preprocessed = '' + this.preprocessed + s;
    return s;
  };
  Preprocessor.prototype.scan = function (r) {
    return this.p(this.ss.scan(r));
  };
  Preprocessor.prototype.consumeIndentation = function () {
    var context, indent, indentIndex, lineLen, lines, message;
    if (this.ss.bol() || this.scan(new RegExp('(?:[' + ws + ']*\\n)+'))) {
      this.scan(new RegExp('(?:[' + ws + ']*(\\#\\#?(?!\\#)[^\\n]*)?\\n)+'));
      if (null != this.base) {
        if (!(this.ss.eos() || null != this.scan(this.base))) {
          throw new Error('inconsistent base indentation');
        }
      } else {
        this.base = new RegExp('' + this.scan(new RegExp('[' + ws + ']*')) + '');
      }
      indentIndex = 0;
      while (indentIndex < this.indents.length) {
        indent = this.indents[indentIndex];
        if (this.ss.check(new RegExp('' + indent + ''))) {
          this.scan(new RegExp('' + indent + ''));
        } else if (this.ss.eos() || this.ss.check(new RegExp('[^' + ws + ']'))) {
          --indentIndex;
          this.p('' + DEDENT + TERM);
          this.observe(DEDENT);
        } else {
          lines = this.ss.str.substr(0, this.ss.pos).split(/\n/) || [''];
          message = 'Syntax error on line ' + lines.length + ': indentation is ambiguous';
          lineLen = this.indents.reduce(function (l, r) {
            return l + r.length;
          }, 0);
          context = pointToErrorLocation(this.ss.str, lines.length, lineLen);
          throw new Error('' + message + '\n' + context);
        }
        ++indentIndex;
      }
      if (this.ss.check(new RegExp('[' + ws + ']+[^' + ws + '#]'))) {
        this.indents.push(this.scan(new RegExp('[' + ws + ']+')));
        this.p(INDENT);
        return this.observe(INDENT);
      }
    }
  };
  Preprocessor.prototype.introduceContext = function () {
    var impliedRegexp, lastChar, pos, spaceBefore, tok;
    if (tok = this.scan(/"""|'''|\/\/\/|###|["'`#[({\\]/)) {
      return this.observe(tok);
    } else if (tok = this.scan(/\//)) {
      pos = this.ss.position();
      if (pos > 1) {
        lastChar = this.ss.string()[pos - 2];
        spaceBefore = new RegExp('[' + ws + ']').test(lastChar);
        impliedRegexp = /[;,=><*%^&|[(+!~-]/.test(lastChar);
      }
      if (pos === 1 || impliedRegexp || spaceBefore && !this.ss.check(new RegExp('[' + ws + '=]')) && this.ss.check(/[^\r\n]*\//))
        return this.observe('/');
    }
  };
  Preprocessor.prototype.process = function (input) {
    var tok;
    if (this.options.literate)
      input = input.replace(/^( {0,3}\S)/gm, '    #$1');
    this.ss = new StringScanner(input);
    while (!this.ss.eos()) {
      switch (this.peek()) {
      case null:
      case INDENT:
        this.consumeIndentation();
        this.scan(/[^\n'"\\\/#`[(){}\]]+/);
        if (this.ss.check(/[})\]]/)) {
          while (this.peek() === INDENT) {
            this.p('' + DEDENT + TERM);
            this.observe(DEDENT);
          }
          this.observe(this.scan(/[})\]]/));
        } else {
          this.introduceContext();
        }
        break;
      case '#{':
      case '{':
        this.scan(/[^\n'"\\\/#`[({}]+/);
        if (tok = this.scan(/\}/)) {
          this.observe(tok);
        } else {
          this.consumeIndentation();
          this.introduceContext();
        }
        break;
      case '[':
        this.scan(/[^\n'"\\\/#`[({\]]+/);
        if (tok = this.scan(/\]/)) {
          this.observe(tok);
        } else {
          this.consumeIndentation();
          this.introduceContext();
        }
        break;
      case '(':
        this.scan(/[^\n'"\\\/#`[({)]+/);
        if (tok = this.scan(/\)/)) {
          this.observe(tok);
        } else {
          this.consumeIndentation();
          this.introduceContext();
        }
        break;
      case '\\':
        if (this.scan(/[\s\S]/))
          this.observe('end-\\');
        break;
      case '"""':
        this.scan(/(?:[^"#\\]+|""?(?!")|#(?!{)|\\.)+/);
        this.ss.scan(/\\\n/);
        if (tok = this.scan(/#{|"""/)) {
          this.observe(tok);
        } else if (tok = this.scan(/#{|"""/)) {
          this.observe(tok);
        }
        break;
      case '"':
        this.scan(/(?:[^"#\\]+|#(?!{)|\\.)+/);
        this.ss.scan(/\\\n/);
        if (tok = this.scan(/#{|"/))
          this.observe(tok);
        break;
      case "'''":
        this.scan(/(?:[^'\\]+|''?(?!')|\\.)+/);
        this.ss.scan(/\\\n/);
        if (tok = this.scan(/'''/))
          this.observe(tok);
        break;
      case "'":
        this.scan(/(?:[^'\\]+|\\.)+/);
        this.ss.scan(/\\\n/);
        if (tok = this.scan(/'/))
          this.observe(tok);
        break;
      case '###':
        this.scan(/(?:[^#]+|##?(?!#))+/);
        if (tok = this.scan(/###/))
          this.observe(tok);
        break;
      case '#':
        this.scan(/[^\n]+/);
        if (tok = this.scan(/\n/))
          this.observe(tok);
        break;
      case '`':
        this.scan(/[^`]+/);
        if (tok = this.scan(/`/))
          this.observe(tok);
        break;
      case '///':
        this.scan(/(?:[^[/#\\]+|\/\/?(?!\/)|\\.)+/);
        if (tok = this.scan(/#{|\/\/\/|\\/)) {
          this.observe(tok);
        } else if (this.ss.scan(/#/)) {
          this.observe('heregexp-#');
        } else if (tok = this.scan(/[\[]/)) {
          this.observe('heregexp-' + tok);
        }
        break;
      case 'heregexp-[':
        this.scan(/(?:[^\]\/\\]+|\/\/?(?!\/))+/);
        if (tok = this.scan(/[\]\\]|#{|\/\/\//))
          this.observe(tok);
        break;
      case 'heregexp-#':
        this.ss.scan(/(?:[^\n/]+|\/\/?(?!\/))+/);
        if (tok = this.scan(/\n|\/\/\//))
          this.observe(tok);
        break;
      case '/':
        this.scan(/[^[/\\]+/);
        if (tok = this.scan(/[\/\\]/)) {
          this.observe(tok);
        } else if (tok = this.scan(/\[/)) {
          this.observe('regexp-' + tok);
        }
        break;
      case 'regexp-[':
        this.scan(/[^\]\\]+/);
        if (tok = this.scan(/[\]\\]/))
          this.observe(tok);
      }
    }
    this.scan(new RegExp('[' + ws + '\\n]*$'));
    while (this.context.length) {
      switch (this.peek()) {
      case INDENT:
        this.p('' + DEDENT + TERM);
        this.observe(DEDENT);
        break;
      case '#':
        this.p('\n');
        this.observe('\n');
        break;
      default:
        throw new Error('Unclosed "' + this.peek().replace(/"/g, '\\"') + '" at EOF');
      }
    }
    return this.preprocessed;
  };
  return Preprocessor;
}();


/***/ })

/******/ });
});