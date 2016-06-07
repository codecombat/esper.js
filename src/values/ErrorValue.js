'use strict';


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');
const EvaluatorInstruction = require('../EvaluatorInstruction');

class ErrorInstance extends ObjectValue {
	createNativeAnalog() {
		if ( !this.native ) {
			let NativeClass = this.proto.nativeClass || Error;
			this.native = new NativeClass();

			let frames = this.native.stack.split(/\n/);
			let header = frames.shift();
			while ( /at (ErrorInstance.createNativeAnalog|ErrorObject.make|Function.makeTypeError)/.test(frames[0]) ) {
				frames.shift();
			}
			this.native.stack = header + '\n' + frames.join('\n');
			for ( var k in this.extra ) this.native[k] = this.extra[k];

		}
		return this.native;
	}
	toNative() {
		let out = this.createNativeAnalog();
		let msg = this.properties['message'].value;
		if ( msg ) out.message = msg.toNative();

		if ( this.properties['stack'] ) {
			msg.stack = this.properties['stack'].value.native;
		}

		return out;
	}

	*addExtra(extra) {
		if ( !this.realm.options.extraErrorInfo ) return;
		let evaluator = yield EvaluatorInstruction.getEvaluator();
		if ( evaluator ) {
			let scope = evaluator.topFrame.scope;
			let ast = extra.ast = evaluator.topFrame.ast;
			extra.scope = scope;

			if ( extra.ast.loc ) {
				extra.line = extra.ast.loc.start.line;
			}

			switch ( extra.code ) {
				case 'UndefinedVariable':
				case 'SmartAccessDenied':
					extra.canidates = scope.getVariableNames();
					break;
				case 'CallNonFunction':
					if ( extra.base && extra.base.properties ) {
						//TODO: This doesnt take the prototype into account.
						extra.canidates = Object.keys(extra.base.properties);
					}
					break;
				case 'IndexEmpty':
					break;
			}
		}
		if ( this.native ) {
			for ( var k in extra ) this.native[k] = extra[k];
		}
		this.extra = extra;
	}
}

module.exports = ErrorInstance;
