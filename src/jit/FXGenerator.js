'use strict';
const regenerator = require('regenerator');
const escodegen = require('escodegen');


module.exports = function(ast, scope) {
	console.log("----");
	console.log(escodegen.generate(ast));
	if ( regenerator && false ) {
		regenerator.transform(ast);
		console.log(escodegen.generate(ast));
	}
	let code = escodegen.generate(ast);
	let fkeys = Object.keys(scope);
	let fxargs = [].concat(fkeys, [code]);

	let svals = fkeys.map((v,k) => scope[v]);
	console.log(fkeys, svals);
	return Function.apply(null, fxargs).apply(null, svals);
};
