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

class Frame {
	constructor(type, o) {
		this.type = type;
		for ( var k in o ) this[k] = o[k];
	}
}

class Evaluator {
	constructor(realm, n, s) {
		this.realm = realm;
		let that = this;
		this.lastValue = null;
		this.ast = n;
		this.yieldPower = 5;
		/**
		 * @type {Object[]}
		 * @property {Generator} generator
		 * @property {string} type
		 * @property {ast} ast
		 */
		this.frames = [];
		if ( n ) this.pushAST(n, s);
	}

	pushAST(n, s) {
		let that = this;
		let gen = n ? this.dispatch(n,s) : (function*() {
			let val = yield;
			console.log("Wub", val);
			console.log(that.frames);
			return val;
		})();
		this.pushFrame({generator: gen, type: 'program', scope: s, ast: n});
	}

	unwindStack(target, canCrossFxBounds, label) {
		let finallyFrames = [];
		for ( let i = 0; i < this.frames.length; ++i ) {
			let t = this.frames[i].type;
			let match = t == target || (target == 'return' && t == 'function' );
			if ( match && label ) {
				match = label == this.frames[i].label;
			}

			if ( match ) {
				let j = i + 1;
				for (; j < this.frames.length; ++j ) if ( this.frames[j].type != 'finally' ) break;
				let fr = this.frames[j];
				this.frames.splice(0,i + 1);
				this.topFrame = this.frames[0];
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if ( target == 'return' && this.frames[i].retValue ) {
				let fr = this.frames[i];
				this.frames.splice(0, i);
				this.topFrame = this.frames[0];
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if ( !canCrossFxBounds && this.frames[i].type == 'function' ) {
				break;
			} else if ( t == 'finally' ) {
				finallyFrames.push(this.frames[i]);
			}
		}
		return false;
	}

	next(lastValueOveride) {
		let that = this;
		let frames = this.frames;
		let top = frames[0];
		let result;
		//console.log(top.type, top.ast && top.ast.type);

		if ( top.exception ) {
			this.lastValue = top.exception;
			delete top.exception;
		} else if ( top.retValue ) {
			this.lastValue = top.retValue;
			delete top.retValue;
		}

		result = top.generator.next(lastValueOveride || this.lastValue);

		let val = result.value;

		if ( val instanceof EvaluatorInstruction ) {
			switch ( val.type ) {
				case 'branch':
					this.branchFrame(val.kind, val.ast, val.scope, val.extra);
					return this.next();
				case 'getEvaluator':
					return this.next(this);
			}
		}

		if ( val instanceof CompletionRecord ) {
			this.processCompletionValueMeaning(val);
			this.lastValue = val.value;
			return this.next();
		}

		if ( that.instrument ) that.instrument(this, val);

		if ( val && val.then ) {
			if ( top && top.type !== 'await' ) {
				this.pushFrame({generator: (function *(f) {
					while ( !f.resolved ) yield f;
					if ( f.successful ) {
						return f.value;
					} else {
						return new CompletionRecord(CompletionRecord.THROW, f.value);
					}
				})(val), type: 'await'});
			}
			return {done: false, value: val};
		}

		this.lastValue = val;
		if ( result.done ) {
			let lastFrame = that.popFrame();

			// Latient values can't cross function calls.
			// Dont do this, and you get coffeescript mode.
			if ( lastFrame.type === 'function' && !lastFrame.returnLastValue ) {
				this.lastValue = Value.undef;
			}

			if ( frames.length === 0 ) return {done: true, value: result.value};
		}

		return {done: false, value: this.lastValue};
	}

	processCompletionValueMeaning(val) {
		if ( !(val.value instanceof Value) ) {
			if ( val.value instanceof Error ) {
				throw new Error('Value was an error: ' + val.value.stack);
			}
			throw new Error('Value isnt of type Value, its' + val.value.toString());
		}

		switch ( val.type ) {
			case CompletionRecord.CONTINUE:
				if ( this.unwindStack('continue', false, val.target) ) return true;
				throw new Error('Cant find matching loop frame for continue');
			case CompletionRecord.BREAK:
				if ( this.unwindStack('loop', false, val.target) ) return true;
				throw new Error('Cant find matching loop frame for break');
			case CompletionRecord.RETURN:
				let rfr = this.unwindStack('return', false);
				if ( !rfr ) throw new Error('Cant find function bounds.');
				rfr.retValue = val.value;
				return true;
			case CompletionRecord.THROW:
				//TODO: Fix this nonsense:
				let e = val.value.toNative();
				//val.value.native = e;

				let smallStack;
				if ( e && e.stack ) smallStack = e.stack.split(/\n/).slice(0,4).join('\n');
				let stk = this.buildStacktrace(e).join('\n    ');
				var bestFrame = undefined;
				for ( let i = 0; i < this.frames.length; ++i ) {
					if ( this.frames[i].ast ) {
						bestFrame = this.frames[i];
						break;
					}
				}

				if ( val.value instanceof ErrorValue ) {
					if ( this.realm.options.addExtraErrorInfoToStacks && val.value.extra ) {
						stk += '\n-------------';
						for ( let key in val.value.extra ) {
							let vv = val.value.extra[key];
							if ( vv instanceof Value ) stk += `\n${key} => ${vv.debugString}`;
							else stk += `\n${key} => ${vv}`;
						}
					}
				}

				if ( e instanceof Error ) {
					e.stack = stk;
					if ( smallStack && this.realm.options.addInternalStack ) e.stack += '\n-------------\n' + smallStack;
					if ( bestFrame ) {
						e.range = bestFrame.ast.range;
						e.loc = bestFrame.ast.loc;
					}
				}

				if ( val.value instanceof ErrorValue ) {
					if ( !val.value.has('stack') ) {
						val.value.setImmediate('stack', Value.fromNative(stk));
						val.value.properties['stack'].enumerable = false;
					}
				}

				let tfr = this.unwindStack('catch', true);
				if ( tfr ) {
					tfr.exception = val;
					this.lastValue = val;
					return true;
				}
				let line = -1;
				if ( this.topFrame.ast && this.topFrame.ast.attr) {
					line = this.topFrame.ast.attr.pos.start_line;
				}
				//console.log(this.buildStacktrace(val.value.toNative()));
				throw val.value.toNative();
			case CompletionRecord.NORMAL:
				return false;
		}
	}

	buildStacktrace(e) {
		let lines = e ? [e.toString()] : [];
		for ( var f of this.frames ) {
			//if ( f.type !== 'function' ) continue;
			if ( f.ast ) {
				let line = 'at ' + (f.ast.srcName || f.ast.type) + ' ';
				if ( f.ast.loc ) line += '(<src>:' + f.ast.loc.start.line + ':' + f.ast.loc.start.column + ')';
				lines.push(line);
			}
		}
		return lines;
	}
	pushFrame(frame) {
		this.frames.unshift(new Frame(frame.type, frame));
		this.topFrame = this.frames[0];
	}

	popFrame() {
		let frame = this.frames.shift();
		this.topFrame = this.frames[0];
		return frame;
	}

	fromNative(native) {
		return this.realm.valueFromNative(native);
	}

	*resolveRef(n, s, create) {
		let oldAST = this.topFrame.ast;
		this.topFrame.ast = n;
		switch (n.type) {
			case 'Identifier':
				let iref = s.ref(n.name, s.realm);
				if ( !iref ) {
					iref = {
						getValue: function*() {
							let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
							yield * err.addExtra({code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict});
							return yield  err;
						},
						del: function() {
							return true;
						}
					};
					if ( !create || s.strict ) {
						iref.setValue = function *() {
							let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
							yield * err.addExtra({code: 'UndefinedVariable', when: 'write', ident: n.name, strict: s.strict});
							return yield  err;
						};
					} else {
						iref.setValue = function *(value) {
							s.global.set(n.name, value, s);
							let aref = s.global.ref(n.name, s.realm);
							this.setValue = aref.setValue;
							this.getValue = aref.getValue;
							this.del = aref.delete;
						};
					}
				}
				this.topFrame.ast = oldAST;
				return iref;
			case 'MemberExpression':
				let idx;
				let ref = yield * this.branch(n.object, s);
				if ( n.computed ) {
					idx = (yield * this.branch(n.property, s)).toNative();
				} else {
					idx = n.property.name;
				}

				if ( !ref ) {
					return yield CompletionRecord.makeTypeError(s.realm, `Can't write property of undefined: ${idx}`);
				}

				if ( !ref.ref ) {
					return yield CompletionRecord.makeTypeError(s.realm, `Can't write property of non-object type: ${idx}`);
				}

				this.topFrame.ast = oldAST;
				return ref.ref(idx, s.realm);

			default:
				return yield CompletionRecord.makeTypeError(s.realm, `Couldnt resolve ref component: ${n.type}`);
		}
	}

	*evaluateArrayExpression(n, s) {
		//let result = new ObjectValue();
		let result = new Array(n.elements.length);
		for ( let i = 0; i < n.elements.length; ++i ) {
			if ( n.elements[i] ) {
				result[i] = yield * this.branch(n.elements[i],s);
			}
		}
		if ( this.yieldPower > 0 ) yield;
		return ArrayValue.make(result, this.realm);
	}

	*evaluateAssignmentExpression(n, s) {
		//TODO: Account for not-strict mode
		var realm = s.realm;
		let ref = yield * this.resolveRef(n.left, s, n.operator === '=');

		if ( !ref && s.strict ) {
			return CompletionRecord.makeReferenceError(s.realm, `Invalid refrence in assignment.`);
		}

		let argument = yield * this.branch(n.right, s);
		let value;
		let cur;
		if ( this.yieldPower > 0 ) yield;
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

	*doBinaryEvaluation(operator, left, right, realm) {
		switch ( operator ) {
			case '==': return yield * left.doubleEquals(right, realm);
			case '!=': return yield * left.notEquals(right, realm);
			case '===': return yield * left.tripleEquals(right, realm);
			case '!==': return yield * left.doubleNotEquals(right, realm);
			case '+': return yield * left.add(right, realm);
			case '-': return yield * left.subtract(right, realm);
			case '*': return yield * left.multiply(right, realm);
			case '/': return yield * left.divide(right, realm);
			case '%': return yield * left.mod(right, realm);
			case '|': return yield * left.bitOr(right, realm);
			case '^': return yield * left.bitXor(right, realm);
			case '&': return yield * left.bitAnd(right, realm);
			case 'in': return yield * right.inOperator(left, realm);
			case 'instanceof': return yield * left.instanceOf(right, realm);
			case '>': return yield * left.gt(right, realm);
			case '<': return yield * left.lt(right, realm);
			case '>=': return yield * left.gte(right, realm);
			case '<=': return yield * left.lte(right, realm);
			case '<<': return yield * left.shiftLeft(right, realm);
			case '>>': return yield * left.shiftRight(right, realm);
			case '>>>': return yield * left.shiftRightZF(right, realm);
			default:
				throw new Error('Unknown binary operator: ' + operator);
		}
	}

	*evaulateBinaryExpression(n, s) {
		let left = yield * this.branch(n.left,s);
		let right = yield * this.branch(n.right,s);
		var realm = this.realm;
		if ( this.yieldPower > 0 ) yield;
		return yield * this.doBinaryEvaluation(n.operator, left, right, realm);
	}

	*evaluateBlockStatement(n, s) {
		let result = Value.undef;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement,s);
		}
		return result;
	}


	*evaluateBreakStatement(n, s) {
		let label = n.label ? n.label.name : undefined;
		if ( this.yieldPower > 0 ) yield;
		return new CompletionRecord(CompletionRecord.BREAK, Value.undef, label);
	}


	*evaluateCallExpression(n, s, e) {
		let thiz = Value.undef;

		let callee, base;

		if ( n.callee.type === 'MemberExpression' ) {
			thiz = base = yield * this.branch(n.callee.object, s);
			callee = yield * this.partialMemberExpression(thiz, n.callee, s);
			if ( callee instanceof CompletionRecord ) {
				if ( callee.type == CompletionRecord.THROW ) return callee;
				callee = callee.value;
			}
		} else {
			callee = yield * this.branch(n.callee, s);
		}

		if ( n.type === 'NewExpression' ) {
			thiz = yield * callee.makeThisForNew(s.realm);
			if ( thiz instanceof CompletionRecord ) {
				if ( thiz.type == CompletionRecord.THROW ) return thiz;
				thiz = thiz.value;
			}
		}

		if ( typeof callee.rawCall === 'function' ) {
			return yield * callee.rawCall(n, this, s);
		}

		//console.log("Calling", callee, callee.call);

		let args = new Array(n.arguments.length);
		for ( let i = 0; i < n.arguments.length; ++i ) {
			args[i] = yield * this.branch(n.arguments[i],s);
		}

		let name = n.callee.srcName || callee.jsTypeName;

		if ( this.yieldPower > 0 ) yield;

		if ( !callee.isCallable ) {
			let err = CompletionRecord.makeTypeError(this.realm, '' + name + ' is not a function');
			yield * err.addExtra({
				code: 'CallNonFunction',
				target: callee,
				targetAst: n.callee,
				targetName: name,
				base: base
			});
			return err;
		}

		let callResult = callee.call(thiz, args, s, {
			asConstructor: n.type === 'NewExpression',
			callNode: n,
			evaluator: this
		});

		if ( callResult instanceof CompletionRecord ) return callResult;

		if ( typeof callResult.next !== 'function' ) {
			console.log('Generator Failure', callResult);
			return CompletionRecord.makeTypeError(this.realm, '' + name + ' didnt make a generator');
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

	*evaluateClassExpression(n, s) {
		let clazz = new ObjectValue(this.realm);
		clazz.call = function*() { return Value.undef; };

		let proto = new ObjectValue(this.realm);
		yield * clazz.set('prototype', proto);
		yield * proto.set('constructor', clazz);

		if ( this.yieldPower > 0 ) yield;
		for ( let m of n.body.body ) {
			let fx = yield * this.branch(m.value, s);

			//TODO: Support getters and setters
			if ( m.kind == 'constructor' ) {
				clazz.call = function*(thiz, args, s) { return yield * fx.call(thiz,args,s); };

			} else {
				let ks;
				if ( m.computed ) {
					let k = yield * this.branch(m.key, s);
					ks = yield * k.toStringNative(this.realm);
				} else {
					ks = m.key.name;
				}

				if ( m.static ) clazz.setImmediate(ks, fx);
				else proto.setImmediate(ks, fx);
			}
		}
		return clazz;
	}

	*evaluateClassDeclaration(n, s) {
		let clazz = yield * this.evaluateClassExpression(n,s);
		yield * s.put(n.id.name, clazz);
		return clazz;
	}

	*evaluateConditionalExpression(n, s) {
		let test = yield * this.branch(n.test, s);
		if ( this.yieldPower > 0 ) yield;
		if ( test.truthy ) {
			return yield * this.branch(n.consequent, s);
		} else {
			if ( n.alternate ) {
				return yield * this.branch(n.alternate, s);
			}
		}
		return Value.undef;
	}


	*evaluateContinueStatement(n, s) {
		let label = n.label ? n.label.name : undefined;
		if ( this.yieldPower > 0 ) yield;
		return new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);
	}

	*evaluateDoWhileStatement(n, s) {
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			do {
				last = yield that.branchFrame('continue', n.body, s, {label: n.label});
			} while ( (yield * that.branch(n.test,s)).truthy );
		};
		if ( this.yieldPower > 0 ) yield;
		this.pushFrame({generator: gen(), type: 'loop', label: n.label, ast: n});


		let finished = yield;
		return Value.undef;
	}

	*evaluateEmptyStatement(n, s) {
		if ( this.yieldPower > 4 ) yield;
		return Value.undef;
	}

	*evalutaeExpressionStatement(n, s) {
		if ( this.yieldPower > 4 ) yield;
		return yield * this.branch(n.expression,s);
	}

	*evaluateIdentifier(n, s) {
		if ( this.yieldPower > 0 ) yield;
		if ( n.name === 'undefined' ) return Value.undef;
		if ( !s.has(n.name) ) {
			// Allow undeclared varibles to be null?
			if ( false ) return Value.undef;
			let err = CompletionRecord.makeReferenceError(this.realm, `${n.name} is not defined`);
			yield * err.addExtra({code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict});
			return yield err;
		}
		return s.get(n.name);
	}

	*evaluateIfStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
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

	*evaluateForStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let last = Value.undef;
		if ( n.init ) yield * this.branch(n.init,s);
		let that = this;
		var gen = function*() {
			let test = Value.true;
			if ( n.test ) test = yield * that.branch(n.test,s);
			while ( test.truthy ) {
				last = yield that.branchFrame('continue', n.body, s, {label: n.label});
				if ( n.update ) yield * that.branch(n.update,s);
				if ( n.test ) test = yield * that.branch(n.test,s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop', label: n.label, ast: n});


		let finished = yield;
		return Value.undef;
	}

	*evaluateForInStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let last = Value.undef;
		let object = yield * this.branch(n.right,s);
		let names = object.observableProperties(s.realm);
		let that = this;
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
		this.pushFrame({generator: gen(), type: 'loop', label: n.label, ast: n});


		let finished = yield;
		return Value.undef;
	}

	//TODO: For of does more crazy Symbol iterator stuff
	*evaluateForOfStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let last = Value.undef;
		let object = yield * this.branch(n.right,s);
		let names = object.observableProperties(s.realm);
		let that = this;
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
		this.pushFrame({generator: gen(), type: 'loop', label: n.label});


		let finished = yield;
		return Value.undef;
	}

	*evaluateFunctionDeclaration(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let closure = new ClosureValue(n, s);
		s.add(n.id.name, closure);
		return Value.undef;
	}

	*evaluateFunctionExpression(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let value = new ClosureValue(n, s);
		if ( n.type === 'ArrowFunctionExpression' ) {
			value.thiz = s.thiz;
			if ( n.expression ) value.returnLastValue = true;
		}
		return value;
	}

	*evaluateLabeledStatement(n, s) {
		if ( this.yieldPower > 4 ) yield;
		return yield * this.branch(n.body, s);
	}

	*evaulateLiteral(n, s) {
		if ( this.yieldPower > 3 ) yield;
		if ( n.regex ) {
			return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm);
		} else if ( n.value === null ) {
			if ( this.raw === 'null' ) return Value.null;

			//Work around Esprima turning Infinity into null. =\
			let tryFloat = parseFloat(n.raw);
			if ( !isNaN(tryFloat) ) return this.fromNative(tryFloat);
			return this.fromNative(null);
		} else {
			return this.fromNative(n.value);
		}
	}

	*evaluateLogicalExpression(n, s) {
		let left = yield * this.branch(n.left,s);
		if ( this.yieldPower > 0 ) yield;
		switch ( n.operator ) {
			case '&&':
				if ( left.truthy ) return yield * this.branch(n.right,s);
				return left;
			case '||':
				if ( left.truthy ) return left;
				return yield * this.branch(n.right,s);
			default:
				throw new Error('Unknown logical operator: ' + n.operator);
		}

	}

	*evaluateMemberExpression(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let left = yield * this.branch(n.object,s);
		return yield * this.partialMemberExpression(left, n, s);
	}

	*partialMemberExpression(left, n, s) {
		if ( n.computed ) {
			let right = yield * this.branch(n.property,s);
			return yield * left.get(right.toNative(), s.realm);
		} else if ( n.property.type == 'Identifier') {
			if ( !left ) throw `Cant index ${n.property.name} of undefined`;
			return yield * left.get(n.property.name, s.realm);
		} else {
			if ( !left ) throw `Cant index ${n.property.value.toString()} of undefined`;
			return yield * left.get(n.property.value.toString(), s.realm);
		}
	}

	*evaluateObjectExpression(n, s) {
		//TODO: Need to wire up native prototype
		var nat = new ObjectValue(s.realm);
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
		if ( this.yieldPower > 0 ) yield;
		return nat;
	}

	*evaluateProgram(n, s) {
		let result = Value.undef;
		if ( n.vars )
		for ( var v in n.vars ) {
			s.add(v, Value.undef);
		}
		if ( n.strict === true ) s.strict = true;
		if ( this.yieldPower > 4 ) yield;
		for ( let statement of n.body ) {
			result = yield * this.branch(statement, s);
		}
		return result;
	}

	*evaluateReturnStatement(n, s) {
		let retVal = Value.undef;
		if ( n.argument ) retVal = yield * this.branch(n.argument,s);
		if ( this.yieldPower > 0 ) yield;
		return new CompletionRecord(CompletionRecord.RETURN, retVal);
	}

	*evaluateSequenceExpression(n, s) {
		let last = Value.undef;
		if ( this.yieldPower > 4 ) yield;
		for ( let expr of n.expressions ) {
			last = yield * this.branch(expr,s);
		}
		return last;
	}

	*evaluateSwitchStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let discriminant = yield * this.branch(n.discriminant, s);
		let last = Value.undef;
		let that = this;
		let matches = 0;
		let matchVals = new Array(n.cases.length);
		let matched = false;

		for ( let i = 0; i < n.cases.length; ++i ) {
			let cas = n.cases[i];
			if ( cas.test ) {
				let testval = yield * that.branch(cas.test, s);
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

		this.pushFrame({generator: gen(), type: 'loop', label: n.label});
		let finished = yield;

		return last;
	}

	*evaluateThisExpression(n, s) {
		if ( this.yieldPower > 0 ) yield;
		if ( s.thiz ) return s.thiz;
		else return Value.undef;
	}

	*evaluateThrowStatement(n, s) {
		let value = yield * this.branch(n.argument, s);
		if ( this.yieldPower > 0 ) yield;
		return new CompletionRecord(CompletionRecord.THROW, value);
	}

	*evaluateTryStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		if ( n.finalizer ) this.pushFrame({generator: this.branch(n.finalizer,s), type: 'finally', scope: s});
		let result = yield this.branchFrame('catch', n.block, s);
		if ( result instanceof CompletionRecord && result.type == CompletionRecord.THROW ) {
			if ( !n.handler ) {
				//console.log("No catch..., throwing", result.obj);
				return result;
			}
			let handlerScope = s.createChild();
			handlerScope.add(n.handler.param.name, result.value);
			return yield * this.branch(n.handler.body, handlerScope);
		}
		return result;
	}

	*evaluateUpdateExpression(n, s) {
		//TODO: Need to support something like ++x[1];
		let nue;
		if ( this.yieldPower > 0 ) yield;
		let ref = yield * this.resolveRef(n.argument, s, true);
		let old = Value.nan;

		if ( ref ) old = yield * ref.getValue();
		if ( old === undefined ) old = Value.nan;
		switch (n.operator) {
			case '++': nue = yield * old.add(this.fromNative(1)); break;
			case '--': nue = yield * old.subtract(this.fromNative(1)); break;
			default: throw new Error('Unknown update expression type: ' + n.operator);
		}
		if ( ref ) yield * ref.setValue(nue, s);

		if ( n.prefix ) return nue;
		return old;
	}

	*evaulateUnaryExpression(n, s) {
		if ( this.yieldPower > 0 ) yield;
		if ( n.operator === 'delete' ) {
			if ( n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier' ) {
				//This isnt something you can delete?
				return Value.true;
			}

			let ref = yield * this.resolveRef(n.argument, s);
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

		let left = yield * this.branch(n.argument,s);
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


	*evaluateVariableDeclaration(n, s) {
		let kind = n.kind;
		if ( this.yieldPower > 0 ) yield;
		for ( let decl of n.declarations ) {
			let value = Value.undef;
			if ( decl.init ) value = yield * this.branch(decl.init,s);
			else if ( s.has(decl.id.name) ) continue;

			if ( kind === 'const' ) {
				s.addConst(decl.id.name, value);
			} else {
				s.add(decl.id.name, value);
			}
		}
		return Value.undef;
	}

	*evaluateWhileStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		let last = Value.undef;
		let that = this;
		var gen = function*() {
			while ( (yield * that.branch(n.test,s)).truthy ) {
				last = yield that.branchFrame('continue', n.body, s);
			}
		};
		this.pushFrame({generator: gen(), type: 'loop', label: n.label});


		let finished = yield;
		return Value.undef;
	}

	*evaluateWithStatement(n, s) {
		if ( this.yieldPower > 0 ) yield;
		if ( s.strict ) return CompletionRecord.makeSyntaxError(this.realm, 'Strict mode code may not include a with statement');
		return CompletionRecord.makeSyntaxError(this.realm, 'With statement not supported by esper');
	}

	/**
	 * @private
	 * @param {object} n - AST Node to dispatch
	 * @param {Scope} s - Current evaluation scope
	 */
	dispatch(n, s) {
		if ( !n.dispatch ) {
			n.dispatch = this.findNextStep(n.type);
		}
		return n.dispatch.call(this, n, s);
	}

	findNextStep(type) {
		switch ( type ) {
			case 'ArrayExpression': return this.evaluateArrayExpression;
			case 'ArrowFunctionExpression': return this.evaluateFunctionExpression;
			case 'AssignmentExpression': return this.evaluateAssignmentExpression;
			case 'BinaryExpression': return this.evaulateBinaryExpression;
			case 'BreakStatement': return this.evaluateBreakStatement;
			case 'BlockStatement': return this.evaluateBlockStatement;
			case 'CallExpression': return this.evaluateCallExpression;
			case 'ClassDeclaration': return this.evaluateClassDeclaration;
			case 'ClassExpression': return this.evaluateClassExpression;
			case 'ConditionalExpression': return this.evaluateConditionalExpression;
			case 'DebuggerStatement': return this.evaluateEmptyStatement;
			case 'DoWhileStatement': return this.evaluateDoWhileStatement;
			case 'ContinueStatement': return this.evaluateContinueStatement;
			case 'EmptyStatement': return this.evaluateEmptyStatement;
			case 'ExpressionStatement': return this.evalutaeExpressionStatement;
			case 'ForStatement': return this.evaluateForStatement;
			case 'ForInStatement': return this.evaluateForInStatement;
			case 'ForOfStatement': return this.evaluateForOfStatement;
			case 'FunctionDeclaration': return this.evaluateFunctionDeclaration;
			case 'FunctionExpression': return this.evaluateFunctionExpression;
			case 'Identifier': return this.evaluateIdentifier;
			case 'IfStatement': return this.evaluateIfStatement;
			case 'LabeledStatement': return this.evaluateLabeledStatement;
			case 'Literal': return this.evaulateLiteral;
			case 'LogicalExpression': return this.evaluateLogicalExpression;
			case 'MemberExpression': return this.evaluateMemberExpression;
			case 'NewExpression': return this.evaluateCallExpression;
			case 'ObjectExpression': return this.evaluateObjectExpression;
			case 'Program': return this.evaluateProgram;
			case 'ReturnStatement': return this.evaluateReturnStatement;
			case 'SequenceExpression': return this.evaluateSequenceExpression;
			case 'SwitchStatement': return this.evaluateSwitchStatement;
			case 'ThisExpression': return this.evaluateThisExpression;
			case 'ThrowStatement': return this.evaluateThrowStatement;
			case 'TryStatement': return this.evaluateTryStatement;
			case 'UnaryExpression': return this.evaulateUnaryExpression;
			case 'UpdateExpression': return this.evaluateUpdateExpression;
			case 'VariableDeclaration': return this.evaluateVariableDeclaration;
			case 'WhileStatement': return this.evaluateWhileStatement;
			case 'WithStatement': return this.evaluateWithStatement;
			default:
				throw new Error('Unknown AST Node Type: ' + type);
		}
	}

	generator() {
		return {next: this.next.bind(this), throw: (e) => { throw e; }};
	}

	breakFrames() {

	}

	/**
	 * @private
	 * @param {object} n - AST Node to dispatch
	 * @param {Scope} s - Current evaluation scope
	 */
	*branch(n, s) {
		let oldAST = this.topFrame.ast;
		this.topFrame.ast = n;

		let result = yield * this.dispatch(n,s);
		this.topFrame.value = result;

		if ( result instanceof CompletionRecord ) result = yield result;
		if ( result && result.then ) result = yield result;

		this.topFrame.value = result;
		this.topFrame.ast = oldAST;

		return result;
	}

	branchFrame(type, n, s, extra) {
		let frame = {generator: this.branch(n,s), type: type, scope: s, ast: n};

		if ( extra ) {
			for ( var k in extra ) {
				frame[k] = extra[k];
			}
		}
		return this.pushFrame(frame);
	}

	get insterment() { return this.instrument; }
	set insterment(v) { this.instrument = v; }
}

module.exports = Evaluator;
