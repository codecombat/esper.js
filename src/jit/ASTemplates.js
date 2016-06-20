'use strict';

var template = require('./ASTemplateMaker.js');

exports.addN = template(function add(left, _right, $something) {
	let pooja = 2 * left + _right;
	$something[_right](pooja);
	return pooja;
});

exports.premble = template(function* premble(stuffToDo) {
	var tf$$ = e.topFrame;
	var oldAST$$ = tf$$.ast;
	stuffToDo;
	tf$$.ast = oldAST$$;
	tf$$.value = result;

	if ( result instanceof CompletionRecord ) result = yield result;
	if ( result && result.then ) result = yield result;

	tf$$.value = result;
	tf$$.ast = oldAST$$;
})

exports.V = template(function *V($target, _val) {
	$target = Value.fromNative(_val);
});

exports.i = template(function i($i) { $i });

exports.W = template(function W(body) {
	return function* fx(e,n,s) {
		var result = Value.undef;
		body;
		return result;
	}
});
