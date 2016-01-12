"use strict";

exports.onHandleCode = function (ev) {
  ev.data.code = ev.data.code.replace(/class ([A-Za-z]+)/g, function(m, c) {
  	if ( ev.data.code.indexOf('module.exports = ' + c) == -1 ) return m;
  	return "export default " + m;
  });
};