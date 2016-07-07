'use strict';

const Value = require('./Value');
const CompletionRecord = require('./CompletionRecord');
const ClosureValue = require('./values/ClosureValue');
const ObjectValue = require('./values/ObjectValue');
const FutureValue = require('./values/FutureValue');
const RegExpValue = require('./values/RegExpValue');
const PropertyDescriptor = require('./values/PropertyDescriptor');
const ErrorValue = require('./values/ErrorValue');
const ArrayValue = require('./values/ArrayValue');
const EvaluatorInstruction = require('./EvaluatorInstruction');



function *evaluateArrayExpression(e, n, s) {
	//let result = new ObjectValue();
	let result = new Array(n.elements.length);
	for ( let i = 0; i < n.elements.length; ++i ) {
		if ( n.elements[i] ) {
			result[i] = yield * e.branch(n.elements[i],s);
		}
	}
	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMinor;
	return ArrayValue.make(result, e.realm);
}

function *evaluateAssignmentExpression(e, n, s) {
	//TODO: Account for not-strict mode
	var realm = s.realm;
	let ref = yield * e.resolveRef(n.left, s, n.operator === '=');

	if ( !ref && s.strict ) {
		return CompletionRecord.makeReferenceError(s.realm, `Invalid refrence in assignment.`);
	}

	let argument = yield * e.branch(n.right, s);
	let value;
	let cur;
	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMinor;
	switch ( n.operator ) {
		case '=':
			value = argument;
			break;
		case '+=':
			cur = yield * ref.getValue();
			value = yield * cur.add(argument, realm);
			break;
		case '-=':
			cur = yield * ref.getValue();
			value = yield * cur.subtract(argument, realm);
			break;
		case '*=':
			cur = yield * ref.getValue();
			value = yield * cur.multiply(argument, realm);
			break;
		case '/=':
			cur = yield * ref.getValue();
			value = yield * cur.divide(argument, realm);
			break;
		case '%=':
			cur = yield * ref.getValue();
			value = yield * cur.mod(argument, realm);
			break;
		case '<<=':
			cur = yield * ref.getValue();
			value = yield * cur.shiftLeft(argument, realm);
			break;
		case '>>=':
			cur = yield * ref.getValue();
			value = yield * cur.shiftRight(argument, realm);
			break;
		case '>>>=':
			cur = yield * ref.getValue();
			value = yield * cur.shiftRightZF(argument, realm);
			break;
		case '|=':
			cur = yield * ref.getValue();
			value = yield * cur.bitOr(argument, realm);
			break;
		case '&=':
			cur = yield * ref.getValue();
			value = yield * cur.bitAnd(argument, realm);
			break;
		case '^=':
			cur = yield * ref.getValue();
			value = yield * cur.bitXor(argument, realm);
			break;
		default:
			throw new Error('Unknown assignment operator: ' + n.operator);
	}

	if ( ref ) {
		yield * ref.setValue(value, s);
	} else {
		yield * s.put(n.left.name, value, s);
	}

	return value;
}

function *evaulateBinaryExpression(e, n, s) {
	let left = yield * e.branch(n.left,s);
	let right = yield * e.branch(n.right,s);
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	return yield * e.doBinaryEvaluation(n.operator, left, right, s);
}

function *evaluateBlockStatement(e, n, s) {
	let result = Value.undef;
	for ( let statement of n.body ) {
		result = yield * e.branch(statement,s);
	}
	return result;
}


function *evaluateBreakStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	if ( e.yieldPower >= 1 ) yield EvaluatorInstruction.stepMinor;
	return new CompletionRecord(CompletionRecord.BREAK, Value.undef, label);
}


function *evaluateCallExpression(e, n, s) {
	let thiz = Value.undef;

	let callee, base;

	if ( n.callee.type === 'MemberExpression' ) {
		thiz = base = yield * e.branch(n.callee.object, s);
		callee = yield * e.partialMemberExpression(thiz, n.callee, s);
		if ( callee instanceof CompletionRecord ) {
			if ( callee.type == CompletionRecord.THROW ) return callee;
			callee = callee.value;
		}
	} else {
		callee = yield * e.branch(n.callee, s);
	}

	if ( n.type === 'NewExpression' ) {
		thiz = yield * callee.makeThisForNew(s.realm);
		if ( thiz instanceof CompletionRecord ) {
			if ( thiz.type == CompletionRecord.THROW ) return thiz;
			thiz = thiz.value;
		}
	}

	if ( typeof callee.rawCall === 'function' ) {
		return yield * callee.rawCall(n, e, s);
	}

	//console.log("Calling", callee, callee.call);

	let args = new Array(n.arguments.length);
	for ( let i = 0; i < n.arguments.length; ++i ) {
		args[i] = yield * e.branch(n.arguments[i],s);
	}

	let name = n.callee.srcName || callee.jsTypeName;

	if ( e.yieldPower >= 1 ) yield EvaluatorInstruction.stepMajor;

	if ( !callee.isCallable ) {
		let err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
		yield * err.addExtra({
			code: 'CallNonFunction',
			target: callee,
			targetAst: n.callee,
			targetName: name,
			base: base
		});
		return err;
	}

	if ( e.debug ) {
		e.incrCtr('fxInvocationCount', n.callee.srcName);
	}

	let callResult = callee.call(thiz, args, s, {
		asConstructor: n.type === 'NewExpression',
		callNode: n,
		evaluator: e
	});

	if ( callResult instanceof CompletionRecord ) return callResult;

	if ( typeof callResult.next !== 'function' ) {
		console.log('Generator Failure', callResult);
		return CompletionRecord.makeTypeError(e.realm, '' + name + ' didnt make a generator');
	}

	let result = yield * callResult;
	if ( n.type === 'NewExpression' ) {
		//TODO: If a constructor returns, you actually use that value
		if ( result instanceof Value ) {
			if ( result.specTypeName === 'undefined' ) return thiz;
			return result;
		}
		return thiz;
	} else {
		return result;
	}
}

function *evaluateClassExpression(e, n, s) {
	let clazz = new ObjectValue(e.realm);
	clazz.call = function*() { return Value.undef; };

	let proto = new ObjectValue(e.realm);
	yield * clazz.set('prototype', proto);
	yield * proto.set('constructor', clazz);

	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMinor;
	for ( let m of n.body.body ) {
		let fx = yield * e.branch(m.value, s);

		//TODO: Support getters and setters
		if ( m.kind == 'constructor' ) {
			clazz.call = function*(thiz, args, s) { return yield * fx.call(thiz,args,s); };

		} else {
			let ks;
			if ( m.computed ) {
				let k = yield * e.branch(m.key, s);
				ks = yield * k.toStringNative(e.realm);
			} else {
				ks = m.key.name;
			}

			if ( m.static ) clazz.setImmediate(ks, fx);
			else proto.setImmediate(ks, fx);
		}
	}
	return clazz;
}

function *evaluateClassDeclaration(e, n, s) {
	let clazz = yield * evaluateClassExpression(e, n, s);
	yield * s.put(n.id.name, clazz);
	return clazz;
}

function *evaluateConditionalExpression(e, n, s) {
	let test = yield * e.branch(n.test, s);
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	if ( test.truthy ) {
		return yield * e.branch(n.consequent, s);
	} else {
		if ( n.alternate ) {
			return yield * e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}


function *evaluateContinueStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	let val = new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);
	if ( e.yieldPower >= 1 ) yield EvaluatorInstruction.stepMinor;
	return val;
}

function *evaluateDoWhileStatement(e, n, s) {
	let last = Value.undef;
	let that = e;
	var gen = function*() {
		do {
			last = yield that.branchFrame('continue', n.body, s, {label: n.label});
		} while ( (yield * that.branch(n.test,s)).truthy );
	};
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMinor;
	e.pushFrame({generator: gen(), type: 'loop', label: n.label, ast: n});


	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function *evaluateEmptyStatement(e, n, s) {
	if ( e.yieldPower >= 5 ) yield EvaluatorInstruction.stepMinor;
	return Value.undef;
}

function *evaluateExpressionStatement(e, n, s) {
	if ( e.yieldPower > 4 ) yield EvaluatorInstruction.stepMinor;
	return yield * e.branch(n.expression,s);
}

function *evaluateIdentifier(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	if ( n.name === 'undefined' ) return Value.undef;
	if ( !s.has(n.name) ) {
		// Allow undeclared varibles to be null?
		if ( false ) return Value.undef;
		let err = CompletionRecord.makeReferenceError(e.realm, `${n.name} is not defined`);
		yield * err.addExtra({code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict});
		return yield err;
	}
	return s.get(n.name);
}

function *evaluateIfStatement(e, n, s) {
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepStatement;
	let test = yield * e.branch(n.test, s);
	if ( test.truthy ) {
		return yield * e.branch(n.consequent, s);
	} else {
		if ( n.alternate ) {
			return yield * e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}

function* genForLoop(e, n, s) {
	let test = Value.true;
	if ( n.test ) test = yield * e.branch(n.test,s);
	let last = Value.undef;
	while ( test.truthy ) {
		e.topFrame.ast = n;
		if ( e.yieldPower > 0 ) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, s, {label: n.label});
		if ( n.update ) yield * e.branch(n.update,s);
		if ( n.test ) test = yield * e.branch(n.test,s);
	}
};

function *evaluateForStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepStatement;
	if ( n.init ) yield * e.branch(n.init,s);

	e.pushFrame({generator: genForLoop(e, n, s), type: 'loop', label: n.label, ast: n});


	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function *evaluateForInStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield * e.branch(n.right,s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;

	if ( n.left.type === 'VariableDeclaration' ) {
		s.add(n.left.declarations[0].id.name, Value.undef);
		ref = s.ref(n.left.declarations[0].id.name, s.realm);
	} else {
		ref = s.ref(n.left.name, s.realm);
	}

	var gen = function*() {
		for ( let name of names ) {
			yield * ref.setValue(name);
			last = yield that.branchFrame('continue', n.body, s, {label: n.label});
		}
	};
	e.pushFrame({generator: gen(), type: 'loop', label: n.label, ast: n});


	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

//TODO: For of does more crazy Symbol iterator stuff
function *evaluateForOfStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield * e.branch(n.right,s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;

	if ( n.left.type === 'VariableDeclaration' ) {
		yield * s.put(n.left.declarations[0].id.name, Value.undef);
		ref = s.ref(n.left.declarations[0].id.name, s.realm);
	} else {
		ref = s.ref(n.left.name, s.realm);
	}

	var gen = function*() {
		for ( let name of names ) {
			yield * ref.setValue(yield * object.get(yield * name.toStringNative()));
			last = yield that.branchFrame('continue', n.body, s, {label: n.label});
		}
	};
	e.pushFrame({generator: gen(), type: 'loop', label: n.label});


	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function *evaluateFunctionDeclaration(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMajor;
	let closure = new ClosureValue(n, s);
	s.add(n.id.name, closure);
	return Value.undef;
}

function *evaluateFunctionExpression(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMajor;
	let value = new ClosureValue(n, s);
	if ( n.type === 'ArrowFunctionExpression' ) {
		value.thiz = s.thiz;
		if ( n.expression ) value.returnLastValue = true;
	}
	return value;
}

function *evaluateLabeledStatement(e, n, s) {
	if ( e.yieldPower >= 5 ) yield EvaluatorInstruction.stepMinor;
	return yield * e.branch(n.body, s);
}

function *evaulateLiteral(e, n, s) {
	if ( e.yieldPower >= 5 ) yield EvaluatorInstruction.stepMinor;
	if ( n.regex ) {
		return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm);
	} else if ( n.value === null ) {
		if ( e.raw === 'null' ) return Value.null;

		//Work around Esprima turning Infinity into null. =\
		let tryFloat = parseFloat(n.raw);
		if ( !isNaN(tryFloat) ) return e.fromNative(tryFloat);
		return e.fromNative(null);
	} else {
		return e.fromNative(n.value);
	}
}

function *evaluateLogicalExpression(e, n, s) {
	let left = yield * e.branch(n.left,s);
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	switch ( n.operator ) {
		case '&&':
			if ( left.truthy ) return yield * e.branch(n.right,s);
			return left;
		case '||':
			if ( left.truthy ) return left;
			return yield * e.branch(n.right,s);
		default:
			throw new Error('Unknown logical operator: ' + n.operator);
	}

}

function *evaluateMemberExpression(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	let left = yield * e.branch(n.object,s);
	return yield * e.partialMemberExpression(left, n, s);
}

function *evaluateObjectExpression(e, n, s) {
	//TODO: Need to wire up native prototype
	var nat = new ObjectValue(s.realm);
	for ( let i = 0; i < n.properties.length; ++i ) {
		let prop = n.properties[i];
		let key;
		if ( n.computed ) {
			key = (yield * e.branch(prop.key, s)).toNative().toString();
		} else if ( prop.key.type == 'Identifier') {
			key = prop.key.name;
		} else if ( prop.key.type == 'Literal' ) {
			key = prop.key.value.toString();
		}

		let value = yield * e.branch(prop.value, s);
		let pd;

		if ( Object.prototype.hasOwnProperty.call(nat.properties, key) ) {
			pd = nat.properties[key];
		} else {
			pd = new PropertyDescriptor(Value.undef);
			nat.rawSetProperty(key, pd);
		}

		switch ( prop.kind  ) {
			case 'init':
			default:
				pd.value = value;
				break;
			case 'get':
				pd.getter = value;
				break;
			case 'set':
				pd.setter = value;
				break;
		}

	}
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMajor;
	return nat;
}

function *evaluateProgram(e, n, s) {
	let result = Value.undef;
	if ( n.vars )
	for ( var v in n.vars ) {
		s.add(v, Value.undef);
	}
	if ( n.strict === true ) s.strict = true;
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	for ( let statement of n.body ) {
		result = yield * e.branch(statement, s);
	}
	return result;
}

function *evaluateReturnStatement(e, n, s) {
	let retVal = Value.undef;
	if ( n.argument ) retVal = yield * e.branch(n.argument,s);
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.RETURN, retVal);
}

function *evaluateSequenceExpression(e, n, s) {
	let last = Value.undef;
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	for ( let expr of n.expressions ) {
		last = yield * e.branch(expr,s);
	}
	return last;
}

function *evaluateSwitchStatement(e, n, s) {
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepMajor;
	let discriminant = yield * e.branch(n.discriminant, s);
	let last = Value.undef;
	let matches = 0;
	let matchVals = new Array(n.cases.length);
	let matched = false;

	for ( let i = 0; i < n.cases.length; ++i ) {
		let cas = n.cases[i];
		if ( cas.test ) {
			let testval = yield * e.branch(cas.test, s);
			let equality = yield * testval.tripleEquals(discriminant);
			if ( equality.truthy ) ++matches;
			matchVals[i] = equality.truthy;
		}
	}


	let genSwitch = function*(e, n) {

		for ( let i = 0; i < n.cases.length; ++i ) {
			let cas = n.cases[i];
			if ( !matched ) {
				if ( cas.test ) {
					if ( !matchVals[i] ) continue;
				} else {
					if ( matches !== 0 ) continue;
				}
				matched = true;
			}
			for ( let statement of cas.consequent ) {
				last = yield * e.branch(statement, s);
			}
		}
	};

	e.pushFrame({generator: genSwitch(e, n), type: 'loop', label: n.label});
	let finished = yield EvaluatorInstruction.waitForFramePop;

	return last;
}

function *evaluateThisExpression(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	if ( s.thiz ) return s.thiz;
	else return Value.undef;
}

function *evaluateThrowStatement(e, n, s) {
	let value = yield * e.branch(n.argument, s);
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.THROW, value);
}

function *evaluateTryStatement(e, n, s) {
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepMajor;
	if ( n.finalizer ) e.pushFrame({generator: e.branch(n.finalizer,s), type: 'finally', scope: s});
	let result = yield e.branchFrame('catch', n.block, s);
	if ( result instanceof CompletionRecord && result.type == CompletionRecord.THROW ) {
		if ( !n.handler ) {
			//console.log("No catch..., throwing", result.obj);
			return result;
		}
		let handlerScope = s.createChild();
		handlerScope.add(n.handler.param.name, result.value);
		return yield * e.branch(n.handler.body, handlerScope);
	}
	return result;
}

function *evaluateUpdateExpression(e, n, s) {
	//TODO: Need to support something like ++x[1];
	let nue;
	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMajor;
	let ref = yield * e.resolveRef(n.argument, s, true);
	let old = Value.nan;

	if ( ref ) old = yield * ref.getValue();
	if ( old === undefined ) old = Value.nan;
	switch (n.operator) {
		case '++': nue = yield * old.add(e.fromNative(1)); break;
		case '--': nue = yield * old.subtract(e.fromNative(1)); break;
		default: throw new Error('Unknown update expression type: ' + n.operator);
	}
	if ( ref ) yield * ref.setValue(nue, s);

	if ( n.prefix ) return nue;
	return old;
}

function *evaulateUnaryExpression(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	if ( n.operator === 'delete' ) {
		if ( n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier' ) {
			//e isnt something you can delete?
			return Value.true;
		}

		let ref = yield * e.resolveRef(n.argument, s);
		if ( !ref ) return Value.false;
		if ( ref.isVariable ) { return Value.false; }
		let worked = ref.del(s);
		if ( worked instanceof CompletionRecord ) return yield worked;
		return Value.fromNative(worked);
	}

	if ( n.operator === 'typeof' ) {
		if ( n.argument.type == 'Identifier' ) {
			if ( !s.has(n.argument.name) ) return yield * Value.undef.typeOf();
		}
	}

	let left = yield * e.branch(n.argument,s);
	switch ( n.operator ) {
		case '-': return yield * left.unaryMinus();
		case '+': return yield * left.unaryPlus();
		case '!': return yield * left.not();
		case '~': return yield * left.bitNot();
		case 'typeof': return yield * left.typeOf();
		case 'void': return Value.undef;
		default:
			throw new Error('Unknown binary operator: ' + n.operator);
	}
}

function *evaluateVariableDeclaration(e, n, s) {
	let kind = n.kind;
	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMajor;
	for ( let decl of n.declarations ) {
		let value = Value.undef;
		if ( decl.init ) value = yield * e.branch(decl.init,s);
		else if ( s.has(decl.id.name) ) continue;

		if ( kind === 'const' ) {
			s.addConst(decl.id.name, value);
		} else {
			s.add(decl.id.name, value);
		}
	}
	return Value.undef;
}

function* genWhileLoop(e, n, s) {
	let last = Value.undef;
	while ( (yield * e.branch(n.test,s)).truthy ) {
		e.topFrame.ast = n;
		if ( e.yieldPower > 0 ) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, s);
	}
}

function *evaluateWhileStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMajor;
	e.pushFrame({generator: genWhileLoop(e, n, s), type: 'loop', label: n.label, ast: n});
	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function *evaluateWithStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepMajor;
	if ( s.strict ) return CompletionRecord.makeSyntaxError(e.realm, 'Strict mode code may not include a with statement');
	return CompletionRecord.makeSyntaxError(e.realm, 'With statement not supported by esper');
}

function findNextStep(type) {
	switch ( type ) {
		case 'ArrayExpression': return evaluateArrayExpression;
		case 'ArrowFunctionExpression': return evaluateFunctionExpression;
		case 'AssignmentExpression': return evaluateAssignmentExpression;
		case 'BinaryExpression': return evaulateBinaryExpression;
		case 'BreakStatement': return evaluateBreakStatement;
		case 'BlockStatement': return evaluateBlockStatement;
		case 'CallExpression': return evaluateCallExpression;
		case 'ClassDeclaration': return evaluateClassDeclaration;
		case 'ClassExpression': return evaluateClassExpression;
		case 'ConditionalExpression': return evaluateConditionalExpression;
		case 'DebuggerStatement': return evaluateEmptyStatement;
		case 'DoWhileStatement': return evaluateDoWhileStatement;
		case 'ContinueStatement': return evaluateContinueStatement;
		case 'EmptyStatement': return evaluateEmptyStatement;
		case 'ExpressionStatement': return evaluateExpressionStatement;
		case 'ForStatement': return evaluateForStatement;
		case 'ForInStatement': return evaluateForInStatement;
		case 'ForOfStatement': return evaluateForOfStatement;
		case 'FunctionDeclaration': return evaluateFunctionDeclaration;
		case 'FunctionExpression': return evaluateFunctionExpression;
		case 'Identifier': return evaluateIdentifier;
		case 'IfStatement': return evaluateIfStatement;
		case 'LabeledStatement': return evaluateLabeledStatement;
		case 'Literal': return evaulateLiteral;
		case 'LogicalExpression': return evaluateLogicalExpression;
		case 'MemberExpression': return evaluateMemberExpression;
		case 'NewExpression': return evaluateCallExpression;
		case 'ObjectExpression': return evaluateObjectExpression;
		case 'Program': return evaluateProgram;
		case 'ReturnStatement': return evaluateReturnStatement;
		case 'SequenceExpression': return evaluateSequenceExpression;
		case 'SwitchStatement': return evaluateSwitchStatement;
		case 'ThisExpression': return evaluateThisExpression;
		case 'ThrowStatement': return evaluateThrowStatement;
		case 'TryStatement': return evaluateTryStatement;
		case 'UnaryExpression': return evaulateUnaryExpression;
		case 'UpdateExpression': return evaluateUpdateExpression;
		case 'VariableDeclaration': return evaluateVariableDeclaration;
		case 'WhileStatement': return evaluateWhileStatement;
		case 'WithStatement': return evaluateWithStatement;
		default:
			throw new Error('Unknown AST Node Type: ' + type);
	}
}

module.exports = findNextStep;

