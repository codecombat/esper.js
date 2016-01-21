"use strict"

const EasyObjectValue = require('../values/EasyObjectValue');

function makeNumber(num) {
	return 0 + num.toNative();
}

class MathObject extends EasyObjectValue {
	static *sqrt(thiz, args, s) { 
		let num = makeNumber(args[0]);
		return this.fromNative(Math.sqrt(num));
	}

	static *dump$cew(thiz, args) {
		console.log("DUMP", args);
		return this.fromNative(undefined);
	}

	
	static get E$cew() { return Math.E; }
	static get LN10$cew() { return Math.LN10; }
	static get LN2$cew() { return Math.LN2; }
	static get LOG10E$cew() { return Math.LOG10E; }
	static get LOG2E$cew() { return Math.LOG2E; }
	static get PI$cew() { return Math.PI; }
	static get SQRT1_2$cew() { return Math.SQRT1_2; }
	static get SQRT2$cew() { return Math.SQRT2; }
}

module.exports = MathObject;
