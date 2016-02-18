"use strict";

const Value = require('./Value');
const CompletionRecord = require('./CompletionRecord');
const RuntimeError = require('./RuntimeError');
const ClosureValue = require('./values/ClosureValue');
const ObjectValue = require('./values/ObjectValue');
const RegExpValue = require('./values/RegExpValue');

class Evaluator {
	constructor(env, n, s) {
		this.env = env;
		let that = this;
		this.lastValue = null;
		this.ast = n;
		/** 
		 * @type {Object[]} 
		 * @property {Generator} generator
		 * @property {string} type
		 * @property {ast} ast
		 */
		this.frames = [];
		this.pushFrame({generator: this.dispatch(n,s), type: 'program', scope: s, ast: n});
	}

	unwindStack(target, canCrossFxBounds) {
		let finallyFrames = [];
		for ( let i = 0; i < this.frames.length; ++i ) {
			let t = this.frames[i].type;
			if ( t == target || (target == 'return' && t == 'function' )) {
				let j = i+1;
				for (; j < this.frames.length; ++j ) if ( this.frames[j].type != "finally" ) break;
				let fr = this.frames[j];
				this.frames.splice(0,i+1);
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if ( target == 'return' && this.frames[i].retValue ) {
				let fr = this.frames[i];
				this.frames.splice(0, i);
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if ( !canCrossFxBounds && this.frames[i].type == 'function' ) {
				break;
			} else if ( t == "finally" ) {
				finallyFrames.push(this.frames[i]);
			}
		}
		return false;
	}

	next() {
		let that = this;
		let top = that.frames[0];
		let result;
		//console.log(top.type, top.ast && top.ast.type);

		if ( top.exception ) {
			this.lastValue = top.exception;
			delete top.exception;
		} else if ( top.retValue ) {
			this.lastValue = top.retValue;
			delete top.retValue;
		}

	 	result = top.generator.next(this.lastValue);
		
		let val = result.value;
		if ( Array.isArray(val) ) {
			val.shift();
			this.branchFrame.apply(this, val);
		} else if ( (val instanceof CompletionRecord) ) {
			if ( !(val.value instanceof Value) ) val.value = this.fromNative(val.value);
			switch ( val.type ) {
				case CompletionRecord.CONTINUE:
					if ( this.unwindStack('continue', false) ) return {done:false, val: val.value};
					throw new Error('Cant find matching loop frame for continue');
				case CompletionRecord.BREAK:
					if ( this.unwindStack('loop', false) ) return {done:false, val: val.value};
					throw new Error('Cant find matching loop frame for break');
				case CompletionRecord.RETURN:
					let rfr = this.unwindStack('return', false);
					if ( rfr ) {
						rfr.retValue = val.value;
						return {done:false, val: val.value};
					}
					throw new Error('Cant find function bounds.');
				case CompletionRecord.THROW:
					//TODO: Fix this nonsense:
					let e = val.value.toNative();
					let smallStack;
					if ( e.stack ) smallStack = e.stack.split(/\n/).slice(0,2).join('\n');
					let stk = e.stack = this.buildStacktrace(e);
					if ( smallStack ) stk += "\n-------------\n" + smallStack;
					if ( e instanceof Error )  e.stack = stk;

					let tfr = this.unwindStack('catch', true);
					if ( tfr ) {
						tfr.exception = val;
						this.lastValue = val;
						return {done:false, val: val.value};
					} 
					let line = -1;
					if ( this.frames[0].ast && this.frames[0].ast.attr) {
						line = this.frames[0].ast.attr.pos.start_line;
					}
					//console.log(this.buildStacktrace(val.value.toNative()));
					throw val.value.toNative();
				case CompletionRecord.NORMAL:
					val = val.value;
			}
			
		} 

		this.lastValue = val;
		if ( result.done ) {
			let lastFrame = that.popFrame();

			// Latient values can't cross function calls.
			// Dont do this, and you get coffeescript mode.
			if ( lastFrame.type === "function" ) this.lastValue = Value.undef;

			if ( that.frames.length === 0 ) return {done: true, value: result.value};
		} 
		
		return {done: false, val: this.lastValue};
	}

	buildStacktrace(e) {
		let lines = [e.toString()];
		for ( var f of this.frames ) {
			//if ( f.type !== 'function' ) continue;
			let line = 'at ';
			if ( f.ast ) {
				if ( f.ast ) line += (f.ast.srcName || f.ast.type) + ' ';
				if ( f.ast.loc ) line += '(<src>:' + f.ast.loc.start.line + ":" + f.ast.loc.start.column + ')';
			}
			lines.push(line);
		}
		return lines.join('\n    ');
	}
	pushFrame(frame) {
		this.frames.unshift(frame);
	}

	popFrame() {
		let frame = this.frames.shift();

		return frame;
	}

	fromNative(native) {
		return this.env.valueFromNative(native);
	}

	*resolveRef(n, s, create) {
		switch (n.type) {
			case "Identifier":
				let iref = s.ref(n.name, s.env);
				if ( !iref ) {
					if ( !create ) throw new ReferenceError(`${n.name} not defined`);
					if ( s.strict ) throw new ReferenceError(`${n.name} not defined`);					
					s.global.set(n.name, Value.undef);
					iref = s.ref(n.name, s.env);
				}
				return iref;
			case "MemberExpression":
				let idx;
				let ref = yield * this.branch(n.object, s);
				if ( n.computed ) {
					idx = (yield * this.branch(n.property, s)).toNative();
				} else {
					idx = n.property.name;
				}

				if ( !ref ) {
					throw new Error("Cant write property of undefined: " + idx);
				}

				if ( !ref.ref ) {
					throw new Error("Cant write property of non-object type: " + idx);
				}

				return ref.ref(idx, s.env);

			default:
				throw new Error("Couldnt resolve ref component: " + n.type);
		}
	}

	*evaluateArrayExpression(n,s) {
		//let result = new ObjectValue();
		let result = new Array(n.elements.length);
		for ( let i = 0; i < n.elements.length; ++i ) {
			result[i] = yield * this.branch(n.elements[i],s);
		}
		let ArrayValue = require('./values/ArrayValue');
		return ArrayValue.make(result, this.env);
	}

	*evaluateAssignmentExpression(n,s) {
		//TODO: Account for not-strict mode
		let ref;
		var env = s.env;
		try {
			ref = yield * this.resolveRef(n.left, s, n.operator === "=");
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(e));
		}

		if ( !ref && s.strict ) {
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(new ReferenceError(`target not defined`)));
		}

		let argument = yield * this.branch(n.right, s);
		let value;
		switch ( n.operator ) {
			case "=":
				value = argument;
				break;
			case "+=":
				value = yield * ref.value.add(argument, env);
				break;
			case "-=":
				value = yield * ref.value.subtract(argument, env);
				break;
			case "*=":
				value = yield * ref.value.multiply(argument, env);
				break;
			case "/=":
				value = yield * ref.value.divide(argument, env);
				break;
			case "%=":
				value = yield * ref.value.mod(argument, env);
				break;
			case "<<=":
				value = yield * ref.value.shiftLeft(argument, env);
				break;
			case ">>=":
				value = yield * ref.value.shiftRight(argument, env);
				break;
			case ">>>=":
				value = yield * ref.value.shiftRightZF(argument, env);
				break;
			case "|=":
				value = yield * ref.value.bitOr(argument, env);
				break;
			case "&=":
				value = yield * ref.value.bitAnd(argument, env);
				break;
			case "^=":
				value = yield * ref.value.bitXor(argument, env);
				break;
			default:
				throw new Error("Unknown assignment operator: " + n.operator);
		}

		if ( ref ) ref.set(value, s);
		else {
			s.assign(n.left.name, value, s);
		}

		return value;
	}

	*evaulateBinaryExpression(n,s) {
		let left = yield * this.branch(n.left,s);
		let right = yield * this.branch(n.right,s);
		var env = this.env;
		switch ( n.operator ) {
			case '==': return yield * left.doubleEquals(right, env);
			case '!=': return yield * left.notEquals(right, env);
			case '===': return yield * left.tripleEquals(right, env);
			case '!==': return yield * left.doubleNotEquals(right, env);
			case '+': return yield * left.add(right, env);
			case '-': return yield * left.subtract(right, env);
			case '*': return yield * left.multiply(right, env);
			case '/': return yield * left.divide(right, env);
			case '%': return yield * left.mod(right, env);
			case '|': return yield * left.bitOr(right, env);
			case '^': return yield * left.bitXor(right, env);
			case '&': return yield * left.bitAnd(right, env);
			case 'in': return yield * right.inOperator(left, env);
			case 'instanceof': return yield * left.instanceOf(right, env);
			case '>': return yield * left.gt(right, env);
			case '<': return yield * left.lt(right, env);
			case '>=': return yield * left.gte(right, env);
			case '<=': return yield * left.lte(right, env);
			case '<<': return yield * left.shiftLeft(right, env);
			case '>>': return yield * left.shiftRight(right, env);
			case '>>>': return yield * left.shiftRightZF(right, env);
			default:
				throw new Error("Unknown binary operator: " + n.operator);
		}
	}

	*evaluateBlockStatement(n,s) {
		let result = Value.undef;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement,s);
		}
		return result;
	}


	*evaluateBreakStatement(n,s) {
		return new CompletionRecord(CompletionRecord.BREAK, Value.undef);
	}


	*evaluateCallExpression(n,s,e) {
		let thiz = Value.undef;

		let callee;

		if ( n.callee.type === "MemberExpression" ) {
			thiz = yield * this.branch(n.callee.object, s);
			callee = yield * this.partialMemberExpression(thiz, n.callee, s);
			if ( callee instanceof CompletionRecord ) {
				if ( callee.type == CompletionRecord.THROW ) return callee;
				callee = callee.value;
			}
		} else {
			callee = yield * this.branch(n.callee, s);
		}

		if ( n.type === "NewExpression" ) {
			thiz = yield * callee.makeThisForNew();
			if ( thiz instanceof CompletionRecord ) {
				if ( thiz.type == CompletionRecord.THROW ) return thiz;
				thiz = thiz.value;
			}
		}

		//console.log("Calling", callee, callee.call);

		let args = new Array(n.arguments.length);
		for ( let i = 0; i < n.arguments.length; ++i ) {
			args[i] = yield * this.branch(n.arguments[i],s);
		}

		let name = n.callee.srcName || callee.jsTypeName;
		if ( !callee.isCallable ) {
			return new CompletionRecord(CompletionRecord.THROW, new TypeError("" + name + " is not a function"));
		}

		let callResult = callee.call(thiz, args, s, {
			asConstructor: n.type === "NewExpression",
			callNode: n
		});

		if ( callResult instanceof CompletionRecord ) return callResult;

		if ( typeof callResult.next !== "function" ) {
			console.log('Generator Failure', callResult);
			return new CompletionRecord(CompletionRecord.THROW, new TypeError("" + name + " didnt make a generator"));
		}
		
		let result = yield * callResult;
		if ( n.type === "NewExpression" ) {
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

	*evaluateConditionalExpression(n,s) {
		let test = yield * this.branch(n.test, s);
		if ( test.truthy ) {
			return yield * this.branch(n.consequent, s);
		} else {
			if ( n.alternate ) {
				return yield * this.branch(n.alternate, s);
			}
		}
		return Value.undef;
	}


	*evaluateContinueStatement(n,s) {
		return new CompletionRecord(CompletionRecord.CONTINUE, Value.undef);
	}

	*evaluateDoWhileStatement(n,s) {
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			do {
				last = yield that.branchFrame('continue', n.body, s);
			} while ( (yield * that.branch(n.test,s)).truthy );
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	*evaluateEmptyStatement(n,s) {
		return Value.undef;
	}


	*evalutaeExpressionStatement(n,s) {
		return yield * this.branch(n.expression,s);
	}

	*evaluateIdentifier(n,s) {
		if ( n.name === "undefined" ) return Value.undef;
		if ( !s.has(n.name) ) {
			// Allow undeclared varibles to be null?
			if ( false ) return Value.undef;
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(new ReferenceError(`${n.name} is not defined`)));
		}
		return s.get(n.name);
	}

	*evaluateIfStatement(n,s) {
		let test = yield * this.branch(n.test, s);
		if ( test.truthy ) {
			return yield * this.branch(n.consequent, s);
		} else {
			if ( n.alternate ) {
				return yield * this.branch(n.alternate, s);
			}
		}
		return Value.undef;
	}

	*evaluateForStatement(n,s) {
		let last = Value.undef;
		if ( n.init ) yield * this.branch(n.init,s);
		let that = this;
		var gen = function*() {
			let test = Value.true;
			if ( n.test ) test = yield * that.branch(n.test,s);
			while ( test.truthy ) {
				last = yield that.branchFrame('continue', n.body, s);
				if ( n.update ) yield * that.branch(n.update,s);
				if ( n.test ) test = yield * that.branch(n.test,s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	*evaluateForInStatement(n,s) {
		let last = Value.undef;
		let object = yield * this.branch(n.right,s);
		let names = object.observableProperties();
		let that = this;
		let ref;

		if ( n.left.type === "VariableDeclaration" ) {
			s.assign(n.left.declarations[0].id.name, Value.undef);
			ref = s.ref(n.left.declarations[0].id.name, s.env);
		} else {
			ref = s.ref(n.left.name, s.env);
		}

		var gen = function*() {
			for ( let name of names ) {
				ref.value = name;
				last = yield * that.branch(n.body, s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}


	*evaluateFunctionDeclaration(n,s) {
		let closure = new ClosureValue(n, s);
		s.add(n.id.name, closure);
		return Value.undef;
	}

	*evaluateFunctionExpression(n,s) {
		let value = new ClosureValue(n, s);
		if ( n.type === "ArrowFunctionExpression" ) {
			value.thiz = s.thiz;
		}
		return value;
	}

	*evaluateLabeledStatement(n,s) {
		return yield * this.branch(n.body, s);
	}

	*evaulateLiteral(n,s) {
		if ( n.regex ) {
			return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.env);
		} else if ( n.value === null ) {
			if ( this.raw === 'null' ) return this.fromNative(null);

			//Work around Esprima turning Infinity into null. =\
			let tryFloat = parseFloat(n.raw);
			if ( !isNaN(tryFloat) ) return this.fromNative(tryFloat);
			return this.fromNative(null);
	 	} else {
			return this.fromNative(n.value);
		}
	}

	*evaluateLogicalExpression(n,s) {
		let left = yield * this.branch(n.left,s);
		switch ( n.operator ) {
			case '&&':
				if ( left.truthy ) return yield * this.branch(n.right,s);
				return left;
			case '||': 
				if ( left.truthy ) return left;
				return yield * this.branch(n.right,s);
			default:
				throw new Error("Unknown logical operator: " + n.operator);
		}

	}

	*evaluateMemberExpression(n,s) {
		let left = yield * this.branch(n.object,s);
		return yield * this.partialMemberExpression(left, n, s);
	}

	*partialMemberExpression(left, n, s) {

		if ( n.computed ) {
			let right = yield * this.branch(n.property,s);
			return yield * left.member(right.toNative(), this.env);
		} else if ( n.property.type == "Identifier") {
			if ( !left ) throw `Cant index ${n.property.name} of undefined`;
			return yield * left.member(n.property.name, this.env);
		} else {
			if ( !left ) throw `Cant index ${n.property.value.toString()} of undefined`;
			return yield * left.member(n.property.value.toString(), this.env);
		}
	}

	*evaluateObjectExpression(n,s) {
		//TODO: Need to wire up native prototype
		var nat = new ObjectValue(s.env);
		for ( let i = 0; i < n.properties.length; ++i ) {
			let prop = n.properties[i];
			let key;
			if ( n.computed ) {
				key = (yield * this.branch(prop.key, s)).toNative().toString();
			} else if ( prop.key.type == 'Identifier') {
				key = prop.key.name;
			} else if ( prop.key.type == 'Literal' ) {
				key = prop.key.value.toString();
			}

			let value = yield * this.branch(prop.value, s);
			nat.assign(key, value);
		}
		return nat;
	}

	*evaluateProgram(n,s) {
		let result = Value.undef;
		if ( n.vars )
		for ( var v in n.vars ) {
			s.add(v, Value.undef);
		}
		if ( n.strict === true ) s.strict = true;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement,s);
		}
		return result;
	}

	*evaluateReturnStatement(n,s) {
		let retVal = Value.undef;
		if ( n.argument ) retVal = yield * this.branch(n.argument,s);
		return new CompletionRecord(CompletionRecord.RETURN, retVal);
	}

	*evaluateSequenceExpression(n,s) {
		let last = Value.undef;
		for ( let expr of n.expressions ) {
			last = yield * this.branch(expr,s);
		}
		return last;
	}

	*evaluateSwitchStatement(n,s) {
		let discriminant = yield * this.branch(n.discriminant, s);
		let last = Value.undef;		
		let that = this;
		let matches = 0;
		let matchVals = new Array(n.cases.length);
		let matched = false;
		
		for ( let i = 0; i < n.cases.length; ++i ) {
			let cas = n.cases[i];
			if ( cas.test ) {
				let testval = yield * that.branch(cas.test);
				let equality = yield * testval.tripleEquals(discriminant);
				if ( equality.truthy ) ++matches;
				matchVals[i] = equality.truthy;
			}
		}

		
		let gen = function*() {

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
					last = yield * that.branch(statement, s);	
				}
			}
		};

		this.pushFrame({generator: gen(), type: 'loop'});
		let finished = yield;

		return last;
	}

	*evaluateThisExpression(n,s) {
		if ( s.thiz ) return s.thiz;
		else return Value.undef;
	}

	*evaluateThrowStatement(n,s) {
		let value = yield * this.branch(n.argument, s);
		return new CompletionRecord(CompletionRecord.THROW, value);
	}

	*evaluateTryStatement(n,s) {
		if ( n.finalizer ) this.pushFrame({generator: this.branch(n.finalizer,s), type: 'finally', scope: s});
		let result = yield this.branchFrame('catch', n.block, s);
		if ( result instanceof CompletionRecord && result.type == CompletionRecord.THROW ) {
			if ( !n.handler ) {
				console.log("No catch..., throwing", result.obj);
				return result;
			}
			let handlerScope = s.createChild();
			handlerScope.add(n.handler.param.name, result.value);
			return yield * this.branch(n.handler.body, handlerScope);
		}
		return result;
	}

	*evaluateUpdateExpression(n,s) {
		//TODO: Need to support something like ++x[1];
		let nue, ref;
		try {
			ref = yield * this.resolveRef(n.argument, s, true);
		} catch ( e ) {
			return new CompletionRecord(CompletionRecord.THROW, this.fromNative(e));
		}
		let old = ref.value ? ref.value : Value.NaN;
		switch (n.operator) {
			case "++": nue = yield * old.add(this.fromNative(1)); break;
			case "--": nue = yield * old.subtract(this.fromNative(1)); break;
			default: throw new Error("Unknown update expression type: " + n.operator);
		}
		if ( ref ) ref.value = nue;

		if ( n.prefix ) return nue;
		return old;
	}

	*evaulateUnaryExpression(n,s) {
		if ( n.operator === "delete" ) {
			let ref;
			try {
				ref = yield * this.resolveRef(n.argument, s);
				
			} catch ( e ) {
				if ( n.argument.type !== "MemberExpression" ) return Value.true;
				return new CompletionRecord(CompletionRecord.THROW, this.fromNative(e));
			}
			if ( !ref ) return Value.false;
			if ( ref.isVariable ) { return Value.false; }
			ref.del();
			return Value.true;
		}

		if ( n.operator === "typeof" ) {
			if ( n.argument.type == "Identifier" ) {
				if ( !s.has(n.argument.name) ) return yield * Value.undef.typeOf();
			}
		}

		let left = yield * this.branch(n.argument,s);
		switch ( n.operator ) {
			case '-': return yield * left.unaryMinus();
			case '+': return yield * left.unaryPlus();
			case '!': return yield * left.not();
			case '~': return yield * left.bitNot();
			case 'typeof': return yield * left.typeOf();
			case 'void': return Value.undef;
			default:
				throw new Error("Unknown binary operator: " + n.operator);
		}
	}


	*evaluateVariableDeclaration(n,s) {
		let kind = n.kind;
		for ( let decl of n.declarations ) {
			let value = Value.undef;
			if ( decl.init ) value = yield * this.branch(decl.init,s);
			else if ( s.has(decl.id.name) ) continue;
			s.add(decl.id.name, value);
		}
		return Value.undef;
	}

	*evaluateWhileStatement(n,s) {
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			while ( (yield * that.branch(n.test,s)).truthy ) {
				last = yield that.branchFrame('continue', n.body, s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop'});


		let finished = yield;
		return Value.undef;
	}

	/**
	 * @private
	 */
	dispatch(n,s) {
		switch ( n.type ) {
			case "ArrayExpression": return this.evaluateArrayExpression(n,s);
			case "ArrowFunctionExpression": return this.evaluateFunctionExpression(n,s);
			case "AssignmentExpression": return this.evaluateAssignmentExpression(n,s);
			case "BinaryExpression": return this.evaulateBinaryExpression(n,s);
			case "BreakStatement": return this.evaluateBreakStatement(n,s);
			case "BlockStatement": return this.evaluateBlockStatement(n,s);
			case "CallExpression": return this.evaluateCallExpression(n,s);
			case "ConditionalExpression": return this.evaluateConditionalExpression(n,s);
			case "DebuggerStatement": return this.evaluateEmptyStatement(n,s);
			case "DoWhileStatement": return this.evaluateDoWhileStatement(n,s);
			case "ContinueStatement": return this.evaluateContinueStatement(n,s);
			case "EmptyStatement": return this.evaluateEmptyStatement(n,s);
			case "ExpressionStatement": return this.evalutaeExpressionStatement(n,s);
			case "ForStatement": return this.evaluateForStatement(n,s);
			case "ForInStatement": return this.evaluateForInStatement(n,s);
			case "FunctionDeclaration": return this.evaluateFunctionDeclaration(n,s);
			case "FunctionExpression": return this.evaluateFunctionExpression(n,s);
			case "Identifier": return this.evaluateIdentifier(n,s);
			case "IfStatement": return this.evaluateIfStatement(n,s);
			case "LabeledStatement": return this.evaluateLabeledStatement(n,s);
			case "Literal": return this.evaulateLiteral(n,s);
			case "LogicalExpression": return this.evaluateLogicalExpression(n,s);
			case "MemberExpression": return this.evaluateMemberExpression(n,s);
			case "NewExpression": return this.evaluateCallExpression(n,s);
			case "ObjectExpression": return this.evaluateObjectExpression(n,s);
			case "Program": return this.evaluateProgram(n,s);
			case "ReturnStatement": return this.evaluateReturnStatement(n,s);
			case "SequenceExpression": return this.evaluateSequenceExpression(n,s);
			case "SwitchStatement": return this.evaluateSwitchStatement(n,s);
			case "ThisExpression": return this.evaluateThisExpression(n,s);
			case "ThrowStatement": return this.evaluateThrowStatement(n,s);
			case "TryStatement": return this.evaluateTryStatement(n,s);
			case "UnaryExpression": return this.evaulateUnaryExpression(n,s);
			case "UpdateExpression": return this.evaluateUpdateExpression(n,s);
			case "VariableDeclaration": return this.evaluateVariableDeclaration(n,s);
			case "WhileStatement": return this.evaluateWhileStatement(n,s);
			default:
				throw new Error("Unknown AST Node Type: " + n.type);
		}
	}

	generator() {
		return {next: this.next.bind(this), throw: (e) => { throw e; }};
	}

	breakFrames() {

	}

	/**
	 * @private
	 */
	*branch(n,s) {
		let gen = this.dispatch(n,s);
		let oldAST = this.frames[0].ast;
		this.frames[0].ast = n;
		let result = gen.next();
		
		let val = result.value;
		if ( val instanceof CompletionRecord ) val = val.value;
		this.frames[0].value = val;
		while ( !result.done ) {
			let down = yield result.value;
			result = gen.next(down);
		}

		yield result.value;
		this.frames[0].ast = oldAST;
		//yield result.value;
		let vout = result.value;
		while ( vout instanceof CompletionRecord ) vout = vout.value;
		return vout;
	}

	branchFrame(type, n,s) {
		return this.pushFrame({generator: this.branch(n,s), type: type, scope: s});
	}
}

module.exports = Evaluator;