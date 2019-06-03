'use strict';

const EasyObjectValue = require('../../src/values/EasyObjectValue');
const ObjectValue = require('../../src/values/ObjectValue');
const ArrayValue = require('../../src/values/ArrayValue');
const PrimitiveValue = require('../../src/values/PrimitiveValue');
const CompletionRecord = require('../../src/CompletionRecord');
const Value = require('../../src/Value');
const _g = require('../../src/GenDash');



class PythonRuntime extends EasyObjectValue {
	constructor(realm) {
		super(realm);

		let functions = new ObjectValue(realm);
		functions.setImmediate("str", this.getImmediate("str"));
		functions.setImmediate("range", this.getImmediate("range"));
		functions.setImmediate("round", this.getImmediate("round"));
		functions.setImmediate("abs", realm.Math.getImmediate("abs"));

		this.setImmediate("functions", functions);

		let objects = new ObjectValue(realm);
		objects.setImmediate("list", new PythonList(realm));
		objects.setImmediate("tuple", new PythonList(realm));
		this.setImmediate("objects", objects);

		let ops = new ObjectValue(realm);
		ops.setImmediate("multiply", this.getImmediate("multiply"));
		ops.setImmediate("add", this.getImmediate("add"));
		ops.setImmediate("subscriptIndex", this.getImmediate("subscriptIndex"));
		ops.setImmediate("in", this.getImmediate("in"));
		this.setImmediate("ops", ops);

	}
	static *list$e(thiz, args, s) {
		return new PythonList(s.realm);
	}

	static *makeList$e(thiz, args, s) {
		return new PythonList(s.realm);
	}

	static *str$e(thiz, args, s) {
		return yield * args[0].toStringValue();
	}

	static *range(thiz, args, s) {
		let result = [];
		let start = 0;
		let step = 1;
		let end = yield * args[0].toIntNative();
		if ( args.length > 1 ) {
			start = end;
			end = yield * args[1].toIntNative();
		}
		if ( args.length > 2 ) {
			step = yield * args[2].toIntNative();
		}
		console.log(start, step, end);

		let i = start;
        while (i < end && step > 0 || i > end && step < 0) {
          result.push(Value.fromNative(i));
          i += step;
        }

		return yield * s.realm.PythonList.call(null, result, s);
	}

	static *round$e(thiz, args, s) {
		if ( args.length > 0 ) {
			let n = yield * args[0].toNumberNative();
			let digits = yield * args[1].toIntNative();
			let extra = Math.pow(10, digits);
			return Value.fromNative(Math.round(n * extra) / extra);
		}
		return Value.fromNative(Math.round(yield * args[0].toNumberNative()));
	}


	static *in$e(thiz, args, s) {
		let t = args[0];
		let o = args[1];
		if ( o.has("indexOf") ) {
			let result = yield * (yield * o.get("indexOf")).call(Value.undef, [t], s);
			return yiled * result.toBoolean();
		}
		return yield * o.inOperator(t);
	}

	//Ops

	static *add$e(thiz, args, s) {
		return yield * args[0].add(args[1]);
	}

	static *multiply$e(thiz, args, s) {
		return yield * args[0].multiply(args[1]);
	}

	static *subscriptIndex$e(thiz, args, s) {
		return yield * args[0].get(args[1].toNative());
	}
}


class PythonList extends EasyObjectValue {
	*call(thiz, args, s) {
		let result = new ArrayValue(s.realm);
		result.setPrototype(s.realm.PythonListProto);

		result.setImmediate('length', Value.fromNative(args.length));
		result.properties.length.enumerable = false;

		for ( let i = 0; i < args.length; ++i ) {
			let v = args[i];
			if ( !(v instanceof Value) ) v = realm.fromNative(v);
			result.setImmediate(i, v);
		}
		console.log(result.debugString);
		return result;
	}

	callPrototype(realm) { return realm.PythonListProto; }
	constructorFor(realm) { return realm.PythonListProto; }
	//objPrototype(realm) { return realm.Function; }
}


class PythonListProto extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setImmediate("push", realm.ArrayPrototype.getImmediate("push"));
		this.setImmediate("pop", realm.ArrayPrototype.getImmediate("pop"));
		this.setImmediate("sort", realm.ArrayPrototype.getImmediate("sort"));
	}

}
PythonListProto.prototype.wellKnownName = '%PythonList%';

module.exports = {PythonRuntime, PythonList, PythonListProto};