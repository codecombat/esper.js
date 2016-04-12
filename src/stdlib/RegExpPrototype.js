'use strict';

const Value = require('../Value');
const ArrayValue = require('../values/ArrayValue');

const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');
const _g = require('../GenDash');

function *toRegexp(x) {
	return x.regexp;
}

class RegExpProtoype extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.regexp = new RegExp();
	}
	static *test(thiz, args) {
		var rx = yield * toRegexp(thiz);
		var str = undefined;
		if ( args.length > 0 ) str = yield * args[0].toStringNative();
		return this.fromNative(rx.test(str));
	}

	static *exec(thiz, args, s) {
		var rx = yield * toRegexp(thiz);
		rx.lastIndex = yield * (yield * thiz.get('lastIndex')).toIntNative();
		var str = undefined;
		if ( args.length > 0 ) str = yield * args[0].toStringNative();

		var result = rx.exec(str);
		yield * thiz.set('lastIndex', Value.fromNative(rx.lastIndex));
		if ( result === null ) return Value.null;

		let wraped = yield * _g.map(result, function *(c) { return Value.fromNative(c, s.realm); });

		let out = ArrayValue.make(wraped, s.realm);
		yield * out.set('index', Value.fromNative(result.index));
		yield * out.set('input', Value.fromNative(result.input));
		return out;
	}

	static *compile(thiz, args, s) {
		yield * toRegexp(thiz);
		let rv = yield * s.realm.RegExp.call(Value.null, args, s);
		thiz.regexp = rv.regexp;
		yield * thiz.set('lastIndex', Value.zero);
		return Value.undef;
	}

	static *source$g(thiz, args, s) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.source);
	}

	static *global$g(thiz, args, s) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.global);
	}

	static *ignoreCase$g(thiz, args, s) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.ignoreCase);
	}

	static *multiline$gc(thiz, args, s) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.multiline);
	}

	static *toString(thiz, args) {
		var rx = yield * toRegexp(thiz);
		return Value.fromNative(rx.toString());
	}


	static get lastIndex() { return Value.fromNative(0); }
}

RegExpProtoype.prototype.wellKnownName = '%RegExpProtoype%';
RegExpProtoype.prototype.clazz = 'RegExp';

module.exports = RegExpProtoype;
