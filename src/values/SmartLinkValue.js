'use strict';
/* @flow */

const Value = require('../Value');
const LinkValue = require('./LinkValue');
const CompletionRecord = require('../CompletionRecord');
const ArrayValue = require('./ArrayValue');
/**
 * Represents a value that maps directly to an untrusted local value.
 */
class SmartLinkValue extends LinkValue {

	constructor(value, realm) {
		super(value, realm);
	}

	allowRead(name) {
		//if ( name === 'call' ) return true;
		//return true;
		if ( name.indexOf('esper_') === 0 ) return true;
		if ( name === 'hasOwnProperty' ) return true;
		let props = this.apiProperties;
		if ( props === null ) return true;
		return props.indexOf(name) !== -1;
	}

	allowWrite(name) {
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


	ref(name, realm) {
		let out = super.ref(name, realm);
		let native = this.native;
		if ( name in native ) {
			let noWrite = function *() {
				let err = CompletionRecord.makeTypeError(realm, "Can't write to protected property: " + name);
				yield * err.addExtra({code: 'SmartAccessDenied', when: 'write', ident: name});
				return yield err;
			};
			let noRead = function *() {
				let err = CompletionRecord.makeTypeError(realm, "Can't read protected property: " + name);
				yield * err.addExtra({code: 'SmartAccessDenied', when: 'read', ident: name});
				return yield err;
			};
			if ( !this.allowRead(name) ) {
				return {
					getValue: noRead,
					setValue: noWrite,
					del: () => false
				};
			} else if ( !this.allowWrite(name) ) {
				out.setValue = noWrite;
			}

		} else {
			let defaultAction = out.setValue;
			if ( !native.apiUserProperties ) native.apiUserProperties = [];

			if ( native.apiUserProperties.indexOf(name) == -1 ) {
				out.setValue = function *() {
					let ret = yield * defaultAction.apply(this, arguments);
					native.apiUserProperties.push(name);
					return ret;
				};
			}
		}

		return out;
	}

	*set(name, value, s, extra) {

		if ( name in this.native ) {
			if ( !this.allowWrite(name) ) return yield CompletionRecord.makeTypeError(s.realm, "Can't write to protected property: " + name);
		} else {
			//TODO: Mark value as having been written by user so they retain write permissions to it.
		}

		return yield * super.set(name, value, s, extra);

	}

	*get(name, realm) {
		if ( !(name in this.native) ) {
			return Value.undef;
		}

		if ( ('esper_' + name) in this.native ) name = 'esper_' + name;

		if ( !this.allowRead(name) ) {
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

module.exports = SmartLinkValue;
