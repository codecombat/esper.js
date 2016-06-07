'use strict';

const Value = require('../Value');
const ArrayValue = require('../values/ArrayValue');

const CompletionRecord = require('../CompletionRecord');

const EasyObjectValue = require('../values/EasyObjectValue');
const _g = require('../GenDash');

function *toRegexp(x, realm) {
	if ( !x.regexp ) {
		return yield CompletionRecord.makeTypeError(realm, 'Calling regex method on non regex.');
	}
	return x.regexp;
}

class RegExpProtoype extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.regexp = new RegExp();
	}
	static *test(thiz, args, s) {
		var rx = yield * toRegexp(thiz, s.realm);
		var str = undefined;
		if ( args.length > 0 ) str = yield * args[0].toStringNative();
		return this.fromNative(rx.test(str));
	}

	static *exec(thiz, args, s) {
		var rx = yield * toRegexp(thiz, s.realm);
		let li = yield * thiz.get('lastIndex');
		li = yield * li.toIntNative();
		if ( li < 0 ) li = 0; //Work around incorrect V8 behavior.
		rx.lastIndex = li;
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
		yield * toRegexp(thiz, s.realm);
		let rv = yield * s.realm.RegExp.call(Value.null, args, s);
		let regexp = rv.regexp;
		thiz.regexp = regexp;
		yield * thiz.set('source', Value.fromNative(regexp.source));
		yield * thiz.set('global', Value.fromNative(regexp.global));
		yield * thiz.set('ignoreCase', Value.fromNative(regexp.ignoreCase));
		yield * thiz.set('multiline', Value.fromNative(regexp.multiline));
		yield * thiz.set('lastIndex', Value.zero);
		return Value.undef;
	}

	static get source$cw() { return Value.fromNative('(?:)'); }
	static get global$cw() { return Value.fromNative(false); }
	static get ignoreCase$cw() { return Value.fromNative(false); }
	static get multiline$cw() { return Value.fromNative(false); }

	static *toString(thiz, args, s) {
		var rx = yield * toRegexp(thiz, s.realm);
		return Value.fromNative(rx.toString());
	}


	static get lastIndex() { return Value.fromNative(0); }
}

RegExpProtoype.prototype.wellKnownName = '%RegExpProtoype%';
RegExpProtoype.prototype.clazz = 'RegExp';

module.exports = RegExpProtoype;
