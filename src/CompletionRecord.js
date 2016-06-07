'use strict';

let Value = require('./Value');

class CompletionRecord {
	constructor(type, value, target) {
		if ( value === undefined ) {
			value = type;
			type = CompletionRecord.NORMAL;
		}

		this.type = type;
		this.value = value;
		this.target = target;
	}

	get abrupt() { return this.type !== CompletionRecord.NORMAL; }

	static makeTypeError(realm, msg) {
		let err;
		if ( msg instanceof Error ) err = realm.TypeError.makeFrom(msg);
		else err = realm.TypeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeReferenceError(realm, msg) {
		let err;
		if ( msg instanceof Error ) err = realm.ReferenceError.makeFrom(msg);
		else err = realm.ReferenceError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeSyntaxError(realm, msg) {
		let err;
		if ( msg instanceof Error ) err = realm.SyntaxError.makeFrom(msg);
		else err = realm.SyntaxError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeRangeError(realm, msg) {
		let err;
		if ( msg instanceof Error ) err = realm.RangeError.makeFrom(msg);
		else err = realm.RangeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	/**
	 * Easy access to value.addExtra.
	 * Note: Returns a generator.
	 * @param {Object} obj - Extra properties
	 */
	addExtra(obj) {
		return this.value.addExtra(obj);
	}

}
module.exports = CompletionRecord;



CompletionRecord.NORMAL = 0;
CompletionRecord.BREAK = 1;
CompletionRecord.CONTINUE = 2;
CompletionRecord.RETURN = 3;
CompletionRecord.THROW = 4;


