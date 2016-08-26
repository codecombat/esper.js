'use strict';
const esper = require('../..');
const esprima = require('esprima');
function parser(code, options) {
	options = options || {};
	let opts = {loc: true, range: true};
	if ( options.inFunctionBody ) {
		opts.tolerant = true;
		opts.allowReturnOutsideFunction = true;
	}

	let ast = esprima.parse(code, opts);
	let errors = [];
	if ( ast.errors ) {
		errors = ast.errors.filter((x) => {
			if ( options.inFunctionBody && x.message === 'Illegal return statement' ) return false;
		});
	}
	delete ast.errors;
	if ( errors.length > 0 ) throw errors[0];
	return ast;
}


esper.Realm.prototype.parser = parser;

module.exports = {
	esprima: esprima,
	parser: parser
};
