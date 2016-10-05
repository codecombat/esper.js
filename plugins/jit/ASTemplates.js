'use strict';

var template = require('./ASTemplateMaker.js');

exports.addN = template(function add(left, _right, $something) {
	let pooja = 2 * left + _right;
	$something[_right](pooja);
	return pooja;
});

exports.premble = template(function* premble(stuffToDo) {
	var state$$ = e.beforeNode(n);
	stuffToDo;

	if ( result instanceof CompletionRecord ) result = yield result;
	if ( result && result.then ) result = yield result;

	e.afterNode(state$$, result);
});

exports.V = template(function *V($target, _val) {
	$target = Value.fromNative(_val);
});

exports.undef = template(function *V($target, _val) {
	$target = Value.undef;
});

exports.i = template(function i($i) { $i });

exports.W = template(function W(body) {
	return function* fx(e,n,s) {
		var result = Value.undef;
		body;
		return result;
	}
});


exports.fallBack =  template(function *branch(_type, $n, $s) {
	var nextStep$$ = e.findNextStep(_type);
	result = yield * nextStep$$(e, $n, $s);
});

exports.evaluateIdentifier = template(function *evaluateIdentifier(_name) {
	if ( s.has(_name) ) result = s.get(_name);
	else result = yield * EvaluatorHandlers.evaluateIdentifier(e, n, s);
});

exports.assignNToVar = template(function *assignNToPartIndex($top) {
	var $top = n;
});

exports.assignNToPartIndex = template(function *assignNToPartIndex(_i, $top) {
	n = $top.body[_i];
});

exports.wrapHandoff = template(function wrapHandoff(_name, ast) {
	n = n[_name];
	ast;
});
