"use strict";

/**
 * @flow
 */

const Scope = require('./Scope');
const Value = require('./Value');


class EvalFunction extends Value {
	*call(evaluator, thiz, args, childScope) {
		let code = args[0].toNative().toString();
		let ast;
		try {
			ast = esprima.parse(code);
			console.log(ast);
		} catch ( e ) {
			let eo = new SyntaxError(e.description);
			let tr = yield * evaluator.throw(this.fromNative(eo));
			yield tr;
			return tr;
		}
		return yield evaluator.branchFrame('function', ast, childScope);
	}
}

/**
 * Represents a javascript execution environment including
 * it's scopes and standard libraries.
 */
class Environment {
	print() {
		console.log.apply(console, arguments);
	}
	
	constructor(options) {

		this.false = this.valueFromNative(false);
		this.true = this.valueFromNative(true);
		this.NaN = this.valueFromNative(NaN);

		/** @type {Value} */
		this.console = this.valueFromNative(console);
		/** @type {Value} */
		this.Math = this.valueFromNative(Math);
		/** @type {Value} */
		this.Object = this.valueFromNative(Object);

		let scope = new Scope(this);
		scope.strict = options.strict || true;
		let that = this;
		var printer = this.valueFromNative(function() {
			that.print.apply(that, arguments);
		});
		scope.set('print', printer);
		scope.set('log', printer);
		scope.set('NaN', this.valueFromNative(NaN));
		scope.set('Infinity', this.valueFromNative(Infinity));

		scope.set('console', this.console);
		scope.set('JSON', this.valueFromNative(JSON));
		scope.set('Math', this.Math);
		scope.set('parseInt', this.valueFromNative(parseInt));
		scope.set('Object', this.valueFromNative(Object));
		scope.set('Array', this.valueFromNative(Array));
		scope.set('String', this.valueFromNative(String));
		scope.set('TypeError', this.valueFromNative(TypeError));
		scope.set('Error', this.valueFromNative(TypeError));
		scope.set('isNaN', this.valueFromNative(isNaN));
		scope.set('Date', this.valueFromNative(Date));
		scope.set('eval', new EvalFunction());
		scope.thiz = scope.object;
		/** @type {Scope} */
		this.globalScope = scope;
	}

	valueFromNative(native) {
		return Value.fromNative(native, this);
	}
};

module.exports = Environment;