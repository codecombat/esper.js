'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const Value = require('../Value');

function makeNumber(num) {
	return 0 + num.toNative();
}

function wrapMathFunction(name) {
	let fn = Math[name];
	return function*(thiz, args, realm) {
		let length = args.length;
		let argz = new Array(length);
		for ( let i = 0; i < length; ++i ) {
			if ( i < args.length ) argz[i] = args[i].toNative();
			else argz[i] = undefined;
		}

		let result = fn.apply(Math, argz);
		return Value.fromPrimativeNative(result);
	};

}

class MathObject extends EasyObjectValue {


	static get E$cew() { return Math.E; }
	static get LN10$cew() { return Math.LN10; }
	static get LN2$cew() { return Math.LN2; }
	static get LOG10E$cew() { return Math.LOG10E; }
	static get LOG2E$cew() { return Math.LOG2E; }
	static get PI$cew() { return Math.PI; }
	static get SQRT1_2$cew() { return Math.SQRT1_2; }
	static get SQRT2$cew() { return Math.SQRT2; }
}

MathObject.sqrt = wrapMathFunction('sqrt');
MathObject.atanh = wrapMathFunction('atanh');
MathObject.log2 = wrapMathFunction('log2');
MathObject.asinh = wrapMathFunction('asinh');
MathObject.log = wrapMathFunction('log');
MathObject.trunc = wrapMathFunction('trunc');
MathObject.max = wrapMathFunction('max');
MathObject.log10 = wrapMathFunction('log10');
MathObject.atan2 = wrapMathFunction('atan2');
MathObject.round = wrapMathFunction('round');
MathObject.exp = wrapMathFunction('exp');
MathObject.tan = wrapMathFunction('tan');
MathObject.floor = wrapMathFunction('floor');
MathObject.sign = wrapMathFunction('sign');
MathObject.fround = wrapMathFunction('fround');
MathObject.sin = wrapMathFunction('sin');
MathObject.tanh = wrapMathFunction('tanh');
MathObject.expm1 = wrapMathFunction('expm1');
MathObject.cbrt = wrapMathFunction('cbrt');
MathObject.cos = wrapMathFunction('cos');
MathObject.abs = wrapMathFunction('abs');
MathObject.acosh = wrapMathFunction('acosh');
MathObject.asin = wrapMathFunction('asin');
MathObject.ceil = wrapMathFunction('ceil');
MathObject.atan = wrapMathFunction('atan');
MathObject.cosh = wrapMathFunction('cosh');
MathObject.random = wrapMathFunction('random');
MathObject.log1p = wrapMathFunction('log1p');
MathObject.imul = wrapMathFunction('imul');
MathObject.hypot = wrapMathFunction('hypot');
MathObject.pow = wrapMathFunction('pow');
MathObject.sinh = wrapMathFunction('sinh');
MathObject.acos = wrapMathFunction('acos');
MathObject.min = wrapMathFunction('min');
MathObject.max = wrapMathFunction('max');


MathObject.prototype.clazz = 'Math';

module.exports = MathObject;
