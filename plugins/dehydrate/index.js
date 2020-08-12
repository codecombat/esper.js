'use strict';

const Value = require('../../src/Value');
const PrimitiveValue = require('../../src/values/PrimitiveValue');
const EasyNativeFunction = require('../../src/values/EasyNativeFunction');
const LinkValue = require('../../src/values/LinkValue');
const ClosureValue = require('../../src/values/ClosureValue');
const ObjectValue = require('../../src/values/ObjectValue');
const ArrayValue = require('../../src/values/ArrayValue');
const PropertyDescriptor = require('../../src/values/PropertyDescriptor');
const ASTPreprocessor = require('../../src/ASTPreprocessor');
const RealmClass = require('../../src/stdlib/Realm');
const Scope = require('../../src/Scope');

function dehydrate(realm, value) {
	let state = {
		references: {},
	};

	let val = _dehydrate(realm, value, state);
	return {root: val, references: state.references};
}

function _dehydrate(realm, value, state) {
	if ( !value ) return {'$hole': true};

	if ( value instanceof Scope ) {
		let ss = {
			'$t': 'scope',
			object: _dehydrate(realm, value.object, state),
			realm: _dehydrate(realm, value.realm.realmObject, state)
		};
		return ss;
	}
	if ( value.wellKnownName ) return {'$s': value.wellKnownName};
	if ( value instanceof PrimitiveValue ) {
		if (typeof value.native === "number" && isNaN(value.native)) {
			return {'$t': 'NaN'};
		}
		if (typeof value.native == "string" && value.native.length > 50) {
			state.references[value.serial] = {
				'$v': value.native
			};
			return {'$ref': value.serial};
		}
		return {'$v': value.native};
	}

	if ( value === Value.null ) return {'$t': 'null'};
	if ( value === Value.undef ) return {'$t': 'undefined'};

	if ( value.serial in state.references ) {
		return {'$ref': value.serial};
	}

	if ( value.targetRealm ) {
		let ref = {
			'$t': 'realm'
		};
		state.references[value.serial] = ref;
		ref.globalThis = _dehydrate(value.targetRealm, value.targetRealm.globalScope.object, state);
		return {$ref: value.serial};
	}

	let ref = {
		'$t': value.isCallable ? 'function' : 'object',
		prop: {}
	};
	state.references[value.serial] = ref;
	ref.proto = _dehydrate(realm, value.getPrototype(realm) || Value.null, state);
	if ( value instanceof EasyNativeFunction ) {
		if (value.wellKnownName) return {'$s':value.wellKnownName};
	} else if ( value instanceof LinkValue ) {
		ref.$link = true;
		let map = value.getPropertyValueMap();
		for ( let k in map ) {
			ref.prop[k] = {
				v: _dehydrate(realm, map[k], state)
			};
		}
	} else {
		if ( value.wellKnownName ) ref['$s'] = value.wellKnownName;
		for ( let k in value.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(value.properties, k) ) continue;
			let prop = value.properties[k];

			ref.prop[k] = {
				f: (prop.enumerable ? 'e' : '') + (prop.writable ? 'w' : '') + (prop.configurable ? 'c' : '')
			};
			if ( prop.value ) {
				ref.prop[k].v = _dehydrate(realm, prop.value, state);
			}
			if ( prop.getter ) {
				ref.prop[k].get = _dehydrate(realm, prop.getter, state);
			}
		}
	}

	if ( value instanceof ClosureValue ) {
		ref.src = value.funcSourceAST.source();
		ref.upvars = {};
		ref.scope =  _dehydrate(realm, value.scope, state);
		for ( let n of Object.keys(value.func.upvars) ) {
			ref.upvars[n] = ref.scope;
		}
	}

	return {$ref: value.serial};
}

function hydrate(realm, o) {
	return _hydrate(realm, o.root, {references: o.references || o.refrences || {}});
}

function _hydrate(realm, value, state, ref) {
	if (ref && state.resolved[ref]) return state.resolved[ref];
	if (value.$ref) {
		return _hydrate(realm, state.references[value.$ref], state, value.$ref);
	}
	if ( typeof value.$v !== 'undefined' ) {
		return realm.fromNative(value.$v);
	}

	if ( value.$t == 'undefined' ) {
		return Value.undef;
	}

	if ( value.$t == 'NaN' ) {
		return Value.nan;
	}

	if ( value.$t == 'realm' ) {
		let r = realm.realmClass.createFrom(realm);
		state.resolved[ref] = r;
		r.targetRealm.globalScope.object = _hydrate(r.targetRealm, value.globalThis, state);
		return r;
	}

	if ( value.$t === 'scope' ) {
		let targetRealm = realm;
		if ( value.realm ) {
			targetRealm = _hydrate(realm, value.realm, state).targetRealm;
		}
		let ss = targetRealm.globalScope.createChild();
		ss.object = _hydrate(targetRealm, value.object, state);
		return ss;
	}

	if ( value.$s ) {
		let wk = realm.lookupWellKnownByName(value.$s);
		if ( wk ) return wk;
	}

	if ( value.$t == 'object' ) {
		let r;
		if ( value.proto.$s == '%ArrayPrototype%' )
			r = new ArrayValue(realm);
		else
			r = new ObjectValue(realm);
		state.resolved[ref] = r;
		hydrateInto(realm, r, value, state);
		return r;
	}

	if ( value.$t == 'function' ) {
		let f;
		if ( value.src )  {
			let o = realm.parser(value.src, {loc: true});
			let ast = ASTPreprocessor.process(o, {source: value.src});
			f = ast.body[0];
			if ( f.expression ) f = f.expression;
		} else {
			let o = realm.parser('() => false');
			let ast = ASTPreprocessor.process(o);
			f = ast.body[0].expression;
		}
		let v = new ClosureValue(f, realm.globalScope.createChild());
		state.resolved[ref] = v;

		if ( value.scope ) {
			let ss = _hydrate(realm, value.scope, state);
			v.scope = ss.createChild();
		}


		if ( f.type === 'ArrowFunctionExpression' ) {
			v.thiz = v.scope.thiz;
			if ( f.expression ) v.returnLastValue = true;
		}

		let scopeRef = value.scope;


		if ( value.upvars ) {
			for ( let k in value.upvars ) {
				let v = value.upvars[k];
				if (f.freevars[k]) delete f.freevars[k];
				f.upvars[k] = true;
				if (!scopeRef) scopeRef = value.upvars[k];
			}
		}

		return v;
	}

	console.log("Cant hydrate", value);
}

function hydrateInto(realm, target, value, state) {
	if (value.$ref) {
		if (!state.references[value.$ref]) throw new Error(`Missing refrence ${value.$ref}`);

		return hydrateInto(realm, target, state.references[value.$ref], state);
	}
	if(value.$t == "object" || value.$t == "function") {
		if (!(target instanceof ObjectValue)) throw "Type Mismatch";

		for ( let k in value.prop ) {
			let d = value.prop[k];
			if ( Object.prototype.hasOwnProperty.call(target.properties, k) ) {
				//console.log("T", k, typeof target.properties, );
			} else {
				let v = d.v ? _hydrate(realm, d.v, state) : Value.undef;
				target.properties[k] = new PropertyDescriptor(v);
			}
		}

		if ( value.proto ) {
			let p = _hydrate(realm, value.proto, state);
			if (p) target.setPrototype(p);
		}

	} else {
		console.log('?', value);
	}
}

const EsperValue = require('../../src/stdlib/Esper.js');

EsperValue.pickle = function*(thiz, args, scope, extra) {
	let d = dehydrate(scope.realm, args[0]);
	let dj = JSON.stringify(d, null, '  ');
	return Value.fromNative(dj);
};

module.exports = {
	name: 'dehydrate',
	dehydrate: dehydrate,
	dehydrateRealm: (realm) => {
		return dehydrate(realm, realm.globalScope.object);
	},
	hydrate: hydrate,
	hydrateRealm: (realm, data) => {
		let state = {references: data.references, resolved: {}}
		hydrateInto(realm, realm.globalScope.object, data.root, state);
	},
	init: () => {}
}
