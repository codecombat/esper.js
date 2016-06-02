'use strict';

exports.onHandleCode = function(ev) {
	ev.data.code = ev.data.code.replace(/class ([A-Za-z]+)/g, function(m, c) {
		if ( ev.data.code.indexOf('module.exports = ' + c) == -1 ) return m;
		return 'export default ' + m;
	});

	ev.data.code = ev.data.code.replace(/const ([A-Za-z]+) = require\(['"]([A-Za-z/.-]+)['"]\)/g, function(m, v, f) {
		var res = ['import ', v, ' from "', f, '"'].join('');
		return res;
	});

};
