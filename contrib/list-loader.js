var fs = require('fs');
var path = require('path');

module.exports = function(content) {
	var dir = this.context;

	var list;
	if ( fs.existsSync(dir) ) list = fs.readdirSync(dir);
	else list = [];

	return 'module.exports = ' + JSON.stringify(list);
};
