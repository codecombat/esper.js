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
esper.Realm = require('./Realm');
esper.eval = function(source) {
	return new Engine().evalSync(source).toNative();
};

esper.version = require('../package.json').version;


esper.plugin = function(n) {
	let pl;
	if ( !esper.plugins[n] ) {
		let pl = require('../plugins/' + n + '/index.js');
		esper.plugins[n] = pl;
	}
	return esper.plugins[n];
};

var list = require('../plugin-list.js');
for ( let pl of list ) esper.plugin(pl);


