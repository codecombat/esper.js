'use strict';

const esper = require('../..');
const Value = esper.Value;
const CompletionRecord = esper.CompletionRecord;
const ArrayValue = esper.ArrayValue;

const debug = () => {};
//const debug = console.log.bind(console);


class PointerValue extends esper.ObjectValue {
	constructor(base, offset, realm) {
		super(realm);
		this.realm = realm;
		this.setPrototype(realm.PointerPrototype);
		this.base = base;
		this.offset = offset;
	}

	get debugString() {
		return "[-> " + this.base.properties[this.offset].value.debugString;
	}

	*get(k) {
		let nk = parseInt(k);
		if ( nk === nk ) {
			let p2 = yield * this.add(esper.Value.fromNative(k));
			return yield * p2.derefrence();
		}
		return yield * super.get(k);
	}

	*set(k, v) {
		if ( k === 'value' ) {
			this.base.properties[this.offset].value = v;
			return v;
		}
		let nk = parseInt(k);
		if ( nk === nk ) {
			let p2 = yield * this.add(esper.Value.fromNative(k));
			return yield * p2.set("value", v);
		}
		return yield* super.set(k, v);
	}

	callPrototype(realm) { return realm.PointerPrototype; }
	constructorFor(realm) { return realm.PointerPrototype; }

	*add(what) {
		let result =  yield * esper.Value.fromNative(this.offset).add(what);
		return new PointerValue(this.base, result.toNative(), this.realm);
	}

	*derefrence(realm) {
		if ( this.base.jsTypeName !== 'object' ) {
			return yield * this.base.get(this.offset);
		}
		let found = this.base.properties[this.offset];
		if ( !found ) {
			return CompletionRecord.makeRangeError(realm, "Segmentation Fault " + this.offset);
		}
		return found.value;
	}

}
PointerValue.prototype.clazz = 'Pointer';

class PointerPrototypeValue extends esper.EasyObjectValue {
	static *value$eg(thiz, args, realm) {
		return yield * thiz.derefrence();
	}
}

class RefrenceFunction extends esper.ObjectValue {

	*rawCall(n, evalu, scope) {
		if ( n.arguments.length == 0 ) return CompletionRecord.makeTypeError(realm, "No argument to refrence.");
		let a1 = n.arguments[0];
		let ref = null;

		switch ( a1.type ) {
			case "Identifier":
				return new PointerValue(scope.object, a1.name, scope.realm);
			case "MemberExpression":
				let base = yield * evalu.branch(a1.object, scope);
				let offset;
				if ( a1.computed ) offset = (yield * evalu.branch(a1.property, scope)).toNative();
				else if ( a1.property.type == 'Identifier') offset = a1.property.name;
				else if ( a1.property.type == 'Literal' ) offset = yield * evalu.branch(a1.property, scope).toNative();
				else return CompletionRecord.makeTypeError(scope.realm, "Unimplemented property type");
				return new PointerValue(base, offset, scope.realm);
			default:
				return CompletionRecord.makeTypeError(scope.realm, "Unimplemented");
		}
	}

	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if ( args.length < 1 ) return CompletionRecord.makeTypeError(scope.realm, "No argument to refrence.");
		return CompletionRecord.makeTypeError(scope.realm, "Can't call refrence like that.");
	}
}

class DerefrenceFunction extends esper.ObjectValue {
	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if ( args.length < 1 ) return CompletionRecord.makeTypeError(scope.realm, "No argument to derefrence.");
		if ( args[0] instanceof PointerValue ) {
			return yield * args[0].derefrence();
		} else {
			return CompletionRecord.makeTypeError(scope.realm, "Tried to derefrence non pointer");
		}
	}
}

class AllocFunction extends esper.ObjectValue {
	*call(thiz, args, scope, ext) {
		if ( args.length < 1 ) return CompletionRecord.makeTypeError(scope.realm, "No argument to alloc.");
		let object = ArrayValue.make(args, scope.realm);
		return new PointerValue(object, 0, scope.realm);
	}
}

class PointerObjValue extends esper.EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setImmediate("refrence", new RefrenceFunction(realm));
		this.setImmediate("derefrence", new DerefrenceFunction(realm));
		this.setImmediate("alloc", new AllocFunction(realm));
	}
}

let plugin = module.exports = {
	name: 'pointers',
	setupEngine: function(esper, engine) {
		engine.realm.PointerPrototype = new PointerPrototypeValue(engine.realm);
		engine.realm.globalScope.add("Pointer", new PointerObjValue(engine.realm));
	},
	init: function() {
		esper.hooks.setupEngine.push(this.setupEngine);
	},
	PointerValue: PointerValue
};
