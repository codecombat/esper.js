'use strict';

const Scope = require('./Scope');
const Value = require('./Value');
const Realm = require('./Realm');
const esper = require('./index.js');


let immutableRealmSingeltons = {};


class ShallowRealm {
	print() {
		console.log.apply(console, arguments);
	}

	constructor(options, engine) {
		if ( !immutableRealmSingeltons[this.language] ) {
			immutableRealmSingeltons[this.language] = new Realm({language: options.language}, engine);
			for ( let p in immutableRealmSingeltons[this.language].intrinsics ) {
				immutableRealmSingeltons[this.language].intrinsics[p].makeImmutable();
			}
		}

		let immutableRealmSingelton = immutableRealmSingeltons[this.language];

		Object.assign(this, immutableRealmSingelton);
		this.engine = engine;
		this.options = options || {};
		this.language = options.language || 'javascript';



		let scope = new Scope(this);
		scope.object.clazz = 'global';
		scope.strict = this.options.strict || false;
		this.intrinsicScope = scope;
		scope.thiz = scope.object;
		this.importCache = new WeakMap();
		this.globalScope = scope;
		Object.assign(scope.object.properties, immutableRealmSingelton.globalScope.object.properties);

		if ( options.exposeEsperGlobal ) {
			scope.set('Esper', this.Esper);
		}

		
	}

	addIntrinsic(name, instance) {
		this.intrinsics[name] = instance;
		this.intrinsicScope.set(name, instance);
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
