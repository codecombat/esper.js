"use strict";
/* @flow */

const Value = require('../Value');
const PropertyDescriptor = require('./PropertyDescriptor');
const ObjectValue = require('./ObjectValue');

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ClosureValue extends ObjectValue {
	
	/**
	 * @param {object} func - AST Node for function
	 * @param {Scope} scope - Functions up-values.
	 */
	constructor(func, scope) {
		super(scope);
		this.realm = scope.realm;
		this.func = func;
		this.scope = scope;
		this.setPrototype(scope.realm.FunctionPrototype);
		this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(scope));
		this.properties['name'] = new PropertyDescriptor(this.fromNative(func.id ? func.id.name : undefined));
		this.properties['length'] = new PropertyDescriptor(this.fromNative(func.params.length));
		

	}

	toNative() {
		return Value.createNativeBookmark(this);
	}

	get debugString() {
		if ( this.func && this.func.id ) return `[Function ${this.func.id.name}]`
		return "[Function]";
	}

	get truthy() {
		return !true;
	}

	*doubleEquals(other) {
		return other === this ? Value.true : Value.false;
	}

	/**
	 *
	 * @param {Evaluator} evaulator
	 * @param {Value} thiz
	 * @param {Value[]} args
	 */
	*call(thiz, args, scope) {
		//TODO: This way of scoping is entirelly wrong.
		if ( !scope ) scope = this.scope;
		let invokeScope = scope.createChild();
		invokeScope.thiz = this.thiz || thiz;
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
		let args_obj = new ObjectValue(scope.realm);

		for ( let i = 0; i < argn; ++i ) {
			let vv = Value.undef;
			if ( i < args.length ) vv = args[i];

			let v = new PropertyDescriptor(vv);
			argvars[i] = v;

			if ( invokeScope.strict ) {
				args_obj.assign(i, vv);
			} else {
				args_obj.rawSetProperty(i, v);
			}
		}

		if ( !invokeScope.strict ) {
			args_obj.set('callee', this);
		}

		args_obj.set("length", this.fromNative(args.length));

		invokeScope.add('arguments', args_obj);

		for ( let i = 0; i < this.func.params.length; ++i ) {
			let name = this.func.params[i].name;
			if ( scope.strict ) invokeScope.add(name, args[i]); //Scope is strict, so we make a copy for the args variable
			else invokeScope.object.rawSetProperty(name, argvars[i]); //Scope isnt strict, magic happens.
		}
		
		var result = yield ['branch','function', this.func.body, invokeScope];
		return result;
	}

	get jsTypeName() { return 'function'; }
	get specTypeName() { return 'object'; }

}

module.exports = ClosureValue;
