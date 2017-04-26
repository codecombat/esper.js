'use strict';
/* @flow */

const Value = require('../Value');
const LinkValue = require('./LinkValue');
const CompletionRecord = require('../CompletionRecord');
const ArrayValue = require('./ArrayValue');
const EvaluatorInstruction = require('../EvaluatorInstruction');
/**
 * Represents a value that maps directly to an untrusted local value.
 */

let privilegedThreads = new WeakSet();

class SmartLinkValue extends LinkValue {

	constructor(value, realm) {
		super(value, realm);
	}

	allowRead(name, e) {
		if ( e && privilegedThreads.has(e) ) return true;
		//if ( name === 'call' ) return true;
		//return true;
		if ( name.indexOf('esper_') === 0 ) return true;
		if ( name === 'hasOwnProperty' ) return true;
		let props = this.apiProperties;
		if ( props === null ) return true;
		return props.indexOf(name) !== -1;
	}

	allowWrite(name, e) {
		if ( e && privilegedThreads.has(e) ) return true;
		if ( name.indexOf('esper_') === 0 ) name = name.substr(6);
		var allowed = [];
		var native = this.native;
		if ( native.apiUserProperties ) {
			Array.prototype.push.apply(allowed, native.apiUserProperties);
		}

		return allowed.indexOf(name) != -1;
	}

	getPropertyValueMap() {
		let list  = {};
		for ( let p in this.native ) {
			let v = this.native[p];
			if ( this.allowRead(p) ) {
				list[p] = this.makeLink(v);
			}
		}
		return list;
	}

	static make(native, realm) {
		let wellKnown = realm.lookupWellKnown(native);
		if ( wellKnown ) return wellKnown;

		if ( Array.isArray(native) ) {
			var ia = new Array(native.length);
			for ( let i = 0; i < native.length; ++i ) {
				ia[i] = realm.import(native[i], 'smart');
			}
			return ArrayValue.make(ia, realm);
		}

		return new SmartLinkValue(native, realm);
	}

	makeLink(value) {
		return this.realm.import(value, 'smart');
	}


	ref(name, s) {
		let native = this.native;
		let owner = this;
		if ( ('esper_' + name) in native ) name = 'esper_' + name;

		return super.ref(name, s);
	}

	*set(name, value, s) {
		let evaluator = yield EvaluatorInstruction.getEvaluator();
		let native = this.native;
		if ( name in this.native ) {
			if ( !this.allowWrite(name, evaluator) ) return yield CompletionRecord.makeTypeError(s.realm, "Can't write to protected property: " + name);
		} else {
			if ( !native.apiUserProperties ) native.apiUserProperties = [];

			if ( native.apiUserProperties.indexOf(name) == -1 ) {
				native.apiUserProperties.push(name);
			}
		}

		return yield * super.set(name, value, s);

	}

	*get(name, realm) {
		let evaluator = yield EvaluatorInstruction.getEvaluator();
		let native = this.native;
		if ( ('esper_' + name) in this.native ) name = 'esper_' + name;

		if ( !(name in native) ) {
			return Value.undef;
		}

		if ( !this.allowRead(name, evaluator) ) {
			return yield CompletionRecord.makeTypeError(realm, "Can't read protected property: " + name);
		}

		return yield * super.get(name, realm);
	}

	get apiProperties() {
		let allowed = [];
		let native = this.native;

		if ( native.apiProperties === undefined && native.apiMethods === undefined ) return null;

		if ( native.apiProperties ) {
			Array.prototype.push.apply(allowed, native.apiProperties);
		}

		if ( native.apiUserProperties ) {
			Array.prototype.push.apply(allowed, native.apiUserProperties);
		}

		if ( native.apiMethods ) {
			Array.prototype.push.apply(allowed, native.apiMethods);
		}


		if ( native.apiOwnMethods ) {
			Array.prototype.push.apply(allowed, native.apiOwnMethods);
		}


		if ( native.programmableProperties ) {
			Array.prototype.push.apply(allowed, native.programmableProperties);
		}

		return allowed;
	}

	get debugString() {
		let props = this.apiProperties;
		return '[SmartLink: ' + this.native + ', props: ' + (props ? props.join(',') : '[none]') + ']';
	}

}

SmartLinkValue.makeThreadPrivileged = function(e) {
	privilegedThreads.add(e);
};

SmartLinkValue.isThreadPrivileged = function(e) {
	return privilegedThreads.has(e);
};

SmartLinkValue.makeThreadPrivlaged = SmartLinkValue.makeThreadPrivileged;

module.exports = SmartLinkValue;
