'use strict';
/* @flow */

const Engine = require('./Engine');

function esper(opts) {
	return new Engine(opts);
}

esper.Engine = Engine;
esper.Value = require('./Value');
esper.ASTPreprocessor = require('./ASTPreprocessor');
esper.FutureValue = require('./values/FutureValue');

esper.eval = function(source) {
	return new Engine().evalSync(source).toNative();
};

esper.version = require('../package.json').version;

module.exports = esper;
