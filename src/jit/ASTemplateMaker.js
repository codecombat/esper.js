'use strict';

var esprima = require('esprima');
var escodegen = require('escodegen');

module.exports = function(fn) {
	let source = fn.toString();
	console.log(source);
	let parsed = esprima.parse(source);
	let astFx = parsed.body[0];
	let params = astFx.params.map((v,k) => v.name);

	let astParts = astFx.body;
	if ( astParts.body.length == 1 ) astParts = astParts.body[0];


	let xf = JSON.parse(JSON.stringify(astParts), (k, n) => {
		let c = n;
		if ( !c.type ) return n;
		if ( c.type === 'ExpressionStatement' ) n = c.expression;
		if ( c.type !== 'Identifier' ) return n;
		if ( params.indexOf(c.name) === -1 ) return n;
		let s = c.name;
		return '%%%' + c.name + '%%%';
	});
	let str = JSON.stringify(xf, null, '    ');
	str = str.replace(/"%%%([^%"]+)%%%"/g, function(f, v) {
		if ( /^[_]/.test(v) ) return '{type: "Literal", value: ' + v + '}';
		if ( /^[$]/.test(v) ) return '{type: "Identifier", name: ' + v + '}';
		return v;
	});
	params.push('return ' + str + ';');
	let out = Function.apply(null, params);
	return out;
};
