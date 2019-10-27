'use strict';

const EasyObjectValue = require('../values/EasyObjectValue');
const EasyNativeFunction = require('../values/EasyNativeFunction');
const StringValue = require('../values/StringValue');
const CompletionRecord = require('../CompletionRecord');
const ASTPreprocessor = require('../ASTPreprocessor');
const EvaluatorInstruction = require('../EvaluatorInstruction');
const Value = require('../Value');
const Realm = require('../Realm');


class ESHostDollarsign extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.realm = realm;
	}

	static *createRealm$cew(thiz, args, scope, extra) {
		let realm = new Realm({
			esposeESHostGlobal: true
		});

		let self = realm.globalScope.get("$");

		if ( args.length < 1 ) return self;
		if ( args[0].jsTypeName != "object" ) return self;

		let globs = yield * args[0].get("globals");

		if ( globs ) {
			for ( let k in globs.properties ) {
				realm.globalScope.set(k, yield * globs.get(k));
			}
		}

		let destroy = yield * args[0].get("destroy");
		if ( destroy ) {
			self.destroyer = destroy;
		}

		return self;
	}

	static *evalScript$cew(thiz, args, scope, extra) {
		let s = this.realm.globalScope;
		return yield * this.realm.eval.call(thiz, args, s, extra);
	}

	static *destroy$crew(thiz, args, scope, extra) {
		if ( this.destroyer ) {
			yield * this.destroyer.call(Value.undef, [], this.realm.globalScope);
		}
		return Value.undef;
	}

	static *getGlobal$cew(thiz, args, scope, extra) {
		let prop = yield * args[0].toStringNative();
		return this.realm.globalScope.get(prop);
	}

	static *setGlobal$cew(thiz, args, scope, extra) {
		let prop = yield * args[0].toStringNative();
		return yield * this.realm.globalScope.set(prop, args[1]);
	}

	static *global$cevg() {
		return this.realm.globalScope.object;
	}
}



module.exports = ESHostDollarsign;
