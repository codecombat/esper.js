'use strict';

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');

const ObjectValue = require('../values/ObjectValue');

class AssertFunction extends ObjectValue {

	*rawCall(n, evalu, scope) {
		if ( n.arguments.length == 0 ) return Value.undef;
		let args = new Array(n.arguments.length);
		let why = '';
		let check = n.arguments[0];
		switch ( check.type ) {
			case 'BinaryExpression':
				let left = yield * evalu.branch(check.left, scope);
				let right = yield * evalu.branch(check.right, scope);
				args[0] = yield * evalu.doBinaryEvaluation(check.operator, left, right, scope);
				why = n.arguments[0].srcName + ' (' + left.debugString + ' ' + check.operator + ' ' + right.debugString + ')';
				break;
			default:
				why = (n.arguments[0].srcName || '???');
				args[0] = yield * evalu.branch(n.arguments[0], scope);
		}


		for ( let i = 1; i < args.length; ++i ) {
			args[i] = yield * evalu.branch(n.arguments[i], scope);
		}

		if ( args[0].truthy ) return Value.undef;
		if ( args.length > 1 ) why = yield * args[1].toStringNative();
		let err = scope.realm.Error.make(why, 'AssertionError');
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if ( args.length > 0 ) return Value.undef;
		if ( val.truthy ) return Value.undef;
		let reason = '';
		if ( args.length > 1 ) {
			reason = ( yield * args[1].toStringValue() ).toNative();
		} else if ( ext.callNode && ext.callNode.arguments[0] ) {
			reason = (ext.callNode.arguments[0].srcName || '???');
		}
		let err = scope.realm.Error.make(reason, 'AssertionError');
		return new CompletionRecord(CompletionRecord.THROW, err);
	}
}

module.exports = AssertFunction;
