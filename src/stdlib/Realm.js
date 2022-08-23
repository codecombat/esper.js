'use strict';

const Value = require('../Value');
const ObjectValue = require('../values/ObjectValue');
const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');


class RealmClass extends EasyObjectValue {
	constructor(realm) {
		super(realm);
	}

	*call(thiz, args, s) {
		return this.createFrom(s.realm);
	}

	createFrom(realm) {
		let zeRealm = realm.options.frozenRealm ? require('../ShallowRealm') : require('../Realm');
		let targetRealm = new zeRealm(realm.options, realm.engine);
		targetRealm.print = function() {
			realm.print.apply(realm, arguments);
		}
		return targetRealm.realmObject;
	}

	make(realm) {
		let thiz = new ObjectValue(realm, this.callPrototype());
		thiz.targetRealm = realm;
		return thiz;
	}

	objPrototype(realm) {
		return new RealmPrototype(realm);
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
			return yield CompletionRecord.typeError("Realm prototype not realm.", {code: "RealmPrototypeNotRealm"});
		}

		return thiz.targetRealm.globalScope.object;
	}

	static *globalThis$ge(thiz, args, s) {
		let proto = thiz.getPrototype(s.realm);
		if ( !(proto instanceof RealmPrototype) ) {
			return yield CompletionRecord.typeError("Realm prototype not realm.", {code: "RealmPrototypeNotRealm"});
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
			return yield CompletionRecord.typeError("Realm prototype not realm.", {code: "RealmPrototypeNotRealm"});
		}

		return yield * thiz.targetRealm.eval.call(thiz, args, thiz.targetRealm.globalScope);
	}
}


module.exports = RealmClass;
