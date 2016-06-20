'use strict';

var template = require('./ASTemplateMaker.js');

exports.addN = template(function add(left, _right, $something) {
	let pooja = 2 * left + _right;
	$something[_right](pooja);
	return pooja;
});
exports.branch = template(function add($what) {
	let oldAST = e.topFrame.ast;
	$what;
	e.topFrame.ast = oldAST;
});
exports.V = template(function *V(_val) {
	yield * Value.fromNative(_val);
});
exports.i = template(function i($i) { $i });
