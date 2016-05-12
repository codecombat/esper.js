'use strict';
const EmptyValue = require('./EmptyValue');
const Value = require('../Value');

function defer() {
	var resolve, reject;
	var promise = new Promise(function(a, b) {
		resolve = a;
		reject = b;
	});
	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

class FutureValue extends Value {

	constructor(realm) {
		super(realm);
		this.resolved = false;
		this.successful = undefined;
		this.value = undefined;
		this.defered = defer();
	}

	/**
	 * Creates a new future value wraping the promise p.
	 * @param {Promise} promise
	 */
	static make(promise) {
		var fv = new FutureValue(null);
		promise.then(function(resolved) {
			fv.resolve(Value.fromNative(resolved));
		}, function(caught) {
			fv.reject(Value.fromNative(caught));
		});
		return fv;
	}

	resolve(value) {
		this.value = value;
		this.resolved = true;
		this.successful = true;
		this.defered.resolve(value);
	}

	reject(value) {
		this.value = value;
		this.resolved = true;
		this.successful = false;
		this.defered.resolve(value);
	}

	then() {
		var p = this.defered.promise;
		return p.then.apply(p, arguments);
	}

	get jsTypeName() { return 'internal:future'; }
	get debugString() { return '[Future]'; }
}

module.exports = FutureValue;
