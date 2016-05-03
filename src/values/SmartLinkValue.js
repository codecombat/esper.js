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

	constructor(value) {
		super(value);
	}

	allowRead(name) {
		//if ( name === 'call' ) return true;
		//return true;
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

	static make(native, realm) {
		if ( native === undefined ) return Value.undef;
		if ( native instanceof Value ) return native;
		let prim = Value.fromPrimativeNative(native);
		if ( prim ) return prim;

		let wellKnown = realm.lookupWellKnown(native);
		if ( wellKnown ) return wellKnown;

		if ( Value.hasBookmark(native) ) {
			return Value.getBookmark(native);
		}

		if ( Array.isArray(native) ) {
			var ia = new Array(native.length);
			for ( let i = 0; i < native.length; ++i ) {
				ia[i] = SmartLinkValue.make(native[i], realm);
			}
			return ArrayValue.make(ia, realm);
		}

		return new SmartLinkValue(native);
	}

	makeLink(native, realm) {
		return SmartLinkValue.make(native, realm);
	}


	ref(name, realm) {
		let out = super.ref(name);
		if ( name in this.native ) {
			let noWrite = function *() { return yield CompletionRecord.makeTypeError(realm, "Can't write to protected property: " + name); };

			if ( !this.allowRead(name) ) {
				return {
					getValue: function *() { return yield CompletionRecord.makeTypeError(realm, "Can't read protected property: " + name); },
					setValue: noWrite,
					del: () => false
				};
			} else if ( !this.allowWrite(name) ) {
				out.setValue = noWrite;
			}

		} else {
			//TODO: Mark value as having been written by user so they retain write permissions to it.
		}

		return out;
	}

	*set(name, value, s, extra) {

		if ( name in this.native ) {
			if ( !this.allowWrite(name) ) return yield CompletionRecord.makeTypeError(s.realm, "Can't write to protected property: " + name);
		} else {
			//TODO: Mark value as having been written by user so they retain write permissions to it.
		}

		return yield * super.put(name, value, s, extra);

	}

	*get(name, realm) {
		if ( !(name in this.native) ) {
			return Value.undef;
		}

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
			Array.prototype.push.apply(allowed, native.apiMethods);
		}


		if ( native.programmableProperties ) {
			Array.prototype.push.apply(allowed, native.programmableProperties);
		}

		return allowed;
	}

	get debugString() {
		let props = this.apiProperties;
		return '[SmartLink: ' + this.native + ', props: ' + (props ? pops.join(',') : '[none]') + ']';
	}

}

module.exports = SmartLinkValue;
