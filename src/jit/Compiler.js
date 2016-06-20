'use strict';

const templates = require('./ASTemplates');
const FXGenerator = require('./FXGenerator');

const Value = require('../Value');
const CompletionRecord = require('../CompletionRecord');
const ClosureValue = require('../values/ClosureValue');
const EvaluatorInstruction = require('../EvaluatorInstruction');

class Compiler {
	canCompile(n) {
		switch (n.type) {
			case 'Literal':
				return typeof n.regex == 'undefined';
		}
		return false;
	}

	compileNode(n) {

		let body = this.compileNodeBody(n);
		let fx = templates.W(body);
		return FXGenerator(fx, {
			Value: Value,
			CompletionRecord: CompletionRecord
		});
	}

	compileNodeBody(n) {
		let body;
		switch(n.type) {
			case 'Literal':
				body = this.compileLiteral(n);
				break;
			default:
				throw new Error(`Dont know how to compile ${n.type}`);
		}

		return templates.premble(body);
	}

	compileLiteral(n) {
		return templates.V('result', n.value);
	}
}

module.exports = Compiler;
