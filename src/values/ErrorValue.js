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
					extra.candidates = scope.getVariableNames();
					break;
				case 'CallNonFunction':
					let list;
					if ( extra.base && extra.base.getPropertyValueMap ) {
						list = extra.base.getPropertyValueMap();
					} else {
						list = scope.object.getPropertyValueMap();
					}

					extra.candidates = [];
					for ( let k in list ) {
						let v = list[k];
						if ( v && v.isCallable ) {
							extra.candidates.push(k);
						}
					}
					break;
				case 'IndexEmpty':
					break;
			}
		}
		if ( this.native ) {
			for ( var k in extra ) {
				if ( ['ast', 'scope', 'candidates', 'targetAst'].indexOf(k) !== -1 ) {
					Object.defineProperty(this.native, k, {
						value: extra[k],
						enumerable: false
					});
				} else {
					this.native[k] = extra[k];
				}
			}
		}
		this.extra = extra;
	}
}

module.exports = ErrorInstance;
