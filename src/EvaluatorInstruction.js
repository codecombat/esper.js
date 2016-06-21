'use strict';


class EvaluatorInstruction {
	static branch(kind, ast, scope, extra) {
		let ei = new EvaluatorInstruction('branch');
		ei.kind = kind;
		ei.ast = ast;
		ei.scope = scope;
		ei.extra = extra;
		return ei;
	}

	static getEvaluator() {
		return new EvaluatorInstruction('getEvaluator');
	}

	constructor(type) {
		this.type = type;
	}

	mark(o) {
		for ( let k in o ) this[k] = o[k];
		return this;
	}
}

EvaluatorInstruction.stepMinor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepMajor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepStatement = new EvaluatorInstruction('step');
EvaluatorInstruction.waitForFramePop = new EvaluatorInstruction('waitForFramePop');
EvaluatorInstruction.framePushed = new EvaluatorInstruction('framePushed');

EvaluatorInstruction.eventLoopBodyStart = new EvaluatorInstruction('event').mark({event: 'loopBodyStart'});
module.exports = EvaluatorInstruction;
