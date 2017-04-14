'use strict';

const fs = require('fs');
const path = require('path');

let str;

if ( fs.readFileSync ) str = fs.readFileSync(path.join(__dirname,'node_modules','lua2js','stdlib.js'), 'utf8');
else str = require('raw-loader!./node_modules/lua2js/stdlib.js');

module.exports = str.replace(/^var pythonRuntime = module.exports/,'var __pythonRuntime');

