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

	ref(name, ctxthis) {
		var existing = this.properties[name];
		var ret = {
			set: (v,s) => this.assign(name,v,s),
		};

		let get;
		if ( existing ) {
			ret.isVariable = existing.isVariable;
			ret.del = (s) => {
				return this.delete(name, s);
			};
			ret.getValue = existing.getValue.bind(existing, ctxthis || this);
			ret.setValue = this.put.bind(this, name);
			Object.defineProperty(ret, 'value', {
				get: () => existing.value,
				set: (v) => {
					this.assign(name, v);
				}
			});

		} else {
			ret.isVariable = false;
			ret.del = (s) => false;
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
			if ( v.writable ) {
				v.value = value;
			} else if ( s && s.strict ) {
				throw new TypeError('Cant write to something thats not writable');
			} else {
				return;
			}
		} else if ( this.extensable ) {
			v = new PropertyDescriptor(value, this);
			v.del = (s) => this.delete(name, s);
			this.properties[name] = v;
		} else {
			//TODO: Should we throw here in strict mode?
			return;
		}
	}

	*put(name, value, s) {
		if ( !Object.prototype.hasOwnProperty.call(this.properties, name) ) {
			let v = new PropertyDescriptor(value);
			v.del = () => this.delete(name);
			this.properties[name] = v;
			return yield * v.setValue(this, value, s);
		} 

		return yield * this.properties[name].setValue(this, value, s);
		
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

	delete(name, s) {
		let po = this.properties[name];
		if ( !po.configurable ) {
			if ( s.strict ) return CompletionRecord.makeTypeError(s.realm, "Can't delete nonconfigurable object");
			else return false;
		}
		return delete this.properties[name];
	}
	
	toNative() {

		//TODO: This is really a mess and should maybe be somewhere else.
		var bk = Value.createNativeBookmark(this);
		if ( this.jsTypeName === 'function' ) return bk;

		for ( let p in this.properties ) {
			let po = this.properties[p];
			if ( Object.prototype.hasOwnProperty.call(bk, p) ) continue;
			if ( bk[p] !== undefined ) continue;

			Object.defineProperty(bk, p, {
				get: () => {
					var c = this.properties[p].value;
					return c === undefined ? undefined : c.toNative();
				},
				set: (v) => { this.properties[p].value = Value.fromNative(v, this.realm); },
				enumerable: po.enumerable,
				configurable: po.configurable
			});
		}
		return bk;

	}


	*add(other) { return yield * (yield * this.toPrimitiveValue()).add(other); }
	*doubleEquals(other) {
		if ( other instanceof PrimitiveValue ) {
			let hint = ( other.jsTypeName == "string" ? 'string' : 'number' );
			let pv = yield * this.toPrimitiveValue(hint);
			return yield * pv.doubleEquals(other);
		}
		let pthis = yield * this.toPrimitiveValue('string');
		return yield * pthis.doubleEquals(other);
	}
	*inOperator(str) {
		let svalue = yield * str.toStringValue();
		return this.has(svalue.toNative()) ? Value.true : Value.false;
	}

	*member(name, realm, ctxthis) { 
		let ref = this.ref(name, ctxthis || this);
		if ( ref ) return yield * ref.getValue();
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
		let delim = [];
		if ( this.wellKnownName ) {
			strProps.push('(', this.wellKnownName , ')');
		}
		if ( this.proto ) {
			delim.push('[[Prototype]]: ' + (this.proto.wellKnownName || this.proto.clazz || this.proto.jsTypeName) );
		}
		for ( let n in this.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(this.properties, n) ) continue;
			let  val = this.properties[n].value;
			if ( this.properties[n].getter || this.properties[n].setter ) delim.push(n + ': [Getter/Setter]');
			else if ( val.specTypeName === 'object' ) delim.push(n + ': [Object]');
			else if ( val.specTypeName === 'function' ) delim.push(n + ': [Function]');			
			else delim.push(n + ': ' + val.debugString);
		}
		strProps.push(delim.join(', '));
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