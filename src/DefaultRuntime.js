'use strict';

class DefaultRuntime {
	time() { return Date(); }
	wait(time) { 
		return new Promise(function(res, rej) {
			setTimeout(() => res(), time);
		});
	}
}

module.exports = DefaultRuntime;