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

function dehydrate(realm, value) {
	let state = {
		references: {},
	};

	let val = _dehydrate(realm, value, state);
	return {root: val, references: state.references};

}

function _dehydrate(realm, value, state) {
	if ( !value ) return {'$hole': true};
	if ( value.wellKnownName ) return {'$s': value.wellKnownName};
	if ( value instanceof PrimitiveValue ) {
		if (typeof value.native === "number" && isNaN(value.native)) {
			return {'$t': 'NaN'};
		}
		return {'$v': value.native};
	}
	if ( value === Value.null ) return {'$t': 'null'};
	if ( value === Value.undef ) return {'$t': 'undefined'};
	if ( !(value.serial in state.references) ) {
		let ref = {
			'$t': value.isCallable ? 'function' : 'object',
			'prop': {}
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
					v: _dehydrate(realm, prop.value, state),
					f: (prop.enumerable ? 'e' : '') + (prop.writable ? 'w' : '') + (prop.configurable ? 'c' : '')
				};
			}
		}

		if ( value instanceof ClosureValue ) {
			ref.src = value.funcSourceAST.source();
			ref.upvars = {};
			for ( let n of Object.keys(value.func.upvars) ) {
				ref.upvars[n] = _dehydrate(realm, value.scope.object, state);
			}
		}
	}
	return {'$ref': value.serial};
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
		if ( value.src)  {
			let o = realm.parser(value.src, {loc: true});
			let ast = ASTPreprocessor.process(o, {source: value.src});
			f = ast.body[0];
			if ( f.expression ) f = f.expression;
		} else {
			let o = realm.parser('() => false');
			let ast = ASTPreprocessor.process(o);
			f = ast.body[0].expression;
		}

		let s = realm.globalScope;
		let ss = s.createChild();
		let v = new ClosureValue(f, ss);

		if ( f.type === 'ArrowFunctionExpression' ) {
			v.thiz = s.thiz;
			if ( f.expression ) v.returnLastValue = true;
		}

		if ( value.upvars ) {
			for ( let k in value.upvars ) {
				let v = value.upvars[k];
				if (f.freevars[k]) delete f.freevars[k];
				f.upvars[k] = true;
				let so = _hydrate(realm, v, state);
				//console.log("S", so, state.references[v.$ref], so.getImmediate(k));
				ss.object.properties[k] = so.properties[k];
			}
		}
		return v;
	}

	console.log("Cant hydrate", value);
}

function hydrateInto(realm, target, value, state) {
	if (value.$ref) {
		return hydrateInto(realm, target, state.references[value.$ref], state);
	}
	if(value.$t == "object" || value.$t == "function") {
		if (!(target instanceof ObjectValue)) throw "Type Mismatch";

		for ( let k in value.prop ) {
			let d = value.prop[k];
			if ( Object.prototype.hasOwnProperty.call(target.properties, k) ) {
				//console.log("T", k, typeof target.properties, );
			} else {
				let v = _hydrate(realm, d.v, state);
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
