'use strict';
/* @flow */

const Value = require('../Value');
const PropertyDescriptor = require('./PropertyDescriptor');
const ObjectValue = require('./ObjectValue');
const EvaluatorInstruction = require('../EvaluatorInstruction');

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ClosureValue extends ObjectValue {

	/**
	 * @param {object} func - AST Node for function
	 * @param {Scope} scope - Functions up-values.
	 */
	constructor(func, scope) {
		let realm = scope.realm;
		super(realm, realm.FunctionPrototype);
		this.realm = scope.realm;
		this.func = func;
		this.scope = scope;
		this.returnLastValue = false;
		this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(realm));
		this.properties['name'] = new PropertyDescriptor(this.fromNative(func.id ? func.id.name : undefined));
		this.properties['length'] = new PropertyDescriptor(this.fromNative(func.params.length));


	}

	toNative() {
		return Value.createNativeBookmark(this, this.realm);
	}

	get debugString() {
		if ( this.func && this.func.id ) return `[Function ${this.func.id.name}]`;
		return '[Function]';
	}

	get truthy() {
		return !true;
	}

	*doubleEquals(other) {
		return other === this ? Value.true : Value.false;
	}

	/**
	 *
	 * @param {Value} thiz
	 * @param {Value[]} args
	 * @param {Scope} scope
	 */
	*call(thiz, args, scope, extra) {
		//TODO: This way of scoping is entirelly wrong.
		if ( !scope ) scope = this.scope;
		let invokeScope;
		if ( this.boundScope ) {
			invokeScope = this.boundScope.createChild();
			invokeScope.writeTo = this.boundScope.object;
			invokeScope.thiz = this.thiz || /* thiz ||*/ this.boundScope.thiz;
		} else {
			invokeScope = scope.createChild();
			invokeScope.thiz = this.thiz || thiz;
		}

		if ( this.func.strict === true ) invokeScope.strict = true;

		let obj = this.scope.object;
		if ( this.func.upvars ) {
			for ( let n in this.func.upvars ) {
				//TODO: There should be a method that does this.
				invokeScope.object.rawSetProperty(n, obj.properties[n]);
			}
		}

		//Do Var Hoisting
		if ( this.func.vars ) {
			for ( let v in this.func.vars ) {
				invokeScope.add(v, Value.undef);
				invokeScope.object.properties[v].isVariable = true;
			}
		}

		if ( this.func.funcs ) {
			for ( let fn in this.func.funcs ) {
				let n = this.func.funcs[fn];
				let closure = new ClosureValue(n, scope);
				invokeScope.add(n.id.name, closure);
			}
		}

		let argn = Math.max(args.length, this.func.params.length);
		let argvars = new Array(argn);
		let argsObj = new ObjectValue(scope.realm);

		for ( let i = 0; i < argn; ++i ) {
			let vv = Value.undef;
			if ( i < args.length ) vv = args[i];

			let v = new PropertyDescriptor(vv);
			argvars[i] = v;

			if ( invokeScope.strict ) {
				yield * argsObj.set(i, vv);
			} else {
				argsObj.rawSetProperty(i, v);
			}
		}

		if ( !invokeScope.strict ) {
			yield * argsObj.set('callee', this);
		}

		yield * argsObj.set('length', this.fromNative(args.length));

		invokeScope.add('arguments', argsObj);

		for ( let i = 0; i < this.func.params.length; ++i ) {
			let name = this.func.params[i].name;
			if ( scope.strict ) {
				//Scope is strict, so we make a copy for the args variable
				invokeScope.add(name, i < args.length ? args[i] : Value.undef);
			} else {
				//Scope isnt strict, magic happens.
				invokeScope.object.rawSetProperty(name, argvars[i]);
			}
		}
		let opts = {returnLastValue: this.returnLastValue};
		if ( extra && extra.evaluator && extra.evaluator.debug ) {
			opts['profileName'] = extra.callNode.callee.srcName;
		}
		if ( this.func.nonUserCode ) {
			opts.yieldPower = -1;
		}
		var result = yield EvaluatorInstruction.branch('function', this.func.body, invokeScope, opts);
		return result;
	}

	get jsTypeName() { return 'function'; }
	get specTypeName() { return 'object'; }

}
ClosureValue.prototype.clazz = 'Function';

module.exports = ClosureValue;
