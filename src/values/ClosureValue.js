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
	*call(thiz, args, evaulator, scope) {
		//TODO: This way of scoping is entirelly wrong.
		let invokeScope = scope.createChild();
		invokeScope.thiz = this.thiz || thiz;

		if ( this.func.vars ) 
		for ( var v in this.func.vars ) {
			invokeScope.add(v, Value.undef);
		}

		if ( this.func.upvars ) 
		for ( var n in this.func.upvars ) {
			//TODO: There should be a method that does this.
			invokeScope.object.properties[n] = this.scope.object.properties[n];
		}


		for ( let i = 0; i < this.func.params.length; ++i ) {
			let name = this.func.params[i].name;
			if ( i < args.length ) {
				invokeScope.add(name, args[i]);
			} else {
				invokeScope.add(name, Value.undef);
			}
		}
		
		var result = yield evaulator.branchFrame('function', this.func.body, invokeScope);
		return result;
	}

}

module.exports = ClosureValue;
