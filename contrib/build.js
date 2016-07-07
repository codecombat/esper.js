'use strict';

var webpack = require('webpack');
var fx = require('../webpack-cfg');

function make(profile, opts) {
	return new Promise(function(res, rej) {
		var cfg = fx(profile, opts);
		var compiler = webpack(cfg);
		compiler.run(function(err, status) {
			if ( err ) return rej(err);
			console.log(status.toString({color: true}));
			res(status);
		});
	});
}

var stack = [
	['web'],
	['web', {min: true}],
	['modern']
];

if ( false ) {
	stack.push(
		['web-ext'],
		['web-ext', {min: true}],
		['lean'],
		['lean', {min: true}],
		['node'],
		['node-old'],
		['nashorn']
	);
}

function makeNext() {
	if ( stack.length < 1 ) return true;
	return make.apply(null, stack.pop()).then(makeNext, function(e) { console.log(e); });
}

makeNext();
