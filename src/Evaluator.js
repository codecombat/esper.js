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
		this.defaultYieldPower = 5;
		this.yieldPower = this.defaultYieldPower;
		this.debug = false;
		this.profile = false;
		this.lastASTNodeProcessed = null;
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
		let gen = n ? this.branch(n, s) : (function*() {
			return yield EvaluatorInstruction.stepMinor;
		})();
		this.pushFrame({generator: gen, type: 'program', scope: s, ast: n});
	}
	processLostFrames(frames) {
		for ( let f of frames ) {
			if ( f.profileName ) {
				this.incrCtr('fxTime', f.profileName, Date.now() - f.entered);
			}
		}
	}
	unwindStack(target, canCrossFxBounds, label) {
		let finallyFrames = [];
		for ( let i = 0; i < this.frames.length; ++i ) {
			let t = this.frames[i].type;
			let match = t == target || (target == 'return' && t == 'function' );
			if ( match && label ) {
				match = this.frames[i].labels && this.frames[i].labels.indexOf(label) !== -1;
			}

			if ( match ) {
				let j = i + 1;
				for (; j < this.frames.length; ++j ) if ( this.frames[j].type != 'finally' ) break;
				let fr = this.frames[j];
				this.processLostFrames(this.frames.splice(0, i + 1));
				this.saveFrameShortcuts();
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if ( target == 'return' && this.frames[i].retValue ) {
				let fr = this.frames[i];
				this.processLostFrames(this.frames.splice(0, i));
				this.saveFrameShortcuts();
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
		let frames = this.frames;

		//Implement proper tailcalls by hand.
		do {
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
			lastValueOveride = undefined;
			let val = result.value;

			if ( val instanceof EvaluatorInstruction ) {
				switch ( val.type ) {
					case 'branch':
						this.branchFrame(val.kind, val.ast, val.scope, val.extra);
						continue;
					case 'getEvaluator':
						//lastValueOveride = this;
						//continue;
						return this.next(this);
					case 'getRealm':
						return this.next(this.realm);
					case 'getScope':
						for ( let i = 0; i < frames.length; ++i)
							if ( frames[i].scope ) return this.next(frames[i].scope);
						throw new Error('No scope');
					case 'waitForFramePop':
						continue;
					case 'framePushed':
						continue;
					case 'event':
					case 'step':
						if ( this.instrument ) this.instrument(this, val);
						return {done: false, value: val};
				}
			}

			if ( val instanceof CompletionRecord ) {
				this.processCompletionValueMeaning(val);
				this.lastValue = val.value;
				continue;
			}
			//if ( !val ) console.log("Bad val somewhere around", this.topFrame.type);
			if ( this.instrument ) this.instrument(this, val);

			if ( val && val.then ) {
				if ( top && top.type !== 'await' ) {
					this.pushAwaitFrame(val);
				}
				return {done: false, value: val};
			}

			this.lastValue = val;
			if ( result.done ) {
				let lastFrame = this.popFrame();

				if ( lastFrame.profileName ) {
					this.processLostFrames([lastFrame]);
				}

				// Latient values can't cross function calls.
				// Dont do this, and you get coffeescript mode.
				if ( lastFrame.type === 'function' && !lastFrame.returnLastValue ) {
					this.lastValue = Value.undef;
				}

				if ( frames.length === 0 ) {
					if ( this.debug ) {
						this.dumpProfilingInformation();
					}
					if ( this.onCompletion ) this.onCompletion(result.value);
					return {done: true, value: result.value};
				} else continue;
			}
		} while ( false );

		return {done: false, value: this.lastValue};
	}

	processCompletionValueMeaning(val) {
		if ( val.type === CompletionRecord.THROW_STD ) {
			let msg = val.value[1];
			let extra = val.value[2];
			switch ( val.value[0] ) {
				case "TypeError":
					val = CompletionRecord.makeTypeError(this.realm, msg);
					break;
				case "RefrenceError":
					val = CompletionRecord.makeReferenceError(this.realm, msg);
					break;
				case "RangeError":
					val = CompletionRecord.makeReferenceError(this.realm, msg);
					break;
				case "SyntaxError":
					val = CompletionRecord.makeSyntaxError(this.realm, msg);
					break;
			}
			if(extra) {
				let it = val.addExtra(extra)
				let v;
				while(!(v = it.next()).done);
			}
		}
		if ( !(val.value instanceof Value) ) {
			if ( val.value instanceof Error ) {
				throw new Error('Value was an error: ' + val.value.stack);
			} else if ( val.value.type ) {
				switch ( val.value.type ) {
					case "TypeError": val.value = CompletionRecord.makeTypeError(this.realm, val.value.message).value;
				}
			} else {
				throw new Error('Value isnt of type Value, its: ' + val.value.toString());
			}
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
				if ( e && e.stack ) smallStack = e.stack.split(/\n/).slice(0, 4).join('\n');
				let stk = this.buildStacktrace(e).join('\n    ');
				let bestFrame;
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
							if ( vv instanceof Value ) stk += `
${key} => ${vv.debugString}`;
							else stk += `
${key} => ${vv}`;
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
				let v = val.value.toNative();
				if ( this.onError ) this.onError(v);
				throw v;
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
		frame.srcAst = frame.ast;
		if ( frame.yieldPower === undefined ) frame.yieldPower = this.defaultYieldPower;
		this.frames.unshift(new Frame(frame.type, frame));
		this.saveFrameShortcuts();
	}

	pushAwaitFrame(val) {
		this.pushFrame({
			generator: (function *(f) {
				while ( !f.resolved ) yield f;
				if ( f.successful ) {
					return f.value;
				} else {
					return new CompletionRecord(CompletionRecord.THROW, f.value);
				}
			})(val),
			type: 'await'
		});
	}

	popFrame() {
		let frame = this.frames.shift();
		this.saveFrameShortcuts();
		return frame;
	}

	saveFrameShortcuts() {
		let prev = this.yieldPower;
		if ( this.frames.length == 0 ) {
			this.topFrame = undefined;
			this.yieldPower = this.defaultYieldPower;
		} else {
			this.topFrame = this.frames[0];
			this.yieldPower = this.topFrame.yieldPower;
		}
	}

	fromNative(native, x) {
		return this.realm.fromNative(native, x);
	}

	generator() {
		return {
			next: this.next.bind(this), 
			throw: (e) => { throw e; },
			evaluator: this
		};
	}

	breakFrames() {

	}


	*resolveRef(n, s, create) {
		let oldAST = this.topFrame.ast;
		this.topFrame.ast = n;
		let r = yield * Evaluator.doResolveRef(n, s, create, this.branch.bind(this));
		this.topFrame.ast = oldAST;
		return r;
	}

	*partialMemberExpression(left, n, s) {
		if ( n.computed ) {
			let right = yield * this.branch(n.property, s);
			return yield * left.get(right.toNative());
		} else if ( n.property.type == 'Identifier') {
			if ( !left ) throw `Cant index ${n.property.name} of undefined`;
			return yield * left.get(n.property.name);
		} else {
			if ( !left ) throw `Cant index ${n.property.value.toString()} of undefined`;
			return yield * left.get(n.property.value.toString());
		}
	}

	//NOTE: Returns generator, fast return yield *;
	doBinaryEvaluation(operator, left, right) {
		switch ( operator ) {
			case '==': return left.doubleEquals(right);
			case '!=': return left.notEquals(right);
			case '===': return left.tripleEquals(right);
			case '!==': return left.doubleNotEquals(right);
			case '+': return left.add(right);
			case '-': return left.subtract(right);
			case '*': return left.multiply(right);
			case '/': return left.divide(right);
			case '%': return left.mod(right);
			case '|': return left.bitOr(right);
			case '^': return left.bitXor(right);
			case '&': return left.bitAnd(right);
			case 'in': return right.inOperator(left);
			case 'instanceof':
				if ( !right.call ) {
					return (function *() { yield CompletionRecord.typeError("Right-hand side of 'instanceof' is not callable", {code: "RightHandSideNotCallable", i18nParams: {name: 'instanceof'}}); })();
				}
				return left.instanceOf(right);
			case '>': return left.gt(right);
			case '<': return left.lt(right);
			case '>=': return left.gte(right);
			case '<=': return left.lte(right);
			case '<<': return left.shiftLeft(right);
			case '>>': return left.shiftRight(right);
			case '>>>': return left.shiftRightZF(right);
			case '**': return left.pow(right);
			default:
				throw new Error('Unknown binary operator: ' + operator);
		}
	}

	branchFrame(type, n, s, extra) {
		let frame = {generator: this.branch(n, s), type: type, scope: s, ast: n};

		if ( extra ) {
			for ( var k in extra ) {
				frame[k] = extra[k];
			}
			if ( extra.profileName ) {
				frame.entered = Date.now();
			}
		}
		this.pushFrame(frame);
		return EvaluatorInstruction.framePushed;
	}

	beforeNode(n) {
		let tf = this.topFrame;
		let state = {top: tf, ast: tf.ast, node: n};
		this.lastASTNodeProcessed = n;
		if ( this.debug ) this.incrCtr('astInvocationCount', n.type);
		tf.ast = n;
		return state;
	}

	afterNode(state, r) {
		let tf = this.topFrame;
		tf.value = r;
		tf.ast = state.ast;
	}

	/**
	 * @private
	 * @param {object} n - AST Node to dispatch
	 * @param {Scope} s - Current evaluation scope
	 */
	branch(n, s) {
		if ( !n.dispatch ) {
			let nextStep = this.findNextStep(n.type);

			n.dispatch = function*(that, n, s) {
				let state = that.beforeNode(n);

				let result = yield * nextStep(that, n, s);
				if ( result instanceof CompletionRecord ) result = yield result;
				if ( result && result.then ) result = yield result;

				that.afterNode(state, result);

				return result;
			};
		}
		return n.dispatch(this, n, s);
	}

	incrCtr(n, c, v) {
		if ( v === undefined ) v = 1;
		if ( !this.profile ) this.profile = {};
		let o = this.profile[n];
		if ( !o ) {
			o = {};
			this.profile[n] = o;
		}
		c = c || '???';
		if ( c in o ) o[c] += v;
		else o[c] = v;
	}


	dumpProfilingInformation() {
		function lpad(s, l) { return s + new Array(Math.max(l - s.length, 1)).join(' '); }

		if ( !this.profile ) {
			console.log('===== Profile: None collected =====');
			return;
		}

		console.log('===== Profile =====');
		for ( let  sec in this.profile ) {
			console.log(sec + ' Stats:');
			let o = this.profile[sec];
			let okeys = Object.keys(o).sort((a,b) => o[b] - o[a]);
			for ( let name of okeys ) {
				console.log(`  ${lpad(name, 20)}: ${o[name]}`);
			}
		}
		console.log('=================');
	}

	get insterment() { return this.instrument; }
	set insterment(v) { this.instrument = v; }
}


Evaluator.doResolveRef = require('./EvaluatorHandlers').doResolveRef;
Evaluator.prototype.findNextStep = require('./EvaluatorHandlers').findNextStep;

module.exports = Evaluator;
