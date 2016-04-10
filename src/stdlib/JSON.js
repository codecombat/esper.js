'use strict';

const Value = require('../Value');
const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const PrimitiveValue = require('../values/PrimitiveValue');
const ArrayValue = require('../values/ArrayValue');
const CompletionRecord = require('../CompletionRecord');

class JSONUtils {
	static *genJSONTokens(arr, o, map, str, strincr) {
		let str2 = str !== undefined ? str + strincr : undefined;

		if ( o instanceof PrimitiveValue ) {
			return arr.push(JSON.stringify(o.native));
		}


		if ( map.has(o) ) {
			return arr.push('[Circular]');
		}
		map.set(o, true);

		if ( o instanceof ArrayValue ) {
			arr.push('[');
			let length = yield * (yield * o.get('length')).toIntNative();
			for ( let i = 0; i < length; ++i ) {
				if ( i > 0 ) arr.push(',');
				if ( str !== undefined  ) arr.push('\n');
				let m = yield * o.get(i);
				if ( str !== undefined ) arr.push(str2);
				if ( m ) {
					if ( m.jsTypeName == 'undefined' ) arr.push('null');
					else yield * JSONUtils.genJSONTokens(arr, m, map, str2, strincr);
				}
			}
			if ( str !== undefined  ) arr.push('\n');
			if ( str !== undefined  ) arr.push(str);
			arr.push(']');
			return;
		}

		arr.push('{');

		let first = true;
		for ( let p of Object.keys(o.properties)) {
			let po = o.properties[p];
			if ( !po.enumerable ) continue;
			let v = yield * o.get(p);
			if ( v.jsTypeName === 'function' ) continue;

			if ( first ) first = false;
			else arr.push(',');
			if ( str !== undefined ) arr.push('\n', str2);



			arr.push(JSON.stringify(p), ':');
			if ( str !== undefined ) arr.push(' ');
			yield * JSONUtils.genJSONTokens(arr, v, map, str2, strincr);


		}
		if ( str !== undefined  ) arr.push('\n');
		arr.push('}');
	}
}

class JSONObject extends EasyObjectValue {
	static *parse(thiz, args, s) {
		let str = Value.emptyString;
		if ( args.length > 0 ) str = yield * args[0].toStringNative();
		try {
			var out = JSON.parse(str, (k, o) => {
				if ( o === undefined ) return Value.undef;
				if ( o === null ) return Value.null;

				let prim = Value.fromPrimativeNative(o);
				if ( prim ) return prim;


				if ( Array.isArray(o) ) {
					return ArrayValue.make(o, s.realm);
				}

				let v = new ObjectValue(s.realm);
				for ( var p in o ) {
					v.setImmediate(p, o[p]);
				}
				return v;
			});
			return out;
		} catch ( e ) {
			yield new CompletionRecord(CompletionRecord.THROW, Value.fromNative(e, s.realm));
		}
	}

	static *stringify(thiz, args, s) {
		let arr = [];
		let v = Value.undef;
		let replacer = null;
		let str;
		let strincr;

		if ( args.length > 0 ) v = args[0];
		if ( args.length > 1 ) replacer = args[1];
		if ( args.length > 2 ) {
			str = '';
			if ( args[2].jsTypeName === 'number' ) {
				let len = yield * args[2].toIntNative();
				strincr = new Array(1 + len).join(' ');
			} else {
				strincr = yield * args[2].toStringNative();
			}

		}
		if ( v.jsTypeName === 'undefined' ) return Value.undef;

		yield * JSONUtils.genJSONTokens(arr, v, new WeakMap(), str, strincr);
		return Value.fromNative(arr.join(''));
	}


}

module.exports = JSONObject;
