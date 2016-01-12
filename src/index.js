"use strict";
/* @flow */

const Engine = require('./Engine');

if ( typeof window !== "undefined" ) {
	window.Esper = Engine;
}


module.exports = Engine;

