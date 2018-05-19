'use strict';

const EvaluatorInstruction = require('./EvaluatorInstruction');

class DefaultRuntime {
	*time() { return Date(); }
	*wait(time) { 
		let ev = yield EvaluatorInstruction.getEvaluator;
		if ( !ev.dispose ) ev.dispose = [];
		return new Promise(function(res, rej) {
			let id = setTimeout(() => res(), time)
			ev.dispose.push(() => {clearTimeout(id)});
		});
	}
}

module.exports = DefaultRuntime;