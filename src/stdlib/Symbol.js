'use strict';

const Value = require('../Value');
const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');
const SymbolValue = require('../values/SymbolValue');

class SymbolObject extends EasyObjectValue {
    *call(thiz, args, scope, ext) {
        let ss = new SymbolValue();
        if (args.length > 0) {
            ss.name = yield* args[1].toStringNative();
        }
        return ss;
    }

	static *for(thiz, args, s) {
        let name = "undefined";
        if ( args.length > 0 ) {
            name = yield* args[1].toStringNative();
        }
        let ss = new SymbolValue();
        ss.name = s;
        return ss;
	}


}

SymbolObject.prototype.clazz = 'Symbol';
//JSONObject.prototype.wellKnownName = '%JSON%';


module.exports = SymbolObject;
