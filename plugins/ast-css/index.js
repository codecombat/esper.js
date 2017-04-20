'use strict';

const esper = require('../..');
const csswhat = require('css-what');
const ASTNode = esper.ASTPreprocessor.ASTNode;

const debug = () => {};
//const debug = console.log.bind(console);

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
	return [n];

}

function compileRTL(opts) {
	return function match(input, root) {
		var canidates = [input];
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
						canidates.map((m) => {
							while ( m !== root && m.parent ) {
								m = m.parent;
								if ( list.indexOf(m.type) !== -1 ) break;
								parents.push(m);
							}
						});
						canidates = parents;
						debug('NT', list);
						debug('DT!', canidates.map(function(s) { return s.type + '#' + s.loc.start.line; }));
						break;
					} else if ( o.name == 'matches') {
						canidates = canidates.filter((m) => {
							return matches(m, o.data, root);
						});
						break;
					} else if ( o.name == 'has') {
						canidates = canidates.filter((m) => {
							var matches = match(m, o.data, root);
							return matches.length > 0;
						});
						break;
					} else if ( o.name == 'not') {
						canidates = canidates.filter((m) => {
							return !matches(m, o.data, root);
						});
						break;
					} else {
						throw new Error('Unknown psudo selector:' + o.name);
					}
				case 'descendant':
					let parents = [];
					canidates.map((m) => {
						while ( m !== root && m.parent ) {
							m = m.parent;
							parents.push(m);
						}
					});
					canidates = parents;
					break;
				case 'child':
					canidates = canidates.filter((m) => m !== root && m.parent).map((m) => {
						return m.parent;
					});
					break;
				case 'parent':
					let parents2 = [];
					canidates.map((m) => {
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
								parents2.push(m[k]);
							}

						}
					});
					debug(canidates, parents2);
					canidates = parents2;
					break;
				case 'sibling':
					var siblings = [];
					canidates.filter((m) => {
						var parent = m.parent;
						for ( var key in parent ) {
							if ( !Array.isArray(parent[key]) ) continue;
							var idx = parent[key].indexOf(m);
							if ( idx === -1 ) continue;
							for ( var i = 0; i < idx; ++i ) {
								if ( parent[key][i] !== m ) siblings.push(parent[key][i]);
							}
							return;
						}
					});
					canidates = siblings;
					break;
				case 'adjacent':
					var adjlist = [];
					canidates.filter((m) => {
						var parent = m.parent;
						for ( var key in parent ) {
							if ( !Array.isArray(parent[key]) ) continue;
							var idx = parent[key].indexOf(m);
							if ( idx == -1 ) continue;
							if ( idx > 0 ) adjlist.push(parent[key][idx - 1]);
							return;
						}
					});
					canidates = adjlist;
					break;
				case 'tag':
					var list = tagNames(o.name);
					canidates = canidates.filter((m) => list.indexOf(m.type) !== -1);
					break;
				case 'attribute':
					if ( o.name === 'class' ) {
						canidates = canidates.filter((m) => {
							return m.parent && m.parent[o.value] == m;
						});
						break;
					}
					canidates = canidates.filter((m) => {
						if ( !(o.name in m) ) return;
						var val = m[o.name];
						if ( val.type && val.type === 'Identifier' ) val = val.name;
						else if ( val.type && val.type === 'Literal' ) val = JSON.stringify(val.value);
						return o.value == val;
					});
					break;
				default:
					throw new Error('Unknown CSS Selector Type: ' + o.type);
			}

			if ( canidates.length > 0 ) {
				debug('MATCH@' + JSON.stringify(o));
			} else {
				if (  i < opts.length - 1 ) debug('FAIL@' + JSON.stringify(o));
				return false;
			}
		}
		debug('OK!', canidates.map(function(s) { return s.type + '#' + s.loc.start.line; }));
		return canidates;
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
