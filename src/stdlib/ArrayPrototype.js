'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const PrimitiveValue = require('../values/PrimitiveValue');
const CompletionRecord = require('../CompletionRecord');
const Value = require('../Value');
const _g = require('../GenDash');

function *forceArrayness(v) {
	if ( !v.has('length') ) {
		yield * v.set('length', Value.zero);
	}
}

function *getLength(v) {
	let m = yield * v.get('length');
	return yield * m.toUIntNative();
}

var defaultSeperator = Value.fromNative(',');

function *shiftRight(arr, start, amt) {
	amt = amt || 1;
	let len = yield * getLength(arr);
	for ( let i = len - 1; i >= start; --i ) {
		let cur = yield * arr.get(i);
		yield * arr.set(i + amt, cur);
	}
	yield * arr.set(start, Value.undef);
}

function *shiftLeft(arr, start, amt) {
	let len = yield * getLength(arr);
	for ( let i = start; i < len; ++i ) {
		let cur = yield * arr.get(i);
		yield * arr.set(i - amt, cur);
	}
	for ( let i = len - amt; i < len; ++i ) {
		delete arr.properties[i];
	}
	yield * arr.set('length', Value.fromNative(len - amt));
}


class ArrayPrototype extends EasyObjectValue {

	static *concat$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( args.length > 1 ) targ = args[1];

		var out = [];
		var toCopy = [thiz].concat(args);

		let idx = 0;
		for ( let arr of toCopy ) {
			if ( arr instanceof PrimitiveValue ) {
				out[idx++] = arr;
			} else if ( !arr.has('length') ) {
				out[idx++] = arr;
			} else {
				let l = yield * getLength(arr);
				for ( let i = 0; i < l; ++i ) {
					let tv = yield * arr.get(i, s.realm);
					out[idx++] = tv;
				}
			}
		}

		return ArrayValue.make(out, s.realm);
	}

	static *filter$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( args.length > 1 ) targ = args[1];

		let test = function *(v, i) {
			let res = yield * fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		var out = [];

		let l = yield * getLength(thiz);
		for ( let i = 0; i < l; ++i ) {
			let tv = yield * thiz.get(i);
			let tru = yield * test(tv, i);
			if ( tru ) out.push(tv);
		}

		return ArrayValue.make(out, s.realm);
	}

	static *every$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( args.length > 1 ) targ = args[1];

		let test = function *(v, i) {
			let res = yield * fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		let l = yield * getLength(thiz);
		for ( let i = 0; i < l; ++i ) {
			let tv = yield * thiz.get(i);
			let tru = yield * test(tv, i);
			if ( !tru ) return Value.false;
		}

		return Value.true;
	}

	static *some$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( args.length > 1 ) targ = args[1];

		let test = function *(v, i) {
			let res = yield * fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		let l = yield * getLength(thiz);
		for ( let i = 0; i < l; ++i ) {
			let tv = yield * thiz.get(i);
			let tru = yield * test(tv, i);
			if ( tru ) return Value.true;
		}

		return Value.false;
	}

	static *map$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( !fx.isCallable ) return yield CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');

		if ( args.length > 1 ) targ = args[1];

		let l = yield * getLength(thiz);
		let out = new Array(l);
		for ( let i = 0; i < l; ++i ) {
			if ( !thiz.has(i) ) continue;
			let tv = yield * thiz.get(i);
			let v = yield yield * fx.call(targ, [tv, Value.fromNative(i), thiz], s);
			out[i] = v;
		}

		return ArrayValue.make(out, s.realm);
	}

	static *forEach$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if ( args.length > 0 ) fx = args[0];
		if ( args.length > 1 ) targ = args[1];

		let l = yield * getLength(thiz);
		for ( let i = 0; i < l; ++i ) {
			if ( !thiz.has(i) ) continue;
			let v = yield * thiz.get(i);
			let res = yield * fx.call(targ, [v, Value.fromNative(i), thiz], s);
		}

		return Value.undef;
	}

	static *indexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || Value.undef;
		let start = args[1] || Value.zero;
		let startn = (yield * start.toNumberValue()).native;

		if ( isNaN(startn) ) startn = 0;
		else if ( startn < 0 ) startn = 0;

		if ( l > startn ) {
			for ( let i = startn; i < l; ++i ) {
				let v = yield * thiz.get(i);
				if ( !v ) v = Value.undef;
				if ( (yield * v.tripleEquals(match)).truthy ) return Value.fromNative(i);

			}
		}
		return Value.fromNative(-1);
	}

	static *lastIndexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || Value.undef;
		let startn = l - 1;

		if ( args.length > 1 ) startn = yield * args[1].toIntNative();
		if ( isNaN(startn) ) startn = 0;
		if ( startn < 0 ) startn += l;
		if ( startn > l ) startn = l;
		if ( startn < 0 ) return Value.fromNative(-1);


		//if ( isNaN(startn) ) startn = l - 1;

		for ( let i = startn; i >= 0; --i ) {
			if ( !thiz.has(i) ) continue;
			let v = yield * thiz.get(i);
			if ( !v ) v = Value.undef;
			if ( (yield * v.tripleEquals(match)).truthy ) return Value.fromNative(i);

		}

		return Value.fromNative(-1);
	}

	static *join$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let seperator = args[0] || defaultSeperator;
		let sepstr = (yield * seperator.toStringValue()).native;
		let strings = new Array(l);
		for ( let i = 0; i < l; ++i ) {
			if ( !thiz.has(i) ) continue;
			let v = yield * thiz.get(i);
			if ( !v ) strings[i] = '';
			else {
				if ( v.jsTypeName == 'undefined' ) {
					continue;
				}
				let sv = (yield * v.toStringValue());
				if ( sv ) strings[i] = sv.native;
				else strings[i] = undefined; //TODO: THROW HERE?
			}
		}
		return Value.fromNative(strings.join(sepstr));
	}

	static *push$e(thiz, args) {
		let l = yield * getLength(thiz);

		for ( let i = 0; i < args.length; ++i ) {
			yield * thiz.set(l + i, args[i]);
		}

		let nl = Value.fromNative(l + args.length);
		yield * thiz.set('length', nl);
		return Value.fromNative(l + args.length);
	}

	static *pop$e(thiz, args) {
		yield * forceArrayness(thiz);
		let l = yield * getLength(thiz);
		if ( l < 1 ) return Value.undef;
		let val = yield * thiz.get(l - 1);
		yield * thiz.set('length', Value.fromNative(l - 1));
		return val;
	}

	static *reverse$e(thiz, args, s) {
		let l = yield * getLength(thiz);
		for ( let i = 0; i < Math.floor(l / 2); ++i ) {
			let lv = yield * thiz.get(i);
			let rv = yield * thiz.get(l - i - 1);
			yield * thiz.set(l - i - 1, lv, s);
			yield * thiz.set(i, rv, s);
		}

		return thiz;
	}

	static *reduce$e(thiz, args, s) {
		let l = yield * getLength(thiz);
		let acc;
		let fx = args[0];

		if ( args.length < 1 || !fx.isCallable ) {
			return yield CompletionRecord.makeTypeError(s.realm, 'First argument to reduce must be a function.');
		}

		if ( args.length > 1 ) {
			acc = args[1];
		}

		for ( let i = 0; i < l; ++i ) {
			if ( !thiz.has(i) ) continue;
			let lv = yield * thiz.get(i);
			if ( !acc ) {
				acc = lv;
				continue;
			}
			acc = yield * fx.call(thiz, [acc, lv], s);
		}
		if ( !acc ) return yield CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');
		return acc;
	}

	//TODO: Factor some stuff out of reduce and reduce right into a common function.
	static *reduceRight$e(thiz, args, s) {
		let l = yield * getLength(thiz);
		let acc;
		let fx = args[0];

		if ( args.length < 1 || !fx.isCallable ) {
			return yield CompletionRecord.makeTypeError(s.realm, 'First argument to reduceRight must be a function.');
		}

		if ( args.length > 1 ) {
			acc = args[1];
		}

		for ( let i = l - 1; i >= 0; --i ) {
			if ( !thiz.has(i) ) continue;
			let lv = yield * thiz.get(i);
			if ( !acc ) {
				acc = lv;
				continue;
			}
			acc = yield * fx.call(thiz, [acc, lv], s);
		}

		if ( !acc ) return yield CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');
		return acc;
	}

	static *shift$e(thiz, args) {
		yield * forceArrayness(thiz);
		let l = yield * getLength(thiz);
		if ( l < 1 ) return Value.undef;

		let val = yield * thiz.get(0);
		yield * shiftLeft(thiz, 1, 1);
		return val;
	}

	static *slice$e(thiz, args, s) {
		//TODO: Call ToObject() on thisz;
		let length = yield * getLength(thiz);
		let result = [];

		let start = 0;
		let end = length;


		if ( args.length > 0 ) start = ( yield * args[0].toIntNative() );
		if ( args.length > 1 ) end = ( yield * args[1].toIntNative() );

		if ( start < 0 ) start = length + start;
		if ( end < 0 ) end = length + end;

		if ( end > length ) end = length;
		if ( start < 0 ) start = 0;


		for ( let i = start; i < end; ++i ) {
			result.push(yield * thiz.get('' + i ));
		}


		return ArrayValue.make(result, s.realm);
	}

	static *splice$e(thiz, args, s) {
		//TODO: Call ToObject() on thisz;


		let result = [];


		let deleteCount;
		let len = yield * getLength(thiz);
		let start = len;

		if ( isNaN(len) ) return thiz;

		if ( args.length > 0 ) start = yield * args[0].toIntNative();

		if ( start > len ) start = len;
		else if ( start < 0 ) start = len - start;

		if ( args.length > 1 ) deleteCount = yield * args[1].toIntNative();
		else deleteCount = len - start;

		if ( deleteCount > (len - start) ) deleteCount = len - start;
		if ( deleteCount < 0 ) deleteCount = 0;

		let deleted = [];
		let toAdd = args.slice(2);
		let delta = toAdd.length - deleteCount;

		for ( let i = start; i < start + deleteCount; ++i ) {
			deleted.push(yield * thiz.get(i));
		}

		if ( delta > 0 ) yield * shiftRight(thiz, start, delta);
		if ( delta < 0 ) yield * shiftLeft(thiz, start - delta, -delta);

		for ( let i = 0; i < toAdd.length; ++i ) {
			yield * thiz.set(start + i, toAdd[i]);
		}

		yield * thiz.set('length', Value.fromNative(len + delta));


		return ArrayValue.make(deleted, s.realm);
	}

	static *sort$e(thiz, args, s) {
		let length = yield * getLength(thiz);
		let vals = new Array(length);
		for ( let i = 0; i < length; ++i ) {
			vals[i] = yield * thiz.get(i);
		}

		let comp = function *(left, right) {
			let l = yield * left.toStringValue();
			if ( !l ) return false;
			let r = yield * right.toStringValue();
			if ( !r ) return true;
			return (yield * l.lt(r)).truthy;
		};

		if ( args.length > 0 ) {
			let fx = args[0];
			if ( !fx.isCallable ) return yield CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');
			comp = function *(left, right) {
				let res = yield * fx.call(Value.undef, [left, right], s);
				return ( yield * res.lt(Value.fromNative(0)) ).truthy;
			};
		}

		let nue = yield * _g.sort(vals, comp);

		for ( let i = 0; i < length; ++i ) {
			yield * thiz.set(i, nue[i]);
		}
		return thiz;
	}

	static *toString$e(thiz, args, s) {
		let joinfn = yield * thiz.get('join');
		if ( !joinfn || !joinfn.isCallable ) {
			let ots = yield * s.realm.ObjectPrototype.get('toString');
			return yield * ots.call(thiz, []);
		} else {
			return yield * joinfn.call(thiz, [defaultSeperator]);
		}

	}

	static *unshift$e(thiz, args, s) {
		let amt = args.length;
		let len = yield * getLength(thiz);
		if ( isNaN(len) ) len = 0;
		yield * shiftRight(thiz, 0, amt);
		for ( let i = 0; i < amt; ++i ) {
			yield * thiz.set(i, args[i]);
		}

		let nl = Value.fromNative(len + amt);
		yield * thiz.set('length', nl, s);
		return nl;
	}

}

ArrayPrototype.prototype.wellKnownName = '%ArrayPrototype%';

module.exports = ArrayPrototype;

