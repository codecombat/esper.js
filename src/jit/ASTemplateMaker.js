
'use strict';

var esprima = require('esprima');
var escodegen = require('escodegen');

let templateId = 0;
module.exports = function(fn) {
	++templateId;
	let astFx;

	if ( typeof fn === 'function' ) {
		let source = fn.toString();
		let parsed = esprima.parse(source);
		astFx = parsed.body[0];
	} else {
		astFx = fn;
	}

	let params = astFx.params.map((v,k) => v.name);

	let astParts = astFx.body;
	if ( astParts.body.length == 1 ) astParts = astParts.body[0];


	let xf = JSON.parse(JSON.stringify(astParts), (k, n) => {
		let c = n;
		if ( !c ) return n;
		if ( !c.type ) return n;
		if ( c.type === 'ExpressionStatement' && typeof  c.expression === 'string' ) return c.expression;
		if ( c.type !== 'Identifier' ) return n;
		if ( params.indexOf(c.name) === -1 ) return n;
		let s = c.name;
		return '%%%' + c.name + '%%%';
	});
	let str = JSON.stringify(xf, null, '    ');
	str = str.replace(/"%%%([^%"]+)%%%"/g, function(f, v) {
		if ( /^[_]/.test(v) ) {
			return '{type: "Literal", value: ' + v + '}';
		}
		if ( /^[$]/.test(v) ) return '{type: "Identifier", name: ' + v + '}';
		return v;
	});

	str = str.replace(/\$\$"/g, function(f, v) {
		return '$$' + templateId + '$" + idx';
	});

	//console.log(str);

	let out = new Function('var idx = 0; return function(' + params.join(',') + ') { ++idx; return ' + str + '; }');
	let idx = 0;

	return out();
};
