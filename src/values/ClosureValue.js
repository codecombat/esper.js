"use strict";
/* @flow */

const Value = require('../Value');
const Variable = require('./Variable');
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
		this.env = scope.env;
		this.func = func;
		this.scope = scope;
		this.setPrototype(scope.env.FunctionPrototype);
		this.properties['prototype'] = new Variable(new ObjectValue(scope));
	}

	toNative() {
		return Value.createNativeBookmark(this);
	}

	debugString() { 
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

		let argvars = new Array(args.length);
		let args_obj = new ObjectValue(scope.env);

		for ( let i = 0; i < args.length; ++i ) {
			let v = new Variable(args[i]);
			argvars[i] = v;
			args_obj.rawSetProperty(i, v);
		}

		args_obj.set("length", this.fromNative(args.length));

		invokeScope.add('arguments', args_obj);

		for ( let i = 0; i < this.func.params.length; ++i ) {
			let name = this.func.params[i].name;
			if ( i < args.length ) {
				if ( scope.strict ) invokeScope.add(name, args[i]); //Scope is strict, so we make a copy for the args variable
				else invokeScope.object.rawSetProperty(name, argvars[i]); //Scope isnt strict, magic happens.
			} else {
				invokeScope.add(name, Value.undef);
			}
		}
		
		var result = yield ['branch','function', this.func.body, invokeScope];
		return result;
	}

	get jsTypeName() { return 'function'; }
	get specTypeName() { return 'object'; }

}

module.exports = ClosureValue;
