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
			result[i] = yield * e.branch(n.elements[i], s);
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
		case '**=':
			cur = yield * ref.getValue();
			value = yield * cur.pow(argument, realm);
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

function *evaluateBinaryExpression(e, n, s) {
	if ( n.operator == '&&' || n.operator == '||' ) {
		return yield* evaluateLogicalExpression(e, n, s);
	}
	let left = yield * e.branch(n.left, s);
	let right = yield * e.branch(n.right, s);
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	return yield * e.doBinaryEvaluation(n.operator, left, right, s);
}

function *evaluateBlockStatement(e, n, s) {
	let result = Value.undef;
	let ss = s.createBlockChild();
	for ( let statement of n.body ) {
		if ( statement.type != "FunctionDeclaration" ) continue;
		result = yield * e.branch(statement, ss);
	}

	for ( let statement of n.body ) {
		if ( statement.type == "FunctionDeclaration" ) continue;
		result = yield * e.branch(statement, ss);
	}
	return result;
}


function *evaluateBreakStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	if ( e.yieldPower >= 1 ) yield EvaluatorInstruction.stepMinor;
	return new CompletionRecord(CompletionRecord.BREAK, Value.undef, label);
}


function *evaluateCallExpression(e, n, s) {
	return yield * doCall(e, n, n.callee, s, function*() {
		let args = new Array(n.arguments.length);
		for ( let i = 0; i < n.arguments.length; ++i ) {
			args[i] = yield * e.branch(n.arguments[i], s);
		}
		return args;
	});
}

function *doCall(e, n, c, s, argProvider) {
	let thiz = s.strict ? Value.undef : s.global.thiz;

	let callee, base;

	if ( c.type == 'Super') {
		callee = yield * e.branch(c, s);
		thiz = s.thiz;
	} else if ( c.type === 'MemberExpression' ) {
		thiz = base = yield * e.branch(c.object, s);
		callee = yield * e.partialMemberExpression(thiz, c, s);
		if ( c.object.type == "Super" ) thiz = s.thiz;
		if ( callee instanceof CompletionRecord ) {
			if ( callee.type == CompletionRecord.THROW ) return callee;
			callee = callee.value;
		}
	} else {
		callee = yield * e.branch(c, s);
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

	let args = yield * argProvider();

	let name = c.srcName || c.source() || callee.jsTypeName;

	if ( e.yieldPower >= 1 ) yield EvaluatorInstruction.stepMajor;

	if ( !callee.isCallable ) {
		let err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
		yield * err.addExtra({
			code: 'CallNonFunction',
			target: callee,
			targetAst: c,
			targetName: name,
			base: base
		});
		return err;
	}

	if ( e.debug ) {
		e.incrCtr('fxInvocationCount', c.srcName);
	}

	let callResult = callee.call(thiz, args, s, {
		asConstructor: n.type === 'NewExpression',
		callNode: n,
		evaluator: e,
		callee: callee
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

let classFeatures = {};
function* addMethodFnToClass(fx, clazz, proto, e, m, s) {
	if ( m.kind == 'constructor' ) {
		//Special handling for this below.
	} else {
		let ks;
		fx.funcSourceAST = m;
		if ( m.computed ) {
			let k = yield * e.branch(m.key, s);
			ks = yield * k.toStringNative(e.realm);
		} else {
			ks = m.key.name;
		}

		let pd;

		if ( m.static ) {
			fx.superTarget = clazz.getPrototype();
			if ( Object.prototype.hasOwnProperty.call(clazz.properties, ks) ) {
				pd = clazz.properties[ks];
			} else {
				pd = new PropertyDescriptor(Value.undef);
				clazz.rawSetProperty(ks, pd);
			}
		} else {
			fx.superTarget = proto.getPrototype();
			if ( Object.prototype.hasOwnProperty.call(proto.properties, ks) ) {
				pd = proto.properties[ks];
			} else {
				pd = new PropertyDescriptor(Value.undef);
				proto.rawSetProperty(ks, pd);
			}
		}
		switch (m.kind) {
			case 'set':
				pd.setter = fx;
				break;
			case 'get':
				pd.getter = fx;
				break;
			case 'method':
				pd.value = fx;
				break;
		}
	}
	return Value.undef;
}
classFeatures.MethodDefinition = function*(clazz, proto, e, m, s) {
	yield * addMethodFnToClass(yield * e.branch(m.value, s), clazz, proto, e, m, s);
};
classFeatures.ClassMethod = function*(clazz, proto, e, m, s) {
	let fx = yield * evaluateFunctionExpression(e, m, s);
	return yield * addMethodFnToClass(fx, clazz, proto, e, {
		kind: m.kind,
		static: m.static,
		key: m.key,
	}, s);

};
classFeatures.EmptyStatement = function*() { return Value.undef; }

function *evaluateClassExpression(e, n, s) {
	let clazz = undefined;
	for ( let m of n.body.body ) {
		if ( m.type == "MethodDefinition" && m.kind == "constructor") {
			clazz = yield * e.branch(m.value, s);
			clazz.superTarget = clazz;
			clazz.funcSourceAST = n;
			break;
		}
	}

	let sc;
	if ( n.superClass ) {
		sc = yield * e.branch(n.superClass, s);
	}

	if ( !clazz ) {
		clazz = new ObjectValue(e.realm);
		if ( sc ) {
			clazz.call = function*(thiz, args, scope, extra) {
				yield * sc.call(thiz, args, scope, extra);
				return Value.undef;
			}
		} else {
			clazz.call = function*() { return Value.undef; };
		}
	}
	

	let proto = new ObjectValue(e.realm);
	yield * clazz.set('prototype', proto);
	yield * clazz.set('name', Value.fromNative(n.id.name));
	yield * proto.set('constructor', clazz);

	if ( sc ) {
		clazz.setPrototype(sc);
		proto.setPrototype(sc.getPrototypeProperty());
		clazz.parentClassInstance = sc;
	}
	clazz.superTarget = clazz.getPrototype();

	s.add(n.id.name, clazz);

	if ( e.yieldPower >= 3 ) yield EvaluatorInstruction.stepMinor;
	for ( let m of n.body.body ) {
		if ( ! module.exports.classFeatures[m.type] ) throw new Error("Unsuported Class Feature " + m.type)
		yield * module.exports.classFeatures[m.type](clazz, proto, e, m, s);
		//TODO: Support getters and setters
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
		} while ( (yield * that.branch(n.test, s)).truthy );
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
	return yield * e.branch(n.expression, s);
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

function *evaluateImportDeclaration(e, n, s ) {
	return Value.undef;
}

function* genForLoop(e, n, s) {
	let test = Value.true;
	
	let createPerIterationEnvironment = (n.init && n.init.kind == 'let') ? (p) => {
		let is = s.createChild();
		for ( let dec of n.init.declarations ) {
			is.addBlock(dec.id.name, p.get(dec.id.name));
		}
		return is;
	} : (p) => p;

	let is = createPerIterationEnvironment(s);
	if ( n.test ) test = yield * e.branch(n.test, s);
	let last = Value.undef;
	while ( test.truthy ) {
		e.topFrame.ast = n;
		if ( e.yieldPower > 0 ) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, is, {label: n.label});
		is = createPerIterationEnvironment(is);
		if ( n.update ) yield * e.branch(n.update, is);
		if ( n.test ) test = yield * e.branch(n.test, is);
	}
};

function *evaluateForStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepStatement;
	if ( n.init ) yield * e.branch(n.init, s);

	e.pushFrame({generator: genForLoop(e, n, s), type: 'loop', label: n.label, ast: n});


	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function *evaluateForInStatement(e, n, s) {
	if ( e.yieldPower > 0 ) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield * e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();

	if ( n.left.type === 'VariableDeclaration' ) {
		let decl = n.left.declarations[0];
		if ( decl.kind == 'var') s.add(decl.id.name, Value.undef);
		else s.addBlock(decl.id.name, Value.undef);
		ref = s.ref(decl.id.name, s);
	} else {
		ref = s.ref(n.left.name, s);
	}
	if ( !ref ) {
		if ( s.strict ) return CompletionRecord.makeReferenceError(s.realm, `${n.left.name} is not defined`);
		//Create an var in global scope if varialbe doesnt exist and not in strict mode.
		s.global.add(n.left.name, Value.undef)
		ref = s.ref(n.left.name);
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
	let object = yield * e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();
	if ( n.left.type === 'VariableDeclaration' ) {
		let decl = n.left.declarations[0];
		if ( decl.kind == 'var') s.add(decl.id.name, Value.undef);
		else s.addBlock(decl.id.name, Value.undef);
		//yield * s.put(n.left.declarations[0].id.name, Value.undef);
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

function *evaluateLiteral(e, n, s) {
	if ( e.yieldPower >= 5 ) yield EvaluatorInstruction.stepMinor;
	if ( n.regex ) {
		return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm);
	} else if ( n.value === null ) {
		if ( e.raw === 'null' ) return Value.null;

		//Work around Esprima turning Infinity into null. =\
		let tryFloat = parseFloat(n.raw);
		if ( !isNaN(tryFloat) ) return e.fromNative(tryFloat, n);
		return e.fromNative(null, n);
	} else {
		return e.realm.makeLiteralValue(n.value, n);
	}
}

function *evaluateLogicalExpression(e, n, s) {
	let left = yield * e.branch(n.left, s);
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	switch ( n.operator ) {
		case '&&':
			if ( left.truthy ) return yield * e.branch(n.right, s);
			return left;
		case '||':
			if ( left.truthy ) return left;
			return yield * e.branch(n.right, s);
		default:
			throw new Error('Unknown logical operator: ' + n.operator);
	}

}

function *evaluateMemberExpression(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMinor;
	let left = yield * e.branch(n.object, s);
	return yield * e.partialMemberExpression(left, n, s);
}

function *evaluateMetaProperty(e, n, s) {
	for ( let i = 0; i < e.frames.length - 1; ++i ) {
		let t = e.frames[i].type;
		if ( t === "function" ) {
			if ( e.frames[i+1].ast.type == "NewExpression" ) {
				return e.frames[i].callee;
			} else {
				return Value.undef;
			}
		}
	}
	return Value.undef;
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
	if ( n.argument ) retVal = yield * e.branch(n.argument, s);
	if ( e.yieldPower >= 2 ) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.RETURN, retVal);
}

function *evaluateSequenceExpression(e, n, s) {
	let last = Value.undef;
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	for ( let expr of n.expressions ) {
		last = yield * e.branch(expr, s);
	}
	return last;
}

function *evaluateSuperExpression(e, n, s) {
	let fr;
	for ( let i = 0; i < e.frames.length; ++i ) {
		fr = e.frames[i];
		if ( fr.creator ) break;
	}
	let result = fr.creator.superTarget;
	return result;
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

function *evaluateTaggedTemplateExpression(e, n, s) {
	let quasis = n.quasi.quasis;
	let expressions = n.quasi.expressions;
	let value = Value.fromNative(quasis[0].value.cooked);
	let fn = yield * e.branch(n.tag, s);

	let strings = [];
	let rawStrings = [];
	for ( let i = 0; i < quasis.length; ++i ) {
		strings.push(e.realm.fromNative(quasis[i].value.cooked));
		rawStrings.push(e.realm.fromNative(quasis[i].value.raw));
	}
	let sv = ArrayValue.make(strings, e.realm);
	let rv = ArrayValue.make(rawStrings, e.realm);
	sv.rawSetProperty('raw', new PropertyDescriptor(rv, false));

	let args = [sv];

	for ( let i = 0; i < expressions.length; ++i ) {
		args.push(yield * e.branch(expressions[i], s));
	}

	return yield * doCall(e, n, n.tag, s, function*() { return args; });
}

function *evaluateTemplateLiteral(e, n, s) {
	let value = Value.fromNative(n.quasis[0].value.cooked);
	for ( let i = 0; i < n.expressions.length; ++i ) {
		value = yield * value.add(yield * e.branch(n.expressions[i], s));
		value = yield * value.add(Value.fromNative(n.quasis[i + 1].value.cooked));
	}
	return value;
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
	if ( n.finalizer ) e.pushFrame({generator: e.branch(n.finalizer, s), type: 'finally', scope: s});
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

function *evaluateUnaryExpression(e, n, s) {
	if ( e.yieldPower >= 4 ) yield EvaluatorInstruction.stepMajor;
	if ( n.operator === 'delete' ) {
		if ( n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier' ) {
			//e isnt something you can delete?
			return Value.true;
		}
		let ref = yield * e.resolveRef(n.argument, s);
		if ( !ref ) return Value.false;
		if ( ref.isVariable || !ref.del ) { return Value.false; }
		let worked = ref.del(s);
		if ( worked instanceof CompletionRecord ) return yield worked;
		return Value.fromNative(worked);
	}

	if ( n.operator === 'typeof' ) {
		if ( n.argument.type == 'Identifier' ) {
			if ( !s.has(n.argument.name) ) return yield * Value.undef.typeOf();
		}
	}

	let left = yield * e.branch(n.argument, s);
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
		if ( decl.init ) value = yield * e.branch(decl.init, s);
		else if ( s.has(decl.id.name) ) continue;

		if ( kind === 'const' ) {
			s.addConst(decl.id.name, value);
		} else if ( kind == 'let') {
			s.addBlock(decl.id.name, value);
		} else {
			s.add(decl.id.name, value);
		}
	}
	return Value.undef;
}

function* genWhileLoop(e, n, s) {
	let last = Value.undef;
	while ( (yield * e.branch(n.test, s)).truthy ) {
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
	let o = yield * e.branch(n.object, s);
	let ns = s.createBlockChild();
	if ( o instanceof ObjectValue ) {
		let pairs = o.getPropertyValueMap();
		for ( let p in pairs ) {
			ns.set(p, pairs[p]);
		}
	}
	return yield * e.branch(n.body, ns);
}

function findNextStep(type) {
	switch ( type ) {
		case 'ArrayExpression': return evaluateArrayExpression;
		case 'ArrowFunctionExpression': return evaluateFunctionExpression;
		case 'AssignmentExpression': return evaluateAssignmentExpression;
		case 'BinaryExpression': return evaluateBinaryExpression;
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
		case 'ImportDeclaration': return evaluateImportDeclaration;
		case 'LabeledStatement': return evaluateLabeledStatement;
		case 'Literal': return evaluateLiteral;
		case 'LogicalExpression': return evaluateLogicalExpression;
		case 'MetaProperty': return evaluateMetaProperty;
		case 'MemberExpression': return evaluateMemberExpression;
		case 'NewExpression': return evaluateCallExpression;
		case 'ObjectExpression': return evaluateObjectExpression;
		case 'Program': return evaluateProgram;
		case 'ReturnStatement': return evaluateReturnStatement;
		case 'SequenceExpression': return evaluateSequenceExpression;
		case 'Super': return evaluateSuperExpression;
		case 'SwitchStatement': return evaluateSwitchStatement;
		case 'TaggedTemplateExpression': return evaluateTaggedTemplateExpression;
		case 'TemplateLiteral': return evaluateTemplateLiteral;
		case 'ThisExpression': return evaluateThisExpression;
		case 'ThrowStatement': return evaluateThrowStatement;
		case 'TryStatement': return evaluateTryStatement;
		case 'UnaryExpression': return evaluateUnaryExpression;
		case 'UpdateExpression': return evaluateUpdateExpression;
		case 'VariableDeclaration': return evaluateVariableDeclaration;
		case 'WhileStatement': return evaluateWhileStatement;
		case 'WithStatement': return evaluateWithStatement;

		case 'BooleanLiteral':
		case 'StringLiteral':
		case 'NumericLiteral':
		case 'NullLiteral':
			return evaluateLiteral;

		default:
			throw new Error('Unknown AST Node Type: ' + type);
	}
}

module.exports = {
	evaluateIdentifier,
	findNextStep,
	classFeatures
};
