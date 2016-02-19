"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');
const Value = require('../Value');

function *getLength(v) {
	let m = yield * v.member('length');
	return yield * m.toUIntNative();

}

function *sortValArray(arr, comp) {
	if ( arr.length < 2 ) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = yield * sortValArray(arr.slice(0,mid), comp);
	let right = yield * sortValArray(arr.slice(mid, arr.length), comp);
	return yield * mergeValArray(left, right, comp);
}

function *mergeValArray(l, r, comp) {
	var result = [];
	while ( l.length && r.length ) {
		if ( yield * comp(l[0], r[0]) ) result.push(l.shift());
		else result.push(r.shift());
	}

	while (l.length) result.push(l.shift());
	while (r.length) result.push(r.shift());
	return result;
}

var defaultSeperator = EasyObjectValue.fromNative(',');

function *shiftRight(arr, start, amt) {
	amt = amt || 1;
	let len = yield * getLength(arr);
	for ( let i = len - 1; i >= start; --i ) {
		let cur = yield * arr.member(i);
		arr.assign(i+amt, cur);
	}
	arr.assign(start, Value.undef);
}

function *shiftLeft(arr, start, amt) {
	let len = yield * getLength(arr);
	for ( let i = start; i < len; ++i ) {
		let cur = yield * arr.member(i);
		arr.assign(i-amt, cur);
	}
	for ( let i = len-amt; i < len; ++i ) {
		delete arr.properties[i];
	}
	arr.assign('length', Value.fromNative(len - amt));
}


class ArrayPrototype extends EasyObjectValue {
	
	static *forEach$e(thiz, args) {
		console.log("Array#foreach called");
		return new ObjectValue(this.realm);
	}

	static *indexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || EasyObjectValue.undef;
		let start = args[1] || this.fromNative(0);
		let startn = (yield * start.toNumberValue()).native;
		
		if ( isNaN(startn) ) startn = 0;
		else if ( startn < 0 ) startn = 0;

		if ( l > startn ) {
			for ( let i = startn; i < l; ++i ) {
				let v = yield * thiz.member(i);
				if ( !v ) v = EasyObjectValue.undef;
				if ( (yield * v.tripleEquals(match)).truthy ) return this.fromNative(i);
				
			}
		}
		return this.fromNative(-1);
	}

	static *lastIndexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || EasyObjectValue.undef;
		let startn = l;
		if ( args[1] ) startn = yield * args[1].toIntNative();
		
		if ( isNaN(startn) ) startn = l;
		else if ( startn < 0 ) startn = l + startn;

		for ( let i = startn; i >= 0; --i ) {
			let v = yield * thiz.member(i);
			if ( !v ) v = EasyObjectValue.undef;
			if ( (yield * v.tripleEquals(match)).truthy ) return this.fromNative(i);
			
		}

		return this.fromNative(-1);
	}


	static *push$e(thiz, args) {
		let l = yield * getLength(thiz);
		for ( let i = 0; i < args.length; ++i ) {
			thiz.assign(l+i, args[i]);
		}
		return this.fromNative(l+args.length);
	}

	static *pop$e(thiz, args) {
		let l = yield * getLength(thiz);
		if ( l < 1 ) return Value.undef;
		let val = yield * thiz.member(l-1);
		thiz.assign('length', Value.fromNative(l-1));
		return val;
	}

	static *shift$e(thiz, args) {
		let l = yield * getLength(thiz);
		if ( l < 1 ) return Value.undef;
		
		let val = yield * thiz.member(0);
		yield * shiftLeft(thiz, 1, 1);
		return val;
	}

	static *unshift$e(thiz, args) {
		let amt = args.length;
		yield * shiftRight(thiz, 0, amt);
		for ( let i = 0; i < amt; ++i ) {
			thiz.assign(i, args[i]);
		}
		return yield * getLength(thiz);
	}

	static *join$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let seperator = args[0] || defaultSeperator;
		let sepstr = (yield * seperator.toStringValue()).native;
		let strings = [];
		for ( let i = 0; i < l; ++i ) {
			let v = yield * thiz.member(i);
			if ( !v  ) strings[i] = '';
			else strings[i] = (yield * v.toStringValue()).native;
		}
		return this.fromNative(strings.join(sepstr));
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
			result.push(yield * thiz.member('' + i ));
		}


		return ArrayValue.make(result, s.realm);
	}

	static *sort$e(thiz,args, s) {
		let length = yield * getLength(thiz);
		let vals = new Array(length);
		for ( let i = 0; i < length; ++i ) {
			vals[i] = yield * thiz.member(i);
		}

		let comp = function *(left, right) {
			let l = yield * left.toStringValue();
			let r = yield * right.toStringValue();
			return (yield * l.lt(r)).truthy;
		};

		if ( args.length > 0 ) {
			let fx = args[0];
			comp = function *(left, right) {
				let res = yield * fx.call(Value.undef, [left, right], s);
				return ( yield * res.lt(Value.fromNative(0)) ).truthy;
			};
		}

		let nue = yield * sortValArray(vals, comp);
		for ( let i = 0; i < length; ++i ) {
			thiz.assign(i, nue[i]);
		}
		return thiz;
	}

	static *toString$e(thiz, args) {
		let joinfn = yield * thiz.member('join');
		if ( !joinfn || !joinfn.isCallable ) {
			let ots = yield * this.realm.ObjectPrototype.member('toString');
			return yield * ots.call(thiz, []);
		} else {
			return yield * joinfn.call(thiz, [defaultSeperator]);
		}
		
	}
}

ArrayPrototype.prototype.wellKnownName = '%ArrayPrototype%';

module.exports = ArrayPrototype;
