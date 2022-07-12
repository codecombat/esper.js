'use strict';
/* @flow */

const Value = require('../Value');
const PropertyDescriptor = require('./PropertyDescriptor');
const CompletionRecord = require('../CompletionRecord');
const PrimitiveValue = require('./PrimitiveValue');
const NullValue = require('./NullValue');
const GenDash = require('../GenDash');
const EvaluatorInstruction = require('../EvaluatorInstruction');

let alwaysFalse = () => false;
let undefinedReturningGenerator = function*() { return Value.undef; };

class ObjRefrence {
	constructor(object, name, ctxthis) {
		this.object = object;
		this.name = name;
		this.ctxthis = ctxthis;
	}
	del(s) {
		if ( s.strict ) return this.object.deleteStrict(this.name)
		else return this.object.delete(this.name);
	}
	getValue() { return this.object.get(this.name, this.ctxthis || this.object); }
	setValue(value, s) { return this.object.set(this.name, value); }
}

/**
 * Represents an Object.
 */
class ObjectValue extends Value {

	constructor(realm, proto) {
		super();
		this.extensable = true;
		this.proto = null;
		if ( proto ) this.eraseAndSetPrototype(proto);
		else if ( realm ) this.eraseAndSetPrototype(realm.ObjectPrototype);
		else this.properties = Object.create(null);
	}

	ref(name, ctxthis) {
		var existing = this.properties[name];
		let thiz = this;

		let get;
		if ( existing ) {
			return new ObjRefrence(this, name, ctxthis);
		} else {
			return {
				name: name,
				object: thiz,
				isVariable: false,
				del: alwaysFalse,
				getValue:  undefinedReturningGenerator,
				setValue: function(to, s) { return this.object.set(this.name, to); }
			};

		}
	}

	//Note: Returns generator by tailcall.
	set(name, value, extra) {
		let thiz = this;
		extra = extra || {};

		if ( !Object.prototype.hasOwnProperty.call(this.properties, name) ) {
			if ( this.properties[name] && this.properties[name].setter ) {
				return this.properties[name].setValue(this, value);
			}
			if ( !this.extensable ) {
				//TODO: Should we throw here in strict mode?
				return Value.undef.fastGen();
			}
			let v = new PropertyDescriptor(value);
			v.enumerable = 'enumerable' in extra ? extra.enumerable : true;
			this.properties[name] = v;

			return v.setValue(this, value);
		}

		return this.properties[name].setValue(this, value);

	}

	rawSetProperty(name, value) {
		this.properties[name] = value;
	}

	setImmediate(name, value) {
		if ( name in this.properties ) {
			if ( Object.prototype.hasOwnProperty.call(this.properties, name) ) {
				if ( this.properties[name].direct ) {
					this.properties[name].value = value;
					return;
				}
			}
		} else if ( this.extensable ) {
			let v = new PropertyDescriptor(value);
			v.del = this.delete.bind(this, name);
			this.properties[name] = v;
			return;
		}
		return GenDash.syncGenHelper(this.set(name, value));
	}



	has(name) {
		return name in this.properties;
	}

	delete(name) {
		let po = this.properties[name];
		if ( !po.configurable ) {
			return false;
		}
		return delete this.properties[name];
	}

	deleteStrict(name) {
		let po = this.properties[name];
		if ( !po.configurable ) {
			return CompletionRecord.typeError("Can't delete nonconfigurable object", {code: "DeleteNonconfigurableObject"});
		}
		return delete this.properties[name];
	}

	toNative(realm) {

		//TODO: This is really a mess and should maybe be somewhere else.
		var bk = Value.createNativeBookmark(this, realm);
		if ( this.jsTypeName === 'function' ) return bk;

		for ( let p in this.properties ) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if ( Object.prototype.hasOwnProperty.call(bk, name) ) continue;
			if ( bk[p] !== undefined ) continue;

			Object.defineProperty(bk, p, {
				get: () => {
					var c = this.properties[name].value;
					return c === undefined ? undefined : c.toNative();
				},
				set: (v) => { this.properties[name].value = Value.fromNative(v, realm); },
				enumerable: po.enumerable,
				configurable: po.configurable
			});
		}
		return bk;

	}


	toJS() {
		let out = {};
		for ( let p in this.properties ) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if ( !po.enumerable ) continue;
			out[name] = po.value.toJS();
		}
		return out;
	}

	*add(other) { return yield * (yield * this.toPrimitiveValue()).add(other); }
	*doubleEquals(other) {
		if ( other === this ) return Value.true;
		if ( other instanceof ObjectValue ) {
			return Value.false;
		}
		if ( other instanceof PrimitiveValue ) {
			let hint = ( other.jsTypeName == 'string' ? 'string' : 'number' );
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

	*get(name, ctxthis) {
		var existing = this.properties[name];
		if ( !existing ) {
			// Fast proto lookup can fail if aLinkValue or Proxy
			// is in the prototype chain.
			// TODO: Cache if this is needed for speed.
			if ( this.proto ) return yield * this.proto.get(name, ctxthis || this);
			else return Value.undef;
		}
		if ( existing.direct ) return existing.value;
		return yield * existing.getValue(ctxthis || this);
	}

	getImmediate(name, ctxthis) {
		var existing = this.properties[name];
		if ( !existing ) return Value.undef;
		if ( existing.direct ) return existing.value;
		return GenDash.syncGenHelper(existing.getValue(ctxthis || this));
	}

	*instanceOf(other) {
		if (!other.constructorOf) return Value.false;
		return yield * other.constructorOf(this);
	}

	*constructorOf(what) {
		let target = yield * this.get('prototype');
		let realm = yield EvaluatorInstruction.getRealm;
		let pt = what.getPrototype(realm);
		let checked = [];

		while ( pt ) {
			if ( pt === target ) return Value.true;
			checked.push(pt);
			pt = pt.getPrototype(realm);
			if ( checked.indexOf(pt) !== -1 ) return Value.false;
		}
		return Value.false;
	}

	*observableProperties(realm) {
		for ( let p in this.properties ) {
			if ( !this.properties[p].enumerable ) continue;
			yield realm.fromNative(p);
		}
		return;
	}

	getPropertyValueMap() {
		let list  = {};
		for ( let p in this.properties ) {
			let v = this.properties[p];
			if ( v.value ) {
				list[p] = v.value;
			}
		}
		return list;
	}

	hasOwnProperty(name) {
		return Object.prototype.hasOwnProperty.call(this.properties, name);
	}

	setPrototype(val) {
		if ( !this.properties ) return this.eraseAndSetPrototype(val);
		if ( val === null || val === undefined || val instanceof NullValue ) {
			Object.setPrototypeOf(this.properties, null);
			this.proto = null;
			return;
		}
		this.proto = val;
		if ( val.properties ) Object.setPrototypeOf(this.properties, val.properties);
	}

	eraseAndSetPrototype(val) {
		if ( val === null || val === undefined || val instanceof NullValue ) {
			this.proto = null;
			this.properties = Object.create(null);
		} else {
			this.proto = val;
			this.properties = Object.create(val.properties);
		}
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
			else delim.push(n + ': ' + val.specTypeName);
		}
		strProps.push(delim.join(', '));
		strProps.push('] }');
		return strProps.join(' ');
	}

	*toPrimitiveValue(preferedType) {
		let methodNames;
		let realm;
		if ( preferedType == 'string') {
			methodNames = ['toString', 'valueOf'];
		} else {
			methodNames = ['valueOf', 'toString'];
		}

		for ( let name of methodNames ) {
			let method = yield * this.get(name);
			if ( method && method.call ) {
				if ( !realm ) realm = yield EvaluatorInstruction.getRealm;
				let rescr = yield (yield * method.call(this, [], realm.globalScope)); //TODO: There should be more aruments here
				let res = Value.undef;
				if ( !(rescr instanceof CompletionRecord) ) res = rescr;
				else if ( rescr.type == CompletionRecord.RETURN ) res = rescr.value;
				else if ( rescr.type != CompletionRecord.NORMAL ) continue;
				if ( res.specTypeName !== 'object' ) return res;
			}
		}
		return yield CompletionRecord.typeError('Cannot convert object to primitive value', {code: "ConvertObjectToPrimitive"});
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
		if ( typeof this.call !== 'function' ) return 'object';
		return 'function';
	}

	get specTypeName() {
		return 'object';
	}

	makeImmutable() {
		for ( let p of Object.getOwnPropertyNames(this.properties) ) {
			let o = this.properties[p];
			if ( o.value && o.writable ) o.writable = false;
			if ( o.configurable ) o.configurable = false;
			Object.freeze(o);
		}
		if ( this.extensable ) this.extensable = false;
		Object.seal(this.properties);
		Object.freeze(this);
	}
}

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;
