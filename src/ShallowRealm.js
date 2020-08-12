'use strict';

const Scope = require('./Scope');
const Value = require('./Value');
const Realm = require('./Realm');
const esper = require('./index.js');



let immutableRealmSingeltons = {};

function MakeDeepImmutable(o) {
	o.makeImmutable();
	if ( o.easyRef ) {
		for ( let p in o.properties ) {
			if (o.properties[p].value)
				o.properties[p].value.makeImmutable();
		}
	}
}

class ShallowRealm {
	print() {
		console.log.apply(console, arguments);
	}
	random() {
		return Math.random();
	}

	constructor(options, engine) {
		this.language = options.language || 'javascript';

		if ( !immutableRealmSingeltons[this.language] ) {
			immutableRealmSingeltons[this.language] = new Realm({language: options.language}, engine);
			for ( let p in immutableRealmSingeltons[this.language].intrinsics ) {
				let o = immutableRealmSingeltons[this.language].intrinsics[p];
				MakeDeepImmutable(o);
			}
		}

		let immutableRealmSingelton = immutableRealmSingeltons[this.language];


		Object.assign(this, immutableRealmSingelton);
		this.engine = engine;
		this.options = options || {};


		let scope = new Scope(this);
		scope.object.clazz = 'global';
		scope.strict = this.options.strict || false;
		this.intrinsicScope = scope;
		scope.thiz = scope.object;
		this.importCache = new WeakMap();

		Object.assign(scope.object.properties, immutableRealmSingelton.globalScope.object.properties);
		delete scope.object.properties.globalThis;
		delete scope.object.properties.eval;
		delete scope.object.properties.Realm;

		this.globalScope = scope;

		if ( options.exposeEsperGlobal ) {
			this.addIntrinsic('Esper', this.Esper);
		}

		if ( options.esRealms ) {
			let RealmClass = require('./stdlib/Realm');
			this.realmClass = new RealmClass(this);
			this.addIntrinsic("Realm", this.realmClass);
			this.realmObject = this.realmClass.make(this);
		}

		scope.put("globalThis", scope.object);
		this.eval = new Realm.EvalFunction(this);
		this.addIntrinsic('eval', this.eval);

		
	}

	addIntrinsic(name, instance) {
		this.intrinsics[name] = instance;
		this.intrinsicScope.set(name, instance);
		MakeDeepImmutable(instance);
	}

	fromNative(native, x) {
		return Value.fromNative(native, this);
	}
}


ShallowRealm.prototype.import = Realm.prototype.import;
ShallowRealm.prototype.write = Realm.prototype.write;
ShallowRealm.prototype.parser = Realm.prototype.parser;
ShallowRealm.prototype.import = Realm.prototype.import;
ShallowRealm.prototype.makeLiteralValue = Realm.prototype.makeLiteralValue;
ShallowRealm.prototype.makeForForeignObject = Realm.prototype.import;
ShallowRealm.prototype.lookupWellKnown = Realm.prototype.lookupWellKnown;
ShallowRealm.prototype.lookupWellKnownByName = Realm.prototype.lookupWellKnownByName;
module.exports = ShallowRealm;
