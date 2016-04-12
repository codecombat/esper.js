'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ClosureValue = require('../values/ClosureValue');
const CompletionRecord = require('../CompletionRecord');
const ASTPreprocessor = require('../ASTPreprocessor');
const PropertyDescriptor = require('../values/PropertyDescriptor');

class FunctionObject extends EasyObjectValue {
	*call(thiz, args, scope) {
		let an = new Array(args.length - 1);
		for ( let i = 0; i < args.length - 1; ++i ) {
			an[i] = (yield * args[i].toStringValue()).toNative();
		}
		let code = 'function name(' + an.join(', ') + ') {\n' + args[args.length - 1].toNative().toString() + '\n}';
		let ast;
		try {
			let oast = scope.realm.parser(code, {loc: true});
			ast = ASTPreprocessor.process(oast);
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, e);
		}

		let fn = new ClosureValue(ast.body[0], scope.global);
		fn.boundScope = scope.global;
		return fn;
	}

	_init(realm) {
		super._init(realm);
		let cs = new PropertyDescriptor(this);
		cs.configurable = false;
		cs.enumerable = false;
		this.properties['constructor'] = cs;
	}

	callPrototype(realm) { return realm.FunctionPrototype; }
	get callLength() { return 1; }
	//objPrototype(realm) { return realm.Function; }
}

module.exports = FunctionObject;
