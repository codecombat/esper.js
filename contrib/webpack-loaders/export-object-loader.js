'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(content) {
	return 'module.exports = ' + JSON.stringify(this.query.object) + ';';
};
