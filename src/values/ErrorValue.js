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
		let scope = evaluator.frames[0].scope;
		extra.ast = evaluator.frames[0].ast;
		extra.scope = scope;
		switch ( extra.type ) {
			case 'UndefinedVariable':
			case 'SmartAccessDenied':
				extra.canidates = scope.getVariableNames();
				break;
			case 'CallNonFunction':
				if ( extra.base && extra.base.properties ) extra.canidates = Object.keys(extra.base.properties);
				break;
		}
		this.extra = extra;
	}
}

module.exports = ErrorInstance;
