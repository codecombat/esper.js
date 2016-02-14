"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');
const ArrayValue = require('../values/ArrayValue');

function *getLength(v) {
	let m = yield * v.member('length');
	return yield * m.toUIntNative();
}

var defaultSeperator = EasyObjectValue.fromNative(',');

class ArrayPrototype extends EasyObjectValue {
	*call(thiz, args) {
		return this.fromNative("Ok?");
	}

	callPrototype(env) { return env.ArrayPrototype; }
	//objPrototype(env) { return env.Function; }
	
	static *forEach(thiz, args) {
		console.log("Arrayt#foreach called");
		return new ObjectValue(this.env);
	}

	static *indexOf(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || EasyObjectValue.undef;
		let start = args[1] || this.fromNative(0);
		let startn = (yield * start.toNumberValue()).native;
		
		if ( isNaN(startn) ) startn = 0;
		else if ( startn < 0 ) startn = 0;

		if ( l > startn ) {
			for ( let i = startn; i < l; ++i ) {
				let v = yield * thiz.member(i);
				if ( !v ) v = EasyObjectValue.undef;
				if ( (yield * v.tripleEquals(match)).truthy ) return this.fromNative(i);
				
			}
		}
		return this.fromNative(-1);
	}

	static *lastIndexOf(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let match = args[0] || EasyObjectValue.undef;
		let startn = l;
		if ( args[1] ) startn = yield * args[1].toIntNative();
		
		if ( isNaN(startn) ) startn = l;
		else if ( startn < 0 ) startn = l + startn;

		for ( let i = startn; i >= 0; --i ) {
			let v = yield * thiz.member(i);
			if ( !v ) v = EasyObjectValue.undef;
			if ( (yield * v.tripleEquals(match)).truthy ) return this.fromNative(i);
			
		}

		return this.fromNative(-1);
	}

	static *join(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield * getLength(thiz);
		let seperator = args[0] || defaultSeperator;
		let sepstr = (yield * seperator.toStringValue()).native;
		let strings = [];
		for ( let i = 0; i < l; ++i ) {
			let v = yield * thiz.member(i);
			if ( !v  ) strings[i] = '';
			else strings[i] = (yield * v.toStringValue()).native;
		}
		return this.fromNative(strings.join(sepstr));
	}

	static *slice(thiz, args, s) {
		//TODO: Call ToObject() on thisz;
		let length = yield * getLength(thiz);
		let result = [];

		let start = 0;
		let end = length;


		if ( args.length > 0 ) start = ( yield * args[0].toIntNative() );
		if ( args.length > 1 ) end = ( yield * args[1].toIntNative() );

		if ( start < 0 ) start = length + start;
		if ( end < 0 ) end = length + end;

		for ( let i = start; i < end; ++i ) {
			result.push(yield * thiz.member('' + i ));
		}


		return ArrayValue.make(result, s.env);
	}

	static *toString(thiz, args) {
		let joinfn = yield * thiz.member('join');
		if ( !joinfn || !joinfn.isCallable ) {
			let ots = yield * this.env.ObjectPrototype.member('toString');
			return yield * ots.call(thiz, []);
		} else {
			return yield * joinfn.call(thiz, [defaultSeperator]);
		}
		
	}
}
ArrayPrototype.prototype.clazz = 'Array';

module.exports = ArrayPrototype;
