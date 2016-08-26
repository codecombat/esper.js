'use strict';

const esper = require('../..');
const csswhat = require('css-what');


function find(ast, selector, root) {
	console.log(selector);
	var list  = csswhat(selector, {xmlMode: true});
	console.log(list);
	var matchers = list.map(compile);
	var found = [];
	var cbs = {
		exit: function(n) {
			//console.log("EVAL", n);
			if ( !matchers.every((m) => m(n,root) === false) ) found.push(n);
		}
	};
	var gen = esper.ASTPreprocessor.walker(ast, cbs);
	for ( var x of gen ) {}
	return found;
}


function compile(opts) {
	return function match(input, root) {
		console.log("----");
		var canidates = [input];
		for ( var i = opts.length - 1; i >= 0; --i ) {
			var o = opts[i];
			console.log(canidates.map((m) => m ? m.type : 'F').join(','), "vs", o);
			switch ( o.type ) {
				case 'universal':
					break;
				case 'pseudo':
					console.log(JSON.stringify(o,null,'  '));
					//canidates = canidates.filter((m) => {
					//	return m.back && m.el[o.name] == m.back;
					//});
					canidates = canidates.filter((m) => {
						return m.parent && m.parent[o.name] == m;
					});
					break;
				case 'descendant':
					var parents = [];
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
				case 'sibling':
					var siblings = [];
					canidates.filter((m) => {
						var parent = m.parent;
						for ( var key in parent ) {
							if ( !Array.isArray(parent[key]) ) continue;
							var idx = parent[key].indexOf(m);
							if ( idx === -1 ) continue;
							for ( var i = 0; i < idx; ++i ) {
								console.log(i, parent[key][i]);
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
							if ( idx > 0 ) siblings.push(parent[key][idx - 1]);
							return;
						}
					});
					canidates = adjlist;
					break;
				case 'tag':
					canidates = canidates.filter((m) => m.type == o.name);
					break;
				case 'attribute':
					canidates = canidates.filter((m) => {
						if ( !(o.name in m) ) return;
						var val = m[o.name];
						console.log(val);
						if ( val.type && val.type === 'Identifier' ) val = val.name;
						else if ( val.type && val.type === 'Literal' ) val = JSON.stringify(val.value);
						console.log(val, o.value);
						return o.value == val;
					});
					break;
				default:
					throw new Error('Unknown CSS Selector Type: ' + o.type);
			}

			if ( canidates.length > 0 ) {
				console.log('MATCH@' + JSON.stringify(o));
			} else return false;
		}

		return true;
	};
}




esper.ASTPreprocessor.prototype.find = function(sel) { return find(this.ast, sel); };
esper.ASTPreprocessor.ASTNode.prototype.find = function(sel) { return find(this, sel, this); };


module.exports = {
	find: find
};
