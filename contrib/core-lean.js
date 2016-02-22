"use srict";

//Make Globals
if ( (typeof WeakMap) === 'undefined' ) global.WeakMap = require('core-js/es6/weak-map');
//if ( (typeof Symbol) === 'undefined' ) global.Symbol = require('core-js/es6/symbol');
if ( (typeof Symbol) === 'undefined' ) global.Symbol = Object.create(Object.prototype, {
	iterator: {	get: function() { return '@@iterator'; } }
});
