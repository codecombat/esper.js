'use strict';

const templates = require('./ASTemplates');
const escodegen = require('escodegen');
const FXGenerator = require('./FXGenerator');

const Value = require('../../src/Value');
const CompletionRecord = require('../../src/CompletionRecord');
const ClosureValue = require('../../src/values/ClosureValue');
const EvaluatorInstruction = require('../../src/EvaluatorInstruction');
const EvaluatorHandlers = require('../../src/EvaluatorHandlers');

class Compiler {
	canCompile(n) {
		switch (n.type) {
			case 'Literal':
				return typeof n.regex == 'undefined' && n.value !== null;
			case 'Identifier':
			case 'BlockStatement':
				return true;

		}
		return true;
	}

	compileNode(n) {

		let body = this.compileNodeBody(n);
		let fx = templates.W(body);
		return FXGenerator(fx, {
			Value: Value,
			CompletionRecord: CompletionRecord,
			EvaluatorHandlers: EvaluatorHandlers
		});
	}

	compileNodeBody(n) {
		let body;
		switch(n.type) {
			case 'Literal':
				body = this.compileLiteral(n);
				break;
			case 'Identifier':
				body = this.compileIdentifier(n);
				break;
			case 'BlockStatement':
				body = this.compileBlockStatement(n);
				break;
			case 'ExpressionStatement':
				body = this.compileExpressionStatement(n);
				break;
			default:
				body = this.compileFallBack(n);
		}
		body.leadingComments = [{type: 'block', value: '\n' + escodegen.generate(n) + '\n'}];
		return templates.premble(body);
	}

	compileLiteral(n) {
		return templates.V('result', n.value);
	}

	compileIdentifier(n) {
		if ( n.name !== 'undefined' ) return templates.evaluateIdentifier(n.name);
		return templates.undef('result', undefined);
	}

	compileFallBack(n) {
		return templates.fallBack(n.type, 'n', 's');
	}

	compileExpressionStatement(n) {
		return templates.wrapHandoff('expression', this.compileNodeBody(n.expression));
	}

	compileBlockStatement(n) {
		let parts = [];
		parts.push(templates.assignNToVar('blockStatementHolder'));
		for ( let i = 0; i < n.body.length; ++i ) {
			parts.push(templates.assignNToPartIndex(i, 'blockStatementHolder'));
			parts.push(this.compileNodeBody(n.body[i]));
		}
		return {type: 'BlockStatement', body: parts};
	}
}

module.exports = Compiler;
