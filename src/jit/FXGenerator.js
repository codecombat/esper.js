'use strict';

const useRegenerator = typeof regeneratorRuntime !== 'undefined' && require('regenerator').transform;

const regenerator = useRegenerator ? require('regenerator') : false;
const escodegen = require('escodegen');


module.exports = function(ast, scope) {
	console.log("----");
	if ( useRegenerator ) {
		regenerator.transform(ast);
		if ( useRegenerator )scope['regeneratorRuntime'] = regeneratorRuntime;
	}

	let code = escodegen.generate(ast, {comment: true});
	console.log(code);
	let fkeys = Object.keys(scope);
	let fxargs = [].concat(fkeys, [code]);

	let svals = fkeys.map((v,k) => scope[v]);
	//console.log(fkeys, svals);
	return Function.apply(null, fxargs).apply(null, svals);
};
