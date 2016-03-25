'use strict';
/* @flow */

const Engine = require('./Engine');

function esper(opts) {
	return new Engine(opts);
}

esper.Engine = Engine;
esper.Value = require('./Value');
esper.ASTPreprocessor = require('./ASTPreprocessor');


module.exports = esper;
