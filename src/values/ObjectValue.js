"use strict";
/* @flow */

const Value = require('../Value');
const PropertyDescriptor = require('./PropertyDescriptor');
const CompletionRecord = require('../CompletionRecord');
const PrimitiveValue = require('./PrimitiveValue');

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ObjectValue extends Value {
	
	constructor(realm) {
		super(realm);
		this.extensable = true;
		this.properties = Object.create(null);
		this.setPrototype(this.realm.ObjectPrototype);
	}

	ref(name) {
		var existing = this.properties[name];
		var ret = {
			set: (v,s) => this.assign(name,v,s),
		};

		let get;
		if ( existing ) {
			ret.isVariable = existing.isVariable;
			ret.del = () => {
				if ( !this.properties[name].configurable ) return false;
				delete this.properties[name];
				return true;
			};
			ret.getValue = existing.getValue.bind(existing, this);
			ret.setValue = existing.setValue.bind(existing, this);
			Object.defineProperty(ret, 'value', {
				get: () => existing.value,
				set: (v) => {
					this.assign(name, v);
				}
			});

		} else {
			ret.isVariable = false;
			ret.del = () => false;
			Object.defineProperty(ret, 'value', {
				get: () => Value.undef,
				set: (v, s) => {
					this.assign(name, v, s);
				}
			});
			ret.getValue = function *() { return Value.undef; };
			ret.setValue = function *(to) { return ret.value = to; };
		}
		return ret;
	}

	assign(name, value, s) {
		let v;
		if ( Object.prototype.hasOwnProperty.call(this.properties, name) ) {
			v = this.properties[name];
			if ( v.writeable ) {
				v.value = value;
			} else if ( s && s.strict ) {
				console.log("A");
				throw new TypeError('Cant write to something thats not writeable');
			} else {
				console.log("B");
				throw new TypeError('Not STrict!')
			}
		} else if ( this.extensable ) {
			v = new PropertyDescriptor(value, this);
			v.del = () => this.delete(name);
			this.properties[name] = v;
		} else {
			//TODO: Should we throw here in strict mode?
			return;
		}
	}

	*put(name, value, s) {
		var r = this.ref(name);
		return yield * r.setValue(value, s);
	}

	get(name) {
		let ref = this.properties[name];
		if ( ref ) return ref.value;
		return Value.undef;
	}

	rawSetProperty(name, value) {
		this.properties[name] = value;
	}

	
	set(name, value) {
		let v;
		if ( Object.prototype.hasOwnProperty.call(this.properties, name) ) {
			v = this.properties[name];
			v.value = value;
		} else {
			v = new PropertyDescriptor(value, this);
			v.del = () => this.delete(name);
			this.properties[name] = v;
		}
	}

	has(name) {
		return name in this.properties;
	}

	delete(name) {
		delete this.properties[name];
	}
	
	toNative() {
		var bk = Value.createNativeBookmark(this);
		for ( let p in this.properties ) {
			if ( Object.prototype.hasOwnProperty.call(bk, p) ) continue;
			//TODO: Worry about getter and setter functions.
			Object.defineProperty(bk, p, {
				get: () => {
					var c = this.properties[p].value;
					return c === undefined ? undefined : c.toNative();
				},
				set: (v) => { this.properties[p].value = Value.fromNative(v, this.realm); },
				enumerable: this.properties[p].enumerable, writeable: this.properties[p].writeable, configurable: this.properties[p].configurable
			});
		}
		return bk;
	}


	*add(other) { return yield * (yield * this.toPrimitiveValue()).add(other); }
	*doubleEquals(other) {
		if ( other instanceof PrimitiveValue ) {
			let pv = yield * this.toPrimitiveValue();
			return yield * pv.doubleEquals(other);
		}
		let pthis = yield * this.toPrimitiveValue();
		return yield * pthis.doubleEquals(other);
	}
	*inOperator(str) {
		let svalue = yield * str.toStringValue();
		return this.has(svalue.toNative()) ? Value.true : Value.false;
	}

	*member(name) { 
		let ref = this.ref(name);
		if ( ref ) return yield * ref.getValue(this);
		return Value.undef;
	}

	*instanceOf(other, realm) {
		return yield * other.constructorOf(this, realm);
	}

	*constructorOf(what, realm) {
		let target = yield * this.member('prototype');
		let pt = what.getPrototype(realm);
		let checked = [];

		while ( pt ) {
			if ( pt === target ) return Value.true;
			checked.push(pt);
			pt = pt.getPrototype();
			if ( checked.indexOf(pt) !== -1 ) return Value.false;
		}
		return Value.false;
	}

	*observableProperties() {
		for ( let p in this.properties ) {
			if ( !this.properties[p].enumerable ) continue;
			yield this.fromNative(p);
		}
		return;
	}

	hasOwnProperty(name) {
		return Object.prototype.hasOwnProperty.call(this.properties, name);
	}

	setPrototype(val) {
		if ( val === null || val === undefined ) {
			Object.setPrototypeOf(this.properties, null);
			this.proto = null;
			return;
		}
		this.proto = val;
		Object.setPrototypeOf(this.properties, val.properties);
	}

	getPrototype() {
		return this.proto;
	}

	get debugString() { 
		let strProps = ['{','[', this.clazz,']'];
		if ( this.proto ) {
			strProps.push('[[Prototype]]: ', this.proto.wellKnownName || this.proto.clazz);
		}
		for ( let n in this.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(this.properties, n) ) continue;
			let  val = this.properties[n].value;

			if ( val.specTypeName === 'object' ) strProps.push(n + ': [Object]');
			else strProps.push(n + ': ' + val.specTypeName);
		}
		strProps.push('} ]');
		return strProps.join(' ');
	}

	*toPrimitiveValue(preferedType) { 
		let methodNames;
		if ( preferedType == 'string') {
			methodNames = ['toString', 'valueOf'];
		} else {
			methodNames = ['valueOf', 'toString'];
		}

		for ( let name of methodNames ) {
			let method = yield * this.member(name);
			if ( method && method.call ) {
				let rescr = yield (yield * method.call(this, [], this.realm.evaluator));
				let res = Value.undef;
				if ( !(rescr instanceof CompletionRecord) ) res = rescr;
				else if ( rescr.type == CompletionRecord.RETURN ) res = rescr.value;
				else if ( rescr.type != CompletionRecord.NORMAL ) continue;
				if ( res.specTypeName !== 'object' ) return res;
			} 
		}
		return yield CompletionRecord.makeTypeError(this.realm, 'Cannot convert object to primitive value');
	}

	*toNumberValue() { 
		let prim = yield * this.toPrimitiveValue('number');
		return yield * prim.toNumberValue();
	}

	*toObjectValue(realm) { return this; }

	*toStringValue() { 
		let prim = yield * this.toPrimitiveValue('string');
		let gen = prim.toStringValue();
		return yield * gen;
	}

	get truthy() {
		return true;
	}

	get jsTypeName() {
		if ( typeof this.call !== "function" ) return "object";
		return "function";
	}
}

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;