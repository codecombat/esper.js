'use strict';

const Value = require('../Value');
const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');

class ProxyClass extends ObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if ( !asConstructor ) {
			return Value.fromNative(0);
		}
		thiz.target = args[0];
		thiz.handler = args[1];
		thiz.realm = scope.realm;
	}

	*makeThisForNew(realm) {
		return new ProxyValue(realm);
	}
}

class ProxyValue extends Value {
	*handlerImplemented(w) {
		let en = (yield * this.handler.inOperator(Value.fromNative(w))).toNative();
		return !!en;
	}

	ref(name, ctxthis) {
		return {
			name: name,
			object: this,
			isVariable: false,
			del: () => false, //Doesnt support being a generator yet.
			getValue:  () => this.get(name),
			setValue: (to) => this.object.set(this.name, to)
		};
	}

	*invokeHandler(w, args) {
		let fn = yield * this.handler.get(w);
		return yield * fn.call(Value.under, args.map((x) => this.realm.fromNative(x)), this.realm.globalScope)
	}

	*get(name, realm, ctx) {
		if ( yield * this.handlerImplemented('get') ) {
			return yield * this.invokeHandler('get', [name]);
		}
		return yield * this.target.get(name, realm, ctx);
	}

	*set(name, value, realm, ctx) {
		if ( yield * this.handlerImplemented('set') ) {
			return yield * this.invokeHandler('set', [name, value]);
		}
		return yield * this.target.set(name, value, realm, ctx);
	}

	*inOperator(other) {
		if ( yield * this.handlerImplemented('has') ) {
			return yield * this.invokeHandler('has', [other]);
		}
		return yield * this.target.inOperator(other, realm, ctx);		
	}

	*delete(name) {
		if ( yield * this.handlerImplemented('delete') ) {
			return yield * this.invokeHandler('delete', [other]);
		}
		return yield * this.target.delete(other, realm, ctx);		
	}

	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		let key = 'apply';
		if ( asConstructor ) key = 'construct';
		if ( yield * this.handlerImplemented(key) ) {
			return yield * this.invokeHandler(key, args);
		}
		if ( !this.target.call ) return yield CompletionRecord.typeError("Base object not invokeable.", {code: "BaseObjNotInvokeable"});
		else return yield * this.target.call(thiz, args, scope, ext);			
	}

	*makeThisForNew(realm) {
		return this.target.makeThisForNew(realm);
	}

	toNative() { return "[Proxy]"; }
}

module.exports = ProxyClass;
