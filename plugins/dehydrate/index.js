'use strict';

const Value = require('../../src/Value');
const PrimitiveValue = require('../../src/values/PrimitiveValue');

function dehydrate(realm, value) {
	let state = {
		refrences: {},
	};

	let val = _dehydrate(realm, value, state);
	return {root: val, refrences: state.refrences};

}

function _dehydrate(realm, value, state) {
	if ( value instanceof PrimitiveValue ) return {'$v': value.native};
	if ( value === Value.null ) return {'$t': 'null'};
	if ( value === Value.undef ) return {'$t': 'undefined'};
	if ( value.wellKnownName ) return {'$s': value.wellKnownName};
	if ( !(value.serial in state.refrences) ) {
		let ref = {
			'$t': value.isCallable ? 'function' : 'object',
			'prop': {}
		};
		state.refrences[value.serial] = ref;
		ref.proto = _dehydrate(realm, value.getPrototype(realm) || Value.null, state);
		for ( let k in value.properties ) {
			if ( !Object.prototype.hasOwnProperty.call(value.properties, k) ) continue;
			let prop = value.properties[k];
			ref.prop[k] = {
				v: _dehydrate(realm, prop.value, state),
				e: prop.enumerable && undefined,
				w: prop.writable && undefined,
				c: prop.configurable && undefined
			};
		}
	}
	return {'$ref': value.serial};
}

const EsperValue = require('../../src/stdlib/Esper.js');

EsperValue.pickle = function*(thiz, args, scope, extra) {
	let d = dehydrate(scope.realm, args[0]);
	let dj = JSON.stringify(d, null, '  ');
	return Value.fromNative(dj);
};
