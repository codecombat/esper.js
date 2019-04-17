'use strict';

var webpack = require('webpack');
var fx = require('../webpack.config.js');

function make(profile, opts) {
	return new Promise(function(res, rej) {
		opts = opts || {};
		opts.profile = profile;
		var compiler = webpack(fx(opts));
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
	['modern'],
	['modern', {min: true}],
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
