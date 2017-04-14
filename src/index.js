'use strict';
/* @flow */

let Engine;

function esper(opts) {
	return new Engine(opts);
}
module.exports = esper;

Engine = require('./Engine');
esper.plugins = {};
esper.Engine = Engine;
esper.Value = require('./Value');
esper.ASTPreprocessor = require('./ASTPreprocessor');
esper.FutureValue = require('./values/FutureValue');
esper.SmartLinkValue = require('./values/SmartLinkValue');
esper.ObjectValue = require('./values/ObjectValue');
esper.EasyNativeFunction = require('./values/EasyNativeFunction');
esper.EasyObjectValue = require('./values/EasyObjectValue');
esper.Realm = require('./Realm');
esper.eval = function(source) {
	return new Engine().evalSync(source).toNative();
};

esper.version = require('../package.json').version;

esper.languages = {
	javascript: require('./lang-javascript.js')
};

esper.plugin = function(n) {
	let pl;
	if ( !esper.plugins[n] ) {
		let pl = require('../plugins/' + n + '/index.js');
		esper.plugins[n] = pl;
		pl.init(esper);
	}
	return esper.plugins[n];
};

var list = require('../plugin-list.js');
for ( let pl of list ) esper.plugin(pl);


