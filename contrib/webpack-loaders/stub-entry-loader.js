'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(content) {
	return [
		'var esper_ref = require("esper-refrence");',
		'var plugin = require("./plugins/' + this.resourceQuery.substring(1) + '");',
		'esper_ref._registerPlugin(plugin);'
	].join('\n');
};
