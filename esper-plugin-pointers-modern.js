/*!
 * esper.js
 * 
 * Compiled: Tue Apr 30 2019 16:58:46 GMT-0700 (PDT)
 * Target  : web (umd)
 * Profile : modern
 * Version : 4036339-dirty
 * 
 * 
 * The MIT License (MIT)
 * Copyright (c) 2016 Robert Blanckaert
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("esper"));
	else if(typeof define === 'function' && define.amd)
		define(["esper"], factory);
	else if(typeof exports === 'object')
		exports["esper-plugin-pointers"] = factory(require("esper"));
	else
		root["esper-plugin-pointers"] = factory(root["esper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var esper_ref = __webpack_require__(1);
var plugin = __webpack_require__(29);
esper_ref._registerPlugin(plugin);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const esper = __webpack_require__(30);
const Value = esper.Value;
const CompletionRecord = esper.CompletionRecord;

const debug = () => {};
//const debug = console.log.bind(console);


class PointerValue extends esper.ObjectValue {
	constructor(base, offset, realm) {
		super(realm);
		this.setPrototype(realm.PointerPrototype);
		this.base = base;
		this.offset = offset;
	}

	get debugString() {
		return "[-> " + this.base.properties[this.offset].value.debugString;
	}

	*get(k, realm) {
		let nk = parseInt(k);
		if (nk === nk) {
			let p2 = yield* this.add(esper.Value.fromNative(k));
			return yield* p2.derefrence();
		}
		return yield* super.get(k, realm);
	}

	*set(k, v, realm) {
		if (k === 'value') {
			this.base.properties[this.offset].value = v;
			return v;
		}
		let nk = parseInt(k);
		if (nk === nk) {
			let p2 = yield* this.add(esper.Value.fromNative(k));
			return yield* p2.set("value", v, realm);
		}
		return yield* super.set(k, v, realm);
	}

	callPrototype(realm) {
		return realm.PointerPrototype;
	}
	constructorFor(realm) {
		return realm.PointerPrototype;
	}

	*add(what) {
		let result = yield* esper.Value.fromNative(this.offset).add(what);
		return new PointerValue(this.base, result.toNative(), this.realm);
	}

	*derefrence(realm) {
		if (this.base.jsTypeName !== 'object') {
			return yield* this.base.get(this.offset);
		}
		return this.base.properties[this.offset].value;
	}

}
PointerValue.prototype.clazz = 'Pointer';

class PointerPrototypeValue extends esper.EasyObjectValue {
	static *value$eg(thiz, args, realm) {
		return yield* thiz.derefrence();
	}
}

class RefrenceFunction extends esper.ObjectValue {

	*rawCall(n, evalu, scope) {
		if (n.arguments.length == 0) return CompletionRecord.makeTypeError(realm, "No argument to refrence.");
		let a1 = n.arguments[0];
		let ref = null;

		switch (a1.type) {
			case "Identifier":
				return new PointerValue(scope.object, a1.name, scope.realm);
			case "MemberExpression":
				let base = yield* evalu.branch(a1.object, scope);
				let offset;
				if (a1.computed) offset = (yield* evalu.branch(a1.property, scope)).toNative();else if (a1.property.type == 'Identifier') offset = a1.property.name;else if (a1.property.type == 'Literal') offset = yield* evalu.branch(a1.property, scope).toNative();else return CompletionRecord.makeTypeError(scope.realm, "Unimplemented property type");
				return new PointerValue(base, offset, scope.realm);
			default:
				return CompletionRecord.makeTypeError(scope.realm, "Unimplemented");
		}
	}

	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if (args.length < 1) return CompletionRecord.makeTypeError(realm, "No argument to refrence.");
		return CompletionRecord.makeTypeError(scope.realm, "Can't call refrence like that.");
	}
}

class DerefrenceFunction extends esper.ObjectValue {
	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if (args.length < 1) return CompletionRecord.makeTypeError(scope.realm, "No argument to derefrence.");
		if (args[0] instanceof PointerValue) {
			return yield* args[0].derefrence();
		} else {
			return CompletionRecord.makeTypeError(scope.realm, "Tried to derefrence non pointer");
		}
	}
}

class PointerObjValue extends esper.EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setImmediate("refrence", new RefrenceFunction(realm));
		this.setImmediate("derefrence", new DerefrenceFunction(realm));
	}
}

let plugin = module.exports = {
	name: 'pointers',
	setupEngine: function (esper, engine) {
		engine.realm.PointerPrototype = new PointerPrototypeValue(engine.realm);
		engine.realm.globalScope.add("Pointer", new PointerObjValue(engine.realm));
	},
	init: function () {
		esper.hooks.setupEngine.push(this.setupEngine);
	}
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

let Engine;

function esper(opts) {
	return new Engine(opts);
}
module.exports = esper;

Engine = __webpack_require__(31);
esper.plugins = { 'lang-javascript': __webpack_require__(85) };
esper.Engine = Engine;
esper.Evaluator = __webpack_require__(32);
esper.Value = __webpack_require__(33);
esper.PrimitiveValue = __webpack_require__(41);
esper.ASTPreprocessor = __webpack_require__(59);
esper.FutureValue = __webpack_require__(51);
esper.SmartLinkValue = __webpack_require__(58);
esper.ObjectValue = __webpack_require__(39);
esper.StringValue = __webpack_require__(42);
esper.EasyNativeFunction = __webpack_require__(60);
esper.EasyObjectValue = __webpack_require__(62);
esper.CompletionRecord = __webpack_require__(34);
esper.Realm = __webpack_require__(55);
esper.EvaluatorHandlers = __webpack_require__(54);
esper.eval = function (source) {
	return new Engine().evalSync(source).toNative();
};

esper.version = __webpack_require__(87).version;

esper.languages = {
	javascript: esper.plugins['lang-javascript']
};

esper.hooks = {
	setupEngine: []
};

esper.plugin = function (name) {
	let pl;
	if (!esper.plugins[name]) {
		//console.log("Loading ", name, '../plugins/' + name + '/index.js');
		let pl = __webpack_require__(88)("./" + name + "/index.js");
		if (name != pl.name) throw new Error(`Loaded plugin as "${name}" but it had name "${pl.name}"`);
		if (!esper.plugins[name]) esper._registerPlugin(pl);
	}
	return esper.plugins[name];
};

esper._registerPlugin = function (pl) {
	if (typeof pl.init !== 'function') throw new Error('Tried to add a plugin without an init method.');
	if (typeof pl.name !== 'string') throw new Error('Tried to add a plugin without a name.');
	esper.plugins[pl.name] = pl;
	pl.init(esper);
};

var list = __webpack_require__(91);
esper.pluginList = list;
for (let pl in list) {
	if (list[pl] == 'bundle') esper.plugin(pl);
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const esper = __webpack_require__(30);
const Evaluator = __webpack_require__(32);
const Realm = __webpack_require__(55);
const Scope = __webpack_require__(56);
const Value = __webpack_require__(33);
const BridgeValue = __webpack_require__(46);
const ASTPreprocessor = __webpack_require__(59);
const FutureValue = __webpack_require__(51);
const EasyNativeFunction = __webpack_require__(60);
const ClosureValue = __webpack_require__(48);
const SmartLinkValue = __webpack_require__(58);
const DefaultRuntime = __webpack_require__(84);

let defaultOptions = {
	strict: false,
	foreignObjectMode: 'link',
	addInternalStack: false,
	executionLimit: Infinity,
	exposeEsperGlobal: true,
	extraErrorInfo: false,
	addExtraErrorInfoToStacks: false,
	bookmarkInvocationMode: 'error',
	yieldPower: 5,
	debug: false,
	compile: 'pre',
	language: 'javascript',
	runtime: false,
	rotateThreads: false
};

/**
 * Container class for all of esper.
 */
class Engine {

	constructor(options, realm = false) {
		options = options || {};
		this.options = {};
		for (var k in defaultOptions) {
			if (k in options) this.options[k] = options[k];else this.options[k] = defaultOptions[k];
		}

		if (realm) {
			this.realm = realm;
		} else {
			this.realm = new Realm(this.options, this);
		}

		this.evaluator = new Evaluator(this.realm, null, this.globalScope);
		if (this.options.debug) {
			this.evaluator.debug = true;
		}

		this.evaluator.defaultYieldPower = this.options.yieldPower;
		this.evaluator.yieldPower = this.options.yieldPower;

		if (this.language.startupCode && !realm) {
			this.loadLangaugeStartupCode();
		}

		//options.runtime = true;
		if (options.runtime) {
			if ("boolean" == typeof options.runtime) {
				this.runtime = new DefaultRuntime();
			} else {
				this.runtime = options.runtime;
			}
		}

		this.threads = [];
		let that = this;
		if (options.runtime) {
			this.evloop = { next: function () {
					let promises = [];
					for (let i = 0; i < that.threads.length; ++i) {
						if (that.threads[i]) {
							let val = that.threads[i].next();
							if (val.done) {
								that.threads.splice(i, 1);return { done: false, value: val.value };
							}
							if (!val.value || !val.value.then) {
								if (options.rotateThreads) that.threads.push(that.threads.splice(i, 1)[0]);
								return { done: false, value: val.value };
							} else promises.push(val.value);
						}
					}
					if (promises.length > 0) return { done: false, value: Promise.race(promises) };else return { done: true };
				} };
		} else {
			Object.defineProperty(this, "evloop", {
				get: () => this.threads[0],
				set: v => this.threads[0] = v // Supports CrazyJoshMode
			});
		}

		if (this.language.setupEngine) {
			this.language.setupEngine(esper, this);
		}

		for (let hook of esper.hooks.setupEngine) {
			hook(esper, this);
		}
	}

	//get evloop() { return this.generator; }
	get generator() {
		return this.evloop;
	}
	set generator(v) {
		return this.evloop = v;
	} // Supports CrazyJoshMode

	loadLangaugeStartupCode() {
		let past = this.preprocessAST(this.language.startupCode(), { markNonUser: true });
		let stdlib_eval = new Evaluator(this.realm, null, this.globalScope);
		stdlib_eval.frames = [];
		stdlib_eval.pushAST(past, this.globalScope);
		stdlib_eval.ast = past;

		let gen = stdlib_eval.generator();
		let val = gen.next();
		while (!val.done) val = gen.next();
	}

	get language() {
		if (!(this.options.language in esper.languages)) {
			throw new Error(`Unknown language ${this.options.language}. Load the lang-${this.options.language} plugin?`);
		}
		return esper.languages[this.options.language];
	}

	/**
  * Evalute `code` and return a promise for the result.
  *
  * @access public
  * @param {string} code - String of code to evaluate
  * @return {Promise<Value>} - The result of execution, as a promise.
  */
	eval(code) {
		let ast = this.realm.parser(code);
		return this.evalAST(ast, { source: code });
	}

	/**
  * Evalute `code` and return a the result.
  *
  * @access public
  * @param {string} code - String of code to evaluate
  * @return {Value} - The result of execution
  */
	evalSync(code) {
		let ast = this.realm.parser(code);
		return this.evalASTSync(ast, { source: code });
	}

	evalDetatched(code) {
		let ast = this.realm.parser(code);
		this.loadAST(ast, { source: code });
		let p = new Promise((res, rej) => {
			this.evaluator.onCompletion = res;
			this.evaluator.onError = rej;
		});
		setTimeout(() => this.run().catch(e => {}), 0);
		return p;
	}

	/**
  * Evalute `ast` and return a promise for the result.
  *
  * @access public
  * @param {Node} ast - ESTree AST representing the code to run.
  * @param {string} codeRef - The code that was used to generate the AST.
  * @return {Value} - The result of execution, as a promise.
  */
	evalAST(ast, opts) {
		//console.log(escodegen.generate(ast));
		this.loadAST(ast, opts);
		let p = this.run();
		p.then(() => this.threads = [], () => this.threads = []);
		return p;
	}

	evalASTSync(ast, opts) {
		this.loadAST(ast, opts);
		let value = this.runSync();
		this.threads[0] = [];
		return value;
	}

	preprocessAST(ast, opts) {
		opts = opts || {};
		opts.compile = this.options.compile;
		let past = ASTPreprocessor.process(ast, opts);
		return past;
	}

	loadAST(ast, opts) {
		let past = this.preprocessAST(ast, opts);
		this.evaluator.frames = [];
		this.evaluator.pushAST(past, this.globalScope);
		this.evaluator.ast = past;
		this.threads[0] = this.evaluator.generator();
	}

	load(code) {
		let ast = this.realm.parser(code);
		this.loadAST(ast, { source: code });
	}

	step() {
		if (this.threads.length < 1) throw new Error('No code loaded to step');
		let value = this.evloop.next();
		return value.done;
	}

	run() {
		let that = this;
		let steps = 0;
		function handler(value) {
			while (!value.done) {
				value = that.evloop.next();
				if (value.value && value.value.then) {
					return value.value.then(v => {
						return handler({ done: false, value: v });
					});
				}
				if (++steps > that.options.executionLimit) throw new Error('Execution Limit Reached');
			}
			if (!that.options.runtime) that.threads = [];
			return value;
		}
		return new Promise(function (resolve, reject) {
			try {
				let value = that.evloop.next();
				resolve(value);
			} catch (e) {
				reject(e);
			}
		}).then(handler).then(v => v.value);
	}

	runSync() {
		let steps = 0;
		let value = this.evloop.next();
		while (!value.done) {
			value = this.evloop.next();
			if (value.value && value.value.then) throw new Error('Can\'t deal with futures when running in sync mode');
			if (++steps > this.options.executionLimit) throw new Error('Execution Limit Reached');
		}
		return value.value;
	}

	/**
  * Refrence to the global scope.
  * @return {Scope}
  */
	get globalScope() {
		return this.realm.globalScope;
	}

	addGlobal(name, what, opts) {
		opts = opts || {};
		if (!(what instanceof Value)) what = this.realm.makeForForeignObject(what);
		if (!opts.const) this.globalScope.add(name, what);else this.globalScope.addConst(name, what);
	}

	addGlobalFx(name, what, opts) {
		var x = EasyNativeFunction.makeForNative(this.realm, what);
		x.makeThisForNew = function* (realm) {
			return Value.null;
		};
		this.addGlobal(name, x, opts);
	}

	addGlobalValue(name, what, opts) {
		this.addGlobal(name, Value.fromNative(what, this.realm), opts);
	}

	addGlobalBridge(name, what, opts) {
		this.addGlobal(name, new BridgeValue(what, this.realm), opts);
	}

	fetchFunctionSync(name, shouldYield) {
		var genfx = this.fetchFunction(name, shouldYield);
		return function () {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	fetchFunction(name, shouldYield) {
		var val = this.globalScope.get(name);
		return this.makeFunctionFromClosure(val, shouldYield);
	}

	functionFromSource(source, shouldYield) {
		let code = source;
		let ast = this.realm.parser(code, { inFunctionBody: true });
		return this.functionFromAST(ast, shouldYield, source);
	}

	functionFromAST(ast, shouldYield, source) {
		if (ast.type === 'Program') ast = ast.body;
		if (Array.isArray(ast)) ast = { type: 'BlockStatement', body: ast };
		if (ast.type !== 'BlockStatement') ast = { type: 'BlockStatement', body: [ast] };

		let past = {
			type: 'FunctionExpression',
			body: ast,
			params: []
		};
		past = ASTPreprocessor.process(past, { source: source });
		let fx = new ClosureValue(past, this.globalScope);
		return this.makeFunctionFromClosure(fx, shouldYield, this.evaluator);
	}

	functionFromSourceSync(source, shouldYield) {
		let genfx = this.functionFromSource(source, shouldYield);
		return function () {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	functionFromASTSync(ast, shouldYield, source) {
		let genfx = this.functionFromAST(ast, shouldYield, source);
		return function () {
			let gen = genfx.apply(this, arguments);
			let val = gen.next();
			//TODO: Make sure we dont await as it will loop FOREVER.
			while (!val.done) val = gen.next();
			return val.value;
		};
	}

	makeFunctionFromClosure(val, shouldYield, evalu) {

		var realm = this.realm;
		var scope = this.globalScope;
		var that = this;
		let evaluator = evalu || this.evaluator;
		if (!evaluator) throw new Error('Evaluator is falsey');
		if (!val) return;

		return function* () {
			var realThis = realm.makeForForeignObject(this);
			var realArgs = new Array(arguments.length);
			for (let i = 0; i < arguments.length; ++i) {
				realArgs[i] = realm.makeForForeignObject(arguments[i]);
			}

			if (!val.isCallable) {
				throw new TypeError(val.debugStr + ' is not a function.');
			}
			let c = val.call(realThis, realArgs, scope);
			evaluator.pushFrame({ type: 'program', generator: c, scope: scope });
			let gen = evaluator.generator();

			let last = yield* that.filterGenerator(gen, shouldYield, evaluator);
			if (last) return last.toNative();
		};
	}

	/**
  * Returns a new engine that executes in the same Realm.  Useful
  * for creating threads / coroutines
  * @return {Engine}
  */
	fork() {
		let engine = new Engine(this.options, this.realm);
		var scope = this.globalScope;
		engine.evaluator = this.makeEvaluatorClone();
		return engine;
	}

	makeEvaluatorClone() {
		let evaluator = new Evaluator(this.realm, this.evaluator.ast, this.globalScope);
		evaluator.frames = [];
		if (this.evaluator.insturment) {
			evaluator.insturment = this.evaluator.insturment;
		}
		if (this.evaluator.debug) {
			evaluator.debug = true;
		}

		if (SmartLinkValue.isThreadPrivileged(this.evaluator)) {
			SmartLinkValue.makeThreadPrivileged(evaluator);
		}

		return evaluator;
	}

	*filterGenerator(gen, shouldYield, evaluator) {
		let value = gen.next();
		let steps = 0;
		if (!evaluator) throw new Error('Evaluator is falsey');
		while (!value.done) {
			if (!shouldYield) yield;else if (evaluator.topFrame.type == 'await') {
				if (!value.value.resolved) yield;
			} else {
				var yieldValue = shouldYield(this, evaluator, value.value);
				if (yieldValue !== false) yield yieldValue;
			}
			value = gen.next(value.value);
			if (++steps > this.options.executionLimit) throw new Error('Execution Limit Reached');
		}
		return value.value;
	}
}

module.exports = Engine;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
const ClosureValue = __webpack_require__(48);
const ObjectValue = __webpack_require__(39);
const FutureValue = __webpack_require__(51);
const RegExpValue = __webpack_require__(52);
const PropertyDescriptor = __webpack_require__(40);
const ErrorValue = __webpack_require__(53);
const ArrayValue = __webpack_require__(49);
const EvaluatorInstruction = __webpack_require__(50);

class Frame {
	constructor(type, o) {
		this.type = type;
		for (var k in o) this[k] = o[k];
	}
}

class Evaluator {
	constructor(realm, n, s) {
		this.realm = realm;
		let that = this;
		this.lastValue = null;
		this.ast = n;
		this.defaultYieldPower = 5;
		this.yieldPower = this.defaultYieldPower;
		this.debug = false;
		this.profile = false;
		this.lastASTNodeProcessed = null;
		/**
   * @type {Object[]}
   * @property {Generator} generator
   * @property {string} type
   * @property {ast} ast
   */
		this.frames = [];
		if (n) this.pushAST(n, s);
	}

	pushAST(n, s) {
		let that = this;
		let gen = n ? this.branch(n, s) : function* () {
			return yield EvaluatorInstruction.stepMinor;
		}();
		this.pushFrame({ generator: gen, type: 'program', scope: s, ast: n });
	}
	processLostFrames(frames) {
		for (let f of frames) {
			if (f.profileName) {
				this.incrCtr('fxTime', f.profileName, Date.now() - f.entered);
			}
		}
	}
	unwindStack(target, canCrossFxBounds, label) {
		let finallyFrames = [];
		for (let i = 0; i < this.frames.length; ++i) {
			let t = this.frames[i].type;
			let match = t == target || target == 'return' && t == 'function';
			if (match && label) {
				match = label == this.frames[i].label;
			}

			if (match) {
				let j = i + 1;
				for (; j < this.frames.length; ++j) if (this.frames[j].type != 'finally') break;
				let fr = this.frames[j];
				this.processLostFrames(this.frames.splice(0, i + 1));
				this.saveFrameShortcuts();
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if (target == 'return' && this.frames[i].retValue) {
				let fr = this.frames[i];
				this.processLostFrames(this.frames.splice(0, i));
				this.saveFrameShortcuts();
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if (!canCrossFxBounds && this.frames[i].type == 'function') {
				break;
			} else if (t == 'finally') {
				finallyFrames.push(this.frames[i]);
			}
		}
		return false;
	}

	next(lastValueOveride) {
		let frames = this.frames;

		//Implement proper tailcalls by hand.
		do {
			let top = frames[0];
			let result;
			//console.log(top.type, top.ast && top.ast.type);

			if (top.exception) {
				this.lastValue = top.exception;
				delete top.exception;
			} else if (top.retValue) {
				this.lastValue = top.retValue;
				delete top.retValue;
			}

			result = top.generator.next(lastValueOveride || this.lastValue);
			lastValueOveride = undefined;
			let val = result.value;

			if (val instanceof EvaluatorInstruction) {
				switch (val.type) {
					case 'branch':
						this.branchFrame(val.kind, val.ast, val.scope, val.extra);
						continue;
					case 'getEvaluator':
						//lastValueOveride = this;
						//continue;
						return this.next(this);
					case 'waitForFramePop':
						continue;
					case 'framePushed':
						continue;
					case 'event':
					case 'step':
						if (this.instrument) this.instrument(this, val);
						return { done: false, value: val };
				}
			}

			if (val instanceof CompletionRecord) {
				this.processCompletionValueMeaning(val);
				this.lastValue = val.value;
				continue;
			}
			//if ( !val ) console.log("Bad val somewhere around", this.topFrame.type);
			if (this.instrument) this.instrument(this, val);

			if (val && val.then) {
				if (top && top.type !== 'await') {
					this.pushAwaitFrame(val);
				}
				return { done: false, value: val };
			}

			this.lastValue = val;
			if (result.done) {
				let lastFrame = this.popFrame();

				if (lastFrame.profileName) {
					this.processLostFrames([lastFrame]);
				}

				// Latient values can't cross function calls.
				// Dont do this, and you get coffeescript mode.
				if (lastFrame.type === 'function' && !lastFrame.returnLastValue) {
					this.lastValue = Value.undef;
				}

				if (frames.length === 0) {
					if (this.debug) {
						this.dumpProfilingInformation();
					}
					if (this.onCompletion) this.onCompletion(result.value);
					return { done: true, value: result.value };
				} else continue;
			}
		} while (false);

		return { done: false, value: this.lastValue };
	}

	processCompletionValueMeaning(val) {
		if (!(val.value instanceof Value)) {
			if (val.value instanceof Error) {
				throw new Error('Value was an error: ' + val.value.stack);
			} else if (val.value.type) {
				switch (val.value.type) {
					case "TypeError":
						val.value = CompletionRecord.makeTypeError(this.realm, val.value.message).value;
				}
			} else {
				throw new Error('Value isnt of type Value, its: ' + val.value.toString());
			}
		}

		switch (val.type) {
			case CompletionRecord.CONTINUE:
				if (this.unwindStack('continue', false, val.target)) return true;
				throw new Error('Cant find matching loop frame for continue');
			case CompletionRecord.BREAK:
				if (this.unwindStack('loop', false, val.target)) return true;
				throw new Error('Cant find matching loop frame for break');
			case CompletionRecord.RETURN:
				let rfr = this.unwindStack('return', false);
				if (!rfr) throw new Error('Cant find function bounds.');
				rfr.retValue = val.value;
				return true;
			case CompletionRecord.THROW:
				//TODO: Fix this nonsense:
				let e = val.value.toNative();
				//val.value.native = e;

				let smallStack;
				if (e && e.stack) smallStack = e.stack.split(/\n/).slice(0, 4).join('\n');
				let stk = this.buildStacktrace(e).join('\n    ');
				let bestFrame;
				for (let i = 0; i < this.frames.length; ++i) {
					if (this.frames[i].ast) {
						bestFrame = this.frames[i];
						break;
					}
				}

				if (val.value instanceof ErrorValue) {
					if (this.realm.options.addExtraErrorInfoToStacks && val.value.extra) {
						stk += '\n-------------';
						for (let key in val.value.extra) {
							let vv = val.value.extra[key];
							if (vv instanceof Value) stk += `
${key} => ${vv.debugString}`;else stk += `
${key} => ${vv}`;
						}
					}
				}

				if (e instanceof Error) {
					e.stack = stk;
					if (smallStack && this.realm.options.addInternalStack) e.stack += '\n-------------\n' + smallStack;
					if (bestFrame) {
						e.range = bestFrame.ast.range;
						e.loc = bestFrame.ast.loc;
					}
				}

				if (val.value instanceof ErrorValue) {
					if (!val.value.has('stack')) {
						val.value.setImmediate('stack', Value.fromNative(stk));
						val.value.properties['stack'].enumerable = false;
					}
				}

				let tfr = this.unwindStack('catch', true);
				if (tfr) {
					tfr.exception = val;
					this.lastValue = val;
					return true;
				}
				let line = -1;
				if (this.topFrame.ast && this.topFrame.ast.attr) {
					line = this.topFrame.ast.attr.pos.start_line;
				}
				//console.log(this.buildStacktrace(val.value.toNative()));
				let v = val.value.toNative();
				if (this.onError) this.onError(v);
				throw v;
			case CompletionRecord.NORMAL:
				return false;
		}
	}

	buildStacktrace(e) {
		let lines = e ? [e.toString()] : [];
		for (var f of this.frames) {
			//if ( f.type !== 'function' ) continue;
			if (f.ast) {
				let line = 'at ' + (f.ast.srcName || f.ast.type) + ' ';
				if (f.ast.loc) line += '(<src>:' + f.ast.loc.start.line + ':' + f.ast.loc.start.column + ')';
				lines.push(line);
			}
		}
		return lines;
	}
	pushFrame(frame) {
		frame.srcAst = frame.ast;
		if (frame.yieldPower === undefined) frame.yieldPower = this.defaultYieldPower;
		this.frames.unshift(new Frame(frame.type, frame));
		this.saveFrameShortcuts();
	}

	pushAwaitFrame(val) {
		this.pushFrame({
			generator: function* (f) {
				while (!f.resolved) yield f;
				if (f.successful) {
					return f.value;
				} else {
					return new CompletionRecord(CompletionRecord.THROW, f.value);
				}
			}(val),
			type: 'await'
		});
	}

	popFrame() {
		let frame = this.frames.shift();
		this.saveFrameShortcuts();
		return frame;
	}

	saveFrameShortcuts() {
		let prev = this.yieldPower;
		if (this.frames.length == 0) {
			this.topFrame = undefined;
			this.yieldPower = this.defaultYieldPower;
		} else {
			this.topFrame = this.frames[0];
			this.yieldPower = this.topFrame.yieldPower;
		}
	}

	fromNative(native, x) {
		return this.realm.fromNative(native, x);
	}

	generator() {
		return {
			next: this.next.bind(this),
			throw: e => {
				throw e;
			},
			evaluator: this
		};
	}

	breakFrames() {}

	*resolveRef(n, s, create) {
		let oldAST = this.topFrame.ast;
		this.topFrame.ast = n;
		switch (n.type) {
			case 'Identifier':
				let iref = s.ref(n.name, s.realm);
				if (!iref) {
					iref = {
						getValue: function* () {
							let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
							yield* err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict });
							return yield err;
						},
						del: function () {
							return true;
						}
					};
					if (!create || s.strict) {
						iref.setValue = function* () {
							let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
							yield* err.addExtra({ code: 'UndefinedVariable', when: 'write', ident: n.name, strict: s.strict });
							return yield err;
						};
					} else {
						iref.setValue = function* (value) {
							s.global.set(n.name, value, s);
							let aref = s.global.ref(n.name, s);
							this.setValue = aref.setValue;
							this.getValue = aref.getValue;
							this.del = aref.delete;
						};
					}
				}
				this.topFrame.ast = oldAST;
				return iref;
			case 'MemberExpression':
				let idx;
				let ref = yield* this.branch(n.object, s);
				if (n.computed) {
					idx = (yield* this.branch(n.property, s)).toNative();
				} else {
					idx = n.property.name;
				}

				if (!ref) {
					return yield CompletionRecord.makeTypeError(s.realm, `Can't write property of undefined: ${idx}`);
				}

				if (!ref.ref) {
					return yield CompletionRecord.makeTypeError(s.realm, `Can't write property of non-object type: ${idx}`);
				}

				this.topFrame.ast = oldAST;
				return ref.ref(idx, s);

			default:
				return yield CompletionRecord.makeTypeError(s.realm, `Couldnt resolve ref component: ${n.type}`);
		}
	}

	*partialMemberExpression(left, n, s) {
		if (n.computed) {
			let right = yield* this.branch(n.property, s);
			return yield* left.get(right.toNative(), s.realm);
		} else if (n.property.type == 'Identifier') {
			if (!left) throw `Cant index ${n.property.name} of undefined`;
			return yield* left.get(n.property.name, s.realm);
		} else {
			if (!left) throw `Cant index ${n.property.value.toString()} of undefined`;
			return yield* left.get(n.property.value.toString(), s.realm);
		}
	}

	//NOTE: Returns generator, fast return yield *;
	doBinaryEvaluation(operator, left, right, realm) {
		switch (operator) {
			case '==':
				return left.doubleEquals(right, realm);
			case '!=':
				return left.notEquals(right, realm);
			case '===':
				return left.tripleEquals(right, realm);
			case '!==':
				return left.doubleNotEquals(right, realm);
			case '+':
				return left.add(right, realm);
			case '-':
				return left.subtract(right, realm);
			case '*':
				return left.multiply(right, realm);
			case '/':
				return left.divide(right, realm);
			case '%':
				return left.mod(right, realm);
			case '|':
				return left.bitOr(right, realm);
			case '^':
				return left.bitXor(right, realm);
			case '&':
				return left.bitAnd(right, realm);
			case 'in':
				return right.inOperator(left, realm);
			case 'instanceof':
				return left.instanceOf(right, realm);
			case '>':
				return left.gt(right, realm);
			case '<':
				return left.lt(right, realm);
			case '>=':
				return left.gte(right, realm);
			case '<=':
				return left.lte(right, realm);
			case '<<':
				return left.shiftLeft(right, realm);
			case '>>':
				return left.shiftRight(right, realm);
			case '>>>':
				return left.shiftRightZF(right, realm);
			case '**':
				return left.pow(right, realm);
			default:
				throw new Error('Unknown binary operator: ' + operator);
		}
	}

	branchFrame(type, n, s, extra) {
		let frame = { generator: this.branch(n, s), type: type, scope: s, ast: n };

		if (extra) {
			for (var k in extra) {
				frame[k] = extra[k];
			}
			if (extra.profileName) {
				frame.entered = Date.now();
			}
		}
		this.pushFrame(frame);
		return EvaluatorInstruction.framePushed;
	}

	beforeNode(n) {
		let tf = this.topFrame;
		let state = { top: tf, ast: tf.ast, node: n };
		this.lastASTNodeProcessed = n;
		if (this.debug) this.incrCtr('astInvocationCount', n.type);
		tf.ast = n;
		return state;
	}

	afterNode(state, r) {
		let tf = this.topFrame;
		tf.value = r;
		tf.ast = state.ast;
	}

	/**
  * @private
  * @param {object} n - AST Node to dispatch
  * @param {Scope} s - Current evaluation scope
  */
	branch(n, s) {
		if (!n.dispatch) {
			let nextStep = this.findNextStep(n.type);

			n.dispatch = function* (that, n, s) {
				let state = that.beforeNode(n);

				let result = yield* nextStep(that, n, s);
				if (result instanceof CompletionRecord) result = yield result;
				if (result && result.then) result = yield result;

				that.afterNode(state, result);

				return result;
			};
		}
		return n.dispatch(this, n, s);
	}

	incrCtr(n, c, v) {
		if (v === undefined) v = 1;
		if (!this.profile) this.profile = {};
		let o = this.profile[n];
		if (!o) {
			o = {};
			this.profile[n] = o;
		}
		c = c || '???';
		if (c in o) o[c] += v;else o[c] = v;
	}

	dumpProfilingInformation() {
		function lpad(s, l) {
			return s + new Array(Math.max(l - s.length, 1)).join(' ');
		}

		if (!this.profile) {
			console.log('===== Profile: None collected =====');
			return;
		}

		console.log('===== Profile =====');
		for (let sec in this.profile) {
			console.log(sec + ' Stats:');
			let o = this.profile[sec];
			let okeys = Object.keys(o).sort((a, b) => o[b] - o[a]);
			for (let name of okeys) {
				console.log(`  ${lpad(name, 20)}: ${o[name]}`);
			}
		}
		console.log('=================');
	}

	get insterment() {
		return this.instrument;
	}
	set insterment(v) {
		this.instrument = v;
	}
}

Evaluator.prototype.findNextStep = __webpack_require__(54).findNextStep;

module.exports = Evaluator;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const CompletionRecord = __webpack_require__(34);
const GenDash = __webpack_require__(35);

let undef, nil, tru, fals, nan, emptyString, zero, one, negone, negzero, smallIntValues;
let cache = new WeakMap();
let bookmarks = new WeakMap();
let ObjectValue, PrimitiveValue, StringValue, NumberValue, BridgeValue, Evaluator;

let serial = 0;
/**
 * Represents a value a variable could take.
 */
class Value {
	/**
  * Convert a native javascript primative value to a Value
  * @param {any} value - The value to convert
  */
	static fromPrimativeNative(value) {
		if (!value) {
			if (value === undefined) return undef;
			if (value === null) return nil;
			if (value === false) return fals;
			if (value === '') return emptyString;
		}

		if (value === true) return tru;

		if (typeof value === 'number') {
			if (value === 0) {
				return 1 / value > 0 ? zero : negzero;
			}
			if (value | 0 === value) {
				let snv = smallIntValues[value + 1];
				if (snv) return snv;
			}
			return new NumberValue(value);
		}
		if (typeof value === 'string') return new StringValue(value);
		if (typeof value === 'boolean') return new PrimitiveValue(value);
	}

	static hasBookmark(native) {
		return bookmarks.has(native);
	}
	static getBookmark(native) {
		return bookmarks.get(native);
	}

	/**
  * Convert a native javascript value to a Value
  *
  * @param {any} value - The value to convert
  * @param {Realm} realm - The realm of the new value.
  */
	static fromNative(value, realm) {
		if (value instanceof Value) return value;
		let prim = Value.fromPrimativeNative(value);
		if (prim) return prim;

		if (value instanceof Error) {
			if (!realm) throw new Error('We needed a realm, but we didnt have one.  We were sad :(');
			if (value instanceof TypeError) return realm.TypeError.makeFrom(value);
			if (value instanceof ReferenceError) return realm.ReferenceError.makeFrom(value);
			if (value instanceof SyntaxError) return realm.SyntaxError.makeFrom(value);else return realm.Error.makeFrom(value);
		}

		if (Value.hasBookmark(value)) {
			return Value.getBookmark(value);
		}

		throw new TypeError('Tried to load an unsafe native value into the interperter:' + typeof value + ' / ' + value);
		//TODO: Is this cache dangerous?
		if (!cache.has(value)) {
			let nue = new BridgeValue(realm, value);
			cache.set(value, nue);
			return nue;
		}
		return cache.get(value);
	}

	/**
  * Holds a value representing `undefined`
  *
  * @returns {UndefinedValue}
  */
	static get undef() {
		return undef;
	}

	/**
  * Holds a value representing `null`
  *
  * @returns {NullValue}
  */
	static get null() {
		return nil;
	}

	/**
  * Holds a value representing `true`
  *
  * @returns {BooleanValue} true
  */
	static get true() {
		return tru;
	}

	/**
  * Holds a value representing `fasle`
  *
  * @returns {BooleanValue} false
  */
	static get false() {
		return fals;
	}

	/**
  * Holds a value representing `NaN`
  *
  * @returns {NumberValue} NaN
  */
	static get nan() {
		return nan;
	}

	/**
  * Holds a value representing `''`
  *
  * @returns {StringValue} ''
  */
	static get emptyString() {
		return emptyString;
	}

	/**
  * Holds a value representing `0`
  *
  * @returns {NumberValue} 0
  */
	static get zero() {
		return zero;
	}

	static createNativeBookmark(v, realm) {
		var out;
		let thiz = this;
		if (typeof v.call === 'function') {
			switch (realm.options.bookmarkInvocationMode) {
				case 'loop':

					out = function Bookmark() {
						let Evaluator = __webpack_require__(32);
						let cthis = realm.makeForForeignObject(this);
						let c = v.call(cthis, Array.from(arguments).map(v => realm.makeForForeignObject(v)), realm.globalScope);
						let evalu = new Evaluator(realm, null, realm.globalScope);
						evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
						let gen = evalu.generator();
						let result;
						do {
							result = gen.next();
						} while (!result.done);
						return result.value.toNative();
					};
					break;
				default:
					out = function Bookmark() {
						throw new Error('Atempted to invoke bookmark for ' + v.debugString);
					};
			}
		} else {
			out = {};
		}
		Object.defineProperties(out, {
			toString: { value: function () {
					return v.debugString;
				}, writable: true },
			inspect: { value: function () {
					return v.debugString;
				}, writable: true },
			esperValue: { get: function () {
					return v;
				} }
		});
		bookmarks.set(out, v);
		return out;
	}

	constructor() {
		this.serial = serial++;
	}

	/**
  * Converts this value to a native javascript value.
  *
  * @abstract
  * @returns {*}
  */
	toNative() {
		throw new Error('Unimplemented: Value#toNative');
	}

	/**
  * Deep copy this value to a native javascript value.
  *
  * @returns {*}
  */
	toJS() {
		return this.toNative();
	}

	/**
  * A string representation of this Value suitable for display when
  * debugging.
  * @abstract
  * @returns {string}
  */
	get debugString() {
		let native = this.toNative();
		return native ? native.toString() : '???';
	}

	inspect() {
		return this.debugString;
	}

	//TODO: Kill this
	fromNative(other, realm) {
		realm = realm || this.realm;
		if (realm) return realm.fromNative(other);
		return Value.fromNative(other);
	}

	/**
  * Indexes the value to get the value of a property.
  * i.e. `value[name]`
  * @param {String} name
  * @param {Realm} realm
  * @abstract
  * @returns {Value}
  */
	*get(name, realm) {
		let err = "Can't access get " + name + ' of that type: ' + __webpack_require__(36).inspect(this);
		return CompletionRecord.makeTypeError(realm, err);
	}

	getImmediate(name) {
		return GenDash.syncGenHelper(this.get(name));
	}

	/**
  * Computes the javascript expression `!value`
  * @returns {Value}
  */
	*not() {
		return !this.truthy ? Value.true : Value.false;
	}

	/**
  * Computes the javascript expression `+value`
  * @returns {Value}
  */
	*unaryPlus() {
		return Value.fromNative(+(yield* this.toNumberValue()));
	}

	/**
  * Computes the javascript expression `-value`
  * @returns {Value}
  */
	*unaryMinus() {
		return Value.fromNative(-(yield* this.toNumberValue()));
	}

	/**
  * Computes the javascript expression `typeof value`
  * @returns {Value}
  */
	*typeOf() {
		return Value.fromNative(this.jsTypeName);
	}

	/**
  * Computes the javascript expression `!(value == other)`
  * @param {Value} other - The other value
  * @param {Realm} realm - The realm to use when creating resuls.
  * @returns {Value}
  */
	*notEquals(other, realm) {
		var result = yield* this.doubleEquals(other, realm);
		return yield* result.not();
	}

	/**
  * Computes the javascript expression `!(value === other)`
  * @param {Value} other - The other value
  * @param {Realm} realm - The realm to use when creating resuls.
  * @returns {Value}
  */
	*doubleNotEquals(other, realm) {
		var result = yield* this.tripleEquals(other, realm);
		return yield* result.not();
	}

	/**
  * Computes the javascript expression `value === other`
  * @param {Value} other - The other value
  * @param {Realm} realm - The realm to use when creating resuls.
  * @returns {Value}
  */
	*tripleEquals(other, realm) {
		return other === this ? Value.true : Value.false;
	}

	getPrototypeProperty() {
		let p = this.properties['prototype'];
		if (!p) return;
		return p.value;
	}

	*makeThisForNew(realm) {
		var nue = new ObjectValue(realm);
		var p = this.getPrototypeProperty();
		if (p) nue.setPrototype(p);
		return nue;
	}

	/**
  * Computes the javascript expression `value > other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*gt(other) {
		return this.fromNative((yield* this.toNumberNative()) > (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value < other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*lt(other) {
		return this.fromNative((yield* this.toNumberNative()) < (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value >= other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*gte(other) {
		return this.fromNative((yield* this.toNumberNative()) >= (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value <= other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*lte(other) {
		return this.fromNative((yield* this.toNumberNative()) <= (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value - other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*subtract(other) {
		return this.fromNative((yield* this.toNumberNative()) - (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value / other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*divide(other) {
		return this.fromNative((yield* this.toNumberNative()) / (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value * other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*multiply(other) {
		return this.fromNative((yield* this.toNumberNative()) * (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value % other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*mod(other) {
		return this.fromNative((yield* this.toNumberNative()) % (yield* other.toNumberNative()));
	}

	*bitNot() {
		return this.fromNative(~(yield* this.toNumberNative()));
	}

	*shiftLeft(other) {
		return this.fromNative((yield* this.toNumberNative()) << (yield* other.toNumberNative()));
	}
	*shiftRight(other) {
		return this.fromNative((yield* this.toNumberNative()) >> (yield* other.toNumberNative()));
	}
	*shiftRightZF(other) {
		return this.fromNative((yield* this.toNumberNative()) >>> (yield* other.toNumberNative()));
	}

	*bitAnd(other) {
		return this.fromNative((yield* this.toNumberNative()) & (yield* other.toNumberNative()));
	}
	*bitOr(other) {
		return this.fromNative((yield* this.toNumberNative()) | (yield* other.toNumberNative()));
	}
	*bitXor(other) {
		return this.fromNative((yield* this.toNumberNative()) ^ (yield* other.toNumberNative()));
	}

	/**
  * Computes the `value` raised to the `other` power (`value ** other`)
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*pow(other) {
		return this.fromNative(Math.pow((yield* this.toNumberNative()), (yield* other.toNumberNative())));
	}

	*inOperator(other) {
		let err = "Cannot use 'in' operator to search for 'thing' in 'thing'";
		return new CompletionRecord(CompletionRecord.THROW, {
			type: "TypeError",
			message: err
		});
	}

	/**
  * Is the value is truthy, i.e. `!!value`
  *
  * @abstract
  * @type {boolean}
  */
	get truthy() {
		throw new Error('Unimplemented: Value#truthy');
	}

	get jsTypeName() {
		throw new Error('Unimplemented: Value#jsTypeName');
	}

	get specTypeName() {
		return this.jsTypeName;
	}

	get isCallable() {
		return typeof this.call === 'function';
	}

	*toNumberValue() {
		throw new Error('Unimplemented: Value#toNumberValue');
	}
	*toStringValue() {
		throw new Error('Unimplemented: Value#StringValue');
	}
	*toStringNative() {
		return (yield* this.toStringValue()).native;
	}

	*toBooleanValue() {
		return this.truthy ? tru : fals;
	}

	*toUIntNative() {
		let nv = yield* this.toNumberValue();
		return Math.floor(nv.native);
	}

	*toIntNative() {
		let nv = yield* this.toNumberValue();
		return Math.floor(nv.native);
	}

	*toNumberNative() {
		let nv = yield* this.toNumberValue();
		return nv.native;
	}

	*toPrimitiveValue(preferedType) {
		throw new Error('Unimplemented: Value#toPrimitiveValue');
	}
	*toPrimitiveNative(preferedType) {
		return (yield* this.toPrimitiveValue(preferedType)).native;
	}

	/**
  * Quickly make a generator for this value
  */
	*fastGen() {
		return this;
	}

}
module.exports = Value;

ObjectValue = __webpack_require__(39);
PrimitiveValue = __webpack_require__(41);
StringValue = __webpack_require__(42);
NumberValue = __webpack_require__(43);
const UndefinedValue = __webpack_require__(47);
const NullValue = __webpack_require__(44);

undef = new UndefinedValue();
nil = new NullValue();
tru = new PrimitiveValue(true);
fals = new PrimitiveValue(false);
nan = new PrimitiveValue(NaN);
emptyString = new StringValue('');

zero = new NumberValue(0);
negzero = new NumberValue(-0);
one = new NumberValue(1);
negone = new NumberValue(-1);
smallIntValues = [negone, zero, one, new NumberValue(2), new NumberValue(3), new NumberValue(4), new NumberValue(5), new NumberValue(6), new NumberValue(7), new NumberValue(8), new NumberValue(9)];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let Value = __webpack_require__(33);

class CompletionRecord {
	constructor(type, value, target) {
		if (value === undefined) {
			value = type;
			type = CompletionRecord.NORMAL;
		}

		this.type = type;
		this.value = value;
		this.target = target;
	}

	get abrupt() {
		return this.type !== CompletionRecord.NORMAL;
	}

	static makeTypeError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.TypeError.makeFrom(msg);else err = realm.TypeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeReferenceError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.ReferenceError.makeFrom(msg);else err = realm.ReferenceError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeSyntaxError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.SyntaxError.makeFrom(msg);else err = realm.SyntaxError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeRangeError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.RangeError.makeFrom(msg);else err = realm.RangeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	/**
  * Easy access to value.addExtra.
  * Note: Returns a generator.
  * @param {Object} obj - Extra properties
  */
	addExtra(obj) {
		return this.value.addExtra(obj);
	}

}
module.exports = CompletionRecord;

CompletionRecord.NORMAL = 0;
CompletionRecord.BREAK = 1;
CompletionRecord.CONTINUE = 2;
CompletionRecord.RETURN = 3;
CompletionRecord.THROW = 4;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function* sortValArray(arr, comp) {
	if (arr.length < 2) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = yield* sortValArray(arr.slice(0, mid), comp);
	let right = yield* sortValArray(arr.slice(mid, arr.length), comp);
	return yield* mergeValArray(left, right, comp);
}

function* mergeValArray(l, r, comp) {
	var result = [];
	while (l.length && r.length) {
		if (yield* comp(l[0], r[0])) result.push(l.shift());else result.push(r.shift());
	}

	while (l.length) result.push(l.shift());
	while (r.length) result.push(r.shift());
	return result;
}

class GenDash {
	static *identify(value) {
		return value;
	}

	static *map(what, fx) {
		fx = fx || GenDash.identify;
		var out = new Array(what.length);
		for (let i = 0; i < what.length; ++i) {
			out[i] = yield* fx(what[i], i, what);
		}
		return out;
	}

	static *each(what, fx) {
		if (what == null) return what;
		for (let i = 0; i < what.length; ++i) {
			if (false === (yield* fx(what[i], i, what))) break;
		}
		return what;
	}

	static *noop() {}

	static *sort(what, comp) {
		comp = comp || function* (left, right) {
			return left < right;
		};
		return yield* sortValArray(what, comp);
	}

	static *values(what) {
		var out = [];
		for (let o in what) {
			if (!Object.hasOwnProperty(o)) continue;
			out.push(what[o]);
		}
		return out;
	}

	static *keys(what) {
		var out = [];
		for (let o in what) {
			if (!Object.hasOwnProperty(o)) continue;
			out.push(o);
		}
		return out;
	}

	static *identity(value) {
		return value;
	}

	static syncGenHelper(gen) {
		var val = gen.next();
		if (!val.done) {
			console.log('This code path uses a helper, but the actual method yielded...');
			throw new Error('This code path uses a helper, but the actual method yielded...');
		}
		return val.value;
	}
}

module.exports = GenDash;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(37);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(38);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const PropertyDescriptor = __webpack_require__(40);
const CompletionRecord = __webpack_require__(34);
const PrimitiveValue = __webpack_require__(41);
const NullValue = __webpack_require__(44);
const GenDash = __webpack_require__(35);

let alwaysFalse = () => false;
let undefinedReturningGenerator = function* () {
	return Value.undef;
};

class ObjRefrence {
	constructor(object, name, ctxthis) {
		this.object = object;
		this.name = name;
		this.ctxthis = ctxthis;
	}
	del(s) {
		return this.object.delete(this.name, s);
	}
	getValue(s) {
		return this.object.get(this.name, this.ctxthis || this.object, s);
	}
	setValue(value, s) {
		return this.object.set(this.name, value, s);
	}
}

/**
 * Represents an Object.
 */
class ObjectValue extends Value {

	constructor(realm, proto) {
		super();
		this.extensable = true;
		this.realm = realm;
		this.proto = null;
		if (proto) this.eraseAndSetPrototype(proto);else if (realm) this.eraseAndSetPrototype(realm.ObjectPrototype);else this.properties = Object.create(null);
	}

	ref(name, ctxthis) {
		var existing = this.properties[name];
		let thiz = this;

		let get;
		if (existing) {
			return new ObjRefrence(this, name, ctxthis);
		} else {
			return {
				name: name,
				object: thiz,
				isVariable: false,
				del: alwaysFalse,
				getValue: undefinedReturningGenerator,
				setValue: function (to, s) {
					return this.object.set(this.name, to, s);
				}
			};
		}
	}

	//Note: Returns generator by tailcall.
	set(name, value, s, extra) {
		let thiz = this;
		extra = extra || {};
		if (!Object.prototype.hasOwnProperty.call(this.properties, name)) {
			if (this.properties[name] && this.properties[name].setter) {
				return this.properties[name].setValue(this, value, s);
			}
			if (!this.extensable) {
				//TODO: Should we throw here in strict mode?
				return Value.undef.fastGen();
			}
			let v = new PropertyDescriptor(value);
			v.enumerable = 'enumerable' in extra ? extra.enumerable : true;
			this.properties[name] = v;

			return v.setValue(this, value, s);
		}

		return this.properties[name].setValue(this, value, s);
	}

	rawSetProperty(name, value) {
		this.properties[name] = value;
	}

	setImmediate(name, value) {
		if (name in this.properties) {
			if (Object.prototype.hasOwnProperty.call(this.properties, name)) {
				if (this.properties[name].direct) {
					this.properties[name].value = value;
					return;
				}
			}
		} else if (this.extensable) {
			let v = new PropertyDescriptor(value);
			v.del = this.delete.bind(this, name);
			this.properties[name] = v;
			return;
		}
		return GenDash.syncGenHelper(this.set(name, value, this.realm));
	}

	has(name) {
		return name in this.properties;
	}

	delete(name, s) {
		let po = this.properties[name];
		if (!po.configurable) {
			if (s.strict) return CompletionRecord.makeTypeError(s.realm, "Can't delete nonconfigurable object");else return false;
		}
		return delete this.properties[name];
	}

	toNative() {

		//TODO: This is really a mess and should maybe be somewhere else.
		var bk = Value.createNativeBookmark(this, this.realm);
		if (this.jsTypeName === 'function') return bk;

		for (let p in this.properties) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if (Object.prototype.hasOwnProperty.call(bk, name)) continue;
			if (bk[p] !== undefined) continue;

			Object.defineProperty(bk, p, {
				get: () => {
					var c = this.properties[name].value;
					return c === undefined ? undefined : c.toNative();
				},
				set: v => {
					this.properties[name].value = Value.fromNative(v, this.realm);
				},
				enumerable: po.enumerable,
				configurable: po.configurable
			});
		}
		return bk;
	}

	toJS() {
		let out = {};
		for (let p in this.properties) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if (!po.enumerable) continue;
			out[name] = po.value.toJS();
		}
		return out;
	}

	*add(other) {
		return yield* (yield* this.toPrimitiveValue()).add(other);
	}
	*doubleEquals(other) {
		if (other === this) return Value.true;
		if (other instanceof PrimitiveValue) {
			let hint = other.jsTypeName == 'string' ? 'string' : 'number';
			let pv = yield* this.toPrimitiveValue(hint);
			return yield* pv.doubleEquals(other);
		}
		let pthis = yield* this.toPrimitiveValue('string');
		return yield* pthis.doubleEquals(other);
	}
	*inOperator(str) {
		let svalue = yield* str.toStringValue();
		return this.has(svalue.toNative()) ? Value.true : Value.false;
	}

	*get(name, realm, ctxthis) {
		var existing = this.properties[name];
		if (!existing) {
			// Fast proto lookup can fail if aLinkValue or Proxy
			// is in the prototype chain.
			// TODO: Cache if this is needed for speed.
			if (this.proto) return yield* this.proto.get(name, realm, ctxthis);else return Value.undef;
		}
		if (existing.direct) return existing.value;
		return yield* existing.getValue(ctxthis || this);
	}

	getImmediate(name, realm, ctxthis) {
		var existing = this.properties[name];
		if (!existing) return Value.undef;
		if (existing.direct) return existing.value;
		return GenDash.syncGenHelper(existing.getValue(ctxthis || this));
	}

	*instanceOf(other, realm) {
		return yield* other.constructorOf(this, realm);
	}

	*constructorOf(what, realm) {
		let target = yield* this.get('prototype');
		let pt = what.getPrototype(realm);
		let checked = [];

		while (pt) {
			if (pt === target) return Value.true;
			checked.push(pt);
			pt = pt.getPrototype(realm);
			if (checked.indexOf(pt) !== -1) return Value.false;
		}
		return Value.false;
	}

	*observableProperties(realm) {
		for (let p in this.properties) {
			if (!this.properties[p].enumerable) continue;
			yield this.fromNative(p);
		}
		return;
	}

	getPropertyValueMap() {
		let list = {};
		for (let p in this.properties) {
			let v = this.properties[p];
			if (v.value) {
				list[p] = v.value;
			}
		}
		return list;
	}

	hasOwnProperty(name) {
		return Object.prototype.hasOwnProperty.call(this.properties, name);
	}

	setPrototype(val) {
		if (!this.properties) return this.eraseAndSetPrototype(val);
		if (val === null || val === undefined || val instanceof NullValue) {
			Object.setPrototypeOf(this.properties, null);
			this.proto = null;
			return;
		}
		this.proto = val;
		if (val.properties) Object.setPrototypeOf(this.properties, val.properties);
	}

	eraseAndSetPrototype(val) {
		if (val === null || val === undefined || val instanceof NullValue) {
			this.proto = null;
			this.properties = Object.create(null);
		} else {
			this.proto = val;
			this.properties = Object.create(val.properties);
		}
	}

	getPrototype() {
		return this.proto;
	}

	get debugString() {
		let strProps = ['{', '[', this.clazz, ']'];
		let delim = [];
		if (this.wellKnownName) {
			strProps.push('(', this.wellKnownName, ')');
		}
		if (this.proto) {
			delim.push('[[Prototype]]: ' + (this.proto.wellKnownName || this.proto.clazz || this.proto.jsTypeName));
		}
		for (let n in this.properties) {
			if (!Object.prototype.hasOwnProperty.call(this.properties, n)) continue;
			let val = this.properties[n].value;
			if (this.properties[n].getter || this.properties[n].setter) delim.push(n + ': [Getter/Setter]');else if (val.specTypeName === 'object') delim.push(n + ': [Object]');else if (val.specTypeName === 'function') delim.push(n + ': [Function]');else delim.push(n + ': ' + val.debugString);
		}
		strProps.push(delim.join(', '));
		strProps.push('] }');
		return strProps.join(' ');
	}

	*toPrimitiveValue(preferedType) {
		let methodNames;
		if (preferedType == 'string') {
			methodNames = ['toString', 'valueOf'];
		} else {
			methodNames = ['valueOf', 'toString'];
		}

		for (let name of methodNames) {
			let method = yield* this.get(name);
			if (method && method.call) {
				let rescr = yield yield* method.call(this, [], this.realm.globalScope); //TODO: There should be more aruments here
				let res = Value.undef;
				if (!(rescr instanceof CompletionRecord)) res = rescr;else if (rescr.type == CompletionRecord.RETURN) res = rescr.value;else if (rescr.type != CompletionRecord.NORMAL) continue;
				if (res.specTypeName !== 'object') return res;
			}
		}
		return yield CompletionRecord.makeTypeError(this.realm, 'Cannot convert object to primitive value');
	}

	*toNumberValue() {
		let prim = yield* this.toPrimitiveValue('number');
		return yield* prim.toNumberValue();
	}

	*toObjectValue(realm) {
		return this;
	}

	*toStringValue() {
		let prim = yield* this.toPrimitiveValue('string');
		let gen = prim.toStringValue();
		return yield* gen;
	}

	get truthy() {
		return true;
	}

	get jsTypeName() {
		if (typeof this.call !== 'function') return 'object';
		return 'function';
	}

	get specTypeName() {
		return 'object';
	}
}

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);

let serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

class PropertyDescriptor {
	constructor(value, enumerable) {
		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = enumerable !== undefined ? !!enumerable : true;
		this.writable = true;
		this.getter = undefined;
		this.setter = undefined;
		this.variable = false;
	}

	get direct() {
		return !this.getter && !this.setter && this.writable;
	}

	*getValue(thiz) {
		thiz = thiz || Value.null;
		if (this.getter) {
			return yield* this.getter.call(thiz, []);
		}
		return this.value;
	}

	*setValue(thiz, to, s) {
		thiz = thiz || Value.null;
		if (this.setter) {
			return yield* this.setter.call(thiz, [to], s);
		}
		if (!this.writable) {
			if (!s || !s.strict) {
				return this.value;
			}
			return yield CompletionRecord.makeTypeError(s.realm, "Can't write to non-writable value.");
		}
		this.value = to;
		return this.value;
	}
}

module.exports = PropertyDescriptor;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
let StringValue;

/**
 * Represents a primitive value.
 */
class PrimitiveValue extends Value {

	constructor(value) {
		super(null);
		this.native = value;
		//Object.defineProperty(this, 'native', {
		//	'value': value,
		//	'enumerable': true
		//});
	}

	ref(name, realm) {
		var that = this;
		let out = Object.create(null);
		out.getValue = function* () {
			return yield* that.get(name, realm);
		};
		out.setValue = function* (to) {
			yield* that.set(name, to, realm);
		};
		return out;
	}

	*get(name, realm) {
		return yield* this.derivePrototype(realm).get(name, realm, this);
	}

	*set(name, to, realm) {
		//Can't set primative properties.
	}

	derivePrototype(realm) {
		switch (typeof this.native) {
			case 'string':
				return realm.StringPrototype;
			case 'number':
				return realm.NumberPrototype;
			case 'boolean':
				return realm.BooleanPrototype;
		}
	}

	toNative() {
		return this.native;
	}

	get debugString() {
		if (typeof this.native === 'object') return '[native object]';else if (typeof this.native === 'function') return '[native function]';else if (typeof this.native === 'string') return JSON.stringify(this.native);else return '' + this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) {
		let native = this.native;
		if (other instanceof PrimitiveValue) {
			return Value.fromNative(this.native == other.native);
		} else if (typeof native === 'number') {
			if (other instanceof StringValue) {
				let num = yield* other.toNumberValue();
				return Value.from(native === num.toNative());
			} else {
				return Value.false;
			}
		} else if (typeof native == 'boolean') {
			let num = yield* this.toNumberValue();
			return yield* num.doubleEquals(other);
		}

		return Value.false;
	}
	*tripleEquals(other) {
		return this.native === other.toNative() ? Value.true : Value.false;
	}

	*add(other) {
		return this.fromNative(this.native + (yield* other.toPrimitiveNative()));
	}

	*instanceOf(other) {
		return Value.false;
	}

	*unaryPlus() {
		return this.fromNative(+this.native);
	}
	*unaryMinus() {
		return this.fromNative(-this.native);
	}
	*not() {
		return this.fromNative(!this.native);
	}

	*observableProperties(realm) {
		yield* this.derivePrototype(realm).observableProperties(realm);
	}

	*makeThisForNew() {
		throw new Error('primative value is not a constructor');
	}

	getPrototype(realm) {
		return this.derivePrototype(realm);
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) {
		return this;
	}
	*toStringValue() {
		if (typeof this.native === 'string') return this;
		return this.fromNative(String(this.native));
	}

	*toNumberValue() {
		if (typeof this.native === 'number') return this;
		return this.fromNative(Number(this.native));
	}

}
module.exports = PrimitiveValue;

StringValue = __webpack_require__(42);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const Value = __webpack_require__(33);
let NumberValue;

class StringValue extends PrimitiveValue {
	*get(name, realm) {
		let idx = Number(name);
		if (!isNaN(idx)) {
			return StringValue.fromNative(this.native[idx]);
		}
		if (name === 'length') return StringValue.fromNative(this.native.length);
		return yield* super.get(name, realm);
	}

	*doubleEquals(other) {

		if (other instanceof StringValue) {
			return Value.fromNative(this.native == other.native);
		} else if (other instanceof NumberValue) {
			let rv = yield* this.toNumberValue();
			return yield* rv.doubleEquals(other);
		}

		return yield* super.doubleEquals(other);
	}

	*gt(other) {
		return this.fromNative(this.native > (yield* other.toStringNative()));
	}
	*lt(other) {
		return this.fromNative(this.native < (yield* other.toStringNative()));
	}
	*gte(other) {
		return this.fromNative(this.native >= (yield* other.toStringNative()));
	}
	*lte(other) {
		return this.fromNative(this.native <= (yield* other.toStringNative()));
	}
	*add(other) {
		return this.fromNative(this.native + (yield* other.toPrimitiveNative('string')));
	}

}

module.exports = StringValue;

NumberValue = __webpack_require__(43);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const Value = __webpack_require__(33);
let StringValue;

class NumberValue extends PrimitiveValue {

	*doubleEquals(other) {
		let on;
		if (other instanceof NumberValue) {
			return Value.fromNative(this.native == other.native);
		} else if (other instanceof StringValue) {
			on = yield* other.toNumberValue();
		} else if (other.specTypeName == 'object') {
			on = yield* other.toPrimitiveValue();
		}
		if (!on) return yield* super.doubleEquals(other);
		return yield* this.doubleEquals(on);
	}

	*add(other) {
		return this.fromNative(this.native + (yield* other.toPrimitiveNative()));
	}
}

module.exports = NumberValue;

StringValue = __webpack_require__(42);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(45);
const Value = __webpack_require__(33);

class NullValue extends EmptyValue {
	toNative() {
		return null;
	}

	get jsTypeName() {
		return 'object';
	}
	get specTypeName() {
		return 'null';
	}

	*tripleEquals(other, realm) {
		return other instanceof NullValue ? Value.true : Value.false;
	}

	*asString() {
		return 'null';
	}

	*toPrimitiveValue(preferedType) {
		return this;
	}
	*toNumberValue() {
		return Value.zero;
	}
	*toStringValue() {
		return Value.fromNative('null');
	}

	get debugString() {
		return 'null';
	}
}

module.exports = NullValue;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const BridgeValue = __webpack_require__(46);
const CompletionRecord = __webpack_require__(34);

class EmptyValue extends Value {
	constructor() {
		super(null);
	}

	get truthy() {
		return false;
	}

	*not() {
		return Value.fromNative(true);
	}

	*doubleEquals(other) {
		if (other instanceof EmptyValue) return Value.true;else if (other instanceof BridgeValue) return this.fromNative(this.toNative() == other.toNative());else return Value.false;
	}

	*observableProperties(realm) {
		return;
	}

	*instanceOf() {
		return Value.false;
	}

	/**
  * @param {String} name
  * @param {Realm} realm
  * @returns {CompletionRecord} Indexing empty values is a type error.
  */
	*get(name, realm) {
		let str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
		let err = CompletionRecord.makeTypeError(realm, str);
		yield* err.addExtra({ code: 'IndexEmpty', target: this, prop: name });
		return err;
	}

}

module.exports = EmptyValue;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
/**
 * Represents a value that maps directly to an untrusted local value.
 */
class BridgeValue extends Value {

	constructor(value) {
		super();
		this.native = value;
	}

	makeBridge(value) {
		return BridgeValue.make(value);
	}

	static make(native) {
		if (native === undefined) return Value.undef;
		let prim = Value.fromPrimativeNative(native);
		if (prim) return prim;

		if (Value.hasBookmark(native)) {
			return Value.getBookmark(native);
		}

		return new BridgeValue(native);
	}

	ref(name, s) {
		let that = this;
		let out = Object.create(null);
		let doset = value => that.native[name] = value.toNative();
		out.getValue = function* () {
			return Value.fromNative(that.native[name]);
		};
		out.setValue = function* (to) {
			doset(to);
		};

		return out;
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) {
		return this.makeBridge(this.native == other.toNative());
	}
	*tripleEquals(other) {
		return this.makeBridge(this.native === other.toNative());
	}

	*add(other) {
		return this.makeBridge(this.native + other.toNative());
	}
	*subtract(other) {
		return this.makeBridge(this.native - other.toNative());
	}
	*multiply(other) {
		return this.makeBridge(this.native * other.toNative());
	}
	*divide(other) {
		return this.makeBridge(this.native / other.toNative());
	}
	*mod(other) {
		return this.makeBridge(this.native % other.toNative());
	}

	*shiftLeft(other) {
		return this.makeBridge(this.native << other.toNative());
	}
	*shiftRight(other) {
		return this.makeBridge(this.native >> other.toNative());
	}
	*shiftRightZF(other) {
		return this.makeBridge(this.native >>> other.toNative());
	}

	*bitAnd(other) {
		return this.makeBridge(this.native & other.toNative());
	}
	*bitOr(other) {
		return this.makeBridge(this.native | other.toNative());
	}
	*bitXor(other) {
		return this.makeBridge(this.native ^ other.toNative());
	}

	*gt(other) {
		return this.makeBridge(this.native > other.toNative());
	}
	*lt(other) {
		return this.makeBridge(this.native < other.toNative());
	}
	*gte(other) {
		return this.makeBridge(this.native >= other.toNative());
	}
	*lte(other) {
		return this.makeBridge(this.native <= other.toNative());
	}

	*inOperator(other) {
		return this.makeBridge(other.toNative() in this.native);
	}
	*instanceOf(other) {
		return this.makeBridge(this.native instanceof other.toNative());
	}

	*unaryPlus() {
		return this.makeBridge(+this.native);
	}
	*unaryMinus() {
		return this.makeBridge(-this.native);
	}
	*not() {
		return this.makeBridge(!this.native);
	}

	*get(name) {
		return this.makeBridge(this.native[name]);
	}

	*set(name, value) {
		this.native[name] = value.toNative();
	}

	*observableProperties(realm) {
		for (let p in this.native) {
			yield this.makeBridge(p);
		}
		return;
	}

	/**
  *
  * @param {Value} thiz
  * @param {Value[]} args
  */
	*call(thiz, args) {
		let realArgs = new Array(args.length);
		for (let i = 0; i < args.length; ++i) {
			realArgs[i] = args[i].toNative();
		}
		try {
			let result = this.native.apply(thiz ? thiz.toNative() : undefined, realArgs);
			return this.makeBridge(result);
		} catch (e) {
			let result = this.makeBridge(e);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}
	}

	*makeThisForNew() {
		return this.makeBridge(Object.create(this.native.prototype));
	}

	*toStringValue() {
		return this.fromNative(this.native.toString());
	}

	get debugString() {
		return '[Bridge: ' + this.native + ']';
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}
}

module.exports = BridgeValue;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(45);
const Value = __webpack_require__(33);

class UndefinedValue extends EmptyValue {
	toNative() {
		return undefined;
	}
	get jsTypeName() {
		return 'undefined';
	}
	*tripleEquals(other, realm) {
		return other instanceof UndefinedValue ? Value.true : Value.false;
	}

	*add(other) {
		return this.fromNative(undefined + other.toNative());
	}

	*asString() {
		return 'undefined';
	}

	*toPrimitiveValue(preferedType) {
		return this;
	}
	*toNumberValue() {
		return Value.nan;
	}
	*toStringValue() {
		return Value.fromNative('undefined');
	}

	get debugString() {
		return 'undefined';
	}
}

module.exports = UndefinedValue;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const PropertyDescriptor = __webpack_require__(40);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const EvaluatorInstruction = __webpack_require__(50);

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ClosureValue extends ObjectValue {

	/**
  * @param {object} func - AST Node for function
  * @param {Scope} scope - Functions up-values.
  */
	constructor(func, scope) {
		let realm = scope.realm;
		super(realm, realm.FunctionPrototype);
		this.realm = scope.realm;
		this.func = func;
		this.funcSourceAST = func;
		this.scope = scope;
		this.returnLastValue = false;
		this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(realm), false);
		this.properties['name'] = new PropertyDescriptor(this.fromNative(func.id ? func.id.name : undefined), false);
		this.properties['length'] = new PropertyDescriptor(this.fromNative(func.params.length), false);
	}

	toNative() {
		return Value.createNativeBookmark(this, this.realm);
	}

	get debugString() {
		if (this.func && this.func.id) return `[Function ${this.func.id.name}]`;
		return '[Function]';
	}

	get truthy() {
		return true;
	}

	*doubleEquals(other) {
		return other === this ? Value.true : Value.false;
	}

	/**
  *
  * @param {Value} thiz
  * @param {Value[]} args
  * @param {Scope} scope
  */
	*call(thiz, args, scope, extra) {
		//TODO: This way of scoping is entirelly wrong.
		if (!scope) scope = this.scope;
		let invokeScope;
		if (this.boundScope) {
			invokeScope = this.boundScope.createChild();
			invokeScope.writeTo = this.boundScope.object;
			invokeScope.thiz = this.thiz || /* thiz ||*/this.boundScope.thiz;
		} else {
			invokeScope = scope.top.createChild();
			invokeScope.thiz = this.thiz || thiz;
		}

		if (this.func.strict === true) invokeScope.strict = true;

		let obj = this.scope.object;
		if (this.func.upvars) {
			for (let n in this.func.upvars) {
				//TODO: There should be a method that does this.
				invokeScope.object.rawSetProperty(n, obj.properties[n]);
			}
		}

		//Do Var Hoisting
		if (this.func.vars) {
			for (let v in this.func.vars) {
				invokeScope.add(v, Value.undef);
				invokeScope.object.properties[v].isVariable = true;
			}
		}

		/*
  if ( this.func.funcs ) {
  	for ( let fn in this.func.funcs ) {
  		let n = this.func.funcs[fn];
  		let closure = new ClosureValue(n, scope);
  		invokeScope.add(n.id.name, closure);
  	}
  }
  */

		// Just a total guess that this is correct behavior...
		if (!invokeScope.strict && this.func.funcs) {
			for (let fn in this.func.funcs) {
				let n = this.func.funcs[fn];
				invokeScope.add(n.id.name, Value.undef);
			}
		}

		let argn = Math.max(args.length, this.func.params.length);
		let argvars = new Array(argn);
		let argsObj = new ObjectValue(scope.realm);
		argsObj.clazz = 'Arguments';

		for (let i = 0; i < argn; ++i) {
			let vv = Value.undef;
			if (i < args.length) vv = args[i];

			let v = new PropertyDescriptor(vv);
			argvars[i] = v;

			if (invokeScope.strict) {
				yield* argsObj.set(i, vv);
			} else {
				argsObj.rawSetProperty(i, v);
			}
		}

		if (!invokeScope.strict) {
			let calleeProp = new PropertyDescriptor(this.fromNative(args.length));
			calleeProp.enumerable = false;
			argsObj.rawSetProperty('callee', calleeProp);
			yield* argsObj.set('callee', this);
		}

		let lengthProp = new PropertyDescriptor(this.fromNative(args.length));
		lengthProp.enumerable = false;
		argsObj.rawSetProperty('length', lengthProp);

		invokeScope.add('arguments', argsObj);

		for (let i = 0; i < this.func.params.length; ++i) {
			if (this.func.params[i].type == 'RestElement') {
				let name = this.func.params[i].argument.name;
				let rest = args.slice(i);
				invokeScope.add(name, ArrayValue.make(rest, scope.realm));
			} else {
				let p = this.func.params[i];
				if (p.type == "Identifier") p = { id: p };
				let name = p.id.name;

				if (scope.strict) {
					//Scope is strict, so we make a copy for the args variable
					invokeScope.add(name, i < args.length ? args[i] : Value.undef);
				} else {
					//Scope isnt strict, magic happens.
					invokeScope.object.rawSetProperty(name, argvars[i]);
				}
			}
		}
		let opts = { returnLastValue: this.returnLastValue, creator: this };
		if (extra && extra.evaluator && extra.evaluator.debug) {
			opts['profileName'] = extra.callNode.callee.srcName;
		}
		if (extra && extra.callee) {
			opts.callee = extra.callee;
		}
		if (this.func.nonUserCode) {
			opts.yieldPower = -1;
		}

		var result = yield EvaluatorInstruction.branch('function', this.func.body, invokeScope, opts);
		return result;
	}

	get jsTypeName() {
		return 'function';
	}
	get specTypeName() {
		return 'object';
	}

}
ClosureValue.prototype.clazz = 'Function';

module.exports = ClosureValue;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const ObjectValue = __webpack_require__(39);
const Value = __webpack_require__(33);
const GenDash = __webpack_require__(35);
let NumberValue;

class ArrayValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.ArrayPrototype);
	}

	*get(name, realm) {
		return yield* super.get(name, realm);
	}

	adjustLength(name, value) {
		if (name == 'length' && this.properties.length) {
			//TODO: 15.4.5.2 specifies more complex behavior here.
			let target = GenDash.syncGenHelper(value.toIntNative());
			let length = this.getLengthSync();
			if (target < length) {
				for (let i = length - 1; i >= target; --i) {
					delete this.properties[i];
				}
			}
		}

		if (!isNaN(parseInt(name))) {
			let length = this.getLengthSync();
			if (name >= length) {
				this.properties.length.value = Value.fromNative(name + 1);
			}
		}
	}

	getLengthSync() {
		return this.properties.length.value.native;
	}

	set(name, v) {
		this.adjustLength(name, v);
		return super.set(name, v);
	}

	setImmediate(name, v) {
		this.adjustLength(name, v);
		return super.setImmediate(name, v);
	}

	toNative() {
		let out = new Array(this.getLengthSync());
		for (let i of Object.keys(this.properties)) {
			if (i === 'length') continue;
			let po = this.properties[i];
			if (po && po.value) {
				if (!po.direct) {
					Object.defineProperty(out, i, {
						enumerable: po.enumerable,
						writable: po.writable,
						configurable: po.configurable,
						value: po.value.toNative()
					});
				} else {
					out[i] = po.value.toNative();
				}
			}
		}
		return out;
	}

	toJS() {
		let out = new Array(this.getLengthSync());
		for (let i of Object.keys(this.properties)) {
			if (i === 'length') continue;
			let po = this.properties[i];
			out[i] = po.value.toJS();
		}
		return out;
	}

	static make(vals, realm) {

		let av = new ArrayValue(realm);

		av.setImmediate('length', Value.fromNative(0));
		av.properties.length.enumerable = false;

		for (let i = 0; i < vals.length; ++i) {
			let v = vals[i];
			if (!(v instanceof Value)) v = realm.fromNative(v);
			av.setImmediate(i, v);
		}
		return av;
	}

	get debugString() {
		if (!this.properties.length) return super.debugString;
		let length = this.properties.length.value.native;

		let loop = Math.min(length, 20);
		let r = new Array(loop);
		for (let i = 0; i < loop; ++i) {
			let po = this.properties[i];
			if (po && po.value) r[i] = po.value.debugString;else r[i] = '';
		}
		return '[' + r.join(', ') + (loop < length ? '...' : '') + ']';
	}
}

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = __webpack_require__(43);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class EvaluatorInstruction {
	static branch(kind, ast, scope, extra) {
		let ei = new EvaluatorInstruction('branch');
		ei.kind = kind;
		ei.ast = ast;
		ei.scope = scope;
		ei.extra = extra;
		return ei;
	}

	constructor(type) {
		this.type = type;
	}

	mark(o) {
		for (let k in o) this[k] = o[k];
		return this;
	}
}

EvaluatorInstruction.stepMinor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepMajor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepStatement = new EvaluatorInstruction('step');
EvaluatorInstruction.waitForFramePop = new EvaluatorInstruction('waitForFramePop');
EvaluatorInstruction.framePushed = new EvaluatorInstruction('framePushed');
EvaluatorInstruction.getEvaluator = new EvaluatorInstruction('getEvaluator');
EvaluatorInstruction.eventLoopBodyStart = new EvaluatorInstruction('event').mark({ event: 'loopBodyStart' });
module.exports = EvaluatorInstruction;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(45);
const Value = __webpack_require__(33);

function defer() {
	var resolve, reject;
	var promise = new Promise(function (a, b) {
		resolve = a;
		reject = b;
	});
	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

class FutureValue extends Value {

	constructor(realm) {
		super(realm);
		this.resolved = false;
		this.successful = undefined;
		this.value = undefined;
		this.defered = defer();
	}

	/**
  * Creates a new future value wraping the promise p.
  * @param {Promise} promise
  */
	static make(promise) {
		var fv = new FutureValue(null);
		promise.then(function (resolved) {
			fv.resolve(Value.fromNative(resolved));
		}, function (caught) {
			fv.reject(Value.fromNative(caught));
		});
		return fv;
	}

	resolve(value) {
		this.value = value;
		this.resolved = true;
		this.successful = true;
		this.defered.resolve(value);
	}

	reject(value) {
		this.value = value;
		this.resolved = true;
		this.successful = false;
		this.defered.resolve(value);
	}

	then() {
		var p = this.defered.promise;
		return p.then.apply(p, arguments);
	}

	get jsTypeName() {
		return 'internal:future';
	}
	get debugString() {
		return '[Future]';
	}
}

module.exports = FutureValue;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const ObjectValue = __webpack_require__(39);
const Value = __webpack_require__(33);

class RegExpValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.RegExpPrototype);
	}

	static make(regexp, realm) {

		let av = new RegExpValue(realm);
		av.regexp = regexp;
		av.setImmediate('source', Value.fromNative(regexp.source));
		av.properties['source'].enumerable = false;
		av.setImmediate('global', Value.fromNative(regexp.global));
		av.properties['global'].enumerable = false;
		av.setImmediate('ignoreCase', Value.fromNative(regexp.ignoreCase));
		av.properties['ignoreCase'].enumerable = false;
		av.setImmediate('multiline', Value.fromNative(regexp.multiline));
		av.properties['multiline'].enumerable = false;
		return av;
	}

	toNative() {
		return this.regexp;
	}

	get debugString() {
		return this.regexp.toString();
	}
}

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const ObjectValue = __webpack_require__(39);
const Value = __webpack_require__(33);
const EvaluatorInstruction = __webpack_require__(50);

class ErrorInstance extends ObjectValue {
	createNativeAnalog() {
		if (!this.native) {
			let stack;
			let NativeClass = this.proto.nativeClass || Error;
			this.native = new NativeClass();
			if (!this.native.stack) {
				try {
					throw native;
				} catch (e) {
					stack = e.stack;
				}
			} else {
				stack = this.native.stack;
			}

			let frames = stack ? stack.split(/\n/) : [];
			if (stack.length > 1) {
				let header = frames.shift();
				while (/at (ErrorInstance.createNativeAnalog|ErrorObject.make|Function.makeTypeError)/.test(frames[0])) {
					frames.shift();
				}
				this.native.stack = header + '\n' + frames.join('\n');
			}
			for (var k in this.extra) this.native[k] = this.extra[k];
		}
		return this.native;
	}
	toNative() {
		let out = this.createNativeAnalog();
		let msg = this.properties['message'].value;
		if (msg) out.message = msg.toNative();

		if (this.properties['stack']) {
			msg.stack = this.properties['stack'].value.native;
		}

		return out;
	}

	*addExtra(extra) {
		if (!this.realm.options.extraErrorInfo) return;
		let evaluator = yield EvaluatorInstruction.getEvaluator;
		if (evaluator) {
			let scope = evaluator.topFrame.scope;
			let ast = extra.ast = evaluator.topFrame.ast;
			extra.scope = scope;
			//TODO: Sometiems scope is undefined, figure out why.
			if (extra.ast.loc) {
				extra.line = extra.ast.loc.start.line;
			}

			switch (extra.code) {
				case 'UndefinedVariable':
				case 'SmartAccessDenied':
					if (scope) extra.candidates = scope.getVariableNames();
					break;
				case 'CallNonFunction':
					let list;
					if (extra.base && extra.base.getPropertyValueMap) {
						list = extra.base.getPropertyValueMap();
					} else {
						list = scope.object.getPropertyValueMap();
					}

					extra.candidates = [];
					for (let k in list) {
						let v = list[k];
						if (v && v.isCallable) {
							extra.candidates.push(k);
						}
					}
					break;
				case 'IndexEmpty':
					break;
			}
		}
		if (this.native) {
			for (var k in extra) {
				if (['ast', 'scope', 'candidates', 'targetAst'].indexOf(k) !== -1) {
					Object.defineProperty(this.native, k, {
						value: extra[k],
						enumerable: false
					});
				} else {
					this.native[k] = extra[k];
				}
			}
		}
		this.extra = extra;
	}
}

module.exports = ErrorInstance;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
const ClosureValue = __webpack_require__(48);
const ObjectValue = __webpack_require__(39);
const FutureValue = __webpack_require__(51);
const RegExpValue = __webpack_require__(52);
const PropertyDescriptor = __webpack_require__(40);
const ErrorValue = __webpack_require__(53);
const ArrayValue = __webpack_require__(49);
const EvaluatorInstruction = __webpack_require__(50);

function* evaluateArrayExpression(e, n, s) {
	//let result = new ObjectValue();
	let result = new Array(n.elements.length);
	for (let i = 0; i < n.elements.length; ++i) {
		if (n.elements[i]) {
			result[i] = yield* e.branch(n.elements[i], s);
		}
	}
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	return ArrayValue.make(result, e.realm);
}

function* evaluateAssignmentExpression(e, n, s) {
	//TODO: Account for not-strict mode
	var realm = s.realm;
	let ref = yield* e.resolveRef(n.left, s, n.operator === '=');

	if (!ref && s.strict) {
		return CompletionRecord.makeReferenceError(s.realm, `Invalid refrence in assignment.`);
	}

	let argument = yield* e.branch(n.right, s);
	let value;
	let cur;
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	switch (n.operator) {
		case '=':
			value = argument;
			break;
		case '+=':
			cur = yield* ref.getValue();
			value = yield* cur.add(argument, realm);
			break;
		case '-=':
			cur = yield* ref.getValue();
			value = yield* cur.subtract(argument, realm);
			break;
		case '*=':
			cur = yield* ref.getValue();
			value = yield* cur.multiply(argument, realm);
			break;
		case '/=':
			cur = yield* ref.getValue();
			value = yield* cur.divide(argument, realm);
			break;
		case '%=':
			cur = yield* ref.getValue();
			value = yield* cur.mod(argument, realm);
			break;
		case '<<=':
			cur = yield* ref.getValue();
			value = yield* cur.shiftLeft(argument, realm);
			break;
		case '>>=':
			cur = yield* ref.getValue();
			value = yield* cur.shiftRight(argument, realm);
			break;
		case '>>>=':
			cur = yield* ref.getValue();
			value = yield* cur.shiftRightZF(argument, realm);
			break;
		case '|=':
			cur = yield* ref.getValue();
			value = yield* cur.bitOr(argument, realm);
			break;
		case '&=':
			cur = yield* ref.getValue();
			value = yield* cur.bitAnd(argument, realm);
			break;
		case '^=':
			cur = yield* ref.getValue();
			value = yield* cur.bitXor(argument, realm);
			break;
		case '**=':
			cur = yield* ref.getValue();
			value = yield* cur.pow(argument, realm);
			break;
		default:
			throw new Error('Unknown assignment operator: ' + n.operator);
	}

	if (ref) {
		yield* ref.setValue(value, s);
	} else {
		yield* s.put(n.left.name, value, s);
	}

	return value;
}

function* evaluateBinaryExpression(e, n, s) {
	if (n.operator == '&&' || n.operator == '||') {
		return yield* evaluateLogicalExpression(e, n, s);
	}
	let left = yield* e.branch(n.left, s);
	let right = yield* e.branch(n.right, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	return yield* e.doBinaryEvaluation(n.operator, left, right, s);
}

function* evaluateBlockStatement(e, n, s) {
	let result = Value.undef;
	let ss = s.createBlockChild();
	for (let statement of n.body) {
		if (statement.type != "FunctionDeclaration") continue;
		result = yield* e.branch(statement, ss);
	}

	for (let statement of n.body) {
		if (statement.type == "FunctionDeclaration") continue;
		result = yield* e.branch(statement, ss);
	}
	return result;
}

function* evaluateBreakStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMinor;
	return new CompletionRecord(CompletionRecord.BREAK, Value.undef, label);
}

function* evaluateCallExpression(e, n, s) {
	return yield* doCall(e, n, n.callee, s, function* () {
		let args = new Array(n.arguments.length);
		for (let i = 0; i < n.arguments.length; ++i) {
			args[i] = yield* e.branch(n.arguments[i], s);
		}
		return args;
	});
}

function* doCall(e, n, c, s, argProvider) {
	let thiz = s.strict ? Value.undef : s.global.thiz;

	let callee, base;

	if (c.type == 'Super') {
		callee = yield* e.branch(c, s);
		thiz = s.thiz;
	} else if (c.type === 'MemberExpression') {
		thiz = base = yield* e.branch(c.object, s);
		callee = yield* e.partialMemberExpression(thiz, c, s);
		if (c.object.type == "Super") thiz = s.thiz;
		if (callee instanceof CompletionRecord) {
			if (callee.type == CompletionRecord.THROW) return callee;
			callee = callee.value;
		}
	} else {
		callee = yield* e.branch(c, s);
	}

	if (n.type === 'NewExpression') {
		thiz = yield* callee.makeThisForNew(s.realm);
		if (thiz instanceof CompletionRecord) {
			if (thiz.type == CompletionRecord.THROW) return thiz;
			thiz = thiz.value;
		}
	}

	if (typeof callee.rawCall === 'function') {
		return yield* callee.rawCall(n, e, s);
	}

	//console.log("Calling", callee, callee.call);

	let args = yield* argProvider();

	let name = c.srcName || c.source() || callee.jsTypeName;

	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMajor;

	if (!callee.isCallable) {
		let err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
		yield* err.addExtra({
			code: 'CallNonFunction',
			target: callee,
			targetAst: c,
			targetName: name,
			base: base
		});
		return err;
	}

	if (e.debug) {
		e.incrCtr('fxInvocationCount', c.srcName);
	}

	let callResult = callee.call(thiz, args, s, {
		asConstructor: n.type === 'NewExpression',
		callNode: n,
		evaluator: e,
		callee: callee
	});

	if (callResult instanceof CompletionRecord) return callResult;

	if (typeof callResult.next !== 'function') {
		console.log('Generator Failure', callResult);
		return CompletionRecord.makeTypeError(e.realm, '' + name + ' didnt make a generator');
	}

	let result = yield* callResult;
	if (n.type === 'NewExpression') {
		//TODO: If a constructor returns, you actually use that value
		if (result instanceof Value) {
			if (result.specTypeName === 'undefined') return thiz;
			return result;
		}
		return thiz;
	} else {
		return result;
	}
}

let classFeatures = {};
function* addMethodFnToClass(fx, clazz, proto, e, m, s) {
	if (m.kind == 'constructor') {
		//Special handling for this below.
	} else {
		let ks;
		fx.funcSourceAST = m;
		if (m.computed) {
			let k = yield* e.branch(m.key, s);
			ks = yield* k.toStringNative(e.realm);
		} else {
			ks = m.key.name;
		}

		let pd;

		if (m.static) {
			fx.superTarget = clazz.getPrototype();
			if (Object.prototype.hasOwnProperty.call(clazz.properties, ks)) {
				pd = clazz.properties[ks];
			} else {
				pd = new PropertyDescriptor(Value.undef);
				clazz.rawSetProperty(ks, pd);
			}
		} else {
			fx.superTarget = proto.getPrototype();
			if (Object.prototype.hasOwnProperty.call(proto.properties, ks)) {
				pd = proto.properties[ks];
			} else {
				pd = new PropertyDescriptor(Value.undef);
				proto.rawSetProperty(ks, pd);
			}
		}
		switch (m.kind) {
			case 'set':
				pd.setter = fx;
				break;
			case 'get':
				pd.getter = fx;
				break;
			case 'method':
				pd.value = fx;
				break;
		}
	}
	return Value.undef;
}
classFeatures.MethodDefinition = function* (clazz, proto, e, m, s) {
	yield* addMethodFnToClass((yield* e.branch(m.value, s)), clazz, proto, e, m, s);
};
classFeatures.ClassMethod = function* (clazz, proto, e, m, s) {
	let fx = yield* evaluateFunctionExpression(e, m, s);
	return yield* addMethodFnToClass(fx, clazz, proto, e, {
		kind: m.kind,
		static: m.static,
		key: m.key
	}, s);
};
classFeatures.EmptyStatement = function* () {
	return Value.undef;
};

function* evaluateClassExpression(e, n, s) {
	let clazz = undefined;
	for (let m of n.body.body) {
		if (m.type == "MethodDefinition" && m.kind == "constructor") {
			clazz = yield* e.branch(m.value, s);
			clazz.superTarget = clazz;
			clazz.funcSourceAST = n;
			break;
		}
	}

	let sc;
	if (n.superClass) {
		sc = yield* e.branch(n.superClass, s);
	}

	if (!clazz) {
		clazz = new ObjectValue(e.realm);
		if (sc) {
			clazz.call = function* (thiz, args, scope, extra) {
				yield* sc.call(thiz, args, scope, extra);
				return Value.undef;
			};
		} else {
			clazz.call = function* () {
				return Value.undef;
			};
		}
	}

	let proto = new ObjectValue(e.realm);
	yield* clazz.set('prototype', proto);
	yield* clazz.set('name', Value.fromNative(n.id.name));
	yield* proto.set('constructor', clazz);

	if (sc) {
		clazz.setPrototype(sc);
		proto.setPrototype(sc.getPrototypeProperty());
		clazz.parentClassInstance = sc;
	}
	clazz.superTarget = clazz.getPrototype();

	s.add(n.id.name, clazz);

	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	for (let m of n.body.body) {
		if (!module.exports.classFeatures[m.type]) throw new Error("Unsuported Class Feature " + m.type);
		yield* module.exports.classFeatures[m.type](clazz, proto, e, m, s);
		//TODO: Support getters and setters
	}
	return clazz;
}

function* evaluateClassDeclaration(e, n, s) {
	let clazz = yield* evaluateClassExpression(e, n, s);
	yield* s.put(n.id.name, clazz);
	return clazz;
}

function* evaluateConditionalExpression(e, n, s) {
	let test = yield* e.branch(n.test, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	if (test.truthy) {
		return yield* e.branch(n.consequent, s);
	} else {
		if (n.alternate) {
			return yield* e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}

function* evaluateContinueStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	let val = new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);
	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMinor;
	return val;
}

function* evaluateDoWhileStatement(e, n, s) {
	let last = Value.undef;
	let that = e;
	var gen = function* () {
		do {
			last = yield that.branchFrame('continue', n.body, s, { label: n.label });
		} while ((yield* that.branch(n.test, s)).truthy);
	};
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMinor;
	e.pushFrame({ generator: gen(), type: 'loop', label: n.label, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateEmptyStatement(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	return Value.undef;
}

function* evaluateExpressionStatement(e, n, s) {
	if (e.yieldPower > 4) yield EvaluatorInstruction.stepMinor;
	return yield* e.branch(n.expression, s);
}

function* evaluateIdentifier(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	if (n.name === 'undefined') return Value.undef;
	if (!s.has(n.name)) {
		// Allow undeclared varibles to be null?
		if (false) {}
		let err = CompletionRecord.makeReferenceError(e.realm, `${n.name} is not defined`);
		yield* err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict });
		return yield err;
	}
	return s.get(n.name);
}

function* evaluateIfStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepStatement;
	let test = yield* e.branch(n.test, s);
	if (test.truthy) {
		return yield* e.branch(n.consequent, s);
	} else {
		if (n.alternate) {
			return yield* e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}

function* evaluateImportDeclaration(e, n, s) {
	return Value.undef;
}

function* genForLoop(e, n, s) {
	let test = Value.true;

	let createPerIterationEnvironment = n.init && n.init.kind == 'let' ? p => {
		let is = s.createChild();
		for (let dec of n.init.declarations) {
			is.addBlock(dec.id.name, p.get(dec.id.name));
		}
		return is;
	} : p => p;

	let is = createPerIterationEnvironment(s);
	if (n.test) test = yield* e.branch(n.test, s);
	let last = Value.undef;
	while (test.truthy) {
		e.topFrame.ast = n;
		if (e.yieldPower > 0) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, is, { label: n.label });
		is = createPerIterationEnvironment(is);
		if (n.update) yield* e.branch(n.update, is);
		if (n.test) test = yield* e.branch(n.test, is);
	}
};

function* evaluateForStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	if (n.init) yield* e.branch(n.init, s);

	e.pushFrame({ generator: genForLoop(e, n, s), type: 'loop', label: n.label, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateForInStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield* e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();

	if (n.left.type === 'VariableDeclaration') {
		let decl = n.left.declarations[0];
		if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
		ref = s.ref(decl.id.name, s);
	} else {
		ref = s.ref(n.left.name, s);
	}
	if (!ref) {
		if (s.strict) return CompletionRecord.makeReferenceError(s.realm, `${n.left.name} is not defined`);
		//Create an var in global scope if varialbe doesnt exist and not in strict mode.
		s.global.add(n.left.name, Value.undef);
		ref = s.ref(n.left.name);
	}
	var gen = function* () {
		for (let name of names) {
			yield* ref.setValue(name);
			last = yield that.branchFrame('continue', n.body, s, { label: n.label });
		}
	};
	e.pushFrame({ generator: gen(), type: 'loop', label: n.label, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

//TODO: For of does more crazy Symbol iterator stuff
function* evaluateForOfStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield* e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();
	if (n.left.type === 'VariableDeclaration') {
		let decl = n.left.declarations[0];
		if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
		//yield * s.put(n.left.declarations[0].id.name, Value.undef);
		ref = s.ref(n.left.declarations[0].id.name, s.realm);
	} else {
		ref = s.ref(n.left.name, s.realm);
	}

	var gen = function* () {
		for (let name of names) {
			yield* ref.setValue((yield* object.get((yield* name.toStringNative()))));
			last = yield that.branchFrame('continue', n.body, s, { label: n.label });
		}
	};
	e.pushFrame({ generator: gen(), type: 'loop', label: n.label });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateFunctionDeclaration(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	let closure = new ClosureValue(n, s);
	s.add(n.id.name, closure);
	return Value.undef;
}

function* evaluateFunctionExpression(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	let value = new ClosureValue(n, s);
	if (n.type === 'ArrowFunctionExpression') {
		value.thiz = s.thiz;
		if (n.expression) value.returnLastValue = true;
	}
	return value;
}

function* evaluateLabeledStatement(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	return yield* e.branch(n.body, s);
}

function* evaluateLiteral(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	if (n.regex) {
		return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm);
	} else if (n.value === null) {
		if (e.raw === 'null') return Value.null;

		//Work around Esprima turning Infinity into null. =\
		let tryFloat = parseFloat(n.raw);
		if (!isNaN(tryFloat)) return e.fromNative(tryFloat, n);
		return e.fromNative(null, n);
	} else {
		return e.realm.makeLiteralValue(n.value, n);
	}
}

function* evaluateLogicalExpression(e, n, s) {
	let left = yield* e.branch(n.left, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	switch (n.operator) {
		case '&&':
			if (left.truthy) return yield* e.branch(n.right, s);
			return left;
		case '||':
			if (left.truthy) return left;
			return yield* e.branch(n.right, s);
		default:
			throw new Error('Unknown logical operator: ' + n.operator);
	}
}

function* evaluateMemberExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	let left = yield* e.branch(n.object, s);
	return yield* e.partialMemberExpression(left, n, s);
}

function* evaluateMetaProperty(e, n, s) {
	for (let i = 0; i < e.frames.length - 1; ++i) {
		let t = e.frames[i].type;
		if (t === "function") {
			if (e.frames[i + 1].ast.type == "NewExpression") {
				return e.frames[i].callee;
			} else {
				return Value.undef;
			}
		}
	}
	return Value.undef;
}

function* evaluateObjectExpression(e, n, s) {
	//TODO: Need to wire up native prototype
	var nat = new ObjectValue(s.realm);
	for (let i = 0; i < n.properties.length; ++i) {
		let prop = n.properties[i];
		let key;
		if (n.computed) {
			key = (yield* e.branch(prop.key, s)).toNative().toString();
		} else if (prop.key.type == 'Identifier') {
			key = prop.key.name;
		} else if (prop.key.type == 'Literal') {
			key = prop.key.value.toString();
		}

		let value = yield* e.branch(prop.value, s);
		let pd;

		if (Object.prototype.hasOwnProperty.call(nat.properties, key)) {
			pd = nat.properties[key];
		} else {
			pd = new PropertyDescriptor(Value.undef);
			nat.rawSetProperty(key, pd);
		}

		switch (prop.kind) {
			case 'init':
			default:
				pd.value = value;
				break;
			case 'get':
				pd.getter = value;
				break;
			case 'set':
				pd.setter = value;
				break;
		}
	}
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	return nat;
}

function* evaluateProgram(e, n, s) {
	let result = Value.undef;
	if (n.vars) for (var v in n.vars) {
		s.add(v, Value.undef);
	}
	if (n.strict === true) s.strict = true;
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	for (let statement of n.body) {
		result = yield* e.branch(statement, s);
	}
	return result;
}

function* evaluateReturnStatement(e, n, s) {
	let retVal = Value.undef;
	if (n.argument) retVal = yield* e.branch(n.argument, s);
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.RETURN, retVal);
}

function* evaluateSequenceExpression(e, n, s) {
	let last = Value.undef;
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	for (let expr of n.expressions) {
		last = yield* e.branch(expr, s);
	}
	return last;
}

function* evaluateSuperExpression(e, n, s) {
	let fr;
	for (let i = 0; i < e.frames.length; ++i) {
		fr = e.frames[i];
		if (fr.creator) break;
	}
	let result = fr.creator.superTarget;
	return result;
}

function* evaluateSwitchStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	let discriminant = yield* e.branch(n.discriminant, s);
	let last = Value.undef;
	let matches = 0;
	let matchVals = new Array(n.cases.length);
	let matched = false;

	for (let i = 0; i < n.cases.length; ++i) {
		let cas = n.cases[i];
		if (cas.test) {
			let testval = yield* e.branch(cas.test, s);
			let equality = yield* testval.tripleEquals(discriminant);
			if (equality.truthy) ++matches;
			matchVals[i] = equality.truthy;
		}
	}

	let genSwitch = function* (e, n) {

		for (let i = 0; i < n.cases.length; ++i) {
			let cas = n.cases[i];
			if (!matched) {
				if (cas.test) {
					if (!matchVals[i]) continue;
				} else {
					if (matches !== 0) continue;
				}
				matched = true;
			}
			for (let statement of cas.consequent) {
				last = yield* e.branch(statement, s);
			}
		}
	};

	e.pushFrame({ generator: genSwitch(e, n), type: 'loop', label: n.label });
	let finished = yield EvaluatorInstruction.waitForFramePop;

	return last;
}

function* evaluateTaggedTemplateExpression(e, n, s) {
	let quasis = n.quasi.quasis;
	let expressions = n.quasi.expressions;
	let value = Value.fromNative(quasis[0].value.cooked);
	let fn = yield* e.branch(n.tag, s);

	let strings = [];
	let rawStrings = [];
	for (let i = 0; i < quasis.length; ++i) {
		strings.push(e.realm.fromNative(quasis[i].value.cooked));
		rawStrings.push(e.realm.fromNative(quasis[i].value.raw));
	}
	let sv = ArrayValue.make(strings, e.realm);
	let rv = ArrayValue.make(rawStrings, e.realm);
	sv.rawSetProperty('raw', new PropertyDescriptor(rv, false));

	let args = [sv];

	for (let i = 0; i < expressions.length; ++i) {
		args.push((yield* e.branch(expressions[i], s)));
	}

	return yield* doCall(e, n, n.tag, s, function* () {
		return args;
	});
}

function* evaluateTemplateLiteral(e, n, s) {
	let value = Value.fromNative(n.quasis[0].value.cooked);
	for (let i = 0; i < n.expressions.length; ++i) {
		value = yield* value.add((yield* e.branch(n.expressions[i], s)));
		value = yield* value.add(Value.fromNative(n.quasis[i + 1].value.cooked));
	}
	return value;
}

function* evaluateThisExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	if (s.thiz) return s.thiz;else return Value.undef;
}

function* evaluateThrowStatement(e, n, s) {
	let value = yield* e.branch(n.argument, s);
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.THROW, value);
}

function* evaluateTryStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	if (n.finalizer) e.pushFrame({ generator: e.branch(n.finalizer, s), type: 'finally', scope: s });
	let result = yield e.branchFrame('catch', n.block, s);
	if (result instanceof CompletionRecord && result.type == CompletionRecord.THROW) {
		if (!n.handler) {
			//console.log("No catch..., throwing", result.obj);
			return result;
		}
		let handlerScope = s.createChild();
		handlerScope.add(n.handler.param.name, result.value);
		return yield* e.branch(n.handler.body, handlerScope);
	}
	return result;
}

function* evaluateUpdateExpression(e, n, s) {
	//TODO: Need to support something like ++x[1];
	let nue;
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMajor;
	let ref = yield* e.resolveRef(n.argument, s, true);
	let old = Value.nan;

	if (ref) old = yield* ref.getValue();
	if (old === undefined) old = Value.nan;
	switch (n.operator) {
		case '++':
			nue = yield* old.add(e.fromNative(1));break;
		case '--':
			nue = yield* old.subtract(e.fromNative(1));break;
		default:
			throw new Error('Unknown update expression type: ' + n.operator);
	}
	if (ref) yield* ref.setValue(nue, s);

	if (n.prefix) return nue;
	return old;
}

function* evaluateUnaryExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	if (n.operator === 'delete') {
		if (n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier') {
			//e isnt something you can delete?
			return Value.true;
		}
		let ref = yield* e.resolveRef(n.argument, s);
		if (!ref) return Value.false;
		if (ref.isVariable || !ref.del) {
			return Value.false;
		}
		let worked = ref.del(s);
		if (worked instanceof CompletionRecord) return yield worked;
		return Value.fromNative(worked);
	}

	if (n.operator === 'typeof') {
		if (n.argument.type == 'Identifier') {
			if (!s.has(n.argument.name)) return yield* Value.undef.typeOf();
		}
	}

	let left = yield* e.branch(n.argument, s);
	switch (n.operator) {
		case '-':
			return yield* left.unaryMinus();
		case '+':
			return yield* left.unaryPlus();
		case '!':
			return yield* left.not();
		case '~':
			return yield* left.bitNot();
		case 'typeof':
			return yield* left.typeOf();
		case 'void':
			return Value.undef;
		default:
			throw new Error('Unknown binary operator: ' + n.operator);
	}
}

function* evaluateVariableDeclaration(e, n, s) {
	let kind = n.kind;
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMajor;
	for (let decl of n.declarations) {
		let value = Value.undef;
		if (decl.init) value = yield* e.branch(decl.init, s);else if (s.has(decl.id.name)) continue;

		if (kind === 'const') {
			s.addConst(decl.id.name, value);
		} else if (kind == 'let') {
			s.addBlock(decl.id.name, value);
		} else {
			s.add(decl.id.name, value);
		}
	}
	return Value.undef;
}

function* genWhileLoop(e, n, s) {
	let last = Value.undef;
	while ((yield* e.branch(n.test, s)).truthy) {
		e.topFrame.ast = n;
		if (e.yieldPower > 0) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, s);
	}
}

function* evaluateWhileStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	e.pushFrame({ generator: genWhileLoop(e, n, s), type: 'loop', label: n.label, ast: n });
	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateWithStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	if (s.strict) return CompletionRecord.makeSyntaxError(e.realm, 'Strict mode code may not include a with statement');
	let o = yield* e.branch(n.object, s);
	let ns = s.createBlockChild();
	if (o instanceof ObjectValue) {
		let pairs = o.getPropertyValueMap();
		for (let p in pairs) {
			ns.set(p, pairs[p]);
		}
	}
	return yield* e.branch(n.body, ns);
}

function findNextStep(type) {
	switch (type) {
		case 'ArrayExpression':
			return evaluateArrayExpression;
		case 'ArrowFunctionExpression':
			return evaluateFunctionExpression;
		case 'AssignmentExpression':
			return evaluateAssignmentExpression;
		case 'BinaryExpression':
			return evaluateBinaryExpression;
		case 'BreakStatement':
			return evaluateBreakStatement;
		case 'BlockStatement':
			return evaluateBlockStatement;
		case 'CallExpression':
			return evaluateCallExpression;
		case 'ClassDeclaration':
			return evaluateClassDeclaration;
		case 'ClassExpression':
			return evaluateClassExpression;
		case 'ConditionalExpression':
			return evaluateConditionalExpression;
		case 'DebuggerStatement':
			return evaluateEmptyStatement;
		case 'DoWhileStatement':
			return evaluateDoWhileStatement;
		case 'ContinueStatement':
			return evaluateContinueStatement;
		case 'EmptyStatement':
			return evaluateEmptyStatement;
		case 'ExpressionStatement':
			return evaluateExpressionStatement;
		case 'ForStatement':
			return evaluateForStatement;
		case 'ForInStatement':
			return evaluateForInStatement;
		case 'ForOfStatement':
			return evaluateForOfStatement;
		case 'FunctionDeclaration':
			return evaluateFunctionDeclaration;
		case 'FunctionExpression':
			return evaluateFunctionExpression;
		case 'Identifier':
			return evaluateIdentifier;
		case 'IfStatement':
			return evaluateIfStatement;
		case 'ImportDeclaration':
			return evaluateImportDeclaration;
		case 'LabeledStatement':
			return evaluateLabeledStatement;
		case 'Literal':
			return evaluateLiteral;
		case 'LogicalExpression':
			return evaluateLogicalExpression;
		case 'MetaProperty':
			return evaluateMetaProperty;
		case 'MemberExpression':
			return evaluateMemberExpression;
		case 'NewExpression':
			return evaluateCallExpression;
		case 'ObjectExpression':
			return evaluateObjectExpression;
		case 'Program':
			return evaluateProgram;
		case 'ReturnStatement':
			return evaluateReturnStatement;
		case 'SequenceExpression':
			return evaluateSequenceExpression;
		case 'Super':
			return evaluateSuperExpression;
		case 'SwitchStatement':
			return evaluateSwitchStatement;
		case 'TaggedTemplateExpression':
			return evaluateTaggedTemplateExpression;
		case 'TemplateLiteral':
			return evaluateTemplateLiteral;
		case 'ThisExpression':
			return evaluateThisExpression;
		case 'ThrowStatement':
			return evaluateThrowStatement;
		case 'TryStatement':
			return evaluateTryStatement;
		case 'UnaryExpression':
			return evaluateUnaryExpression;
		case 'UpdateExpression':
			return evaluateUpdateExpression;
		case 'VariableDeclaration':
			return evaluateVariableDeclaration;
		case 'WhileStatement':
			return evaluateWhileStatement;
		case 'WithStatement':
			return evaluateWithStatement;

		case 'BooleanLiteral':
		case 'StringLiteral':
		case 'NumericLiteral':
		case 'NullLiteral':
			return evaluateLiteral;

		default:
			throw new Error('Unknown AST Node Type: ' + type);
	}
}

module.exports = {
	evaluateIdentifier,
	findNextStep,
	classFeatures
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Scope = __webpack_require__(56);
const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
const ObjectValue = __webpack_require__(39);
const PrimitiveValue = __webpack_require__(41);
const StringValue = __webpack_require__(42);
const LinkValue = __webpack_require__(57);
const SmartLinkValue = __webpack_require__(58);
const BridgeValue = __webpack_require__(46);
const ASTPreprocessor = __webpack_require__(59);
const EasyNativeFunction = __webpack_require__(60);
const PropertyDescriptor = __webpack_require__(40);
const Evaluator = __webpack_require__(32);
const EvaluatorInstruction = __webpack_require__(50);

const ObjectPrototype = __webpack_require__(61);
const FunctionPrototype = __webpack_require__(63);
const ObjectClass = __webpack_require__(64);
const FunctionClass = __webpack_require__(65);
const NumberPrototype = __webpack_require__(66);

const StringPrototype = __webpack_require__(67);

const ArrayPrototype = __webpack_require__(68);
const ArrayClass = __webpack_require__(69);
const StringClass = __webpack_require__(70);
const NumberClass = __webpack_require__(71);

const BooleanPrototype = __webpack_require__(72);
const BooleanClass = __webpack_require__(73);
const RegExpPrototype = __webpack_require__(74);
const RegExpClass = __webpack_require__(75);
const EsperClass = __webpack_require__(76);
const ErrorPrototype = __webpack_require__(77);
const ErrorClass = __webpack_require__(78);

const AssertClass = __webpack_require__(79);
const MathClass = __webpack_require__(80);
const ConsoleClass = __webpack_require__(81);
const JSONClass = __webpack_require__(82);
const ProxyClass = __webpack_require__(83);
const esper = __webpack_require__(30);

class EvalFunction extends ObjectValue {

	constructor(realm) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
	}

	*call(thiz, args, scope) {
		let cv = Value.undef;
		if (args.length > 0) cv = args[0];
		if (!(cv instanceof StringValue)) return cv;
		let code = yield* cv.toStringNative();
		let ast;
		try {
			let oast = scope.realm.parser(code, { loc: true });
			ast = ASTPreprocessor.process(oast);
		} catch (e) {
			var eo;
			let desc = e.description || e.message;
			if (e.name == 'ReferenceError' || /Invalid left-hand side in/.test(desc)) eo = new ReferenceError(e.description, e.fileName, e.lineNumber);else eo = new SyntaxError(e.description, e.fileName, e.lineNumber);

			if (e.stack) eo.stack = e.stack;
			return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(eo, scope.realm));
		}

		//TODO: Dont run in the parent scope if we are called indirectly
		let bak = yield EvaluatorInstruction.branch('eval', ast, scope);
		//console.log("EVALED: ", bak);
		return bak;
	}
}

let timeoutIds = 0;;
class SetTimeoutFunction extends ObjectValue {

	constructor(realm, runtime, isSetInterval) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.runtime = runtime;
		this.isSetInterval = isSetInterval;
	}

	*call(thiz, args, scope) {
		let engine = scope.realm.engine;
		let ev = args[0];
		let evaluator = new Evaluator(scope.realm, null, scope.global);
		let time = args.length > 1 ? 0 + args[1].toNative() : 0;
		let id = timeoutIds++;
		let isSetInterval = this.isSetInterval;

		if (!ev || ev.jsTypeName !== "function" && ev.jsTypeName !== "string") {
			return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(new TypeError('"callback" argument must be a function'), scope.realm));
		}

		evaluator.pushFrame({ generator: function* () {
				while (true) {
					yield esper.FutureValue.make((yield* engine.runtime.wait(time)));
					if (ev.jsTypeName == "function") {
						let tv = scope.strict ? esper.undef : scope.global.thiz;
						yield* ev.call(tv, args.slice(2), scope.global);
					} else if (ev.jsTypeName == "string") {
						let oast = scope.realm.parser((yield* ev.toStringNative()), { loc: true });
						let ast = ASTPreprocessor.process(oast);
						yield EvaluatorInstruction.branch('eval', ast, scope.global);
					}
					if (!isSetInterval) break;
				}
				return Value.undef;
			}(), type: 'invoke' });

		let o = evaluator.generator();
		evaluator.id = id;
		engine.threads.push(o);
		return Value.fromNative(id);
	}
}

class ClearTimeoutFunction extends ObjectValue {

	constructor(realm, runtime) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.runtime = runtime;
	}

	*call(thiz, args, scope) {
		if (args.length < 1) return Value.undef;
		let target = yield* args[0].toIntNative();
		let engine = scope.realm.engine;

		for (let i = 0; i < engine.threads.length; ++i) {
			if (engine.threads[i].evaluator.id == target) {
				let thr = engine.threads.splice(i, 1);
				thr[0].evaluator.dispose.map(x => x());
				return Value.fromNative(true);
			}
		}
		return Value.fromNative(false);
	}
}

/**
 * Represents a javascript execution environment including
 * it's scopes and standard libraries.
 */
class Realm {
	print() {
		console.log.apply(console, arguments);
	}

	write() {
		this.print.apply(this, arguments);
	}

	parser(code, options) {
		if (!esper.languages[this.language]) {
			throw new Error(`Unknown language ${this.language}. Load the lang-${this.language} plugin?`);
		}
		return esper.languages[this.language].parser(code, options);
	}

	makeLiteralValue(v, n) {
		let lang = esper.languages[this.language];
		if (lang && lang.makeLiteralValue) {
			let langv = lang.makeLiteralValue(v, this, n);
			if (langv) return langv;
		}
		return this.fromNative(v, n);
	}

	constructor(options, engine) {
		this.engine = engine;
		this.options = options || {};
		this.language = options.language || 'javascript';
		/** @type {Value} */
		this.ObjectPrototype = new ObjectPrototype(this);
		this.FunctionPrototype = new FunctionPrototype(this);
		this.Object = new ObjectClass(this);
		this.ObjectPrototype._init(this);
		this.FunctionPrototype._init(this);
		this.Object.setPrototype(this.ObjectPrototype);
		this.FunctionPrototype.setPrototype(this.ObjectPrototype);

		//TODO: Do this when we can make the property non enumerable.
		this.ObjectPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Object, false));

		this.Function = new FunctionClass(this);
		this.FunctionPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Function, false));

		/** @type {Math} */
		this.Math = new MathClass(this);

		/** @type {NumberPrototype} */
		this.NumberPrototype = new NumberPrototype(this);

		/** @type {StringPrototype} */
		this.StringPrototype = new StringPrototype(this);

		this.ArrayPrototype = new ArrayPrototype(this);
		this.Array = new ArrayClass(this);
		this.String = new StringClass(this);
		this.Number = new NumberClass(this);

		this.BooleanPrototype = new BooleanPrototype(this);
		this.Boolean = new BooleanClass(this);

		this.RegExpPrototype = new RegExpPrototype(this);
		this.RegExp = new RegExpClass(this);
		this.Proxy = new ProxyClass(this);

		this.Esper = new EsperClass(this);
		this.ErrorPrototype = new ErrorPrototype(this);
		this.Error = new ErrorClass(this);
		this.ErrorPrototype.rawSetProperty('constructor', new PropertyDescriptor(this.Error, false));

		/** @type {Value} */
		this.console = new ConsoleClass(this);

		let scope = new Scope(this);
		scope.object.clazz = 'global';
		scope.strict = options.strict || false;
		let that = this;
		var printer = EasyNativeFunction.makeForNative(this, function () {
			that.print.apply(that, arguments);
		});
		scope.set('print', printer);
		scope.set('log', printer);

		scope.addConst('NaN', this.fromNative(NaN));
		scope.addConst('Infinity', this.fromNative(Infinity));

		scope.set('console', this.console);
		scope.set('JSON', new JSONClass(this));

		if (options.exposeEsperGlobal) {
			scope.set('Esper', this.Esper);
		}

		scope.set('Math', this.Math);

		scope.set('Number', this.Number);
		scope.set('Boolean', this.Boolean);
		scope.set('Object', this.Object);
		scope.set('Function', this.Function);
		scope.set('Array', this.Array);
		scope.set('String', this.String);
		scope.set('RegExp', this.RegExp);
		scope.set('Proxy', this.Proxy);

		scope.set('Error', this.Error);
		scope.set('TypeError', this.TypeError = this.Error.makeErrorType(TypeError));
		scope.set('SyntaxError', this.SyntaxError = this.Error.makeErrorType(SyntaxError));
		scope.set('ReferenceError', this.ReferenceError = this.Error.makeErrorType(ReferenceError));
		scope.set('RangeError', this.RangeError = this.Error.makeErrorType(RangeError));
		scope.set('EvalError', this.EvalError = this.Error.makeErrorType(EvalError));
		scope.set('URIError', this.URIError = this.Error.makeErrorType(URIError));

		scope.set('parseInt', EasyNativeFunction.makeForNative(this, parseInt));
		scope.set('parseFloat', EasyNativeFunction.makeForNative(this, parseFloat));
		scope.set('isNaN', EasyNativeFunction.makeForNative(this, isNaN));
		scope.set('isFinite', EasyNativeFunction.makeForNative(this, isFinite));

		//scope.set('Date', this.fromNative(Date));
		scope.set('eval', new EvalFunction(this));
		scope.set('assert', new AssertClass(this));

		if (options.runtime) {
			scope.set("setTimeout", new SetTimeoutFunction(this, options.runtime, false));
			scope.set("setInterval", new SetTimeoutFunction(this, options.runtime, true));
			scope.set("clearTimeout", new ClearTimeoutFunction(this, options.runtime));
			scope.set("clearInterval", new ClearTimeoutFunction(this, options.runtime));
		}

		scope.thiz = scope.object;
		this.importCache = new WeakMap();
		/** @type {Scope} */
		this.globalScope = scope;

		let lang = esper.languages[this.language];
		if (lang && lang.setupRealm) lang.setupRealm(this);
	}

	lookupWellKnown(v) {
		if (v === Object) return this.Object;
		if (v === Object.prototype) return this.ObjectPrototype;
		if (v === Function) return this.Function;
		if (v === Function.prototype) return this.FunctionPrototype;
		if (v === Math) return this.Math;
		if (v === Number) return this.Number;
		if (v === Number.prototype) return this.NumberPrototype;
		if (v === String) return this.String;
		if (v === String.prototype) return this.StringPrototype;
		if (v === Array) return this.Array;
		if (v === Array.prototype) return this.ArrayPrototype;
		if (v === RegExp) return this.RegExp;
		if (v === RegExp.prototype) return this.RegExpPrototype;
		if (typeof console !== 'undefined' && v === console) return this.console;
	}

	lookupWellKnownByName(v) {
		switch (v) {
			case '%Object%':
				return this.Object;
			case '%ObjectPrototype%':
				return this.ObjectPrototype;
			case '%Function%':
				return this.Function;
			case '%FunctionPrototype%':
				return this.FunctionPrototype;
			case '%Math%':
				return this.Math;
			case '%Number%':
				return this.Number;
			case '%NumberPrototype%':
				return this.NumberPrototype;
			case '%Array%':
				return this.Array;
			case '%ArrayPrototype%':
				return this.ArrayPrototype;
			case '%RegExp%':
				return this.RegExp;
			case '%RegExpPrototype%':
				return this.RegExpPrototype;
		}
	}

	fromNative(native, x) {
		return Value.fromNative(native, this);
	}

	import(native, modeHint) {
		if (native instanceof Value) return native;
		if (native === undefined) return Value.undef;

		let prim = Value.fromPrimativeNative(native);
		if (prim) return prim;

		//if ( this.importCache.has(native) ) {
		//	return this.importCache.get(native);
		//}

		if (Value.hasBookmark(native)) {
			return Value.getBookmark(native);
		}

		let result;
		switch (modeHint || this.options.foreignObjectMode) {
			case 'bridge':
				result = BridgeValue.make(native, this);
				break;
			case 'smart':
				result = SmartLinkValue.make(native, this);
				break;
			case 'link':
			default:
				result = LinkValue.make(native, this);
				break;
		}

		//this.importCache.set(native, result);
		return result;
	}
}

Realm.prototype.makeForForeignObject = Realm.prototype.import;

module.exports = Realm;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PropertyDescriptor = __webpack_require__(40);

const Value = __webpack_require__(33);
const ObjectValue = __webpack_require__(39);

class Scope {
	constructor(realm) {
		this.parent = null;
		this.object = new ObjectValue(realm);
		this.strict = false;
		this.realm = realm;
		this.global = this;
		this.top = this;
		this.writeTo = this.object;
		this.writeToBlock = this.object;
		this.thiz = null;
	}

	/**
  * @param {string} name - Identifier to retreive
  * @returns {Value}
  */
	get(name) {
		//Fast property access in the common case.
		let prop = this.object.properties[name];
		if (!prop) return Value.undef;
		if (!prop.getter) return prop.value;
		return this.object.getImmediate(name);
	}

	ref(name) {
		var vhar = this.object.properties[name];
		if (!vhar) return undefined;
		var that = this;
		var o = {
			setValue: vhar.setValue.bind(vhar, this),
			getValue: vhar.getValue.bind(vhar, this),
			isVariable: !!vhar.variable
		};

		if (this.global.object.properties[name] === vhar) {
			o.del = s => this.global.object.delete(name, s);
		}

		return o;
	}

	add(name, value) {
		this.writeTo.setImmediate(name, value);
		this.writeToBlock.properties[name].variable = true;
	}

	addBlock(name, value) {
		this.writeToBlock.setImmediate(name, value);
		this.writeToBlock.properties[name].variable = true;
	}

	addConst(name, value) {
		this.set(name, value);
		this.writeToBlock.properties[name].writable = false;
		this.writeToBlock.properties[name].configurable = false;
	}

	/**
  * Set the identifier in its nearest scope, or create a global.
  * @param {string} name - Identifier to retreive
  * @param {Value} value - New vaalue of variable
  */
	set(name, value) {
		return this.put(name, value);
	}

	has(name) {
		return this.object.has(name);
	}

	/**
  * Set the identifier in its nearest scope, or create a global.
  * @param {string} name - Identifier to retreive
  * @param {Value} value - New vaalue of variable
  * @param {Scope} s - Code scope to run setter functions in
  */
	put(name, value, s) {
		let variable = this.object.properties[name];
		if (variable) {
			return variable.setValue(this.object, value, s);
		}
		var v = new PropertyDescriptor(value, this);
		this.writeTo.properties[name] = v;
		return Value.undef.fastGen();
	}

	createChild() {
		let child = new Scope(this.realm);
		child.object.eraseAndSetPrototype(this.object);
		child.parent = this;
		child.strict = this.strict;
		child.global = this.global;
		child.realm = this.realm;
		child.top = this.top;
		return child;
	}

	createBlockChild() {
		let c = this.createChild();
		c.thiz = this.thiz;
		c.writeTo = this.writeTo;
		c.parent = this.parent;
		return c;
	}

	fromNative(value, x) {
		return this.realm.fromNative(value, x);
	}

	getVariableNames() {
		let list = [];
		for (var o in this.object.properties) list.push(o);
		return list;
	}

}

module.exports = Scope;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);
const ArrayValue = __webpack_require__(49);

function invoke(target, thiz, args) {
	return Function.prototype.apply.call(target, thiz, args);
}

function invokeAsNew(target, args) {
	if (target.bind) {
		let bindArgs = [null].concat(args);
		return new (target.bind.apply(target, bindArgs))();
	} else {
		return invoke(target, null, args);
	}
}

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class LinkValue extends Value {

	constructor(value, realm) {
		super();
		this.native = value;
		this.realm = realm;
	}

	static make(native, realm) {
		let wellKnown = realm.lookupWellKnown(native);
		if (wellKnown) return wellKnown;

		if (Array.isArray(native)) {
			var ia = new Array(native.length);
			for (let i = 0; i < native.length; ++i) {
				ia[i] = LinkValue.make(native[i], realm);
			}
			return ArrayValue.make(ia, realm);
		}

		return new LinkValue(native, realm);
	}

	ref(name, s) {

		let that = this;
		let out = Object.create(null);

		out.getValue = function* () {
			return yield* that.get(name, s);
		};
		out.setValue = function* (to, s) {
			return yield* that.set(name, to, s);
		};
		out.del = function () {
			return false;
		};

		return out;
	}

	*set(name, value, s, extra) {
		this.native[name] = value.toNative();
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	makeLink(value) {
		return this.realm.import(value, this.linkKind);
	}

	*doubleEquals(other) {
		return this.makeLink(this.native == other.toNative());
	}
	*tripleEquals(other) {
		return this.makeLink(this.native === other.toNative());
	}

	*add(other) {
		return this.makeLink(this.native + other.toNative());
	}
	*subtract(other) {
		return this.makeLink(this.native - other.toNative());
	}
	*multiply(other) {
		return this.makeLink(this.native * other.toNative());
	}
	*divide(other) {
		return this.makeLink(this.native / other.toNative());
	}
	*mod(other) {
		return this.makeLink(this.native % other.toNative());
	}

	*shiftLeft(other) {
		return this.makeLink(this.native << other.toNative());
	}
	*shiftRight(other) {
		return this.makeLink(this.native >> other.toNative());
	}
	*shiftRightZF(other) {
		return this.makeLink(this.native >>> other.toNative());
	}

	*bitAnd(other) {
		return this.makeLink(this.native & other.toNative());
	}
	*bitOr(other) {
		return this.makeLink(this.native | other.toNative());
	}
	*bitXor(other) {
		return this.makeLink(this.native ^ other.toNative());
	}

	*gt(other) {
		return this.makeLink(this.native > other.toNative());
	}
	*lt(other) {
		return this.makeLink(this.native < other.toNative());
	}
	*gte(other) {
		return this.makeLink(this.native >= other.toNative());
	}
	*lte(other) {
		return this.makeLink(this.native <= other.toNative());
	}

	*inOperator(other) {
		return this.makeLink(other.toNative() in this.native);
	}
	*instanceOf(other) {
		return this.makeLink(this.native instanceof other.toNative());
	}

	*unaryPlus() {
		return this.makeLink(+this.native);
	}
	*unaryMinus() {
		return this.makeLink(-this.native);
	}
	*not() {
		return this.makeLink(!this.native);
	}

	*get(name, realm, origional) {
		let desc = Object.getOwnPropertyDescriptor(this.native, name);
		if (desc) {
			if (desc.get && origional) return this.makeLink(origional.native[name], realm);
			return this.makeLink(this.native[name], realm);
		}
		return yield* this.makeLink(Object.getPrototypeOf(this.native), realm).get(name, realm, origional || this);
	}

	*observableProperties(realm) {
		for (let p in this.native) {
			yield this.makeLink(p);
		}
		return;
	}

	/**
  *
  * @param {Value} thiz
  * @param {Value[]} args
  * @param {Scope} s
  */
	*call(thiz, args, s, ext) {
		let realArgs = new Array(args.length);
		for (let i = 0; i < args.length; ++i) {
			realArgs[i] = args[i].toNative();
		}
		try {
			let asConstructor = ext && ext.asConstructor;
			let result;
			if (asConstructor) result = invokeAsNew(this.native, realArgs);else result = invoke(this.native, thiz ? thiz.toNative() : undefined, realArgs);
			let val = this.makeLink(result, s.realm);
			if (typeof s.realm.options.linkValueCallReturnValueWrapper === 'function') {
				val = s.realm.options.linkValueCallReturnValueWrapper(val);
			}
			return val;
		} catch (e) {
			let result = this.makeLink(e, s.realm);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}
	}

	get isCallable() {
		return typeof this.native === 'function';
	}

	getPropertyValueMap() {
		let list = {};
		for (let p in this.native) {
			let v = this.native[p];
			list[p] = this.makeLink(v);
		}
		return list;
	}

	*toNumberValue() {
		return Value.fromNative(Number(this.native));
	}
	*toStringValue() {
		return Value.fromNative(String(this.native));
	}

	getPrototypeProperty() {
		return this.makeLink(this.native.prototype);
	}

	getPrototype(realm) {
		return realm.ObjectPrototype;
	}

	*makeThisForNew() {
		return Value.undef;
	}

	get debugString() {
		return '[Link: ' + this.native + ']';
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) {
		switch (preferedType) {
			case 'string':
				return Value.fromNative(this.native.toString());
			default:
				return Value.fromNative(this.native.valueOf());
		}
	}

	get linkKind() {
		return 'link';
	}
}

module.exports = LinkValue;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const LinkValue = __webpack_require__(57);
const CompletionRecord = __webpack_require__(34);
const ArrayValue = __webpack_require__(49);
const EvaluatorInstruction = __webpack_require__(50);
/**
 * Represents a value that maps directly to an untrusted local value.
 */

let privilegedThreads = new WeakSet();

class SmartLinkValue extends LinkValue {

	constructor(value, realm) {
		super(value, realm);
	}

	allowRead(name, e) {
		if (e && privilegedThreads.has(e)) return true;
		//if ( name === 'call' ) return true;
		//return true;
		if (name.indexOf('esper_') === 0) return true;
		if (name === 'hasOwnProperty') return true;
		let props = this.apiProperties;
		if (props === null) return true;
		return props.indexOf(name) !== -1;
	}

	allowWrite(name, e) {
		if (e && privilegedThreads.has(e)) return true;
		if (name.indexOf('esper_') === 0) name = name.substr(6);
		var allowed = [];
		var native = this.native;
		if (native.apiUserProperties) {
			Array.prototype.push.apply(allowed, native.apiUserProperties);
		}

		return allowed.indexOf(name) != -1;
	}

	getPropertyValueMap() {
		let list = {};
		for (let p in this.native) {
			let v = this.native[p];
			if (this.allowRead(p)) {
				list[p] = this.makeLink(v);
			}
		}
		return list;
	}

	static make(native, realm) {
		let wellKnown = realm.lookupWellKnown(native);
		if (wellKnown) return wellKnown;

		if (Array.isArray(native)) {
			var ia = new Array(native.length);
			for (let i = 0; i < native.length; ++i) {
				ia[i] = realm.import(native[i], 'smart');
			}
			return ArrayValue.make(ia, realm);
		}

		return new SmartLinkValue(native, realm);
	}

	makeLink(value) {
		return this.realm.import(value, 'smart');
	}

	ref(name, s) {
		let native = this.native;
		let owner = this;
		if ('esper_' + name in native) name = 'esper_' + name;

		return super.ref(name, s);
	}

	*set(name, value, s) {
		let evaluator = yield EvaluatorInstruction.getEvaluator;
		let native = this.native;
		if (name in this.native) {
			if (!this.allowWrite(name, evaluator)) return yield CompletionRecord.makeTypeError(s.realm, "Can't write to protected property: " + name);
		} else {
			if (!native.apiUserProperties) native.apiUserProperties = [];

			if (native.apiUserProperties.indexOf(name) == -1) {
				native.apiUserProperties.push(name);
			}
		}

		return yield* super.set(name, value, s);
	}

	*get(name, realm, origional) {
		let evaluator = yield EvaluatorInstruction.getEvaluator;
		let native = this.native;
		if ('esper_' + name in this.native) name = 'esper_' + name;

		if (!(name in native)) {
			return Value.undef;
		}

		if (!this.allowRead(name, evaluator)) {
			return yield CompletionRecord.makeTypeError(realm, "Can't read protected property: " + name);
		}

		return yield* super.get(name, realm, origional);
	}

	get apiProperties() {
		let allowed = [];
		let native = this.native;

		if (native.apiProperties === undefined && native.apiMethods === undefined) return null;

		if (native.apiProperties) {
			Array.prototype.push.apply(allowed, native.apiProperties);
		}

		if (native.apiUserProperties) {
			Array.prototype.push.apply(allowed, native.apiUserProperties);
		}

		if (native.apiMethods) {
			Array.prototype.push.apply(allowed, native.apiMethods);
		}

		if (native.apiOwnMethods) {
			Array.prototype.push.apply(allowed, native.apiOwnMethods);
		}

		if (native.programmableProperties) {
			Array.prototype.push.apply(allowed, native.programmableProperties);
		}

		return allowed;
	}

	get debugString() {
		let props = this.apiProperties;
		return '[SmartLink: ' + this.native + ', props: ' + (props ? props.join(',') : '[none]') + ']';
	}

}

SmartLinkValue.makeThreadPrivileged = function (e) {
	privilegedThreads.add(e);
};

SmartLinkValue.isThreadPrivileged = function (e) {
	return privilegedThreads.has(e);
};

SmartLinkValue.makeThreadPrivlaged = SmartLinkValue.makeThreadPrivileged;

module.exports = SmartLinkValue;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let esper = __webpack_require__(30);
let compiler;

function invokeCB(o, name) {
	if (!(name in o)) return;
	var args = Array.prototype.slice.call(arguments, 2);
	o[name].apply(o, args);
}

function detectStrict(body) {
	if (!body || body.length < 1) return;
	let first = body[0];
	if (first.type === 'ExpressionStatement') {
		let exp = first.expression;
		if (exp.type === 'Literal' && exp.value === 'use strict') {
			return true;
		}
	}
}

class ASTNode {
	constructor(o) {
		this.visits = 0;
		this.dispatch = false;
		if (typeof o === 'object') {
			for (var k in o) this[k] = o[k];
		}
	}

	addHiddenProperty(name, value) {
		Object.defineProperty(this, name, {
			value: value,
			configurable: true
		});
	}

	source() {
		if (!this._source) return;
		if (!this.range) return;
		return this._source.substring(this.range[0], this.range[1]);
	}

	toString() {
		let extra = Object.keys(this).map(k => {
			let v = this[k];
			if (v === null || typeof v === 'function') return;
			if (k == 'range' || k == 'loc' || k == 'nodeID') return;
			if (v instanceof ASTNode) return `${k}: [ASTNode: ${v.type}]`;
			if (Array.isArray(v)) return '[...]';else return `${k}: ${JSON.stringify(v)}`;
		}).filter(v => !!v).join(', ');
		return `[ASTNode: ${this.type} ${extra}]`;
	}

}

class ASTPreprocessor {

	static clone(ast, extra) {
		return JSON.parse(JSON.stringify(ast), function (n, o) {
			if (o === null) return null;
			if (typeof o !== 'object') return o;
			if (Array.isArray(o)) {
				return o;
			} else if (o.type) {
				let z = new ASTNode(o);
				if (!o.range && typeof o.start != 'undefined' && typeof o.end != 'undefined') {
					z.range = [o.start, o.end];
				}
				if (extra && extra.source) z.addHiddenProperty('_source', extra.source);
				return z;
			} else if (n === "start" || n === "end" || n === "loc" || n == "extra") {
				return o;
			} else {
				return o;
				//throw new TypeError("Tried to process ASTNode with no type:" + n);
			}
		});
	}

	static process(ast, extra) {
		if (typeof ast !== 'object') throw new TypeError('Provided AST is invalid (type is ' + typeof ast + ')');
		let nast = ASTPreprocessor.clone(ast, extra);

		var options = extra || {};
		var cbs = new EsperASTInstructions(ast, options);
		new ASTPreprocessor(nast, extra).start(cbs);
		return nast;
	}

	static *walker(ast, cbs, parent) {
		var me = a => ASTPreprocessor.walker(a, cbs, ast);
		if (!ast instanceof ASTNode) throw new TypeError("Walked a non ASTNode");
		if (parent) ast.addHiddenProperty('parent', parent);
		invokeCB(cbs, 'enter', ast);
		invokeCB(cbs, 'enter' + ast.type, ast);
		switch (ast.type) {
			case 'Program':
				for (let e of ast.body) yield* me(e);
				break;
			case 'BlockStatement':
				for (let e of ast.body) yield* me(e);
				break;
			case 'NewExpression':
			case 'CallExpression':
				for (let e of ast.arguments) yield* me(e);
				yield* me(ast.callee);
				break;
			case 'WhileStatement':
			case 'DoWhileStatement':
				if (ast.test) yield* me(ast.test);
				yield* me(ast.body);
				break;
			case 'VariableDeclaration':
				for (let e of ast.declarations) yield* me(e);
				break;
			case 'VariableDeclarator':
				invokeCB(cbs, 'decl', ast);
				if (ast.init) yield* me(ast.init);
				break;
			case 'FunctionDeclaration':
				invokeCB(cbs, 'decl', ast);
				invokeCB(cbs, 'enterFunction', ast);
				yield* me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;
			case 'ClassBody':
				for (let e of ast.body) yield* me(e);
				break;
			case 'ArrowFunctionExpression':
			case 'FunctionExpression':
			case 'ClassMethod':
				invokeCB(cbs, 'enterFunction', ast);
				yield* me(ast.body);
				invokeCB(cbs, 'exitFunction', ast);
				break;
			case 'Identifier':
				break;
			case 'ArrayExpression':
				if (ast.elements) {
					for (let e of ast.elements) {
						if (e) yield* me(e);
					}
				}
				break;
			case 'ObjectExpression':
				if (ast.properties) {
					for (let e of ast.properties) {
						if (e) yield* me(e);
					}
				}
				break;
			case 'Property':
				yield* me(ast.key);
				yield* me(ast.value);
				break;
			default:
				for (var p in ast) {
					let n = ast[p];
					if (p === 'parent') continue;
					if (p === 'loc') continue;
					if (p === 'range') continue;
					if (p === 'type') continue;
					if (p === 'nodeID') continue;
					if (p === 'parentFunction') continue;
					if (p === 'funcs') continue;
					if (n === null) continue;
					if (typeof n.type !== 'string') {
						continue;
					}
					yield* me(n);
				}
		}

		invokeCB(cbs, 'exit' + ast.type, ast);
		invokeCB(cbs, 'exit', ast);
	}

	constructor(ast) {
		this.ast = ast;
	}

	start(cbs) {
		var gen = ASTPreprocessor.walker(this.ast, cbs);
		for (var x of gen) {}
	}

}
ASTPreprocessor.ASTNode = ASTNode;

class EsperASTInstructions {
	constructor(ast, options) {

		if (!compiler && esper.plugins['jit']) {
			compiler = new esper.plugins['jit'].Compiler();
		}

		this.ast = ast;
		this.options = options;
		this.counter = 0;
		this.depth = 0;

		let globalScope = Object.create(null);
		let globalVars = Object.create(null);
		let globalFuncs = Object.create(null);

		if (options.locals) {
			for (let o of options.locals) globalScope[o] = true;
		}

		this.scopeStack = [globalScope];
		this.varStack = [globalVars];
		this.funcStack = [globalFuncs];
	}

	log() {
		let str = Array.prototype.join.call(arguments, ', ');
		let indent = new Array(this.depth).join('  ');
		//console.log(indent + str);
	}

	enter(a) {
		++this.depth;
		if (this.options.markNonUser) {
			a.nonUserCode = true;
		}
		a.nodeID = this.counter++;
		this.log('Entering', a.type);
	}

	enterIdentifier(a) {
		let fn = this.funcStack[0];
		let parent = a.parent;
		if (parent.type == "MemberExpression" && !parent.computed && parent.property == a) {
			return;
		}
		if (parent.type == "Property" && parent.key == a) {
			return;
		}
		fn.refs[a.name] = true;
	}

	decl(a) {
		if (a.parent.type == 'VariableDeclaration') {
			if (a.parent.kind != 'var') {
				let stack = this.scopeStack[0];
				stack[a.id.name] = a;
				return;
			}
		}
		if (a.type == 'FunctionDeclaration') return;
		let stack = this.varStack[0];
		stack[a.id.name] = a;
	}

	enterProgram(a) {
		let scope = Object.create(this.scopeStack[0]);

		a.addHiddenProperty('refs', Object.create(null));
		a.addHiddenProperty('vars', Object.create(null));
		a.addHiddenProperty('funcs', Object.create(null));
		a.addHiddenProperty('ss', scope);

		this.funcStack.unshift(a);
		this.scopeStack.unshift(scope);
		this.varStack.unshift(a.vars);

		this.mangleBody(a);

		let strict = detectStrict(a.body);
		if (strict !== undefined) a.strict = strict;
	}

	enterThisExpression(a) {
		a.srcName = 'this';
	}

	enterLabeledStatement(a) {
		a.body.label = a.label.name;
	}

	exitArrayExpression(a) {
		a.srcName = '[' + a.elements.map(e => e ? e.srcName : '').join() + ']';
	}

	mangleBody(a) {
		function prehoist(s) {
			if (s.type === 'VariableDeclaration' && s.kind == 'var') {
				for (var decl of s.declarations) {
					a.vars[decl.id.name] = decl;
					a.ss[decl.id.name] = decl;
				}
			} else if (s.type === 'FunctionDeclaration') {
				a.vars[s.id.name] = s;
				a.ss[s.id.name] = s;
			}
		}

		if (a.body.type === 'BlockStatement') {
			for (let stmt of a.body.body) prehoist(stmt);
		} else if (Array.isArray(a.body)) {
			for (let stmt of a.body) prehoist(stmt);
		} else {
			prehoist(a.body);
		}
	}

	enterClassExpression(a) {
		let scope = Object.create(this.scopeStack[0]);
		this.scopeStack.unshift(scope);
		scope[a.id.name] = a;
		for (let x of a.body.body) {
			if (!x) continue;
			if (x.key) scope[x.key.name] = x;
			if (x.id) scope[x.id.name] = x;
		}
	}

	enterFunction(a) {
		this.funcStack.unshift(a);
		let scope = Object.create(this.scopeStack[0]);
		this.scopeStack.unshift(scope);

		a.addHiddenProperty('refs', Object.create(null));
		a.addHiddenProperty('vars', Object.create(null));
		a.addHiddenProperty('funcs', Object.create(null));
		a.addHiddenProperty('ss', scope);

		if (this.options.nonUserCode) {
			a.addHiddenProperty('nonUserCode', true);
		}

		for (let o of a.params) {
			if (o.type == 'Identifier') {
				scope[o.name] = a;
				a.vars[o.name] = a;
			} else if (o.type == 'RestElement') {
				scope[o.argument.name] = a;
				a.vars[o.argument.name] = a;
			}
		}

		this.mangleBody(a);

		let strict = detectStrict(a.body.body);
		if (strict !== undefined) a.strict = strict;

		this.varStack.unshift(a.vars);
	}

	enterFunctionDeclaration(a) {
		let parent = this.funcStack[0];
		//a.parentFunction = parent.nodeID;
		a.srcName = 'function ' + a.id.name + ' {';
		parent.funcs[a.id.name] = a;
	}

	exitIdentifier(a) {
		a.srcName = a.name;
	}

	exitLiteral(a) {
		if (a.regex) {
			a.srcName = '/' + a.regex.pattern + '/' + a.regex.flags;
		} else if (typeof a.value === 'string') {
			a.srcName = a.raw;
		} else if (typeof a.value === 'undefined') {
			a.srcName = 'undefiend';
		} else {
			a.srcName = a.raw;
		}
	}

	exitBinaryExpression(a) {
		a.srcName = a.left.srcName + ' ' + a.operator + ' ' + a.right.srcName;
	}

	exitMemberExpression(a) {
		let left = a.object.srcName || '??';
		let right = a.property.srcName || '(intermediate value)';
		if (!a.computed) a.srcName = left + '.' + right;else a.srcName = a.srcName = left + '[' + right + ']';
	}

	exitCallExpression(a) {
		a.srcName = a.callee.srcName + '(...)';
	}

	exitFunction(a) {
		var vars = this.varStack.shift();
		var scope = this.scopeStack.shift();
		var free = {};
		var upvars = {};
		var locals = {};
		for (var r in a.refs) {

			if (r == 'arguments') continue;
			if (Object.hasOwnProperty.call(vars, r) || Object.hasOwnProperty.call(scope, r)) {
				locals[r] = true;
			} else if (r in this.varStack[0]) {
				upvars[r] = true;
			} else if (r in this.scopeStack[0]) {
				upvars[r] = true;
			} else {
				free[r] = true;
			}
		}
		a.upvars = upvars;
		a.freevars = free;

		this.funcStack.shift();
		delete a.refs;

		let target = this.funcStack[0];
		if (target && target.refs) {
			for (let v in upvars) target.refs[v] = true;
			for (let v in free) target.refs[v] = true;
		}

		if (compiler && this.options.compile === 'pre' && compiler.canCompile(a.body)) {
			a.body.dispatch = compiler.compileNode(a.body);
		}
		//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exitClassExpression(a) {
		this.scopeStack.shift();
	}

	exitProgram(a) {
		this.scopeStack.shift();
		var vars = this.varStack.shift();
		//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
	}

	exit(a) {
		this.log('Exiting', a.type);
		--this.depth;
	}

}
ASTPreprocessor.ASTNode = ASTNode;
ASTPreprocessor.EsperASTInstructions = EsperASTInstructions;

module.exports = ASTPreprocessor;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const ObjectValue = __webpack_require__(39);
const CompletionRecord = __webpack_require__(34);

class EasyNativeFunction extends ObjectValue {
	constructor(realm) {
		super(realm, realm.FunctionPrototype);
	}

	static make(realm, fx, binding) {
		let out = new EasyNativeFunction(realm);
		out.fn = fx;
		out.binding = binding;
		return out;
	}

	static makeForNative(realm, fx) {
		let out = new EasyNativeFunction(realm);
		out.fn = function* (thiz, args) {
			let rargs = new Array(args.length);
			for (let i = 0; i < args.length; ++i) {
				rargs[i] = args[i].toNative();
			}
			let nt = thiz.toNative();
			let nr = fx.apply(nt, rargs);
			return Value.fromNative(nr);
		};
		return out;
	}

	*call(thiz, argz, scope, extra) {
		let profile = false;
		let start = 0;
		try {
			if (extra && extra.evaluator && extra.evaluator.debug) {
				profile = true;
				start = Date.now();
			}
			let s = scope ? scope.createChild() : scope;
			if (s) s.strict = true;
			let o = yield* this.fn.apply(this.binding, arguments, s, extra);
			if (o instanceof CompletionRecord) return o;
			if (!(o instanceof Value)) o = scope.realm.makeForForeignObject(o);
			if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.NORMAL, o);
		} catch (e) {
			if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.THROW, scope.realm.makeForForeignObject(e));
		}
	}

	*makeThisForNew(realm) {
		return yield CompletionRecord.makeTypeError(realm, 'function is not a constructor');
	}

	get debugString() {
		return 'function() { [Native Code] }';
	}
}
EasyNativeFunction.prototype.clazz = 'Function';

module.exports = EasyNativeFunction;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const ObjectValue = __webpack_require__(39);
const EasyObjectValue = __webpack_require__(62);
const Value = __webpack_require__(33);
const NullValue = __webpack_require__(44);
const UndefinedValue = __webpack_require__(47);

class ObjectPrototype extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setPrototype(null);
	}

	static *hasOwnProperty$e(thiz, args) {
		let name = yield* args[0].toStringNative();
		if (!(thiz instanceof ObjectValue)) return Value.false;else if (thiz.hasOwnProperty(name)) return Value.true;
		return Value.false;
	}

	static *isPrototypeOf$e(thiz, args, s) {
		if (args.length < 1) return Value.false;
		let target = args[0]; //TODO: Call ToObject();
		if (!target.getPrototype) return yield CompletionRecord.makeTypeError(s.realm, 'No prototype.');
		let pt = target.getPrototype(s.realm);
		let checked = [pt];
		while (pt) {
			if (pt === thiz) return Value.true;
			pt = pt.getPrototype(s.realm);
			if (checked.indexOf(pt) !== -1) break;
			checked.push(pt);
		}
		return Value.false;
	}

	static *propertyIsEnumerable$e(thiz, args) {
		let nam = yield* args[0].toStringNative();
		let pd = thiz.properties[nam];
		return this.fromNative(pd.enumerable);
	}
	static *toLocaleString$e(thiz, args) {
		return yield* ObjectPrototype.toString$e(thiz, args);
	}

	static *toString$e(thiz, args) {
		if (thiz instanceof UndefinedValue) return this.fromNative('[object Undefined]');
		if (thiz instanceof NullValue) return this.fromNative('[object Null]');
		return this.fromNative('[object ' + thiz.clazz + ']');
	}

	static *valueOf$e(thiz, args) {
		if (thiz.specTypeName === 'object') return thiz;
		//TODO: Need to follow the ToObject() conversion
		return thiz;
	}

}
ObjectPrototype.prototype.wellKnownName = '%ObjectPrototype%';

module.exports = ObjectPrototype;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(33);
const PropertyDescriptor = __webpack_require__(40);
const ObjectValue = __webpack_require__(39);
const CompletionRecord = __webpack_require__(34);
const EasyNativeFunction = __webpack_require__(60);

class EasyObjectValue extends ObjectValue {
	constructor(realm) {
		super(realm);

		let objProto = realm.ObjectPrototype;
		if (typeof this.objPrototype === 'function') {
			objProto = this.objPrototype(realm);
		} else if (typeof this.call === 'function') {
			objProto = realm.FunctionPrototype;
		}
		if (this.call == 'function') this.clazz = 'Function';
		this.setPrototype(objProto);

		this._init(realm);
		this.easyRef = Object.getPrototypeOf(this).constructor;
	}

	_init(realm) {
		var clazz = Object.getPrototypeOf(this);
		for (let p of Object.getOwnPropertyNames(clazz.constructor)) {
			if (p === 'length') continue;
			if (p === 'name') continue;
			if (p === 'prototype') continue;
			if (p === 'constructor') continue;
			if (p === 'caller') continue;
			if (p === 'callee') continue;
			if (p === 'arguments') continue;
			let parts = p.split(/\$/);
			let flags = parts.length > 1 ? parts.pop() : '';
			let name = parts.join('');

			let d = Object.getOwnPropertyDescriptor(clazz.constructor, p);
			let v = new PropertyDescriptor();
			let length = 1;

			if (d.get) {
				//Its a property
				let val = d.get();
				if (val instanceof Value) v.value = val;else v.value = this.fromNative(val);
			} else {
				if (d.value.esperLength !== undefined) length = d.value.esperLength;
				let rb = EasyNativeFunction.make(realm, d.value, this);
				let rblen = new PropertyDescriptor(Value.fromNative(length));
				rblen.configurable = false;
				rblen.writable = false;
				rblen.enumerable = false;
				rb.properties['length'] = rblen;
				v.value = rb;
			}
			if (flags.indexOf('e') !== -1) v.enumerable = false;
			if (flags.indexOf('w') !== -1) v.writable = false;
			if (flags.indexOf('c') !== -1) v.configurable = false;
			if (flags.indexOf('g') !== -1) {
				v.getter = v.value;
				delete v.value;
			}
			this.properties[name] = v;
		}

		if (this.callPrototype) {
			let pt = new PropertyDescriptor(this.callPrototype(realm));
			pt.configurable = false;
			pt.enumerable = false;
			pt.writable = false;
			this.properties['prototype'] = pt;
		}

		if (this.callLength !== undefined) {
			let rblen = new PropertyDescriptor(Value.fromNative(this.callLength));
			rblen.configurable = false;
			rblen.writable = false;
			rblen.enumerable = false;
			this.properties['length'] = rblen;
		}

		if (this.constructorFor) {
			let target = this.constructorFor(realm);
			if (target) {
				let cs = new PropertyDescriptor(this);
				cs.configurable = false;
				cs.enumerable = false;
				target.properties['constructor'] = cs;
			}
		}

		/*
  if ( realm.Function ) {
  	let cs = new PropertyDescriptor(realm.Function);
  	cs.configurable = false;
  	cs.enumerable = false;
  	this.properties['constructor'] = cs;
  }
  */
	}

	get jsTypeName() {
		return typeof this.call === 'function' ? 'function' : 'object';
	}
}

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ClosureValue = __webpack_require__(48);
const Value = __webpack_require__(33);
const ObjectValue = __webpack_require__(39);
const CompletionRecord = __webpack_require__(34);
const PropertyDescriptor = __webpack_require__(40);

class BoundFunction extends ObjectValue {
	constructor(func, realm) {
		super(realm);
		this.setPrototype(realm.FunctionPrototype);
		this.func = func;
		this.boundArgs = [];
	}

	*call(thiz, args, s, ext) {
		let tt = thiz;
		let asConstructor = ext && ext.asConstructor;

		if (!asConstructor) {
			tt = this.boundThis;
		}

		let rargs = [].concat(this.boundArgs, args);
		return yield* this.func.call(tt, rargs, s, ext);
	}

	*constructorOf(other, realm) {
		return yield* this.func.constructorOf(other, realm);
	}

	*makeThisForNew(realm) {
		return yield* this.func.makeThisForNew(realm);
	}

}

class FunctionPrototype extends EasyObjectValue {
	static get caller$cew() {
		return null;
	}
	static get length$ew() {
		return '?';
	}
	static get name$ew() {
		return '';
	}

	static *apply(thiz, args, s) {
		let vthis = args[0];
		let arga = [];
		if (args.length > 1) {
			let arr = args[1];
			let length = yield* arr.get('length');
			length = (yield* length.toNumberValue()).toNative();
			for (let i = 0; i < length; ++i) {
				arga[i] = yield* arr.get(i);
			}
		}
		return yield* thiz.call(vthis, arga, s);
	}

	static *bind(thiz, args, s) {
		let bthis = s.realm.globalScope.object; //TODO: is this actually null in scrict mode?
		if (args.length > 0) {
			if (args[0].jsTypeName !== 'undefined') bthis = args[0];
		}
		var out = new BoundFunction(thiz, s.realm);
		if (args.length > 1) out.boundArgs = args.slice(1);
		out.boundThis = bthis;

		if (thiz.properties['length']) {
			let newlen = thiz.properties['length'].value.toNative() - out.boundArgs.length;
			out.properties['length'] = new PropertyDescriptor(this.fromNative(newlen));
		}
		return out;
	}

	static *call(thiz, args, s) {
		let vthis = Value.undef;
		if (args.length > 0) vthis = args.shift();
		return yield* thiz.call(vthis, args, s);
	}
	static *toString(thiz, args, s) {
		if (thiz instanceof ClosureValue) {
			let astsrc = thiz.funcSourceAST.source();
			if (astsrc) return this.fromNative(astsrc);
			return this.fromNative('function() { [AST] }');
		} else if (thiz instanceof BoundFunction) {
			return this.fromNative('function() { [bound function] }');
		} else if (thiz instanceof EasyObjectValue.EasyNativeFunction) {
			return this.fromNative('function() { [native code] }');
		} else if (thiz instanceof EasyObjectValue && thiz.call) {
			return this.fromNative('function() { [native code] }');
		}
		return CompletionRecord.makeTypeError(s.realm, 'Function.prototype.toString is not generic');
	}

	*call(thiz, args, s) {
		return EasyObjectValue.undef;
	}

}

FunctionPrototype.prototype.wellKnownName = '%FunctionPrototype%';

module.exports = FunctionPrototype;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const CompletionRecord = __webpack_require__(34);
const Value = __webpack_require__(33);
const PropertyDescriptor = __webpack_require__(40);
const EmptyValue = __webpack_require__(45);
const BridgeValue = __webpack_require__(46);
const LinkValue = __webpack_require__(57);

function* defObjectProperty(obj, name, desc, realm) {
	if (name instanceof Value) {
		name = yield* name.toStringNative();
	}

	let value = yield* desc.get('value', realm);

	let v = new PropertyDescriptor(value);

	if (desc.has('enumerable')) {
		let enu = yield* desc.get('enumerable', realm);
		if (!(enu instanceof EmptyValue)) {
			v.enumerable = enu.truthy;
		}
	} else {
		v.enumerable = false;
	}

	if (desc.has('writable')) {
		let wri = yield* desc.get('writable', realm);
		if (!(wri instanceof EmptyValue)) {
			v.writable = wri.truthy;
		}
	} else {
		v.writable = false;
	}

	if (desc.has('configurable')) {
		let conf = yield* desc.get('configurable', realm);
		if (!(conf instanceof EmptyValue)) {
			v.writable = conf.truthy;
		}
	} else {
		v.writable = false;
	}

	if (desc.has('get')) {
		let get = yield* desc.get('get', realm);
		if (!(get instanceof EmptyValue)) {
			v.getter = get;
		}
	}

	if (desc.has('set')) {
		let set = yield* desc.get('set', realm);
		if (!(set instanceof EmptyValue)) {
			v.setter = set;
		}
	}

	obj.rawSetProperty(name, v);
	return true;
}

function* getDescriptor(target, name, realm) {
	if (!Object.hasOwnProperty.call(target.properties, name)) {
		return Value.undef;
	}

	let pdesc = target.properties[name];
	let out = new ObjectValue(realm);

	if (pdesc.value) yield* out.set('value', pdesc.value);
	if (pdesc.getter) yield* out.set('get', pdesc.getter);
	if (pdesc.setter) yield* out.set('set', pdesc.setter);

	yield* out.set('writable', Value.fromNative(pdesc.writable));
	yield* out.set('enumerable', Value.fromNative(pdesc.enumerable));
	yield* out.set('configurable', Value.fromNative(pdesc.configurable));
	return out;
}

function* objOrThrow(i, realm) {
	let val = i ? i : Value.undef;

	if (val instanceof EmptyValue) {
		return yield CompletionRecord.makeTypeError(realm, 'Cannot convert undefined or null to object');
	}

	if (!(val instanceof ObjectValue)) {
		return yield CompletionRecord.makeTypeError(realm, 'Need an object');
	}
	return val;
}

class ObjectObject extends EasyObjectValue {
	*call(thiz, args, s, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (asConstructor) {
			return new ObjectValue(s.realm);
		}
	}

	callPrototype(realm) {
		return realm.ObjectPrototype;
	}
	//objPrototype(realm) { return realm.Function; }

	static *create$e(thiz, args, s) {
		let v = new ObjectValue(s.realm);
		let p = Value.undef;
		if (args.length > 0) {
			p = args[0];
		}

		if (p.jsTypeName !== 'object' && p.jsTypeName !== 'function') {
			return yield CompletionRecord.makeTypeError(s.realm, 'Object prototype may only be an Object or null');
		}

		v.setPrototype(p);

		if (args.length > 1) {
			let propsobj = args[1];
			for (let p of propsobj.observableProperties(s.realm)) {
				let strval = p.native;
				let podesc = yield* propsobj.get(strval, s.realm);
				yield* defObjectProperty(v, p, podesc, s.realm);
			}
		}
		return v;
	}

	static *defineProperty(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		let name = yield* args[1].toStringNative();
		let desc = args[2];
		yield* defObjectProperty(target, name, desc, s.realm);
		return Value.true;
	}

	static *defineProperties(thiz, args, s) {

		let target = yield* objOrThrow(args[0], s.realm);
		//let props = yield * objOrThrow(args[1], s.realm);

		let propsobj = yield* objOrThrow(args[1], s.realm);

		for (let p of propsobj.observableProperties(s.realm)) {
			let strval = p.native;
			let podesc = yield* propsobj.get(strval, s.realm);
			yield* defObjectProperty(target, p, podesc, s.realm);
		}
		return Value.true;
	}

	static *seal$e(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);

		target.extensable = false;
		for (let p of Object.keys(target.properties)) {
			target.properties[p].configurable = false;
		}
		return target;
	}

	static *isSealed(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		if (target.extensable) return Value.false;
		for (let p of Object.keys(target.properties)) {
			let ps = target.properties[p];
			if (ps.configurable) return Value.false;
		}
		return Value.true;
	}

	static *freeze$e(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		target.extensable = false;
		for (let p in target.properties) {
			if (!Object.prototype.hasOwnProperty.call(target.properties, p)) continue;
			target.properties[p].configurable = false;
			target.properties[p].writable = false;
		}
		return target;
	}

	static *isFrozen(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		if (target.extensable) return Value.false;
		for (let p of Object.keys(target.properties)) {
			let ps = target.properties[p];
			if (ps.configurable) return Value.false;
			if (ps.writable) return Value.false;
		}
		return Value.true;
	}

	static *preventExtensions$e(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		target.extensable = false;
		return target;
	}

	static *isExtensible$e(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		return this.fromNative(target.extensable);
	}

	static *keys$e(thiz, args, s) {
		if (args[0] instanceof BridgeValue) {
			return ArrayValue.make(Object.keys(args[0].native), s.realm);
		}
		if (args[0] instanceof LinkValue) {
			let keys = [];
			for (let o of args[0].observableProperties()) keys.push(o);
			return ArrayValue.make(keys, s.realm);
		}
		let target = yield* objOrThrow(args[0], s.realm);
		let result = [];
		for (let p of Object.keys(target.properties)) {
			if (!target.properties[p].enumerable) continue;
			result.push(p);
		}
		return ArrayValue.make(result, s.realm);
	}

	static *getOwnPropertyNames$e(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		return ArrayValue.make(Object.getOwnPropertyNames(target.properties), s.realm);
	}

	static *getOwnPropertyDescriptor(thiz, args, s) {
		let target = yield* objOrThrow(args[0], s.realm);
		let name = yield* args[1].toStringNative();
		return yield* getDescriptor(target, name, s.realm);
	}

	static *getPrototypeOf(thiz, args, s) {
		let target = EasyObjectValue.undef;
		if (args.length > 0) target = args[0];
		if (!target.getPrototype) return yield CompletionRecord.makeTypeError(s.realm, 'No prototype.');
		let proto = target.getPrototype(s.realm);
		if (proto) return proto;
		return EasyObjectValue.null;
	}

	toNativeCounterpart() {
		return Object;
	}
}

ObjectObject.prototype.wellKnownName = '%Object%';

module.exports = ObjectObject;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ClosureValue = __webpack_require__(48);
const CompletionRecord = __webpack_require__(34);
const ASTPreprocessor = __webpack_require__(59);
const PropertyDescriptor = __webpack_require__(40);

class FunctionObject extends EasyObjectValue {
	*call(thiz, args, scope) {
		let an = new Array(args.length - 1);
		for (let i = 0; i < args.length - 1; ++i) {
			an[i] = (yield* args[i].toStringValue()).toNative();
		}
		let code = 'function name(' + an.join(', ') + ') {\n' + args[args.length - 1].toNative().toString() + '\n}';
		let ast;
		try {
			let oast = scope.realm.parser(code, { loc: true });
			ast = ASTPreprocessor.process(oast);
		} catch (e) {
			return new CompletionRecord(CompletionRecord.THROW, e);
		}

		let fn = new ClosureValue(ast.body[0], scope.global);
		fn.boundScope = scope.global;
		return fn;
	}

	_init(realm) {
		super._init(realm);
		let cs = new PropertyDescriptor(this);
		cs.configurable = false;
		cs.enumerable = false;
		this.properties['constructor'] = cs;
	}

	callPrototype(realm) {
		return realm.FunctionPrototype;
	}
	get callLength() {
		return 1;
	}
	//objPrototype(realm) { return realm.Function; }
}

module.exports = FunctionObject;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);

class NumberPrototype extends EasyObjectValue {

	static *valueOf$e(thiz) {
		if (thiz.specTypeName === 'number') return thiz;
		if (thiz.specTypeName === 'object') {
			let pv = thiz.primativeValue;
			if (pv.specTypeName === 'number') return pv;
		}
		throw new TypeError('Couldnt get there.');
	}

	static *toExponential$e(thiz, argz) {
		let a;
		if (argz.length > 0) {
			a = yield* argz[0].toNumberNative();
		}
		let num = yield* thiz.toNumberNative(thiz);
		return this.fromNative(num.toExponential(a));
	}

	static *toFixed$e(thiz, argz) {
		let a;
		if (argz.length > 0) {
			a = yield* argz[0].toNumberNative();
		}
		let num = yield* thiz.toNumberNative(thiz);
		return this.fromNative(num.toFixed(a));
	}

	static *toPrecision$e(thiz, argz) {
		let a;
		if (argz.length > 0) {
			a = yield* argz[0].toNumberNative();
		}
		let num = yield* thiz.toNumberNative(thiz);
		return this.fromNative(num.toPrecision(a));
	}

	static *toString$e(thiz, argz) {
		let a;
		if (argz.length > 0) {
			a = yield* argz[0].toNumberNative();
		}
		let num = yield* thiz.toNumberNative(thiz);
		return this.fromNative(num.toString(a));
	}

}

NumberPrototype.prototype.wellKnownName = '%NumberPrototype%';
module.exports = NumberPrototype;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const CompletionRecord = __webpack_require__(34);
const EmptyValue = __webpack_require__(45);
const ArrayValue = __webpack_require__(49);
const _g = __webpack_require__(35);

function wrapStringPrototype(name) {
	let fx = String.prototype[name];
	let genfx = function* (thiz, args, s) {
		if (thiz instanceof EmptyValue) {
			return yield CompletionRecord.makeTypeError(s.realm, 'called String function on null or undefined?');
		}
		let sv = yield* thiz.toStringValue(s.realm);
		var argz = new Array(args.length);
		for (let i = 0; i < args.length; ++i) {
			argz[i] = args[i].toNative();
		}

		let result = fx.apply(sv.toNative(), argz);

		if (Array.isArray(result)) {
			var vals = new Array(result.length);
			for (let i = 0; i < vals.length; ++i) {
				vals[i] = s.realm.fromNative(result[i]);
			}
			return ArrayValue.make(vals, s.realm);
		} else {
			let nv = s.realm.fromNative(result);
			return nv;
		}
	};
	genfx.esperLength = fx.length;
	return genfx;
}

class StringPrototype extends EasyObjectValue {
	static get length$cew() {
		return StringPrototype.fromNative(0);
	}

	static *valueOf$e(thiz) {
		if (thiz.specTypeName === 'string') return thiz;
		if (thiz.specTypeName === 'object') {
			let pv = thiz.primativeValue;
			if (pv.specTypeName == 'string') return pv;
		}
		throw new TypeError('Couldnt get there.');
	}

	static *concat$e(thiz, args, realm) {
		let base = yield* thiz.toStringNative();
		let realArgs = yield* _g.map(args, function* (v) {
			return yield* v.toStringNative();
		});
		let out = String.prototype.concat.apply(base, realArgs);
		return realm.fromNative(out);
	}

	//TODO: Replacement arg can be a regex.
	static *replace$e(thiz, args, realm) {
		let base = yield* thiz.toStringNative();
		let realArgs = yield* _g.map(args, function* (v) {
			return yield* v.toStringNative();
		});
		let out = String.prototype.replace.apply(base, realArgs);
		return realm.fromNative(out);
	}

	static *padEnd$e(thiz, args, realm) {
		let base = yield* thiz.toStringNative();
		if (args.length < 1) return thiz;
		let length = yield* args[0].toIntNative();
		let hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';
		let pad = hasPad ? yield* args[1].toStringNative() : ' ';
		return realm.fromNative(strPad(base, length, pad, false));
	}

	static *padStart$e(thiz, args, realm) {
		let base = yield* thiz.toStringNative();
		if (args.length < 1) return thiz;
		let length = yield* args[0].toIntNative();
		let hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';
		let pad = hasPad ? yield* args[1].toStringNative() : ' ';
		return realm.fromNative(strPad(base, length, pad, true));
	}

	static *toString$e(thiz) {
		return yield* StringPrototype.valueOf$e(thiz);
	}
}

function strPad(base, length, pad, left) {
	if (length <= base.length) return base;
	let extra = length - base.length;
	let padding = new Array(1 + Math.ceil(extra / pad.length)).join(pad).substr(0, extra);
	return left ? padding + base : base + padding;
}

StringPrototype.prototype.wellKnownName = '%StringProtoype%';
StringPrototype.prototype.clazz = 'String';

StringPrototype.charAt$e = wrapStringPrototype('charAt');
StringPrototype.charCodeAt$e = wrapStringPrototype('charCodeAt');
StringPrototype.substring$e = wrapStringPrototype('substring');
StringPrototype.substr$e = wrapStringPrototype('substr');
StringPrototype.split$e = wrapStringPrototype('split');
StringPrototype.slice$e = wrapStringPrototype('slice');
StringPrototype.lastIndexOf$e = wrapStringPrototype('lastIndexOf');
StringPrototype.indexOf$e = wrapStringPrototype('indexOf');
StringPrototype.search$e = wrapStringPrototype('search');
StringPrototype.trim$e = wrapStringPrototype('trim');
StringPrototype.toUpperCase$e = wrapStringPrototype('toUpperCase');
StringPrototype.toLocaleUpperCase$e = wrapStringPrototype('toLocaleUpperCase');
StringPrototype.toLowerCase$e = wrapStringPrototype('toLowerCase');
StringPrototype.toLocaleLowerCase$e = wrapStringPrototype('toLocaleLowerCase');
StringPrototype.localeCompare$e = wrapStringPrototype('localeCompare');

module.exports = StringPrototype;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const PrimitiveValue = __webpack_require__(41);
const CompletionRecord = __webpack_require__(34);
const Value = __webpack_require__(33);
const _g = __webpack_require__(35);

function* forceArrayness(v) {
	if (!v.has('length')) {
		yield* v.set('length', Value.zero);
	}
}

function* getLength(v) {
	let m = yield* v.get('length');
	return yield* m.toUIntNative();
}

var defaultSeperator = Value.fromNative(',');

function* shiftRight(arr, start, amt) {
	amt = amt || 1;
	let len = yield* getLength(arr);
	for (let i = len - 1; i >= start; --i) {
		let cur = yield* arr.get(i);
		yield* arr.set(i + amt, cur);
	}
	yield* arr.set(start, Value.undef);
}

function* shiftLeft(arr, start, amt) {
	let len = yield* getLength(arr);
	for (let i = start; i < len; ++i) {
		let cur = yield* arr.get(i);
		yield* arr.set(i - amt, cur);
	}
	for (let i = len - amt; i < len; ++i) {
		delete arr.properties[i];
	}
	yield* arr.set('length', Value.fromNative(len - amt));
}

class ArrayPrototype extends EasyObjectValue {

	static *concat$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		var out = [];
		var toCopy = [thiz].concat(args);

		let idx = 0;
		for (let arr of toCopy) {
			if (arr instanceof PrimitiveValue) {
				out[idx++] = arr;
			} else if (!arr.has('length')) {
				out[idx++] = arr;
			} else {
				let l = yield* getLength(arr);
				for (let i = 0; i < l; ++i) {
					let tv = yield* arr.get(i, s.realm);
					out[idx++] = tv;
				}
			}
		}

		return ArrayValue.make(out, s.realm);
	}

	static *filter$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		let test = function* (v, i) {
			let res = yield* fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		var out = [];

		let l = yield* getLength(thiz);
		for (let i = 0; i < l; ++i) {
			let tv = yield* thiz.get(i);
			let tru = yield* test(tv, i);
			if (tru) out.push(tv);
		}

		return ArrayValue.make(out, s.realm);
	}

	static *every$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		let test = function* (v, i) {
			let res = yield* fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		let l = yield* getLength(thiz);
		for (let i = 0; i < l; ++i) {
			let tv = yield* thiz.get(i);
			let tru = yield* test(tv, i);
			if (!tru) return Value.false;
		}

		return Value.true;
	}

	static *some$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		let test = function* (v, i) {
			let res = yield* fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		let l = yield* getLength(thiz);
		for (let i = 0; i < l; ++i) {
			let tv = yield* thiz.get(i);
			let tru = yield* test(tv, i);
			if (tru) return Value.true;
		}

		return Value.false;
	}

	static *find$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		let test = function* (v, i) {
			let res = yield* fx.call(targ, [v, Value.fromNative(i), thiz], s);
			return res.truthy;
		};

		let l = yield* getLength(thiz);
		for (let i = 0; i < l; ++i) {
			let tv = yield* thiz.get(i);
			let tru = yield* test(tv, i);
			if (tru) return tv;
		}

		return Value.undef;
	}

	static *map$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (!fx.isCallable) return yield CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');

		if (args.length > 1) targ = args[1];

		let l = yield* getLength(thiz);
		let out = new Array(l);
		for (let i = 0; i < l; ++i) {
			if (!thiz.has(i)) continue;
			let tv = yield* thiz.get(i);
			let v = yield yield* fx.call(targ, [tv, Value.fromNative(i), thiz], s);
			out[i] = v;
		}

		return ArrayValue.make(out, s.realm);
	}

	static *forEach$e(thiz, args, s) {
		let fx = Value.undef;
		let targ = Value.undef;
		if (args.length > 0) fx = args[0];
		if (args.length > 1) targ = args[1];

		let l = yield* getLength(thiz);
		for (let i = 0; i < l; ++i) {
			if (!thiz.has(i)) continue;
			let v = yield* thiz.get(i);
			let res = yield* fx.call(targ, [v, Value.fromNative(i), thiz], s);
		}

		return Value.undef;
	}

	static *indexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield* getLength(thiz);
		let match = args[0] || Value.undef;
		let start = args[1] || Value.zero;
		let startn = (yield* start.toNumberValue()).native;

		if (isNaN(startn)) startn = 0;else if (startn < 0) startn = 0;

		if (l > startn) {
			for (let i = startn; i < l; ++i) {
				let v = yield* thiz.get(i);
				if (!v) v = Value.undef;
				if ((yield* v.tripleEquals(match)).truthy) return Value.fromNative(i);
			}
		}
		return Value.fromNative(-1);
	}

	static *lastIndexOf$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield* getLength(thiz);
		let match = args[0] || Value.undef;
		let startn = l - 1;

		if (args.length > 1) startn = yield* args[1].toIntNative();
		if (isNaN(startn)) startn = 0;
		if (startn < 0) startn += l;
		if (startn > l) startn = l;
		if (startn < 0) return Value.fromNative(-1);

		//if ( isNaN(startn) ) startn = l - 1;

		for (let i = startn; i >= 0; --i) {
			if (!thiz.has(i)) continue;
			let v = yield* thiz.get(i);
			if (!v) v = Value.undef;
			if ((yield* v.tripleEquals(match)).truthy) return Value.fromNative(i);
		}

		return Value.fromNative(-1);
	}

	static *join$e(thiz, args) {
		//TODO: Call ToObject() on thisz;
		let l = yield* getLength(thiz);
		let seperator = args[0] || defaultSeperator;
		let sepstr = (yield* seperator.toStringValue()).native;
		let strings = new Array(l);
		for (let i = 0; i < l; ++i) {
			if (!thiz.has(i)) continue;
			let v = yield* thiz.get(i);
			if (!v) strings[i] = '';else {
				if (v.specTypeName == 'undefined' || v.specTypeName == 'null') {
					continue;
				}
				let sv = yield* v.toStringValue();
				if (sv) strings[i] = sv.native;else strings[i] = undefined; //TODO: THROW HERE?
			}
		}
		return Value.fromNative(strings.join(sepstr));
	}

	static *push$e(thiz, args) {
		let l = yield* getLength(thiz);

		for (let i = 0; i < args.length; ++i) {
			yield* thiz.set(l + i, args[i]);
		}

		let nl = Value.fromNative(l + args.length);
		yield* thiz.set('length', nl);
		return Value.fromNative(l + args.length);
	}

	static *pop$e(thiz, args) {
		yield* forceArrayness(thiz);
		let l = yield* getLength(thiz);
		if (l < 1) return Value.undef;
		let val = yield* thiz.get(l - 1);
		yield* thiz.set('length', Value.fromNative(l - 1));
		return val;
	}

	static *reverse$e(thiz, args, s) {
		let l = yield* getLength(thiz);
		for (let i = 0; i < Math.floor(l / 2); ++i) {
			let lv = yield* thiz.get(i);
			let rv = yield* thiz.get(l - i - 1);
			yield* thiz.set(l - i - 1, lv, s);
			yield* thiz.set(i, rv, s);
		}

		return thiz;
	}

	static *reduce$e(thiz, args, s) {
		let l = yield* getLength(thiz);
		let acc;
		let fx = args[0];

		if (args.length < 1 || !fx.isCallable) {
			return yield CompletionRecord.makeTypeError(s.realm, 'First argument to reduce must be a function.');
		}

		if (args.length > 1) {
			acc = args[1];
		}

		for (let i = 0; i < l; ++i) {
			if (!thiz.has(i)) continue;
			let lv = yield* thiz.get(i);
			if (!acc) {
				acc = lv;
				continue;
			}
			acc = yield* fx.call(thiz, [acc, lv], s);
		}
		if (!acc) return yield CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');
		return acc;
	}

	//TODO: Factor some stuff out of reduce and reduce right into a common function.
	static *reduceRight$e(thiz, args, s) {
		let l = yield* getLength(thiz);
		let acc;
		let fx = args[0];

		if (args.length < 1 || !fx.isCallable) {
			return yield CompletionRecord.makeTypeError(s.realm, 'First argument to reduceRight must be a function.');
		}

		if (args.length > 1) {
			acc = args[1];
		}

		for (let i = l - 1; i >= 0; --i) {
			if (!thiz.has(i)) continue;
			let lv = yield* thiz.get(i);
			if (!acc) {
				acc = lv;
				continue;
			}
			acc = yield* fx.call(thiz, [acc, lv], s);
		}

		if (!acc) return yield CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');
		return acc;
	}

	static *shift$e(thiz, args) {
		yield* forceArrayness(thiz);
		let l = yield* getLength(thiz);
		if (l < 1) return Value.undef;

		let val = yield* thiz.get(0);
		yield* shiftLeft(thiz, 1, 1);
		return val;
	}

	static *slice$e(thiz, args, s) {
		//TODO: Call ToObject() on thisz;
		let length = yield* getLength(thiz);
		let result = [];

		let start = 0;
		let end = length;

		if (args.length > 0) start = yield* args[0].toIntNative();
		if (args.length > 1) end = yield* args[1].toIntNative();

		if (start < 0) start = length + start;
		if (end < 0) end = length + end;

		if (end > length) end = length;
		if (start < 0) start = 0;

		for (let i = start; i < end; ++i) {
			result.push((yield* thiz.get('' + i)));
		}

		return ArrayValue.make(result, s.realm);
	}

	static *splice$e(thiz, args, s) {
		//TODO: Call ToObject() on thisz;


		let result = [];

		let deleteCount;
		let len = yield* getLength(thiz);
		let start = len;

		if (isNaN(len)) return thiz;

		if (args.length > 0) start = yield* args[0].toIntNative();

		if (start > len) start = len;else if (start < 0) start = len + start;

		if (args.length > 1) deleteCount = yield* args[1].toIntNative();else deleteCount = len - start;

		if (deleteCount > len - start) deleteCount = len - start;
		if (deleteCount < 0) deleteCount = 0;

		let deleted = [];
		let toAdd = args.slice(2);
		let delta = toAdd.length - deleteCount;

		for (let i = start; i < start + deleteCount; ++i) {
			deleted.push((yield* thiz.get(i)));
		}

		if (delta > 0) yield* shiftRight(thiz, start, delta);
		if (delta < 0) yield* shiftLeft(thiz, start - delta, -delta);

		for (let i = 0; i < toAdd.length; ++i) {
			yield* thiz.set(start + i, toAdd[i]);
		}

		yield* thiz.set('length', Value.fromNative(len + delta));

		return ArrayValue.make(deleted, s.realm);
	}

	static *sort$e(thiz, args, s) {
		let length = yield* getLength(thiz);
		let vals = new Array(length);
		for (let i = 0; i < length; ++i) {
			vals[i] = yield* thiz.get(i);
		}

		let comp = function* (left, right) {
			let l = yield* left.toStringValue();
			if (!l) return false;
			let r = yield* right.toStringValue();
			if (!r) return true;
			return (yield* l.lt(r)).truthy;
		};

		if (args.length > 0) {
			let fx = args[0];
			if (!fx.isCallable) return yield CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');
			comp = function* (left, right) {
				let res = yield* fx.call(Value.undef, [left, right], s);
				return (yield* res.lt(Value.fromNative(0))).truthy;
			};
		}

		let nue = yield* _g.sort(vals, comp);

		for (let i = 0; i < length; ++i) {
			yield* thiz.set(i, nue[i]);
		}
		return thiz;
	}

	static *toString$e(thiz, args, s) {
		let joinfn = yield* thiz.get('join');
		if (!joinfn || !joinfn.isCallable) {
			let ots = yield* s.realm.ObjectPrototype.get('toString');
			return yield* ots.call(thiz, []);
		} else {
			return yield* joinfn.call(thiz, [defaultSeperator]);
		}
	}

	static *unshift$e(thiz, args, s) {
		let amt = args.length;
		let len = yield* getLength(thiz);
		if (isNaN(len)) len = 0;
		yield* shiftRight(thiz, 0, amt);
		for (let i = 0; i < amt; ++i) {
			yield* thiz.set(i, args[i]);
		}

		let nl = Value.fromNative(len + amt);
		yield* thiz.set('length', nl, s);
		return nl;
	}

	static *fill$e(thiz, args, s) {
		let l = yield* getLength(thiz);
		let value = args[0] || Value.undef;
		let start = args[1] || Value.zero;
		let startn = (yield* start.toNumberValue()).native;
		let end = args[2] || Value.fromNative(l);
		let endn = (yield* end.toNumberValue()).native;

		if (isNaN(startn)) startn = 0;else if (startn < 0) startn = l + startn;

		if (isNaN(endn)) endn = 0;else if (endn < 0) endn = l + endn;

		if (l > startn) {
			for (let i = startn; i < endn; ++i) {
				yield* thiz.set(i, value, s);
			}
		}
		return thiz;
	}

}

ArrayPrototype.prototype.wellKnownName = '%ArrayPrototype%';

module.exports = ArrayPrototype;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const CompletionRecord = __webpack_require__(34);

class ArrayObject extends EasyObjectValue {
	*call(thiz, args, s) {
		if (args.length === 1 && args[0].jsTypeName === 'number') {
			let len = args[0].toNative();
			if (len != len >> 0) {
				return yield CompletionRecord.makeRangeError(this.realm, "Invalid array length");
			}
			let result = ArrayValue.make([], s.realm);
			yield* result.set('length', args[0]);
			return result;
		}
		return ArrayValue.make(args, s.realm);
	}

	callPrototype(realm) {
		return realm.ArrayPrototype;
	}
	constructorFor(realm) {
		return realm.ArrayPrototype;
	}
	//objPrototype(realm) { return realm.Function; }


	static *isArray(thiz, args) {
		if (args.length < 1) return EasyObjectValue.false;
		return EasyObjectValue.fromNative(args[0] instanceof ArrayValue);
	}
}

module.exports = ArrayObject;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const CompletionRecord = __webpack_require__(34);
const PropertyDescriptor = __webpack_require__(40);

class StringObject extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (!asConstructor) {
			//Called as a function...
			if (args.length == 0) return scope.realm.fromNative('');
			return yield* args[0].toStringValue();
		}
		let len = 0;
		if (args.length > 0) {
			let pv = yield* args[0].toStringValue();
			len = pv.native.length;
			thiz.primativeValue = pv;
		} else {
			thiz.primativeValue = EasyObjectValue.emptyString;
		}

		var plen = new PropertyDescriptor(scope.realm.fromNative(len));
		plen.enumerable = false;
		plen.configurable = false;
		plen.writable = false;
		thiz.rawSetProperty('length', plen);
		return thiz;
	}

	callPrototype(realm) {
		return realm.StringPrototype;
	}
	constructorFor(realm) {
		return realm.StringPrototype;
	}

	static *fromCharCode(thiz, args) {
		let argz = new Array(args.length);
		for (let i = 0; i < args.length; ++i) {
			argz[i] = (yield* args[i].toNumberValue()).toNative();
		}

		return this.fromNative(String.fromCharCode.apply(String, argz));
	}

	static *raw(thiz, args) {
		let raw = yield* args[0].get('raw');
		let result = yield* raw.get(0);
		for (let i = 1; i < args.length; ++i) {
			result = yield* result.add(args[i]);
			result = yield* result.add((yield* raw.get(i)));
		}
		return result;
	}

}

module.exports = StringObject;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const CompletionRecord = __webpack_require__(34);

class NumberObject extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (!asConstructor) {
			if (args.length < 1) return EasyObjectValue.zero;
			return yield* args[0].toNumberValue();
		}
		let pv = EasyObjectValue.zero;
		if (args.length > 0) pv = yield* args[0].toNumberValue();
		thiz.primativeValue = pv;
	}

	callPrototype(realm) {
		return realm.NumberPrototype;
	}
	constructorFor(realm) {
		return realm.NumberPrototype;
	}

	static get MAX_VALUE$cew() {
		return Number.MAX_VALUE;
	}
	static get MIN_VALUE$cew() {
		return Number.MIN_VALUE;
	}
	static get POSITIVE_INFINITY$cew() {
		return Number.POSITIVE_INFINITY;
	}
	static get NEGATIVE_INFINITY$cew() {
		return Number.NEGATIVE_INFINITY;
	}
	static get NaN$cew() {
		return EasyObjectValue.nan;
	}

}

NumberObject.prototype.wellKnownName = '%Number%';
module.exports = NumberObject;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(41);
const EasyObjectValue = __webpack_require__(62);
const Value = __webpack_require__(33);

class BooleanPrototype extends EasyObjectValue {
	static *toString$e(thiz, argz) {
		let pv = thiz;
		if (thiz.specTypeName !== 'boolean') {
			pv = thiz.primativeValue;
		}

		if (pv.truthy) return Value.fromNative('true');else return Value.fromNative('false');
	}

	static *valueOf$e(thiz) {
		if (thiz.specTypeName === 'boolean') return thiz;
		if (thiz.specTypeName === 'object') {
			let pv = thiz.primativeValue;
			if (pv.specTypeName === 'boolean') return pv;
		}
		throw new TypeError('Couldnt get there.');
	}

}

module.exports = BooleanPrototype;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const EasyObjectValue = __webpack_require__(62);

class Boolean extends EasyObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (!asConstructor) {
			if (args.length < 1) return Value.false;
			return args[0].truthy ? Value.true : Value.false;
		}
		if (args.length > 0) {
			let pv = args[0].truthy ? Value.true : Value.false;
			thiz.primativeValue = pv;
		} else {
			thiz.primativeValue = false;
		}
	}

	callPrototype(realm) {
		return realm.BooleanPrototype;
	}
	constructorFor(realm) {
		return realm.BooleanPrototype;
	}
}

module.exports = Boolean;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const ArrayValue = __webpack_require__(49);

const CompletionRecord = __webpack_require__(34);

const EasyObjectValue = __webpack_require__(62);
const _g = __webpack_require__(35);

function* toRegexp(x, realm) {
	if (!x.regexp) {
		return yield CompletionRecord.makeTypeError(realm, 'Calling regex method on non regex.');
	}
	return x.regexp;
}

class RegExpProtoype extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.regexp = new RegExp();
	}
	static *test(thiz, args, s) {
		var rx = yield* toRegexp(thiz, s.realm);
		var str = undefined;
		if (args.length > 0) str = yield* args[0].toStringNative();
		return this.fromNative(rx.test(str));
	}

	static *exec(thiz, args, s) {
		var rx = yield* toRegexp(thiz, s.realm);
		let li = yield* thiz.get('lastIndex');
		li = yield* li.toIntNative();
		if (li < 0) li = 0; //Work around incorrect V8 behavior.
		rx.lastIndex = li;
		var str = undefined;
		if (args.length > 0) str = yield* args[0].toStringNative();

		var result = rx.exec(str);
		yield* thiz.set('lastIndex', Value.fromNative(rx.lastIndex));
		if (result === null) return Value.null;

		let wraped = yield* _g.map(result, function* (c) {
			return Value.fromNative(c, s.realm);
		});

		let out = ArrayValue.make(wraped, s.realm);
		yield* out.set('index', Value.fromNative(result.index));
		yield* out.set('input', Value.fromNative(result.input));
		return out;
	}

	static *compile(thiz, args, s) {
		yield* toRegexp(thiz, s.realm);
		let rv = yield* s.realm.RegExp.call(Value.null, args, s);
		let regexp = rv.regexp;
		thiz.regexp = regexp;
		yield* thiz.set('source', Value.fromNative(regexp.source));
		yield* thiz.set('global', Value.fromNative(regexp.global));
		yield* thiz.set('ignoreCase', Value.fromNative(regexp.ignoreCase));
		yield* thiz.set('multiline', Value.fromNative(regexp.multiline));
		yield* thiz.set('lastIndex', Value.zero);
		return Value.undef;
	}

	static get source$cw() {
		return Value.fromNative('(?:)');
	}
	static get global$cw() {
		return Value.fromNative(false);
	}
	static get ignoreCase$cw() {
		return Value.fromNative(false);
	}
	static get multiline$cw() {
		return Value.fromNative(false);
	}

	static *toString(thiz, args, s) {
		var rx = yield* toRegexp(thiz, s.realm);
		return Value.fromNative(rx.toString());
	}

	static get lastIndex() {
		return Value.fromNative(0);
	}
}

RegExpProtoype.prototype.wellKnownName = '%RegExpProtoype%';
RegExpProtoype.prototype.clazz = 'RegExp';

module.exports = RegExpProtoype;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);

const EasyObjectValue = __webpack_require__(62);
const RegExpValue = __webpack_require__(52);

class RegExpObject extends EasyObjectValue {

	*call(thiz, args, s) {
		let pattern = '';
		let flags = '';

		if (args.length > 0 && args[0] instanceof RegExpValue) {
			if (args.length > 1 && args[1].truthy) return yield CompletionRecord.makeTypeError(s.realm, 'Cannot supply flags when constructing one RegExp from another');
			return RegExpValue.make(new RegExp(args[0].regexp), s.realm);
		}

		if (args.length > 0 && args[0].jsTypeName !== 'undefined') pattern = yield* args[0].toStringNative();
		if (args.length > 1 && args[1].jsTypeName !== 'undefined') flags = yield* args[1].toStringNative();

		let rx;
		try {
			rx = new RegExp(pattern, flags);
		} catch (ex) {
			return yield new CompletionRecord(CompletionRecord.THROW, Value.fromNative(ex, s.realm));
		}

		return RegExpValue.make(rx, s.realm);
	}

	callPrototype(realm) {
		return realm.RegExpPrototype;
	}
	get callLength() {
		return 2;
	}
}

RegExpObject.prototype.wellKnownName = '%RegExp%';

module.exports = RegExpObject;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const EasyNativeFunction = __webpack_require__(60);
const Value = __webpack_require__(33);

class EsperObject extends EasyObjectValue {
	static *dump$cew(thiz, args) {
		console.log('Esper#dump:', args);
		if (typeof window !== 'undefined') window.dumped = args[0];
		return Value.undef;
	}

	static *str$cew(thiz, args) {
		var t = Value.undef;
		if (args.length > 0) t = args[0];
		return this.fromNative(t.debugString);
	}

	static *stack$cew(thiz, args, scope, extra) {
		return Value.fromNative(extra.evaluator.buildStacktrace().join('\n'));
	}

	static *globals$cew(thiz, args, scope, extra) {
		return scope.global.object;
	}

	static *scope$cew(thiz, args, scope, extra) {
		return scope.object;
	}
}

module.exports = EsperObject;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const PrimitiveValue = __webpack_require__(41);
const CompletionRecord = __webpack_require__(34);
const Value = __webpack_require__(33);

class ErrorPrototype extends EasyObjectValue {

	static get message() {
		return Value.emptyString;
	}
	static get name$() {
		return Value.fromNative('Error');
	}

	static *toString(thiz, argz, s) {
		let name = yield* (yield* thiz.get('name')).toStringNative();
		let message = yield* (yield* thiz.get('message')).toStringNative();
		if (name && message) return Value.fromNative(`${name}: ${message}`);else if (message) return Value.fromNative(message);else return Value.fromNative(name);
	}

}

ErrorPrototype.prototype.wellKnownName = '%ErrorPrototype%';

module.exports = ErrorPrototype;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const ArrayValue = __webpack_require__(49);
const PrimitiveValue = __webpack_require__(41);
const EmptyValue = __webpack_require__(45);
const ErrorValue = __webpack_require__(53);
const CompletionRecord = __webpack_require__(34);
const PropertyDescriptor = __webpack_require__(40);
const Value = __webpack_require__(33);

class ErrorObject extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.realm = realm;
	}
	makeOne() {
		let nue = new ErrorValue(this.realm);
		let p = this.properties['prototype'];
		if (p) nue.setPrototype(p.value);
		return nue;
	}

	make(message, name) {
		let nue = this.makeOne();
		if (message) {
			nue.setImmediate('message', Value.fromNative(message));
			nue.properties['message'].enumerable = false;
			nue.createNativeAnalog().message = message;
		}

		if (name) {
			nue.setImmediate('name', Value.fromNative(name));
			nue.properties['name'].enumerable = false;
			nue.createNativeAnalog().name = name;
		}

		return nue;
	}

	makeFrom(err) {
		let nue = this.makeOne();
		if (err.message) nue.setImmediate('message', Value.fromNative(err.message));
		if (err.name) nue.setImmediate('name', Value.fromNative(err.name));
		err.native = err;
		return nue;
	}

	*makeThisForNew() {
		return this.makeOne();
	}

	*call(thiz, args, s, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (!asConstructor) {
			thiz = this.makeOne();
		}

		if (args.length > 0) yield* thiz.set('message', args[0], s, { enumerable: false });
		if (args.length > 1) yield* thiz.set('fileName', args[1], s, { enumerable: false });
		if (args.length > 2) yield* thiz.set('lineNumber', args[2], s, { enumerable: false });

		return thiz;
	}

	makeErrorType(type) {
		let proto = new ObjectValue(this.realm);
		proto.setPrototype(this.realm.ErrorPrototype);
		proto.setImmediate('name', Value.fromNative(type.name));
		proto.properties.name.enumerable = false;
		proto.wellKnownName = `%${type.name}Prototype%`;
		proto.nativeClass = type;

		let obj = new ErrorObject(this.realm);
		obj.setPrototype(proto);
		obj.properties.prototype.value = proto;
		obj.wellKnownName = `%${type.name}%`;
		proto.rawSetProperty('constructor', new PropertyDescriptor(obj, false));
		return obj;
	}

	callPrototype(realm) {
		return realm.ErrorPrototype;
	}

}

ErrorObject.prototype.wellKnownName = '%Error%';

module.exports = ErrorObject;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);

const ObjectValue = __webpack_require__(39);

class AssertFunction extends ObjectValue {

	*rawCall(n, evalu, scope) {
		if (n.arguments.length == 0) return Value.undef;
		let args = new Array(n.arguments.length);
		let why = '';
		let check = n.arguments[0];
		switch (check.type) {
			case 'BinaryExpression':
				let left = yield* evalu.branch(check.left, scope);
				let right = yield* evalu.branch(check.right, scope);
				args[0] = yield* evalu.doBinaryEvaluation(check.operator, left, right, scope);
				why = n.arguments[0].srcName + ' (' + left.debugString + ' ' + check.operator + ' ' + right.debugString + ')';
				break;
			default:
				why = n.arguments[0].srcName || '???';
				args[0] = yield* evalu.branch(n.arguments[0], scope);
		}

		for (let i = 1; i < args.length; ++i) {
			args[i] = yield* evalu.branch(n.arguments[i], scope);
		}

		if (args[0].truthy) return Value.undef;
		if (args.length > 1) why = yield* args[1].toStringNative();
		let err = scope.realm.Error.make(why, 'AssertionError');
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	*call(thiz, args, scope, ext) {
		let val = Value.undef;
		if (args.length > 0) return Value.undef;
		if (val.truthy) return Value.undef;
		let reason = '';
		if (args.length > 1) {
			reason = (yield* args[1].toStringValue()).toNative();
		} else if (ext.callNode && ext.callNode.arguments[0]) {
			reason = ext.callNode.arguments[0].srcName || '???';
		}
		let err = scope.realm.Error.make(reason, 'AssertionError');
		return new CompletionRecord(CompletionRecord.THROW, err);
	}
}

module.exports = AssertFunction;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(62);
const Value = __webpack_require__(33);

function makeNumber(num) {
	return 0 + num.toNative();
}

function wrapMathFunction(name) {
	let fn = Math[name];
	return function* (thiz, args, realm) {
		let length = args.length;
		let argz = new Array(length);
		for (let i = 0; i < length; ++i) {
			if (i < args.length) argz[i] = args[i].toNative();else argz[i] = undefined;
		}

		let result = fn.apply(Math, argz);
		return Value.fromPrimativeNative(result);
	};
}

class MathObject extends EasyObjectValue {

	static get E$cew() {
		return Math.E;
	}
	static get LN10$cew() {
		return Math.LN10;
	}
	static get LN2$cew() {
		return Math.LN2;
	}
	static get LOG10E$cew() {
		return Math.LOG10E;
	}
	static get LOG2E$cew() {
		return Math.LOG2E;
	}
	static get PI$cew() {
		return Math.PI;
	}
	static get SQRT1_2$cew() {
		return Math.SQRT1_2;
	}
	static get SQRT2$cew() {
		return Math.SQRT2;
	}
}

MathObject.sqrt = wrapMathFunction('sqrt');
MathObject.atanh = wrapMathFunction('atanh');
MathObject.log2 = wrapMathFunction('log2');
MathObject.asinh = wrapMathFunction('asinh');
MathObject.log = wrapMathFunction('log');
MathObject.trunc = wrapMathFunction('trunc');
MathObject.max = wrapMathFunction('max');
MathObject.log10 = wrapMathFunction('log10');
MathObject.atan2 = wrapMathFunction('atan2');
MathObject.round = wrapMathFunction('round');
MathObject.exp = wrapMathFunction('exp');
MathObject.tan = wrapMathFunction('tan');
MathObject.floor = wrapMathFunction('floor');
MathObject.sign = wrapMathFunction('sign');
MathObject.fround = wrapMathFunction('fround');
MathObject.sin = wrapMathFunction('sin');
MathObject.tanh = wrapMathFunction('tanh');
MathObject.expm1 = wrapMathFunction('expm1');
MathObject.cbrt = wrapMathFunction('cbrt');
MathObject.cos = wrapMathFunction('cos');
MathObject.abs = wrapMathFunction('abs');
MathObject.acosh = wrapMathFunction('acosh');
MathObject.asin = wrapMathFunction('asin');
MathObject.ceil = wrapMathFunction('ceil');
MathObject.atan = wrapMathFunction('atan');
MathObject.cosh = wrapMathFunction('cosh');
MathObject.random = wrapMathFunction('random');
MathObject.log1p = wrapMathFunction('log1p');
MathObject.imul = wrapMathFunction('imul');
MathObject.hypot = wrapMathFunction('hypot');
MathObject.pow = wrapMathFunction('pow');
MathObject.sinh = wrapMathFunction('sinh');
MathObject.acos = wrapMathFunction('acos');
MathObject.min = wrapMathFunction('min');
MathObject.max = wrapMathFunction('max');

MathObject.prototype.clazz = 'Math';

module.exports = MathObject;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const CompletionRecord = __webpack_require__(34);

const EasyObjectValue = __webpack_require__(62);

function* proxy(op, thiz, args, s) {
	let realm = s.realm;
	let printer = realm.print;
	let strings = new Array(args.length);
	for (let i = 0; i < args.length; ++i) {
		strings[i] = yield* args[i].toStringNative();
	}
	//console[op].apply(console, strings);
	printer.apply(realm, strings);
	return Value.undef;
}

class Console extends EasyObjectValue {
	static *log(thiz, argz, s) {
		return yield* proxy('log', thiz, argz, s);
	}
	static *info(thiz, argz, s) {
		return yield* proxy('info', thiz, argz, s);
	}
	static *warn(thiz, argz, s) {
		return yield* proxy('warn', thiz, argz, s);
	}
	static *error(thiz, argz, s) {
		return yield* proxy('error', thiz, argz, s);
	}
	static *trace(thiz, argz, s) {
		return yield* proxy('trace', thiz, argz, s);
	}
}

module.exports = Console;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const EasyObjectValue = __webpack_require__(62);
const ObjectValue = __webpack_require__(39);
const PrimitiveValue = __webpack_require__(41);
const ArrayValue = __webpack_require__(49);
const CompletionRecord = __webpack_require__(34);

class JSONUtils {
	static *genJSONTokens(arr, o, map, str, strincr) {
		let str2 = str !== undefined ? str + strincr : undefined;

		if (o instanceof PrimitiveValue) {
			return arr.push(JSON.stringify(o.native));
		}

		if (map.has(o)) {
			return arr.push('[Circular]');
		}
		map.set(o, true);

		if (o instanceof ArrayValue) {
			arr.push('[');
			let length = yield* (yield* o.get('length')).toIntNative();
			for (let i = 0; i < length; ++i) {
				if (i > 0) arr.push(',');
				if (str !== undefined) arr.push('\n');
				let m = yield* o.get(i);
				if (str !== undefined) arr.push(str2);
				if (m) {
					if (m.jsTypeName == 'undefined') arr.push('null');else yield* JSONUtils.genJSONTokens(arr, m, map, str2, strincr);
				}
			}
			if (str !== undefined) arr.push('\n');
			if (str !== undefined) arr.push(str);
			arr.push(']');
			return;
		}

		arr.push('{');

		let first = true;
		for (let p of Object.keys(o.properties)) {
			let po = o.properties[p];
			if (!po.enumerable) continue;
			let v = yield* o.get(p);
			if (v.jsTypeName === 'function') continue;

			if (first) first = false;else arr.push(',');
			if (str !== undefined) arr.push('\n', str2);

			arr.push(JSON.stringify(p), ':');
			if (str !== undefined) arr.push(' ');
			yield* JSONUtils.genJSONTokens(arr, v, map, str2, strincr);
		}
		if (str !== undefined) arr.push('\n');
		arr.push('}');
	}
}

class JSONObject extends EasyObjectValue {
	static *parse(thiz, args, s) {
		let str = Value.emptyString;
		if (args.length > 0) str = yield* args[0].toStringNative();
		try {
			var out = JSON.parse(str, (k, o) => {
				if (o === undefined) return Value.undef;
				if (o === null) return Value.null;

				let prim = Value.fromPrimativeNative(o);
				if (prim) return prim;

				if (Array.isArray(o)) {
					return ArrayValue.make(o, s.realm);
				}

				let v = new ObjectValue(s.realm);
				for (var p in o) {
					v.setImmediate(p, o[p]);
				}
				return v;
			});
			return out;
		} catch (e) {
			yield new CompletionRecord(CompletionRecord.THROW, Value.fromNative(e, s.realm));
		}
	}

	static *stringify(thiz, args, s) {
		let arr = [];
		let v = Value.undef;
		let replacer = null;
		let str;
		let strincr;

		if (args.length > 0) v = args[0];
		if (args.length > 1) replacer = args[1];
		if (args.length > 2) {
			str = '';
			if (args[2].jsTypeName === 'number') {
				let len = yield* args[2].toIntNative();
				strincr = new Array(1 + len).join(' ');
			} else {
				strincr = yield* args[2].toStringNative();
			}
		}
		if (v.jsTypeName === 'undefined') return Value.undef;

		yield* JSONUtils.genJSONTokens(arr, v, new WeakMap(), str, strincr);
		return Value.fromNative(arr.join(''));
	}

}

module.exports = JSONObject;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(33);
const ObjectValue = __webpack_require__(39);
const EasyObjectValue = __webpack_require__(62);
const CompletionRecord = __webpack_require__(34);

class ProxyClass extends ObjectValue {
	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		if (!asConstructor) {
			return Value.fromNative(0);
		}
		thiz.target = args[0];
		thiz.handler = args[1];
		thiz.realm = scope.realm;
	}

	*makeThisForNew(realm) {
		return new ProxyValue(realm);
	}
}

class ProxyValue extends Value {
	*handlerImplemented(w) {
		let en = (yield* this.handler.inOperator(Value.fromNative(w))).toNative();
		return !!en;
	}

	ref(name, ctxthis) {
		return {
			name: name,
			object: this,
			isVariable: false,
			del: () => false, //Doesnt support being a generator yet.
			getValue: () => this.get(name, s),
			setValue: function (to, s) {
				return this.object.set(this.name, to, s);
			}
		};
	}

	*invokeHandler(w, args) {
		let fn = yield* this.handler.get(w);
		return yield* fn.call(Value.under, args.map(x => this.realm.fromNative(x)), this.realm.globalScope);
	}

	*get(name, realm, ctx) {
		if (yield* this.handlerImplemented('get')) {
			return yield* this.invokeHandler('get', [name]);
		}
		return yield* this.target.get(name, realm, ctx);
	}

	*set(name, value, realm, ctx) {
		if (yield* this.handlerImplemented('set')) {
			return yield* this.invokeHandler('set', [name, value]);
		}
		return yield* this.target.set(name, value, realm, ctx);
	}

	*inOperator(other) {
		if (yield* this.handlerImplemented('has')) {
			return yield* this.invokeHandler('has', [other]);
		}
		return yield* this.target.inOperator(other, realm, ctx);
	}

	*delete(name) {
		if (yield* this.handlerImplemented('delete')) {
			return yield* this.invokeHandler('delete', [other]);
		}
		return yield* this.target.delete(other, realm, ctx);
	}

	*call(thiz, args, scope, ext) {
		let asConstructor = ext && ext.asConstructor;
		let key = 'apply';
		if (asConstructor) key = 'construct';
		if (yield* this.handlerImplemented(key)) {
			return yield* this.invokeHandler(key, args);
		}
		if (!this.target.call) return CompletionRecord.makeTypeError(scope.realm, "Base object not invokeable.");else return yield* this.target.call(thiz, args, scope, ext);
	}

	*makeThisForNew(realm) {
		return this.target.makeThisForNew(realm);
	}

	toNative() {
		return "[Proxy]";
	}
}

module.exports = ProxyClass;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EvaluatorInstruction = __webpack_require__(50);

class DefaultRuntime {
	*time() {
		return Date();
	}
	*wait(time) {
		let ev = yield EvaluatorInstruction.getEvaluator;
		if (!ev.dispose) ev.dispose = [];
		return new Promise(function (res, rej) {
			let id = setTimeout(() => res(), time);
			ev.dispose.push(() => {
				clearTimeout(id);
			});
		});
	}
}

module.exports = DefaultRuntime;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const esprima = __webpack_require__(86);

module.exports = {
	name: 'lang-javascript',
	esprima: esprima,
	parser: function parser(code, options) {
		options = options || {};
		let opts = { loc: true, range: true };
		if (options.inFunctionBody) {
			opts.tolerant = true;
			opts.allowReturnOutsideFunction = true;
		}

		let ast = esprima.parse(code, opts);
		let errors = [];
		if (ast.errors) {
			errors = ast.errors.filter(x => {
				if (options.inFunctionBody && x.message === 'Illegal return statement') return false;
			});
		}
		delete ast.errors;
		if (errors.length > 0) throw errors[0];
		return ast;
	}
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
/* istanbul ignore next */
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/* istanbul ignore if */
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Copyright JS Foundation and other contributors, https://js.foundation/

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	"use strict";
	var comment_handler_1 = __webpack_require__(1);
	var parser_1 = __webpack_require__(3);
	var jsx_parser_1 = __webpack_require__(11);
	var tokenizer_1 = __webpack_require__(15);
	function parse(code, options, delegate) {
	    var commentHandler = null;
	    var proxyDelegate = function (node, metadata) {
	        if (delegate) {
	            delegate(node, metadata);
	        }
	        if (commentHandler) {
	            commentHandler.visit(node, metadata);
	        }
	    };
	    var parserDelegate = (typeof delegate === 'function') ? proxyDelegate : null;
	    var collectComment = false;
	    if (options) {
	        collectComment = (typeof options.comment === 'boolean' && options.comment);
	        var attachComment = (typeof options.attachComment === 'boolean' && options.attachComment);
	        if (collectComment || attachComment) {
	            commentHandler = new comment_handler_1.CommentHandler();
	            commentHandler.attach = attachComment;
	            options.comment = true;
	            parserDelegate = proxyDelegate;
	        }
	    }
	    var parser;
	    if (options && typeof options.jsx === 'boolean' && options.jsx) {
	        parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
	    }
	    else {
	        parser = new parser_1.Parser(code, options, parserDelegate);
	    }
	    var ast = (parser.parseProgram());
	    if (collectComment) {
	        ast.comments = commentHandler.comments;
	    }
	    if (parser.config.tokens) {
	        ast.tokens = parser.tokens;
	    }
	    if (parser.config.tolerant) {
	        ast.errors = parser.errorHandler.errors;
	    }
	    return ast;
	}
	exports.parse = parse;
	function tokenize(code, options, delegate) {
	    var tokenizer = new tokenizer_1.Tokenizer(code, options);
	    var tokens;
	    tokens = [];
	    try {
	        while (true) {
	            var token = tokenizer.getNextToken();
	            if (!token) {
	                break;
	            }
	            if (delegate) {
	                token = delegate(token);
	            }
	            tokens.push(token);
	        }
	    }
	    catch (e) {
	        tokenizer.errorHandler.tolerate(e);
	    }
	    if (tokenizer.errorHandler.tolerant) {
	        tokens.errors = tokenizer.errors();
	    }
	    return tokens;
	}
	exports.tokenize = tokenize;
	var syntax_1 = __webpack_require__(2);
	exports.Syntax = syntax_1.Syntax;
	// Sync with *.json manifests.
	exports.version = '3.1.3';


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var syntax_1 = __webpack_require__(2);
	var CommentHandler = (function () {
	    function CommentHandler() {
	        this.attach = false;
	        this.comments = [];
	        this.stack = [];
	        this.leading = [];
	        this.trailing = [];
	    }
	    CommentHandler.prototype.insertInnerComments = function (node, metadata) {
	        //  innnerComments for properties empty block
	        //  `function a() {/** comments **\/}`
	        if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
	            var innerComments = [];
	            for (var i = this.leading.length - 1; i >= 0; --i) {
	                var entry = this.leading[i];
	                if (metadata.end.offset >= entry.start) {
	                    innerComments.unshift(entry.comment);
	                    this.leading.splice(i, 1);
	                    this.trailing.splice(i, 1);
	                }
	            }
	            if (innerComments.length) {
	                node.innerComments = innerComments;
	            }
	        }
	    };
	    CommentHandler.prototype.findTrailingComments = function (node, metadata) {
	        var trailingComments = [];
	        if (this.trailing.length > 0) {
	            for (var i = this.trailing.length - 1; i >= 0; --i) {
	                var entry_1 = this.trailing[i];
	                if (entry_1.start >= metadata.end.offset) {
	                    trailingComments.unshift(entry_1.comment);
	                }
	            }
	            this.trailing.length = 0;
	            return trailingComments;
	        }
	        var entry = this.stack[this.stack.length - 1];
	        if (entry && entry.node.trailingComments) {
	            var firstComment = entry.node.trailingComments[0];
	            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
	                trailingComments = entry.node.trailingComments;
	                delete entry.node.trailingComments;
	            }
	        }
	        return trailingComments;
	    };
	    CommentHandler.prototype.findLeadingComments = function (node, metadata) {
	        var leadingComments = [];
	        var target;
	        while (this.stack.length > 0) {
	            var entry = this.stack[this.stack.length - 1];
	            if (entry && entry.start >= metadata.start.offset) {
	                target = this.stack.pop().node;
	            }
	            else {
	                break;
	            }
	        }
	        if (target) {
	            var count = target.leadingComments ? target.leadingComments.length : 0;
	            for (var i = count - 1; i >= 0; --i) {
	                var comment = target.leadingComments[i];
	                if (comment.range[1] <= metadata.start.offset) {
	                    leadingComments.unshift(comment);
	                    target.leadingComments.splice(i, 1);
	                }
	            }
	            if (target.leadingComments && target.leadingComments.length === 0) {
	                delete target.leadingComments;
	            }
	            return leadingComments;
	        }
	        for (var i = this.leading.length - 1; i >= 0; --i) {
	            var entry = this.leading[i];
	            if (entry.start <= metadata.start.offset) {
	                leadingComments.unshift(entry.comment);
	                this.leading.splice(i, 1);
	            }
	        }
	        return leadingComments;
	    };
	    CommentHandler.prototype.visitNode = function (node, metadata) {
	        if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
	            return;
	        }
	        this.insertInnerComments(node, metadata);
	        var trailingComments = this.findTrailingComments(node, metadata);
	        var leadingComments = this.findLeadingComments(node, metadata);
	        if (leadingComments.length > 0) {
	            node.leadingComments = leadingComments;
	        }
	        if (trailingComments.length > 0) {
	            node.trailingComments = trailingComments;
	        }
	        this.stack.push({
	            node: node,
	            start: metadata.start.offset
	        });
	    };
	    CommentHandler.prototype.visitComment = function (node, metadata) {
	        var type = (node.type[0] === 'L') ? 'Line' : 'Block';
	        var comment = {
	            type: type,
	            value: node.value
	        };
	        if (node.range) {
	            comment.range = node.range;
	        }
	        if (node.loc) {
	            comment.loc = node.loc;
	        }
	        this.comments.push(comment);
	        if (this.attach) {
	            var entry = {
	                comment: {
	                    type: type,
	                    value: node.value,
	                    range: [metadata.start.offset, metadata.end.offset]
	                },
	                start: metadata.start.offset
	            };
	            if (node.loc) {
	                entry.comment.loc = node.loc;
	            }
	            node.type = type;
	            this.leading.push(entry);
	            this.trailing.push(entry);
	        }
	    };
	    CommentHandler.prototype.visit = function (node, metadata) {
	        if (node.type === 'LineComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (node.type === 'BlockComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (this.attach) {
	            this.visitNode(node, metadata);
	        }
	    };
	    return CommentHandler;
	}());
	exports.CommentHandler = CommentHandler;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	exports.Syntax = {
	    AssignmentExpression: 'AssignmentExpression',
	    AssignmentPattern: 'AssignmentPattern',
	    ArrayExpression: 'ArrayExpression',
	    ArrayPattern: 'ArrayPattern',
	    ArrowFunctionExpression: 'ArrowFunctionExpression',
	    BlockStatement: 'BlockStatement',
	    BinaryExpression: 'BinaryExpression',
	    BreakStatement: 'BreakStatement',
	    CallExpression: 'CallExpression',
	    CatchClause: 'CatchClause',
	    ClassBody: 'ClassBody',
	    ClassDeclaration: 'ClassDeclaration',
	    ClassExpression: 'ClassExpression',
	    ConditionalExpression: 'ConditionalExpression',
	    ContinueStatement: 'ContinueStatement',
	    DoWhileStatement: 'DoWhileStatement',
	    DebuggerStatement: 'DebuggerStatement',
	    EmptyStatement: 'EmptyStatement',
	    ExportAllDeclaration: 'ExportAllDeclaration',
	    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
	    ExportNamedDeclaration: 'ExportNamedDeclaration',
	    ExportSpecifier: 'ExportSpecifier',
	    ExpressionStatement: 'ExpressionStatement',
	    ForStatement: 'ForStatement',
	    ForOfStatement: 'ForOfStatement',
	    ForInStatement: 'ForInStatement',
	    FunctionDeclaration: 'FunctionDeclaration',
	    FunctionExpression: 'FunctionExpression',
	    Identifier: 'Identifier',
	    IfStatement: 'IfStatement',
	    ImportDeclaration: 'ImportDeclaration',
	    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
	    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
	    ImportSpecifier: 'ImportSpecifier',
	    Literal: 'Literal',
	    LabeledStatement: 'LabeledStatement',
	    LogicalExpression: 'LogicalExpression',
	    MemberExpression: 'MemberExpression',
	    MetaProperty: 'MetaProperty',
	    MethodDefinition: 'MethodDefinition',
	    NewExpression: 'NewExpression',
	    ObjectExpression: 'ObjectExpression',
	    ObjectPattern: 'ObjectPattern',
	    Program: 'Program',
	    Property: 'Property',
	    RestElement: 'RestElement',
	    ReturnStatement: 'ReturnStatement',
	    SequenceExpression: 'SequenceExpression',
	    SpreadElement: 'SpreadElement',
	    Super: 'Super',
	    SwitchCase: 'SwitchCase',
	    SwitchStatement: 'SwitchStatement',
	    TaggedTemplateExpression: 'TaggedTemplateExpression',
	    TemplateElement: 'TemplateElement',
	    TemplateLiteral: 'TemplateLiteral',
	    ThisExpression: 'ThisExpression',
	    ThrowStatement: 'ThrowStatement',
	    TryStatement: 'TryStatement',
	    UnaryExpression: 'UnaryExpression',
	    UpdateExpression: 'UpdateExpression',
	    VariableDeclaration: 'VariableDeclaration',
	    VariableDeclarator: 'VariableDeclarator',
	    WhileStatement: 'WhileStatement',
	    WithStatement: 'WithStatement',
	    YieldExpression: 'YieldExpression'
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var assert_1 = __webpack_require__(4);
	var messages_1 = __webpack_require__(5);
	var error_handler_1 = __webpack_require__(6);
	var token_1 = __webpack_require__(7);
	var scanner_1 = __webpack_require__(8);
	var syntax_1 = __webpack_require__(2);
	var Node = __webpack_require__(10);
	var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
	var Parser = (function () {
	    function Parser(code, options, delegate) {
	        if (options === void 0) { options = {}; }
	        this.config = {
	            range: (typeof options.range === 'boolean') && options.range,
	            loc: (typeof options.loc === 'boolean') && options.loc,
	            source: null,
	            tokens: (typeof options.tokens === 'boolean') && options.tokens,
	            comment: (typeof options.comment === 'boolean') && options.comment,
	            tolerant: (typeof options.tolerant === 'boolean') && options.tolerant
	        };
	        if (this.config.loc && options.source && options.source !== null) {
	            this.config.source = String(options.source);
	        }
	        this.delegate = delegate;
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = this.config.tolerant;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = this.config.comment;
	        this.operatorPrecedence = {
	            ')': 0,
	            ';': 0,
	            ',': 0,
	            '=': 0,
	            ']': 0,
	            '||': 1,
	            '&&': 2,
	            '|': 3,
	            '^': 4,
	            '&': 5,
	            '==': 6,
	            '!=': 6,
	            '===': 6,
	            '!==': 6,
	            '<': 7,
	            '>': 7,
	            '<=': 7,
	            '>=': 7,
	            '<<': 8,
	            '>>': 8,
	            '>>>': 8,
	            '+': 9,
	            '-': 9,
	            '*': 11,
	            '/': 11,
	            '%': 11
	        };
	        this.sourceType = (options && options.sourceType === 'module') ? 'module' : 'script';
	        this.lookahead = null;
	        this.hasLineTerminator = false;
	        this.context = {
	            allowIn: true,
	            allowYield: true,
	            firstCoverInitializedNameError: null,
	            isAssignmentTarget: false,
	            isBindingElement: false,
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            labelSet: {},
	            strict: (this.sourceType === 'module')
	        };
	        this.tokens = [];
	        this.startMarker = {
	            index: 0,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: 0
	        };
	        this.lastMarker = {
	            index: 0,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: 0
	        };
	        this.nextToken();
	        this.lastMarker = {
	            index: this.scanner.index,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: this.scanner.lineStart
	        };
	    }
	    Parser.prototype.throwError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.lastMarker.lineNumber;
	        var column = this.lastMarker.index - this.lastMarker.lineStart + 1;
	        throw this.errorHandler.createError(index, line, column, msg);
	    };
	    Parser.prototype.tolerateError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.scanner.lineNumber;
	        var column = this.lastMarker.index - this.lastMarker.lineStart + 1;
	        this.errorHandler.tolerateError(index, line, column, msg);
	    };
	    // Throw an exception because of the token.
	    Parser.prototype.unexpectedTokenError = function (token, message) {
	        var msg = message || messages_1.Messages.UnexpectedToken;
	        var value;
	        if (token) {
	            if (!message) {
	                msg = (token.type === token_1.Token.EOF) ? messages_1.Messages.UnexpectedEOS :
	                    (token.type === token_1.Token.Identifier) ? messages_1.Messages.UnexpectedIdentifier :
	                        (token.type === token_1.Token.NumericLiteral) ? messages_1.Messages.UnexpectedNumber :
	                            (token.type === token_1.Token.StringLiteral) ? messages_1.Messages.UnexpectedString :
	                                (token.type === token_1.Token.Template) ? messages_1.Messages.UnexpectedTemplate :
	                                    messages_1.Messages.UnexpectedToken;
	                if (token.type === token_1.Token.Keyword) {
	                    if (this.scanner.isFutureReservedWord(token.value)) {
	                        msg = messages_1.Messages.UnexpectedReserved;
	                    }
	                    else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
	                        msg = messages_1.Messages.StrictReservedWord;
	                    }
	                }
	            }
	            value = (token.type === token_1.Token.Template) ? token.value.raw : token.value;
	        }
	        else {
	            value = 'ILLEGAL';
	        }
	        msg = msg.replace('%0', value);
	        if (token && typeof token.lineNumber === 'number') {
	            var index = token.start;
	            var line = token.lineNumber;
	            var column = token.start - this.lastMarker.lineStart + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	        else {
	            var index = this.lastMarker.index;
	            var line = this.lastMarker.lineNumber;
	            var column = index - this.lastMarker.lineStart + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	    };
	    Parser.prototype.throwUnexpectedToken = function (token, message) {
	        throw this.unexpectedTokenError(token, message);
	    };
	    Parser.prototype.tolerateUnexpectedToken = function (token, message) {
	        this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
	    };
	    Parser.prototype.collectComments = function () {
	        if (!this.config.comment) {
	            this.scanner.scanComments();
	        }
	        else {
	            var comments = this.scanner.scanComments();
	            if (comments.length > 0 && this.delegate) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var node = void 0;
	                    node = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
	                    };
	                    if (this.config.range) {
	                        node.range = e.range;
	                    }
	                    if (this.config.loc) {
	                        node.loc = e.loc;
	                    }
	                    var metadata = {
	                        start: {
	                            line: e.loc.start.line,
	                            column: e.loc.start.column,
	                            offset: e.range[0]
	                        },
	                        end: {
	                            line: e.loc.end.line,
	                            column: e.loc.end.column,
	                            offset: e.range[1]
	                        }
	                    };
	                    this.delegate(node, metadata);
	                }
	            }
	        }
	    };
	    // From internal representation to an external structure
	    Parser.prototype.getTokenRaw = function (token) {
	        return this.scanner.source.slice(token.start, token.end);
	    };
	    Parser.prototype.convertToken = function (token) {
	        var t;
	        t = {
	            type: token_1.TokenName[token.type],
	            value: this.getTokenRaw(token)
	        };
	        if (this.config.range) {
	            t.range = [token.start, token.end];
	        }
	        if (this.config.loc) {
	            t.loc = {
	                start: {
	                    line: this.startMarker.lineNumber,
	                    column: this.startMarker.index - this.startMarker.lineStart
	                },
	                end: {
	                    line: this.scanner.lineNumber,
	                    column: this.scanner.index - this.scanner.lineStart
	                }
	            };
	        }
	        if (token.regex) {
	            t.regex = token.regex;
	        }
	        return t;
	    };
	    Parser.prototype.nextToken = function () {
	        var token = this.lookahead;
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.lineNumber = this.scanner.lineNumber;
	        this.lastMarker.lineStart = this.scanner.lineStart;
	        this.collectComments();
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.lineNumber = this.scanner.lineNumber;
	        this.startMarker.lineStart = this.scanner.lineStart;
	        var next;
	        next = this.scanner.lex();
	        this.hasLineTerminator = (token && next) ? (token.lineNumber !== next.lineNumber) : false;
	        if (next && this.context.strict && next.type === token_1.Token.Identifier) {
	            if (this.scanner.isStrictModeReservedWord(next.value)) {
	                next.type = token_1.Token.Keyword;
	            }
	        }
	        this.lookahead = next;
	        if (this.config.tokens && next.type !== token_1.Token.EOF) {
	            this.tokens.push(this.convertToken(next));
	        }
	        return token;
	    };
	    Parser.prototype.nextRegexToken = function () {
	        this.collectComments();
	        var token = this.scanner.scanRegExp();
	        if (this.config.tokens) {
	            // Pop the previous token, '/' or '/='
	            // This is added from the lookahead token.
	            this.tokens.pop();
	            this.tokens.push(this.convertToken(token));
	        }
	        // Prime the next lookahead.
	        this.lookahead = token;
	        this.nextToken();
	        return token;
	    };
	    Parser.prototype.createNode = function () {
	        return {
	            index: this.startMarker.index,
	            line: this.startMarker.lineNumber,
	            column: this.startMarker.index - this.startMarker.lineStart
	        };
	    };
	    Parser.prototype.startNode = function (token) {
	        return {
	            index: token.start,
	            line: token.lineNumber,
	            column: token.start - token.lineStart
	        };
	    };
	    Parser.prototype.finalize = function (meta, node) {
	        if (this.config.range) {
	            node.range = [meta.index, this.lastMarker.index];
	        }
	        if (this.config.loc) {
	            node.loc = {
	                start: {
	                    line: meta.line,
	                    column: meta.column
	                },
	                end: {
	                    line: this.lastMarker.lineNumber,
	                    column: this.lastMarker.index - this.lastMarker.lineStart
	                }
	            };
	            if (this.config.source) {
	                node.loc.source = this.config.source;
	            }
	        }
	        if (this.delegate) {
	            var metadata = {
	                start: {
	                    line: meta.line,
	                    column: meta.column,
	                    offset: meta.index
	                },
	                end: {
	                    line: this.lastMarker.lineNumber,
	                    column: this.lastMarker.index - this.lastMarker.lineStart,
	                    offset: this.lastMarker.index
	                }
	            };
	            this.delegate(node, metadata);
	        }
	        return node;
	    };
	    // Expect the next token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    Parser.prototype.expect = function (value) {
	        var token = this.nextToken();
	        if (token.type !== token_1.Token.Punctuator || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
	    Parser.prototype.expectCommaSeparator = function () {
	        if (this.config.tolerant) {
	            var token = this.lookahead;
	            if (token.type === token_1.Token.Punctuator && token.value === ',') {
	                this.nextToken();
	            }
	            else if (token.type === token_1.Token.Punctuator && token.value === ';') {
	                this.nextToken();
	                this.tolerateUnexpectedToken(token);
	            }
	            else {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
	            }
	        }
	        else {
	            this.expect(',');
	        }
	    };
	    // Expect the next token to match the specified keyword.
	    // If not, an exception will be thrown.
	    Parser.prototype.expectKeyword = function (keyword) {
	        var token = this.nextToken();
	        if (token.type !== token_1.Token.Keyword || token.value !== keyword) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next token matches the specified punctuator.
	    Parser.prototype.match = function (value) {
	        return this.lookahead.type === token_1.Token.Punctuator && this.lookahead.value === value;
	    };
	    // Return true if the next token matches the specified keyword
	    Parser.prototype.matchKeyword = function (keyword) {
	        return this.lookahead.type === token_1.Token.Keyword && this.lookahead.value === keyword;
	    };
	    // Return true if the next token matches the specified contextual keyword
	    // (where an identifier is sometimes a keyword depending on the context)
	    Parser.prototype.matchContextualKeyword = function (keyword) {
	        return this.lookahead.type === token_1.Token.Identifier && this.lookahead.value === keyword;
	    };
	    // Return true if the next token is an assignment operator
	    Parser.prototype.matchAssign = function () {
	        if (this.lookahead.type !== token_1.Token.Punctuator) {
	            return false;
	        }
	        var op = this.lookahead.value;
	        return op === '=' ||
	            op === '*=' ||
	            op === '**=' ||
	            op === '/=' ||
	            op === '%=' ||
	            op === '+=' ||
	            op === '-=' ||
	            op === '<<=' ||
	            op === '>>=' ||
	            op === '>>>=' ||
	            op === '&=' ||
	            op === '^=' ||
	            op === '|=';
	    };
	    // Cover grammar support.
	    //
	    // When an assignment expression position starts with an left parenthesis, the determination of the type
	    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
	    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
	    //
	    // There are three productions that can be parsed in a parentheses pair that needs to be determined
	    // after the outermost pair is closed. They are:
	    //
	    //   1. AssignmentExpression
	    //   2. BindingElements
	    //   3. AssignmentTargets
	    //
	    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
	    // binding element or assignment target.
	    //
	    // The three productions have the relationship:
	    //
	    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
	    //
	    // with a single exception that CoverInitializedName when used directly in an Expression, generates
	    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
	    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
	    //
	    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
	    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
	    // the CoverInitializedName check is conducted.
	    //
	    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
	    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
	    // pattern. The CoverInitializedName check is deferred.
	    Parser.prototype.isolateCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        if (this.context.firstCoverInitializedNameError !== null) {
	            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
	        }
	        this.context.isBindingElement = previousIsBindingElement;
	        this.context.isAssignmentTarget = previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.inheritCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
	        this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.consumeSemicolon = function () {
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else if (!this.hasLineTerminator) {
	            if (this.lookahead.type !== token_1.Token.EOF && !this.match('}')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            this.lastMarker.index = this.startMarker.index;
	            this.lastMarker.lineNumber = this.startMarker.lineNumber;
	            this.lastMarker.lineStart = this.startMarker.lineStart;
	        }
	    };
	    // ECMA-262 12.2 Primary Expressions
	    Parser.prototype.parsePrimaryExpression = function () {
	        var node = this.createNode();
	        var expr;
	        var value, token, raw;
	        switch (this.lookahead.type) {
	            case token_1.Token.Identifier:
	                if (this.sourceType === 'module' && this.lookahead.value === 'await') {
	                    this.tolerateUnexpectedToken(this.lookahead);
	                }
	                expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
	                break;
	            case token_1.Token.NumericLiteral:
	            case token_1.Token.StringLiteral:
	                if (this.context.strict && this.lookahead.octal) {
	                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
	                }
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case token_1.Token.BooleanLiteral:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                token.value = (token.value === 'true');
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case token_1.Token.NullLiteral:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                token.value = null;
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case token_1.Token.Template:
	                expr = this.parseTemplateLiteral();
	                break;
	            case token_1.Token.Punctuator:
	                value = this.lookahead.value;
	                switch (value) {
	                    case '(':
	                        this.context.isBindingElement = false;
	                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
	                        break;
	                    case '[':
	                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
	                        break;
	                    case '{':
	                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
	                        break;
	                    case '/':
	                    case '/=':
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                        this.scanner.index = this.startMarker.index;
	                        token = this.nextRegexToken();
	                        raw = this.getTokenRaw(token);
	                        expr = this.finalize(node, new Node.RegexLiteral(token.value, raw, token.regex));
	                        break;
	                    default:
	                        this.throwUnexpectedToken(this.nextToken());
	                }
	                break;
	            case token_1.Token.Keyword:
	                if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
	                    expr = this.parseIdentifierName();
	                }
	                else if (!this.context.strict && this.matchKeyword('let')) {
	                    expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
	                }
	                else {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    if (this.matchKeyword('function')) {
	                        expr = this.parseFunctionExpression();
	                    }
	                    else if (this.matchKeyword('this')) {
	                        this.nextToken();
	                        expr = this.finalize(node, new Node.ThisExpression());
	                    }
	                    else if (this.matchKeyword('class')) {
	                        expr = this.parseClassExpression();
	                    }
	                    else {
	                        this.throwUnexpectedToken(this.nextToken());
	                    }
	                }
	                break;
	            default:
	                this.throwUnexpectedToken(this.nextToken());
	        }
	        return expr;
	    };
	    // ECMA-262 12.2.5 Array Initializer
	    Parser.prototype.parseSpreadElement = function () {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
	        return this.finalize(node, new Node.SpreadElement(arg));
	    };
	    Parser.prototype.parseArrayInitializer = function () {
	        var node = this.createNode();
	        var elements = [];
	        this.expect('[');
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else if (this.match('...')) {
	                var element = this.parseSpreadElement();
	                if (!this.match(']')) {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    this.expect(',');
	                }
	                elements.push(element);
	            }
	            else {
	                elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayExpression(elements));
	    };
	    // ECMA-262 12.2.6 Object Initializer
	    Parser.prototype.parsePropertyMethod = function (params) {
	        this.context.isAssignmentTarget = false;
	        this.context.isBindingElement = false;
	        var previousStrict = this.context.strict;
	        var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
	        if (this.context.strict && params.firstRestricted) {
	            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
	        }
	        if (this.context.strict && params.stricted) {
	            this.tolerateUnexpectedToken(params.stricted, params.message);
	        }
	        this.context.strict = previousStrict;
	        return body;
	    };
	    Parser.prototype.parsePropertyMethodFunction = function () {
	        var isGenerator = false;
	        var node = this.createNode();
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = false;
	        var params = this.parseFormalParameters();
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    Parser.prototype.parseObjectPropertyKey = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        var key = null;
	        switch (token.type) {
	            case token_1.Token.StringLiteral:
	            case token_1.Token.NumericLiteral:
	                if (this.context.strict && token.octal) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
	                }
	                var raw = this.getTokenRaw(token);
	                key = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case token_1.Token.Identifier:
	            case token_1.Token.BooleanLiteral:
	            case token_1.Token.NullLiteral:
	            case token_1.Token.Keyword:
	                key = this.finalize(node, new Node.Identifier(token.value));
	                break;
	            case token_1.Token.Punctuator:
	                if (token.value === '[') {
	                    key = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    this.expect(']');
	                }
	                else {
	                    this.throwUnexpectedToken(token);
	                }
	                break;
	            default:
	                this.throwUnexpectedToken(token);
	        }
	        return key;
	    };
	    Parser.prototype.isPropertyKey = function (key, value) {
	        return (key.type === syntax_1.Syntax.Identifier && key.name === value) ||
	            (key.type === syntax_1.Syntax.Literal && key.value === value);
	    };
	    Parser.prototype.parseObjectProperty = function (hasProto) {
	        var node = this.createNode();
	        var token = this.lookahead;
	        var kind;
	        var key;
	        var value;
	        var computed = false;
	        var method = false;
	        var shorthand = false;
	        if (token.type === token_1.Token.Identifier) {
	            this.nextToken();
	            key = this.finalize(node, new Node.Identifier(token.value));
	        }
	        else if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === token_1.Token.Identifier && token.value === 'get' && lookaheadPropertyKey) {
	            kind = 'get';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.context.allowYield = false;
	            value = this.parseGetterMethod();
	        }
	        else if (token.type === token_1.Token.Identifier && token.value === 'set' && lookaheadPropertyKey) {
	            kind = 'set';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseSetterMethod();
	        }
	        else if (token.type === token_1.Token.Punctuator && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        else {
	            if (!key) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            kind = 'init';
	            if (this.match(':')) {
	                if (!computed && this.isPropertyKey(key, '__proto__')) {
	                    if (hasProto.value) {
	                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
	                    }
	                    hasProto.value = true;
	                }
	                this.nextToken();
	                value = this.inheritCoverGrammar(this.parseAssignmentExpression);
	            }
	            else if (this.match('(')) {
	                value = this.parsePropertyMethodFunction();
	                method = true;
	            }
	            else if (token.type === token_1.Token.Identifier) {
	                var id = this.finalize(node, new Node.Identifier(token.value));
	                if (this.match('=')) {
	                    this.context.firstCoverInitializedNameError = this.lookahead;
	                    this.nextToken();
	                    shorthand = true;
	                    var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    value = this.finalize(node, new Node.AssignmentPattern(id, init));
	                }
	                else {
	                    shorthand = true;
	                    value = id;
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectInitializer = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var properties = [];
	        var hasProto = { value: false };
	        while (!this.match('}')) {
	            properties.push(this.parseObjectProperty(hasProto));
	            if (!this.match('}')) {
	                this.expectCommaSeparator();
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectExpression(properties));
	    };
	    // ECMA-262 12.2.9 Template Literals
	    Parser.prototype.parseTemplateHead = function () {
	        assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
	        var node = this.createNode();
	        var token = this.nextToken();
	        var value = {
	            raw: token.value.raw,
	            cooked: token.value.cooked
	        };
	        return this.finalize(node, new Node.TemplateElement(value, token.tail));
	    };
	    Parser.prototype.parseTemplateElement = function () {
	        if (this.lookahead.type !== token_1.Token.Template) {
	            this.throwUnexpectedToken();
	        }
	        var node = this.createNode();
	        var token = this.nextToken();
	        var value = {
	            raw: token.value.raw,
	            cooked: token.value.cooked
	        };
	        return this.finalize(node, new Node.TemplateElement(value, token.tail));
	    };
	    Parser.prototype.parseTemplateLiteral = function () {
	        var node = this.createNode();
	        var expressions = [];
	        var quasis = [];
	        var quasi = this.parseTemplateHead();
	        quasis.push(quasi);
	        while (!quasi.tail) {
	            expressions.push(this.parseExpression());
	            quasi = this.parseTemplateElement();
	            quasis.push(quasi);
	        }
	        return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
	    };
	    // ECMA-262 12.2.10 The Grouping Operator
	    Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	            case syntax_1.Syntax.MemberExpression:
	            case syntax_1.Syntax.RestElement:
	            case syntax_1.Syntax.AssignmentPattern:
	                break;
	            case syntax_1.Syntax.SpreadElement:
	                expr.type = syntax_1.Syntax.RestElement;
	                this.reinterpretExpressionAsPattern(expr.argument);
	                break;
	            case syntax_1.Syntax.ArrayExpression:
	                expr.type = syntax_1.Syntax.ArrayPattern;
	                for (var i = 0; i < expr.elements.length; i++) {
	                    if (expr.elements[i] !== null) {
	                        this.reinterpretExpressionAsPattern(expr.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.ObjectExpression:
	                expr.type = syntax_1.Syntax.ObjectPattern;
	                for (var i = 0; i < expr.properties.length; i++) {
	                    this.reinterpretExpressionAsPattern(expr.properties[i].value);
	                }
	                break;
	            case syntax_1.Syntax.AssignmentExpression:
	                expr.type = syntax_1.Syntax.AssignmentPattern;
	                delete expr.operator;
	                this.reinterpretExpressionAsPattern(expr.left);
	                break;
	            default:
	                // Allow other node type for tolerant parsing.
	                break;
	        }
	    };
	    Parser.prototype.parseGroupExpression = function () {
	        var expr;
	        this.expect('(');
	        if (this.match(')')) {
	            this.nextToken();
	            if (!this.match('=>')) {
	                this.expect('=>');
	            }
	            expr = {
	                type: ArrowParameterPlaceHolder,
	                params: []
	            };
	        }
	        else {
	            var startToken = this.lookahead;
	            var params = [];
	            if (this.match('...')) {
	                expr = this.parseRestElement(params);
	                this.expect(')');
	                if (!this.match('=>')) {
	                    this.expect('=>');
	                }
	                expr = {
	                    type: ArrowParameterPlaceHolder,
	                    params: [expr]
	                };
	            }
	            else {
	                var arrow = false;
	                this.context.isBindingElement = true;
	                expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                if (this.match(',')) {
	                    var expressions = [];
	                    this.context.isAssignmentTarget = false;
	                    expressions.push(expr);
	                    while (this.startMarker.index < this.scanner.length) {
	                        if (!this.match(',')) {
	                            break;
	                        }
	                        this.nextToken();
	                        if (this.match('...')) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            expressions.push(this.parseRestElement(params));
	                            this.expect(')');
	                            if (!this.match('=>')) {
	                                this.expect('=>');
	                            }
	                            this.context.isBindingElement = false;
	                            for (var i = 0; i < expressions.length; i++) {
	                                this.reinterpretExpressionAsPattern(expressions[i]);
	                            }
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: expressions
	                            };
	                        }
	                        else {
	                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        if (arrow) {
	                            break;
	                        }
	                    }
	                    if (!arrow) {
	                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	                    }
	                }
	                if (!arrow) {
	                    this.expect(')');
	                    if (this.match('=>')) {
	                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: [expr]
	                            };
	                        }
	                        if (!arrow) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
	                                for (var i = 0; i < expr.expressions.length; i++) {
	                                    this.reinterpretExpressionAsPattern(expr.expressions[i]);
	                                }
	                            }
	                            else {
	                                this.reinterpretExpressionAsPattern(expr);
	                            }
	                            var params_1 = (expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr]);
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: params_1
	                            };
	                        }
	                    }
	                    this.context.isBindingElement = false;
	                }
	            }
	        }
	        return expr;
	    };
	    // ECMA-262 12.3 Left-Hand-Side Expressions
	    Parser.prototype.parseArguments = function () {
	        this.expect('(');
	        var args = [];
	        if (!this.match(')')) {
	            while (true) {
	                var expr = this.match('...') ? this.parseSpreadElement() :
	                    this.isolateCoverGrammar(this.parseAssignmentExpression);
	                args.push(expr);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expectCommaSeparator();
	            }
	        }
	        this.expect(')');
	        return args;
	    };
	    Parser.prototype.isIdentifierName = function (token) {
	        return token.type === token_1.Token.Identifier ||
	            token.type === token_1.Token.Keyword ||
	            token.type === token_1.Token.BooleanLiteral ||
	            token.type === token_1.Token.NullLiteral;
	    };
	    Parser.prototype.parseIdentifierName = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (!this.isIdentifierName(token)) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseNewExpression = function () {
	        var node = this.createNode();
	        var id = this.parseIdentifierName();
	        assert_1.assert(id.name === 'new', 'New expression must start with `new`');
	        var expr;
	        if (this.match('.')) {
	            this.nextToken();
	            if (this.lookahead.type === token_1.Token.Identifier && this.context.inFunctionBody && this.lookahead.value === 'target') {
	                var property = this.parseIdentifierName();
	                expr = new Node.MetaProperty(id, property);
	            }
	            else {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
	            var args = this.match('(') ? this.parseArguments() : [];
	            expr = new Node.NewExpression(callee, args);
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return this.finalize(node, expr);
	    };
	    Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
	        var startToken = this.lookahead;
	        var previousAllowIn = this.context.allowIn;
	        this.context.allowIn = true;
	        var expr;
	        if (this.matchKeyword('super') && this.context.inFunctionBody) {
	            expr = this.createNode();
	            this.nextToken();
	            expr = this.finalize(expr, new Node.Super());
	            if (!this.match('(') && !this.match('.') && !this.match('[')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        }
	        while (true) {
	            if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.match('(')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = false;
	                var args = this.parseArguments();
	                expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
	            }
	            else if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === token_1.Token.Template && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        this.context.allowIn = previousAllowIn;
	        return expr;
	    };
	    Parser.prototype.parseSuper = function () {
	        var node = this.createNode();
	        this.expectKeyword('super');
	        if (!this.match('[') && !this.match('.')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        return this.finalize(node, new Node.Super());
	    };
	    Parser.prototype.parseLeftHandSideExpression = function () {
	        assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
	        var node = this.startNode(this.lookahead);
	        var expr = (this.matchKeyword('super') && this.context.inFunctionBody) ? this.parseSuper() :
	            this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        while (true) {
	            if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === token_1.Token.Template && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        return expr;
	    };
	    // ECMA-262 12.4 Update Expressions
	    Parser.prototype.parseUpdateExpression = function () {
	        var expr;
	        var startToken = this.lookahead;
	        if (this.match('++') || this.match('--')) {
	            var node = this.startNode(startToken);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                this.tolerateError(messages_1.Messages.StrictLHSPrefix);
	            }
	            if (!this.context.isAssignmentTarget) {
	                this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	            }
	            var prefix = true;
	            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	            if (!this.hasLineTerminator && this.lookahead.type === token_1.Token.Punctuator) {
	                if (this.match('++') || this.match('--')) {
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
	                    }
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    var operator = this.nextToken().value;
	                    var prefix = false;
	                    expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
	                }
	            }
	        }
	        return expr;
	    };
	    // ECMA-262 12.5 Unary Operators
	    Parser.prototype.parseUnaryExpression = function () {
	        var expr;
	        if (this.match('+') || this.match('-') || this.match('~') || this.match('!') ||
	            this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
	            var node = this.startNode(this.lookahead);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
	            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
	                this.tolerateError(messages_1.Messages.StrictDelete);
	            }
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else {
	            expr = this.parseUpdateExpression();
	        }
	        return expr;
	    };
	    Parser.prototype.parseExponentiationExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	        if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
	            this.nextToken();
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
	        }
	        return expr;
	    };
	    // ECMA-262 12.6 Exponentiation Operators
	    // ECMA-262 12.7 Multiplicative Operators
	    // ECMA-262 12.8 Additive Operators
	    // ECMA-262 12.9 Bitwise Shift Operators
	    // ECMA-262 12.10 Relational Operators
	    // ECMA-262 12.11 Equality Operators
	    // ECMA-262 12.12 Binary Bitwise Operators
	    // ECMA-262 12.13 Binary Logical Operators
	    Parser.prototype.binaryPrecedence = function (token) {
	        var op = token.value;
	        var precedence;
	        if (token.type === token_1.Token.Punctuator) {
	            precedence = this.operatorPrecedence[op] || 0;
	        }
	        else if (token.type === token_1.Token.Keyword) {
	            precedence = (op === 'instanceof' || (this.context.allowIn && op === 'in')) ? 7 : 0;
	        }
	        else {
	            precedence = 0;
	        }
	        return precedence;
	    };
	    Parser.prototype.parseBinaryExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
	        var token = this.lookahead;
	        var prec = this.binaryPrecedence(token);
	        if (prec > 0) {
	            this.nextToken();
	            token.prec = prec;
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var markers = [startToken, this.lookahead];
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            var stack = [left, token, right];
	            while (true) {
	                prec = this.binaryPrecedence(this.lookahead);
	                if (prec <= 0) {
	                    break;
	                }
	                // Reduce: make a binary expression from the three topmost entries.
	                while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
	                    right = stack.pop();
	                    var operator = stack.pop().value;
	                    left = stack.pop();
	                    markers.pop();
	                    var node = this.startNode(markers[markers.length - 1]);
	                    stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
	                }
	                // Shift.
	                token = this.nextToken();
	                token.prec = prec;
	                stack.push(token);
	                markers.push(this.lookahead);
	                stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
	            }
	            // Final reduce to clean-up the stack.
	            var i = stack.length - 1;
	            expr = stack[i];
	            markers.pop();
	            while (i > 1) {
	                var node = this.startNode(markers.pop());
	                expr = this.finalize(node, new Node.BinaryExpression(stack[i - 1].value, stack[i - 2], expr));
	                i -= 2;
	            }
	        }
	        return expr;
	    };
	    // ECMA-262 12.14 Conditional Operator
	    Parser.prototype.parseConditionalExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
	        if (this.match('?')) {
	            this.nextToken();
	            var previousAllowIn = this.context.allowIn;
	            this.context.allowIn = true;
	            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowIn = previousAllowIn;
	            this.expect(':');
	            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return expr;
	    };
	    // ECMA-262 12.15 Assignment Operators
	    Parser.prototype.checkPatternParam = function (options, param) {
	        switch (param.type) {
	            case syntax_1.Syntax.Identifier:
	                this.validateParam(options, param, param.name);
	                break;
	            case syntax_1.Syntax.RestElement:
	                this.checkPatternParam(options, param.argument);
	                break;
	            case syntax_1.Syntax.AssignmentPattern:
	                this.checkPatternParam(options, param.left);
	                break;
	            case syntax_1.Syntax.ArrayPattern:
	                for (var i = 0; i < param.elements.length; i++) {
	                    if (param.elements[i] !== null) {
	                        this.checkPatternParam(options, param.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.YieldExpression:
	                break;
	            default:
	                assert_1.assert(param.type === syntax_1.Syntax.ObjectPattern, 'Invalid type');
	                for (var i = 0; i < param.properties.length; i++) {
	                    this.checkPatternParam(options, param.properties[i].value);
	                }
	                break;
	        }
	    };
	    Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
	        var params = [expr];
	        var options;
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	                break;
	            case ArrowParameterPlaceHolder:
	                params = expr.params;
	                break;
	            default:
	                return null;
	        }
	        options = {
	            paramSet: {}
	        };
	        for (var i = 0; i < params.length; ++i) {
	            var param = params[i];
	            if (param.type === syntax_1.Syntax.AssignmentPattern) {
	                if (param.right.type === syntax_1.Syntax.YieldExpression) {
	                    if (param.right.argument) {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                    param.right.type = syntax_1.Syntax.Identifier;
	                    param.right.name = 'yield';
	                    delete param.right.argument;
	                    delete param.right.delegate;
	                }
	            }
	            this.checkPatternParam(options, param);
	            params[i] = param;
	        }
	        if (this.context.strict || !this.context.allowYield) {
	            for (var i = 0; i < params.length; ++i) {
	                var param = params[i];
	                if (param.type === syntax_1.Syntax.YieldExpression) {
	                    this.throwUnexpectedToken(this.lookahead);
	                }
	            }
	        }
	        if (options.message === messages_1.Messages.StrictParamDupe) {
	            var token = this.context.strict ? options.stricted : options.firstRestricted;
	            this.throwUnexpectedToken(token, options.message);
	        }
	        return {
	            params: params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.parseAssignmentExpression = function () {
	        var expr;
	        if (!this.context.allowYield && this.matchKeyword('yield')) {
	            expr = this.parseYieldExpression();
	        }
	        else {
	            var startToken = this.lookahead;
	            var token = startToken;
	            expr = this.parseConditionalExpression();
	            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
	                // ECMA-262 14.2 Arrow Function Definitions
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                var list = this.reinterpretAsCoverFormalsList(expr);
	                if (list) {
	                    if (this.hasLineTerminator) {
	                        this.tolerateUnexpectedToken(this.lookahead);
	                    }
	                    this.context.firstCoverInitializedNameError = null;
	                    var previousStrict = this.context.strict;
	                    var previousAllowYield = this.context.allowYield;
	                    this.context.allowYield = true;
	                    var node = this.startNode(startToken);
	                    this.expect('=>');
	                    var body = this.match('{') ? this.parseFunctionSourceElements() :
	                        this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    var expression = body.type !== syntax_1.Syntax.BlockStatement;
	                    if (this.context.strict && list.firstRestricted) {
	                        this.throwUnexpectedToken(list.firstRestricted, list.message);
	                    }
	                    if (this.context.strict && list.stricted) {
	                        this.tolerateUnexpectedToken(list.stricted, list.message);
	                    }
	                    expr = this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
	                    this.context.strict = previousStrict;
	                    this.context.allowYield = previousAllowYield;
	                }
	            }
	            else {
	                if (this.matchAssign()) {
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
	                        var id = (expr);
	                        if (this.scanner.isRestrictedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
	                        }
	                        if (this.scanner.isStrictModeReservedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	                        }
	                    }
	                    if (!this.match('=')) {
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                    }
	                    else {
	                        this.reinterpretExpressionAsPattern(expr);
	                    }
	                    token = this.nextToken();
	                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(token.value, expr, right));
	                    this.context.firstCoverInitializedNameError = null;
	                }
	            }
	        }
	        return expr;
	    };
	    // ECMA-262 12.16 Comma Operator
	    Parser.prototype.parseExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        if (this.match(',')) {
	            var expressions = [];
	            expressions.push(expr);
	            while (this.startMarker.index < this.scanner.length) {
	                if (!this.match(',')) {
	                    break;
	                }
	                this.nextToken();
	                expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	            }
	            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	        }
	        return expr;
	    };
	    // ECMA-262 13.2 Block
	    Parser.prototype.parseStatementListItem = function () {
	        var statement = null;
	        this.context.isAssignmentTarget = true;
	        this.context.isBindingElement = true;
	        if (this.lookahead.type === token_1.Token.Keyword) {
	            switch (this.lookahead.value) {
	                case 'export':
	                    if (this.sourceType !== 'module') {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
	                    }
	                    statement = this.parseExportDeclaration();
	                    break;
	                case 'import':
	                    if (this.sourceType !== 'module') {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
	                    }
	                    statement = this.parseImportDeclaration();
	                    break;
	                case 'const':
	                    statement = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'function':
	                    statement = this.parseFunctionDeclaration();
	                    break;
	                case 'class':
	                    statement = this.parseClassDeclaration();
	                    break;
	                case 'let':
	                    statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
	                    break;
	                default:
	                    statement = this.parseStatement();
	                    break;
	            }
	        }
	        else {
	            statement = this.parseStatement();
	        }
	        return statement;
	    };
	    Parser.prototype.parseBlock = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var block = [];
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            block.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.BlockStatement(block));
	    };
	    // ECMA-262 13.3.1 Let and Const Declarations
	    Parser.prototype.parseLexicalBinding = function (kind, options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, kind);
	        // ECMA-262 12.2.1
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord((id).name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (kind === 'const') {
	            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
	                this.expect('=');
	                init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            }
	        }
	        else if ((!options.inFor && id.type !== syntax_1.Syntax.Identifier) || this.match('=')) {
	            this.expect('=');
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseBindingList = function (kind, options) {
	        var list = [this.parseLexicalBinding(kind, options)];
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseLexicalBinding(kind, options));
	        }
	        return list;
	    };
	    Parser.prototype.isLexicalDeclaration = function () {
	        var previousIndex = this.scanner.index;
	        var previousLineNumber = this.scanner.lineNumber;
	        var previousLineStart = this.scanner.lineStart;
	        this.collectComments();
	        var next = this.scanner.lex();
	        this.scanner.index = previousIndex;
	        this.scanner.lineNumber = previousLineNumber;
	        this.scanner.lineStart = previousLineStart;
	        return (next.type === token_1.Token.Identifier) ||
	            (next.type === token_1.Token.Punctuator && next.value === '[') ||
	            (next.type === token_1.Token.Punctuator && next.value === '{') ||
	            (next.type === token_1.Token.Keyword && next.value === 'let') ||
	            (next.type === token_1.Token.Keyword && next.value === 'yield');
	    };
	    Parser.prototype.parseLexicalDeclaration = function (options) {
	        var node = this.createNode();
	        var kind = this.nextToken().value;
	        assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
	        var declarations = this.parseBindingList(kind, options);
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
	    };
	    // ECMA-262 13.3.3 Destructuring Binding Patterns
	    Parser.prototype.parseBindingRestElement = function (params, kind) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params, kind);
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseArrayPattern = function (params, kind) {
	        var node = this.createNode();
	        this.expect('[');
	        var elements = [];
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else {
	                if (this.match('...')) {
	                    elements.push(this.parseBindingRestElement(params, kind));
	                    break;
	                }
	                else {
	                    elements.push(this.parsePatternWithDefault(params, kind));
	                }
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayPattern(elements));
	    };
	    Parser.prototype.parsePropertyPattern = function (params, kind) {
	        var node = this.createNode();
	        var computed = false;
	        var shorthand = false;
	        var method = false;
	        var key;
	        var value;
	        if (this.lookahead.type === token_1.Token.Identifier) {
	            var keyToken = this.lookahead;
	            key = this.parseVariableIdentifier();
	            var init = this.finalize(node, new Node.Identifier(keyToken.value));
	            if (this.match('=')) {
	                params.push(keyToken);
	                shorthand = true;
	                this.nextToken();
	                var expr = this.parseAssignmentExpression();
	                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
	            }
	            else if (!this.match(':')) {
	                params.push(keyToken);
	                shorthand = true;
	                value = init;
	            }
	            else {
	                this.expect(':');
	                value = this.parsePatternWithDefault(params, kind);
	            }
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.expect(':');
	            value = this.parsePatternWithDefault(params, kind);
	        }
	        return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectPattern = function (params, kind) {
	        var node = this.createNode();
	        var properties = [];
	        this.expect('{');
	        while (!this.match('}')) {
	            properties.push(this.parsePropertyPattern(params, kind));
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectPattern(properties));
	    };
	    Parser.prototype.parsePattern = function (params, kind) {
	        var pattern;
	        if (this.match('[')) {
	            pattern = this.parseArrayPattern(params, kind);
	        }
	        else if (this.match('{')) {
	            pattern = this.parseObjectPattern(params, kind);
	        }
	        else {
	            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
	                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.UnexpectedToken);
	            }
	            params.push(this.lookahead);
	            pattern = this.parseVariableIdentifier(kind);
	        }
	        return pattern;
	    };
	    Parser.prototype.parsePatternWithDefault = function (params, kind) {
	        var startToken = this.lookahead;
	        var pattern = this.parsePattern(params, kind);
	        if (this.match('=')) {
	            this.nextToken();
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = true;
	            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowYield = previousAllowYield;
	            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
	        }
	        return pattern;
	    };
	    // ECMA-262 13.3.2 Variable Statement
	    Parser.prototype.parseVariableIdentifier = function (kind) {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (token.type === token_1.Token.Keyword && token.value === 'yield') {
	            if (this.context.strict) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            if (!this.context.allowYield) {
	                this.throwUnexpectedToken(token);
	            }
	        }
	        else if (token.type !== token_1.Token.Identifier) {
	            if (this.context.strict && token.type === token_1.Token.Keyword && this.scanner.isStrictModeReservedWord(token.value)) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            else {
	                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
	                    this.throwUnexpectedToken(token);
	                }
	            }
	        }
	        else if (this.sourceType === 'module' && token.type === token_1.Token.Identifier && token.value === 'await') {
	            this.tolerateUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseVariableDeclaration = function (options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, 'var');
	        // ECMA-262 12.2.1
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord((id).name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (this.match('=')) {
	            this.nextToken();
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
	            this.expect('=');
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseVariableDeclarationList = function (options) {
	        var opt = { inFor: options.inFor };
	        var list = [];
	        list.push(this.parseVariableDeclaration(opt));
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseVariableDeclaration(opt));
	        }
	        return list;
	    };
	    Parser.prototype.parseVariableStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('var');
	        var declarations = this.parseVariableDeclarationList({ inFor: false });
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
	    };
	    // ECMA-262 13.4 Empty Statement
	    Parser.prototype.parseEmptyStatement = function () {
	        var node = this.createNode();
	        this.expect(';');
	        return this.finalize(node, new Node.EmptyStatement());
	    };
	    // ECMA-262 13.5 Expression Statement
	    Parser.prototype.parseExpressionStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ExpressionStatement(expr));
	    };
	    // ECMA-262 13.6 If statement
	    Parser.prototype.parseIfStatement = function () {
	        var node = this.createNode();
	        var consequent;
	        var alternate = null;
	        this.expectKeyword('if');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            consequent = this.parseStatement();
	            if (this.matchKeyword('else')) {
	                this.nextToken();
	                alternate = this.parseStatement();
	            }
	        }
	        return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
	    };
	    // ECMA-262 13.7.2 The do-while Statement
	    Parser.prototype.parseDoWhileStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('do');
	        var previousInIteration = this.context.inIteration;
	        this.context.inIteration = true;
	        var body = this.parseStatement();
	        this.context.inIteration = previousInIteration;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        this.expect(')');
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        return this.finalize(node, new Node.DoWhileStatement(body, test));
	    };
	    // ECMA-262 13.7.3 The while Statement
	    Parser.prototype.parseWhileStatement = function () {
	        var node = this.createNode();
	        var body;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.parseStatement();
	            this.context.inIteration = previousInIteration;
	        }
	        return this.finalize(node, new Node.WhileStatement(test, body));
	    };
	    // ECMA-262 13.7.4 The for Statement
	    // ECMA-262 13.7.5 The for-in and for-of Statements
	    Parser.prototype.parseForStatement = function () {
	        var init = null;
	        var test = null;
	        var update = null;
	        var forIn = true;
	        var left, right;
	        var node = this.createNode();
	        this.expectKeyword('for');
	        this.expect('(');
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else {
	            if (this.matchKeyword('var')) {
	                init = this.createNode();
	                this.nextToken();
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                var declarations = this.parseVariableDeclarationList({ inFor: true });
	                this.context.allowIn = previousAllowIn;
	                if (declarations.length === 1 && this.matchKeyword('in')) {
	                    var decl = declarations[0];
	                    if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
	                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
	                    }
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.expect(';');
	                }
	            }
	            else if (this.matchKeyword('const') || this.matchKeyword('let')) {
	                init = this.createNode();
	                var kind = this.nextToken().value;
	                if (!this.context.strict && this.lookahead.value === 'in') {
	                    init = this.finalize(init, new Node.Identifier(kind));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else {
	                    var previousAllowIn = this.context.allowIn;
	                    this.context.allowIn = false;
	                    var declarations = this.parseBindingList(kind, { inFor: true });
	                    this.context.allowIn = previousAllowIn;
	                    if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseExpression();
	                        init = null;
	                    }
	                    else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseAssignmentExpression();
	                        init = null;
	                        forIn = false;
	                    }
	                    else {
	                        this.consumeSemicolon();
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                    }
	                }
	            }
	            else {
	                var initStartToken = this.lookahead;
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                init = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                this.context.allowIn = previousAllowIn;
	                if (this.matchKeyword('in')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (this.matchContextualKeyword('of')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    if (this.match(',')) {
	                        var initSeq = [init];
	                        while (this.match(',')) {
	                            this.nextToken();
	                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
	                    }
	                    this.expect(';');
	                }
	            }
	        }
	        if (typeof left === 'undefined') {
	            if (!this.match(';')) {
	                test = this.parseExpression();
	            }
	            this.expect(';');
	            if (!this.match(')')) {
	                update = this.parseExpression();
	            }
	        }
	        var body;
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.isolateCoverGrammar(this.parseStatement);
	            this.context.inIteration = previousInIteration;
	        }
	        return (typeof left === 'undefined') ?
	            this.finalize(node, new Node.ForStatement(init, test, update, body)) :
	            forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) :
	                this.finalize(node, new Node.ForOfStatement(left, right, body));
	    };
	    // ECMA-262 13.8 The continue statement
	    Parser.prototype.parseContinueStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('continue');
	        var label = null;
	        if (this.lookahead.type === token_1.Token.Identifier && !this.hasLineTerminator) {
	            label = this.parseVariableIdentifier();
	            var key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, label.name);
	            }
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration) {
	            this.throwError(messages_1.Messages.IllegalContinue);
	        }
	        return this.finalize(node, new Node.ContinueStatement(label));
	    };
	    // ECMA-262 13.9 The break statement
	    Parser.prototype.parseBreakStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('break');
	        var label = null;
	        if (this.lookahead.type === token_1.Token.Identifier && !this.hasLineTerminator) {
	            label = this.parseVariableIdentifier();
	            var key = '$' + label.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, label.name);
	            }
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration && !this.context.inSwitch) {
	            this.throwError(messages_1.Messages.IllegalBreak);
	        }
	        return this.finalize(node, new Node.BreakStatement(label));
	    };
	    // ECMA-262 13.10 The return statement
	    Parser.prototype.parseReturnStatement = function () {
	        if (!this.context.inFunctionBody) {
	            this.tolerateError(messages_1.Messages.IllegalReturn);
	        }
	        var node = this.createNode();
	        this.expectKeyword('return');
	        var hasArgument = !this.match(';') && !this.match('}') &&
	            !this.hasLineTerminator && this.lookahead.type !== token_1.Token.EOF;
	        var argument = hasArgument ? this.parseExpression() : null;
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ReturnStatement(argument));
	    };
	    // ECMA-262 13.11 The with statement
	    Parser.prototype.parseWithStatement = function () {
	        if (this.context.strict) {
	            this.tolerateError(messages_1.Messages.StrictModeWith);
	        }
	        var node = this.createNode();
	        this.expectKeyword('with');
	        this.expect('(');
	        var object = this.parseExpression();
	        this.expect(')');
	        var body = this.parseStatement();
	        return this.finalize(node, new Node.WithStatement(object, body));
	    };
	    // ECMA-262 13.12 The switch statement
	    Parser.prototype.parseSwitchCase = function () {
	        var node = this.createNode();
	        var test;
	        if (this.matchKeyword('default')) {
	            this.nextToken();
	            test = null;
	        }
	        else {
	            this.expectKeyword('case');
	            test = this.parseExpression();
	        }
	        this.expect(':');
	        var consequent = [];
	        while (true) {
	            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
	                break;
	            }
	            consequent.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.SwitchCase(test, consequent));
	    };
	    Parser.prototype.parseSwitchStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('switch');
	        this.expect('(');
	        var discriminant = this.parseExpression();
	        this.expect(')');
	        var previousInSwitch = this.context.inSwitch;
	        this.context.inSwitch = true;
	        var cases = [];
	        var defaultFound = false;
	        this.expect('{');
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            var clause = this.parseSwitchCase();
	            if (clause.test === null) {
	                if (defaultFound) {
	                    this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
	                }
	                defaultFound = true;
	            }
	            cases.push(clause);
	        }
	        this.expect('}');
	        this.context.inSwitch = previousInSwitch;
	        return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
	    };
	    // ECMA-262 13.13 Labelled Statements
	    Parser.prototype.parseLabelledStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        var statement;
	        if ((expr.type === syntax_1.Syntax.Identifier) && this.match(':')) {
	            this.nextToken();
	            var id = (expr);
	            var key = '$' + id.name;
	            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
	            }
	            this.context.labelSet[key] = true;
	            var labeledBody = this.parseStatement();
	            delete this.context.labelSet[key];
	            statement = new Node.LabeledStatement(id, labeledBody);
	        }
	        else {
	            this.consumeSemicolon();
	            statement = new Node.ExpressionStatement(expr);
	        }
	        return this.finalize(node, statement);
	    };
	    // ECMA-262 13.14 The throw statement
	    Parser.prototype.parseThrowStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('throw');
	        if (this.hasLineTerminator) {
	            this.throwError(messages_1.Messages.NewlineAfterThrow);
	        }
	        var argument = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ThrowStatement(argument));
	    };
	    // ECMA-262 13.15 The try statement
	    Parser.prototype.parseCatchClause = function () {
	        var node = this.createNode();
	        this.expectKeyword('catch');
	        this.expect('(');
	        if (this.match(')')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        var params = [];
	        var param = this.parsePattern(params);
	        var paramMap = {};
	        for (var i = 0; i < params.length; i++) {
	            var key = '$' + params[i].value;
	            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
	                this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
	            }
	            paramMap[key] = true;
	        }
	        if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord((param).name)) {
	                this.tolerateError(messages_1.Messages.StrictCatchVariable);
	            }
	        }
	        this.expect(')');
	        var body = this.parseBlock();
	        return this.finalize(node, new Node.CatchClause(param, body));
	    };
	    Parser.prototype.parseFinallyClause = function () {
	        this.expectKeyword('finally');
	        return this.parseBlock();
	    };
	    Parser.prototype.parseTryStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('try');
	        var block = this.parseBlock();
	        var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
	        var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
	        if (!handler && !finalizer) {
	            this.throwError(messages_1.Messages.NoCatchOrFinally);
	        }
	        return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
	    };
	    // ECMA-262 13.16 The debugger statement
	    Parser.prototype.parseDebuggerStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('debugger');
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.DebuggerStatement());
	    };
	    // ECMA-262 13 Statements
	    Parser.prototype.parseStatement = function () {
	        var statement = null;
	        switch (this.lookahead.type) {
	            case token_1.Token.BooleanLiteral:
	            case token_1.Token.NullLiteral:
	            case token_1.Token.NumericLiteral:
	            case token_1.Token.StringLiteral:
	            case token_1.Token.Template:
	            case token_1.Token.RegularExpression:
	                statement = this.parseExpressionStatement();
	                break;
	            case token_1.Token.Punctuator:
	                var value = this.lookahead.value;
	                if (value === '{') {
	                    statement = this.parseBlock();
	                }
	                else if (value === '(') {
	                    statement = this.parseExpressionStatement();
	                }
	                else if (value === ';') {
	                    statement = this.parseEmptyStatement();
	                }
	                else {
	                    statement = this.parseExpressionStatement();
	                }
	                break;
	            case token_1.Token.Identifier:
	                statement = this.parseLabelledStatement();
	                break;
	            case token_1.Token.Keyword:
	                switch (this.lookahead.value) {
	                    case 'break':
	                        statement = this.parseBreakStatement();
	                        break;
	                    case 'continue':
	                        statement = this.parseContinueStatement();
	                        break;
	                    case 'debugger':
	                        statement = this.parseDebuggerStatement();
	                        break;
	                    case 'do':
	                        statement = this.parseDoWhileStatement();
	                        break;
	                    case 'for':
	                        statement = this.parseForStatement();
	                        break;
	                    case 'function':
	                        statement = this.parseFunctionDeclaration();
	                        break;
	                    case 'if':
	                        statement = this.parseIfStatement();
	                        break;
	                    case 'return':
	                        statement = this.parseReturnStatement();
	                        break;
	                    case 'switch':
	                        statement = this.parseSwitchStatement();
	                        break;
	                    case 'throw':
	                        statement = this.parseThrowStatement();
	                        break;
	                    case 'try':
	                        statement = this.parseTryStatement();
	                        break;
	                    case 'var':
	                        statement = this.parseVariableStatement();
	                        break;
	                    case 'while':
	                        statement = this.parseWhileStatement();
	                        break;
	                    case 'with':
	                        statement = this.parseWithStatement();
	                        break;
	                    default:
	                        statement = this.parseExpressionStatement();
	                        break;
	                }
	                break;
	            default:
	                this.throwUnexpectedToken(this.lookahead);
	        }
	        return statement;
	    };
	    // ECMA-262 14.1 Function Definition
	    Parser.prototype.parseFunctionSourceElements = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var body = this.parseDirectivePrologues();
	        var previousLabelSet = this.context.labelSet;
	        var previousInIteration = this.context.inIteration;
	        var previousInSwitch = this.context.inSwitch;
	        var previousInFunctionBody = this.context.inFunctionBody;
	        this.context.labelSet = {};
	        this.context.inIteration = false;
	        this.context.inSwitch = false;
	        this.context.inFunctionBody = true;
	        while (this.startMarker.index < this.scanner.length) {
	            if (this.match('}')) {
	                break;
	            }
	            body.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        this.context.labelSet = previousLabelSet;
	        this.context.inIteration = previousInIteration;
	        this.context.inSwitch = previousInSwitch;
	        this.context.inFunctionBody = previousInFunctionBody;
	        return this.finalize(node, new Node.BlockStatement(body));
	    };
	    Parser.prototype.validateParam = function (options, param, name) {
	        var key = '$' + name;
	        if (this.context.strict) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        else if (!options.firstRestricted) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            else if (this.scanner.isStrictModeReservedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictReservedWord;
	            }
	            else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        /* istanbul ignore next */
	        if (typeof Object.defineProperty === 'function') {
	            Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
	        }
	        else {
	            options.paramSet[key] = true;
	        }
	    };
	    Parser.prototype.parseRestElement = function (params) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params);
	        if (this.match('=')) {
	            this.throwError(messages_1.Messages.DefaultRestParameter);
	        }
	        if (!this.match(')')) {
	            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
	        }
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseFormalParameter = function (options) {
	        var params = [];
	        var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
	        for (var i = 0; i < params.length; i++) {
	            this.validateParam(options, params[i], params[i].value);
	        }
	        options.params.push(param);
	        return !this.match(')');
	    };
	    Parser.prototype.parseFormalParameters = function (firstRestricted) {
	        var options;
	        options = {
	            params: [],
	            firstRestricted: firstRestricted
	        };
	        this.expect('(');
	        if (!this.match(')')) {
	            options.paramSet = {};
	            while (this.startMarker.index < this.scanner.length) {
	                if (!this.parseFormalParameter(options)) {
	                    break;
	                }
	                this.expect(',');
	            }
	        }
	        this.expect(')');
	        return {
	            params: options.params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        this.expectKeyword('function');
	        var isGenerator = this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted = null;
	        if (!identifierIsOptional || !this.match('(')) {
	            var token = this.lookahead;
	            id = this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
	    };
	    Parser.prototype.parseFunctionExpression = function () {
	        var node = this.createNode();
	        this.expectKeyword('function');
	        var isGenerator = this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        if (!this.match('(')) {
	            var token = this.lookahead;
	            id = (!this.context.strict && !isGenerator && this.matchKeyword('yield')) ? this.parseIdentifierName() : this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
	    };
	    // ECMA-262 14.1.1 Directive Prologues
	    Parser.prototype.parseDirective = function () {
	        var token = this.lookahead;
	        var directive = null;
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        if (expr.type === syntax_1.Syntax.Literal) {
	            directive = this.getTokenRaw(token).slice(1, -1);
	        }
	        this.consumeSemicolon();
	        return this.finalize(node, directive ? new Node.Directive(expr, directive) :
	            new Node.ExpressionStatement(expr));
	    };
	    Parser.prototype.parseDirectivePrologues = function () {
	        var firstRestricted = null;
	        var body = [];
	        while (true) {
	            var token = this.lookahead;
	            if (token.type !== token_1.Token.StringLiteral) {
	                break;
	            }
	            var statement = this.parseDirective();
	            body.push(statement);
	            var directive = statement.directive;
	            if (typeof directive !== 'string') {
	                break;
	            }
	            if (directive === 'use strict') {
	                this.context.strict = true;
	                if (firstRestricted) {
	                    this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
	                }
	            }
	            else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }
	        return body;
	    };
	    // ECMA-262 14.3 Method Definitions
	    Parser.prototype.qualifiedPropertyName = function (token) {
	        switch (token.type) {
	            case token_1.Token.Identifier:
	            case token_1.Token.StringLiteral:
	            case token_1.Token.BooleanLiteral:
	            case token_1.Token.NullLiteral:
	            case token_1.Token.NumericLiteral:
	            case token_1.Token.Keyword:
	                return true;
	            case token_1.Token.Punctuator:
	                return token.value === '[';
	        }
	        return false;
	    };
	    Parser.prototype.parseGetterMethod = function () {
	        var node = this.createNode();
	        this.expect('(');
	        this.expect(')');
	        var isGenerator = false;
	        var params = {
	            params: [],
	            stricted: null,
	            firstRestricted: null,
	            message: null
	        };
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = false;
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    Parser.prototype.parseSetterMethod = function () {
	        var node = this.createNode();
	        var options = {
	            params: [],
	            firstRestricted: null,
	            paramSet: {}
	        };
	        var isGenerator = false;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = false;
	        this.expect('(');
	        if (this.match(')')) {
	            this.tolerateUnexpectedToken(this.lookahead);
	        }
	        else {
	            this.parseFormalParameter(options);
	        }
	        this.expect(')');
	        var method = this.parsePropertyMethod(options);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, options.params, method, isGenerator));
	    };
	    Parser.prototype.parseGeneratorMethod = function () {
	        var node = this.createNode();
	        var isGenerator = true;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = true;
	        var params = this.parseFormalParameters();
	        this.context.allowYield = false;
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    // ECMA-262 14.4 Generator Function Definitions
	    Parser.prototype.isStartOfExpression = function () {
	        var start = true;
	        var value = this.lookahead.value;
	        switch (this.lookahead.type) {
	            case token_1.Token.Punctuator:
	                start = (value === '[') || (value === '(') || (value === '{') ||
	                    (value === '+') || (value === '-') ||
	                    (value === '!') || (value === '~') ||
	                    (value === '++') || (value === '--') ||
	                    (value === '/') || (value === '/='); // regular expression literal
	                break;
	            case token_1.Token.Keyword:
	                start = (value === 'class') || (value === 'delete') ||
	                    (value === 'function') || (value === 'let') || (value === 'new') ||
	                    (value === 'super') || (value === 'this') || (value === 'typeof') ||
	                    (value === 'void') || (value === 'yield');
	                break;
	            default:
	                break;
	        }
	        return start;
	    };
	    Parser.prototype.parseYieldExpression = function () {
	        var node = this.createNode();
	        this.expectKeyword('yield');
	        var argument = null;
	        var delegate = false;
	        if (!this.hasLineTerminator) {
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = false;
	            delegate = this.match('*');
	            if (delegate) {
	                this.nextToken();
	                argument = this.parseAssignmentExpression();
	            }
	            else if (this.isStartOfExpression()) {
	                argument = this.parseAssignmentExpression();
	            }
	            this.context.allowYield = previousAllowYield;
	        }
	        return this.finalize(node, new Node.YieldExpression(argument, delegate));
	    };
	    // ECMA-262 14.5 Class Definitions
	    Parser.prototype.parseClassElement = function (hasConstructor) {
	        var token = this.lookahead;
	        var node = this.createNode();
	        var kind;
	        var key;
	        var value;
	        var computed = false;
	        var method = false;
	        var isStatic = false;
	        if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            var id = key;
	            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
	                token = this.lookahead;
	                isStatic = true;
	                computed = this.match('[');
	                if (this.match('*')) {
	                    this.nextToken();
	                }
	                else {
	                    key = this.parseObjectPropertyKey();
	                }
	            }
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === token_1.Token.Identifier) {
	            if (token.value === 'get' && lookaheadPropertyKey) {
	                kind = 'get';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                this.context.allowYield = false;
	                value = this.parseGetterMethod();
	            }
	            else if (token.value === 'set' && lookaheadPropertyKey) {
	                kind = 'set';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                value = this.parseSetterMethod();
	            }
	        }
	        else if (token.type === token_1.Token.Punctuator && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        if (!kind && key && this.match('(')) {
	            kind = 'init';
	            value = this.parsePropertyMethodFunction();
	            method = true;
	        }
	        if (!kind) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        if (kind === 'init') {
	            kind = 'method';
	        }
	        if (!computed) {
	            if (isStatic && this.isPropertyKey(key, 'prototype')) {
	                this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
	            }
	            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
	                if (kind !== 'method' || !method || value.generator) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
	                }
	                if (hasConstructor.value) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
	                }
	                else {
	                    hasConstructor.value = true;
	                }
	                kind = 'constructor';
	            }
	        }
	        return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
	    };
	    Parser.prototype.parseClassElementList = function () {
	        var body = [];
	        var hasConstructor = { value: false };
	        this.expect('{');
	        while (!this.match('}')) {
	            if (this.match(';')) {
	                this.nextToken();
	            }
	            else {
	                body.push(this.parseClassElement(hasConstructor));
	            }
	        }
	        this.expect('}');
	        return body;
	    };
	    Parser.prototype.parseClassBody = function () {
	        var node = this.createNode();
	        var elementList = this.parseClassElementList();
	        return this.finalize(node, new Node.ClassBody(elementList));
	    };
	    Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (identifierIsOptional && (this.lookahead.type !== token_1.Token.Identifier)) ? null : this.parseVariableIdentifier();
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
	    };
	    Parser.prototype.parseClassExpression = function () {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (this.lookahead.type === token_1.Token.Identifier) ? this.parseVariableIdentifier() : null;
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
	    };
	    // ECMA-262 15.1 Scripts
	    // ECMA-262 15.2 Modules
	    Parser.prototype.parseProgram = function () {
	        var node = this.createNode();
	        var body = this.parseDirectivePrologues();
	        while (this.startMarker.index < this.scanner.length) {
	            body.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.Program(body, this.sourceType));
	    };
	    // ECMA-262 15.2.2 Imports
	    Parser.prototype.parseModuleSpecifier = function () {
	        var node = this.createNode();
	        if (this.lookahead.type !== token_1.Token.StringLiteral) {
	            this.throwError(messages_1.Messages.InvalidModuleSpecifier);
	        }
	        var token = this.nextToken();
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    // import {<foo as bar>} ...;
	    Parser.prototype.parseImportSpecifier = function () {
	        var node = this.createNode();
	        var imported;
	        var local;
	        if (this.lookahead.type === token_1.Token.Identifier) {
	            imported = this.parseVariableIdentifier();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	        }
	        else {
	            imported = this.parseIdentifierName();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.ImportSpecifier(local, imported));
	    };
	    // {foo, bar as bas}
	    Parser.prototype.parseNamedImports = function () {
	        this.expect('{');
	        var specifiers = [];
	        while (!this.match('}')) {
	            specifiers.push(this.parseImportSpecifier());
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return specifiers;
	    };
	    // import <foo> ...;
	    Parser.prototype.parseImportDefaultSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportDefaultSpecifier(local));
	    };
	    // import <* as foo> ...;
	    Parser.prototype.parseImportNamespaceSpecifier = function () {
	        var node = this.createNode();
	        this.expect('*');
	        if (!this.matchContextualKeyword('as')) {
	            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
	        }
	        this.nextToken();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
	    };
	    Parser.prototype.parseImportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalImportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('import');
	        var src;
	        var specifiers = [];
	        if (this.lookahead.type === token_1.Token.StringLiteral) {
	            // import 'foo';
	            src = this.parseModuleSpecifier();
	        }
	        else {
	            if (this.match('{')) {
	                // import {bar}
	                specifiers = specifiers.concat(this.parseNamedImports());
	            }
	            else if (this.match('*')) {
	                // import * as foo
	                specifiers.push(this.parseImportNamespaceSpecifier());
	            }
	            else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
	                // import foo
	                specifiers.push(this.parseImportDefaultSpecifier());
	                if (this.match(',')) {
	                    this.nextToken();
	                    if (this.match('*')) {
	                        // import foo, * as foo
	                        specifiers.push(this.parseImportNamespaceSpecifier());
	                    }
	                    else if (this.match('{')) {
	                        // import foo, {bar}
	                        specifiers = specifiers.concat(this.parseNamedImports());
	                    }
	                    else {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            src = this.parseModuleSpecifier();
	        }
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
	    };
	    // ECMA-262 15.2.3 Exports
	    Parser.prototype.parseExportSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        var exported = local;
	        if (this.matchContextualKeyword('as')) {
	            this.nextToken();
	            exported = this.parseIdentifierName();
	        }
	        return this.finalize(node, new Node.ExportSpecifier(local, exported));
	    };
	    Parser.prototype.parseExportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalExportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('export');
	        var exportDeclaration;
	        if (this.matchKeyword('default')) {
	            // export default ...
	            this.nextToken();
	            if (this.matchKeyword('function')) {
	                // export default function foo () {}
	                // export default function () {}
	                var declaration = this.parseFunctionDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else if (this.matchKeyword('class')) {
	                // export default class foo {}
	                var declaration = this.parseClassDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else {
	                if (this.matchContextualKeyword('from')) {
	                    this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
	                }
	                // export default {};
	                // export default [];
	                // export default (1 + 2);
	                var declaration = this.match('{') ? this.parseObjectInitializer() :
	                    this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
	                this.consumeSemicolon();
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	        }
	        else if (this.match('*')) {
	            // export * from 'foo';
	            this.nextToken();
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            var src = this.parseModuleSpecifier();
	            this.consumeSemicolon();
	            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
	        }
	        else if (this.lookahead.type === token_1.Token.Keyword) {
	            // export var f = 1;
	            var declaration = void 0;
	            switch (this.lookahead.value) {
	                case 'let':
	                case 'const':
	                    declaration = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'var':
	                case 'class':
	                case 'function':
	                    declaration = this.parseStatementListItem();
	                    break;
	                default:
	                    this.throwUnexpectedToken(this.lookahead);
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
	        }
	        else {
	            var specifiers = [];
	            var source = null;
	            var isExportFromIdentifier = false;
	            this.expect('{');
	            while (!this.match('}')) {
	                isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
	                specifiers.push(this.parseExportSpecifier());
	                if (!this.match('}')) {
	                    this.expect(',');
	                }
	            }
	            this.expect('}');
	            if (this.matchContextualKeyword('from')) {
	                // export {default} from 'foo';
	                // export {foo} from 'foo';
	                this.nextToken();
	                source = this.parseModuleSpecifier();
	                this.consumeSemicolon();
	            }
	            else if (isExportFromIdentifier) {
	                // export {default}; // missing fromClause
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            else {
	                // export {foo};
	                this.consumeSemicolon();
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
	        }
	        return exportDeclaration;
	    };
	    return Parser;
	}());
	exports.Parser = Parser;


/***/ },
/* 4 */
/***/ function(module, exports) {

	// Ensure the condition is true, otherwise throw an error.
	// This is only to have a better contract semantic, i.e. another safety net
	// to catch a logic error. The condition shall be fulfilled in normal case.
	// Do NOT use this to enforce a certain condition on any user input.
	"use strict";
	function assert(condition, message) {
	    /* istanbul ignore if */
	    if (!condition) {
	        throw new Error('ASSERT: ' + message);
	    }
	}
	exports.assert = assert;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	// Error messages should be identical to V8.
	exports.Messages = {
	    UnexpectedToken: 'Unexpected token %0',
	    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
	    UnexpectedNumber: 'Unexpected number',
	    UnexpectedString: 'Unexpected string',
	    UnexpectedIdentifier: 'Unexpected identifier',
	    UnexpectedReserved: 'Unexpected reserved word',
	    UnexpectedTemplate: 'Unexpected quasi %0',
	    UnexpectedEOS: 'Unexpected end of input',
	    NewlineAfterThrow: 'Illegal newline after throw',
	    InvalidRegExp: 'Invalid regular expression',
	    UnterminatedRegExp: 'Invalid regular expression: missing /',
	    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
	    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
	    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
	    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
	    NoCatchOrFinally: 'Missing catch or finally after try',
	    UnknownLabel: 'Undefined label \'%0\'',
	    Redeclaration: '%0 \'%1\' has already been declared',
	    IllegalContinue: 'Illegal continue statement',
	    IllegalBreak: 'Illegal break statement',
	    IllegalReturn: 'Illegal return statement',
	    StrictModeWith: 'Strict mode code may not include a with statement',
	    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
	    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
	    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
	    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
	    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
	    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
	    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
	    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
	    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictReservedWord: 'Use of future reserved word in strict mode',
	    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
	    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
	    DefaultRestParameter: 'Unexpected token =',
	    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
	    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
	    DuplicateConstructor: 'A class may only have one constructor',
	    StaticPrototype: 'Classes may not have static property named prototype',
	    MissingFromClause: 'Unexpected token',
	    NoAsAfterImportNamespace: 'Unexpected token',
	    InvalidModuleSpecifier: 'Unexpected token',
	    IllegalImportDeclaration: 'Unexpected token',
	    IllegalExportDeclaration: 'Unexpected token',
	    DuplicateBinding: 'Duplicate binding %0',
	    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer'
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var ErrorHandler = (function () {
	    function ErrorHandler() {
	        this.errors = [];
	        this.tolerant = false;
	    }
	    ;
	    ErrorHandler.prototype.recordError = function (error) {
	        this.errors.push(error);
	    };
	    ;
	    ErrorHandler.prototype.tolerate = function (error) {
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    ;
	    ErrorHandler.prototype.constructError = function (msg, column) {
	        var error = new Error(msg);
	        try {
	            throw error;
	        }
	        catch (base) {
	            /* istanbul ignore else */
	            if (Object.create && Object.defineProperty) {
	                error = Object.create(base);
	                Object.defineProperty(error, 'column', { value: column });
	            }
	        }
	        finally {
	            return error;
	        }
	    };
	    ;
	    ErrorHandler.prototype.createError = function (index, line, col, description) {
	        var msg = 'Line ' + line + ': ' + description;
	        var error = this.constructError(msg, col);
	        error.index = index;
	        error.lineNumber = line;
	        error.description = description;
	        return error;
	    };
	    ;
	    ErrorHandler.prototype.throwError = function (index, line, col, description) {
	        throw this.createError(index, line, col, description);
	    };
	    ;
	    ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
	        var error = this.createError(index, line, col, description);
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    ;
	    return ErrorHandler;
	}());
	exports.ErrorHandler = ErrorHandler;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	(function (Token) {
	    Token[Token["BooleanLiteral"] = 1] = "BooleanLiteral";
	    Token[Token["EOF"] = 2] = "EOF";
	    Token[Token["Identifier"] = 3] = "Identifier";
	    Token[Token["Keyword"] = 4] = "Keyword";
	    Token[Token["NullLiteral"] = 5] = "NullLiteral";
	    Token[Token["NumericLiteral"] = 6] = "NumericLiteral";
	    Token[Token["Punctuator"] = 7] = "Punctuator";
	    Token[Token["StringLiteral"] = 8] = "StringLiteral";
	    Token[Token["RegularExpression"] = 9] = "RegularExpression";
	    Token[Token["Template"] = 10] = "Template";
	})(exports.Token || (exports.Token = {}));
	var Token = exports.Token;
	;
	exports.TokenName = {};
	exports.TokenName[Token.BooleanLiteral] = 'Boolean';
	exports.TokenName[Token.EOF] = '<end>';
	exports.TokenName[Token.Identifier] = 'Identifier';
	exports.TokenName[Token.Keyword] = 'Keyword';
	exports.TokenName[Token.NullLiteral] = 'Null';
	exports.TokenName[Token.NumericLiteral] = 'Numeric';
	exports.TokenName[Token.Punctuator] = 'Punctuator';
	exports.TokenName[Token.StringLiteral] = 'String';
	exports.TokenName[Token.RegularExpression] = 'RegularExpression';
	exports.TokenName[Token.Template] = 'Template';


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var assert_1 = __webpack_require__(4);
	var messages_1 = __webpack_require__(5);
	var character_1 = __webpack_require__(9);
	var token_1 = __webpack_require__(7);
	function hexValue(ch) {
	    return '0123456789abcdef'.indexOf(ch.toLowerCase());
	}
	function octalValue(ch) {
	    return '01234567'.indexOf(ch);
	}
	var Scanner = (function () {
	    function Scanner(code, handler) {
	        this.source = code;
	        this.errorHandler = handler;
	        this.trackComment = false;
	        this.length = code.length;
	        this.index = 0;
	        this.lineNumber = (code.length > 0) ? 1 : 0;
	        this.lineStart = 0;
	        this.curlyStack = [];
	    }
	    ;
	    Scanner.prototype.eof = function () {
	        return this.index >= this.length;
	    };
	    ;
	    Scanner.prototype.throwUnexpectedToken = function (message) {
	        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
	        this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
	    };
	    ;
	    Scanner.prototype.tolerateUnexpectedToken = function () {
	        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, messages_1.Messages.UnexpectedTokenIllegal);
	    };
	    ;
	    // ECMA-262 11.4 Comments
	    Scanner.prototype.skipSingleLineComment = function (offset) {
	        var comments;
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - offset;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - offset
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            ++this.index;
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (this.trackComment) {
	                    loc.end = {
	                        line: this.lineNumber,
	                        column: this.index - this.lineStart - 1
	                    };
	                    var entry = {
	                        multiLine: false,
	                        slice: [start + offset, this.index - 1],
	                        range: [start, this.index - 1],
	                        loc: loc
	                    };
	                    comments.push(entry);
	                }
	                if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                return comments;
	            }
	        }
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: false,
	                slice: [start + offset, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        return comments;
	    };
	    ;
	    Scanner.prototype.skipMultiLineComment = function () {
	        var comments;
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - 2;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - 2
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                ++this.index;
	                this.lineStart = this.index;
	            }
	            else if (ch === 0x2A) {
	                // Block comment ends with '*/'.
	                if (this.source.charCodeAt(this.index + 1) === 0x2F) {
	                    this.index += 2;
	                    if (this.trackComment) {
	                        loc.end = {
	                            line: this.lineNumber,
	                            column: this.index - this.lineStart
	                        };
	                        var entry = {
	                            multiLine: true,
	                            slice: [start + 2, this.index - 2],
	                            range: [start, this.index],
	                            loc: loc
	                        };
	                        comments.push(entry);
	                    }
	                    return comments;
	                }
	                ++this.index;
	            }
	            else {
	                ++this.index;
	            }
	        }
	        // Ran off the end of the file - the whole thing is a comment
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: true,
	                slice: [start + 2, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        this.tolerateUnexpectedToken();
	        return comments;
	    };
	    ;
	    Scanner.prototype.scanComments = function () {
	        var comments;
	        if (this.trackComment) {
	            comments = [];
	        }
	        var start = (this.index === 0);
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isWhiteSpace(ch)) {
	                ++this.index;
	            }
	            else if (character_1.Character.isLineTerminator(ch)) {
	                ++this.index;
	                if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                start = true;
	            }
	            else if (ch === 0x2F) {
	                ch = this.source.charCodeAt(this.index + 1);
	                if (ch === 0x2F) {
	                    this.index += 2;
	                    var comment = this.skipSingleLineComment(2);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                    start = true;
	                }
	                else if (ch === 0x2A) {
	                    this.index += 2;
	                    var comment = this.skipMultiLineComment();
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (start && ch === 0x2D) {
	                // U+003E is '>'
	                if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
	                    // '-->' is a single-line comment
	                    this.index += 3;
	                    var comment = this.skipSingleLineComment(3);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (ch === 0x3C) {
	                if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
	                    this.index += 4; // `<!--`
	                    var comment = this.skipSingleLineComment(4);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else {
	                break;
	            }
	        }
	        return comments;
	    };
	    ;
	    // ECMA-262 11.6.2.2 Future Reserved Words
	    Scanner.prototype.isFutureReservedWord = function (id) {
	        switch (id) {
	            case 'enum':
	            case 'export':
	            case 'import':
	            case 'super':
	                return true;
	            default:
	                return false;
	        }
	    };
	    ;
	    Scanner.prototype.isStrictModeReservedWord = function (id) {
	        switch (id) {
	            case 'implements':
	            case 'interface':
	            case 'package':
	            case 'private':
	            case 'protected':
	            case 'public':
	            case 'static':
	            case 'yield':
	            case 'let':
	                return true;
	            default:
	                return false;
	        }
	    };
	    ;
	    Scanner.prototype.isRestrictedWord = function (id) {
	        return id === 'eval' || id === 'arguments';
	    };
	    ;
	    // ECMA-262 11.6.2.1 Keywords
	    Scanner.prototype.isKeyword = function (id) {
	        switch (id.length) {
	            case 2:
	                return (id === 'if') || (id === 'in') || (id === 'do');
	            case 3:
	                return (id === 'var') || (id === 'for') || (id === 'new') ||
	                    (id === 'try') || (id === 'let');
	            case 4:
	                return (id === 'this') || (id === 'else') || (id === 'case') ||
	                    (id === 'void') || (id === 'with') || (id === 'enum');
	            case 5:
	                return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                    (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                    (id === 'class') || (id === 'super');
	            case 6:
	                return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                    (id === 'switch') || (id === 'export') || (id === 'import');
	            case 7:
	                return (id === 'default') || (id === 'finally') || (id === 'extends');
	            case 8:
	                return (id === 'function') || (id === 'continue') || (id === 'debugger');
	            case 10:
	                return (id === 'instanceof');
	            default:
	                return false;
	        }
	    };
	    ;
	    Scanner.prototype.codePointAt = function (i) {
	        var cp = this.source.charCodeAt(i);
	        if (cp >= 0xD800 && cp <= 0xDBFF) {
	            var second = this.source.charCodeAt(i + 1);
	            if (second >= 0xDC00 && second <= 0xDFFF) {
	                var first = cp;
	                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	            }
	        }
	        return cp;
	    };
	    ;
	    Scanner.prototype.scanHexEscape = function (prefix) {
	        var len = (prefix === 'u') ? 4 : 2;
	        var code = 0;
	        for (var i = 0; i < len; ++i) {
	            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                code = code * 16 + hexValue(this.source[this.index++]);
	            }
	            else {
	                return '';
	            }
	        }
	        return String.fromCharCode(code);
	    };
	    ;
	    Scanner.prototype.scanUnicodeCodePointEscape = function () {
	        var ch = this.source[this.index];
	        var code = 0;
	        // At least, one hex digit is required.
	        if (ch === '}') {
	            this.throwUnexpectedToken();
	        }
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
	                break;
	            }
	            code = code * 16 + hexValue(ch);
	        }
	        if (code > 0x10FFFF || ch !== '}') {
	            this.throwUnexpectedToken();
	        }
	        return character_1.Character.fromCodePoint(code);
	    };
	    ;
	    Scanner.prototype.getIdentifier = function () {
	        var start = this.index++;
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (ch === 0x5C) {
	                // Blackslash (U+005C) marks Unicode escape sequence.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            else if (ch >= 0xD800 && ch < 0xDFFF) {
	                // Need to handle surrogate pairs.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            if (character_1.Character.isIdentifierPart(ch)) {
	                ++this.index;
	            }
	            else {
	                break;
	            }
	        }
	        return this.source.slice(start, this.index);
	    };
	    ;
	    Scanner.prototype.getComplexIdentifier = function () {
	        var cp = this.codePointAt(this.index);
	        var id = character_1.Character.fromCodePoint(cp);
	        this.index += id.length;
	        // '\u' (U+005C, U+0075) denotes an escaped character.
	        var ch;
	        if (cp === 0x5C) {
	            if (this.source.charCodeAt(this.index) !== 0x75) {
	                this.throwUnexpectedToken();
	            }
	            ++this.index;
	            if (this.source[this.index] === '{') {
	                ++this.index;
	                ch = this.scanUnicodeCodePointEscape();
	            }
	            else {
	                ch = this.scanHexEscape('u');
	                cp = ch.charCodeAt(0);
	                if (!ch || ch === '\\' || !character_1.Character.isIdentifierStart(cp)) {
	                    this.throwUnexpectedToken();
	                }
	            }
	            id = ch;
	        }
	        while (!this.eof()) {
	            cp = this.codePointAt(this.index);
	            if (!character_1.Character.isIdentifierPart(cp)) {
	                break;
	            }
	            ch = character_1.Character.fromCodePoint(cp);
	            id += ch;
	            this.index += ch.length;
	            // '\u' (U+005C, U+0075) denotes an escaped character.
	            if (cp === 0x5C) {
	                id = id.substr(0, id.length - 1);
	                if (this.source.charCodeAt(this.index) !== 0x75) {
	                    this.throwUnexpectedToken();
	                }
	                ++this.index;
	                if (this.source[this.index] === '{') {
	                    ++this.index;
	                    ch = this.scanUnicodeCodePointEscape();
	                }
	                else {
	                    ch = this.scanHexEscape('u');
	                    cp = ch.charCodeAt(0);
	                    if (!ch || ch === '\\' || !character_1.Character.isIdentifierPart(cp)) {
	                        this.throwUnexpectedToken();
	                    }
	                }
	                id += ch;
	            }
	        }
	        return id;
	    };
	    ;
	    Scanner.prototype.octalToDecimal = function (ch) {
	        // \0 is not octal escape sequence
	        var octal = (ch !== '0');
	        var code = octalValue(ch);
	        if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	            octal = true;
	            code = code * 8 + octalValue(this.source[this.index++]);
	            // 3 digits are only allowed when string starts
	            // with 0, 1, 2, 3
	            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                code = code * 8 + octalValue(this.source[this.index++]);
	            }
	        }
	        return {
	            code: code,
	            octal: octal
	        };
	    };
	    ;
	    // ECMA-262 11.6 Names and Keywords
	    Scanner.prototype.scanIdentifier = function () {
	        var type;
	        var start = this.index;
	        // Backslash (U+005C) starts an escaped character.
	        var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
	        // There is no keyword or literal with only one character.
	        // Thus, it must be an identifier.
	        if (id.length === 1) {
	            type = token_1.Token.Identifier;
	        }
	        else if (this.isKeyword(id)) {
	            type = token_1.Token.Keyword;
	        }
	        else if (id === 'null') {
	            type = token_1.Token.NullLiteral;
	        }
	        else if (id === 'true' || id === 'false') {
	            type = token_1.Token.BooleanLiteral;
	        }
	        else {
	            type = token_1.Token.Identifier;
	        }
	        return {
	            type: type,
	            value: id,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    // ECMA-262 11.7 Punctuators
	    Scanner.prototype.scanPunctuator = function () {
	        var token = {
	            type: token_1.Token.Punctuator,
	            value: '',
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: this.index,
	            end: this.index
	        };
	        // Check for most common single-character punctuators.
	        var str = this.source[this.index];
	        switch (str) {
	            case '(':
	            case '{':
	                if (str === '{') {
	                    this.curlyStack.push('{');
	                }
	                ++this.index;
	                break;
	            case '.':
	                ++this.index;
	                if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
	                    // Spread operator: ...
	                    this.index += 2;
	                    str = '...';
	                }
	                break;
	            case '}':
	                ++this.index;
	                this.curlyStack.pop();
	                break;
	            case ')':
	            case ';':
	            case ',':
	            case '[':
	            case ']':
	            case ':':
	            case '?':
	            case '~':
	                ++this.index;
	                break;
	            default:
	                // 4-character punctuator.
	                str = this.source.substr(this.index, 4);
	                if (str === '>>>=') {
	                    this.index += 4;
	                }
	                else {
	                    // 3-character punctuators.
	                    str = str.substr(0, 3);
	                    if (str === '===' || str === '!==' || str === '>>>' ||
	                        str === '<<=' || str === '>>=' || str === '**=') {
	                        this.index += 3;
	                    }
	                    else {
	                        // 2-character punctuators.
	                        str = str.substr(0, 2);
	                        if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
	                            str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
	                            str === '++' || str === '--' || str === '<<' || str === '>>' ||
	                            str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
	                            str === '<=' || str === '>=' || str === '=>' || str === '**') {
	                            this.index += 2;
	                        }
	                        else {
	                            // 1-character punctuators.
	                            str = this.source[this.index];
	                            if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
	                                ++this.index;
	                            }
	                        }
	                    }
	                }
	        }
	        if (this.index === token.start) {
	            this.throwUnexpectedToken();
	        }
	        token.end = this.index;
	        token.value = str;
	        return token;
	    };
	    ;
	    // ECMA-262 11.8.3 Numeric Literals
	    Scanner.prototype.scanHexLiteral = function (start) {
	        var number = '';
	        while (!this.eof()) {
	            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            number += this.source[this.index++];
	        }
	        if (number.length === 0) {
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: token_1.Token.NumericLiteral,
	            value: parseInt('0x' + number, 16),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    Scanner.prototype.scanBinaryLiteral = function (start) {
	        var number = '';
	        var ch;
	        while (!this.eof()) {
	            ch = this.source[this.index];
	            if (ch !== '0' && ch !== '1') {
	                break;
	            }
	            number += this.source[this.index++];
	        }
	        if (number.length === 0) {
	            // only 0b or 0B
	            this.throwUnexpectedToken();
	        }
	        if (!this.eof()) {
	            ch = this.source.charCodeAt(this.index);
	            /* istanbul ignore else */
	            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
	                this.throwUnexpectedToken();
	            }
	        }
	        return {
	            type: token_1.Token.NumericLiteral,
	            value: parseInt(number, 2),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    Scanner.prototype.scanOctalLiteral = function (prefix, start) {
	        var number = '';
	        var octal = false;
	        if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
	            octal = true;
	            number = '0' + this.source[this.index++];
	        }
	        else {
	            ++this.index;
	        }
	        while (!this.eof()) {
	            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            number += this.source[this.index++];
	        }
	        if (!octal && number.length === 0) {
	            // only 0o or 0O
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: token_1.Token.NumericLiteral,
	            value: parseInt(number, 8),
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    Scanner.prototype.isImplicitOctalLiteral = function () {
	        // Implicit octal, unless there is a non-octal digit.
	        // (Annex B.1.1 on Numeric Literals)
	        for (var i = this.index + 1; i < this.length; ++i) {
	            var ch = this.source[i];
	            if (ch === '8' || ch === '9') {
	                return false;
	            }
	            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                return true;
	            }
	        }
	        return true;
	    };
	    ;
	    Scanner.prototype.scanNumericLiteral = function () {
	        var start = this.index;
	        var ch = this.source[start];
	        assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
	        var number = '';
	        if (ch !== '.') {
	            number = this.source[this.index++];
	            ch = this.source[this.index];
	            // Hex number starts with '0x'.
	            // Octal number starts with '0'.
	            // Octal number in ES6 starts with '0o'.
	            // Binary number in ES6 starts with '0b'.
	            if (number === '0') {
	                if (ch === 'x' || ch === 'X') {
	                    ++this.index;
	                    return this.scanHexLiteral(start);
	                }
	                if (ch === 'b' || ch === 'B') {
	                    ++this.index;
	                    return this.scanBinaryLiteral(start);
	                }
	                if (ch === 'o' || ch === 'O') {
	                    return this.scanOctalLiteral(ch, start);
	                }
	                if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                    if (this.isImplicitOctalLiteral()) {
	                        return this.scanOctalLiteral(ch, start);
	                    }
	                }
	            }
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                number += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === '.') {
	            number += this.source[this.index++];
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                number += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === 'e' || ch === 'E') {
	            number += this.source[this.index++];
	            ch = this.source[this.index];
	            if (ch === '+' || ch === '-') {
	                number += this.source[this.index++];
	            }
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                    number += this.source[this.index++];
	                }
	            }
	            else {
	                this.throwUnexpectedToken();
	            }
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: token_1.Token.NumericLiteral,
	            value: parseFloat(number),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    // ECMA-262 11.8.4 String Literals
	    Scanner.prototype.scanStringLiteral = function () {
	        var start = this.index;
	        var quote = this.source[start];
	        assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
	        ++this.index;
	        var octal = false;
	        var str = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === quote) {
	                quote = '';
	                break;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'u':
	                        case 'x':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                str += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var unescaped = this.scanHexEscape(ch);
	                                if (!unescaped) {
	                                    this.throwUnexpectedToken();
	                                }
	                                str += unescaped;
	                            }
	                            break;
	                        case 'n':
	                            str += '\n';
	                            break;
	                        case 'r':
	                            str += '\r';
	                            break;
	                        case 't':
	                            str += '\t';
	                            break;
	                        case 'b':
	                            str += '\b';
	                            break;
	                        case 'f':
	                            str += '\f';
	                            break;
	                        case 'v':
	                            str += '\x0B';
	                            break;
	                        case '8':
	                        case '9':
	                            str += ch;
	                            this.tolerateUnexpectedToken();
	                            break;
	                        default:
	                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                var octToDec = this.octalToDecimal(ch);
	                                octal = octToDec.octal || octal;
	                                str += String.fromCharCode(octToDec.code);
	                            }
	                            else {
	                                str += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                break;
	            }
	            else {
	                str += ch;
	            }
	        }
	        if (quote !== '') {
	            this.index = start;
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: token_1.Token.StringLiteral,
	            value: str,
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    // ECMA-262 11.8.6 Template Literal Lexical Components
	    Scanner.prototype.scanTemplate = function () {
	        var cooked = '';
	        var terminated = false;
	        var start = this.index;
	        var head = (this.source[start] === '`');
	        var tail = false;
	        var rawOffset = 2;
	        ++this.index;
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === '`') {
	                rawOffset = 1;
	                tail = true;
	                terminated = true;
	                break;
	            }
	            else if (ch === '$') {
	                if (this.source[this.index] === '{') {
	                    this.curlyStack.push('${');
	                    ++this.index;
	                    terminated = true;
	                    break;
	                }
	                cooked += ch;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'n':
	                            cooked += '\n';
	                            break;
	                        case 'r':
	                            cooked += '\r';
	                            break;
	                        case 't':
	                            cooked += '\t';
	                            break;
	                        case 'u':
	                        case 'x':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                cooked += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var restore = this.index;
	                                var unescaped = this.scanHexEscape(ch);
	                                if (unescaped) {
	                                    cooked += unescaped;
	                                }
	                                else {
	                                    this.index = restore;
	                                    cooked += ch;
	                                }
	                            }
	                            break;
	                        case 'b':
	                            cooked += '\b';
	                            break;
	                        case 'f':
	                            cooked += '\f';
	                            break;
	                        case 'v':
	                            cooked += '\v';
	                            break;
	                        default:
	                            if (ch === '0') {
	                                if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                                    // Illegal: \01 \02 and so on
	                                    this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                                }
	                                cooked += '\0';
	                            }
	                            else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                // Illegal: \1 \2
	                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                            }
	                            else {
	                                cooked += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.lineNumber;
	                if (ch === '\r' && this.source[this.index] === '\n') {
	                    ++this.index;
	                }
	                this.lineStart = this.index;
	                cooked += '\n';
	            }
	            else {
	                cooked += ch;
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken();
	        }
	        if (!head) {
	            this.curlyStack.pop();
	        }
	        return {
	            type: token_1.Token.Template,
	            value: {
	                cooked: cooked,
	                raw: this.source.slice(start + 1, this.index - rawOffset)
	            },
	            head: head,
	            tail: tail,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    // ECMA-262 11.8.5 Regular Expression Literals
	    Scanner.prototype.testRegExp = function (pattern, flags) {
	        // The BMP character to use as a replacement for astral symbols when
	        // translating an ES6 "u"-flagged pattern to an ES5-compatible
	        // approximation.
	        // Note: replacing with '\uFFFF' enables false positives in unlikely
	        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
	        // pattern that would not be detected by this substitution.
	        var astralSubstitute = '\uFFFF';
	        var tmp = pattern;
	        var self = this;
	        if (flags.indexOf('u') >= 0) {
	            tmp = tmp
	                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
	                var codePoint = parseInt($1 || $2, 16);
	                if (codePoint > 0x10FFFF) {
	                    self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	                }
	                if (codePoint <= 0xFFFF) {
	                    return String.fromCharCode(codePoint);
	                }
	                return astralSubstitute;
	            })
	                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
	        }
	        // First, detect invalid regular expressions.
	        try {
	            RegExp(tmp);
	        }
	        catch (e) {
	            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	        }
	        // Return a regular expression object for this pattern-flag pair, or
	        // `null` in case the current environment doesn't support the flags it
	        // uses.
	        try {
	            return new RegExp(pattern, flags);
	        }
	        catch (exception) {
	            /* istanbul ignore next */
	            return null;
	        }
	    };
	    ;
	    Scanner.prototype.scanRegExpBody = function () {
	        var ch = this.source[this.index];
	        assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
	        var str = this.source[this.index++];
	        var classMarker = false;
	        var terminated = false;
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            str += ch;
	            if (ch === '\\') {
	                ch = this.source[this.index++];
	                // ECMA-262 7.8.5
	                if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	                }
	                str += ch;
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	            }
	            else if (classMarker) {
	                if (ch === ']') {
	                    classMarker = false;
	                }
	            }
	            else {
	                if (ch === '/') {
	                    terminated = true;
	                    break;
	                }
	                else if (ch === '[') {
	                    classMarker = true;
	                }
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	        }
	        // Exclude leading and trailing slash.
	        var body = str.substr(1, str.length - 2);
	        return {
	            value: body,
	            literal: str
	        };
	    };
	    ;
	    Scanner.prototype.scanRegExpFlags = function () {
	        var str = '';
	        var flags = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index];
	            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
	                break;
	            }
	            ++this.index;
	            if (ch === '\\' && !this.eof()) {
	                ch = this.source[this.index];
	                if (ch === 'u') {
	                    ++this.index;
	                    var restore = this.index;
	                    ch = this.scanHexEscape('u');
	                    if (ch) {
	                        flags += ch;
	                        for (str += '\\u'; restore < this.index; ++restore) {
	                            str += this.source[restore];
	                        }
	                    }
	                    else {
	                        this.index = restore;
	                        flags += 'u';
	                        str += '\\u';
	                    }
	                    this.tolerateUnexpectedToken();
	                }
	                else {
	                    str += '\\';
	                    this.tolerateUnexpectedToken();
	                }
	            }
	            else {
	                flags += ch;
	                str += ch;
	            }
	        }
	        return {
	            value: flags,
	            literal: str
	        };
	    };
	    ;
	    Scanner.prototype.scanRegExp = function () {
	        var start = this.index;
	        var body = this.scanRegExpBody();
	        var flags = this.scanRegExpFlags();
	        var value = this.testRegExp(body.value, flags.value);
	        return {
	            type: token_1.Token.RegularExpression,
	            value: value,
	            literal: body.literal + flags.literal,
	            regex: {
	                pattern: body.value,
	                flags: flags.value
	            },
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    ;
	    Scanner.prototype.lex = function () {
	        if (this.eof()) {
	            return {
	                type: token_1.Token.EOF,
	                lineNumber: this.lineNumber,
	                lineStart: this.lineStart,
	                start: this.index,
	                end: this.index
	            };
	        }
	        var cp = this.source.charCodeAt(this.index);
	        if (character_1.Character.isIdentifierStart(cp)) {
	            return this.scanIdentifier();
	        }
	        // Very common: ( and ) and ;
	        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
	            return this.scanPunctuator();
	        }
	        // String literal starts with single quote (U+0027) or double quote (U+0022).
	        if (cp === 0x27 || cp === 0x22) {
	            return this.scanStringLiteral();
	        }
	        // Dot (.) U+002E can also start a floating-point number, hence the need
	        // to check the next character.
	        if (cp === 0x2E) {
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
	                return this.scanNumericLiteral();
	            }
	            return this.scanPunctuator();
	        }
	        if (character_1.Character.isDecimalDigit(cp)) {
	            return this.scanNumericLiteral();
	        }
	        // Template literals start with ` (U+0060) for template head
	        // or } (U+007D) for template middle or template tail.
	        if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
	            return this.scanTemplate();
	        }
	        // Possible identifier start in a surrogate pair.
	        if (cp >= 0xD800 && cp < 0xDFFF) {
	            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
	                return this.scanIdentifier();
	            }
	        }
	        return this.scanPunctuator();
	    };
	    ;
	    return Scanner;
	}());
	exports.Scanner = Scanner;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	// See also tools/generate-unicode-regex.js.
	var Regex = {
	    // Unicode v8.0.0 NonAsciiIdentifierStart:
	    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
	    // Unicode v8.0.0 NonAsciiIdentifierPart:
	    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	};
	exports.Character = {
	    fromCodePoint: function (cp) {
	        return (cp < 0x10000) ? String.fromCharCode(cp) :
	            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
	                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
	    },
	    // ECMA-262 11.2 White Space
	    isWhiteSpace: function (cp) {
	        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
	            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
	    },
	    // ECMA-262 11.3 Line Terminators
	    isLineTerminator: function (cp) {
	        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
	    },
	    // ECMA-262 11.6 Identifier Names and Identifiers
	    isIdentifierStart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp)));
	    },
	    isIdentifierPart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp >= 0x30 && cp <= 0x39) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp)));
	    },
	    // ECMA-262 11.8.3 Numeric Literals
	    isDecimalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39); // 0..9
	    },
	    isHexDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39) ||
	            (cp >= 0x41 && cp <= 0x46) ||
	            (cp >= 0x61 && cp <= 0x66); // a..f
	    },
	    isOctalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x37); // 0..7
	    }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var syntax_1 = __webpack_require__(2);
	var ArrayExpression = (function () {
	    function ArrayExpression(elements) {
	        this.type = syntax_1.Syntax.ArrayExpression;
	        this.elements = elements;
	    }
	    return ArrayExpression;
	}());
	exports.ArrayExpression = ArrayExpression;
	var ArrayPattern = (function () {
	    function ArrayPattern(elements) {
	        this.type = syntax_1.Syntax.ArrayPattern;
	        this.elements = elements;
	    }
	    return ArrayPattern;
	}());
	exports.ArrayPattern = ArrayPattern;
	var ArrowFunctionExpression = (function () {
	    function ArrowFunctionExpression(params, body, expression) {
	        this.type = syntax_1.Syntax.ArrowFunctionExpression;
	        this.id = null;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = expression;
	    }
	    return ArrowFunctionExpression;
	}());
	exports.ArrowFunctionExpression = ArrowFunctionExpression;
	var AssignmentExpression = (function () {
	    function AssignmentExpression(operator, left, right) {
	        this.type = syntax_1.Syntax.AssignmentExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentExpression;
	}());
	exports.AssignmentExpression = AssignmentExpression;
	var AssignmentPattern = (function () {
	    function AssignmentPattern(left, right) {
	        this.type = syntax_1.Syntax.AssignmentPattern;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentPattern;
	}());
	exports.AssignmentPattern = AssignmentPattern;
	var BinaryExpression = (function () {
	    function BinaryExpression(operator, left, right) {
	        var logical = (operator === '||' || operator === '&&');
	        this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return BinaryExpression;
	}());
	exports.BinaryExpression = BinaryExpression;
	var BlockStatement = (function () {
	    function BlockStatement(body) {
	        this.type = syntax_1.Syntax.BlockStatement;
	        this.body = body;
	    }
	    return BlockStatement;
	}());
	exports.BlockStatement = BlockStatement;
	var BreakStatement = (function () {
	    function BreakStatement(label) {
	        this.type = syntax_1.Syntax.BreakStatement;
	        this.label = label;
	    }
	    return BreakStatement;
	}());
	exports.BreakStatement = BreakStatement;
	var CallExpression = (function () {
	    function CallExpression(callee, args) {
	        this.type = syntax_1.Syntax.CallExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return CallExpression;
	}());
	exports.CallExpression = CallExpression;
	var CatchClause = (function () {
	    function CatchClause(param, body) {
	        this.type = syntax_1.Syntax.CatchClause;
	        this.param = param;
	        this.body = body;
	    }
	    return CatchClause;
	}());
	exports.CatchClause = CatchClause;
	var ClassBody = (function () {
	    function ClassBody(body) {
	        this.type = syntax_1.Syntax.ClassBody;
	        this.body = body;
	    }
	    return ClassBody;
	}());
	exports.ClassBody = ClassBody;
	var ClassDeclaration = (function () {
	    function ClassDeclaration(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassDeclaration;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassDeclaration;
	}());
	exports.ClassDeclaration = ClassDeclaration;
	var ClassExpression = (function () {
	    function ClassExpression(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassExpression;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassExpression;
	}());
	exports.ClassExpression = ClassExpression;
	var ComputedMemberExpression = (function () {
	    function ComputedMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = true;
	        this.object = object;
	        this.property = property;
	    }
	    return ComputedMemberExpression;
	}());
	exports.ComputedMemberExpression = ComputedMemberExpression;
	var ConditionalExpression = (function () {
	    function ConditionalExpression(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.ConditionalExpression;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return ConditionalExpression;
	}());
	exports.ConditionalExpression = ConditionalExpression;
	var ContinueStatement = (function () {
	    function ContinueStatement(label) {
	        this.type = syntax_1.Syntax.ContinueStatement;
	        this.label = label;
	    }
	    return ContinueStatement;
	}());
	exports.ContinueStatement = ContinueStatement;
	var DebuggerStatement = (function () {
	    function DebuggerStatement() {
	        this.type = syntax_1.Syntax.DebuggerStatement;
	    }
	    return DebuggerStatement;
	}());
	exports.DebuggerStatement = DebuggerStatement;
	var Directive = (function () {
	    function Directive(expression, directive) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	        this.directive = directive;
	    }
	    return Directive;
	}());
	exports.Directive = Directive;
	var DoWhileStatement = (function () {
	    function DoWhileStatement(body, test) {
	        this.type = syntax_1.Syntax.DoWhileStatement;
	        this.body = body;
	        this.test = test;
	    }
	    return DoWhileStatement;
	}());
	exports.DoWhileStatement = DoWhileStatement;
	var EmptyStatement = (function () {
	    function EmptyStatement() {
	        this.type = syntax_1.Syntax.EmptyStatement;
	    }
	    return EmptyStatement;
	}());
	exports.EmptyStatement = EmptyStatement;
	var ExportAllDeclaration = (function () {
	    function ExportAllDeclaration(source) {
	        this.type = syntax_1.Syntax.ExportAllDeclaration;
	        this.source = source;
	    }
	    return ExportAllDeclaration;
	}());
	exports.ExportAllDeclaration = ExportAllDeclaration;
	var ExportDefaultDeclaration = (function () {
	    function ExportDefaultDeclaration(declaration) {
	        this.type = syntax_1.Syntax.ExportDefaultDeclaration;
	        this.declaration = declaration;
	    }
	    return ExportDefaultDeclaration;
	}());
	exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
	var ExportNamedDeclaration = (function () {
	    function ExportNamedDeclaration(declaration, specifiers, source) {
	        this.type = syntax_1.Syntax.ExportNamedDeclaration;
	        this.declaration = declaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ExportNamedDeclaration;
	}());
	exports.ExportNamedDeclaration = ExportNamedDeclaration;
	var ExportSpecifier = (function () {
	    function ExportSpecifier(local, exported) {
	        this.type = syntax_1.Syntax.ExportSpecifier;
	        this.exported = exported;
	        this.local = local;
	    }
	    return ExportSpecifier;
	}());
	exports.ExportSpecifier = ExportSpecifier;
	var ExpressionStatement = (function () {
	    function ExpressionStatement(expression) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	    }
	    return ExpressionStatement;
	}());
	exports.ExpressionStatement = ExpressionStatement;
	var ForInStatement = (function () {
	    function ForInStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForInStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	        this.each = false;
	    }
	    return ForInStatement;
	}());
	exports.ForInStatement = ForInStatement;
	var ForOfStatement = (function () {
	    function ForOfStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForOfStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	    }
	    return ForOfStatement;
	}());
	exports.ForOfStatement = ForOfStatement;
	var ForStatement = (function () {
	    function ForStatement(init, test, update, body) {
	        this.type = syntax_1.Syntax.ForStatement;
	        this.init = init;
	        this.test = test;
	        this.update = update;
	        this.body = body;
	    }
	    return ForStatement;
	}());
	exports.ForStatement = ForStatement;
	var FunctionDeclaration = (function () {
	    function FunctionDeclaration(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionDeclaration;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	    }
	    return FunctionDeclaration;
	}());
	exports.FunctionDeclaration = FunctionDeclaration;
	var FunctionExpression = (function () {
	    function FunctionExpression(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionExpression;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	    }
	    return FunctionExpression;
	}());
	exports.FunctionExpression = FunctionExpression;
	var Identifier = (function () {
	    function Identifier(name) {
	        this.type = syntax_1.Syntax.Identifier;
	        this.name = name;
	    }
	    return Identifier;
	}());
	exports.Identifier = Identifier;
	var IfStatement = (function () {
	    function IfStatement(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.IfStatement;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return IfStatement;
	}());
	exports.IfStatement = IfStatement;
	var ImportDeclaration = (function () {
	    function ImportDeclaration(specifiers, source) {
	        this.type = syntax_1.Syntax.ImportDeclaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ImportDeclaration;
	}());
	exports.ImportDeclaration = ImportDeclaration;
	var ImportDefaultSpecifier = (function () {
	    function ImportDefaultSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportDefaultSpecifier;
	        this.local = local;
	    }
	    return ImportDefaultSpecifier;
	}());
	exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
	var ImportNamespaceSpecifier = (function () {
	    function ImportNamespaceSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
	        this.local = local;
	    }
	    return ImportNamespaceSpecifier;
	}());
	exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
	var ImportSpecifier = (function () {
	    function ImportSpecifier(local, imported) {
	        this.type = syntax_1.Syntax.ImportSpecifier;
	        this.local = local;
	        this.imported = imported;
	    }
	    return ImportSpecifier;
	}());
	exports.ImportSpecifier = ImportSpecifier;
	var LabeledStatement = (function () {
	    function LabeledStatement(label, body) {
	        this.type = syntax_1.Syntax.LabeledStatement;
	        this.label = label;
	        this.body = body;
	    }
	    return LabeledStatement;
	}());
	exports.LabeledStatement = LabeledStatement;
	var Literal = (function () {
	    function Literal(value, raw) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	    }
	    return Literal;
	}());
	exports.Literal = Literal;
	var MetaProperty = (function () {
	    function MetaProperty(meta, property) {
	        this.type = syntax_1.Syntax.MetaProperty;
	        this.meta = meta;
	        this.property = property;
	    }
	    return MetaProperty;
	}());
	exports.MetaProperty = MetaProperty;
	var MethodDefinition = (function () {
	    function MethodDefinition(key, computed, value, kind, isStatic) {
	        this.type = syntax_1.Syntax.MethodDefinition;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.static = isStatic;
	    }
	    return MethodDefinition;
	}());
	exports.MethodDefinition = MethodDefinition;
	var NewExpression = (function () {
	    function NewExpression(callee, args) {
	        this.type = syntax_1.Syntax.NewExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return NewExpression;
	}());
	exports.NewExpression = NewExpression;
	var ObjectExpression = (function () {
	    function ObjectExpression(properties) {
	        this.type = syntax_1.Syntax.ObjectExpression;
	        this.properties = properties;
	    }
	    return ObjectExpression;
	}());
	exports.ObjectExpression = ObjectExpression;
	var ObjectPattern = (function () {
	    function ObjectPattern(properties) {
	        this.type = syntax_1.Syntax.ObjectPattern;
	        this.properties = properties;
	    }
	    return ObjectPattern;
	}());
	exports.ObjectPattern = ObjectPattern;
	var Program = (function () {
	    function Program(body, sourceType) {
	        this.type = syntax_1.Syntax.Program;
	        this.body = body;
	        this.sourceType = sourceType;
	    }
	    return Program;
	}());
	exports.Program = Program;
	var Property = (function () {
	    function Property(kind, key, computed, value, method, shorthand) {
	        this.type = syntax_1.Syntax.Property;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.method = method;
	        this.shorthand = shorthand;
	    }
	    return Property;
	}());
	exports.Property = Property;
	var RegexLiteral = (function () {
	    function RegexLiteral(value, raw, regex) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	        this.regex = regex;
	    }
	    return RegexLiteral;
	}());
	exports.RegexLiteral = RegexLiteral;
	var RestElement = (function () {
	    function RestElement(argument) {
	        this.type = syntax_1.Syntax.RestElement;
	        this.argument = argument;
	    }
	    return RestElement;
	}());
	exports.RestElement = RestElement;
	var ReturnStatement = (function () {
	    function ReturnStatement(argument) {
	        this.type = syntax_1.Syntax.ReturnStatement;
	        this.argument = argument;
	    }
	    return ReturnStatement;
	}());
	exports.ReturnStatement = ReturnStatement;
	var SequenceExpression = (function () {
	    function SequenceExpression(expressions) {
	        this.type = syntax_1.Syntax.SequenceExpression;
	        this.expressions = expressions;
	    }
	    return SequenceExpression;
	}());
	exports.SequenceExpression = SequenceExpression;
	var SpreadElement = (function () {
	    function SpreadElement(argument) {
	        this.type = syntax_1.Syntax.SpreadElement;
	        this.argument = argument;
	    }
	    return SpreadElement;
	}());
	exports.SpreadElement = SpreadElement;
	var StaticMemberExpression = (function () {
	    function StaticMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = false;
	        this.object = object;
	        this.property = property;
	    }
	    return StaticMemberExpression;
	}());
	exports.StaticMemberExpression = StaticMemberExpression;
	var Super = (function () {
	    function Super() {
	        this.type = syntax_1.Syntax.Super;
	    }
	    return Super;
	}());
	exports.Super = Super;
	var SwitchCase = (function () {
	    function SwitchCase(test, consequent) {
	        this.type = syntax_1.Syntax.SwitchCase;
	        this.test = test;
	        this.consequent = consequent;
	    }
	    return SwitchCase;
	}());
	exports.SwitchCase = SwitchCase;
	var SwitchStatement = (function () {
	    function SwitchStatement(discriminant, cases) {
	        this.type = syntax_1.Syntax.SwitchStatement;
	        this.discriminant = discriminant;
	        this.cases = cases;
	    }
	    return SwitchStatement;
	}());
	exports.SwitchStatement = SwitchStatement;
	var TaggedTemplateExpression = (function () {
	    function TaggedTemplateExpression(tag, quasi) {
	        this.type = syntax_1.Syntax.TaggedTemplateExpression;
	        this.tag = tag;
	        this.quasi = quasi;
	    }
	    return TaggedTemplateExpression;
	}());
	exports.TaggedTemplateExpression = TaggedTemplateExpression;
	var TemplateElement = (function () {
	    function TemplateElement(value, tail) {
	        this.type = syntax_1.Syntax.TemplateElement;
	        this.value = value;
	        this.tail = tail;
	    }
	    return TemplateElement;
	}());
	exports.TemplateElement = TemplateElement;
	var TemplateLiteral = (function () {
	    function TemplateLiteral(quasis, expressions) {
	        this.type = syntax_1.Syntax.TemplateLiteral;
	        this.quasis = quasis;
	        this.expressions = expressions;
	    }
	    return TemplateLiteral;
	}());
	exports.TemplateLiteral = TemplateLiteral;
	var ThisExpression = (function () {
	    function ThisExpression() {
	        this.type = syntax_1.Syntax.ThisExpression;
	    }
	    return ThisExpression;
	}());
	exports.ThisExpression = ThisExpression;
	var ThrowStatement = (function () {
	    function ThrowStatement(argument) {
	        this.type = syntax_1.Syntax.ThrowStatement;
	        this.argument = argument;
	    }
	    return ThrowStatement;
	}());
	exports.ThrowStatement = ThrowStatement;
	var TryStatement = (function () {
	    function TryStatement(block, handler, finalizer) {
	        this.type = syntax_1.Syntax.TryStatement;
	        this.block = block;
	        this.handler = handler;
	        this.finalizer = finalizer;
	    }
	    return TryStatement;
	}());
	exports.TryStatement = TryStatement;
	var UnaryExpression = (function () {
	    function UnaryExpression(operator, argument) {
	        this.type = syntax_1.Syntax.UnaryExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = true;
	    }
	    return UnaryExpression;
	}());
	exports.UnaryExpression = UnaryExpression;
	var UpdateExpression = (function () {
	    function UpdateExpression(operator, argument, prefix) {
	        this.type = syntax_1.Syntax.UpdateExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = prefix;
	    }
	    return UpdateExpression;
	}());
	exports.UpdateExpression = UpdateExpression;
	var VariableDeclaration = (function () {
	    function VariableDeclaration(declarations, kind) {
	        this.type = syntax_1.Syntax.VariableDeclaration;
	        this.declarations = declarations;
	        this.kind = kind;
	    }
	    return VariableDeclaration;
	}());
	exports.VariableDeclaration = VariableDeclaration;
	var VariableDeclarator = (function () {
	    function VariableDeclarator(id, init) {
	        this.type = syntax_1.Syntax.VariableDeclarator;
	        this.id = id;
	        this.init = init;
	    }
	    return VariableDeclarator;
	}());
	exports.VariableDeclarator = VariableDeclarator;
	var WhileStatement = (function () {
	    function WhileStatement(test, body) {
	        this.type = syntax_1.Syntax.WhileStatement;
	        this.test = test;
	        this.body = body;
	    }
	    return WhileStatement;
	}());
	exports.WhileStatement = WhileStatement;
	var WithStatement = (function () {
	    function WithStatement(object, body) {
	        this.type = syntax_1.Syntax.WithStatement;
	        this.object = object;
	        this.body = body;
	    }
	    return WithStatement;
	}());
	exports.WithStatement = WithStatement;
	var YieldExpression = (function () {
	    function YieldExpression(argument, delegate) {
	        this.type = syntax_1.Syntax.YieldExpression;
	        this.argument = argument;
	        this.delegate = delegate;
	    }
	    return YieldExpression;
	}());
	exports.YieldExpression = YieldExpression;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
/* istanbul ignore next */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var character_1 = __webpack_require__(9);
	var token_1 = __webpack_require__(7);
	var parser_1 = __webpack_require__(3);
	var xhtml_entities_1 = __webpack_require__(12);
	var jsx_syntax_1 = __webpack_require__(13);
	var Node = __webpack_require__(10);
	var JSXNode = __webpack_require__(14);
	var JSXToken;
	(function (JSXToken) {
	    JSXToken[JSXToken["Identifier"] = 100] = "Identifier";
	    JSXToken[JSXToken["Text"] = 101] = "Text";
	})(JSXToken || (JSXToken = {}));
	token_1.TokenName[JSXToken.Identifier] = 'JSXIdentifier';
	token_1.TokenName[JSXToken.Text] = 'JSXText';
	// Fully qualified element name, e.g. <svg:path> returns "svg:path"
	function getQualifiedElementName(elementName) {
	    var qualifiedName;
	    switch (elementName.type) {
	        case jsx_syntax_1.JSXSyntax.JSXIdentifier:
	            var id = (elementName);
	            qualifiedName = id.name;
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
	            var ns = (elementName);
	            qualifiedName = getQualifiedElementName(ns.namespace) + ':' +
	                getQualifiedElementName(ns.name);
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
	            var expr = (elementName);
	            qualifiedName = getQualifiedElementName(expr.object) + '.' +
	                getQualifiedElementName(expr.property);
	            break;
	    }
	    return qualifiedName;
	}
	var JSXParser = (function (_super) {
	    __extends(JSXParser, _super);
	    function JSXParser(code, options, delegate) {
	        _super.call(this, code, options, delegate);
	    }
	    JSXParser.prototype.parsePrimaryExpression = function () {
	        return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
	    };
	    JSXParser.prototype.startJSX = function () {
	        // Unwind the scanner before the lookahead token.
	        this.scanner.index = this.startMarker.index;
	        this.scanner.lineNumber = this.startMarker.lineNumber;
	        this.scanner.lineStart = this.startMarker.lineStart;
	    };
	    JSXParser.prototype.finishJSX = function () {
	        // Prime the next lookahead.
	        this.nextToken();
	    };
	    JSXParser.prototype.reenterJSX = function () {
	        this.startJSX();
	        this.expectJSX('}');
	        // Pop the closing '}' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	    };
	    JSXParser.prototype.createJSXNode = function () {
	        this.collectComments();
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.createJSXChildNode = function () {
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.scanXHTMLEntity = function (quote) {
	        var result = '&';
	        var valid = true;
	        var terminated = false;
	        var numeric = false;
	        var hex = false;
	        while (!this.scanner.eof() && valid && !terminated) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === quote) {
	                break;
	            }
	            terminated = (ch === ';');
	            result += ch;
	            ++this.scanner.index;
	            if (!terminated) {
	                switch (result.length) {
	                    case 2:
	                        // e.g. '&#123;'
	                        numeric = (ch === '#');
	                        break;
	                    case 3:
	                        if (numeric) {
	                            // e.g. '&#x41;'
	                            hex = (ch === 'x');
	                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
	                            numeric = numeric && !hex;
	                        }
	                        break;
	                    default:
	                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
	                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
	                        break;
	                }
	            }
	        }
	        if (valid && terminated && result.length > 2) {
	            // e.g. '&#x41;' becomes just '#x41'
	            var str = result.substr(1, result.length - 2);
	            if (numeric && str.length > 1) {
	                result = String.fromCharCode(parseInt(str.substr(1), 10));
	            }
	            else if (hex && str.length > 2) {
	                result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
	            }
	            else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
	                result = xhtml_entities_1.XHTMLEntities[str];
	            }
	        }
	        return result;
	    };
	    // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
	    JSXParser.prototype.lexJSX = function () {
	        var cp = this.scanner.source.charCodeAt(this.scanner.index);
	        // < > / : = { }
	        if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
	            var value = this.scanner.source[this.scanner.index++];
	            return {
	                type: token_1.Token.Punctuator,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index - 1,
	                end: this.scanner.index
	            };
	        }
	        // " '
	        if (cp === 34 || cp === 39) {
	            var start = this.scanner.index;
	            var quote = this.scanner.source[this.scanner.index++];
	            var str = '';
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source[this.scanner.index++];
	                if (ch === quote) {
	                    break;
	                }
	                else if (ch === '&') {
	                    str += this.scanXHTMLEntity(quote);
	                }
	                else {
	                    str += ch;
	                }
	            }
	            return {
	                type: token_1.Token.StringLiteral,
	                value: str,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // ... or .
	        if (cp === 46) {
	            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
	            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
	            var value = (n1 === 46 && n2 === 46) ? '...' : '.';
	            var start = this.scanner.index;
	            this.scanner.index += value.length;
	            return {
	                type: token_1.Token.Punctuator,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // `
	        if (cp === 96) {
	            // Only placeholder, since it will be rescanned as a real assignment expression.
	            return {
	                type: token_1.Token.Template,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index,
	                end: this.scanner.index
	            };
	        }
	        // Identifer can not contain backslash (char code 92).
	        if (character_1.Character.isIdentifierStart(cp) && (cp !== 92)) {
	            var start = this.scanner.index;
	            ++this.scanner.index;
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source.charCodeAt(this.scanner.index);
	                if (character_1.Character.isIdentifierPart(ch) && (ch !== 92)) {
	                    ++this.scanner.index;
	                }
	                else if (ch === 45) {
	                    // Hyphen (char code 45) can be part of an identifier.
	                    ++this.scanner.index;
	                }
	                else {
	                    break;
	                }
	            }
	            var id = this.scanner.source.slice(start, this.scanner.index);
	            return {
	                type: JSXToken.Identifier,
	                value: id,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        this.scanner.throwUnexpectedToken();
	    };
	    JSXParser.prototype.nextJSXToken = function () {
	        this.collectComments();
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.lineNumber = this.scanner.lineNumber;
	        this.startMarker.lineStart = this.scanner.lineStart;
	        var token = this.lexJSX();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.lineNumber = this.scanner.lineNumber;
	        this.lastMarker.lineStart = this.scanner.lineStart;
	        if (this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.nextJSXText = function () {
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.lineNumber = this.scanner.lineNumber;
	        this.startMarker.lineStart = this.scanner.lineStart;
	        var start = this.scanner.index;
	        var text = '';
	        while (!this.scanner.eof()) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === '{' || ch === '<') {
	                break;
	            }
	            ++this.scanner.index;
	            text += ch;
	            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.scanner.lineNumber;
	                if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
	                    ++this.scanner.index;
	                }
	                this.scanner.lineStart = this.scanner.index;
	            }
	        }
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.lineNumber = this.scanner.lineNumber;
	        this.lastMarker.lineStart = this.scanner.lineStart;
	        var token = {
	            type: JSXToken.Text,
	            value: text,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: this.scanner.lineStart,
	            start: start,
	            end: this.scanner.index
	        };
	        if ((text.length > 0) && this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.peekJSXToken = function () {
	        var previousIndex = this.scanner.index;
	        var previousLineNumber = this.scanner.lineNumber;
	        var previousLineStart = this.scanner.lineStart;
	        this.scanner.scanComments();
	        var next = this.lexJSX();
	        this.scanner.index = previousIndex;
	        this.scanner.lineNumber = previousLineNumber;
	        this.scanner.lineStart = previousLineStart;
	        return next;
	    };
	    // Expect the next JSX token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    JSXParser.prototype.expectJSX = function (value) {
	        var token = this.nextJSXToken();
	        if (token.type !== token_1.Token.Punctuator || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next JSX token matches the specified punctuator.
	    JSXParser.prototype.matchJSX = function (value) {
	        var next = this.peekJSXToken();
	        return next.type === token_1.Token.Punctuator && next.value === value;
	    };
	    JSXParser.prototype.parseJSXIdentifier = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== JSXToken.Identifier) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
	    };
	    JSXParser.prototype.parseJSXElementName = function () {
	        var node = this.createJSXNode();
	        var elementName = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = elementName;
	            this.expectJSX(':');
	            var name_1 = this.parseJSXIdentifier();
	            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
	        }
	        else if (this.matchJSX('.')) {
	            while (this.matchJSX('.')) {
	                var object = elementName;
	                this.expectJSX('.');
	                var property = this.parseJSXIdentifier();
	                elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
	            }
	        }
	        return elementName;
	    };
	    JSXParser.prototype.parseJSXAttributeName = function () {
	        var node = this.createJSXNode();
	        var attributeName;
	        var identifier = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = identifier;
	            this.expectJSX(':');
	            var name_2 = this.parseJSXIdentifier();
	            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
	        }
	        else {
	            attributeName = identifier;
	        }
	        return attributeName;
	    };
	    JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== token_1.Token.StringLiteral) {
	            this.throwUnexpectedToken(token);
	        }
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    JSXParser.prototype.parseJSXExpressionAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.finishJSX();
	        if (this.match('}')) {
	            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
	        }
	        var expression = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXAttributeValue = function () {
	        return this.matchJSX('{') ? this.parseJSXExpressionAttribute() :
	            this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
	    };
	    JSXParser.prototype.parseJSXNameValueAttribute = function () {
	        var node = this.createJSXNode();
	        var name = this.parseJSXAttributeName();
	        var value = null;
	        if (this.matchJSX('=')) {
	            this.expectJSX('=');
	            value = this.parseJSXAttributeValue();
	        }
	        return this.finalize(node, new JSXNode.JSXAttribute(name, value));
	    };
	    JSXParser.prototype.parseJSXSpreadAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.expectJSX('...');
	        this.finishJSX();
	        var argument = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
	    };
	    JSXParser.prototype.parseJSXAttributes = function () {
	        var attributes = [];
	        while (!this.matchJSX('/') && !this.matchJSX('>')) {
	            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() :
	                this.parseJSXNameValueAttribute();
	            attributes.push(attribute);
	        }
	        return attributes;
	    };
	    JSXParser.prototype.parseJSXOpeningElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXBoundaryElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        if (this.matchJSX('/')) {
	            this.expectJSX('/');
	            var name_3 = this.parseJSXElementName();
	            this.expectJSX('>');
	            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
	        }
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXEmptyExpression = function () {
	        var node = this.createJSXChildNode();
	        this.collectComments();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.lineNumber = this.scanner.lineNumber;
	        this.lastMarker.lineStart = this.scanner.lineStart;
	        return this.finalize(node, new JSXNode.JSXEmptyExpression());
	    };
	    JSXParser.prototype.parseJSXExpressionContainer = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        var expression;
	        if (this.matchJSX('}')) {
	            expression = this.parseJSXEmptyExpression();
	            this.expectJSX('}');
	        }
	        else {
	            this.finishJSX();
	            expression = this.parseAssignmentExpression();
	            this.reenterJSX();
	        }
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXChildren = function () {
	        var children = [];
	        while (!this.scanner.eof()) {
	            var node = this.createJSXChildNode();
	            var token = this.nextJSXText();
	            if (token.start < token.end) {
	                var raw = this.getTokenRaw(token);
	                var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
	                children.push(child);
	            }
	            if (this.scanner.source[this.scanner.index] === '{') {
	                var container = this.parseJSXExpressionContainer();
	                children.push(container);
	            }
	            else {
	                break;
	            }
	        }
	        return children;
	    };
	    JSXParser.prototype.parseComplexJSXElement = function (el) {
	        var stack = [];
	        while (!this.scanner.eof()) {
	            el.children = el.children.concat(this.parseJSXChildren());
	            var node = this.createJSXChildNode();
	            var element = this.parseJSXBoundaryElement();
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
	                var opening = (element);
	                if (opening.selfClosing) {
	                    var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
	                    el.children.push(child);
	                }
	                else {
	                    stack.push(el);
	                    el = { node: node, opening: opening, closing: null, children: [] };
	                }
	            }
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
	                el.closing = (element);
	                var open_1 = getQualifiedElementName(el.opening.name);
	                var close_1 = getQualifiedElementName(el.closing.name);
	                if (open_1 !== close_1) {
	                    this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
	                }
	                if (stack.length > 0) {
	                    var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
	                    el = stack.pop();
	                    el.children.push(child);
	                }
	                else {
	                    break;
	                }
	            }
	        }
	        return el;
	    };
	    JSXParser.prototype.parseJSXElement = function () {
	        var node = this.createJSXNode();
	        var opening = this.parseJSXOpeningElement();
	        var children = [];
	        var closing = null;
	        if (!opening.selfClosing) {
	            var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
	            children = el.children;
	            closing = el.closing;
	        }
	        return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
	    };
	    JSXParser.prototype.parseJSXRoot = function () {
	        // Pop the opening '<' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	        this.startJSX();
	        var element = this.parseJSXElement();
	        this.finishJSX();
	        return element;
	    };
	    return JSXParser;
	}(parser_1.Parser));
	exports.JSXParser = JSXParser;


/***/ },
/* 12 */
/***/ function(module, exports) {

	// Generated by generate-xhtml-entities.js. DO NOT MODIFY!
	"use strict";
	exports.XHTMLEntities = {
	    quot: '\u0022',
	    amp: '\u0026',
	    apos: '\u0027',
	    gt: '\u003E',
	    nbsp: '\u00A0',
	    iexcl: '\u00A1',
	    cent: '\u00A2',
	    pound: '\u00A3',
	    curren: '\u00A4',
	    yen: '\u00A5',
	    brvbar: '\u00A6',
	    sect: '\u00A7',
	    uml: '\u00A8',
	    copy: '\u00A9',
	    ordf: '\u00AA',
	    laquo: '\u00AB',
	    not: '\u00AC',
	    shy: '\u00AD',
	    reg: '\u00AE',
	    macr: '\u00AF',
	    deg: '\u00B0',
	    plusmn: '\u00B1',
	    sup2: '\u00B2',
	    sup3: '\u00B3',
	    acute: '\u00B4',
	    micro: '\u00B5',
	    para: '\u00B6',
	    middot: '\u00B7',
	    cedil: '\u00B8',
	    sup1: '\u00B9',
	    ordm: '\u00BA',
	    raquo: '\u00BB',
	    frac14: '\u00BC',
	    frac12: '\u00BD',
	    frac34: '\u00BE',
	    iquest: '\u00BF',
	    Agrave: '\u00C0',
	    Aacute: '\u00C1',
	    Acirc: '\u00C2',
	    Atilde: '\u00C3',
	    Auml: '\u00C4',
	    Aring: '\u00C5',
	    AElig: '\u00C6',
	    Ccedil: '\u00C7',
	    Egrave: '\u00C8',
	    Eacute: '\u00C9',
	    Ecirc: '\u00CA',
	    Euml: '\u00CB',
	    Igrave: '\u00CC',
	    Iacute: '\u00CD',
	    Icirc: '\u00CE',
	    Iuml: '\u00CF',
	    ETH: '\u00D0',
	    Ntilde: '\u00D1',
	    Ograve: '\u00D2',
	    Oacute: '\u00D3',
	    Ocirc: '\u00D4',
	    Otilde: '\u00D5',
	    Ouml: '\u00D6',
	    times: '\u00D7',
	    Oslash: '\u00D8',
	    Ugrave: '\u00D9',
	    Uacute: '\u00DA',
	    Ucirc: '\u00DB',
	    Uuml: '\u00DC',
	    Yacute: '\u00DD',
	    THORN: '\u00DE',
	    szlig: '\u00DF',
	    agrave: '\u00E0',
	    aacute: '\u00E1',
	    acirc: '\u00E2',
	    atilde: '\u00E3',
	    auml: '\u00E4',
	    aring: '\u00E5',
	    aelig: '\u00E6',
	    ccedil: '\u00E7',
	    egrave: '\u00E8',
	    eacute: '\u00E9',
	    ecirc: '\u00EA',
	    euml: '\u00EB',
	    igrave: '\u00EC',
	    iacute: '\u00ED',
	    icirc: '\u00EE',
	    iuml: '\u00EF',
	    eth: '\u00F0',
	    ntilde: '\u00F1',
	    ograve: '\u00F2',
	    oacute: '\u00F3',
	    ocirc: '\u00F4',
	    otilde: '\u00F5',
	    ouml: '\u00F6',
	    divide: '\u00F7',
	    oslash: '\u00F8',
	    ugrave: '\u00F9',
	    uacute: '\u00FA',
	    ucirc: '\u00FB',
	    uuml: '\u00FC',
	    yacute: '\u00FD',
	    thorn: '\u00FE',
	    yuml: '\u00FF',
	    OElig: '\u0152',
	    oelig: '\u0153',
	    Scaron: '\u0160',
	    scaron: '\u0161',
	    Yuml: '\u0178',
	    fnof: '\u0192',
	    circ: '\u02C6',
	    tilde: '\u02DC',
	    Alpha: '\u0391',
	    Beta: '\u0392',
	    Gamma: '\u0393',
	    Delta: '\u0394',
	    Epsilon: '\u0395',
	    Zeta: '\u0396',
	    Eta: '\u0397',
	    Theta: '\u0398',
	    Iota: '\u0399',
	    Kappa: '\u039A',
	    Lambda: '\u039B',
	    Mu: '\u039C',
	    Nu: '\u039D',
	    Xi: '\u039E',
	    Omicron: '\u039F',
	    Pi: '\u03A0',
	    Rho: '\u03A1',
	    Sigma: '\u03A3',
	    Tau: '\u03A4',
	    Upsilon: '\u03A5',
	    Phi: '\u03A6',
	    Chi: '\u03A7',
	    Psi: '\u03A8',
	    Omega: '\u03A9',
	    alpha: '\u03B1',
	    beta: '\u03B2',
	    gamma: '\u03B3',
	    delta: '\u03B4',
	    epsilon: '\u03B5',
	    zeta: '\u03B6',
	    eta: '\u03B7',
	    theta: '\u03B8',
	    iota: '\u03B9',
	    kappa: '\u03BA',
	    lambda: '\u03BB',
	    mu: '\u03BC',
	    nu: '\u03BD',
	    xi: '\u03BE',
	    omicron: '\u03BF',
	    pi: '\u03C0',
	    rho: '\u03C1',
	    sigmaf: '\u03C2',
	    sigma: '\u03C3',
	    tau: '\u03C4',
	    upsilon: '\u03C5',
	    phi: '\u03C6',
	    chi: '\u03C7',
	    psi: '\u03C8',
	    omega: '\u03C9',
	    thetasym: '\u03D1',
	    upsih: '\u03D2',
	    piv: '\u03D6',
	    ensp: '\u2002',
	    emsp: '\u2003',
	    thinsp: '\u2009',
	    zwnj: '\u200C',
	    zwj: '\u200D',
	    lrm: '\u200E',
	    rlm: '\u200F',
	    ndash: '\u2013',
	    mdash: '\u2014',
	    lsquo: '\u2018',
	    rsquo: '\u2019',
	    sbquo: '\u201A',
	    ldquo: '\u201C',
	    rdquo: '\u201D',
	    bdquo: '\u201E',
	    dagger: '\u2020',
	    Dagger: '\u2021',
	    bull: '\u2022',
	    hellip: '\u2026',
	    permil: '\u2030',
	    prime: '\u2032',
	    Prime: '\u2033',
	    lsaquo: '\u2039',
	    rsaquo: '\u203A',
	    oline: '\u203E',
	    frasl: '\u2044',
	    euro: '\u20AC',
	    image: '\u2111',
	    weierp: '\u2118',
	    real: '\u211C',
	    trade: '\u2122',
	    alefsym: '\u2135',
	    larr: '\u2190',
	    uarr: '\u2191',
	    rarr: '\u2192',
	    darr: '\u2193',
	    harr: '\u2194',
	    crarr: '\u21B5',
	    lArr: '\u21D0',
	    uArr: '\u21D1',
	    rArr: '\u21D2',
	    dArr: '\u21D3',
	    hArr: '\u21D4',
	    forall: '\u2200',
	    part: '\u2202',
	    exist: '\u2203',
	    empty: '\u2205',
	    nabla: '\u2207',
	    isin: '\u2208',
	    notin: '\u2209',
	    ni: '\u220B',
	    prod: '\u220F',
	    sum: '\u2211',
	    minus: '\u2212',
	    lowast: '\u2217',
	    radic: '\u221A',
	    prop: '\u221D',
	    infin: '\u221E',
	    ang: '\u2220',
	    and: '\u2227',
	    or: '\u2228',
	    cap: '\u2229',
	    cup: '\u222A',
	    int: '\u222B',
	    there4: '\u2234',
	    sim: '\u223C',
	    cong: '\u2245',
	    asymp: '\u2248',
	    ne: '\u2260',
	    equiv: '\u2261',
	    le: '\u2264',
	    ge: '\u2265',
	    sub: '\u2282',
	    sup: '\u2283',
	    nsub: '\u2284',
	    sube: '\u2286',
	    supe: '\u2287',
	    oplus: '\u2295',
	    otimes: '\u2297',
	    perp: '\u22A5',
	    sdot: '\u22C5',
	    lceil: '\u2308',
	    rceil: '\u2309',
	    lfloor: '\u230A',
	    rfloor: '\u230B',
	    loz: '\u25CA',
	    spades: '\u2660',
	    clubs: '\u2663',
	    hearts: '\u2665',
	    diams: '\u2666',
	    lang: '\u27E8',
	    rang: '\u27E9'
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	exports.JSXSyntax = {
	    JSXAttribute: 'JSXAttribute',
	    JSXClosingElement: 'JSXClosingElement',
	    JSXElement: 'JSXElement',
	    JSXEmptyExpression: 'JSXEmptyExpression',
	    JSXExpressionContainer: 'JSXExpressionContainer',
	    JSXIdentifier: 'JSXIdentifier',
	    JSXMemberExpression: 'JSXMemberExpression',
	    JSXNamespacedName: 'JSXNamespacedName',
	    JSXOpeningElement: 'JSXOpeningElement',
	    JSXSpreadAttribute: 'JSXSpreadAttribute',
	    JSXText: 'JSXText'
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var jsx_syntax_1 = __webpack_require__(13);
	var JSXClosingElement = (function () {
	    function JSXClosingElement(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
	        this.name = name;
	    }
	    return JSXClosingElement;
	}());
	exports.JSXClosingElement = JSXClosingElement;
	var JSXElement = (function () {
	    function JSXElement(openingElement, children, closingElement) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXElement;
	        this.openingElement = openingElement;
	        this.children = children;
	        this.closingElement = closingElement;
	    }
	    return JSXElement;
	}());
	exports.JSXElement = JSXElement;
	var JSXEmptyExpression = (function () {
	    function JSXEmptyExpression() {
	        this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
	    }
	    return JSXEmptyExpression;
	}());
	exports.JSXEmptyExpression = JSXEmptyExpression;
	var JSXExpressionContainer = (function () {
	    function JSXExpressionContainer(expression) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
	        this.expression = expression;
	    }
	    return JSXExpressionContainer;
	}());
	exports.JSXExpressionContainer = JSXExpressionContainer;
	var JSXIdentifier = (function () {
	    function JSXIdentifier(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
	        this.name = name;
	    }
	    return JSXIdentifier;
	}());
	exports.JSXIdentifier = JSXIdentifier;
	var JSXMemberExpression = (function () {
	    function JSXMemberExpression(object, property) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
	        this.object = object;
	        this.property = property;
	    }
	    return JSXMemberExpression;
	}());
	exports.JSXMemberExpression = JSXMemberExpression;
	var JSXAttribute = (function () {
	    function JSXAttribute(name, value) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
	        this.name = name;
	        this.value = value;
	    }
	    return JSXAttribute;
	}());
	exports.JSXAttribute = JSXAttribute;
	var JSXNamespacedName = (function () {
	    function JSXNamespacedName(namespace, name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
	        this.namespace = namespace;
	        this.name = name;
	    }
	    return JSXNamespacedName;
	}());
	exports.JSXNamespacedName = JSXNamespacedName;
	var JSXOpeningElement = (function () {
	    function JSXOpeningElement(name, selfClosing, attributes) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
	        this.name = name;
	        this.selfClosing = selfClosing;
	        this.attributes = attributes;
	    }
	    return JSXOpeningElement;
	}());
	exports.JSXOpeningElement = JSXOpeningElement;
	var JSXSpreadAttribute = (function () {
	    function JSXSpreadAttribute(argument) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
	        this.argument = argument;
	    }
	    return JSXSpreadAttribute;
	}());
	exports.JSXSpreadAttribute = JSXSpreadAttribute;
	var JSXText = (function () {
	    function JSXText(value, raw) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXText;
	        this.value = value;
	        this.raw = raw;
	    }
	    return JSXText;
	}());
	exports.JSXText = JSXText;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var scanner_1 = __webpack_require__(8);
	var error_handler_1 = __webpack_require__(6);
	var token_1 = __webpack_require__(7);
	var Reader = (function () {
	    function Reader() {
	        this.values = [];
	        this.curly = this.paren = -1;
	    }
	    ;
	    // A function following one of those tokens is an expression.
	    Reader.prototype.beforeFunctionExpression = function (t) {
	        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
	            'return', 'case', 'delete', 'throw', 'void',
	            // assignment operators
	            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
	            '&=', '|=', '^=', ',',
	            // binary/unary operators
	            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
	            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
	            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
	    };
	    ;
	    // Determine if forward slash (/) is an operator or part of a regular expression
	    // https://github.com/mozilla/sweet.js/wiki/design
	    Reader.prototype.isRegexStart = function () {
	        var previous = this.values[this.values.length - 1];
	        var regex = (previous !== null);
	        switch (previous) {
	            case 'this':
	            case ']':
	                regex = false;
	                break;
	            case ')':
	                var check = this.values[this.paren - 1];
	                regex = (check === 'if' || check === 'while' || check === 'for' || check === 'with');
	                break;
	            case '}':
	                // Dividing a function by anything makes little sense,
	                // but we have to check for that.
	                regex = false;
	                if (this.values[this.curly - 3] === 'function') {
	                    // Anonymous function, e.g. function(){} /42
	                    var check_1 = this.values[this.curly - 4];
	                    regex = check_1 ? !this.beforeFunctionExpression(check_1) : false;
	                }
	                else if (this.values[this.curly - 4] === 'function') {
	                    // Named function, e.g. function f(){} /42/
	                    var check_2 = this.values[this.curly - 5];
	                    regex = check_2 ? !this.beforeFunctionExpression(check_2) : true;
	                }
	        }
	        return regex;
	    };
	    ;
	    Reader.prototype.push = function (token) {
	        if (token.type === token_1.Token.Punctuator || token.type === token_1.Token.Keyword) {
	            if (token.value === '{') {
	                this.curly = this.values.length;
	            }
	            else if (token.value === '(') {
	                this.paren = this.values.length;
	            }
	            this.values.push(token.value);
	        }
	        else {
	            this.values.push(null);
	        }
	    };
	    ;
	    return Reader;
	}());
	var Tokenizer = (function () {
	    function Tokenizer(code, config) {
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = config ? (typeof config.tolerant === 'boolean' && config.tolerant) : false;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = config ? (typeof config.comment === 'boolean' && config.comment) : false;
	        this.trackRange = config ? (typeof config.range === 'boolean' && config.range) : false;
	        this.trackLoc = config ? (typeof config.loc === 'boolean' && config.loc) : false;
	        this.buffer = [];
	        this.reader = new Reader();
	    }
	    ;
	    Tokenizer.prototype.errors = function () {
	        return this.errorHandler.errors;
	    };
	    ;
	    Tokenizer.prototype.getNextToken = function () {
	        if (this.buffer.length === 0) {
	            var comments = this.scanner.scanComments();
	            if (this.scanner.trackComment) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var comment = void 0;
	                    var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
	                    comment = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: value
	                    };
	                    if (this.trackRange) {
	                        comment.range = e.range;
	                    }
	                    if (this.trackLoc) {
	                        comment.loc = e.loc;
	                    }
	                    this.buffer.push(comment);
	                }
	            }
	            if (!this.scanner.eof()) {
	                var loc = void 0;
	                if (this.trackLoc) {
	                    loc = {
	                        start: {
	                            line: this.scanner.lineNumber,
	                            column: this.scanner.index - this.scanner.lineStart
	                        },
	                        end: {}
	                    };
	                }
	                var token = void 0;
	                if (this.scanner.source[this.scanner.index] === '/') {
	                    token = this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.scanPunctuator();
	                }
	                else {
	                    token = this.scanner.lex();
	                }
	                this.reader.push(token);
	                var entry = void 0;
	                entry = {
	                    type: token_1.TokenName[token.type],
	                    value: this.scanner.source.slice(token.start, token.end)
	                };
	                if (this.trackRange) {
	                    entry.range = [token.start, token.end];
	                }
	                if (this.trackLoc) {
	                    loc.end = {
	                        line: this.scanner.lineNumber,
	                        column: this.scanner.index - this.scanner.lineStart
	                    };
	                    entry.loc = loc;
	                }
	                if (token.regex) {
	                    entry.regex = token.regex;
	                }
	                this.buffer.push(entry);
	            }
	        }
	        return this.buffer.shift();
	    };
	    ;
	    return Tokenizer;
	}());
	exports.Tokenizer = Tokenizer;


/***/ }
/******/ ])
});
;

/***/ }),
/* 87 */
/***/ (function(module) {

module.exports = {"name":"esper.js","version":"0.3.0-dev","description":"Esper javascript interperter.","main":"src/index.js","scripts":{"doc":"esdoc -c esdoc.json","lint":"jshint src --show-non-errors","test":"mocha","repl":"node contrib/cli.js -i","webpack":"webpack","demo":"esdoc -c esdoc.json && node contrib/examine-corpus.js && webpack && webpack --env.test && webpack --env.test --env.profile=modern && node contrib/ui.js","cover":"./node_modules/istanbul/lib/cli.js cover node_modules/.bin/_mocha -- --reporter dot","dev-server":"webpack-dev-server src/index.js --content-base contrib/ui","preinstall":"node contrib/install-plugin-deps.js","prepublish":"node contrib/build.js","style":"jscs src plugins/*/*.js test/*.js"},"bin":{"esper":"./contrib/cli.js"},"repository":{"type":"git","url":"git+ssh://git@github.com/codecombat/esper.js.git"},"keywords":["esper","javascript","interperter","ast","eval"],"author":"Rob Blanckaert","license":"MIT","bugs":{"url":"https://github.com/codecombat/esper.js/issues"},"homepage":"https://github.com/codecombat/esper.js#readme","files":["dist/esper.js","dist/esper.min.js","dist/esper.modern.js","src","plugins","contrib/cli.js","contrib/install-plugin-deps.js","plugin-list.js"],"devDependencies":{"babel-core":"^6.24.1","babel-loader":"^7.1.4","babel-plugin-check-es2015-constants":"^6.22.0","babel-plugin-transform-es2015-arrow-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoped-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoping":"^6.24.1","babel-plugin-transform-es2015-classes":"^6.24.1","babel-plugin-transform-es2015-computed-properties":"^6.24.1","babel-plugin-transform-es2015-destructuring":"^6.23.0","babel-plugin-transform-es2015-for-of":"^6.23.0","babel-plugin-transform-es2015-function-name":"^6.24.1","babel-plugin-transform-es2015-literals":"^6.22.0","babel-plugin-transform-es2015-modules-commonjs":"^6.24.1","babel-plugin-transform-es2015-object-super":"^6.24.1","babel-plugin-transform-es2015-parameters":"^6.24.1","babel-plugin-transform-es2015-shorthand-properties":"^6.24.1","babel-plugin-transform-es2015-spread":"^6.22.0","babel-plugin-transform-es2015-sticky-regex":"^6.24.1","babel-plugin-transform-es2015-template-literals":"^6.22.0","babel-plugin-transform-es2015-typeof-symbol":"^6.23.0","babel-plugin-transform-es2015-unicode-regex":"^6.24.1","babel-plugin-transform-regenerator":"^6.24.1","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.23.0","babel-regenerator-runtime":"^6.5.0","babel-register":"^6.24.1","babel-runtime":"^6.23.0","chai":"^3.5.0","core-js":"^2.4.1","esdoc":"^0.5.2","istanbul":"^1.0.0-alpha.2","jscs":"^3.0.7","lodash":"^4.17.4","lua2js":"^0.0.11","mocha":"^6.1.2","mocha-loader":"^2.0.1","raw-loader":"^0.5.1","webpack":"^4.12.0","webpack-cli":"^3.0.8","webpack-dev-server":"^3.1.4"},"dependencies":{"commander":"^2.9.0","esprima":"^3.1.3"}};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ast-css/index.js": 89
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const esper = __webpack_require__(30);
const csswhat = __webpack_require__(90);
const ASTNode = esper.ASTPreprocessor.ASTNode;

const debug = () => {};
//const debug = console.log.bind(console);


function tag(name) {
	switch (name.toLowerCase()) {
		case 'array':
		case 'arrayexpression':
			return 'ArrayExpression';
		case 'break':
		case 'breakstatement':
			return 'BreakStatement';
		case 'continue':
		case 'continuestatement':
			return 'ContinueStatement';
		case 'arrow':
		case 'arrowfunction':
			return 'ArrowFunctionExpression';
		case 'assign':
		case 'assignment':
		case 'assignmentexpression':
			return 'AssignmentExpression';
		case 'binop':
		case 'binary':
		case 'binaryexpression':
			return 'BinaryExpression';
		case 'block':
		case 'blockstatement':
			return 'BlockStatement';
		case 'call':
		case 'callexpression':
			return 'CallExpression';
		case 'class':
		case 'classdeclaration':
			return 'ClassDeclaration';
		case 'classex':
		case 'classexpression':
			return 'ClassExpression';
		case 'conditional':
		case 'conditionalexpression':
			return 'ConditionalExpression';
		case 'debugger':
		case 'debuggerstatement':
			return 'DebuggerStatement';
		case 'dowhile':
		case 'dowhilestatement':
			return 'DoWhileStatement';
		case 'empty':
		case 'emptystatement':
			return 'EmptyStatement';
		case 'expression':
		case 'exp':
		case 'expressionstatement':
			return 'ExpressionStatement';
		case 'for':
		case 'forstatement':
			return 'ForStatement';
		case 'forin':
		case 'forinstatement':
			return 'ForInStatement';
		case 'forof':
		case 'forofstatement':
			return 'ForOfStatement';
		case 'functiondeclaration':
			return 'FunctionDeclaration';
		case 'functionexpression':
			return 'FunctionExpression';
		case 'identifier':
			return 'Identifier';
		case 'if':
		case 'ifstatement':
			return 'IfStatement';
		case 'labeledstatement':
			return 'LabeledStatement';
		case 'literal':
		case 'value':
			return 'Literal';
		case 'logicalexpression':
			return 'LogicalExpression';
		case 'memberexpression':
		case 'member':
			return 'MemberExpression';
		case 'new':
		case 'newexpression':
			return 'NewExpression';
		case 'object':
		case 'objectexpression':
			return 'ObjectExpression';
		case 'program':
			return 'Program';
		case 'return':
		case 'returnstatement':
			return 'ReturnStatement';
		case 'sequence':
		case 'sequenceexpression':
			return 'SequenceExpression';
		case 'switch':
		case 'switchstatement':
			return 'SwitchStatement';
		case 'this':
		case 'thisexpression':
			return 'ThisExpression';
		case 'throw':
		case 'throwstatement':
			return 'ThrowStatement';
		case 'try':
		case 'trystatement':
			return 'TryStatement';
		case 'unaryexpression':
			return 'UnaryExpression';
		case 'updateexpression':
			return 'UpdateExpression';
		case 'variabledeclaration':
			return 'VariableDeclaration';
		case 'whilestatement':
		case 'while':
			return 'WhileStatement';
		case 'with':
		case 'withstatement':
			return 'WithStatement';
	}
}

function find(ast, selector, root) {
	var list;
	debug(selector);
	if (typeof selector === 'string') {
		list = csswhat(selector, { xmlMode: true });
		debug(list);
	} else {
		list = selector;
	}
	var matchers = list.map(compileRTL);
	var found = [];
	var cbs = {
		exit: function (n) {
			//console.log("EVAL", n);
			for (let i = 0; i < matchers.length; ++i) {
				let result = matchers[i](n, root);
				if (result !== false) found.push([n, result]);
			}
		}
	};
	var gen = esper.ASTPreprocessor.walker(ast, cbs);
	for (var x of gen) {}
	return found;
}

function matches(m, selector, root) {

	var matches = find(m, selector, root);
	for (let i = 0; i < matches.length; ++i) {
		if (matches[i][1].indexOf(m) !== -1) {
			return true;
		}
	}
	return false;
}

function tagNames(n) {
	switch (n.toLowerCase()) {
		case 'loop':
			return ['WhileStatement', 'DoWhileStatement', 'ForStatement'];
		case 'breakable':
			return ['SwitchStatement', 'WhileStatement', 'DoWhileStatement', 'ForStatement'];
		case 'if':
			return ['IfStatement'];
		case 'function':
			return ['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'];
	}
	return [tag(n)];
}

function compileRTL(opts) {
	return function match(input, root) {
		var canidates = [{ n: input }];
		for (var i = opts.length - 1; i >= 0; --i) {
			var o = opts[i];
			//debug(canidates.map((m) => m ? m.type : 'F').join(','), "vs", o);
			switch (o.type) {
				case 'universal':
					break;
				case 'pseudo':
					if (o.name === 'downto') {
						let list = tagNames(o.data);
						let parents = [];
						canidates.map(c => {
							var m = c.n;
							while (m !== root && m.parent) {
								m = m.parent;
								if (list.indexOf(m.type) !== -1) break;
								parents.push({ n: m });
							}
						});
						canidates = parents;
						debug('NT', list);
						debug('DT!', canidates.map(function (s) {
							return s.n.type + '#' + s.n.loc.start.line;
						}));
						break;
					} else if (o.name == 'matches') {
						canidates = canidates.filter(c => {
							return matches(c.n, o.data, root);
						});
						break;
					} else if (o.name == 'has') {
						canidates = canidates.filter(c => {
							var matches = match(c.n, o.data, root);
							return matches.length > 0;
						});
						break;
					} else if (o.name == 'not') {
						canidates = canidates.filter(c => {
							return !matches(c.n, o.data, root);
						});
						break;
					} else {
						throw new Error('Unknown psudo selector:' + o.name);
					}
					break;
				case 'descendant':
					let parents = [];
					canidates.map(c => {
						var m = c.n;
						while (m !== root && m.parent) {
							m = m.parent;
							parents.push({ n: m, p: c.n });
						}
					});
					canidates = parents;
					break;
				case 'child':
					canidates = canidates.filter(c => c.n !== root && c.n.parent).map(c => {
						return { n: c.n.parent, p: c.n };
					});
					break;
				case 'parent':
					let parents2 = [];
					canidates.map(c => {
						var m = c.n;
						for (var k in m) {
							if (k === 'type') continue;
							if (k === 'parent') continue;
							if (k === 'visits') continue;
							if (k === 'dispatch') continue;
							if (k === 'loc') continue;
							if (k === 'range') continue;
							if (k === 'nodeID') continue;
							if (k === 'srcName') continue;

							if (m[k] instanceof ASTNode) {
								parents2.push({ n: m[k], p: m });
							}
						}
					});
					debug(canidates, parents2);
					canidates = parents2;
					break;
				case 'sibling':
					var siblings = [];
					canidates.filter(c => {
						var m = c.n;
						var parent = m.parent;
						for (var key in parent) {
							if (!Array.isArray(parent[key])) continue;
							var idx = parent[key].indexOf(m);
							if (idx === -1) continue;
							for (var i = 0; i < idx; ++i) {
								if (parent[key][i] !== m) siblings.push({ n: parent[key][i] });
							}
							return;
						}
					});
					canidates = siblings;
					break;
				case 'adjacent':
					var adjlist = [];
					canidates.filter(c => {
						var m = c.n;
						var parent = m.parent;
						for (var key in parent) {
							if (!Array.isArray(parent[key])) continue;
							var idx = parent[key].indexOf(m);
							if (idx == -1) continue;
							if (idx > 0) adjlist.push({ n: parent[key][idx - 1] });
							return;
						}
					});
					canidates = adjlist;
					break;
				case 'tag':
					var list = tagNames(o.name);
					canidates = canidates.filter(c => list.indexOf(c.n.type) !== -1);
					break;
				case 'attribute':
					if (o.name === 'class') {
						canidates = canidates.filter(c => {
							var test = c.n[o.value];
							if (!c.p) return !!test;
							if (Array.isArray(test)) return test.indexOf(c.p) !== -1;
							return test == c.p;
						});
						break;
					}
					canidates = canidates.filter(c => {
						var m = c.n;
						if (!(o.name in m)) return;
						var val = m[o.name];
						if (val.type && val.type === 'Identifier') val = val.name;else if (val.type && val.type === 'Literal') val = JSON.stringify(val.value);
						return o.value == val.toString();
					});
					break;
				default:
					throw new Error('Unknown CSS Selector Type: ' + o.type);
			}

			if (canidates.length > 0) {
				debug('MATCH@' + JSON.stringify(o));
				debug(canidates);
			} else {
				if (i < opts.length - 1) debug('FAIL@' + JSON.stringify(o));
				return false;
			}
		}
		debug('OK!', canidates.map(function (s) {
			return s.n.type + '#' + (s.n.loc ? s.n.loc.start.line : '?');
		}));
		return canidates.map(function (s) {
			return s.n;
		});
	};
}

function init(esper) {
	esper.ASTPreprocessor.prototype.find = function (sel) {
		return find(this.ast, sel).map(x => x[0]);
	};
	esper.ASTPreprocessor.ASTNode.prototype.find = function (sel) {
		return find(this, sel, null).map(x => x[0]);
	};
	esper.ASTPreprocessor.ASTNode.prototype.matches = function (sel) {
		return matches(this, sel, null);
	};
}

let plugin = module.exports = {
	name: 'ast-css',
	find: find,
	init: init
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse;

var re_name = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/,
    re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
    //modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
    re_attr = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;

var actionTypes = {
	__proto__: null,
	"undefined": "exists",
	"":  "equals",
	"~": "element",
	"^": "start",
	"$": "end",
	"*": "any",
	"!": "not",
	"|": "hyphen"
};

var simpleSelectors = {
	__proto__: null,
	">": "child",
	"<": "parent",
	"~": "sibling",
	"+": "adjacent"
};

var attribSelectors = {
	__proto__: null,
	"#": ["id", "equals"],
	".": ["class", "element"]
};

//pseudos, whose data-property is parsed as well
var unpackPseudos = {
	__proto__: null,
	"has": true,
	"not": true,
	"matches": true
};

var stripQuotesFromPseudos = {
	__proto__: null,
	"contains": true,
	"icontains": true
};

var quotes = {
	__proto__: null,
	"\"": true,
	"'": true
};

//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139
function funescape( _, escaped, escapedWhitespace ) {
	var high = "0x" + escaped - 0x10000;
	// NaN means non-codepoint
	// Support: Firefox
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace ?
		escaped :
		// BMP codepoint
		high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
}

function unescapeCSS(str){
	return str.replace(re_escape, funescape);
}

function isWhitespace(c){
	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function parse(selector, options){
	var subselects = [];

	selector = parseSelector(subselects, selector + "", options);

	if(selector !== ""){
		throw new SyntaxError("Unmatched selector: " + selector);
	}

	return subselects;
}

function parseSelector(subselects, selector, options){
	var tokens = [],
		sawWS = false,
		data, firstChar, name, quot;

	function getName(){
		var sub = selector.match(re_name)[0];
		selector = selector.substr(sub.length);
		return unescapeCSS(sub);
	}

	function stripWhitespace(start){
		while(isWhitespace(selector.charAt(start))) start++;
		selector = selector.substr(start);
	}

	function isEscaped(pos) {
		var slashCount = 0;

		while (selector.charAt(--pos) === "\\") slashCount++;
		return (slashCount & 1) === 1;
	}

	stripWhitespace(0);

	while(selector !== ""){
		firstChar = selector.charAt(0);

		if(isWhitespace(firstChar)){
			sawWS = true;
			stripWhitespace(1);
		} else if(firstChar in simpleSelectors){
			tokens.push({type: simpleSelectors[firstChar]});
			sawWS = false;

			stripWhitespace(1);
		} else if(firstChar === ","){
			if(tokens.length === 0){
				throw new SyntaxError("empty sub-selector");
			}
			subselects.push(tokens);
			tokens = [];
			sawWS = false;
			stripWhitespace(1);
		} else {
			if(sawWS){
				if(tokens.length > 0){
					tokens.push({type: "descendant"});
				}
				sawWS = false;
			}

			if(firstChar === "*"){
				selector = selector.substr(1);
				tokens.push({type: "universal"});
			} else if(firstChar in attribSelectors){
				selector = selector.substr(1);
				tokens.push({
					type: "attribute",
					name: attribSelectors[firstChar][0],
					action: attribSelectors[firstChar][1],
					value: getName(),
					ignoreCase: false
				});
			} else if(firstChar === "["){
				selector = selector.substr(1);
				data = selector.match(re_attr);
				if(!data){
					throw new SyntaxError("Malformed attribute selector: " + selector);
				}
				selector = selector.substr(data[0].length);
				name = unescapeCSS(data[1]);

				if(
					!options || (
						"lowerCaseAttributeNames" in options ?
							options.lowerCaseAttributeNames :
							!options.xmlMode
					)
				){
					name = name.toLowerCase();
				}

				tokens.push({
					type: "attribute",
					name: name,
					action: actionTypes[data[2]],
					value: unescapeCSS(data[4] || data[5] || ""),
					ignoreCase: !!data[6]
				});

			} else if(firstChar === ":"){
				if(selector.charAt(1) === ":"){
					selector = selector.substr(2);
					tokens.push({type: "pseudo-element", name: getName().toLowerCase()});
					continue;
				}

				selector = selector.substr(1);

				name = getName().toLowerCase();
				data = null;

				if(selector.charAt(0) === "("){
					if(name in unpackPseudos){
						quot = selector.charAt(1);
						var quoted = quot in quotes;

						selector = selector.substr(quoted + 1);

						data = [];
						selector = parseSelector(data, selector, options);

						if(quoted){
							if(selector.charAt(0) !== quot){
								throw new SyntaxError("unmatched quotes in :" + name);
							} else {
								selector = selector.substr(1);
							}
						}

						if(selector.charAt(0) !== ")"){
							throw new SyntaxError("missing closing parenthesis in :" + name + " " + selector);
						}

						selector = selector.substr(1);
					} else {
						var pos = 1, counter = 1;

						for(; counter > 0 && pos < selector.length; pos++){
							if(selector.charAt(pos) === "(" && !isEscaped(pos)) counter++;
							else if(selector.charAt(pos) === ")" && !isEscaped(pos)) counter--;
						}

						if(counter){
							throw new SyntaxError("parenthesis not matched");
						}

						data = selector.substr(1, pos - 2);
						selector = selector.substr(pos);

						if(name in stripQuotesFromPseudos){
							quot = data.charAt(0);

							if(quot === data.slice(-1) && quot in quotes){
								data = data.slice(1, -1);
							}

							data = unescapeCSS(data);
						}
					}
				}

				tokens.push({type: "pseudo", name: name, data: data});
			} else if(re_name.test(selector)){
				name = getName();

				if(!options || ("lowerCaseTags" in options ? options.lowerCaseTags : !options.xmlMode)){
					name = name.toLowerCase();
				}

				tokens.push({type: "tag", name: name});
			} else {
				if(tokens.length && tokens[tokens.length - 1].type === "descendant"){
					tokens.pop();
				}
				addToken(subselects, tokens);
				return selector;
			}
		}
	}

	addToken(subselects, tokens);

	return selector;
}

function addToken(subselects, tokens){
	if(subselects.length > 0 && tokens.length === 0){
		throw new SyntaxError("empty sub-selector");
	}

	subselects.push(tokens);
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {"ast-css":"bundle","lang-python":"addon","lang-coffeescript":"addon","lang-lua":"addon","babylon":"opt-in","pointers":"addon"};

/***/ })
/******/ ]);
});