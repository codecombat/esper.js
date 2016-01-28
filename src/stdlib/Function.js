"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ClosureValue = require('../values/ClosureValue');
const CompletionRecord = require('../CompletionRecord');
const ASTPreprocessor = require('../ASTPreprocessor');

class Function extends EasyObjectValue {
	*call(thiz, args, env, scope) {
		let code = 'function name() {\n' + args[args.length - 1].toNative().toString() + '\n}';
		let ast;
		try {
			let oast = scope.env.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, e);
		}

		return new ClosureValue(ast.body[0], scope);
	}

	callPrototype(env) { return env.FunctionPrototype; }
	//objPrototype(env) { return env.Function; }
}

module.exports = Function;
