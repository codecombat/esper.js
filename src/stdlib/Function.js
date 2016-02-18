"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ClosureValue = require('../values/ClosureValue');
const CompletionRecord = require('../CompletionRecord');
const ASTPreprocessor = require('../ASTPreprocessor');
const Variable = require('../values/Variable');

class FunctionObject extends EasyObjectValue {
	*call(thiz, args, scope) {
		let an = new Array(args.length - 1);
		for ( let i = 0; i < args.length - 1; ++i ) {
			an[i] = (yield * args[i].toStringValue()).toNative();
		}
		let code = 'function name(' + an.join(', ') + ') {\n' + args[args.length - 1].toNative().toString() + '\n}';
		let ast;
		try {
			let oast = scope.env.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, e);
		}

		return new ClosureValue(ast.body[0], scope.env.globalScope);
	}

	_init() {
		super._init();
		let cs = new Variable(this);
		cs.configurable = false;
		cs.enumerable = false;
		this.properties['constructor'] = cs;
	}

	callPrototype(env) { return env.FunctionPrototype; }
	//objPrototype(env) { return env.Function; }
}

module.exports = FunctionObject;
