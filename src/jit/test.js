var tpls = require('./ASTemplates');
var r = require('regenerator');
var Compiler =  require('./Compiler');
var c = new Compiler();
let fx = c.compileNode({type: 'Literal', value: 10});


let g = fx({topFrame: {}});
do {
	var f = g.next();
} while ( !f.done );

console.log(f);
