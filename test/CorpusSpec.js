'use strict';

let fs = require('fs');
let path = require('path');
let dir = path.join(__dirname, '..', 'contrib', 'test-suites', 'js-corpus');
let expect = require('chai').expect;

if ( fs.readdirSync ) require('../contrib/examine-corpus.js');

let list = require('../contrib/test-suites/js-corpus/expected.json');



describe('Corpus Tests', function() {
	for ( let file in list ) {
		it(file, function() {
			let entry = list[file];
			let stdout = [];
			let Engine = require('../src/index.js').Engine;
			let source = entry.source;
			let e = new Engine({addInternalStack: true});
			e.realm.print = function() {
				stdout.push(Array.prototype.join.call(arguments, '\t'));
			};
			e.evalSync(source);
			expect(stdout).to.deep.equal(entry.stdout);

		});
	}

});
