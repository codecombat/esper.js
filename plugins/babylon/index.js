'use strict';
const babylon = require('babylon');
let Value;

function *evaluateClassProperty(clazz, proto, e, m, s) {
	let value = Value.undef;
	if ( m.value ) value = yield * e.branch(m.value, s);

	let ks;
	if ( m.computed ) {
		let k = yield * e.branch(m.key, s);
		ks = yield * k.toStringNative(e.realm);
	} else {
		ks = m.key.name;
	}


	if ( m.static ) clazz.setImmediate(ks, value);
	else proto.setImmediate(ks, value);
}

module.exports = {
	name: 'babylon',
	babylon: babylon,
	parser: function parser(code, options) {
		options = options || {};
		let opts = {loc: true, range: true};
		if ( options.inFunctionBody ) {
			opts.allowReturnOutsideFunction = true;
		}
		opts.plugins = ['flow', 'estree', 'classProperties', 'decorators'];
		let ast = babylon.parse(code, opts);
		let errors = [];
		if ( ast.errors ) {
			errors = ast.errors.filter((x) => {
				if ( options.inFunctionBody && x.message === 'Illegal return statement' ) return false;
			});
		}
		delete ast.errors;
		if ( errors.length > 0 ) throw errors[0];
		return ast.program;
	},
	init: function(esper) {
		Value = esper.Value;
		esper.languages.javascript = this;
		esper.EvaluatorHandlers.classFeatures.ClassProperty = evaluateClassProperty;
	}
};
