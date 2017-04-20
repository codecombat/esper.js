'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');
var Engine = esper.Engine;

if ( !esper.plugins['ast-css'] ) {
	return it('Plugin: ast-css [disabled]', function() {});
}

describe('Plugin: ast-css', function() {
	let ast;
	let i = 0;
	function ensureFind(selector) {
		;
		it(++i + ' should find "' + selector + '"', () => {
			var matches = ast.find(selector);
			expect(matches.length).to.be.gt(0);
			return matches;
		});
	};

	function ensureCantFind(selector) {
		it(++i + ' should not find "' + selector + '"', () => {
			var matches = ast.find(selector);
			expect(matches.length).to.equal(0);
		});
	};

	const fullTest = 'Literal[raw=true] < loop.test:not(>:downTo(breakable)break)~ExpressionStatement';
	describe('dot', function() {
		before(function() {
			var e = new Engine();
			e.load([
				'hero.say',
				'someOtherCall(10)',
				'someIdentifier',
				'rob[1][2]'
			].join('\n'));
			ast = e.evaluator.ast;
		});
		//ensureFind('MemberExpression.object>Identifier[name="hero"]');
		ensureFind('CallExpression.arguments>*');
		ensureFind('MemberExpression[computed=true].object>MemberExpression[computed=true]');
	});
	describe('basic', function() {

		before(function() {
			var e = new Engine();
			e.load([
				'while ( true ) {',
				'	if ( true ) break;',
				'	else doSomethingElse();',
				'	for ( ;; ) continue;',
				'}',
				'extraCall()',
				'hero.say',
				'someOtherCall()',
				'someIdentifier'
			].join('\n'));
			ast = e.evaluator.ast;
		});



		it('should have a program tag as root', function() {
			expect(ast.matches('Program')).to.be.true;
		});

		ensureFind('while');
		ensureFind('loop');
		ensureFind('Literal < loop.test');
		ensureFind('Literal[raw=true]');
		ensureFind('loop break');
		ensureFind('if>break');
		ensureFind('if.consequent>break');
		ensureFind('loop+ExpressionStatement CallExpression');

		it('should detect possibly forgotten calls', function() {
			var matches = ast.find('ExpressionStatement>:matches(Literal,MemberExpression,Identifier)');
			var lines = matches.map(function(n) { return n.loc.start.line; });
			expect(lines).to.deep.equal([7,9]);
		});


	});

	describe('Linting code after unbreakble loop', function() {
		describe('Fake Loop', function() {
			before(function() {
				var e = new Engine();
				e.load([
					'while ( true ) {',
					'	for ( ;; ) break;',
					'}',
					'extraCall()'
				].join('\n'));
				ast = e.evaluator.ast;
			});
			ensureCantFind('WhileStatement>:downTo(breakable)BreakStatement');
			ensureFind('WhileStatement:not(>:downTo(breakable)BreakStatement)');
			ensureFind(fullTest);
		});
		describe('Broken', function() {
			before(function() {
				var e = new Engine();
				e.load([
					'while ( true ) {',
					'	if ( false ) break;',
					'}',
					'extraCall()'
				].join('\n'));
				ast = e.evaluator.ast;
			});
			ensureFind('loop.test:matches(>Literal[raw=true])~ExpressionStatement');
			ensureFind('loop:matches(>:downTo(breakable)BreakStatement)');
			ensureFind('WhileStatement>:downTo(breakable)BreakStatement');
			ensureFind('Literal < loop.test:matches(>:downTo(breakable)BreakStatement)~ExpressionStatement');
			ensureCantFind(fullTest);

		});
		describe('Unbroken', function() {
			before(function() {
				var e = new Engine();
				e.load([
					'while ( true ) {',
					'	doSomethign()',
					'}',
					'extraCall()'
				].join('\n'));
				ast = e.evaluator.ast;
			});
			ensureFind('WhileStatement:not(>:downTo(breakable)BreakStatement)');
			ensureFind(fullTest);
		});
		describe('No extra code', function() {
			before(function() {
				var e = new Engine();
				e.load([
					'while ( true ) {',
					'	doSomethign()',
					'}'
				].join('\n'));
				ast = e.evaluator.ast;
			});
			ensureCantFind(fullTest);
		});
	});
});
