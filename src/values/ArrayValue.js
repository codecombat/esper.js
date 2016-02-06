"use strict";


const PrimitiveValue = require('./PrimitiveValue');
const ObjectValue = require('./ObjectValue');
const Value = require('../Value');
let NumberValue;


class ArrayValue extends ObjectValue {

	constructor(env) {
		super(env);
		this.setPrototype(this.env.ArrayPrototype);
	}


	*member(name, env) {
		
		return yield * super.member(name, env);
	}

	*doubleEquals(other) { 
		
		return Value.false;

	}

	static make(vals, env) {
		let av = new ArrayValue(env);
		for ( let i = 0; i < vals.length; ++i ) {
			av.set(i, vals[i]);
		}
		av.set('length', this.fromNative(vals.length));
		return av;
	}
}

module.exports = ArrayValue;

NumberValue = require('./NumberValue');
