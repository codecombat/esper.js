'use strict';

const esper = require('../..');
const csswhat = require('css-what');
const ASTNode = esper.ASTPreprocessor.ASTNode;

const debug = () => {};
//const debug = console.log.bind(console);



function tag(name) {
	switch (name.toLowerCase()) {
		case 'array':
		case 'arrayexpression':
			return 'ArrayExpression';
		case 'break':
		case 'breakstatement':
			return 'BreakStatement';
		case 'continue':
		case 'continuestatement':
			return 'ContinueStatement';
		case 'arrow':
		case 'arrowfunction':
			return 'ArrowFunctionExpression';
		case 'assign':
		case 'assignment':
		case 'assignmentexpression':
			return 'AssignmentExpression';
		case 'binop':
		case 'binary':
		case 'binaryexpression':
			return 'BinaryExpression';
		case 'block':
		case 'blockstatement':
			return 'BlockStatement';
		case 'call':
		case 'callexpression':
			return 'CallExpression';
		case 'class':
		case 'classdeclaration':
			return 'ClassDeclaration';
		case 'classex':
		case 'classexpression':
			return 'ClassExpression';
		case 'conditional':
		case 'conditionalexpression':
			return 'ConditionalExpression';
		case 'debugger':
		case 'debuggerstatement':
			return 'DebuggerStatement';
		case 'dowhile':
		case 'dowhilestatement':
			return 'DoWhileStatement';
		case 'empty':
		case 'emptystatement':
			return 'EmptyStatement';
		case 'expression':
		case 'exp':
		case 'expressionstatement':
			return 'ExpressionStatement';
		case 'for':
		case 'forstatement':
			return 'ForStatement';
		case 'forin':
		case 'forinstatement':
			return 'ForInStatement';
		case 'forof':
		case 'forofstatement':
			return 'ForOfStatement';
		case 'functiondeclaration':
			return 'FunctionDeclaration';
		case 'functionexpression':
			return 'FunctionExpression';
		case 'identifier':
			return 'Identifier';
		case 'if':
		case 'ifstatement':
			return 'IfStatement';
		case 'labeledstatement':
			return 'LabeledStatement';
		case 'literal':
		case 'value':
			return 'Literal';
		case 'logicalexpression':
			return 'LogicalExpression';
		case 'memberexpression':
		case 'member':
			return 'MemberExpression';
		case 'new':
		case 'newexpression':
			return 'NewExpression';
		case 'object':
		case 'objectexpression':
			return 'ObjectExpression';
		case 'program':
			return 'Program';
		case 'return':
		case 'returnstatement':
			return 'ReturnStatement';
		case 'sequence':
		case 'sequenceexpression':
			return 'SequenceExpression';
		case 'switch':
		case 'switchstatement':
			return 'SwitchStatement';
		case 'this':
		case 'thisexpression':
			return 'ThisExpression';
		case 'throw':
		case 'throwstatement':
			return 'ThrowStatement';
		case 'try':
		case 'trystatement':
			return 'TryStatement';
		case 'unaryexpression':
			return 'UnaryExpression';
		case 'updateexpression':
			return 'UpdateExpression';
		case 'variabledeclaration':
			return 'VariableDeclaration';
		case 'whilestatement':
		case 'while':
			return 'WhileStatement';
		case 'with':
		case 'withstatement':
			return 'WithStatement';
	}
}

function find(ast, selector, root) {
	var list;
	debug(selector);
	if ( typeof selector === 'string' ) {
		list = csswhat(selector, {xmlMode: true});
		debug(list);
	} else {
		list = selector;
	}
	var matchers = list.map(compileRTL);
	var found = [];
	var cbs = {
		exit: function(n) {
			//console.log("EVAL", n);
			for ( let i = 0; i < matchers.length; ++i ) {
				let result = matchers[i](n, root);
				if ( result !== false ) found.push([n,result]);
			}
		}
	};
	var gen = esper.ASTPreprocessor.walker(ast, cbs);
	for ( var x of gen ) {}
	return found;
}

function matches(m, selector, root) {

	var matches = find(m, selector, root);
	for ( let i = 0; i < matches.length; ++i ) {
		if ( matches[i][1].indexOf(m) !== -1 ) {
			return true;
		}
	}
	return false;
}

function tagNames(n) {
	switch ( n.toLowerCase() ) {
		case 'loop':
			return ['WhileStatement', 'DoWhileStatement', 'ForStatement'];
		case 'breakable':
			return ['SwitchStatement', 'WhileStatement', 'DoWhileStatement', 'ForStatement'];
		case 'if':
			return ['IfStatement'];
		case 'function':
			return ['FunctionDeclaration','FunctionExpression','ArrowFunctionExpression'];
	}
	return [tag(n)];

}

function compileRTL(opts) {
	return function match(input, root) {
		var canidates = [{n: input}];
		for ( var i = opts.length - 1; i >= 0; --i ) {
			var o = opts[i];
			//debug(canidates.map((m) => m ? m.type : 'F').join(','), "vs", o);
			switch ( o.type ) {
				case 'universal':
					break;
				case 'pseudo':
					if ( o.name === 'downto') {
						let list = tagNames(o.data);
						let parents = [];
						canidates.map((c) => {
							var m = c.n;
							while ( m !== root && m.parent ) {
								m = m.parent;
								if ( list.indexOf(m.type) !== -1 ) break;
								parents.push({n: m});
							}
						});
						canidates = parents;
						debug('NT', list);
						debug('DT!', canidates.map(function(s) { return s.n.type + '#' + s.n.loc.start.line; }));
						break;
					} else if ( o.name == 'matches') {
						canidates = canidates.filter((c) => {
							return matches(c.n, o.data, root);
						});
						break;
					} else if ( o.name == 'has') {
						canidates = canidates.filter((c) => {
							var matches = match(c.n, o.data, root);
							return matches.length > 0;
						});
						break;
					} else if ( o.name == 'not') {
						canidates = canidates.filter((c) => {
							return !matches(c.n, o.data, root);
						});
						break;
					} else {
						throw new Error('Unknown psudo selector:' + o.name);
					}
					break;
				case 'descendant':
					let parents = [];
					canidates.map((c) => {
						var m = c.n;
						while ( m !== root && m.parent ) {
							m = m.parent;
							parents.push({n: m, p: c.n});
						}
					});
					canidates = parents;
					break;
				case 'child':
					canidates = canidates.filter((c) => c.n !== root && c.n.parent).map((c) => {
						return {n: c.n.parent, p: c.n};
					});
					break;
				case 'parent':
					let parents2 = [];
					canidates.map((c) => {
						var m = c.n;
						for ( var k in m ) {
							if ( k === 'type' ) continue;
							if ( k === 'parent' ) continue;
							if ( k === 'visits' ) continue;
							if ( k === 'dispatch' ) continue;
							if ( k === 'loc' ) continue;
							if ( k === 'range' ) continue;
							if ( k === 'nodeID' ) continue;
							if ( k === 'srcName' ) continue;

							if ( m[k] instanceof ASTNode  ) {
								parents2.push({n: m[k], p: m});
							}
						}
					});
					debug(canidates, parents2);
					canidates = parents2;
					break;
				case 'sibling':
					var siblings = [];
					canidates.filter((c) => {
						var m = c.n;
						var parent = m.parent;
						for ( var key in parent ) {
							if ( !Array.isArray(parent[key]) ) continue;
							var idx = parent[key].indexOf(m);
							if ( idx === -1 ) continue;
							for ( var i = 0; i < idx; ++i ) {
								if ( parent[key][i] !== m ) siblings.push({n: parent[key][i]});
							}
							return;
						}
					});
					canidates = siblings;
					break;
				case 'adjacent':
					var adjlist = [];
					canidates.filter((c) => {
						var m = c.n;
						var parent = m.parent;
						for ( var key in parent ) {
							if ( !Array.isArray(parent[key]) ) continue;
							var idx = parent[key].indexOf(m);
							if ( idx == -1 ) continue;
							if ( idx > 0 ) adjlist.push({n: parent[key][idx - 1]});
							return;
						}
					});
					canidates = adjlist;
					break;
				case 'tag':
					var list = tagNames(o.name);
					canidates = canidates.filter((c) => list.indexOf(c.n.type) !== -1);
					break;
				case 'attribute':
					if ( o.name === 'class' ) {
						canidates = canidates.filter((c) => {
							var test = c.n[o.value];
							if ( !c.p ) return !!test;
							if ( Array.isArray(test) ) return test.indexOf(c.p) !== -1;
							return test == c.p;
						});
						break;
					}
					canidates = canidates.filter((c) => {
						var m = c.n;
						if ( !(o.name in m) ) return;
						var val = m[o.name];
						if ( val.type && val.type === 'Identifier' ) val = val.name;
						else if ( val.type && val.type === 'Literal' ) val = JSON.stringify(val.value);
						return o.value == val.toString();
					});
					break;
				default:
					throw new Error('Unknown CSS Selector Type: ' + o.type);
			}

			if ( canidates.length > 0 ) {
				debug('MATCH@' + JSON.stringify(o));
				debug(canidates);
			} else {
				if (  i < opts.length - 1 ) debug('FAIL@' + JSON.stringify(o));
				return false;
			}
		}
		debug('OK!', canidates.map(function(s) { return s.n.type + '#' + (s.n.loc ? s.n.loc.start.line : '?'); }));
		return canidates.map(function(s) { return s.n; });
	};
}




function init(esper) {
	esper.ASTPreprocessor.prototype.find = function(sel) { return find(this.ast, sel).map((x) => x[0]); };
	esper.ASTPreprocessor.ASTNode.prototype.find = function(sel) { return find(this, sel, null).map((x) => x[0]); };
	esper.ASTPreprocessor.ASTNode.prototype.matches = function(sel) { return matches(this, sel, null); };
}

let plugin = module.exports = {
	name: "ast-css",
	find: find,
	init: init
};
