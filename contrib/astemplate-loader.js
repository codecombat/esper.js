'use strict';

var fs = require('fs');
var path = require('path');
var esprima = require('esprima');
var escodegen = require('escodegen');


module.exports = function(content) {
	
	var ast = esprima.parse(content);
	
	for ( var i = 0; i < ast.body.length; ++i ) {
		let tn = ast.body[i];
		if ( tn.type !== 'ExpressionStatement' ) continue;
		tn = tn.expression;
		if ( tn.type !== 'AssignmentExpression' ) continue;
		if ( tn.right.type !== 'CallExpression' ) continue;
		if ( tn.right.callee.name !== 'template' ) continue;

		let fx = tn.right.arguments[0];
		let src = JSON.stringify(fx);
		console.log(src);
		let srcast = esprima.parse('template(' + src + ')');
		tn.right = srcast.body[0];
	}

	var out = escodegen.generate(ast);
	console.log(out);
	return out;
};
