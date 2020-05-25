'use strict';

const Value = require('../Value');
const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');


class RealmClass extends EasyObjectValue {
	*call(thiz, args, s) {
		let proto = thiz.getPrototype(s.realm);
		if ( !(proto instanceof RealmPrototype) ) {
			return yield CompletionRecord.typeError("Realm prototype not realm.");
		}		

		let zeRealm = s.realm.options.frozenRealm ? require('../ShallowRealm') : require('../Realm');
		thiz.targetRealm = new zeRealm(s.realm.options, s.realm.engine);
		thiz.targetRealm.thisIsRightRealm = true;
		return thiz;
	}
	
	callPrototype(realm) { return new RealmPrototype(this); }
}

class RealmPrototype extends EasyObjectValue {
	*call(thiz, args, s) {
		return thiz;
	}

	static *global$ge(thiz, args, s) {
		let proto = thiz.getPrototype(s.realm);
		if ( !(proto instanceof RealmPrototype) ) {
			return yield CompletionRecord.typeError("Realm prototype not realm.");
		}

		return thiz.targetRealm.globalScope.object;
	}
	static *globalThis$ge(thiz, args, s) {
		let proto = thiz.getPrototype(s.realm);
		if ( !(proto instanceof RealmPrototype) ) {
			return yield CompletionRecord.typeError("Realm prototype not realm.");
		}

		return thiz.targetRealm.globalScope.object;
	}

	static *indirectEval(thiz, args, s) {
		return args[0] || Value.undefined;
	}

	static *directEval(thiz, args, s) {
		return args[0] || Value.undefined;
	}

	static *eval$e(thiz, args, s) {
		let proto = thiz.getPrototype(s.realm);
		if ( !(proto instanceof RealmPrototype) ) {
			return yield CompletionRecord.typeError("Realm prototype not realm.");
		}

		return yield * thiz.targetRealm.eval.call(thiz, args, thiz.targetRealm.globalScope);
	}
}


module.exports = RealmClass;
