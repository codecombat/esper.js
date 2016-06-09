'use strict';

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

class GenDash {
	static *identify(value) {
		return value;
	}


	static *map(what, fx) {
		fx = fx || GenDash.identify;
		var out = new Array(what.length);
		for ( let i = 0; i < what.length; ++i ) {
			out[i] = yield * fx(what[i], i, what);
		}
		return out;
	}

	static *each(what, fx) {
		if ( what == null ) return what;
		for ( let i = 0; i < what.length; ++i ) {
			if ( false === (yield * fx(what[i], i, what)) ) break;
		}
		return what;
	}

	static *noop() { }

	static *sort(what, comp) {
		comp = comp || function *(left, right) { return left < right; };
		return yield * sortValArray(what, comp);
	}

	static *values(what) {
		var out = [];
		for ( let o in what ) {
			if ( !Object.hasOwnProperty(o) ) continue;
			out.push(what[o]);
		}
		return out;
	}

	static *keys(what) {
		var out = [];
		for ( let o in what ) {
			if ( !Object.hasOwnProperty(o) ) continue;
			out.push(o);
		}
		return out;
	}

	static *identity(value) {
		return value;
	}

	static syncGenHelper(gen) {
		var val = gen.next();
		if ( !val.done ) {
			console.log('This code path uses a helper, but the actual method yielded...');
			throw new Error('This code path uses a helper, but the actual method yielded...');
		}
		return val.value;
	}
}

module.exports = GenDash;
