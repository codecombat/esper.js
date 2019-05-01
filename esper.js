/*!
 * esper.js
 * 
 * Compiled: Tue Apr 30 2019 22:03:11 GMT-0700 (PDT)
 * Target  : web (umd)
 * Profile : web
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
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["esper"] = factory();
	else
		root["esper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 243);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(5);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(15).Object.getPrototypeOf;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(11);

__webpack_require__(19)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(14)('keys');
var uid = __webpack_require__(18);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(15);
var global = __webpack_require__(16);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20);
var core = __webpack_require__(15);
var fails = __webpack_require__(29);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(23);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(28) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(27);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(28) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(28) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(16).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
var $Object = __webpack_require__(15).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(28), 'Object', { defineProperty: __webpack_require__(24).f });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(40);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(68);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(63);
module.exports = __webpack_require__(67).f('iterator');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(43)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var defined = __webpack_require__(10);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(47);
var $iterCreate = __webpack_require__(48);
var setToStringTag = __webpack_require__(61);
var getPrototypeOf = __webpack_require__(11);
var ITERATOR = __webpack_require__(62)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(61);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(23)(IteratorPrototype, __webpack_require__(62)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(25);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(59);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var anObject = __webpack_require__(25);
var getKeys = __webpack_require__(51);

module.exports = __webpack_require__(28) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(59);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(53);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(10);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(55);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(53);
var toLength = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(58);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(44);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(16).document;
module.exports = document && document.documentElement;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(24).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(62)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(14)('wks');
var uid = __webpack_require__(18);
var Symbol = __webpack_require__(16).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(16);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(47);
var TO_STRING_TAG = __webpack_require__(62)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(47);
var toIObject = __webpack_require__(53);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(62);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(15).Symbol;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(16);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(28);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(46);
var META = __webpack_require__(71).KEY;
var $fails = __webpack_require__(29);
var shared = __webpack_require__(14);
var setToStringTag = __webpack_require__(61);
var uid = __webpack_require__(18);
var wks = __webpack_require__(62);
var wksExt = __webpack_require__(67);
var wksDefine = __webpack_require__(72);
var enumKeys = __webpack_require__(73);
var isArray = __webpack_require__(76);
var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var toIObject = __webpack_require__(53);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(77);
var $GOPD = __webpack_require__(79);
var $DP = __webpack_require__(24);
var $keys = __webpack_require__(51);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(75).f = $propertyIsEnumerable;
  __webpack_require__(74).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(17)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(18)('meta');
var isObject = __webpack_require__(26);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(24).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(29)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var LIBRARY = __webpack_require__(17);
var wksExt = __webpack_require__(67);
var defineProperty = __webpack_require__(24).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(75);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(55);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(53);
var gOPN = __webpack_require__(78).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(52);
var hiddenKeys = __webpack_require__(59).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(75);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(53);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(27);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(28) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('asyncIterator');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('observable');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(15).Object.setPrototypeOf;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(20);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(26);
var anObject = __webpack_require__(25);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(79).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var $Object = __webpack_require__(15).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(49) });


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
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
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(119);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(15).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(53);
var $getOwnPropertyDescriptor = __webpack_require__(79).f;

__webpack_require__(19)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var Engine = void 0;

function esper(opts) {
	return new Engine(opts);
}
module.exports = esper;

Engine = __webpack_require__(123);
esper.plugins = { 'lang-javascript': __webpack_require__(236) };
esper.Engine = Engine;
esper.Evaluator = __webpack_require__(149);
esper.Value = __webpack_require__(153);
esper.PrimitiveValue = __webpack_require__(182);
esper.ASTPreprocessor = __webpack_require__(207);
esper.FutureValue = __webpack_require__(194);
esper.SmartLinkValue = __webpack_require__(201);
esper.ObjectValue = __webpack_require__(180);
esper.StringValue = __webpack_require__(185);
esper.EasyNativeFunction = __webpack_require__(208);
esper.EasyObjectValue = __webpack_require__(210);
esper.CompletionRecord = __webpack_require__(175);
esper.Realm = __webpack_require__(198);
esper.EvaluatorHandlers = __webpack_require__(197);
esper.eval = function (source) {
	return new Engine().evalSync(source).toNative();
};

esper.version = __webpack_require__(238).version;

esper.languages = {
	javascript: esper.plugins['lang-javascript']
};

esper.hooks = {
	setupEngine: []
};

esper.plugin = function (name) {
	var pl = void 0;
	if (!esper.plugins[name]) {
		//console.log("Loading ", name, '../plugins/' + name + '/index.js');
		var _pl = __webpack_require__(239)("./" + name + "/index.js");
		if (name != _pl.name) throw new Error('Loaded plugin as "' + name + '" but it had name "' + _pl.name + '"');
		if (!esper.plugins[name]) esper._registerPlugin(_pl);
	}
	return esper.plugins[name];
};

esper._registerPlugin = function (pl) {
	if (typeof pl.init !== 'function') throw new Error('Tried to add a plugin without an init method.');
	if (typeof pl.name !== 'string') throw new Error('Tried to add a plugin without a name.');
	esper.plugins[pl.name] = pl;
	pl.init(esper);
};

var list = __webpack_require__(242);
esper.pluginList = list;
for (var pl in list) {
	if (list[pl] == 'bundle') esper.plugin(pl);
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(129);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esper = __webpack_require__(122);
var Evaluator = __webpack_require__(149);
var Realm = __webpack_require__(198);
var Scope = __webpack_require__(199);
var Value = __webpack_require__(153);
var BridgeValue = __webpack_require__(189);
var ASTPreprocessor = __webpack_require__(207);
var FutureValue = __webpack_require__(194);
var EasyNativeFunction = __webpack_require__(208);
var ClosureValue = __webpack_require__(191);
var SmartLinkValue = __webpack_require__(201);
var DefaultRuntime = __webpack_require__(235);

var defaultOptions = {
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

var Engine = function () {
	function Engine(options) {
		var _this = this;

		var realm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		(0, _classCallCheck3.default)(this, Engine);

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
		var that = this;
		if (options.runtime) {
			this.evloop = { next: function next() {
					var promises = [];
					for (var i = 0; i < that.threads.length; ++i) {
						if (that.threads[i]) {
							var val = that.threads[i].next();
							if (val.done) {
								that.threads.splice(i, 1);return { done: false, value: val.value };
							}
							if (!val.value || !val.value.then) {
								if (options.rotateThreads) that.threads.push(that.threads.splice(i, 1)[0]);
								return { done: false, value: val.value };
							} else promises.push(val.value);
						}
					}
					if (promises.length > 0) return { done: false, value: _promise2.default.race(promises) };else return { done: true };
				} };
		} else {
			Object.defineProperty(this, "evloop", {
				get: function get() {
					return _this.threads[0];
				},
				set: function set(v) {
					return _this.threads[0] = v;
				} // Supports CrazyJoshMode
			});
		}

		if (this.language.setupEngine) {
			this.language.setupEngine(esper, this);
		}

		for (var _iterator = esper.hooks.setupEngine, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var hook = _ref;

			hook(esper, this);
		}
	}

	//get evloop() { return this.generator; }


	(0, _createClass3.default)(Engine, [{
		key: 'loadLangaugeStartupCode',
		// Supports CrazyJoshMode

		value: function loadLangaugeStartupCode() {
			var past = this.preprocessAST(this.language.startupCode(), { markNonUser: true });
			var stdlib_eval = new Evaluator(this.realm, null, this.globalScope);
			stdlib_eval.frames = [];
			stdlib_eval.pushAST(past, this.globalScope);
			stdlib_eval.ast = past;

			var gen = stdlib_eval.generator();
			var val = gen.next();
			while (!val.done) {
				val = gen.next();
			}
		}
	}, {
		key: 'eval',


		/**
   * Evalute `code` and return a promise for the result.
   *
   * @access public
   * @param {string} code - String of code to evaluate
   * @return {Promise<Value>} - The result of execution, as a promise.
   */
		value: function _eval(code) {
			var ast = this.realm.parser(code);
			return this.evalAST(ast, { source: code });
		}

		/**
   * Evalute `code` and return a the result.
   *
   * @access public
   * @param {string} code - String of code to evaluate
   * @return {Value} - The result of execution
   */

	}, {
		key: 'evalSync',
		value: function evalSync(code) {
			var ast = this.realm.parser(code);
			return this.evalASTSync(ast, { source: code });
		}
	}, {
		key: 'evalDetatched',
		value: function evalDetatched(code) {
			var _this2 = this;

			var ast = this.realm.parser(code);
			this.loadAST(ast, { source: code });
			var p = new _promise2.default(function (res, rej) {
				_this2.evaluator.onCompletion = res;
				_this2.evaluator.onError = rej;
			});
			setTimeout(function () {
				return _this2.run().catch(function (e) {});
			}, 0);
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

	}, {
		key: 'evalAST',
		value: function evalAST(ast, opts) {
			var _this3 = this;

			//console.log(escodegen.generate(ast));
			this.loadAST(ast, opts);
			var p = this.run();
			p.then(function () {
				return _this3.threads = [];
			}, function () {
				return _this3.threads = [];
			});
			return p;
		}
	}, {
		key: 'evalASTSync',
		value: function evalASTSync(ast, opts) {
			this.loadAST(ast, opts);
			var value = this.runSync();
			this.threads[0] = [];
			return value;
		}
	}, {
		key: 'preprocessAST',
		value: function preprocessAST(ast, opts) {
			opts = opts || {};
			opts.compile = this.options.compile;
			var past = ASTPreprocessor.process(ast, opts);
			return past;
		}
	}, {
		key: 'loadAST',
		value: function loadAST(ast, opts) {
			var past = this.preprocessAST(ast, opts);
			this.evaluator.frames = [];
			this.evaluator.pushAST(past, this.globalScope);
			this.evaluator.ast = past;
			this.threads[0] = this.evaluator.generator();
		}
	}, {
		key: 'load',
		value: function load(code) {
			var ast = this.realm.parser(code);
			this.loadAST(ast, { source: code });
		}
	}, {
		key: 'step',
		value: function step() {
			if (this.threads.length < 1) throw new Error('No code loaded to step');
			var value = this.evloop.next();
			return value.done;
		}
	}, {
		key: 'run',
		value: function run() {
			var that = this;
			var steps = 0;
			function handler(value) {
				while (!value.done) {
					value = that.evloop.next();
					if (value.value && value.value.then) {
						return value.value.then(function (v) {
							return handler({ done: false, value: v });
						});
					}
					if (++steps > that.options.executionLimit) throw new Error('Execution Limit Reached');
				}
				if (!that.options.runtime) that.threads = [];
				return value;
			}
			return new _promise2.default(function (resolve, reject) {
				try {
					var value = that.evloop.next();
					resolve(value);
				} catch (e) {
					reject(e);
				}
			}).then(handler).then(function (v) {
				return v.value;
			});
		}
	}, {
		key: 'runSync',
		value: function runSync() {
			var steps = 0;
			var value = this.evloop.next();
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

	}, {
		key: 'addGlobal',
		value: function addGlobal(name, what, opts) {
			opts = opts || {};
			if (!(what instanceof Value)) what = this.realm.makeForForeignObject(what);
			if (!opts.const) this.globalScope.add(name, what);else this.globalScope.addConst(name, what);
		}
	}, {
		key: 'addGlobalFx',
		value: function addGlobalFx(name, what, opts) {
			var x = EasyNativeFunction.makeForNative(this.realm, what);
			x.makeThisForNew = /*#__PURE__*/_regenerator2.default.mark(function _callee(realm) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', Value.null);

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			});
			this.addGlobal(name, x, opts);
		}
	}, {
		key: 'addGlobalValue',
		value: function addGlobalValue(name, what, opts) {
			this.addGlobal(name, Value.fromNative(what, this.realm), opts);
		}
	}, {
		key: 'addGlobalBridge',
		value: function addGlobalBridge(name, what, opts) {
			this.addGlobal(name, new BridgeValue(what, this.realm), opts);
		}
	}, {
		key: 'fetchFunctionSync',
		value: function fetchFunctionSync(name, shouldYield) {
			var genfx = this.fetchFunction(name, shouldYield);
			return function () {
				var gen = genfx.apply(this, arguments);
				var val = gen.next();
				//TODO: Make sure we dont await as it will loop FOREVER.
				while (!val.done) {
					val = gen.next();
				}return val.value;
			};
		}
	}, {
		key: 'fetchFunction',
		value: function fetchFunction(name, shouldYield) {
			var val = this.globalScope.get(name);
			return this.makeFunctionFromClosure(val, shouldYield);
		}
	}, {
		key: 'functionFromSource',
		value: function functionFromSource(source, shouldYield) {
			var code = source;
			var ast = this.realm.parser(code, { inFunctionBody: true });
			return this.functionFromAST(ast, shouldYield, source);
		}
	}, {
		key: 'functionFromAST',
		value: function functionFromAST(ast, shouldYield, source) {
			if (ast.type === 'Program') ast = ast.body;
			if (Array.isArray(ast)) ast = { type: 'BlockStatement', body: ast };
			if (ast.type !== 'BlockStatement') ast = { type: 'BlockStatement', body: [ast] };

			var past = {
				type: 'FunctionExpression',
				body: ast,
				params: []
			};
			past = ASTPreprocessor.process(past, { source: source });
			var fx = new ClosureValue(past, this.globalScope);
			return this.makeFunctionFromClosure(fx, shouldYield, this.evaluator);
		}
	}, {
		key: 'functionFromSourceSync',
		value: function functionFromSourceSync(source, shouldYield) {
			var genfx = this.functionFromSource(source, shouldYield);
			return function () {
				var gen = genfx.apply(this, arguments);
				var val = gen.next();
				//TODO: Make sure we dont await as it will loop FOREVER.
				while (!val.done) {
					val = gen.next();
				}return val.value;
			};
		}
	}, {
		key: 'functionFromASTSync',
		value: function functionFromASTSync(ast, shouldYield, source) {
			var genfx = this.functionFromAST(ast, shouldYield, source);
			return function () {
				var gen = genfx.apply(this, arguments);
				var val = gen.next();
				//TODO: Make sure we dont await as it will loop FOREVER.
				while (!val.done) {
					val = gen.next();
				}return val.value;
			};
		}
	}, {
		key: 'makeFunctionFromClosure',
		value: function makeFunctionFromClosure(val, shouldYield, evalu) {

			var realm = this.realm;
			var scope = this.globalScope;
			var that = this;
			var evaluator = evalu || this.evaluator;
			if (!evaluator) throw new Error('Evaluator is falsey');
			if (!val) return;

			return (/*#__PURE__*/_regenerator2.default.mark(function _callee2() {
					var realThis,
					    realArgs,
					    i,
					    c,
					    gen,
					    last,
					    _args2 = arguments;
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									realThis = realm.makeForForeignObject(this);
									realArgs = new Array(_args2.length);

									for (i = 0; i < _args2.length; ++i) {
										realArgs[i] = realm.makeForForeignObject(_args2[i]);
									}

									if (val.isCallable) {
										_context2.next = 5;
										break;
									}

									throw new TypeError(val.debugStr + ' is not a function.');

								case 5:
									c = val.call(realThis, realArgs, scope);

									evaluator.pushFrame({ type: 'program', generator: c, scope: scope });
									gen = evaluator.generator();
									return _context2.delegateYield(that.filterGenerator(gen, shouldYield, evaluator), 't0', 9);

								case 9:
									last = _context2.t0;

									if (!last) {
										_context2.next = 12;
										break;
									}

									return _context2.abrupt('return', last.toNative());

								case 12:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				})
			);
		}

		/**
   * Returns a new engine that executes in the same Realm.  Useful
   * for creating threads / coroutines
   * @return {Engine}
   */

	}, {
		key: 'fork',
		value: function fork() {
			var engine = new Engine(this.options, this.realm);
			var scope = this.globalScope;
			engine.evaluator = this.makeEvaluatorClone();
			return engine;
		}
	}, {
		key: 'makeEvaluatorClone',
		value: function makeEvaluatorClone() {
			var evaluator = new Evaluator(this.realm, this.evaluator.ast, this.globalScope);
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
	}, {
		key: 'filterGenerator',
		value: /*#__PURE__*/_regenerator2.default.mark(function filterGenerator(gen, shouldYield, evaluator) {
			var value, steps, yieldValue;
			return _regenerator2.default.wrap(function filterGenerator$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							value = gen.next();
							steps = 0;

							if (evaluator) {
								_context3.next = 4;
								break;
							}

							throw new Error('Evaluator is falsey');

						case 4:
							if (value.done) {
								_context3.next = 25;
								break;
							}

							if (shouldYield) {
								_context3.next = 10;
								break;
							}

							_context3.next = 8;
							return;

						case 8:
							_context3.next = 20;
							break;

						case 10:
							if (!(evaluator.topFrame.type == 'await')) {
								_context3.next = 16;
								break;
							}

							if (value.value.resolved) {
								_context3.next = 14;
								break;
							}

							_context3.next = 14;
							return;

						case 14:
							_context3.next = 20;
							break;

						case 16:
							yieldValue = shouldYield(this, evaluator, value.value);

							if (!(yieldValue !== false)) {
								_context3.next = 20;
								break;
							}

							_context3.next = 20;
							return yieldValue;

						case 20:
							value = gen.next(value.value);

							if (!(++steps > this.options.executionLimit)) {
								_context3.next = 23;
								break;
							}

							throw new Error('Execution Limit Reached');

						case 23:
							_context3.next = 4;
							break;

						case 25:
							return _context3.abrupt('return', value.value);

						case 26:
						case 'end':
							return _context3.stop();
					}
				}
			}, filterGenerator, this);
		})
	}, {
		key: 'generator',
		get: function get() {
			return this.evloop;
		},
		set: function set(v) {
			return this.evloop = v;
		}
	}, {
		key: 'language',
		get: function get() {
			if (!(this.options.language in esper.languages)) {
				throw new Error('Unknown language ' + this.options.language + '. Load the lang-' + this.options.language + ' plugin?');
			}
			return esper.languages[this.options.language];
		}
	}, {
		key: 'globalScope',
		get: function get() {
			return this.realm.globalScope;
		}
	}]);
	return Engine;
}();

module.exports = Engine;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(42);
module.exports = __webpack_require__(126);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var get = __webpack_require__(127);
module.exports = __webpack_require__(15).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(128);
var ITERATOR = __webpack_require__(62)('iterator');
var Iterators = __webpack_require__(47);
module.exports = __webpack_require__(15).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(55);
var TAG = __webpack_require__(62)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(42);
__webpack_require__(63);
__webpack_require__(131);
__webpack_require__(147);
__webpack_require__(148);
module.exports = __webpack_require__(15).Promise;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(16);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(128);
var $export = __webpack_require__(20);
var isObject = __webpack_require__(26);
var aFunction = __webpack_require__(22);
var anInstance = __webpack_require__(132);
var forOf = __webpack_require__(133);
var speciesConstructor = __webpack_require__(136);
var task = __webpack_require__(137).set;
var microtask = __webpack_require__(139)();
var newPromiseCapabilityModule = __webpack_require__(140);
var perform = __webpack_require__(141);
var userAgent = __webpack_require__(142);
var promiseResolve = __webpack_require__(143);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(62)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(144)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(61)($Promise, PROMISE);
__webpack_require__(145)(PROMISE);
Wrapper = __webpack_require__(15)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(146)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(134);
var isArrayIter = __webpack_require__(135);
var anObject = __webpack_require__(25);
var toLength = __webpack_require__(57);
var getIterFn = __webpack_require__(127);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(25);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(47);
var ITERATOR = __webpack_require__(62)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(25);
var aFunction = __webpack_require__(22);
var SPECIES = __webpack_require__(62)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(138);
var html = __webpack_require__(60);
var cel = __webpack_require__(30);
var global = __webpack_require__(16);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(55)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 138 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var macrotask = __webpack_require__(137).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(55)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(22);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var newPromiseCapability = __webpack_require__(140);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(23);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var dP = __webpack_require__(24);
var DESCRIPTORS = __webpack_require__(28);
var SPECIES = __webpack_require__(62)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(62)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(20);
var core = __webpack_require__(15);
var global = __webpack_require__(16);
var speciesConstructor = __webpack_require__(136);
var promiseResolve = __webpack_require__(143);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(20);
var newPromiseCapability = __webpack_require__(140);
var perform = __webpack_require__(141);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
var ClosureValue = __webpack_require__(191);
var ObjectValue = __webpack_require__(180);
var FutureValue = __webpack_require__(194);
var RegExpValue = __webpack_require__(195);
var PropertyDescriptor = __webpack_require__(181);
var ErrorValue = __webpack_require__(196);
var ArrayValue = __webpack_require__(192);
var EvaluatorInstruction = __webpack_require__(193);

var Frame = function Frame(type, o) {
	(0, _classCallCheck3.default)(this, Frame);

	this.type = type;
	for (var k in o) {
		this[k] = o[k];
	}
};

var Evaluator = function () {
	function Evaluator(realm, n, s) {
		(0, _classCallCheck3.default)(this, Evaluator);

		this.realm = realm;
		var that = this;
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

	(0, _createClass3.default)(Evaluator, [{
		key: 'pushAST',
		value: function pushAST(n, s) {
			var that = this;
			var gen = n ? this.branch(n, s) : /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return EvaluatorInstruction.stepMinor;

							case 2:
								return _context.abrupt('return', _context.sent);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			})();
			this.pushFrame({ generator: gen, type: 'program', scope: s, ast: n });
		}
	}, {
		key: 'processLostFrames',
		value: function processLostFrames(frames) {
			for (var _iterator = frames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var f = _ref;

				if (f.profileName) {
					this.incrCtr('fxTime', f.profileName, Date.now() - f.entered);
				}
			}
		}
	}, {
		key: 'unwindStack',
		value: function unwindStack(target, canCrossFxBounds, label) {
			var finallyFrames = [];
			for (var i = 0; i < this.frames.length; ++i) {
				var t = this.frames[i].type;
				var match = t == target || target == 'return' && t == 'function';
				if (match && label) {
					match = label == this.frames[i].label;
				}

				if (match) {
					var j = i + 1;
					for (; j < this.frames.length; ++j) {
						if (this.frames[j].type != 'finally') break;
					}var fr = this.frames[j];
					this.processLostFrames(this.frames.splice(0, i + 1));
					this.saveFrameShortcuts();
					Array.prototype.unshift.apply(this.frames, finallyFrames);
					return fr;
				} else if (target == 'return' && this.frames[i].retValue) {
					var _fr = this.frames[i];
					this.processLostFrames(this.frames.splice(0, i));
					this.saveFrameShortcuts();
					Array.prototype.unshift.apply(this.frames, finallyFrames);
					return _fr;
				} else if (!canCrossFxBounds && this.frames[i].type == 'function') {
					break;
				} else if (t == 'finally') {
					finallyFrames.push(this.frames[i]);
				}
			}
			return false;
		}
	}, {
		key: 'next',
		value: function next(lastValueOveride) {
			var frames = this.frames;

			//Implement proper tailcalls by hand.
			do {
				var top = frames[0];
				var result = void 0;
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
				var val = result.value;

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
					var lastFrame = this.popFrame();

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
	}, {
		key: 'processCompletionValueMeaning',
		value: function processCompletionValueMeaning(val) {
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
					var rfr = this.unwindStack('return', false);
					if (!rfr) throw new Error('Cant find function bounds.');
					rfr.retValue = val.value;
					return true;
				case CompletionRecord.THROW:
					//TODO: Fix this nonsense:
					var e = val.value.toNative();
					//val.value.native = e;

					var smallStack = void 0;
					if (e && e.stack) smallStack = e.stack.split(/\n/).slice(0, 4).join('\n');
					var stk = this.buildStacktrace(e).join('\n    ');
					var bestFrame = void 0;
					for (var i = 0; i < this.frames.length; ++i) {
						if (this.frames[i].ast) {
							bestFrame = this.frames[i];
							break;
						}
					}

					if (val.value instanceof ErrorValue) {
						if (this.realm.options.addExtraErrorInfoToStacks && val.value.extra) {
							stk += '\n-------------';
							for (var key in val.value.extra) {
								var vv = val.value.extra[key];
								if (vv instanceof Value) stk += '\n' + key + ' => ' + vv.debugString;else stk += '\n' + key + ' => ' + vv;
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

					var tfr = this.unwindStack('catch', true);
					if (tfr) {
						tfr.exception = val;
						this.lastValue = val;
						return true;
					}
					var line = -1;
					if (this.topFrame.ast && this.topFrame.ast.attr) {
						line = this.topFrame.ast.attr.pos.start_line;
					}
					//console.log(this.buildStacktrace(val.value.toNative()));
					var v = val.value.toNative();
					if (this.onError) this.onError(v);
					throw v;
				case CompletionRecord.NORMAL:
					return false;
			}
		}
	}, {
		key: 'buildStacktrace',
		value: function buildStacktrace(e) {
			var lines = e ? [e.toString()] : [];
			for (var _iterator2 = this.frames, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var f = _ref2;

				//if ( f.type !== 'function' ) continue;
				if (f.ast) {
					var line = 'at ' + (f.ast.srcName || f.ast.type) + ' ';
					if (f.ast.loc) line += '(<src>:' + f.ast.loc.start.line + ':' + f.ast.loc.start.column + ')';
					lines.push(line);
				}
			}
			return lines;
		}
	}, {
		key: 'pushFrame',
		value: function pushFrame(frame) {
			frame.srcAst = frame.ast;
			if (frame.yieldPower === undefined) frame.yieldPower = this.defaultYieldPower;
			this.frames.unshift(new Frame(frame.type, frame));
			this.saveFrameShortcuts();
		}
	}, {
		key: 'pushAwaitFrame',
		value: function pushAwaitFrame(val) {
			this.pushFrame({
				generator: /*#__PURE__*/_regenerator2.default.mark(function _callee2(f) {
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									if (f.resolved) {
										_context2.next = 5;
										break;
									}

									_context2.next = 3;
									return f;

								case 3:
									_context2.next = 0;
									break;

								case 5:
									if (!f.successful) {
										_context2.next = 9;
										break;
									}

									return _context2.abrupt('return', f.value);

								case 9:
									return _context2.abrupt('return', new CompletionRecord(CompletionRecord.THROW, f.value));

								case 10:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				})(val),
				type: 'await'
			});
		}
	}, {
		key: 'popFrame',
		value: function popFrame() {
			var frame = this.frames.shift();
			this.saveFrameShortcuts();
			return frame;
		}
	}, {
		key: 'saveFrameShortcuts',
		value: function saveFrameShortcuts() {
			var prev = this.yieldPower;
			if (this.frames.length == 0) {
				this.topFrame = undefined;
				this.yieldPower = this.defaultYieldPower;
			} else {
				this.topFrame = this.frames[0];
				this.yieldPower = this.topFrame.yieldPower;
			}
		}
	}, {
		key: 'fromNative',
		value: function fromNative(native, x) {
			return this.realm.fromNative(native, x);
		}
	}, {
		key: 'generator',
		value: function generator() {
			return {
				next: this.next.bind(this),
				throw: function _throw(e) {
					throw e;
				},
				evaluator: this
			};
		}
	}, {
		key: 'breakFrames',
		value: function breakFrames() {}
	}, {
		key: 'resolveRef',
		value: /*#__PURE__*/_regenerator2.default.mark(function resolveRef(n, s, create) {
			var oldAST, iref, idx, ref;
			return _regenerator2.default.wrap(function resolveRef$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							oldAST = this.topFrame.ast;

							this.topFrame.ast = n;
							_context6.t0 = n.type;
							_context6.next = _context6.t0 === 'Identifier' ? 5 : _context6.t0 === 'MemberExpression' ? 9 : 28;
							break;

						case 5:
							iref = s.ref(n.name, s.realm);

							if (!iref) {
								iref = {
									getValue: /*#__PURE__*/_regenerator2.default.mark(function getValue() {
										var err;
										return _regenerator2.default.wrap(function getValue$(_context3) {
											while (1) {
												switch (_context3.prev = _context3.next) {
													case 0:
														err = CompletionRecord.makeReferenceError(s.realm, n.name + ' is not defined');
														return _context3.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict }), 't0', 2);

													case 2:
														_context3.next = 4;
														return err;

													case 4:
														return _context3.abrupt('return', _context3.sent);

													case 5:
													case 'end':
														return _context3.stop();
												}
											}
										}, getValue, this);
									}),
									del: function del() {
										return true;
									}
								};
								if (!create || s.strict) {
									iref.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
										var err;
										return _regenerator2.default.wrap(function _callee3$(_context4) {
											while (1) {
												switch (_context4.prev = _context4.next) {
													case 0:
														err = CompletionRecord.makeReferenceError(s.realm, n.name + ' is not defined');
														return _context4.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'write', ident: n.name, strict: s.strict }), 't0', 2);

													case 2:
														_context4.next = 4;
														return err;

													case 4:
														return _context4.abrupt('return', _context4.sent);

													case 5:
													case 'end':
														return _context4.stop();
												}
											}
										}, _callee3, this);
									});
								} else {
									iref.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee4(value) {
										var aref;
										return _regenerator2.default.wrap(function _callee4$(_context5) {
											while (1) {
												switch (_context5.prev = _context5.next) {
													case 0:
														s.global.set(n.name, value, s);
														aref = s.global.ref(n.name, s);

														this.setValue = aref.setValue;
														this.getValue = aref.getValue;
														this.del = aref.delete;

													case 5:
													case 'end':
														return _context5.stop();
												}
											}
										}, _callee4, this);
									});
								}
							}
							this.topFrame.ast = oldAST;
							return _context6.abrupt('return', iref);

						case 9:
							idx = void 0;
							return _context6.delegateYield(this.branch(n.object, s), 't1', 11);

						case 11:
							ref = _context6.t1;

							if (!n.computed) {
								_context6.next = 17;
								break;
							}

							return _context6.delegateYield(this.branch(n.property, s), 't2', 14);

						case 14:
							idx = _context6.t2.toNative();
							_context6.next = 18;
							break;

						case 17:
							idx = n.property.name;

						case 18:
							if (ref) {
								_context6.next = 22;
								break;
							}

							_context6.next = 21;
							return CompletionRecord.makeTypeError(s.realm, 'Can\'t write property of undefined: ' + idx);

						case 21:
							return _context6.abrupt('return', _context6.sent);

						case 22:
							if (ref.ref) {
								_context6.next = 26;
								break;
							}

							_context6.next = 25;
							return CompletionRecord.makeTypeError(s.realm, 'Can\'t write property of non-object type: ' + idx);

						case 25:
							return _context6.abrupt('return', _context6.sent);

						case 26:

							this.topFrame.ast = oldAST;
							return _context6.abrupt('return', ref.ref(idx, s));

						case 28:
							_context6.next = 30;
							return CompletionRecord.makeTypeError(s.realm, 'Couldnt resolve ref component: ' + n.type);

						case 30:
							return _context6.abrupt('return', _context6.sent);

						case 31:
						case 'end':
							return _context6.stop();
					}
				}
			}, resolveRef, this);
		})
	}, {
		key: 'partialMemberExpression',
		value: /*#__PURE__*/_regenerator2.default.mark(function partialMemberExpression(left, n, s) {
			var right;
			return _regenerator2.default.wrap(function partialMemberExpression$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							if (!n.computed) {
								_context7.next = 7;
								break;
							}

							return _context7.delegateYield(this.branch(n.property, s), 't0', 2);

						case 2:
							right = _context7.t0;
							return _context7.delegateYield(left.get(right.toNative(), s.realm), 't1', 4);

						case 4:
							return _context7.abrupt('return', _context7.t1);

						case 7:
							if (!(n.property.type == 'Identifier')) {
								_context7.next = 14;
								break;
							}

							if (left) {
								_context7.next = 10;
								break;
							}

							throw 'Cant index ' + n.property.name + ' of undefined';

						case 10:
							return _context7.delegateYield(left.get(n.property.name, s.realm), 't2', 11);

						case 11:
							return _context7.abrupt('return', _context7.t2);

						case 14:
							if (left) {
								_context7.next = 16;
								break;
							}

							throw 'Cant index ' + n.property.value.toString() + ' of undefined';

						case 16:
							return _context7.delegateYield(left.get(n.property.value.toString(), s.realm), 't3', 17);

						case 17:
							return _context7.abrupt('return', _context7.t3);

						case 18:
						case 'end':
							return _context7.stop();
					}
				}
			}, partialMemberExpression, this);
		})

		//NOTE: Returns generator, fast return yield *;

	}, {
		key: 'doBinaryEvaluation',
		value: function doBinaryEvaluation(operator, left, right, realm) {
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
	}, {
		key: 'branchFrame',
		value: function branchFrame(type, n, s, extra) {
			var frame = { generator: this.branch(n, s), type: type, scope: s, ast: n };

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
	}, {
		key: 'beforeNode',
		value: function beforeNode(n) {
			var tf = this.topFrame;
			var state = { top: tf, ast: tf.ast, node: n };
			this.lastASTNodeProcessed = n;
			if (this.debug) this.incrCtr('astInvocationCount', n.type);
			tf.ast = n;
			return state;
		}
	}, {
		key: 'afterNode',
		value: function afterNode(state, r) {
			var tf = this.topFrame;
			tf.value = r;
			tf.ast = state.ast;
		}

		/**
   * @private
   * @param {object} n - AST Node to dispatch
   * @param {Scope} s - Current evaluation scope
   */

	}, {
		key: 'branch',
		value: function branch(n, s) {
			if (!n.dispatch) {
				var nextStep = this.findNextStep(n.type);

				n.dispatch = /*#__PURE__*/_regenerator2.default.mark(function _callee5(that, n, s) {
					var state, result;
					return _regenerator2.default.wrap(function _callee5$(_context8) {
						while (1) {
							switch (_context8.prev = _context8.next) {
								case 0:
									state = that.beforeNode(n);
									return _context8.delegateYield(nextStep(that, n, s), 't0', 2);

								case 2:
									result = _context8.t0;

									if (!(result instanceof CompletionRecord)) {
										_context8.next = 7;
										break;
									}

									_context8.next = 6;
									return result;

								case 6:
									result = _context8.sent;

								case 7:
									if (!(result && result.then)) {
										_context8.next = 11;
										break;
									}

									_context8.next = 10;
									return result;

								case 10:
									result = _context8.sent;

								case 11:

									that.afterNode(state, result);

									return _context8.abrupt('return', result);

								case 13:
								case 'end':
									return _context8.stop();
							}
						}
					}, _callee5, this);
				});
			}
			return n.dispatch(this, n, s);
		}
	}, {
		key: 'incrCtr',
		value: function incrCtr(n, c, v) {
			if (v === undefined) v = 1;
			if (!this.profile) this.profile = {};
			var o = this.profile[n];
			if (!o) {
				o = {};
				this.profile[n] = o;
			}
			c = c || '???';
			if (c in o) o[c] += v;else o[c] = v;
		}
	}, {
		key: 'dumpProfilingInformation',
		value: function dumpProfilingInformation() {
			var _this = this;

			function lpad(s, l) {
				return s + new Array(Math.max(l - s.length, 1)).join(' ');
			}

			if (!this.profile) {
				console.log('===== Profile: None collected =====');
				return;
			}

			console.log('===== Profile =====');

			var _loop = function _loop(sec) {
				console.log(sec + ' Stats:');
				var o = _this.profile[sec];
				var okeys = (0, _keys2.default)(o).sort(function (a, b) {
					return o[b] - o[a];
				});
				for (var _iterator3 = okeys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
					var _ref3;

					if (_isArray3) {
						if (_i3 >= _iterator3.length) break;
						_ref3 = _iterator3[_i3++];
					} else {
						_i3 = _iterator3.next();
						if (_i3.done) break;
						_ref3 = _i3.value;
					}

					var name = _ref3;

					console.log('  ' + lpad(name, 20) + ': ' + o[name]);
				}
			};

			for (var sec in this.profile) {
				_loop(sec);
			}
			console.log('=================');
		}
	}, {
		key: 'insterment',
		get: function get() {
			return this.instrument;
		},
		set: function set(v) {
			this.instrument = v;
		}
	}]);
	return Evaluator;
}();

Evaluator.prototype.findNextStep = __webpack_require__(197).findNextStep;

module.exports = Evaluator;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(15).Object.keys;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9);
var $keys = __webpack_require__(51);

__webpack_require__(19)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperties = __webpack_require__(154);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _from = __webpack_require__(157);

var _from2 = _interopRequireDefault(_from);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _weakMap = __webpack_require__(161);

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompletionRecord = __webpack_require__(175);
var GenDash = __webpack_require__(176);

var undef = void 0,
    nil = void 0,
    tru = void 0,
    fals = void 0,
    nan = void 0,
    emptyString = void 0,
    zero = void 0,
    one = void 0,
    negone = void 0,
    negzero = void 0,
    smallIntValues = void 0;
var cache = new _weakMap2.default();
var bookmarks = new _weakMap2.default();
var ObjectValue = void 0,
    PrimitiveValue = void 0,
    StringValue = void 0,
    NumberValue = void 0,
    BridgeValue = void 0,
    Evaluator = void 0;

var serial = 0;
/**
 * Represents a value a variable could take.
 */

var Value = function () {
	(0, _createClass3.default)(Value, null, [{
		key: 'fromPrimativeNative',

		/**
   * Convert a native javascript primative value to a Value
   * @param {any} value - The value to convert
   */
		value: function fromPrimativeNative(value) {
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
					var snv = smallIntValues[value + 1];
					if (snv) return snv;
				}
				return new NumberValue(value);
			}
			if (typeof value === 'string') return new StringValue(value);
			if (typeof value === 'boolean') return new PrimitiveValue(value);
		}
	}, {
		key: 'hasBookmark',
		value: function hasBookmark(native) {
			return bookmarks.has(native);
		}
	}, {
		key: 'getBookmark',
		value: function getBookmark(native) {
			return bookmarks.get(native);
		}

		/**
   * Convert a native javascript value to a Value
   *
   * @param {any} value - The value to convert
   * @param {Realm} realm - The realm of the new value.
   */

	}, {
		key: 'fromNative',
		value: function fromNative(value, realm) {
			if (value instanceof Value) return value;
			var prim = Value.fromPrimativeNative(value);
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

			throw new TypeError('Tried to load an unsafe native value into the interperter:' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) + ' / ' + value);
			//TODO: Is this cache dangerous?
			if (!cache.has(value)) {
				var nue = new BridgeValue(realm, value);
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

	}, {
		key: 'createNativeBookmark',
		value: function createNativeBookmark(v, realm) {
			var out;
			var thiz = this;
			if (typeof v.call === 'function') {
				switch (realm.options.bookmarkInvocationMode) {
					case 'loop':

						out = function Bookmark() {
							var Evaluator = __webpack_require__(149);
							var cthis = realm.makeForForeignObject(this);
							var c = v.call(cthis, (0, _from2.default)(arguments).map(function (v) {
								return realm.makeForForeignObject(v);
							}), realm.globalScope);
							var evalu = new Evaluator(realm, null, realm.globalScope);
							evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
							var gen = evalu.generator();
							var result = void 0;
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
			(0, _defineProperties2.default)(out, {
				toString: { value: function value() {
						return v.debugString;
					}, writable: true },
				inspect: { value: function value() {
						return v.debugString;
					}, writable: true },
				esperValue: { get: function get() {
						return v;
					} }
			});
			bookmarks.set(out, v);
			return out;
		}
	}, {
		key: 'undef',
		get: function get() {
			return undef;
		}

		/**
   * Holds a value representing `null`
   *
   * @returns {NullValue}
   */

	}, {
		key: 'null',
		get: function get() {
			return nil;
		}

		/**
   * Holds a value representing `true`
   *
   * @returns {BooleanValue} true
   */

	}, {
		key: 'true',
		get: function get() {
			return tru;
		}

		/**
   * Holds a value representing `fasle`
   *
   * @returns {BooleanValue} false
   */

	}, {
		key: 'false',
		get: function get() {
			return fals;
		}

		/**
   * Holds a value representing `NaN`
   *
   * @returns {NumberValue} NaN
   */

	}, {
		key: 'nan',
		get: function get() {
			return nan;
		}

		/**
   * Holds a value representing `''`
   *
   * @returns {StringValue} ''
   */

	}, {
		key: 'emptyString',
		get: function get() {
			return emptyString;
		}

		/**
   * Holds a value representing `0`
   *
   * @returns {NumberValue} 0
   */

	}, {
		key: 'zero',
		get: function get() {
			return zero;
		}
	}]);

	function Value() {
		(0, _classCallCheck3.default)(this, Value);

		this.serial = serial++;
	}

	/**
  * Converts this value to a native javascript value.
  *
  * @abstract
  * @returns {*}
  */


	(0, _createClass3.default)(Value, [{
		key: 'toNative',
		value: function toNative() {
			throw new Error('Unimplemented: Value#toNative');
		}

		/**
   * Deep copy this value to a native javascript value.
   *
   * @returns {*}
   */

	}, {
		key: 'toJS',
		value: function toJS() {
			return this.toNative();
		}

		/**
   * A string representation of this Value suitable for display when
   * debugging.
   * @abstract
   * @returns {string}
   */

	}, {
		key: 'inspect',
		value: function inspect() {
			return this.debugString;
		}

		//TODO: Kill this

	}, {
		key: 'fromNative',
		value: function fromNative(other, realm) {
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

	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			var err;
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							err = "Can't access get " + name + ' of that type: ' + __webpack_require__(177).inspect(this);
							return _context.abrupt('return', CompletionRecord.makeTypeError(realm, err));

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'getImmediate',
		value: function getImmediate(name) {
			return GenDash.syncGenHelper(this.get(name));
		}

		/**
   * Computes the javascript expression `!value`
   * @returns {Value}
   */

	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', !this.truthy ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, not, this);
		})

		/**
   * Computes the javascript expression `+value`
   * @returns {Value}
   */

	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = Value;
							return _context3.delegateYield(this.toNumberValue(), 't1', 2);

						case 2:
							_context3.t2 = +_context3.t1;
							return _context3.abrupt('return', _context3.t0.fromNative.call(_context3.t0, _context3.t2));

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, unaryPlus, this);
		})

		/**
   * Computes the javascript expression `-value`
   * @returns {Value}
   */

	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = Value;
							return _context4.delegateYield(this.toNumberValue(), 't1', 2);

						case 2:
							_context4.t2 = -_context4.t1;
							return _context4.abrupt('return', _context4.t0.fromNative.call(_context4.t0, _context4.t2));

						case 4:
						case 'end':
							return _context4.stop();
					}
				}
			}, unaryMinus, this);
		})

		/**
   * Computes the javascript expression `typeof value`
   * @returns {Value}
   */

	}, {
		key: 'typeOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function typeOf() {
			return _regenerator2.default.wrap(function typeOf$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.fromNative(this.jsTypeName));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, typeOf, this);
		})

		/**
   * Computes the javascript expression `!(value == other)`
   * @param {Value} other - The other value
   * @param {Realm} realm - The realm to use when creating resuls.
   * @returns {Value}
   */

	}, {
		key: 'notEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function notEquals(other, realm) {
			var result;
			return _regenerator2.default.wrap(function notEquals$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(this.doubleEquals(other, realm), 't0', 1);

						case 1:
							result = _context6.t0;
							return _context6.delegateYield(result.not(), 't1', 3);

						case 3:
							return _context6.abrupt('return', _context6.t1);

						case 4:
						case 'end':
							return _context6.stop();
					}
				}
			}, notEquals, this);
		})

		/**
   * Computes the javascript expression `!(value === other)`
   * @param {Value} other - The other value
   * @param {Realm} realm - The realm to use when creating resuls.
   * @returns {Value}
   */

	}, {
		key: 'doubleNotEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleNotEquals(other, realm) {
			var result;
			return _regenerator2.default.wrap(function doubleNotEquals$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(this.tripleEquals(other, realm), 't0', 1);

						case 1:
							result = _context7.t0;
							return _context7.delegateYield(result.not(), 't1', 3);

						case 3:
							return _context7.abrupt('return', _context7.t1);

						case 4:
						case 'end':
							return _context7.stop();
					}
				}
			}, doubleNotEquals, this);
		})

		/**
   * Computes the javascript expression `value === other`
   * @param {Value} other - The other value
   * @param {Realm} realm - The realm to use when creating resuls.
   * @returns {Value}
   */

	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other, realm) {
			return _regenerator2.default.wrap(function tripleEquals$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', other === this ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'getPrototypeProperty',
		value: function getPrototypeProperty() {
			var p = this.properties['prototype'];
			if (!p) return;
			return p.value;
		}
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			var nue, p;
			return _regenerator2.default.wrap(function makeThisForNew$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							nue = new ObjectValue(realm);
							p = this.getPrototypeProperty();

							if (p) nue.setPrototype(p);
							return _context9.abrupt('return', nue);

						case 4:
						case 'end':
							return _context9.stop();
					}
				}
			}, makeThisForNew, this);
		})

		/**
   * Computes the javascript expression `value > other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.t0 = this;
							return _context10.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context10.t2 = _context10.t1;
							return _context10.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context10.t4 = _context10.t3;
							_context10.t5 = _context10.t2 > _context10.t4;
							return _context10.abrupt('return', _context10.t0.fromNative.call(_context10.t0, _context10.t5));

						case 7:
						case 'end':
							return _context10.stop();
					}
				}
			}, gt, this);
		})

		/**
   * Computes the javascript expression `value < other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.t0 = this;
							return _context11.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context11.t2 = _context11.t1;
							return _context11.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context11.t4 = _context11.t3;
							_context11.t5 = _context11.t2 < _context11.t4;
							return _context11.abrupt('return', _context11.t0.fromNative.call(_context11.t0, _context11.t5));

						case 7:
						case 'end':
							return _context11.stop();
					}
				}
			}, lt, this);
		})

		/**
   * Computes the javascript expression `value >= other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.t0 = this;
							return _context12.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context12.t2 = _context12.t1;
							return _context12.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context12.t4 = _context12.t3;
							_context12.t5 = _context12.t2 >= _context12.t4;
							return _context12.abrupt('return', _context12.t0.fromNative.call(_context12.t0, _context12.t5));

						case 7:
						case 'end':
							return _context12.stop();
					}
				}
			}, gte, this);
		})

		/**
   * Computes the javascript expression `value <= other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							_context13.t0 = this;
							return _context13.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context13.t2 = _context13.t1;
							return _context13.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context13.t4 = _context13.t3;
							_context13.t5 = _context13.t2 <= _context13.t4;
							return _context13.abrupt('return', _context13.t0.fromNative.call(_context13.t0, _context13.t5));

						case 7:
						case 'end':
							return _context13.stop();
					}
				}
			}, lte, this);
		})

		/**
   * Computes the javascript expression `value - other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'subtract',
		value: /*#__PURE__*/_regenerator2.default.mark(function subtract(other) {
			return _regenerator2.default.wrap(function subtract$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							_context14.t0 = this;
							return _context14.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context14.t2 = _context14.t1;
							return _context14.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context14.t4 = _context14.t3;
							_context14.t5 = _context14.t2 - _context14.t4;
							return _context14.abrupt('return', _context14.t0.fromNative.call(_context14.t0, _context14.t5));

						case 7:
						case 'end':
							return _context14.stop();
					}
				}
			}, subtract, this);
		})

		/**
   * Computes the javascript expression `value / other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'divide',
		value: /*#__PURE__*/_regenerator2.default.mark(function divide(other) {
			return _regenerator2.default.wrap(function divide$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							_context15.t0 = this;
							return _context15.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context15.t2 = _context15.t1;
							return _context15.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context15.t4 = _context15.t3;
							_context15.t5 = _context15.t2 / _context15.t4;
							return _context15.abrupt('return', _context15.t0.fromNative.call(_context15.t0, _context15.t5));

						case 7:
						case 'end':
							return _context15.stop();
					}
				}
			}, divide, this);
		})

		/**
   * Computes the javascript expression `value * other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'multiply',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply(other) {
			return _regenerator2.default.wrap(function multiply$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_context16.t0 = this;
							return _context16.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context16.t2 = _context16.t1;
							return _context16.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context16.t4 = _context16.t3;
							_context16.t5 = _context16.t2 * _context16.t4;
							return _context16.abrupt('return', _context16.t0.fromNative.call(_context16.t0, _context16.t5));

						case 7:
						case 'end':
							return _context16.stop();
					}
				}
			}, multiply, this);
		})

		/**
   * Computes the javascript expression `value % other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'mod',
		value: /*#__PURE__*/_regenerator2.default.mark(function mod(other) {
			return _regenerator2.default.wrap(function mod$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							_context17.t0 = this;
							return _context17.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context17.t2 = _context17.t1;
							return _context17.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context17.t4 = _context17.t3;
							_context17.t5 = _context17.t2 % _context17.t4;
							return _context17.abrupt('return', _context17.t0.fromNative.call(_context17.t0, _context17.t5));

						case 7:
						case 'end':
							return _context17.stop();
					}
				}
			}, mod, this);
		})
	}, {
		key: 'bitNot',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitNot() {
			return _regenerator2.default.wrap(function bitNot$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							_context18.t0 = this;
							return _context18.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context18.t2 = ~_context18.t1;
							return _context18.abrupt('return', _context18.t0.fromNative.call(_context18.t0, _context18.t2));

						case 4:
						case 'end':
							return _context18.stop();
					}
				}
			}, bitNot, this);
		})
	}, {
		key: 'shiftLeft',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftLeft(other) {
			return _regenerator2.default.wrap(function shiftLeft$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							_context19.t0 = this;
							return _context19.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context19.t2 = _context19.t1;
							return _context19.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context19.t4 = _context19.t3;
							_context19.t5 = _context19.t2 << _context19.t4;
							return _context19.abrupt('return', _context19.t0.fromNative.call(_context19.t0, _context19.t5));

						case 7:
						case 'end':
							return _context19.stop();
					}
				}
			}, shiftLeft, this);
		})
	}, {
		key: 'shiftRight',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRight(other) {
			return _regenerator2.default.wrap(function shiftRight$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							_context20.t0 = this;
							return _context20.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context20.t2 = _context20.t1;
							return _context20.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context20.t4 = _context20.t3;
							_context20.t5 = _context20.t2 >> _context20.t4;
							return _context20.abrupt('return', _context20.t0.fromNative.call(_context20.t0, _context20.t5));

						case 7:
						case 'end':
							return _context20.stop();
					}
				}
			}, shiftRight, this);
		})
	}, {
		key: 'shiftRightZF',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRightZF(other) {
			return _regenerator2.default.wrap(function shiftRightZF$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							_context21.t0 = this;
							return _context21.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context21.t2 = _context21.t1;
							return _context21.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context21.t4 = _context21.t3;
							_context21.t5 = _context21.t2 >>> _context21.t4;
							return _context21.abrupt('return', _context21.t0.fromNative.call(_context21.t0, _context21.t5));

						case 7:
						case 'end':
							return _context21.stop();
					}
				}
			}, shiftRightZF, this);
		})
	}, {
		key: 'bitAnd',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitAnd(other) {
			return _regenerator2.default.wrap(function bitAnd$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							_context22.t0 = this;
							return _context22.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context22.t2 = _context22.t1;
							return _context22.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context22.t4 = _context22.t3;
							_context22.t5 = _context22.t2 & _context22.t4;
							return _context22.abrupt('return', _context22.t0.fromNative.call(_context22.t0, _context22.t5));

						case 7:
						case 'end':
							return _context22.stop();
					}
				}
			}, bitAnd, this);
		})
	}, {
		key: 'bitOr',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitOr(other) {
			return _regenerator2.default.wrap(function bitOr$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							_context23.t0 = this;
							return _context23.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context23.t2 = _context23.t1;
							return _context23.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context23.t4 = _context23.t3;
							_context23.t5 = _context23.t2 | _context23.t4;
							return _context23.abrupt('return', _context23.t0.fromNative.call(_context23.t0, _context23.t5));

						case 7:
						case 'end':
							return _context23.stop();
					}
				}
			}, bitOr, this);
		})
	}, {
		key: 'bitXor',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitXor(other) {
			return _regenerator2.default.wrap(function bitXor$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							_context24.t0 = this;
							return _context24.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context24.t2 = _context24.t1;
							return _context24.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context24.t4 = _context24.t3;
							_context24.t5 = _context24.t2 ^ _context24.t4;
							return _context24.abrupt('return', _context24.t0.fromNative.call(_context24.t0, _context24.t5));

						case 7:
						case 'end':
							return _context24.stop();
					}
				}
			}, bitXor, this);
		})

		/**
   * Computes the `value` raised to the `other` power (`value ** other`)
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'pow',
		value: /*#__PURE__*/_regenerator2.default.mark(function pow(other) {
			return _regenerator2.default.wrap(function pow$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							_context25.t0 = this;
							_context25.t1 = Math;
							return _context25.delegateYield(this.toNumberNative(), 't2', 3);

						case 3:
							_context25.t3 = _context25.t2;
							return _context25.delegateYield(other.toNumberNative(), 't4', 5);

						case 5:
							_context25.t5 = _context25.t4;
							_context25.t6 = _context25.t1.pow.call(_context25.t1, _context25.t3, _context25.t5);
							return _context25.abrupt('return', _context25.t0.fromNative.call(_context25.t0, _context25.t6));

						case 8:
						case 'end':
							return _context25.stop();
					}
				}
			}, pow, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			var err;
			return _regenerator2.default.wrap(function inOperator$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							err = "Cannot use 'in' operator to search for 'thing' in 'thing'";
							return _context26.abrupt('return', new CompletionRecord(CompletionRecord.THROW, {
								type: "TypeError",
								message: err
							}));

						case 2:
						case 'end':
							return _context26.stop();
					}
				}
			}, inOperator, this);
		})

		/**
   * Is the value is truthy, i.e. `!!value`
   *
   * @abstract
   * @type {boolean}
   */

	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							throw new Error('Unimplemented: Value#toNumberValue');

						case 1:
						case 'end':
							return _context27.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							throw new Error('Unimplemented: Value#StringValue');

						case 1:
						case 'end':
							return _context28.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'toStringNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringNative() {
			return _regenerator2.default.wrap(function toStringNative$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							return _context29.delegateYield(this.toStringValue(), 't0', 1);

						case 1:
							return _context29.abrupt('return', _context29.t0.native);

						case 2:
						case 'end':
							return _context29.stop();
					}
				}
			}, toStringNative, this);
		})
	}, {
		key: 'toBooleanValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toBooleanValue() {
			return _regenerator2.default.wrap(function toBooleanValue$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.abrupt('return', this.truthy ? tru : fals);

						case 1:
						case 'end':
							return _context30.stop();
					}
				}
			}, toBooleanValue, this);
		})
	}, {
		key: 'toUIntNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toUIntNative() {
			var nv;
			return _regenerator2.default.wrap(function toUIntNative$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							return _context31.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context31.t0;
							return _context31.abrupt('return', Math.floor(nv.native));

						case 3:
						case 'end':
							return _context31.stop();
					}
				}
			}, toUIntNative, this);
		})
	}, {
		key: 'toIntNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toIntNative() {
			var nv;
			return _regenerator2.default.wrap(function toIntNative$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							return _context32.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context32.t0;
							return _context32.abrupt('return', Math.floor(nv.native));

						case 3:
						case 'end':
							return _context32.stop();
					}
				}
			}, toIntNative, this);
		})
	}, {
		key: 'toNumberNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberNative() {
			var nv;
			return _regenerator2.default.wrap(function toNumberNative$(_context33) {
				while (1) {
					switch (_context33.prev = _context33.next) {
						case 0:
							return _context33.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context33.t0;
							return _context33.abrupt('return', nv.native);

						case 3:
						case 'end':
							return _context33.stop();
					}
				}
			}, toNumberNative, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context34) {
				while (1) {
					switch (_context34.prev = _context34.next) {
						case 0:
							throw new Error('Unimplemented: Value#toPrimitiveValue');

						case 1:
						case 'end':
							return _context34.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toPrimitiveNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveNative(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveNative$(_context35) {
				while (1) {
					switch (_context35.prev = _context35.next) {
						case 0:
							return _context35.delegateYield(this.toPrimitiveValue(preferedType), 't0', 1);

						case 1:
							return _context35.abrupt('return', _context35.t0.native);

						case 2:
						case 'end':
							return _context35.stop();
					}
				}
			}, toPrimitiveNative, this);
		})

		/**
   * Quickly make a generator for this value
   */

	}, {
		key: 'fastGen',
		value: /*#__PURE__*/_regenerator2.default.mark(function fastGen() {
			return _regenerator2.default.wrap(function fastGen$(_context36) {
				while (1) {
					switch (_context36.prev = _context36.next) {
						case 0:
							return _context36.abrupt('return', this);

						case 1:
						case 'end':
							return _context36.stop();
					}
				}
			}, fastGen, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			var native = this.toNative();
			return native ? native.toString() : '???';
		}
	}, {
		key: 'truthy',
		get: function get() {
			throw new Error('Unimplemented: Value#truthy');
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			throw new Error('Unimplemented: Value#jsTypeName');
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return this.jsTypeName;
		}
	}, {
		key: 'isCallable',
		get: function get() {
			return typeof this.call === 'function';
		}
	}]);
	return Value;
}();

module.exports = Value;

ObjectValue = __webpack_require__(180);
PrimitiveValue = __webpack_require__(182);
StringValue = __webpack_require__(185);
NumberValue = __webpack_require__(186);
var UndefinedValue = __webpack_require__(190);
var NullValue = __webpack_require__(187);

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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
var $Object = __webpack_require__(15).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(28), 'Object', { defineProperties: __webpack_require__(50) });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(159);
module.exports = __webpack_require__(15).Array.from;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(20);
var toObject = __webpack_require__(9);
var call = __webpack_require__(134);
var isArrayIter = __webpack_require__(135);
var toLength = __webpack_require__(57);
var createProperty = __webpack_require__(160);
var getIterFn = __webpack_require__(127);

$export($export.S + $export.F * !__webpack_require__(146)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(24);
var createDesc = __webpack_require__(32);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(63);
__webpack_require__(163);
__webpack_require__(171);
__webpack_require__(173);
module.exports = __webpack_require__(15).WeakMap;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var each = __webpack_require__(164)(0);
var redefine = __webpack_require__(46);
var meta = __webpack_require__(71);
var assign = __webpack_require__(167);
var weak = __webpack_require__(168);
var isObject = __webpack_require__(26);
var validate = __webpack_require__(169);
var NATIVE_WEAK_MAP = __webpack_require__(169);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(170)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(54);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(57);
var asc = __webpack_require__(165);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(166);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var isArray = __webpack_require__(76);
var SPECIES = __webpack_require__(62)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(75);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(144);
var getWeak = __webpack_require__(71).getWeak;
var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var anInstance = __webpack_require__(132);
var forOf = __webpack_require__(133);
var createArrayMethod = __webpack_require__(164);
var $has = __webpack_require__(12);
var validate = __webpack_require__(169);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var $export = __webpack_require__(20);
var meta = __webpack_require__(71);
var fails = __webpack_require__(29);
var hide = __webpack_require__(23);
var redefineAll = __webpack_require__(144);
var forOf = __webpack_require__(133);
var anInstance = __webpack_require__(132);
var isObject = __webpack_require__(26);
var setToStringTag = __webpack_require__(61);
var dP = __webpack_require__(24).f;
var each = __webpack_require__(164)(0);
var DESCRIPTORS = __webpack_require__(28);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(172)('WeakMap');


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(20);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(174)('WeakMap');


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(20);
var aFunction = __webpack_require__(22);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(133);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);

var CompletionRecord = function () {
	function CompletionRecord(type, value, target) {
		(0, _classCallCheck3.default)(this, CompletionRecord);

		if (value === undefined) {
			value = type;
			type = CompletionRecord.NORMAL;
		}

		this.type = type;
		this.value = value;
		this.target = target;
	}

	(0, _createClass3.default)(CompletionRecord, [{
		key: 'addExtra',


		/**
   * Easy access to value.addExtra.
   * Note: Returns a generator.
   * @param {Object} obj - Extra properties
   */
		value: function addExtra(obj) {
			return this.value.addExtra(obj);
		}
	}, {
		key: 'abrupt',
		get: function get() {
			return this.type !== CompletionRecord.NORMAL;
		}
	}], [{
		key: 'makeTypeError',
		value: function makeTypeError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.TypeError.makeFrom(msg);else err = realm.TypeError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeReferenceError',
		value: function makeReferenceError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.ReferenceError.makeFrom(msg);else err = realm.ReferenceError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeSyntaxError',
		value: function makeSyntaxError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.SyntaxError.makeFrom(msg);else err = realm.SyntaxError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeRangeError',
		value: function makeRangeError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.RangeError.makeFrom(msg);else err = realm.RangeError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}]);
	return CompletionRecord;
}();

module.exports = CompletionRecord;

CompletionRecord.NORMAL = 0;
CompletionRecord.BREAK = 1;
CompletionRecord.CONTINUE = 2;
CompletionRecord.RETURN = 3;
CompletionRecord.THROW = 4;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(sortValArray),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(mergeValArray);

function sortValArray(arr, comp) {
	var mid, left, right;
	return _regenerator2.default.wrap(function sortValArray$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(arr.length < 2)) {
						_context.next = 2;
						break;
					}

					return _context.abrupt('return', arr);

				case 2:
					mid = Math.floor(arr.length / 2);
					return _context.delegateYield(sortValArray(arr.slice(0, mid), comp), 't0', 4);

				case 4:
					left = _context.t0;
					return _context.delegateYield(sortValArray(arr.slice(mid, arr.length), comp), 't1', 6);

				case 6:
					right = _context.t1;
					return _context.delegateYield(mergeValArray(left, right, comp), 't2', 8);

				case 8:
					return _context.abrupt('return', _context.t2);

				case 9:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function mergeValArray(l, r, comp) {
	var result;
	return _regenerator2.default.wrap(function mergeValArray$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					result = [];

				case 1:
					if (!(l.length && r.length)) {
						_context2.next = 10;
						break;
					}

					return _context2.delegateYield(comp(l[0], r[0]), 't0', 3);

				case 3:
					if (!_context2.t0) {
						_context2.next = 7;
						break;
					}

					result.push(l.shift());
					_context2.next = 8;
					break;

				case 7:
					result.push(r.shift());

				case 8:
					_context2.next = 1;
					break;

				case 10:

					while (l.length) {
						result.push(l.shift());
					}while (r.length) {
						result.push(r.shift());
					}return _context2.abrupt('return', result);

				case 13:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

var GenDash = function () {
	function GenDash() {
		(0, _classCallCheck3.default)(this, GenDash);
	}

	(0, _createClass3.default)(GenDash, null, [{
		key: 'identify',
		value: /*#__PURE__*/_regenerator2.default.mark(function identify(value) {
			return _regenerator2.default.wrap(function identify$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', value);

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, identify, this);
		})
	}, {
		key: 'map',
		value: /*#__PURE__*/_regenerator2.default.mark(function map(what, fx) {
			var out, i;
			return _regenerator2.default.wrap(function map$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							fx = fx || GenDash.identify;
							out = new Array(what.length);
							i = 0;

						case 3:
							if (!(i < what.length)) {
								_context4.next = 9;
								break;
							}

							return _context4.delegateYield(fx(what[i], i, what), 't0', 5);

						case 5:
							out[i] = _context4.t0;

						case 6:
							++i;
							_context4.next = 3;
							break;

						case 9:
							return _context4.abrupt('return', out);

						case 10:
						case 'end':
							return _context4.stop();
					}
				}
			}, map, this);
		})
	}, {
		key: 'each',
		value: /*#__PURE__*/_regenerator2.default.mark(function each(what, fx) {
			var i;
			return _regenerator2.default.wrap(function each$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							if (!(what == null)) {
								_context5.next = 2;
								break;
							}

							return _context5.abrupt('return', what);

						case 2:
							i = 0;

						case 3:
							if (!(i < what.length)) {
								_context5.next = 11;
								break;
							}

							return _context5.delegateYield(fx(what[i], i, what), 't0', 5);

						case 5:
							_context5.t1 = _context5.t0;

							if (!(false === _context5.t1)) {
								_context5.next = 8;
								break;
							}

							return _context5.abrupt('break', 11);

						case 8:
							++i;
							_context5.next = 3;
							break;

						case 11:
							return _context5.abrupt('return', what);

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, each, this);
		})
	}, {
		key: 'noop',
		value: /*#__PURE__*/_regenerator2.default.mark(function noop() {
			return _regenerator2.default.wrap(function noop$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
						case 'end':
							return _context6.stop();
					}
				}
			}, noop, this);
		})
	}, {
		key: 'sort',
		value: /*#__PURE__*/_regenerator2.default.mark(function sort(what, comp) {
			return _regenerator2.default.wrap(function sort$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							comp = comp || /*#__PURE__*/_regenerator2.default.mark(function _callee(left, right) {
								return _regenerator2.default.wrap(function _callee$(_context7) {
									while (1) {
										switch (_context7.prev = _context7.next) {
											case 0:
												return _context7.abrupt('return', left < right);

											case 1:
											case 'end':
												return _context7.stop();
										}
									}
								}, _callee, this);
							});
							return _context8.delegateYield(sortValArray(what, comp), 't0', 2);

						case 2:
							return _context8.abrupt('return', _context8.t0);

						case 3:
						case 'end':
							return _context8.stop();
					}
				}
			}, sort, this);
		})
	}, {
		key: 'values',
		value: /*#__PURE__*/_regenerator2.default.mark(function values(what) {
			var out, o;
			return _regenerator2.default.wrap(function values$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							out = [];
							_context9.t0 = _regenerator2.default.keys(what);

						case 2:
							if ((_context9.t1 = _context9.t0()).done) {
								_context9.next = 9;
								break;
							}

							o = _context9.t1.value;

							if (Object.hasOwnProperty(o)) {
								_context9.next = 6;
								break;
							}

							return _context9.abrupt('continue', 2);

						case 6:
							out.push(what[o]);
							_context9.next = 2;
							break;

						case 9:
							return _context9.abrupt('return', out);

						case 10:
						case 'end':
							return _context9.stop();
					}
				}
			}, values, this);
		})
	}, {
		key: 'keys',
		value: /*#__PURE__*/_regenerator2.default.mark(function keys(what) {
			var out, o;
			return _regenerator2.default.wrap(function keys$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							out = [];
							_context10.t0 = _regenerator2.default.keys(what);

						case 2:
							if ((_context10.t1 = _context10.t0()).done) {
								_context10.next = 9;
								break;
							}

							o = _context10.t1.value;

							if (Object.hasOwnProperty(o)) {
								_context10.next = 6;
								break;
							}

							return _context10.abrupt('continue', 2);

						case 6:
							out.push(o);
							_context10.next = 2;
							break;

						case 9:
							return _context10.abrupt('return', out);

						case 10:
						case 'end':
							return _context10.stop();
					}
				}
			}, keys, this);
		})
	}, {
		key: 'identity',
		value: /*#__PURE__*/_regenerator2.default.mark(function identity(value) {
			return _regenerator2.default.wrap(function identity$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', value);

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, identity, this);
		})
	}, {
		key: 'syncGenHelper',
		value: function syncGenHelper(gen) {
			var val = gen.next();
			if (!val.done) {
				console.log('This code path uses a helper, but the actual method yielded...');
				throw new Error('This code path uses a helper, but the actual method yielded...');
			}
			return val.value;
		}
	}]);
	return GenDash;
}();

module.exports = GenDash;

/***/ }),
/* 177 */
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

exports.isBuffer = __webpack_require__(178);

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
exports.inherits = __webpack_require__(179);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(95)))

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 179 */
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var PropertyDescriptor = __webpack_require__(181);
var CompletionRecord = __webpack_require__(175);
var PrimitiveValue = __webpack_require__(182);
var NullValue = __webpack_require__(187);
var GenDash = __webpack_require__(176);

var alwaysFalse = function alwaysFalse() {
	return false;
};
var undefinedReturningGenerator = /*#__PURE__*/_regenerator2.default.mark(function undefinedReturningGenerator() {
	return _regenerator2.default.wrap(function undefinedReturningGenerator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, undefinedReturningGenerator, this);
});

var ObjRefrence = function () {
	function ObjRefrence(object, name, ctxthis) {
		(0, _classCallCheck3.default)(this, ObjRefrence);

		this.object = object;
		this.name = name;
		this.ctxthis = ctxthis;
	}

	(0, _createClass3.default)(ObjRefrence, [{
		key: 'del',
		value: function del(s) {
			return this.object.delete(this.name, s);
		}
	}, {
		key: 'getValue',
		value: function getValue(s) {
			return this.object.get(this.name, this.ctxthis || this.object, s);
		}
	}, {
		key: 'setValue',
		value: function setValue(value, s) {
			return this.object.set(this.name, value, s);
		}
	}]);
	return ObjRefrence;
}();

/**
 * Represents an Object.
 */


var ObjectValue = function (_Value) {
	(0, _inherits3.default)(ObjectValue, _Value);

	function ObjectValue(realm, proto) {
		(0, _classCallCheck3.default)(this, ObjectValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ObjectValue.__proto__ || (0, _getPrototypeOf2.default)(ObjectValue)).call(this));

		_this.extensable = true;
		_this.realm = realm;
		_this.proto = null;
		if (proto) _this.eraseAndSetPrototype(proto);else if (realm) _this.eraseAndSetPrototype(realm.ObjectPrototype);else _this.properties = (0, _create2.default)(null);
		return _this;
	}

	(0, _createClass3.default)(ObjectValue, [{
		key: 'ref',
		value: function ref(name, ctxthis) {
			var existing = this.properties[name];
			var thiz = this;

			var get = void 0;
			if (existing) {
				return new ObjRefrence(this, name, ctxthis);
			} else {
				return {
					name: name,
					object: thiz,
					isVariable: false,
					del: alwaysFalse,
					getValue: undefinedReturningGenerator,
					setValue: function setValue(to, s) {
						return this.object.set(this.name, to, s);
					}
				};
			}
		}

		//Note: Returns generator by tailcall.

	}, {
		key: 'set',
		value: function set(name, value, s, extra) {
			var thiz = this;
			extra = extra || {};
			if (!Object.prototype.hasOwnProperty.call(this.properties, name)) {
				if (this.properties[name] && this.properties[name].setter) {
					return this.properties[name].setValue(this, value, s);
				}
				if (!this.extensable) {
					//TODO: Should we throw here in strict mode?
					return Value.undef.fastGen();
				}
				var v = new PropertyDescriptor(value);
				v.enumerable = 'enumerable' in extra ? extra.enumerable : true;
				this.properties[name] = v;

				return v.setValue(this, value, s);
			}

			return this.properties[name].setValue(this, value, s);
		}
	}, {
		key: 'rawSetProperty',
		value: function rawSetProperty(name, value) {
			this.properties[name] = value;
		}
	}, {
		key: 'setImmediate',
		value: function setImmediate(name, value) {
			if (name in this.properties) {
				if (Object.prototype.hasOwnProperty.call(this.properties, name)) {
					if (this.properties[name].direct) {
						this.properties[name].value = value;
						return;
					}
				}
			} else if (this.extensable) {
				var v = new PropertyDescriptor(value);
				v.del = this.delete.bind(this, name);
				this.properties[name] = v;
				return;
			}
			return GenDash.syncGenHelper(this.set(name, value, this.realm));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return name in this.properties;
		}
	}, {
		key: 'delete',
		value: function _delete(name, s) {
			var po = this.properties[name];
			if (!po.configurable) {
				if (s.strict) return CompletionRecord.makeTypeError(s.realm, "Can't delete nonconfigurable object");else return false;
			}
			return delete this.properties[name];
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			var _this2 = this;

			//TODO: This is really a mess and should maybe be somewhere else.
			var bk = Value.createNativeBookmark(this, this.realm);
			if (this.jsTypeName === 'function') return bk;

			var _loop = function _loop(p) {
				var name = p; //work around bug in FF where the scope of p is incorrect
				var po = _this2.properties[name];
				if (Object.prototype.hasOwnProperty.call(bk, name)) return 'continue';
				if (bk[p] !== undefined) return 'continue';

				(0, _defineProperty2.default)(bk, p, {
					get: function get() {
						var c = _this2.properties[name].value;
						return c === undefined ? undefined : c.toNative();
					},
					set: function set(v) {
						_this2.properties[name].value = Value.fromNative(v, _this2.realm);
					},
					enumerable: po.enumerable,
					configurable: po.configurable
				});
			};

			for (var p in this.properties) {
				var _ret = _loop(p);

				if (_ret === 'continue') continue;
			}
			return bk;
		}
	}, {
		key: 'toJS',
		value: function toJS() {
			var out = {};
			for (var p in this.properties) {
				var _name = p; //work around bug in FF where the scope of p is incorrect
				var po = this.properties[_name];
				if (!po.enumerable) continue;
				out[_name] = po.value.toJS();
			}
			return out;
		}
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.delegateYield(this.toPrimitiveValue(), 't0', 1);

						case 1:
							_context2.t1 = other;
							return _context2.delegateYield(_context2.t0.add(_context2.t1), 't2', 3);

						case 3:
							return _context2.abrupt('return', _context2.t2);

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var hint, pv, pthis;
			return _regenerator2.default.wrap(function doubleEquals$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							if (!(other === this)) {
								_context3.next = 2;
								break;
							}

							return _context3.abrupt('return', Value.true);

						case 2:
							if (!(other instanceof PrimitiveValue)) {
								_context3.next = 8;
								break;
							}

							hint = other.jsTypeName == 'string' ? 'string' : 'number';
							return _context3.delegateYield(this.toPrimitiveValue(hint), 't0', 5);

						case 5:
							pv = _context3.t0;
							return _context3.delegateYield(pv.doubleEquals(other), 't1', 7);

						case 7:
							return _context3.abrupt('return', _context3.t1);

						case 8:
							return _context3.delegateYield(this.toPrimitiveValue('string'), 't2', 9);

						case 9:
							pthis = _context3.t2;
							return _context3.delegateYield(pthis.doubleEquals(other), 't3', 11);

						case 11:
							return _context3.abrupt('return', _context3.t3);

						case 12:
						case 'end':
							return _context3.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(str) {
			var svalue;
			return _regenerator2.default.wrap(function inOperator$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(str.toStringValue(), 't0', 1);

						case 1:
							svalue = _context4.t0;
							return _context4.abrupt('return', this.has(svalue.toNative()) ? Value.true : Value.false);

						case 3:
						case 'end':
							return _context4.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm, ctxthis) {
			var existing;
			return _regenerator2.default.wrap(function get$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							existing = this.properties[name];

							if (existing) {
								_context5.next = 8;
								break;
							}

							if (!this.proto) {
								_context5.next = 7;
								break;
							}

							return _context5.delegateYield(this.proto.get(name, realm, ctxthis), 't0', 4);

						case 4:
							return _context5.abrupt('return', _context5.t0);

						case 7:
							return _context5.abrupt('return', Value.undef);

						case 8:
							if (!existing.direct) {
								_context5.next = 10;
								break;
							}

							return _context5.abrupt('return', existing.value);

						case 10:
							return _context5.delegateYield(existing.getValue(ctxthis || this), 't1', 11);

						case 11:
							return _context5.abrupt('return', _context5.t1);

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'getImmediate',
		value: function getImmediate(name, realm, ctxthis) {
			var existing = this.properties[name];
			if (!existing) return Value.undef;
			if (existing.direct) return existing.value;
			return GenDash.syncGenHelper(existing.getValue(ctxthis || this));
		}
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other, realm) {
			return _regenerator2.default.wrap(function instanceOf$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(other.constructorOf(this, realm), 't0', 1);

						case 1:
							return _context6.abrupt('return', _context6.t0);

						case 2:
						case 'end':
							return _context6.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'constructorOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function constructorOf(what, realm) {
			var target, pt, checked;
			return _regenerator2.default.wrap(function constructorOf$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(this.get('prototype'), 't0', 1);

						case 1:
							target = _context7.t0;
							pt = what.getPrototype(realm);
							checked = [];

						case 4:
							if (!pt) {
								_context7.next = 13;
								break;
							}

							if (!(pt === target)) {
								_context7.next = 7;
								break;
							}

							return _context7.abrupt('return', Value.true);

						case 7:
							checked.push(pt);
							pt = pt.getPrototype(realm);

							if (!(checked.indexOf(pt) !== -1)) {
								_context7.next = 11;
								break;
							}

							return _context7.abrupt('return', Value.false);

						case 11:
							_context7.next = 4;
							break;

						case 13:
							return _context7.abrupt('return', Value.false);

						case 14:
						case 'end':
							return _context7.stop();
					}
				}
			}, constructorOf, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.t0 = _regenerator2.default.keys(this.properties);

						case 1:
							if ((_context8.t1 = _context8.t0()).done) {
								_context8.next = 9;
								break;
							}

							p = _context8.t1.value;

							if (this.properties[p].enumerable) {
								_context8.next = 5;
								break;
							}

							return _context8.abrupt('continue', 1);

						case 5:
							_context8.next = 7;
							return this.fromNative(p);

						case 7:
							_context8.next = 1;
							break;

						case 9:
							return _context8.abrupt('return');

						case 10:
						case 'end':
							return _context8.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'getPropertyValueMap',
		value: function getPropertyValueMap() {
			var list = {};
			for (var p in this.properties) {
				var v = this.properties[p];
				if (v.value) {
					list[p] = v.value;
				}
			}
			return list;
		}
	}, {
		key: 'hasOwnProperty',
		value: function hasOwnProperty(name) {
			return Object.prototype.hasOwnProperty.call(this.properties, name);
		}
	}, {
		key: 'setPrototype',
		value: function setPrototype(val) {
			if (!this.properties) return this.eraseAndSetPrototype(val);
			if (val === null || val === undefined || val instanceof NullValue) {
				(0, _setPrototypeOf2.default)(this.properties, null);
				this.proto = null;
				return;
			}
			this.proto = val;
			if (val.properties) (0, _setPrototypeOf2.default)(this.properties, val.properties);
		}
	}, {
		key: 'eraseAndSetPrototype',
		value: function eraseAndSetPrototype(val) {
			if (val === null || val === undefined || val instanceof NullValue) {
				this.proto = null;
				this.properties = (0, _create2.default)(null);
			} else {
				this.proto = val;
				this.properties = (0, _create2.default)(val.properties);
			}
		}
	}, {
		key: 'getPrototype',
		value: function getPrototype() {
			return this.proto;
		}
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			var methodNames, _iterator, _isArray, _i, _ref, _name2, method, rescr, res;

			return _regenerator2.default.wrap(function toPrimitiveValue$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							methodNames = void 0;

							if (preferedType == 'string') {
								methodNames = ['toString', 'valueOf'];
							} else {
								methodNames = ['valueOf', 'toString'];
							}

							_iterator = methodNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 3:
							if (!_isArray) {
								_context9.next = 9;
								break;
							}

							if (!(_i >= _iterator.length)) {
								_context9.next = 6;
								break;
							}

							return _context9.abrupt('break', 36);

						case 6:
							_ref = _iterator[_i++];
							_context9.next = 13;
							break;

						case 9:
							_i = _iterator.next();

							if (!_i.done) {
								_context9.next = 12;
								break;
							}

							return _context9.abrupt('break', 36);

						case 12:
							_ref = _i.value;

						case 13:
							_name2 = _ref;
							return _context9.delegateYield(this.get(_name2), 't0', 15);

						case 15:
							method = _context9.t0;

							if (!(method && method.call)) {
								_context9.next = 34;
								break;
							}

							return _context9.delegateYield(method.call(this, [], this.realm.globalScope), 't1', 18);

						case 18:
							_context9.next = 20;
							return _context9.t1;

						case 20:
							rescr = _context9.sent;
							//TODO: There should be more aruments here
							res = Value.undef;

							if (rescr instanceof CompletionRecord) {
								_context9.next = 26;
								break;
							}

							res = rescr;
							_context9.next = 32;
							break;

						case 26:
							if (!(rescr.type == CompletionRecord.RETURN)) {
								_context9.next = 30;
								break;
							}

							res = rescr.value;
							_context9.next = 32;
							break;

						case 30:
							if (!(rescr.type != CompletionRecord.NORMAL)) {
								_context9.next = 32;
								break;
							}

							return _context9.abrupt('continue', 34);

						case 32:
							if (!(res.specTypeName !== 'object')) {
								_context9.next = 34;
								break;
							}

							return _context9.abrupt('return', res);

						case 34:
							_context9.next = 3;
							break;

						case 36:
							_context9.next = 38;
							return CompletionRecord.makeTypeError(this.realm, 'Cannot convert object to primitive value');

						case 38:
							return _context9.abrupt('return', _context9.sent);

						case 39:
						case 'end':
							return _context9.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			var prim;
			return _regenerator2.default.wrap(function toNumberValue$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.delegateYield(this.toPrimitiveValue('number'), 't0', 1);

						case 1:
							prim = _context10.t0;
							return _context10.delegateYield(prim.toNumberValue(), 't1', 3);

						case 3:
							return _context10.abrupt('return', _context10.t1);

						case 4:
						case 'end':
							return _context10.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toObjectValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toObjectValue(realm) {
			return _regenerator2.default.wrap(function toObjectValue$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this);

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, toObjectValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			var prim, gen;
			return _regenerator2.default.wrap(function toStringValue$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.delegateYield(this.toPrimitiveValue('string'), 't0', 1);

						case 1:
							prim = _context12.t0;
							gen = prim.toStringValue();
							return _context12.delegateYield(gen, 't1', 4);

						case 4:
							return _context12.abrupt('return', _context12.t1);

						case 5:
						case 'end':
							return _context12.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			var strProps = ['{', '[', this.clazz, ']'];
			var delim = [];
			if (this.wellKnownName) {
				strProps.push('(', this.wellKnownName, ')');
			}
			if (this.proto) {
				delim.push('[[Prototype]]: ' + (this.proto.wellKnownName || this.proto.clazz || this.proto.jsTypeName));
			}
			for (var n in this.properties) {
				if (!Object.prototype.hasOwnProperty.call(this.properties, n)) continue;
				var val = this.properties[n].value;
				if (this.properties[n].getter || this.properties[n].setter) delim.push(n + ': [Getter/Setter]');else if (val.specTypeName === 'object') delim.push(n + ': [Object]');else if (val.specTypeName === 'function') delim.push(n + ': [Function]');else delim.push(n + ': ' + val.debugString);
			}
			strProps.push(delim.join(', '));
			strProps.push('] }');
			return strProps.join(' ');
		}
	}, {
		key: 'truthy',
		get: function get() {
			return true;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			if (typeof this.call !== 'function') return 'object';
			return 'function';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'object';
		}
	}]);
	return ObjectValue;
}(Value);

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);

var serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

var PropertyDescriptor = function () {
	function PropertyDescriptor(value, enumerable) {
		(0, _classCallCheck3.default)(this, PropertyDescriptor);

		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = enumerable !== undefined ? !!enumerable : true;
		this.writable = true;
		this.getter = undefined;
		this.setter = undefined;
		this.variable = false;
	}

	(0, _createClass3.default)(PropertyDescriptor, [{
		key: 'getValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function getValue(thiz) {
			return _regenerator2.default.wrap(function getValue$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							thiz = thiz || Value.null;

							if (!this.getter) {
								_context.next = 4;
								break;
							}

							return _context.delegateYield(this.getter.call(thiz, []), 't0', 3);

						case 3:
							return _context.abrupt('return', _context.t0);

						case 4:
							return _context.abrupt('return', this.value);

						case 5:
						case 'end':
							return _context.stop();
					}
				}
			}, getValue, this);
		})
	}, {
		key: 'setValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function setValue(thiz, to, s) {
			return _regenerator2.default.wrap(function setValue$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							thiz = thiz || Value.null;

							if (!this.setter) {
								_context2.next = 4;
								break;
							}

							return _context2.delegateYield(this.setter.call(thiz, [to], s), 't0', 3);

						case 3:
							return _context2.abrupt('return', _context2.t0);

						case 4:
							if (this.writable) {
								_context2.next = 10;
								break;
							}

							if (!(!s || !s.strict)) {
								_context2.next = 7;
								break;
							}

							return _context2.abrupt('return', this.value);

						case 7:
							_context2.next = 9;
							return CompletionRecord.makeTypeError(s.realm, "Can't write to non-writable value.");

						case 9:
							return _context2.abrupt('return', _context2.sent);

						case 10:
							this.value = to;
							return _context2.abrupt('return', this.value);

						case 12:
						case 'end':
							return _context2.stop();
					}
				}
			}, setValue, this);
		})
	}, {
		key: 'direct',
		get: function get() {
			return !this.getter && !this.setter && this.writable;
		}
	}]);
	return PropertyDescriptor;
}();

module.exports = PropertyDescriptor;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _stringify = __webpack_require__(183);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
var StringValue = void 0;

/**
 * Represents a primitive value.
 */

var PrimitiveValue = function (_Value) {
	(0, _inherits3.default)(PrimitiveValue, _Value);

	function PrimitiveValue(value) {
		(0, _classCallCheck3.default)(this, PrimitiveValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PrimitiveValue.__proto__ || (0, _getPrototypeOf2.default)(PrimitiveValue)).call(this, null));

		_this.native = value;
		//Object.defineProperty(this, 'native', {
		//	'value': value,
		//	'enumerable': true
		//});
		return _this;
	}

	(0, _createClass3.default)(PrimitiveValue, [{
		key: 'ref',
		value: function ref(name, realm) {
			var that = this;
			var out = (0, _create2.default)(null);
			out.getValue = /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.delegateYield(that.get(name, realm), 't0', 1);

							case 1:
								return _context.abrupt('return', _context.t0);

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			});
			out.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee2(to) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								return _context2.delegateYield(that.set(name, to, realm), 't0', 1);

							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			});
			return out;
		}
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			return _regenerator2.default.wrap(function get$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(this.derivePrototype(realm).get(name, realm, this), 't0', 1);

						case 1:
							return _context3.abrupt('return', _context3.t0);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, to, realm) {
			return _regenerator2.default.wrap(function set$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
						case 'end':
							return _context4.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'derivePrototype',
		value: function derivePrototype(realm) {
			switch ((0, _typeof3.default)(this.native)) {
				case 'string':
					return realm.StringPrototype;
				case 'number':
					return realm.NumberPrototype;
				case 'boolean':
					return realm.BooleanPrototype;
			}
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			return this.native;
		}
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', this.native.toString());

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var native, num, _num;

			return _regenerator2.default.wrap(function doubleEquals$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							native = this.native;

							if (!(other instanceof PrimitiveValue)) {
								_context6.next = 5;
								break;
							}

							return _context6.abrupt('return', Value.fromNative(this.native == other.native));

						case 5:
							if (!(typeof native === 'number')) {
								_context6.next = 15;
								break;
							}

							if (!(other instanceof StringValue)) {
								_context6.next = 12;
								break;
							}

							return _context6.delegateYield(other.toNumberValue(), 't0', 8);

						case 8:
							num = _context6.t0;
							return _context6.abrupt('return', Value.from(native === num.toNative()));

						case 12:
							return _context6.abrupt('return', Value.false);

						case 13:
							_context6.next = 20;
							break;

						case 15:
							if (!(typeof native == 'boolean')) {
								_context6.next = 20;
								break;
							}

							return _context6.delegateYield(this.toNumberValue(), 't1', 17);

						case 17:
							_num = _context6.t1;
							return _context6.delegateYield(_num.doubleEquals(other), 't2', 19);

						case 19:
							return _context6.abrupt('return', _context6.t2);

						case 20:
							return _context6.abrupt('return', Value.false);

						case 21:
						case 'end':
							return _context6.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.abrupt('return', this.native === other.toNative() ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context7.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.t0 = this;
							_context8.t1 = this.native;
							return _context8.delegateYield(other.toPrimitiveNative(), 't2', 3);

						case 3:
							_context8.t3 = _context8.t2;
							_context8.t4 = _context8.t1 + _context8.t3;
							return _context8.abrupt('return', _context8.t0.fromNative.call(_context8.t0, _context8.t4));

						case 6:
						case 'end':
							return _context8.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.abrupt('return', Value.false);

						case 1:
						case 'end':
							return _context9.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', this.fromNative(+this.native));

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, unaryPlus, this);
		})
	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this.fromNative(-this.native));

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, unaryMinus, this);
		})
	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.abrupt('return', this.fromNative(!this.native));

						case 1:
						case 'end':
							return _context12.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			return _regenerator2.default.wrap(function observableProperties$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.delegateYield(this.derivePrototype(realm).observableProperties(realm), 't0', 1);

						case 1:
						case 'end':
							return _context13.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							throw new Error('primative value is not a constructor');

						case 1:
						case 'end':
							return _context14.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'getPrototype',
		value: function getPrototype(realm) {
			return this.derivePrototype(realm);
		}
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							return _context15.abrupt('return', this);

						case 1:
						case 'end':
							return _context15.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							if (!(typeof this.native === 'string')) {
								_context16.next = 2;
								break;
							}

							return _context16.abrupt('return', this);

						case 2:
							return _context16.abrupt('return', this.fromNative(String(this.native)));

						case 3:
						case 'end':
							return _context16.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							if (!(typeof this.native === 'number')) {
								_context17.next = 2;
								break;
							}

							return _context17.abrupt('return', this);

						case 2:
							return _context17.abrupt('return', this.fromNative(Number(this.native)));

						case 3:
						case 'end':
							return _context17.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			if ((0, _typeof3.default)(this.native) === 'object') return '[native object]';else if (typeof this.native === 'function') return '[native function]';else if (typeof this.native === 'string') return (0, _stringify2.default)(this.native);else return '' + this.native;
		}
	}, {
		key: 'truthy',
		get: function get() {
			return !!this.native;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return (0, _typeof3.default)(this.native);
		}
	}]);
	return PrimitiveValue;
}(Value);

module.exports = PrimitiveValue;

StringValue = __webpack_require__(185);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(15);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(118);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var Value = __webpack_require__(153);
var NumberValue = void 0;

var StringValue = function (_PrimitiveValue) {
	(0, _inherits3.default)(StringValue, _PrimitiveValue);

	function StringValue() {
		(0, _classCallCheck3.default)(this, StringValue);
		return (0, _possibleConstructorReturn3.default)(this, (StringValue.__proto__ || (0, _getPrototypeOf2.default)(StringValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(StringValue, [{
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			var idx;
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							idx = Number(name);

							if (isNaN(idx)) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return', StringValue.fromNative(this.native[idx]));

						case 3:
							if (!(name === 'length')) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', StringValue.fromNative(this.native.length));

						case 5:
							return _context.delegateYield((0, _get3.default)(StringValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(StringValue.prototype), 'get', this).call(this, name, realm), 't0', 6);

						case 6:
							return _context.abrupt('return', _context.t0);

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var rv;
			return _regenerator2.default.wrap(function doubleEquals$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(other instanceof StringValue)) {
								_context2.next = 4;
								break;
							}

							return _context2.abrupt('return', Value.fromNative(this.native == other.native));

						case 4:
							if (!(other instanceof NumberValue)) {
								_context2.next = 9;
								break;
							}

							return _context2.delegateYield(this.toNumberValue(), 't0', 6);

						case 6:
							rv = _context2.t0;
							return _context2.delegateYield(rv.doubleEquals(other), 't1', 8);

						case 8:
							return _context2.abrupt('return', _context2.t1);

						case 9:
							return _context2.delegateYield((0, _get3.default)(StringValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(StringValue.prototype), 'doubleEquals', this).call(this, other), 't2', 10);

						case 10:
							return _context2.abrupt('return', _context2.t2);

						case 11:
						case 'end':
							return _context2.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = this;
							_context3.t1 = this.native;
							return _context3.delegateYield(other.toStringNative(), 't2', 3);

						case 3:
							_context3.t3 = _context3.t2;
							_context3.t4 = _context3.t1 > _context3.t3;
							return _context3.abrupt('return', _context3.t0.fromNative.call(_context3.t0, _context3.t4));

						case 6:
						case 'end':
							return _context3.stop();
					}
				}
			}, gt, this);
		})
	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = this;
							_context4.t1 = this.native;
							return _context4.delegateYield(other.toStringNative(), 't2', 3);

						case 3:
							_context4.t3 = _context4.t2;
							_context4.t4 = _context4.t1 < _context4.t3;
							return _context4.abrupt('return', _context4.t0.fromNative.call(_context4.t0, _context4.t4));

						case 6:
						case 'end':
							return _context4.stop();
					}
				}
			}, lt, this);
		})
	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.t0 = this;
							_context5.t1 = this.native;
							return _context5.delegateYield(other.toStringNative(), 't2', 3);

						case 3:
							_context5.t3 = _context5.t2;
							_context5.t4 = _context5.t1 >= _context5.t3;
							return _context5.abrupt('return', _context5.t0.fromNative.call(_context5.t0, _context5.t4));

						case 6:
						case 'end':
							return _context5.stop();
					}
				}
			}, gte, this);
		})
	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_context6.t0 = this;
							_context6.t1 = this.native;
							return _context6.delegateYield(other.toStringNative(), 't2', 3);

						case 3:
							_context6.t3 = _context6.t2;
							_context6.t4 = _context6.t1 <= _context6.t3;
							return _context6.abrupt('return', _context6.t0.fromNative.call(_context6.t0, _context6.t4));

						case 6:
						case 'end':
							return _context6.stop();
					}
				}
			}, lte, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.t0 = this;
							_context7.t1 = this.native;
							return _context7.delegateYield(other.toPrimitiveNative('string'), 't2', 3);

						case 3:
							_context7.t3 = _context7.t2;
							_context7.t4 = _context7.t1 + _context7.t3;
							return _context7.abrupt('return', _context7.t0.fromNative.call(_context7.t0, _context7.t4));

						case 6:
						case 'end':
							return _context7.stop();
					}
				}
			}, add, this);
		})
	}]);
	return StringValue;
}(PrimitiveValue);

module.exports = StringValue;

NumberValue = __webpack_require__(186);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(118);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var Value = __webpack_require__(153);
var StringValue = void 0;

var NumberValue = function (_PrimitiveValue) {
	(0, _inherits3.default)(NumberValue, _PrimitiveValue);

	function NumberValue() {
		(0, _classCallCheck3.default)(this, NumberValue);
		return (0, _possibleConstructorReturn3.default)(this, (NumberValue.__proto__ || (0, _getPrototypeOf2.default)(NumberValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(NumberValue, [{
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var on;
			return _regenerator2.default.wrap(function doubleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							on = void 0;

							if (!(other instanceof NumberValue)) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', Value.fromNative(this.native == other.native));

						case 5:
							if (!(other instanceof StringValue)) {
								_context.next = 10;
								break;
							}

							return _context.delegateYield(other.toNumberValue(), 't0', 7);

						case 7:
							on = _context.t0;
							_context.next = 13;
							break;

						case 10:
							if (!(other.specTypeName == 'object')) {
								_context.next = 13;
								break;
							}

							return _context.delegateYield(other.toPrimitiveValue(), 't1', 12);

						case 12:
							on = _context.t1;

						case 13:
							if (on) {
								_context.next = 16;
								break;
							}

							return _context.delegateYield((0, _get3.default)(NumberValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(NumberValue.prototype), 'doubleEquals', this).call(this, other), 't2', 15);

						case 15:
							return _context.abrupt('return', _context.t2);

						case 16:
							return _context.delegateYield(this.doubleEquals(on), 't3', 17);

						case 17:
							return _context.abrupt('return', _context.t3);

						case 18:
						case 'end':
							return _context.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.t0 = this;
							_context2.t1 = this.native;
							return _context2.delegateYield(other.toPrimitiveNative(), 't2', 3);

						case 3:
							_context2.t3 = _context2.t2;
							_context2.t4 = _context2.t1 + _context2.t3;
							return _context2.abrupt('return', _context2.t0.fromNative.call(_context2.t0, _context2.t4));

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}]);
	return NumberValue;
}(PrimitiveValue);

module.exports = NumberValue;

StringValue = __webpack_require__(185);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(188);
var Value = __webpack_require__(153);

var NullValue = function (_EmptyValue) {
	(0, _inherits3.default)(NullValue, _EmptyValue);

	function NullValue() {
		(0, _classCallCheck3.default)(this, NullValue);
		return (0, _possibleConstructorReturn3.default)(this, (NullValue.__proto__ || (0, _getPrototypeOf2.default)(NullValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(NullValue, [{
		key: 'toNative',
		value: function toNative() {
			return null;
		}
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other, realm) {
			return _regenerator2.default.wrap(function tripleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other instanceof NullValue ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', 'null');

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', this);

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', Value.zero);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.fromNative('null'));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'object';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'null';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return 'null';
		}
	}]);
	return NullValue;
}(EmptyValue);

module.exports = NullValue;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var BridgeValue = __webpack_require__(189);
var CompletionRecord = __webpack_require__(175);

var EmptyValue = function (_Value) {
	(0, _inherits3.default)(EmptyValue, _Value);

	function EmptyValue() {
		(0, _classCallCheck3.default)(this, EmptyValue);
		return (0, _possibleConstructorReturn3.default)(this, (EmptyValue.__proto__ || (0, _getPrototypeOf2.default)(EmptyValue)).call(this, null));
	}

	(0, _createClass3.default)(EmptyValue, [{
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', Value.fromNative(true));

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(other instanceof EmptyValue)) {
								_context2.next = 4;
								break;
							}

							return _context2.abrupt('return', Value.true);

						case 4:
							if (!(other instanceof BridgeValue)) {
								_context2.next = 8;
								break;
							}

							return _context2.abrupt('return', this.fromNative(this.toNative() == other.toNative()));

						case 8:
							return _context2.abrupt('return', Value.false);

						case 9:
						case 'end':
							return _context2.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			return _regenerator2.default.wrap(function observableProperties$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return');

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf() {
			return _regenerator2.default.wrap(function instanceOf$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', Value.false);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, instanceOf, this);
		})

		/**
   * @param {String} name
   * @param {Realm} realm
   * @returns {CompletionRecord} Indexing empty values is a type error.
   */

	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			var str, err;
			return _regenerator2.default.wrap(function get$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
							err = CompletionRecord.makeTypeError(realm, str);
							return _context5.delegateYield(err.addExtra({ code: 'IndexEmpty', target: this, prop: name }), 't0', 3);

						case 3:
							return _context5.abrupt('return', err);

						case 4:
						case 'end':
							return _context5.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'truthy',
		get: function get() {
			return false;
		}
	}]);
	return EmptyValue;
}(Value);

module.exports = EmptyValue;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
/**
 * Represents a value that maps directly to an untrusted local value.
 */

var BridgeValue = function (_Value) {
	(0, _inherits3.default)(BridgeValue, _Value);

	function BridgeValue(value) {
		(0, _classCallCheck3.default)(this, BridgeValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (BridgeValue.__proto__ || (0, _getPrototypeOf2.default)(BridgeValue)).call(this));

		_this.native = value;
		return _this;
	}

	(0, _createClass3.default)(BridgeValue, [{
		key: 'makeBridge',
		value: function makeBridge(value) {
			return BridgeValue.make(value);
		}
	}, {
		key: 'ref',
		value: function ref(name, s) {
			var that = this;
			var out = (0, _create2.default)(null);
			var doset = function doset(value) {
				return that.native[name] = value.toNative();
			};
			out.getValue = /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', Value.fromNative(that.native[name]));

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			});
			out.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee2(to) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								doset(to);
							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			});

			return out;
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			return this.native;
		}
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', this.native.toString());

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', this.makeBridge(this.native == other.toNative()));

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', this.makeBridge(this.native === other.toNative()));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', this.makeBridge(this.native + other.toNative()));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'subtract',
		value: /*#__PURE__*/_regenerator2.default.mark(function subtract(other) {
			return _regenerator2.default.wrap(function subtract$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.abrupt('return', this.makeBridge(this.native - other.toNative()));

						case 1:
						case 'end':
							return _context7.stop();
					}
				}
			}, subtract, this);
		})
	}, {
		key: 'multiply',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply(other) {
			return _regenerator2.default.wrap(function multiply$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', this.makeBridge(this.native * other.toNative()));

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, multiply, this);
		})
	}, {
		key: 'divide',
		value: /*#__PURE__*/_regenerator2.default.mark(function divide(other) {
			return _regenerator2.default.wrap(function divide$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.abrupt('return', this.makeBridge(this.native / other.toNative()));

						case 1:
						case 'end':
							return _context9.stop();
					}
				}
			}, divide, this);
		})
	}, {
		key: 'mod',
		value: /*#__PURE__*/_regenerator2.default.mark(function mod(other) {
			return _regenerator2.default.wrap(function mod$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', this.makeBridge(this.native % other.toNative()));

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, mod, this);
		})
	}, {
		key: 'shiftLeft',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftLeft(other) {
			return _regenerator2.default.wrap(function shiftLeft$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this.makeBridge(this.native << other.toNative()));

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, shiftLeft, this);
		})
	}, {
		key: 'shiftRight',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRight(other) {
			return _regenerator2.default.wrap(function shiftRight$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.abrupt('return', this.makeBridge(this.native >> other.toNative()));

						case 1:
						case 'end':
							return _context12.stop();
					}
				}
			}, shiftRight, this);
		})
	}, {
		key: 'shiftRightZF',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRightZF(other) {
			return _regenerator2.default.wrap(function shiftRightZF$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.abrupt('return', this.makeBridge(this.native >>> other.toNative()));

						case 1:
						case 'end':
							return _context13.stop();
					}
				}
			}, shiftRightZF, this);
		})
	}, {
		key: 'bitAnd',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitAnd(other) {
			return _regenerator2.default.wrap(function bitAnd$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							return _context14.abrupt('return', this.makeBridge(this.native & other.toNative()));

						case 1:
						case 'end':
							return _context14.stop();
					}
				}
			}, bitAnd, this);
		})
	}, {
		key: 'bitOr',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitOr(other) {
			return _regenerator2.default.wrap(function bitOr$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							return _context15.abrupt('return', this.makeBridge(this.native | other.toNative()));

						case 1:
						case 'end':
							return _context15.stop();
					}
				}
			}, bitOr, this);
		})
	}, {
		key: 'bitXor',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitXor(other) {
			return _regenerator2.default.wrap(function bitXor$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							return _context16.abrupt('return', this.makeBridge(this.native ^ other.toNative()));

						case 1:
						case 'end':
							return _context16.stop();
					}
				}
			}, bitXor, this);
		})
	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							return _context17.abrupt('return', this.makeBridge(this.native > other.toNative()));

						case 1:
						case 'end':
							return _context17.stop();
					}
				}
			}, gt, this);
		})
	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							return _context18.abrupt('return', this.makeBridge(this.native < other.toNative()));

						case 1:
						case 'end':
							return _context18.stop();
					}
				}
			}, lt, this);
		})
	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							return _context19.abrupt('return', this.makeBridge(this.native >= other.toNative()));

						case 1:
						case 'end':
							return _context19.stop();
					}
				}
			}, gte, this);
		})
	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							return _context20.abrupt('return', this.makeBridge(this.native <= other.toNative()));

						case 1:
						case 'end':
							return _context20.stop();
					}
				}
			}, lte, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			return _regenerator2.default.wrap(function inOperator$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							return _context21.abrupt('return', this.makeBridge(other.toNative() in this.native));

						case 1:
						case 'end':
							return _context21.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							return _context22.abrupt('return', this.makeBridge(this.native instanceof other.toNative()));

						case 1:
						case 'end':
							return _context22.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							return _context23.abrupt('return', this.makeBridge(+this.native));

						case 1:
						case 'end':
							return _context23.stop();
					}
				}
			}, unaryPlus, this);
		})
	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							return _context24.abrupt('return', this.makeBridge(-this.native));

						case 1:
						case 'end':
							return _context24.stop();
					}
				}
			}, unaryMinus, this);
		})
	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							return _context25.abrupt('return', this.makeBridge(!this.native));

						case 1:
						case 'end':
							return _context25.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name) {
			return _regenerator2.default.wrap(function get$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							return _context26.abrupt('return', this.makeBridge(this.native[name]));

						case 1:
						case 'end':
							return _context26.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, value) {
			return _regenerator2.default.wrap(function set$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							this.native[name] = value.toNative();

						case 1:
						case 'end':
							return _context27.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							_context28.t0 = _regenerator2.default.keys(this.native);

						case 1:
							if ((_context28.t1 = _context28.t0()).done) {
								_context28.next = 7;
								break;
							}

							p = _context28.t1.value;
							_context28.next = 5;
							return this.makeBridge(p);

						case 5:
							_context28.next = 1;
							break;

						case 7:
							return _context28.abrupt('return');

						case 8:
						case 'end':
							return _context28.stop();
					}
				}
			}, observableProperties, this);
		})

		/**
   *
   * @param {Value} thiz
   * @param {Value[]} args
   */

	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args) {
			var realArgs, i, result, _result;

			return _regenerator2.default.wrap(function call$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							realArgs = new Array(args.length);

							for (i = 0; i < args.length; ++i) {
								realArgs[i] = args[i].toNative();
							}
							_context29.prev = 2;
							result = this.native.apply(thiz ? thiz.toNative() : undefined, realArgs);
							return _context29.abrupt('return', this.makeBridge(result));

						case 7:
							_context29.prev = 7;
							_context29.t0 = _context29['catch'](2);
							_result = this.makeBridge(_context29.t0);
							return _context29.abrupt('return', new CompletionRecord(CompletionRecord.THROW, _result));

						case 11:
						case 'end':
							return _context29.stop();
					}
				}
			}, call, this, [[2, 7]]);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.abrupt('return', this.makeBridge((0, _create2.default)(this.native.prototype)));

						case 1:
						case 'end':
							return _context30.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							return _context31.abrupt('return', this.fromNative(this.native.toString()));

						case 1:
						case 'end':
							return _context31.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			return '[Bridge: ' + this.native + ']';
		}
	}, {
		key: 'truthy',
		get: function get() {
			return !!this.native;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return (0, _typeof3.default)(this.native);
		}
	}], [{
		key: 'make',
		value: function make(native) {
			if (native === undefined) return Value.undef;
			var prim = Value.fromPrimativeNative(native);
			if (prim) return prim;

			if (Value.hasBookmark(native)) {
				return Value.getBookmark(native);
			}

			return new BridgeValue(native);
		}
	}]);
	return BridgeValue;
}(Value);

module.exports = BridgeValue;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(188);
var Value = __webpack_require__(153);

var UndefinedValue = function (_EmptyValue) {
	(0, _inherits3.default)(UndefinedValue, _EmptyValue);

	function UndefinedValue() {
		(0, _classCallCheck3.default)(this, UndefinedValue);
		return (0, _possibleConstructorReturn3.default)(this, (UndefinedValue.__proto__ || (0, _getPrototypeOf2.default)(UndefinedValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(UndefinedValue, [{
		key: 'toNative',
		value: function toNative() {
			return undefined;
		}
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other, realm) {
			return _regenerator2.default.wrap(function tripleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other instanceof UndefinedValue ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', this.fromNative(undefined + other.toNative()));

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', 'undefined');

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', this);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.nan);

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', Value.fromNative('undefined'));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'undefined';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return 'undefined';
		}
	}]);
	return UndefinedValue;
}(EmptyValue);

module.exports = UndefinedValue;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var PropertyDescriptor = __webpack_require__(181);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var EvaluatorInstruction = __webpack_require__(193);

/**
 * Represents a value that maps directly to an untrusted local value.
 */

var ClosureValue = function (_ObjectValue) {
	(0, _inherits3.default)(ClosureValue, _ObjectValue);

	/**
  * @param {object} func - AST Node for function
  * @param {Scope} scope - Functions up-values.
  */
	function ClosureValue(func, scope) {
		(0, _classCallCheck3.default)(this, ClosureValue);

		var realm = scope.realm;

		var _this = (0, _possibleConstructorReturn3.default)(this, (ClosureValue.__proto__ || (0, _getPrototypeOf2.default)(ClosureValue)).call(this, realm, realm.FunctionPrototype));

		_this.realm = scope.realm;
		_this.func = func;
		_this.funcSourceAST = func;
		_this.scope = scope;
		_this.returnLastValue = false;
		_this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(realm), false);
		_this.properties['name'] = new PropertyDescriptor(_this.fromNative(func.id ? func.id.name : undefined), false);
		_this.properties['length'] = new PropertyDescriptor(_this.fromNative(func.params.length), false);

		return _this;
	}

	(0, _createClass3.default)(ClosureValue, [{
		key: 'toNative',
		value: function toNative() {
			return Value.createNativeBookmark(this, this.realm);
		}
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other === this ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, doubleEquals, this);
		})

		/**
   *
   * @param {Value} thiz
   * @param {Value[]} args
   * @param {Scope} scope
   */

	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, extra) {
			var invokeScope, obj, n, v, fn, _n, argn, argvars, argsObj, i, vv, _v, calleeProp, lengthProp, _i, name, rest, p, _name, opts, result;

			return _regenerator2.default.wrap(function call$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							//TODO: This way of scoping is entirelly wrong.
							if (!scope) scope = this.scope;
							invokeScope = void 0;

							if (this.boundScope) {
								invokeScope = this.boundScope.createChild();
								invokeScope.writeTo = this.boundScope.object;
								invokeScope.thiz = this.thiz || /* thiz ||*/this.boundScope.thiz;
							} else {
								invokeScope = scope.top.createChild();
								invokeScope.thiz = this.thiz || thiz;
							}

							if (this.func.strict === true) invokeScope.strict = true;

							obj = this.scope.object;

							if (this.func.upvars) {
								for (n in this.func.upvars) {
									//TODO: There should be a method that does this.
									invokeScope.object.rawSetProperty(n, obj.properties[n]);
								}
							}

							//Do Var Hoisting
							if (this.func.vars) {
								for (v in this.func.vars) {
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
								for (fn in this.func.funcs) {
									_n = this.func.funcs[fn];

									invokeScope.add(_n.id.name, Value.undef);
								}
							}

							argn = Math.max(args.length, this.func.params.length);
							argvars = new Array(argn);
							argsObj = new ObjectValue(scope.realm);

							argsObj.clazz = 'Arguments';

							i = 0;

						case 13:
							if (!(i < argn)) {
								_context2.next = 26;
								break;
							}

							vv = Value.undef;

							if (i < args.length) vv = args[i];

							_v = new PropertyDescriptor(vv);

							argvars[i] = _v;

							if (!invokeScope.strict) {
								_context2.next = 22;
								break;
							}

							return _context2.delegateYield(argsObj.set(i, vv), 't0', 20);

						case 20:
							_context2.next = 23;
							break;

						case 22:
							argsObj.rawSetProperty(i, _v);

						case 23:
							++i;
							_context2.next = 13;
							break;

						case 26:
							if (invokeScope.strict) {
								_context2.next = 31;
								break;
							}

							calleeProp = new PropertyDescriptor(this.fromNative(args.length));

							calleeProp.enumerable = false;
							argsObj.rawSetProperty('callee', calleeProp);
							return _context2.delegateYield(argsObj.set('callee', this), 't1', 31);

						case 31:
							lengthProp = new PropertyDescriptor(this.fromNative(args.length));

							lengthProp.enumerable = false;
							argsObj.rawSetProperty('length', lengthProp);

							invokeScope.add('arguments', argsObj);

							for (_i = 0; _i < this.func.params.length; ++_i) {
								if (this.func.params[_i].type == 'RestElement') {
									name = this.func.params[_i].argument.name;
									rest = args.slice(_i);

									invokeScope.add(name, ArrayValue.make(rest, scope.realm));
								} else {
									p = this.func.params[_i];

									if (p.type == "Identifier") p = { id: p };
									_name = p.id.name;


									if (scope.strict) {
										//Scope is strict, so we make a copy for the args variable
										invokeScope.add(_name, _i < args.length ? args[_i] : Value.undef);
									} else {
										//Scope isnt strict, magic happens.
										invokeScope.object.rawSetProperty(_name, argvars[_i]);
									}
								}
							}
							opts = { returnLastValue: this.returnLastValue, creator: this };

							if (extra && extra.evaluator && extra.evaluator.debug) {
								opts['profileName'] = extra.callNode.callee.srcName;
							}
							if (extra && extra.callee) {
								opts.callee = extra.callee;
							}
							if (this.func.nonUserCode) {
								opts.yieldPower = -1;
							}

							_context2.next = 42;
							return EvaluatorInstruction.branch('function', this.func.body, invokeScope, opts);

						case 42:
							result = _context2.sent;
							return _context2.abrupt('return', result);

						case 44:
						case 'end':
							return _context2.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			if (this.func && this.func.id) return '[Function ' + this.func.id.name + ']';
			return '[Function]';
		}
	}, {
		key: 'truthy',
		get: function get() {
			return true;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'function';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'object';
		}
	}]);
	return ClosureValue;
}(ObjectValue);

ClosureValue.prototype.clazz = 'Function';

module.exports = ClosureValue;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(118);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var ObjectValue = __webpack_require__(180);
var Value = __webpack_require__(153);
var GenDash = __webpack_require__(176);
var NumberValue = void 0;

var ArrayValue = function (_ObjectValue) {
	(0, _inherits3.default)(ArrayValue, _ObjectValue);

	function ArrayValue(realm) {
		(0, _classCallCheck3.default)(this, ArrayValue);
		return (0, _possibleConstructorReturn3.default)(this, (ArrayValue.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue)).call(this, realm, realm.ArrayPrototype));
	}

	(0, _createClass3.default)(ArrayValue, [{
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.delegateYield((0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'get', this).call(this, name, realm), 't0', 1);

						case 1:
							return _context.abrupt('return', _context.t0);

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'adjustLength',
		value: function adjustLength(name, value) {
			if (name == 'length' && this.properties.length) {
				//TODO: 15.4.5.2 specifies more complex behavior here.
				var target = GenDash.syncGenHelper(value.toIntNative());
				var length = this.getLengthSync();
				if (target < length) {
					for (var i = length - 1; i >= target; --i) {
						delete this.properties[i];
					}
				}
			}

			if (!isNaN(parseInt(name))) {
				var _length = this.getLengthSync();
				if (name >= _length) {
					this.properties.length.value = Value.fromNative(name + 1);
				}
			}
		}
	}, {
		key: 'getLengthSync',
		value: function getLengthSync() {
			return this.properties.length.value.native;
		}
	}, {
		key: 'set',
		value: function set(name, v) {
			this.adjustLength(name, v);
			return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'set', this).call(this, name, v);
		}
	}, {
		key: 'setImmediate',
		value: function setImmediate(name, v) {
			this.adjustLength(name, v);
			return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'setImmediate', this).call(this, name, v);
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			var out = new Array(this.getLengthSync());
			for (var _iterator = (0, _keys2.default)(this.properties), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var i = _ref;

				if (i === 'length') continue;
				var po = this.properties[i];
				if (po && po.value) {
					if (!po.direct) {
						(0, _defineProperty2.default)(out, i, {
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
	}, {
		key: 'toJS',
		value: function toJS() {
			var out = new Array(this.getLengthSync());
			for (var _iterator2 = (0, _keys2.default)(this.properties), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var i = _ref2;

				if (i === 'length') continue;
				var po = this.properties[i];
				out[i] = po.value.toJS();
			}
			return out;
		}
	}, {
		key: 'debugString',
		get: function get() {
			if (!this.properties.length) return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'debugString', this);
			var length = this.properties.length.value.native;

			var loop = Math.min(length, 20);
			var r = new Array(loop);
			for (var i = 0; i < loop; ++i) {
				var po = this.properties[i];
				if (po && po.value) r[i] = po.value.debugString;else r[i] = '';
			}
			return '[' + r.join(', ') + (loop < length ? '...' : '') + ']';
		}
	}], [{
		key: 'make',
		value: function make(vals, realm) {

			var av = new ArrayValue(realm);

			av.setImmediate('length', Value.fromNative(0));
			av.properties.length.enumerable = false;

			for (var i = 0; i < vals.length; ++i) {
				var v = vals[i];
				if (!(v instanceof Value)) v = realm.fromNative(v);
				av.setImmediate(i, v);
			}
			return av;
		}
	}]);
	return ArrayValue;
}(ObjectValue);

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = __webpack_require__(186);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EvaluatorInstruction = function () {
	(0, _createClass3.default)(EvaluatorInstruction, null, [{
		key: 'branch',
		value: function branch(kind, ast, scope, extra) {
			var ei = new EvaluatorInstruction('branch');
			ei.kind = kind;
			ei.ast = ast;
			ei.scope = scope;
			ei.extra = extra;
			return ei;
		}
	}]);

	function EvaluatorInstruction(type) {
		(0, _classCallCheck3.default)(this, EvaluatorInstruction);

		this.type = type;
	}

	(0, _createClass3.default)(EvaluatorInstruction, [{
		key: 'mark',
		value: function mark(o) {
			for (var k in o) {
				this[k] = o[k];
			}return this;
		}
	}]);
	return EvaluatorInstruction;
}();

EvaluatorInstruction.stepMinor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepMajor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepStatement = new EvaluatorInstruction('step');
EvaluatorInstruction.waitForFramePop = new EvaluatorInstruction('waitForFramePop');
EvaluatorInstruction.framePushed = new EvaluatorInstruction('framePushed');
EvaluatorInstruction.getEvaluator = new EvaluatorInstruction('getEvaluator');
EvaluatorInstruction.eventLoopBodyStart = new EvaluatorInstruction('event').mark({ event: 'loopBodyStart' });
module.exports = EvaluatorInstruction;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = __webpack_require__(129);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(188);
var Value = __webpack_require__(153);

function defer() {
	var resolve, reject;
	var promise = new _promise2.default(function (a, b) {
		resolve = a;
		reject = b;
	});
	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

var FutureValue = function (_Value) {
	(0, _inherits3.default)(FutureValue, _Value);

	function FutureValue(realm) {
		(0, _classCallCheck3.default)(this, FutureValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (FutureValue.__proto__ || (0, _getPrototypeOf2.default)(FutureValue)).call(this, realm));

		_this.resolved = false;
		_this.successful = undefined;
		_this.value = undefined;
		_this.defered = defer();
		return _this;
	}

	/**
  * Creates a new future value wraping the promise p.
  * @param {Promise} promise
  */


	(0, _createClass3.default)(FutureValue, [{
		key: 'resolve',
		value: function resolve(value) {
			this.value = value;
			this.resolved = true;
			this.successful = true;
			this.defered.resolve(value);
		}
	}, {
		key: 'reject',
		value: function reject(value) {
			this.value = value;
			this.resolved = true;
			this.successful = false;
			this.defered.resolve(value);
		}
	}, {
		key: 'then',
		value: function then() {
			var p = this.defered.promise;
			return p.then.apply(p, arguments);
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'internal:future';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return '[Future]';
		}
	}], [{
		key: 'make',
		value: function make(promise) {
			var fv = new FutureValue(null);
			promise.then(function (resolved) {
				fv.resolve(Value.fromNative(resolved));
			}, function (caught) {
				fv.reject(Value.fromNative(caught));
			});
			return fv;
		}
	}]);
	return FutureValue;
}(Value);

module.exports = FutureValue;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var ObjectValue = __webpack_require__(180);
var Value = __webpack_require__(153);

var RegExpValue = function (_ObjectValue) {
	(0, _inherits3.default)(RegExpValue, _ObjectValue);

	function RegExpValue(realm) {
		(0, _classCallCheck3.default)(this, RegExpValue);
		return (0, _possibleConstructorReturn3.default)(this, (RegExpValue.__proto__ || (0, _getPrototypeOf2.default)(RegExpValue)).call(this, realm, realm.RegExpPrototype));
	}

	(0, _createClass3.default)(RegExpValue, [{
		key: 'toNative',
		value: function toNative() {
			return this.regexp;
		}
	}, {
		key: 'debugString',
		get: function get() {
			return this.regexp.toString();
		}
	}], [{
		key: 'make',
		value: function make(regexp, realm) {

			var av = new RegExpValue(realm);
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
	}]);
	return RegExpValue;
}(ObjectValue);

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var ObjectValue = __webpack_require__(180);
var Value = __webpack_require__(153);
var EvaluatorInstruction = __webpack_require__(193);

var ErrorInstance = function (_ObjectValue) {
	(0, _inherits3.default)(ErrorInstance, _ObjectValue);

	function ErrorInstance() {
		(0, _classCallCheck3.default)(this, ErrorInstance);
		return (0, _possibleConstructorReturn3.default)(this, (ErrorInstance.__proto__ || (0, _getPrototypeOf2.default)(ErrorInstance)).apply(this, arguments));
	}

	(0, _createClass3.default)(ErrorInstance, [{
		key: 'createNativeAnalog',
		value: function createNativeAnalog() {
			if (!this.native) {
				var stack = void 0;
				var NativeClass = this.proto.nativeClass || Error;
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

				var frames = stack ? stack.split(/\n/) : [];
				if (stack.length > 1) {
					var header = frames.shift();
					while (/at (ErrorInstance.createNativeAnalog|ErrorObject.make|Function.makeTypeError)/.test(frames[0])) {
						frames.shift();
					}
					this.native.stack = header + '\n' + frames.join('\n');
				}
				for (var k in this.extra) {
					this.native[k] = this.extra[k];
				}
			}
			return this.native;
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			var out = this.createNativeAnalog();
			var msg = this.properties['message'].value;
			if (msg) out.message = msg.toNative();

			if (this.properties['stack']) {
				msg.stack = this.properties['stack'].value.native;
			}

			return out;
		}
	}, {
		key: 'addExtra',
		value: /*#__PURE__*/_regenerator2.default.mark(function addExtra(extra) {
			var evaluator, scope, ast, list, _k, v, k;

			return _regenerator2.default.wrap(function addExtra$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (this.realm.options.extraErrorInfo) {
								_context.next = 2;
								break;
							}

							return _context.abrupt('return');

						case 2:
							_context.next = 4;
							return EvaluatorInstruction.getEvaluator;

						case 4:
							evaluator = _context.sent;

							if (!evaluator) {
								_context.next = 21;
								break;
							}

							scope = evaluator.topFrame.scope;
							ast = extra.ast = evaluator.topFrame.ast;

							extra.scope = scope;
							//TODO: Sometiems scope is undefined, figure out why.
							if (extra.ast.loc) {
								extra.line = extra.ast.loc.start.line;
							}

							_context.t0 = extra.code;
							_context.next = _context.t0 === 'UndefinedVariable' ? 13 : _context.t0 === 'SmartAccessDenied' ? 13 : _context.t0 === 'CallNonFunction' ? 15 : _context.t0 === 'IndexEmpty' ? 20 : 21;
							break;

						case 13:
							if (scope) extra.candidates = scope.getVariableNames();
							return _context.abrupt('break', 21);

						case 15:
							list = void 0;

							if (extra.base && extra.base.getPropertyValueMap) {
								list = extra.base.getPropertyValueMap();
							} else {
								list = scope.object.getPropertyValueMap();
							}

							extra.candidates = [];
							for (_k in list) {
								v = list[_k];

								if (v && v.isCallable) {
									extra.candidates.push(_k);
								}
							}
							return _context.abrupt('break', 21);

						case 20:
							return _context.abrupt('break', 21);

						case 21:
							if (this.native) {
								for (k in extra) {
									if (['ast', 'scope', 'candidates', 'targetAst'].indexOf(k) !== -1) {
										(0, _defineProperty2.default)(this.native, k, {
											value: extra[k],
											enumerable: false
										});
									} else {
										this.native[k] = extra[k];
									}
								}
							}
							this.extra = extra;

						case 23:
						case 'end':
							return _context.stop();
					}
				}
			}, addExtra, this);
		})
	}]);
	return ErrorInstance;
}(ObjectValue);

module.exports = ErrorInstance;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(evaluateArrayExpression),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(evaluateAssignmentExpression),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(evaluateBinaryExpression),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(evaluateBlockStatement),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(evaluateBreakStatement),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(evaluateCallExpression),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(doCall),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(addMethodFnToClass),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(evaluateClassExpression),
    _marked10 = /*#__PURE__*/_regenerator2.default.mark(evaluateClassDeclaration),
    _marked11 = /*#__PURE__*/_regenerator2.default.mark(evaluateConditionalExpression),
    _marked12 = /*#__PURE__*/_regenerator2.default.mark(evaluateContinueStatement),
    _marked13 = /*#__PURE__*/_regenerator2.default.mark(evaluateDoWhileStatement),
    _marked14 = /*#__PURE__*/_regenerator2.default.mark(evaluateEmptyStatement),
    _marked15 = /*#__PURE__*/_regenerator2.default.mark(evaluateExpressionStatement),
    _marked16 = /*#__PURE__*/_regenerator2.default.mark(evaluateIdentifier),
    _marked17 = /*#__PURE__*/_regenerator2.default.mark(evaluateIfStatement),
    _marked18 = /*#__PURE__*/_regenerator2.default.mark(evaluateImportDeclaration),
    _marked19 = /*#__PURE__*/_regenerator2.default.mark(genForLoop),
    _marked20 = /*#__PURE__*/_regenerator2.default.mark(evaluateForStatement),
    _marked21 = /*#__PURE__*/_regenerator2.default.mark(evaluateForInStatement),
    _marked22 = /*#__PURE__*/_regenerator2.default.mark(evaluateForOfStatement),
    _marked23 = /*#__PURE__*/_regenerator2.default.mark(evaluateFunctionDeclaration),
    _marked24 = /*#__PURE__*/_regenerator2.default.mark(evaluateFunctionExpression),
    _marked25 = /*#__PURE__*/_regenerator2.default.mark(evaluateLabeledStatement),
    _marked26 = /*#__PURE__*/_regenerator2.default.mark(evaluateLiteral),
    _marked27 = /*#__PURE__*/_regenerator2.default.mark(evaluateLogicalExpression),
    _marked28 = /*#__PURE__*/_regenerator2.default.mark(evaluateMemberExpression),
    _marked29 = /*#__PURE__*/_regenerator2.default.mark(evaluateMetaProperty),
    _marked30 = /*#__PURE__*/_regenerator2.default.mark(evaluateObjectExpression),
    _marked31 = /*#__PURE__*/_regenerator2.default.mark(evaluateProgram),
    _marked32 = /*#__PURE__*/_regenerator2.default.mark(evaluateReturnStatement),
    _marked33 = /*#__PURE__*/_regenerator2.default.mark(evaluateSequenceExpression),
    _marked34 = /*#__PURE__*/_regenerator2.default.mark(evaluateSuperExpression),
    _marked35 = /*#__PURE__*/_regenerator2.default.mark(evaluateSwitchStatement),
    _marked36 = /*#__PURE__*/_regenerator2.default.mark(evaluateTaggedTemplateExpression),
    _marked37 = /*#__PURE__*/_regenerator2.default.mark(evaluateTemplateLiteral),
    _marked38 = /*#__PURE__*/_regenerator2.default.mark(evaluateThisExpression),
    _marked39 = /*#__PURE__*/_regenerator2.default.mark(evaluateThrowStatement),
    _marked40 = /*#__PURE__*/_regenerator2.default.mark(evaluateTryStatement),
    _marked41 = /*#__PURE__*/_regenerator2.default.mark(evaluateUpdateExpression),
    _marked42 = /*#__PURE__*/_regenerator2.default.mark(evaluateUnaryExpression),
    _marked43 = /*#__PURE__*/_regenerator2.default.mark(evaluateVariableDeclaration),
    _marked44 = /*#__PURE__*/_regenerator2.default.mark(genWhileLoop),
    _marked45 = /*#__PURE__*/_regenerator2.default.mark(evaluateWhileStatement),
    _marked46 = /*#__PURE__*/_regenerator2.default.mark(evaluateWithStatement);

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
var ClosureValue = __webpack_require__(191);
var ObjectValue = __webpack_require__(180);
var FutureValue = __webpack_require__(194);
var RegExpValue = __webpack_require__(195);
var PropertyDescriptor = __webpack_require__(181);
var ErrorValue = __webpack_require__(196);
var ArrayValue = __webpack_require__(192);
var EvaluatorInstruction = __webpack_require__(193);

function evaluateArrayExpression(e, n, s) {
	var result, i;
	return _regenerator2.default.wrap(function evaluateArrayExpression$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					//let result = new ObjectValue();
					result = new Array(n.elements.length);
					i = 0;

				case 2:
					if (!(i < n.elements.length)) {
						_context.next = 9;
						break;
					}

					if (!n.elements[i]) {
						_context.next = 6;
						break;
					}

					return _context.delegateYield(e.branch(n.elements[i], s), 't0', 5);

				case 5:
					result[i] = _context.t0;

				case 6:
					++i;
					_context.next = 2;
					break;

				case 9:
					if (!(e.yieldPower >= 3)) {
						_context.next = 12;
						break;
					}

					_context.next = 12;
					return EvaluatorInstruction.stepMinor;

				case 12:
					return _context.abrupt('return', ArrayValue.make(result, e.realm));

				case 13:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function evaluateAssignmentExpression(e, n, s) {
	var realm, ref, argument, value, cur;
	return _regenerator2.default.wrap(function evaluateAssignmentExpression$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					//TODO: Account for not-strict mode
					realm = s.realm;
					return _context2.delegateYield(e.resolveRef(n.left, s, n.operator === '='), 't0', 2);

				case 2:
					ref = _context2.t0;

					if (!(!ref && s.strict)) {
						_context2.next = 5;
						break;
					}

					return _context2.abrupt('return', CompletionRecord.makeReferenceError(s.realm, 'Invalid refrence in assignment.'));

				case 5:
					return _context2.delegateYield(e.branch(n.right, s), 't1', 6);

				case 6:
					argument = _context2.t1;
					value = void 0;
					cur = void 0;

					if (!(e.yieldPower >= 3)) {
						_context2.next = 12;
						break;
					}

					_context2.next = 12;
					return EvaluatorInstruction.stepMinor;

				case 12:
					_context2.t2 = n.operator;
					_context2.next = _context2.t2 === '=' ? 15 : _context2.t2 === '+=' ? 17 : _context2.t2 === '-=' ? 22 : _context2.t2 === '*=' ? 27 : _context2.t2 === '/=' ? 32 : _context2.t2 === '%=' ? 37 : _context2.t2 === '<<=' ? 42 : _context2.t2 === '>>=' ? 47 : _context2.t2 === '>>>=' ? 52 : _context2.t2 === '|=' ? 57 : _context2.t2 === '&=' ? 62 : _context2.t2 === '^=' ? 67 : _context2.t2 === '**=' ? 72 : 77;
					break;

				case 15:
					value = argument;
					return _context2.abrupt('break', 78);

				case 17:
					return _context2.delegateYield(ref.getValue(), 't3', 18);

				case 18:
					cur = _context2.t3;
					return _context2.delegateYield(cur.add(argument, realm), 't4', 20);

				case 20:
					value = _context2.t4;
					return _context2.abrupt('break', 78);

				case 22:
					return _context2.delegateYield(ref.getValue(), 't5', 23);

				case 23:
					cur = _context2.t5;
					return _context2.delegateYield(cur.subtract(argument, realm), 't6', 25);

				case 25:
					value = _context2.t6;
					return _context2.abrupt('break', 78);

				case 27:
					return _context2.delegateYield(ref.getValue(), 't7', 28);

				case 28:
					cur = _context2.t7;
					return _context2.delegateYield(cur.multiply(argument, realm), 't8', 30);

				case 30:
					value = _context2.t8;
					return _context2.abrupt('break', 78);

				case 32:
					return _context2.delegateYield(ref.getValue(), 't9', 33);

				case 33:
					cur = _context2.t9;
					return _context2.delegateYield(cur.divide(argument, realm), 't10', 35);

				case 35:
					value = _context2.t10;
					return _context2.abrupt('break', 78);

				case 37:
					return _context2.delegateYield(ref.getValue(), 't11', 38);

				case 38:
					cur = _context2.t11;
					return _context2.delegateYield(cur.mod(argument, realm), 't12', 40);

				case 40:
					value = _context2.t12;
					return _context2.abrupt('break', 78);

				case 42:
					return _context2.delegateYield(ref.getValue(), 't13', 43);

				case 43:
					cur = _context2.t13;
					return _context2.delegateYield(cur.shiftLeft(argument, realm), 't14', 45);

				case 45:
					value = _context2.t14;
					return _context2.abrupt('break', 78);

				case 47:
					return _context2.delegateYield(ref.getValue(), 't15', 48);

				case 48:
					cur = _context2.t15;
					return _context2.delegateYield(cur.shiftRight(argument, realm), 't16', 50);

				case 50:
					value = _context2.t16;
					return _context2.abrupt('break', 78);

				case 52:
					return _context2.delegateYield(ref.getValue(), 't17', 53);

				case 53:
					cur = _context2.t17;
					return _context2.delegateYield(cur.shiftRightZF(argument, realm), 't18', 55);

				case 55:
					value = _context2.t18;
					return _context2.abrupt('break', 78);

				case 57:
					return _context2.delegateYield(ref.getValue(), 't19', 58);

				case 58:
					cur = _context2.t19;
					return _context2.delegateYield(cur.bitOr(argument, realm), 't20', 60);

				case 60:
					value = _context2.t20;
					return _context2.abrupt('break', 78);

				case 62:
					return _context2.delegateYield(ref.getValue(), 't21', 63);

				case 63:
					cur = _context2.t21;
					return _context2.delegateYield(cur.bitAnd(argument, realm), 't22', 65);

				case 65:
					value = _context2.t22;
					return _context2.abrupt('break', 78);

				case 67:
					return _context2.delegateYield(ref.getValue(), 't23', 68);

				case 68:
					cur = _context2.t23;
					return _context2.delegateYield(cur.bitXor(argument, realm), 't24', 70);

				case 70:
					value = _context2.t24;
					return _context2.abrupt('break', 78);

				case 72:
					return _context2.delegateYield(ref.getValue(), 't25', 73);

				case 73:
					cur = _context2.t25;
					return _context2.delegateYield(cur.pow(argument, realm), 't26', 75);

				case 75:
					value = _context2.t26;
					return _context2.abrupt('break', 78);

				case 77:
					throw new Error('Unknown assignment operator: ' + n.operator);

				case 78:
					if (!ref) {
						_context2.next = 82;
						break;
					}

					return _context2.delegateYield(ref.setValue(value, s), 't27', 80);

				case 80:
					_context2.next = 83;
					break;

				case 82:
					return _context2.delegateYield(s.put(n.left.name, value, s), 't28', 83);

				case 83:
					return _context2.abrupt('return', value);

				case 84:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function evaluateBinaryExpression(e, n, s) {
	var left, right;
	return _regenerator2.default.wrap(function evaluateBinaryExpression$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					if (!(n.operator == '&&' || n.operator == '||')) {
						_context3.next = 3;
						break;
					}

					return _context3.delegateYield(evaluateLogicalExpression(e, n, s), 't0', 2);

				case 2:
					return _context3.abrupt('return', _context3.t0);

				case 3:
					return _context3.delegateYield(e.branch(n.left, s), 't1', 4);

				case 4:
					left = _context3.t1;
					return _context3.delegateYield(e.branch(n.right, s), 't2', 6);

				case 6:
					right = _context3.t2;

					if (!(e.yieldPower >= 4)) {
						_context3.next = 10;
						break;
					}

					_context3.next = 10;
					return EvaluatorInstruction.stepMinor;

				case 10:
					return _context3.delegateYield(e.doBinaryEvaluation(n.operator, left, right, s), 't3', 11);

				case 11:
					return _context3.abrupt('return', _context3.t3);

				case 12:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

function evaluateBlockStatement(e, n, s) {
	var result, ss, _iterator, _isArray, _i, _ref, statement, _iterator2, _isArray2, _i2, _ref2, _statement;

	return _regenerator2.default.wrap(function evaluateBlockStatement$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					result = Value.undef;
					ss = s.createBlockChild();
					_iterator = n.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

				case 3:
					if (!_isArray) {
						_context4.next = 9;
						break;
					}

					if (!(_i >= _iterator.length)) {
						_context4.next = 6;
						break;
					}

					return _context4.abrupt('break', 20);

				case 6:
					_ref = _iterator[_i++];
					_context4.next = 13;
					break;

				case 9:
					_i = _iterator.next();

					if (!_i.done) {
						_context4.next = 12;
						break;
					}

					return _context4.abrupt('break', 20);

				case 12:
					_ref = _i.value;

				case 13:
					statement = _ref;

					if (!(statement.type != "FunctionDeclaration")) {
						_context4.next = 16;
						break;
					}

					return _context4.abrupt('continue', 18);

				case 16:
					return _context4.delegateYield(e.branch(statement, ss), 't0', 17);

				case 17:
					result = _context4.t0;

				case 18:
					_context4.next = 3;
					break;

				case 20:
					_iterator2 = n.body, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

				case 21:
					if (!_isArray2) {
						_context4.next = 27;
						break;
					}

					if (!(_i2 >= _iterator2.length)) {
						_context4.next = 24;
						break;
					}

					return _context4.abrupt('break', 38);

				case 24:
					_ref2 = _iterator2[_i2++];
					_context4.next = 31;
					break;

				case 27:
					_i2 = _iterator2.next();

					if (!_i2.done) {
						_context4.next = 30;
						break;
					}

					return _context4.abrupt('break', 38);

				case 30:
					_ref2 = _i2.value;

				case 31:
					_statement = _ref2;

					if (!(_statement.type == "FunctionDeclaration")) {
						_context4.next = 34;
						break;
					}

					return _context4.abrupt('continue', 36);

				case 34:
					return _context4.delegateYield(e.branch(_statement, ss), 't1', 35);

				case 35:
					result = _context4.t1;

				case 36:
					_context4.next = 21;
					break;

				case 38:
					return _context4.abrupt('return', result);

				case 39:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

function evaluateBreakStatement(e, n, s) {
	var label;
	return _regenerator2.default.wrap(function evaluateBreakStatement$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					label = n.label ? n.label.name : undefined;

					if (!(e.yieldPower >= 1)) {
						_context5.next = 4;
						break;
					}

					_context5.next = 4;
					return EvaluatorInstruction.stepMinor;

				case 4:
					return _context5.abrupt('return', new CompletionRecord(CompletionRecord.BREAK, Value.undef, label));

				case 5:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this);
}

function evaluateCallExpression(e, n, s) {
	return _regenerator2.default.wrap(function evaluateCallExpression$(_context7) {
		while (1) {
			switch (_context7.prev = _context7.next) {
				case 0:
					return _context7.delegateYield(doCall(e, n, n.callee, s, /*#__PURE__*/_regenerator2.default.mark(function _callee() {
						var args, i;
						return _regenerator2.default.wrap(function _callee$(_context6) {
							while (1) {
								switch (_context6.prev = _context6.next) {
									case 0:
										args = new Array(n.arguments.length);
										i = 0;

									case 2:
										if (!(i < n.arguments.length)) {
											_context6.next = 8;
											break;
										}

										return _context6.delegateYield(e.branch(n.arguments[i], s), 't0', 4);

									case 4:
										args[i] = _context6.t0;

									case 5:
										++i;
										_context6.next = 2;
										break;

									case 8:
										return _context6.abrupt('return', args);

									case 9:
									case 'end':
										return _context6.stop();
								}
							}
						}, _callee, this);
					})), 't0', 1);

				case 1:
					return _context7.abrupt('return', _context7.t0);

				case 2:
				case 'end':
					return _context7.stop();
			}
		}
	}, _marked6, this);
}

function doCall(e, n, c, s, argProvider) {
	var thiz, callee, base, args, name, err, callResult, result;
	return _regenerator2.default.wrap(function doCall$(_context8) {
		while (1) {
			switch (_context8.prev = _context8.next) {
				case 0:
					thiz = s.strict ? Value.undef : s.global.thiz;
					callee = void 0, base = void 0;

					if (!(c.type == 'Super')) {
						_context8.next = 8;
						break;
					}

					return _context8.delegateYield(e.branch(c, s), 't0', 4);

				case 4:
					callee = _context8.t0;

					thiz = s.thiz;
					_context8.next = 22;
					break;

				case 8:
					if (!(c.type === 'MemberExpression')) {
						_context8.next = 20;
						break;
					}

					return _context8.delegateYield(e.branch(c.object, s), 't1', 10);

				case 10:
					thiz = base = _context8.t1;
					return _context8.delegateYield(e.partialMemberExpression(thiz, c, s), 't2', 12);

				case 12:
					callee = _context8.t2;

					if (c.object.type == "Super") thiz = s.thiz;

					if (!(callee instanceof CompletionRecord)) {
						_context8.next = 18;
						break;
					}

					if (!(callee.type == CompletionRecord.THROW)) {
						_context8.next = 17;
						break;
					}

					return _context8.abrupt('return', callee);

				case 17:
					callee = callee.value;

				case 18:
					_context8.next = 22;
					break;

				case 20:
					return _context8.delegateYield(e.branch(c, s), 't3', 21);

				case 21:
					callee = _context8.t3;

				case 22:
					if (!(n.type === 'NewExpression')) {
						_context8.next = 29;
						break;
					}

					return _context8.delegateYield(callee.makeThisForNew(s.realm), 't4', 24);

				case 24:
					thiz = _context8.t4;

					if (!(thiz instanceof CompletionRecord)) {
						_context8.next = 29;
						break;
					}

					if (!(thiz.type == CompletionRecord.THROW)) {
						_context8.next = 28;
						break;
					}

					return _context8.abrupt('return', thiz);

				case 28:
					thiz = thiz.value;

				case 29:
					if (!(typeof callee.rawCall === 'function')) {
						_context8.next = 32;
						break;
					}

					return _context8.delegateYield(callee.rawCall(n, e, s), 't5', 31);

				case 31:
					return _context8.abrupt('return', _context8.t5);

				case 32:
					return _context8.delegateYield(argProvider(), 't6', 33);

				case 33:
					args = _context8.t6;
					name = c.srcName || c.source() || callee.jsTypeName;

					if (!(e.yieldPower >= 1)) {
						_context8.next = 38;
						break;
					}

					_context8.next = 38;
					return EvaluatorInstruction.stepMajor;

				case 38:
					if (callee.isCallable) {
						_context8.next = 42;
						break;
					}

					err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
					return _context8.delegateYield(err.addExtra({
						code: 'CallNonFunction',
						target: callee,
						targetAst: c,
						targetName: name,
						base: base
					}), 't7', 41);

				case 41:
					return _context8.abrupt('return', err);

				case 42:

					if (e.debug) {
						e.incrCtr('fxInvocationCount', c.srcName);
					}

					callResult = callee.call(thiz, args, s, {
						asConstructor: n.type === 'NewExpression',
						callNode: n,
						evaluator: e,
						callee: callee
					});

					if (!(callResult instanceof CompletionRecord)) {
						_context8.next = 46;
						break;
					}

					return _context8.abrupt('return', callResult);

				case 46:
					if (!(typeof callResult.next !== 'function')) {
						_context8.next = 49;
						break;
					}

					console.log('Generator Failure', callResult);
					return _context8.abrupt('return', CompletionRecord.makeTypeError(e.realm, '' + name + ' didnt make a generator'));

				case 49:
					return _context8.delegateYield(callResult, 't8', 50);

				case 50:
					result = _context8.t8;

					if (!(n.type === 'NewExpression')) {
						_context8.next = 59;
						break;
					}

					if (!(result instanceof Value)) {
						_context8.next = 56;
						break;
					}

					if (!(result.specTypeName === 'undefined')) {
						_context8.next = 55;
						break;
					}

					return _context8.abrupt('return', thiz);

				case 55:
					return _context8.abrupt('return', result);

				case 56:
					return _context8.abrupt('return', thiz);

				case 59:
					return _context8.abrupt('return', result);

				case 60:
				case 'end':
					return _context8.stop();
			}
		}
	}, _marked7, this);
}

var classFeatures = {};
function addMethodFnToClass(fx, clazz, proto, e, m, s) {
	var ks, k, pd;
	return _regenerator2.default.wrap(function addMethodFnToClass$(_context9) {
		while (1) {
			switch (_context9.prev = _context9.next) {
				case 0:
					if (!(m.kind == 'constructor')) {
						_context9.next = 3;
						break;
					}

					_context9.next = 24;
					break;

				case 3:
					ks = void 0;

					fx.funcSourceAST = m;

					if (!m.computed) {
						_context9.next = 12;
						break;
					}

					return _context9.delegateYield(e.branch(m.key, s), 't0', 7);

				case 7:
					k = _context9.t0;
					return _context9.delegateYield(k.toStringNative(e.realm), 't1', 9);

				case 9:
					ks = _context9.t1;
					_context9.next = 13;
					break;

				case 12:
					ks = m.key.name;

				case 13:
					pd = void 0;


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
					_context9.t2 = m.kind;
					_context9.next = _context9.t2 === 'set' ? 18 : _context9.t2 === 'get' ? 20 : _context9.t2 === 'method' ? 22 : 24;
					break;

				case 18:
					pd.setter = fx;
					return _context9.abrupt('break', 24);

				case 20:
					pd.getter = fx;
					return _context9.abrupt('break', 24);

				case 22:
					pd.value = fx;
					return _context9.abrupt('break', 24);

				case 24:
					return _context9.abrupt('return', Value.undef);

				case 25:
				case 'end':
					return _context9.stop();
			}
		}
	}, _marked8, this);
}
classFeatures.MethodDefinition = /*#__PURE__*/_regenerator2.default.mark(function _callee2(clazz, proto, e, m, s) {
	return _regenerator2.default.wrap(function _callee2$(_context10) {
		while (1) {
			switch (_context10.prev = _context10.next) {
				case 0:
					_context10.t0 = addMethodFnToClass;
					return _context10.delegateYield(e.branch(m.value, s), 't1', 2);

				case 2:
					_context10.t2 = _context10.t1;
					_context10.t3 = clazz;
					_context10.t4 = proto;
					_context10.t5 = e;
					_context10.t6 = m;
					_context10.t7 = s;
					return _context10.delegateYield((0, _context10.t0)(_context10.t2, _context10.t3, _context10.t4, _context10.t5, _context10.t6, _context10.t7), 't8', 9);

				case 9:
				case 'end':
					return _context10.stop();
			}
		}
	}, _callee2, this);
});
classFeatures.ClassMethod = /*#__PURE__*/_regenerator2.default.mark(function _callee3(clazz, proto, e, m, s) {
	var fx;
	return _regenerator2.default.wrap(function _callee3$(_context11) {
		while (1) {
			switch (_context11.prev = _context11.next) {
				case 0:
					return _context11.delegateYield(evaluateFunctionExpression(e, m, s), 't0', 1);

				case 1:
					fx = _context11.t0;
					return _context11.delegateYield(addMethodFnToClass(fx, clazz, proto, e, {
						kind: m.kind,
						static: m.static,
						key: m.key
					}, s), 't1', 3);

				case 3:
					return _context11.abrupt('return', _context11.t1);

				case 4:
				case 'end':
					return _context11.stop();
			}
		}
	}, _callee3, this);
});
classFeatures.EmptyStatement = /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
	return _regenerator2.default.wrap(function _callee4$(_context12) {
		while (1) {
			switch (_context12.prev = _context12.next) {
				case 0:
					return _context12.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context12.stop();
			}
		}
	}, _callee4, this);
});

function evaluateClassExpression(e, n, s) {
	var clazz, _iterator3, _isArray3, _i3, _ref3, m, sc, proto, _iterator4, _isArray4, _i4, _ref4, _m;

	return _regenerator2.default.wrap(function evaluateClassExpression$(_context15) {
		while (1) {
			switch (_context15.prev = _context15.next) {
				case 0:
					clazz = undefined;
					_iterator3 = n.body.body, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

				case 2:
					if (!_isArray3) {
						_context15.next = 8;
						break;
					}

					if (!(_i3 >= _iterator3.length)) {
						_context15.next = 5;
						break;
					}

					return _context15.abrupt('break', 21);

				case 5:
					_ref3 = _iterator3[_i3++];
					_context15.next = 12;
					break;

				case 8:
					_i3 = _iterator3.next();

					if (!_i3.done) {
						_context15.next = 11;
						break;
					}

					return _context15.abrupt('break', 21);

				case 11:
					_ref3 = _i3.value;

				case 12:
					m = _ref3;

					if (!(m.type == "MethodDefinition" && m.kind == "constructor")) {
						_context15.next = 19;
						break;
					}

					return _context15.delegateYield(e.branch(m.value, s), 't0', 15);

				case 15:
					clazz = _context15.t0;

					clazz.superTarget = clazz;
					clazz.funcSourceAST = n;
					return _context15.abrupt('break', 21);

				case 19:
					_context15.next = 2;
					break;

				case 21:
					sc = void 0;

					if (!n.superClass) {
						_context15.next = 25;
						break;
					}

					return _context15.delegateYield(e.branch(n.superClass, s), 't1', 24);

				case 24:
					sc = _context15.t1;

				case 25:

					if (!clazz) {
						clazz = new ObjectValue(e.realm);
						if (sc) {
							clazz.call = /*#__PURE__*/_regenerator2.default.mark(function _callee5(thiz, args, scope, extra) {
								return _regenerator2.default.wrap(function _callee5$(_context13) {
									while (1) {
										switch (_context13.prev = _context13.next) {
											case 0:
												return _context13.delegateYield(sc.call(thiz, args, scope, extra), 't0', 1);

											case 1:
												return _context13.abrupt('return', Value.undef);

											case 2:
											case 'end':
												return _context13.stop();
										}
									}
								}, _callee5, this);
							});
						} else {
							clazz.call = /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
								return _regenerator2.default.wrap(function _callee6$(_context14) {
									while (1) {
										switch (_context14.prev = _context14.next) {
											case 0:
												return _context14.abrupt('return', Value.undef);

											case 1:
											case 'end':
												return _context14.stop();
										}
									}
								}, _callee6, this);
							});
						}
					}

					proto = new ObjectValue(e.realm);
					return _context15.delegateYield(clazz.set('prototype', proto), 't2', 28);

				case 28:
					return _context15.delegateYield(clazz.set('name', Value.fromNative(n.id.name)), 't3', 29);

				case 29:
					return _context15.delegateYield(proto.set('constructor', clazz), 't4', 30);

				case 30:

					if (sc) {
						clazz.setPrototype(sc);
						proto.setPrototype(sc.getPrototypeProperty());
						clazz.parentClassInstance = sc;
					}
					clazz.superTarget = clazz.getPrototype();

					s.add(n.id.name, clazz);

					if (!(e.yieldPower >= 3)) {
						_context15.next = 36;
						break;
					}

					_context15.next = 36;
					return EvaluatorInstruction.stepMinor;

				case 36:
					_iterator4 = n.body.body, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

				case 37:
					if (!_isArray4) {
						_context15.next = 43;
						break;
					}

					if (!(_i4 >= _iterator4.length)) {
						_context15.next = 40;
						break;
					}

					return _context15.abrupt('break', 53);

				case 40:
					_ref4 = _iterator4[_i4++];
					_context15.next = 47;
					break;

				case 43:
					_i4 = _iterator4.next();

					if (!_i4.done) {
						_context15.next = 46;
						break;
					}

					return _context15.abrupt('break', 53);

				case 46:
					_ref4 = _i4.value;

				case 47:
					_m = _ref4;

					if (module.exports.classFeatures[_m.type]) {
						_context15.next = 50;
						break;
					}

					throw new Error("Unsuported Class Feature " + _m.type);

				case 50:
					return _context15.delegateYield(module.exports.classFeatures[_m.type](clazz, proto, e, _m, s), 't5', 51);

				case 51:
					_context15.next = 37;
					break;

				case 53:
					return _context15.abrupt('return', clazz);

				case 54:
				case 'end':
					return _context15.stop();
			}
		}
	}, _marked9, this);
}

function evaluateClassDeclaration(e, n, s) {
	var clazz;
	return _regenerator2.default.wrap(function evaluateClassDeclaration$(_context16) {
		while (1) {
			switch (_context16.prev = _context16.next) {
				case 0:
					return _context16.delegateYield(evaluateClassExpression(e, n, s), 't0', 1);

				case 1:
					clazz = _context16.t0;
					return _context16.delegateYield(s.put(n.id.name, clazz), 't1', 3);

				case 3:
					return _context16.abrupt('return', clazz);

				case 4:
				case 'end':
					return _context16.stop();
			}
		}
	}, _marked10, this);
}

function evaluateConditionalExpression(e, n, s) {
	var test;
	return _regenerator2.default.wrap(function evaluateConditionalExpression$(_context17) {
		while (1) {
			switch (_context17.prev = _context17.next) {
				case 0:
					return _context17.delegateYield(e.branch(n.test, s), 't0', 1);

				case 1:
					test = _context17.t0;

					if (!(e.yieldPower >= 4)) {
						_context17.next = 5;
						break;
					}

					_context17.next = 5;
					return EvaluatorInstruction.stepMinor;

				case 5:
					if (!test.truthy) {
						_context17.next = 10;
						break;
					}

					return _context17.delegateYield(e.branch(n.consequent, s), 't1', 7);

				case 7:
					return _context17.abrupt('return', _context17.t1);

				case 10:
					if (!n.alternate) {
						_context17.next = 13;
						break;
					}

					return _context17.delegateYield(e.branch(n.alternate, s), 't2', 12);

				case 12:
					return _context17.abrupt('return', _context17.t2);

				case 13:
					return _context17.abrupt('return', Value.undef);

				case 14:
				case 'end':
					return _context17.stop();
			}
		}
	}, _marked11, this);
}

function evaluateContinueStatement(e, n, s) {
	var label, val;
	return _regenerator2.default.wrap(function evaluateContinueStatement$(_context18) {
		while (1) {
			switch (_context18.prev = _context18.next) {
				case 0:
					label = n.label ? n.label.name : undefined;
					val = new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);

					if (!(e.yieldPower >= 1)) {
						_context18.next = 5;
						break;
					}

					_context18.next = 5;
					return EvaluatorInstruction.stepMinor;

				case 5:
					return _context18.abrupt('return', val);

				case 6:
				case 'end':
					return _context18.stop();
			}
		}
	}, _marked12, this);
}

function evaluateDoWhileStatement(e, n, s) {
	var last, that, gen, finished;
	return _regenerator2.default.wrap(function evaluateDoWhileStatement$(_context20) {
		while (1) {
			switch (_context20.prev = _context20.next) {
				case 0:
					last = Value.undef;
					that = e;
					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						return _regenerator2.default.wrap(function gen$(_context19) {
							while (1) {
								switch (_context19.prev = _context19.next) {
									case 0:
										_context19.next = 2;
										return that.branchFrame('continue', n.body, s, { label: n.label });

									case 2:
										last = _context19.sent;

									case 3:
										return _context19.delegateYield(that.branch(n.test, s), 't0', 4);

									case 4:
										if (_context19.t0.truthy) {
											_context19.next = 0;
											break;
										}

									case 5:
									case 'end':
										return _context19.stop();
								}
							}
						}, gen, this);
					});

					if (!(e.yieldPower > 0)) {
						_context20.next = 6;
						break;
					}

					_context20.next = 6;
					return EvaluatorInstruction.stepMinor;

				case 6:
					e.pushFrame({ generator: gen(), type: 'loop', label: n.label, ast: n });

					_context20.next = 9;
					return EvaluatorInstruction.waitForFramePop;

				case 9:
					finished = _context20.sent;
					return _context20.abrupt('return', Value.undef);

				case 11:
				case 'end':
					return _context20.stop();
			}
		}
	}, _marked13, this);
}

function evaluateEmptyStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateEmptyStatement$(_context21) {
		while (1) {
			switch (_context21.prev = _context21.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context21.next = 3;
						break;
					}

					_context21.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context21.abrupt('return', Value.undef);

				case 4:
				case 'end':
					return _context21.stop();
			}
		}
	}, _marked14, this);
}

function evaluateExpressionStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateExpressionStatement$(_context22) {
		while (1) {
			switch (_context22.prev = _context22.next) {
				case 0:
					if (!(e.yieldPower > 4)) {
						_context22.next = 3;
						break;
					}

					_context22.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context22.delegateYield(e.branch(n.expression, s), 't0', 4);

				case 4:
					return _context22.abrupt('return', _context22.t0);

				case 5:
				case 'end':
					return _context22.stop();
			}
		}
	}, _marked15, this);
}

function evaluateIdentifier(e, n, s) {
	var err;
	return _regenerator2.default.wrap(function evaluateIdentifier$(_context23) {
		while (1) {
			switch (_context23.prev = _context23.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context23.next = 3;
						break;
					}

					_context23.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					if (!(n.name === 'undefined')) {
						_context23.next = 5;
						break;
					}

					return _context23.abrupt('return', Value.undef);

				case 5:
					if (s.has(n.name)) {
						_context23.next = 13;
						break;
					}

					if (true) {
						_context23.next = 8;
						break;
					}

					return _context23.abrupt('return', Value.undef);

				case 8:
					err = CompletionRecord.makeReferenceError(e.realm, n.name + ' is not defined');
					return _context23.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict }), 't0', 10);

				case 10:
					_context23.next = 12;
					return err;

				case 12:
					return _context23.abrupt('return', _context23.sent);

				case 13:
					return _context23.abrupt('return', s.get(n.name));

				case 14:
				case 'end':
					return _context23.stop();
			}
		}
	}, _marked16, this);
}

function evaluateIfStatement(e, n, s) {
	var test;
	return _regenerator2.default.wrap(function evaluateIfStatement$(_context24) {
		while (1) {
			switch (_context24.prev = _context24.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context24.next = 3;
						break;
					}

					_context24.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					return _context24.delegateYield(e.branch(n.test, s), 't0', 4);

				case 4:
					test = _context24.t0;

					if (!test.truthy) {
						_context24.next = 10;
						break;
					}

					return _context24.delegateYield(e.branch(n.consequent, s), 't1', 7);

				case 7:
					return _context24.abrupt('return', _context24.t1);

				case 10:
					if (!n.alternate) {
						_context24.next = 13;
						break;
					}

					return _context24.delegateYield(e.branch(n.alternate, s), 't2', 12);

				case 12:
					return _context24.abrupt('return', _context24.t2);

				case 13:
					return _context24.abrupt('return', Value.undef);

				case 14:
				case 'end':
					return _context24.stop();
			}
		}
	}, _marked17, this);
}

function evaluateImportDeclaration(e, n, s) {
	return _regenerator2.default.wrap(function evaluateImportDeclaration$(_context25) {
		while (1) {
			switch (_context25.prev = _context25.next) {
				case 0:
					return _context25.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context25.stop();
			}
		}
	}, _marked18, this);
}

function genForLoop(e, n, s) {
	var test, createPerIterationEnvironment, is, last;
	return _regenerator2.default.wrap(function genForLoop$(_context26) {
		while (1) {
			switch (_context26.prev = _context26.next) {
				case 0:
					test = Value.true;
					createPerIterationEnvironment = n.init && n.init.kind == 'let' ? function (p) {
						var is = s.createChild();
						for (var _iterator5 = n.init.declarations, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
							var _ref5;

							if (_isArray5) {
								if (_i5 >= _iterator5.length) break;
								_ref5 = _iterator5[_i5++];
							} else {
								_i5 = _iterator5.next();
								if (_i5.done) break;
								_ref5 = _i5.value;
							}

							var dec = _ref5;

							is.addBlock(dec.id.name, p.get(dec.id.name));
						}
						return is;
					} : function (p) {
						return p;
					};
					is = createPerIterationEnvironment(s);

					if (!n.test) {
						_context26.next = 6;
						break;
					}

					return _context26.delegateYield(e.branch(n.test, s), 't0', 5);

				case 5:
					test = _context26.t0;

				case 6:
					last = Value.undef;

				case 7:
					if (!test.truthy) {
						_context26.next = 23;
						break;
					}

					e.topFrame.ast = n;

					if (!(e.yieldPower > 0)) {
						_context26.next = 12;
						break;
					}

					_context26.next = 12;
					return EvaluatorInstruction.eventLoopBodyStart;

				case 12:
					_context26.next = 14;
					return e.branchFrame('continue', n.body, is, { label: n.label });

				case 14:
					last = _context26.sent;

					is = createPerIterationEnvironment(is);

					if (!n.update) {
						_context26.next = 18;
						break;
					}

					return _context26.delegateYield(e.branch(n.update, is), 't1', 18);

				case 18:
					if (!n.test) {
						_context26.next = 21;
						break;
					}

					return _context26.delegateYield(e.branch(n.test, is), 't2', 20);

				case 20:
					test = _context26.t2;

				case 21:
					_context26.next = 7;
					break;

				case 23:
				case 'end':
					return _context26.stop();
			}
		}
	}, _marked19, this);
};

function evaluateForStatement(e, n, s) {
	var finished;
	return _regenerator2.default.wrap(function evaluateForStatement$(_context27) {
		while (1) {
			switch (_context27.prev = _context27.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context27.next = 3;
						break;
					}

					_context27.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					if (!n.init) {
						_context27.next = 5;
						break;
					}

					return _context27.delegateYield(e.branch(n.init, s), 't0', 5);

				case 5:

					e.pushFrame({ generator: genForLoop(e, n, s), type: 'loop', label: n.label, ast: n });

					_context27.next = 8;
					return EvaluatorInstruction.waitForFramePop;

				case 8:
					finished = _context27.sent;
					return _context27.abrupt('return', Value.undef);

				case 10:
				case 'end':
					return _context27.stop();
			}
		}
	}, _marked20, this);
}

function evaluateForInStatement(e, n, s) {
	var last, object, names, that, ref, decl, gen, finished;
	return _regenerator2.default.wrap(function evaluateForInStatement$(_context29) {
		while (1) {
			switch (_context29.prev = _context29.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context29.next = 3;
						break;
					}

					_context29.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					last = Value.undef;
					return _context29.delegateYield(e.branch(n.right, s), 't0', 5);

				case 5:
					object = _context29.t0;
					names = object.observableProperties(s.realm);
					that = e;
					ref = void 0;

					s = s.createBlockChild();

					if (n.left.type === 'VariableDeclaration') {
						decl = n.left.declarations[0];

						if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
						ref = s.ref(decl.id.name, s);
					} else {
						ref = s.ref(n.left.name, s);
					}

					if (ref) {
						_context29.next = 16;
						break;
					}

					if (!s.strict) {
						_context29.next = 14;
						break;
					}

					return _context29.abrupt('return', CompletionRecord.makeReferenceError(s.realm, n.left.name + ' is not defined'));

				case 14:
					//Create an var in global scope if varialbe doesnt exist and not in strict mode.
					s.global.add(n.left.name, Value.undef);
					ref = s.ref(n.left.name);

				case 16:
					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						var _iterator6, _isArray6, _i6, _ref6, name;

						return _regenerator2.default.wrap(function gen$(_context28) {
							while (1) {
								switch (_context28.prev = _context28.next) {
									case 0:
										_iterator6 = names, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

									case 1:
										if (!_isArray6) {
											_context28.next = 7;
											break;
										}

										if (!(_i6 >= _iterator6.length)) {
											_context28.next = 4;
											break;
										}

										return _context28.abrupt('break', 18);

									case 4:
										_ref6 = _iterator6[_i6++];
										_context28.next = 11;
										break;

									case 7:
										_i6 = _iterator6.next();

										if (!_i6.done) {
											_context28.next = 10;
											break;
										}

										return _context28.abrupt('break', 18);

									case 10:
										_ref6 = _i6.value;

									case 11:
										name = _ref6;
										return _context28.delegateYield(ref.setValue(name), 't0', 13);

									case 13:
										_context28.next = 15;
										return that.branchFrame('continue', n.body, s, { label: n.label });

									case 15:
										last = _context28.sent;

									case 16:
										_context28.next = 1;
										break;

									case 18:
									case 'end':
										return _context28.stop();
								}
							}
						}, gen, this);
					});

					e.pushFrame({ generator: gen(), type: 'loop', label: n.label, ast: n });

					_context29.next = 20;
					return EvaluatorInstruction.waitForFramePop;

				case 20:
					finished = _context29.sent;
					return _context29.abrupt('return', Value.undef);

				case 22:
				case 'end':
					return _context29.stop();
			}
		}
	}, _marked21, this);
}

//TODO: For of does more crazy Symbol iterator stuff
function evaluateForOfStatement(e, n, s) {
	var last, object, names, that, ref, decl, gen, finished;
	return _regenerator2.default.wrap(function evaluateForOfStatement$(_context31) {
		while (1) {
			switch (_context31.prev = _context31.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context31.next = 3;
						break;
					}

					_context31.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					last = Value.undef;
					return _context31.delegateYield(e.branch(n.right, s), 't0', 5);

				case 5:
					object = _context31.t0;
					names = object.observableProperties(s.realm);
					that = e;
					ref = void 0;

					s = s.createBlockChild();
					if (n.left.type === 'VariableDeclaration') {
						decl = n.left.declarations[0];

						if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
						//yield * s.put(n.left.declarations[0].id.name, Value.undef);
						ref = s.ref(n.left.declarations[0].id.name, s.realm);
					} else {
						ref = s.ref(n.left.name, s.realm);
					}

					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						var _iterator7, _isArray7, _i7, _ref7, name;

						return _regenerator2.default.wrap(function gen$(_context30) {
							while (1) {
								switch (_context30.prev = _context30.next) {
									case 0:
										_iterator7 = names, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

									case 1:
										if (!_isArray7) {
											_context30.next = 7;
											break;
										}

										if (!(_i7 >= _iterator7.length)) {
											_context30.next = 4;
											break;
										}

										return _context30.abrupt('break', 24);

									case 4:
										_ref7 = _iterator7[_i7++];
										_context30.next = 11;
										break;

									case 7:
										_i7 = _iterator7.next();

										if (!_i7.done) {
											_context30.next = 10;
											break;
										}

										return _context30.abrupt('break', 24);

									case 10:
										_ref7 = _i7.value;

									case 11:
										name = _ref7;
										_context30.t0 = ref;
										_context30.t1 = object;
										return _context30.delegateYield(name.toStringNative(), 't2', 15);

									case 15:
										_context30.t3 = _context30.t2;
										return _context30.delegateYield(_context30.t1.get.call(_context30.t1, _context30.t3), 't4', 17);

									case 17:
										_context30.t5 = _context30.t4;
										return _context30.delegateYield(_context30.t0.setValue.call(_context30.t0, _context30.t5), 't6', 19);

									case 19:
										_context30.next = 21;
										return that.branchFrame('continue', n.body, s, { label: n.label });

									case 21:
										last = _context30.sent;

									case 22:
										_context30.next = 1;
										break;

									case 24:
									case 'end':
										return _context30.stop();
								}
							}
						}, gen, this);
					});

					e.pushFrame({ generator: gen(), type: 'loop', label: n.label });

					_context31.next = 15;
					return EvaluatorInstruction.waitForFramePop;

				case 15:
					finished = _context31.sent;
					return _context31.abrupt('return', Value.undef);

				case 17:
				case 'end':
					return _context31.stop();
			}
		}
	}, _marked22, this);
}

function evaluateFunctionDeclaration(e, n, s) {
	var closure;
	return _regenerator2.default.wrap(function evaluateFunctionDeclaration$(_context32) {
		while (1) {
			switch (_context32.prev = _context32.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context32.next = 3;
						break;
					}

					_context32.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					closure = new ClosureValue(n, s);

					s.add(n.id.name, closure);
					return _context32.abrupt('return', Value.undef);

				case 6:
				case 'end':
					return _context32.stop();
			}
		}
	}, _marked23, this);
}

function evaluateFunctionExpression(e, n, s) {
	var value;
	return _regenerator2.default.wrap(function evaluateFunctionExpression$(_context33) {
		while (1) {
			switch (_context33.prev = _context33.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context33.next = 3;
						break;
					}

					_context33.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					value = new ClosureValue(n, s);

					if (n.type === 'ArrowFunctionExpression') {
						value.thiz = s.thiz;
						if (n.expression) value.returnLastValue = true;
					}
					return _context33.abrupt('return', value);

				case 6:
				case 'end':
					return _context33.stop();
			}
		}
	}, _marked24, this);
}

function evaluateLabeledStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateLabeledStatement$(_context34) {
		while (1) {
			switch (_context34.prev = _context34.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context34.next = 3;
						break;
					}

					_context34.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context34.delegateYield(e.branch(n.body, s), 't0', 4);

				case 4:
					return _context34.abrupt('return', _context34.t0);

				case 5:
				case 'end':
					return _context34.stop();
			}
		}
	}, _marked25, this);
}

function evaluateLiteral(e, n, s) {
	var tryFloat;
	return _regenerator2.default.wrap(function evaluateLiteral$(_context35) {
		while (1) {
			switch (_context35.prev = _context35.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context35.next = 3;
						break;
					}

					_context35.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					if (!n.regex) {
						_context35.next = 7;
						break;
					}

					return _context35.abrupt('return', RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm));

				case 7:
					if (!(n.value === null)) {
						_context35.next = 16;
						break;
					}

					if (!(e.raw === 'null')) {
						_context35.next = 10;
						break;
					}

					return _context35.abrupt('return', Value.null);

				case 10:

					//Work around Esprima turning Infinity into null. =\
					tryFloat = parseFloat(n.raw);

					if (isNaN(tryFloat)) {
						_context35.next = 13;
						break;
					}

					return _context35.abrupt('return', e.fromNative(tryFloat, n));

				case 13:
					return _context35.abrupt('return', e.fromNative(null, n));

				case 16:
					return _context35.abrupt('return', e.realm.makeLiteralValue(n.value, n));

				case 17:
				case 'end':
					return _context35.stop();
			}
		}
	}, _marked26, this);
}

function evaluateLogicalExpression(e, n, s) {
	var left;
	return _regenerator2.default.wrap(function evaluateLogicalExpression$(_context36) {
		while (1) {
			switch (_context36.prev = _context36.next) {
				case 0:
					return _context36.delegateYield(e.branch(n.left, s), 't0', 1);

				case 1:
					left = _context36.t0;

					if (!(e.yieldPower >= 4)) {
						_context36.next = 5;
						break;
					}

					_context36.next = 5;
					return EvaluatorInstruction.stepMajor;

				case 5:
					_context36.t1 = n.operator;
					_context36.next = _context36.t1 === '&&' ? 8 : _context36.t1 === '||' ? 12 : 16;
					break;

				case 8:
					if (!left.truthy) {
						_context36.next = 11;
						break;
					}

					return _context36.delegateYield(e.branch(n.right, s), 't2', 10);

				case 10:
					return _context36.abrupt('return', _context36.t2);

				case 11:
					return _context36.abrupt('return', left);

				case 12:
					if (!left.truthy) {
						_context36.next = 14;
						break;
					}

					return _context36.abrupt('return', left);

				case 14:
					return _context36.delegateYield(e.branch(n.right, s), 't3', 15);

				case 15:
					return _context36.abrupt('return', _context36.t3);

				case 16:
					throw new Error('Unknown logical operator: ' + n.operator);

				case 17:
				case 'end':
					return _context36.stop();
			}
		}
	}, _marked27, this);
}

function evaluateMemberExpression(e, n, s) {
	var left;
	return _regenerator2.default.wrap(function evaluateMemberExpression$(_context37) {
		while (1) {
			switch (_context37.prev = _context37.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context37.next = 3;
						break;
					}

					_context37.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context37.delegateYield(e.branch(n.object, s), 't0', 4);

				case 4:
					left = _context37.t0;
					return _context37.delegateYield(e.partialMemberExpression(left, n, s), 't1', 6);

				case 6:
					return _context37.abrupt('return', _context37.t1);

				case 7:
				case 'end':
					return _context37.stop();
			}
		}
	}, _marked28, this);
}

function evaluateMetaProperty(e, n, s) {
	var i, t;
	return _regenerator2.default.wrap(function evaluateMetaProperty$(_context38) {
		while (1) {
			switch (_context38.prev = _context38.next) {
				case 0:
					i = 0;

				case 1:
					if (!(i < e.frames.length - 1)) {
						_context38.next = 12;
						break;
					}

					t = e.frames[i].type;

					if (!(t === "function")) {
						_context38.next = 9;
						break;
					}

					if (!(e.frames[i + 1].ast.type == "NewExpression")) {
						_context38.next = 8;
						break;
					}

					return _context38.abrupt('return', e.frames[i].callee);

				case 8:
					return _context38.abrupt('return', Value.undef);

				case 9:
					++i;
					_context38.next = 1;
					break;

				case 12:
					return _context38.abrupt('return', Value.undef);

				case 13:
				case 'end':
					return _context38.stop();
			}
		}
	}, _marked29, this);
}

function evaluateObjectExpression(e, n, s) {
	var nat, i, prop, key, value, pd;
	return _regenerator2.default.wrap(function evaluateObjectExpression$(_context39) {
		while (1) {
			switch (_context39.prev = _context39.next) {
				case 0:
					//TODO: Need to wire up native prototype
					nat = new ObjectValue(s.realm);
					i = 0;

				case 2:
					if (!(i < n.properties.length)) {
						_context39.next = 27;
						break;
					}

					prop = n.properties[i];
					key = void 0;

					if (!n.computed) {
						_context39.next = 10;
						break;
					}

					return _context39.delegateYield(e.branch(prop.key, s), 't0', 7);

				case 7:
					key = _context39.t0.toNative().toString();
					_context39.next = 11;
					break;

				case 10:
					if (prop.key.type == 'Identifier') {
						key = prop.key.name;
					} else if (prop.key.type == 'Literal') {
						key = prop.key.value.toString();
					}

				case 11:
					return _context39.delegateYield(e.branch(prop.value, s), 't1', 12);

				case 12:
					value = _context39.t1;
					pd = void 0;


					if (Object.prototype.hasOwnProperty.call(nat.properties, key)) {
						pd = nat.properties[key];
					} else {
						pd = new PropertyDescriptor(Value.undef);
						nat.rawSetProperty(key, pd);
					}

					_context39.t2 = prop.kind;
					_context39.next = _context39.t2 === 'init' ? 18 : _context39.t2 === 'get' ? 20 : _context39.t2 === 'set' ? 22 : 18;
					break;

				case 18:
					pd.value = value;
					return _context39.abrupt('break', 24);

				case 20:
					pd.getter = value;
					return _context39.abrupt('break', 24);

				case 22:
					pd.setter = value;
					return _context39.abrupt('break', 24);

				case 24:
					++i;
					_context39.next = 2;
					break;

				case 27:
					if (!(e.yieldPower > 0)) {
						_context39.next = 30;
						break;
					}

					_context39.next = 30;
					return EvaluatorInstruction.stepMajor;

				case 30:
					return _context39.abrupt('return', nat);

				case 31:
				case 'end':
					return _context39.stop();
			}
		}
	}, _marked30, this);
}

function evaluateProgram(e, n, s) {
	var result, v, _iterator8, _isArray8, _i8, _ref8, statement;

	return _regenerator2.default.wrap(function evaluateProgram$(_context40) {
		while (1) {
			switch (_context40.prev = _context40.next) {
				case 0:
					result = Value.undef;

					if (n.vars) for (v in n.vars) {
						s.add(v, Value.undef);
					}
					if (n.strict === true) s.strict = true;

					if (!(e.yieldPower >= 4)) {
						_context40.next = 6;
						break;
					}

					_context40.next = 6;
					return EvaluatorInstruction.stepMajor;

				case 6:
					_iterator8 = n.body, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

				case 7:
					if (!_isArray8) {
						_context40.next = 13;
						break;
					}

					if (!(_i8 >= _iterator8.length)) {
						_context40.next = 10;
						break;
					}

					return _context40.abrupt('break', 22);

				case 10:
					_ref8 = _iterator8[_i8++];
					_context40.next = 17;
					break;

				case 13:
					_i8 = _iterator8.next();

					if (!_i8.done) {
						_context40.next = 16;
						break;
					}

					return _context40.abrupt('break', 22);

				case 16:
					_ref8 = _i8.value;

				case 17:
					statement = _ref8;
					return _context40.delegateYield(e.branch(statement, s), 't0', 19);

				case 19:
					result = _context40.t0;

				case 20:
					_context40.next = 7;
					break;

				case 22:
					return _context40.abrupt('return', result);

				case 23:
				case 'end':
					return _context40.stop();
			}
		}
	}, _marked31, this);
}

function evaluateReturnStatement(e, n, s) {
	var retVal;
	return _regenerator2.default.wrap(function evaluateReturnStatement$(_context41) {
		while (1) {
			switch (_context41.prev = _context41.next) {
				case 0:
					retVal = Value.undef;

					if (!n.argument) {
						_context41.next = 4;
						break;
					}

					return _context41.delegateYield(e.branch(n.argument, s), 't0', 3);

				case 3:
					retVal = _context41.t0;

				case 4:
					if (!(e.yieldPower >= 2)) {
						_context41.next = 7;
						break;
					}

					_context41.next = 7;
					return EvaluatorInstruction.stepMajor;

				case 7:
					return _context41.abrupt('return', new CompletionRecord(CompletionRecord.RETURN, retVal));

				case 8:
				case 'end':
					return _context41.stop();
			}
		}
	}, _marked32, this);
}

function evaluateSequenceExpression(e, n, s) {
	var last, _iterator9, _isArray9, _i9, _ref9, expr;

	return _regenerator2.default.wrap(function evaluateSequenceExpression$(_context42) {
		while (1) {
			switch (_context42.prev = _context42.next) {
				case 0:
					last = Value.undef;

					if (!(e.yieldPower >= 4)) {
						_context42.next = 4;
						break;
					}

					_context42.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					_iterator9 = n.expressions, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

				case 5:
					if (!_isArray9) {
						_context42.next = 11;
						break;
					}

					if (!(_i9 >= _iterator9.length)) {
						_context42.next = 8;
						break;
					}

					return _context42.abrupt('break', 20);

				case 8:
					_ref9 = _iterator9[_i9++];
					_context42.next = 15;
					break;

				case 11:
					_i9 = _iterator9.next();

					if (!_i9.done) {
						_context42.next = 14;
						break;
					}

					return _context42.abrupt('break', 20);

				case 14:
					_ref9 = _i9.value;

				case 15:
					expr = _ref9;
					return _context42.delegateYield(e.branch(expr, s), 't0', 17);

				case 17:
					last = _context42.t0;

				case 18:
					_context42.next = 5;
					break;

				case 20:
					return _context42.abrupt('return', last);

				case 21:
				case 'end':
					return _context42.stop();
			}
		}
	}, _marked33, this);
}

function evaluateSuperExpression(e, n, s) {
	var fr, i, result;
	return _regenerator2.default.wrap(function evaluateSuperExpression$(_context43) {
		while (1) {
			switch (_context43.prev = _context43.next) {
				case 0:
					fr = void 0;
					i = 0;

				case 2:
					if (!(i < e.frames.length)) {
						_context43.next = 9;
						break;
					}

					fr = e.frames[i];

					if (!fr.creator) {
						_context43.next = 6;
						break;
					}

					return _context43.abrupt('break', 9);

				case 6:
					++i;
					_context43.next = 2;
					break;

				case 9:
					result = fr.creator.superTarget;
					return _context43.abrupt('return', result);

				case 11:
				case 'end':
					return _context43.stop();
			}
		}
	}, _marked34, this);
}

function evaluateSwitchStatement(e, n, s) {
	var discriminant, last, matches, matchVals, matched, i, cas, testval, equality, genSwitch, finished;
	return _regenerator2.default.wrap(function evaluateSwitchStatement$(_context45) {
		while (1) {
			switch (_context45.prev = _context45.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context45.next = 3;
						break;
					}

					_context45.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					return _context45.delegateYield(e.branch(n.discriminant, s), 't0', 4);

				case 4:
					discriminant = _context45.t0;
					last = Value.undef;
					matches = 0;
					matchVals = new Array(n.cases.length);
					matched = false;
					i = 0;

				case 10:
					if (!(i < n.cases.length)) {
						_context45.next = 22;
						break;
					}

					cas = n.cases[i];

					if (!cas.test) {
						_context45.next = 19;
						break;
					}

					return _context45.delegateYield(e.branch(cas.test, s), 't1', 14);

				case 14:
					testval = _context45.t1;
					return _context45.delegateYield(testval.tripleEquals(discriminant), 't2', 16);

				case 16:
					equality = _context45.t2;

					if (equality.truthy) ++matches;
					matchVals[i] = equality.truthy;

				case 19:
					++i;
					_context45.next = 10;
					break;

				case 22:
					genSwitch = /*#__PURE__*/_regenerator2.default.mark(function genSwitch(e, n) {
						var _i10, _cas, _iterator10, _isArray10, _i11, _ref10, statement;

						return _regenerator2.default.wrap(function genSwitch$(_context44) {
							while (1) {
								switch (_context44.prev = _context44.next) {
									case 0:
										_i10 = 0;

									case 1:
										if (!(_i10 < n.cases.length)) {
											_context44.next = 31;
											break;
										}

										_cas = n.cases[_i10];

										if (matched) {
											_context44.next = 12;
											break;
										}

										if (!_cas.test) {
											_context44.next = 9;
											break;
										}

										if (matchVals[_i10]) {
											_context44.next = 7;
											break;
										}

										return _context44.abrupt('continue', 28);

									case 7:
										_context44.next = 11;
										break;

									case 9:
										if (!(matches !== 0)) {
											_context44.next = 11;
											break;
										}

										return _context44.abrupt('continue', 28);

									case 11:
										matched = true;

									case 12:
										_iterator10 = _cas.consequent, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

									case 13:
										if (!_isArray10) {
											_context44.next = 19;
											break;
										}

										if (!(_i11 >= _iterator10.length)) {
											_context44.next = 16;
											break;
										}

										return _context44.abrupt('break', 28);

									case 16:
										_ref10 = _iterator10[_i11++];
										_context44.next = 23;
										break;

									case 19:
										_i11 = _iterator10.next();

										if (!_i11.done) {
											_context44.next = 22;
											break;
										}

										return _context44.abrupt('break', 28);

									case 22:
										_ref10 = _i11.value;

									case 23:
										statement = _ref10;
										return _context44.delegateYield(e.branch(statement, s), 't0', 25);

									case 25:
										last = _context44.t0;

									case 26:
										_context44.next = 13;
										break;

									case 28:
										++_i10;
										_context44.next = 1;
										break;

									case 31:
									case 'end':
										return _context44.stop();
								}
							}
						}, genSwitch, this);
					});


					e.pushFrame({ generator: genSwitch(e, n), type: 'loop', label: n.label });
					_context45.next = 26;
					return EvaluatorInstruction.waitForFramePop;

				case 26:
					finished = _context45.sent;
					return _context45.abrupt('return', last);

				case 28:
				case 'end':
					return _context45.stop();
			}
		}
	}, _marked35, this);
}

function evaluateTaggedTemplateExpression(e, n, s) {
	var quasis, expressions, value, fn, strings, rawStrings, i, sv, rv, args, _i12;

	return _regenerator2.default.wrap(function evaluateTaggedTemplateExpression$(_context47) {
		while (1) {
			switch (_context47.prev = _context47.next) {
				case 0:
					quasis = n.quasi.quasis;
					expressions = n.quasi.expressions;
					value = Value.fromNative(quasis[0].value.cooked);
					return _context47.delegateYield(e.branch(n.tag, s), 't0', 4);

				case 4:
					fn = _context47.t0;
					strings = [];
					rawStrings = [];

					for (i = 0; i < quasis.length; ++i) {
						strings.push(e.realm.fromNative(quasis[i].value.cooked));
						rawStrings.push(e.realm.fromNative(quasis[i].value.raw));
					}
					sv = ArrayValue.make(strings, e.realm);
					rv = ArrayValue.make(rawStrings, e.realm);

					sv.rawSetProperty('raw', new PropertyDescriptor(rv, false));

					args = [sv];
					_i12 = 0;

				case 13:
					if (!(_i12 < expressions.length)) {
						_context47.next = 21;
						break;
					}

					_context47.t1 = args;
					return _context47.delegateYield(e.branch(expressions[_i12], s), 't2', 16);

				case 16:
					_context47.t3 = _context47.t2;

					_context47.t1.push.call(_context47.t1, _context47.t3);

				case 18:
					++_i12;
					_context47.next = 13;
					break;

				case 21:
					return _context47.delegateYield(doCall(e, n, n.tag, s, /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
						return _regenerator2.default.wrap(function _callee7$(_context46) {
							while (1) {
								switch (_context46.prev = _context46.next) {
									case 0:
										return _context46.abrupt('return', args);

									case 1:
									case 'end':
										return _context46.stop();
								}
							}
						}, _callee7, this);
					})), 't4', 22);

				case 22:
					return _context47.abrupt('return', _context47.t4);

				case 23:
				case 'end':
					return _context47.stop();
			}
		}
	}, _marked36, this);
}

function evaluateTemplateLiteral(e, n, s) {
	var value, i;
	return _regenerator2.default.wrap(function evaluateTemplateLiteral$(_context48) {
		while (1) {
			switch (_context48.prev = _context48.next) {
				case 0:
					value = Value.fromNative(n.quasis[0].value.cooked);
					i = 0;

				case 2:
					if (!(i < n.expressions.length)) {
						_context48.next = 13;
						break;
					}

					_context48.t0 = value;
					return _context48.delegateYield(e.branch(n.expressions[i], s), 't1', 5);

				case 5:
					_context48.t2 = _context48.t1;
					return _context48.delegateYield(_context48.t0.add.call(_context48.t0, _context48.t2), 't3', 7);

				case 7:
					value = _context48.t3;
					return _context48.delegateYield(value.add(Value.fromNative(n.quasis[i + 1].value.cooked)), 't4', 9);

				case 9:
					value = _context48.t4;

				case 10:
					++i;
					_context48.next = 2;
					break;

				case 13:
					return _context48.abrupt('return', value);

				case 14:
				case 'end':
					return _context48.stop();
			}
		}
	}, _marked37, this);
}

function evaluateThisExpression(e, n, s) {
	return _regenerator2.default.wrap(function evaluateThisExpression$(_context49) {
		while (1) {
			switch (_context49.prev = _context49.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context49.next = 3;
						break;
					}

					_context49.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!s.thiz) {
						_context49.next = 7;
						break;
					}

					return _context49.abrupt('return', s.thiz);

				case 7:
					return _context49.abrupt('return', Value.undef);

				case 8:
				case 'end':
					return _context49.stop();
			}
		}
	}, _marked38, this);
}

function evaluateThrowStatement(e, n, s) {
	var value;
	return _regenerator2.default.wrap(function evaluateThrowStatement$(_context50) {
		while (1) {
			switch (_context50.prev = _context50.next) {
				case 0:
					return _context50.delegateYield(e.branch(n.argument, s), 't0', 1);

				case 1:
					value = _context50.t0;

					if (!(e.yieldPower >= 2)) {
						_context50.next = 5;
						break;
					}

					_context50.next = 5;
					return EvaluatorInstruction.stepMajor;

				case 5:
					return _context50.abrupt('return', new CompletionRecord(CompletionRecord.THROW, value));

				case 6:
				case 'end':
					return _context50.stop();
			}
		}
	}, _marked39, this);
}

function evaluateTryStatement(e, n, s) {
	var result, handlerScope;
	return _regenerator2.default.wrap(function evaluateTryStatement$(_context51) {
		while (1) {
			switch (_context51.prev = _context51.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context51.next = 3;
						break;
					}

					_context51.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (n.finalizer) e.pushFrame({ generator: e.branch(n.finalizer, s), type: 'finally', scope: s });
					_context51.next = 6;
					return e.branchFrame('catch', n.block, s);

				case 6:
					result = _context51.sent;

					if (!(result instanceof CompletionRecord && result.type == CompletionRecord.THROW)) {
						_context51.next = 14;
						break;
					}

					if (n.handler) {
						_context51.next = 10;
						break;
					}

					return _context51.abrupt('return', result);

				case 10:
					handlerScope = s.createChild();

					handlerScope.add(n.handler.param.name, result.value);
					return _context51.delegateYield(e.branch(n.handler.body, handlerScope), 't0', 13);

				case 13:
					return _context51.abrupt('return', _context51.t0);

				case 14:
					return _context51.abrupt('return', result);

				case 15:
				case 'end':
					return _context51.stop();
			}
		}
	}, _marked40, this);
}

function evaluateUpdateExpression(e, n, s) {
	var nue, ref, old;
	return _regenerator2.default.wrap(function evaluateUpdateExpression$(_context52) {
		while (1) {
			switch (_context52.prev = _context52.next) {
				case 0:
					//TODO: Need to support something like ++x[1];
					nue = void 0;

					if (!(e.yieldPower >= 3)) {
						_context52.next = 4;
						break;
					}

					_context52.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					return _context52.delegateYield(e.resolveRef(n.argument, s, true), 't0', 5);

				case 5:
					ref = _context52.t0;
					old = Value.nan;

					if (!ref) {
						_context52.next = 10;
						break;
					}

					return _context52.delegateYield(ref.getValue(), 't1', 9);

				case 9:
					old = _context52.t1;

				case 10:
					if (old === undefined) old = Value.nan;
					_context52.t2 = n.operator;
					_context52.next = _context52.t2 === '++' ? 14 : _context52.t2 === '--' ? 17 : 20;
					break;

				case 14:
					return _context52.delegateYield(old.add(e.fromNative(1)), 't3', 15);

				case 15:
					nue = _context52.t3;
					return _context52.abrupt('break', 21);

				case 17:
					return _context52.delegateYield(old.subtract(e.fromNative(1)), 't4', 18);

				case 18:
					nue = _context52.t4;
					return _context52.abrupt('break', 21);

				case 20:
					throw new Error('Unknown update expression type: ' + n.operator);

				case 21:
					if (!ref) {
						_context52.next = 23;
						break;
					}

					return _context52.delegateYield(ref.setValue(nue, s), 't5', 23);

				case 23:
					if (!n.prefix) {
						_context52.next = 25;
						break;
					}

					return _context52.abrupt('return', nue);

				case 25:
					return _context52.abrupt('return', old);

				case 26:
				case 'end':
					return _context52.stop();
			}
		}
	}, _marked41, this);
}

function evaluateUnaryExpression(e, n, s) {
	var ref, worked, left;
	return _regenerator2.default.wrap(function evaluateUnaryExpression$(_context53) {
		while (1) {
			switch (_context53.prev = _context53.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context53.next = 3;
						break;
					}

					_context53.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!(n.operator === 'delete')) {
						_context53.next = 18;
						break;
					}

					if (!(n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier')) {
						_context53.next = 6;
						break;
					}

					return _context53.abrupt('return', Value.true);

				case 6:
					return _context53.delegateYield(e.resolveRef(n.argument, s), 't0', 7);

				case 7:
					ref = _context53.t0;

					if (ref) {
						_context53.next = 10;
						break;
					}

					return _context53.abrupt('return', Value.false);

				case 10:
					if (!(ref.isVariable || !ref.del)) {
						_context53.next = 12;
						break;
					}

					return _context53.abrupt('return', Value.false);

				case 12:
					worked = ref.del(s);

					if (!(worked instanceof CompletionRecord)) {
						_context53.next = 17;
						break;
					}

					_context53.next = 16;
					return worked;

				case 16:
					return _context53.abrupt('return', _context53.sent);

				case 17:
					return _context53.abrupt('return', Value.fromNative(worked));

				case 18:
					if (!(n.operator === 'typeof')) {
						_context53.next = 23;
						break;
					}

					if (!(n.argument.type == 'Identifier')) {
						_context53.next = 23;
						break;
					}

					if (s.has(n.argument.name)) {
						_context53.next = 23;
						break;
					}

					return _context53.delegateYield(Value.undef.typeOf(), 't1', 22);

				case 22:
					return _context53.abrupt('return', _context53.t1);

				case 23:
					return _context53.delegateYield(e.branch(n.argument, s), 't2', 24);

				case 24:
					left = _context53.t2;
					_context53.t3 = n.operator;
					_context53.next = _context53.t3 === '-' ? 28 : _context53.t3 === '+' ? 30 : _context53.t3 === '!' ? 32 : _context53.t3 === '~' ? 34 : _context53.t3 === 'typeof' ? 36 : _context53.t3 === 'void' ? 38 : 39;
					break;

				case 28:
					return _context53.delegateYield(left.unaryMinus(), 't4', 29);

				case 29:
					return _context53.abrupt('return', _context53.t4);

				case 30:
					return _context53.delegateYield(left.unaryPlus(), 't5', 31);

				case 31:
					return _context53.abrupt('return', _context53.t5);

				case 32:
					return _context53.delegateYield(left.not(), 't6', 33);

				case 33:
					return _context53.abrupt('return', _context53.t6);

				case 34:
					return _context53.delegateYield(left.bitNot(), 't7', 35);

				case 35:
					return _context53.abrupt('return', _context53.t7);

				case 36:
					return _context53.delegateYield(left.typeOf(), 't8', 37);

				case 37:
					return _context53.abrupt('return', _context53.t8);

				case 38:
					return _context53.abrupt('return', Value.undef);

				case 39:
					throw new Error('Unknown binary operator: ' + n.operator);

				case 40:
				case 'end':
					return _context53.stop();
			}
		}
	}, _marked42, this);
}

function evaluateVariableDeclaration(e, n, s) {
	var kind, _iterator11, _isArray11, _i13, _ref11, decl, value;

	return _regenerator2.default.wrap(function evaluateVariableDeclaration$(_context54) {
		while (1) {
			switch (_context54.prev = _context54.next) {
				case 0:
					kind = n.kind;

					if (!(e.yieldPower >= 3)) {
						_context54.next = 4;
						break;
					}

					_context54.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					_iterator11 = n.declarations, _isArray11 = Array.isArray(_iterator11), _i13 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

				case 5:
					if (!_isArray11) {
						_context54.next = 11;
						break;
					}

					if (!(_i13 >= _iterator11.length)) {
						_context54.next = 8;
						break;
					}

					return _context54.abrupt('break', 27);

				case 8:
					_ref11 = _iterator11[_i13++];
					_context54.next = 15;
					break;

				case 11:
					_i13 = _iterator11.next();

					if (!_i13.done) {
						_context54.next = 14;
						break;
					}

					return _context54.abrupt('break', 27);

				case 14:
					_ref11 = _i13.value;

				case 15:
					decl = _ref11;
					value = Value.undef;

					if (!decl.init) {
						_context54.next = 22;
						break;
					}

					return _context54.delegateYield(e.branch(decl.init, s), 't0', 19);

				case 19:
					value = _context54.t0;
					_context54.next = 24;
					break;

				case 22:
					if (!s.has(decl.id.name)) {
						_context54.next = 24;
						break;
					}

					return _context54.abrupt('continue', 25);

				case 24:

					if (kind === 'const') {
						s.addConst(decl.id.name, value);
					} else if (kind == 'let') {
						s.addBlock(decl.id.name, value);
					} else {
						s.add(decl.id.name, value);
					}

				case 25:
					_context54.next = 5;
					break;

				case 27:
					return _context54.abrupt('return', Value.undef);

				case 28:
				case 'end':
					return _context54.stop();
			}
		}
	}, _marked43, this);
}

function genWhileLoop(e, n, s) {
	var last;
	return _regenerator2.default.wrap(function genWhileLoop$(_context55) {
		while (1) {
			switch (_context55.prev = _context55.next) {
				case 0:
					last = Value.undef;

				case 1:
					return _context55.delegateYield(e.branch(n.test, s), 't0', 2);

				case 2:
					if (!_context55.t0.truthy) {
						_context55.next = 12;
						break;
					}

					e.topFrame.ast = n;

					if (!(e.yieldPower > 0)) {
						_context55.next = 7;
						break;
					}

					_context55.next = 7;
					return EvaluatorInstruction.eventLoopBodyStart;

				case 7:
					_context55.next = 9;
					return e.branchFrame('continue', n.body, s);

				case 9:
					last = _context55.sent;
					_context55.next = 1;
					break;

				case 12:
				case 'end':
					return _context55.stop();
			}
		}
	}, _marked44, this);
}

function evaluateWhileStatement(e, n, s) {
	var finished;
	return _regenerator2.default.wrap(function evaluateWhileStatement$(_context56) {
		while (1) {
			switch (_context56.prev = _context56.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context56.next = 3;
						break;
					}

					_context56.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					e.pushFrame({ generator: genWhileLoop(e, n, s), type: 'loop', label: n.label, ast: n });
					_context56.next = 6;
					return EvaluatorInstruction.waitForFramePop;

				case 6:
					finished = _context56.sent;
					return _context56.abrupt('return', Value.undef);

				case 8:
				case 'end':
					return _context56.stop();
			}
		}
	}, _marked45, this);
}

function evaluateWithStatement(e, n, s) {
	var o, ns, pairs, p;
	return _regenerator2.default.wrap(function evaluateWithStatement$(_context57) {
		while (1) {
			switch (_context57.prev = _context57.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context57.next = 3;
						break;
					}

					_context57.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!s.strict) {
						_context57.next = 5;
						break;
					}

					return _context57.abrupt('return', CompletionRecord.makeSyntaxError(e.realm, 'Strict mode code may not include a with statement'));

				case 5:
					return _context57.delegateYield(e.branch(n.object, s), 't0', 6);

				case 6:
					o = _context57.t0;
					ns = s.createBlockChild();

					if (o instanceof ObjectValue) {
						pairs = o.getPropertyValueMap();

						for (p in pairs) {
							ns.set(p, pairs[p]);
						}
					}
					return _context57.delegateYield(e.branch(n.body, ns), 't1', 10);

				case 10:
					return _context57.abrupt('return', _context57.t1);

				case 11:
				case 'end':
					return _context57.stop();
			}
		}
	}, _marked46, this);
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
	evaluateIdentifier: evaluateIdentifier,
	findNextStep: findNextStep,
	classFeatures: classFeatures
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weakMap = __webpack_require__(161);

var _weakMap2 = _interopRequireDefault(_weakMap);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scope = __webpack_require__(199);
var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
var ObjectValue = __webpack_require__(180);
var PrimitiveValue = __webpack_require__(182);
var StringValue = __webpack_require__(185);
var LinkValue = __webpack_require__(200);
var SmartLinkValue = __webpack_require__(201);
var BridgeValue = __webpack_require__(189);
var ASTPreprocessor = __webpack_require__(207);
var EasyNativeFunction = __webpack_require__(208);
var PropertyDescriptor = __webpack_require__(181);
var Evaluator = __webpack_require__(149);
var EvaluatorInstruction = __webpack_require__(193);

var ObjectPrototype = __webpack_require__(209);
var FunctionPrototype = __webpack_require__(214);
var ObjectClass = __webpack_require__(215);
var FunctionClass = __webpack_require__(216);
var NumberPrototype = __webpack_require__(217);

var StringPrototype = __webpack_require__(218);

var ArrayPrototype = __webpack_require__(219);
var ArrayClass = __webpack_require__(220);
var StringClass = __webpack_require__(221);
var NumberClass = __webpack_require__(222);

var BooleanPrototype = __webpack_require__(223);
var BooleanClass = __webpack_require__(224);
var RegExpPrototype = __webpack_require__(225);
var RegExpClass = __webpack_require__(226);
var EsperClass = __webpack_require__(227);
var ErrorPrototype = __webpack_require__(228);
var ErrorClass = __webpack_require__(229);

var AssertClass = __webpack_require__(230);
var MathClass = __webpack_require__(231);
var ConsoleClass = __webpack_require__(232);
var JSONClass = __webpack_require__(233);
var ProxyClass = __webpack_require__(234);
var esper = __webpack_require__(122);

var EvalFunction = function (_ObjectValue) {
	(0, _inherits3.default)(EvalFunction, _ObjectValue);

	function EvalFunction(realm) {
		(0, _classCallCheck3.default)(this, EvalFunction);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EvalFunction.__proto__ || (0, _getPrototypeOf2.default)(EvalFunction)).call(this, realm));

		_this.setPrototype(realm.FunctionPrototype);
		return _this;
	}

	(0, _createClass3.default)(EvalFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope) {
			var cv, code, ast, oast, eo, desc, bak;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							cv = Value.undef;

							if (args.length > 0) cv = args[0];

							if (cv instanceof StringValue) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return', cv);

						case 4:
							return _context.delegateYield(cv.toStringNative(), 't0', 5);

						case 5:
							code = _context.t0;
							ast = void 0;
							_context.prev = 7;
							oast = scope.realm.parser(code, { loc: true });

							ast = ASTPreprocessor.process(oast);
							_context.next = 18;
							break;

						case 12:
							_context.prev = 12;
							_context.t1 = _context['catch'](7);
							desc = _context.t1.description || _context.t1.message;

							if (_context.t1.name == 'ReferenceError' || /Invalid left-hand side in/.test(desc)) eo = new ReferenceError(_context.t1.description, _context.t1.fileName, _context.t1.lineNumber);else eo = new SyntaxError(_context.t1.description, _context.t1.fileName, _context.t1.lineNumber);

							if (_context.t1.stack) eo.stack = _context.t1.stack;
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.THROW, Value.fromNative(eo, scope.realm)));

						case 18:
							_context.next = 20;
							return EvaluatorInstruction.branch('eval', ast, scope);

						case 20:
							bak = _context.sent;
							return _context.abrupt('return', bak);

						case 22:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this, [[7, 12]]);
		})
	}]);
	return EvalFunction;
}(ObjectValue);

var timeoutIds = 0;;

var SetTimeoutFunction = function (_ObjectValue2) {
	(0, _inherits3.default)(SetTimeoutFunction, _ObjectValue2);

	function SetTimeoutFunction(realm, runtime, isSetInterval) {
		(0, _classCallCheck3.default)(this, SetTimeoutFunction);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (SetTimeoutFunction.__proto__ || (0, _getPrototypeOf2.default)(SetTimeoutFunction)).call(this, realm));

		_this2.setPrototype(realm.FunctionPrototype);
		_this2.runtime = runtime;
		_this2.isSetInterval = isSetInterval;
		return _this2;
	}

	(0, _createClass3.default)(SetTimeoutFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope) {
			var engine, ev, evaluator, time, id, isSetInterval, o;
			return _regenerator2.default.wrap(function call$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							engine = scope.realm.engine;
							ev = args[0];
							evaluator = new Evaluator(scope.realm, null, scope.global);
							time = args.length > 1 ? 0 + args[1].toNative() : 0;
							id = timeoutIds++;
							isSetInterval = this.isSetInterval;

							if (!(!ev || ev.jsTypeName !== "function" && ev.jsTypeName !== "string")) {
								_context3.next = 8;
								break;
							}

							return _context3.abrupt('return', new CompletionRecord(CompletionRecord.THROW, Value.fromNative(new TypeError('"callback" argument must be a function'), scope.realm)));

						case 8:

							evaluator.pushFrame({ generator: /*#__PURE__*/_regenerator2.default.mark(function _callee() {
									var tv, oast, ast;
									return _regenerator2.default.wrap(function _callee$(_context2) {
										while (1) {
											switch (_context2.prev = _context2.next) {
												case 0:
													if (false) {}

													_context2.t0 = esper.FutureValue;
													return _context2.delegateYield(engine.runtime.wait(time), 't1', 3);

												case 3:
													_context2.t2 = _context2.t1;
													_context2.next = 6;
													return _context2.t0.make.call(_context2.t0, _context2.t2);

												case 6:
													if (!(ev.jsTypeName == "function")) {
														_context2.next = 11;
														break;
													}

													tv = scope.strict ? esper.undef : scope.global.thiz;
													return _context2.delegateYield(ev.call(tv, args.slice(2), scope.global), 't3', 9);

												case 9:
													_context2.next = 20;
													break;

												case 11:
													if (!(ev.jsTypeName == "string")) {
														_context2.next = 20;
														break;
													}

													_context2.t4 = scope.realm;
													return _context2.delegateYield(ev.toStringNative(), 't5', 14);

												case 14:
													_context2.t6 = _context2.t5;
													_context2.t7 = { loc: true };
													oast = _context2.t4.parser.call(_context2.t4, _context2.t6, _context2.t7);
													ast = ASTPreprocessor.process(oast);
													_context2.next = 20;
													return EvaluatorInstruction.branch('eval', ast, scope.global);

												case 20:
													if (isSetInterval) {
														_context2.next = 22;
														break;
													}

													return _context2.abrupt('break', 24);

												case 22:
													_context2.next = 0;
													break;

												case 24:
													return _context2.abrupt('return', Value.undef);

												case 25:
												case 'end':
													return _context2.stop();
											}
										}
									}, _callee, this);
								})(), type: 'invoke' });

							o = evaluator.generator();

							evaluator.id = id;
							engine.threads.push(o);
							return _context3.abrupt('return', Value.fromNative(id));

						case 13:
						case 'end':
							return _context3.stop();
					}
				}
			}, call, this);
		})
	}]);
	return SetTimeoutFunction;
}(ObjectValue);

var ClearTimeoutFunction = function (_ObjectValue3) {
	(0, _inherits3.default)(ClearTimeoutFunction, _ObjectValue3);

	function ClearTimeoutFunction(realm, runtime) {
		(0, _classCallCheck3.default)(this, ClearTimeoutFunction);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (ClearTimeoutFunction.__proto__ || (0, _getPrototypeOf2.default)(ClearTimeoutFunction)).call(this, realm));

		_this3.setPrototype(realm.FunctionPrototype);
		_this3.runtime = runtime;
		return _this3;
	}

	(0, _createClass3.default)(ClearTimeoutFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope) {
			var target, engine, i, thr;
			return _regenerator2.default.wrap(function call$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							if (!(args.length < 1)) {
								_context4.next = 2;
								break;
							}

							return _context4.abrupt('return', Value.undef);

						case 2:
							return _context4.delegateYield(args[0].toIntNative(), 't0', 3);

						case 3:
							target = _context4.t0;
							engine = scope.realm.engine;
							i = 0;

						case 6:
							if (!(i < engine.threads.length)) {
								_context4.next = 14;
								break;
							}

							if (!(engine.threads[i].evaluator.id == target)) {
								_context4.next = 11;
								break;
							}

							thr = engine.threads.splice(i, 1);

							thr[0].evaluator.dispose.map(function (x) {
								return x();
							});
							return _context4.abrupt('return', Value.fromNative(true));

						case 11:
							++i;
							_context4.next = 6;
							break;

						case 14:
							return _context4.abrupt('return', Value.fromNative(false));

						case 15:
						case 'end':
							return _context4.stop();
					}
				}
			}, call, this);
		})
	}]);
	return ClearTimeoutFunction;
}(ObjectValue);

/**
 * Represents a javascript execution environment including
 * it's scopes and standard libraries.
 */


var Realm = function () {
	(0, _createClass3.default)(Realm, [{
		key: 'print',
		value: function print() {
			console.log.apply(console, arguments);
		}
	}, {
		key: 'write',
		value: function write() {
			this.print.apply(this, arguments);
		}
	}, {
		key: 'parser',
		value: function parser(code, options) {
			if (!esper.languages[this.language]) {
				throw new Error('Unknown language ' + this.language + '. Load the lang-' + this.language + ' plugin?');
			}
			return esper.languages[this.language].parser(code, options);
		}
	}, {
		key: 'makeLiteralValue',
		value: function makeLiteralValue(v, n) {
			var lang = esper.languages[this.language];
			if (lang && lang.makeLiteralValue) {
				var langv = lang.makeLiteralValue(v, this, n);
				if (langv) return langv;
			}
			return this.fromNative(v, n);
		}
	}]);

	function Realm(options, engine) {
		(0, _classCallCheck3.default)(this, Realm);

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

		var scope = new Scope(this);
		scope.object.clazz = 'global';
		scope.strict = options.strict || false;
		var that = this;
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
		this.importCache = new _weakMap2.default();
		/** @type {Scope} */
		this.globalScope = scope;

		var lang = esper.languages[this.language];
		if (lang && lang.setupRealm) lang.setupRealm(this);
	}

	(0, _createClass3.default)(Realm, [{
		key: 'lookupWellKnown',
		value: function lookupWellKnown(v) {
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
	}, {
		key: 'lookupWellKnownByName',
		value: function lookupWellKnownByName(v) {
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
	}, {
		key: 'fromNative',
		value: function fromNative(native, x) {
			return Value.fromNative(native, this);
		}
	}, {
		key: 'import',
		value: function _import(native, modeHint) {
			if (native instanceof Value) return native;
			if (native === undefined) return Value.undef;

			var prim = Value.fromPrimativeNative(native);
			if (prim) return prim;

			//if ( this.importCache.has(native) ) {
			//	return this.importCache.get(native);
			//}

			if (Value.hasBookmark(native)) {
				return Value.getBookmark(native);
			}

			var result = void 0;
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
	}]);
	return Realm;
}();

Realm.prototype.makeForForeignObject = Realm.prototype.import;

module.exports = Realm;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyDescriptor = __webpack_require__(181);

var Value = __webpack_require__(153);
var ObjectValue = __webpack_require__(180);

var Scope = function () {
	function Scope(realm) {
		(0, _classCallCheck3.default)(this, Scope);

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


	(0, _createClass3.default)(Scope, [{
		key: 'get',
		value: function get(name) {
			//Fast property access in the common case.
			var prop = this.object.properties[name];
			if (!prop) return Value.undef;
			if (!prop.getter) return prop.value;
			return this.object.getImmediate(name);
		}
	}, {
		key: 'ref',
		value: function ref(name) {
			var _this = this;

			var vhar = this.object.properties[name];
			if (!vhar) return undefined;
			var that = this;
			var o = {
				setValue: vhar.setValue.bind(vhar, this),
				getValue: vhar.getValue.bind(vhar, this),
				isVariable: !!vhar.variable
			};

			if (this.global.object.properties[name] === vhar) {
				o.del = function (s) {
					return _this.global.object.delete(name, s);
				};
			}

			return o;
		}
	}, {
		key: 'add',
		value: function add(name, value) {
			this.writeTo.setImmediate(name, value);
			this.writeToBlock.properties[name].variable = true;
		}
	}, {
		key: 'addBlock',
		value: function addBlock(name, value) {
			this.writeToBlock.setImmediate(name, value);
			this.writeToBlock.properties[name].variable = true;
		}
	}, {
		key: 'addConst',
		value: function addConst(name, value) {
			this.set(name, value);
			this.writeToBlock.properties[name].writable = false;
			this.writeToBlock.properties[name].configurable = false;
		}

		/**
   * Set the identifier in its nearest scope, or create a global.
   * @param {string} name - Identifier to retreive
   * @param {Value} value - New vaalue of variable
   */

	}, {
		key: 'set',
		value: function set(name, value) {
			return this.put(name, value);
		}
	}, {
		key: 'has',
		value: function has(name) {
			return this.object.has(name);
		}

		/**
   * Set the identifier in its nearest scope, or create a global.
   * @param {string} name - Identifier to retreive
   * @param {Value} value - New vaalue of variable
   * @param {Scope} s - Code scope to run setter functions in
   */

	}, {
		key: 'put',
		value: function put(name, value, s) {
			var variable = this.object.properties[name];
			if (variable) {
				return variable.setValue(this.object, value, s);
			}
			var v = new PropertyDescriptor(value, this);
			this.writeTo.properties[name] = v;
			return Value.undef.fastGen();
		}
	}, {
		key: 'createChild',
		value: function createChild() {
			var child = new Scope(this.realm);
			child.object.eraseAndSetPrototype(this.object);
			child.parent = this;
			child.strict = this.strict;
			child.global = this.global;
			child.realm = this.realm;
			child.top = this.top;
			return child;
		}
	}, {
		key: 'createBlockChild',
		value: function createBlockChild() {
			var c = this.createChild();
			c.thiz = this.thiz;
			c.writeTo = this.writeTo;
			c.parent = this.parent;
			return c;
		}
	}, {
		key: 'fromNative',
		value: function fromNative(value, x) {
			return this.realm.fromNative(value, x);
		}
	}, {
		key: 'getVariableNames',
		value: function getVariableNames() {
			var list = [];
			for (var o in this.object.properties) {
				list.push(o);
			}return list;
		}
	}]);
	return Scope;
}();

module.exports = Scope;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = __webpack_require__(119);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);
var ArrayValue = __webpack_require__(192);

function invoke(target, thiz, args) {
	return Function.prototype.apply.call(target, thiz, args);
}

function invokeAsNew(target, args) {
	if (target.bind) {
		var bindArgs = [null].concat(args);
		return new (target.bind.apply(target, bindArgs))();
	} else {
		return invoke(target, null, args);
	}
}

/**
 * Represents a value that maps directly to an untrusted local value.
 */

var LinkValue = function (_Value) {
	(0, _inherits3.default)(LinkValue, _Value);

	function LinkValue(value, realm) {
		(0, _classCallCheck3.default)(this, LinkValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (LinkValue.__proto__ || (0, _getPrototypeOf2.default)(LinkValue)).call(this));

		_this.native = value;
		_this.realm = realm;
		return _this;
	}

	(0, _createClass3.default)(LinkValue, [{
		key: 'ref',
		value: function ref(name, s) {

			var that = this;
			var out = (0, _create2.default)(null);

			out.getValue = /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.delegateYield(that.get(name, s), 't0', 1);

							case 1:
								return _context.abrupt('return', _context.t0);

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			});
			out.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee2(to, s) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								return _context2.delegateYield(that.set(name, to, s), 't0', 1);

							case 1:
								return _context2.abrupt('return', _context2.t0);

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			});
			out.del = function () {
				return false;
			};

			return out;
		}
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, value, s, extra) {
			return _regenerator2.default.wrap(function set$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							this.native[name] = value.toNative();

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'toNative',
		value: function toNative() {
			return this.native;
		}
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', this.native.toString());

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'makeLink',
		value: function makeLink(value) {
			return this.realm.import(value, this.linkKind);
		}
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', this.makeLink(this.native == other.toNative()));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', this.makeLink(this.native === other.toNative()));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.abrupt('return', this.makeLink(this.native + other.toNative()));

						case 1:
						case 'end':
							return _context7.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'subtract',
		value: /*#__PURE__*/_regenerator2.default.mark(function subtract(other) {
			return _regenerator2.default.wrap(function subtract$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', this.makeLink(this.native - other.toNative()));

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, subtract, this);
		})
	}, {
		key: 'multiply',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply(other) {
			return _regenerator2.default.wrap(function multiply$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.abrupt('return', this.makeLink(this.native * other.toNative()));

						case 1:
						case 'end':
							return _context9.stop();
					}
				}
			}, multiply, this);
		})
	}, {
		key: 'divide',
		value: /*#__PURE__*/_regenerator2.default.mark(function divide(other) {
			return _regenerator2.default.wrap(function divide$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', this.makeLink(this.native / other.toNative()));

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, divide, this);
		})
	}, {
		key: 'mod',
		value: /*#__PURE__*/_regenerator2.default.mark(function mod(other) {
			return _regenerator2.default.wrap(function mod$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this.makeLink(this.native % other.toNative()));

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, mod, this);
		})
	}, {
		key: 'shiftLeft',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftLeft(other) {
			return _regenerator2.default.wrap(function shiftLeft$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.abrupt('return', this.makeLink(this.native << other.toNative()));

						case 1:
						case 'end':
							return _context12.stop();
					}
				}
			}, shiftLeft, this);
		})
	}, {
		key: 'shiftRight',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRight(other) {
			return _regenerator2.default.wrap(function shiftRight$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.abrupt('return', this.makeLink(this.native >> other.toNative()));

						case 1:
						case 'end':
							return _context13.stop();
					}
				}
			}, shiftRight, this);
		})
	}, {
		key: 'shiftRightZF',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRightZF(other) {
			return _regenerator2.default.wrap(function shiftRightZF$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							return _context14.abrupt('return', this.makeLink(this.native >>> other.toNative()));

						case 1:
						case 'end':
							return _context14.stop();
					}
				}
			}, shiftRightZF, this);
		})
	}, {
		key: 'bitAnd',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitAnd(other) {
			return _regenerator2.default.wrap(function bitAnd$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							return _context15.abrupt('return', this.makeLink(this.native & other.toNative()));

						case 1:
						case 'end':
							return _context15.stop();
					}
				}
			}, bitAnd, this);
		})
	}, {
		key: 'bitOr',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitOr(other) {
			return _regenerator2.default.wrap(function bitOr$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							return _context16.abrupt('return', this.makeLink(this.native | other.toNative()));

						case 1:
						case 'end':
							return _context16.stop();
					}
				}
			}, bitOr, this);
		})
	}, {
		key: 'bitXor',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitXor(other) {
			return _regenerator2.default.wrap(function bitXor$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							return _context17.abrupt('return', this.makeLink(this.native ^ other.toNative()));

						case 1:
						case 'end':
							return _context17.stop();
					}
				}
			}, bitXor, this);
		})
	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							return _context18.abrupt('return', this.makeLink(this.native > other.toNative()));

						case 1:
						case 'end':
							return _context18.stop();
					}
				}
			}, gt, this);
		})
	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							return _context19.abrupt('return', this.makeLink(this.native < other.toNative()));

						case 1:
						case 'end':
							return _context19.stop();
					}
				}
			}, lt, this);
		})
	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							return _context20.abrupt('return', this.makeLink(this.native >= other.toNative()));

						case 1:
						case 'end':
							return _context20.stop();
					}
				}
			}, gte, this);
		})
	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							return _context21.abrupt('return', this.makeLink(this.native <= other.toNative()));

						case 1:
						case 'end':
							return _context21.stop();
					}
				}
			}, lte, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			return _regenerator2.default.wrap(function inOperator$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							return _context22.abrupt('return', this.makeLink(other.toNative() in this.native));

						case 1:
						case 'end':
							return _context22.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							return _context23.abrupt('return', this.makeLink(this.native instanceof other.toNative()));

						case 1:
						case 'end':
							return _context23.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							return _context24.abrupt('return', this.makeLink(+this.native));

						case 1:
						case 'end':
							return _context24.stop();
					}
				}
			}, unaryPlus, this);
		})
	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							return _context25.abrupt('return', this.makeLink(-this.native));

						case 1:
						case 'end':
							return _context25.stop();
					}
				}
			}, unaryMinus, this);
		})
	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							return _context26.abrupt('return', this.makeLink(!this.native));

						case 1:
						case 'end':
							return _context26.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm, origional) {
			var desc;
			return _regenerator2.default.wrap(function get$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							desc = (0, _getOwnPropertyDescriptor2.default)(this.native, name);

							if (!desc) {
								_context27.next = 5;
								break;
							}

							if (!(desc.get && origional)) {
								_context27.next = 4;
								break;
							}

							return _context27.abrupt('return', this.makeLink(origional.native[name], realm));

						case 4:
							return _context27.abrupt('return', this.makeLink(this.native[name], realm));

						case 5:
							return _context27.delegateYield(this.makeLink((0, _getPrototypeOf2.default)(this.native), realm).get(name, realm, origional || this), 't0', 6);

						case 6:
							return _context27.abrupt('return', _context27.t0);

						case 7:
						case 'end':
							return _context27.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							_context28.t0 = _regenerator2.default.keys(this.native);

						case 1:
							if ((_context28.t1 = _context28.t0()).done) {
								_context28.next = 7;
								break;
							}

							p = _context28.t1.value;
							_context28.next = 5;
							return this.makeLink(p);

						case 5:
							_context28.next = 1;
							break;

						case 7:
							return _context28.abrupt('return');

						case 8:
						case 'end':
							return _context28.stop();
					}
				}
			}, observableProperties, this);
		})

		/**
   *
   * @param {Value} thiz
   * @param {Value[]} args
   * @param {Scope} s
   */

	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s, ext) {
			var realArgs, i, asConstructor, result, val, _result;

			return _regenerator2.default.wrap(function call$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							realArgs = new Array(args.length);

							for (i = 0; i < args.length; ++i) {
								realArgs[i] = args[i].toNative();
							}
							_context29.prev = 2;
							asConstructor = ext && ext.asConstructor;
							result = void 0;

							if (asConstructor) result = invokeAsNew(this.native, realArgs);else result = invoke(this.native, thiz ? thiz.toNative() : undefined, realArgs);
							val = this.makeLink(result, s.realm);

							if (typeof s.realm.options.linkValueCallReturnValueWrapper === 'function') {
								val = s.realm.options.linkValueCallReturnValueWrapper(val);
							}
							return _context29.abrupt('return', val);

						case 11:
							_context29.prev = 11;
							_context29.t0 = _context29['catch'](2);
							_result = this.makeLink(_context29.t0, s.realm);
							return _context29.abrupt('return', new CompletionRecord(CompletionRecord.THROW, _result));

						case 15:
						case 'end':
							return _context29.stop();
					}
				}
			}, call, this, [[2, 11]]);
		})
	}, {
		key: 'getPropertyValueMap',
		value: function getPropertyValueMap() {
			var list = {};
			for (var p in this.native) {
				var v = this.native[p];
				list[p] = this.makeLink(v);
			}
			return list;
		}
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.abrupt('return', Value.fromNative(Number(this.native)));

						case 1:
						case 'end':
							return _context30.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							return _context31.abrupt('return', Value.fromNative(String(this.native)));

						case 1:
						case 'end':
							return _context31.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'getPrototypeProperty',
		value: function getPrototypeProperty() {
			return this.makeLink(this.native.prototype);
		}
	}, {
		key: 'getPrototype',
		value: function getPrototype(realm) {
			return realm.ObjectPrototype;
		}
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							return _context32.abrupt('return', Value.undef);

						case 1:
						case 'end':
							return _context32.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context33) {
				while (1) {
					switch (_context33.prev = _context33.next) {
						case 0:
							_context33.t0 = preferedType;
							_context33.next = _context33.t0 === 'string' ? 3 : 4;
							break;

						case 3:
							return _context33.abrupt('return', Value.fromNative(this.native.toString()));

						case 4:
							return _context33.abrupt('return', Value.fromNative(this.native.valueOf()));

						case 5:
						case 'end':
							return _context33.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'isCallable',
		get: function get() {
			return typeof this.native === 'function';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return '[Link: ' + this.native + ']';
		}
	}, {
		key: 'truthy',
		get: function get() {
			return !!this.native;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return (0, _typeof3.default)(this.native);
		}
	}, {
		key: 'linkKind',
		get: function get() {
			return 'link';
		}
	}], [{
		key: 'make',
		value: function make(native, realm) {
			var wellKnown = realm.lookupWellKnown(native);
			if (wellKnown) return wellKnown;

			if (Array.isArray(native)) {
				var ia = new Array(native.length);
				for (var i = 0; i < native.length; ++i) {
					ia[i] = LinkValue.make(native[i], realm);
				}
				return ArrayValue.make(ia, realm);
			}

			return new LinkValue(native, realm);
		}
	}]);
	return LinkValue;
}(Value);

module.exports = LinkValue;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(118);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakSet = __webpack_require__(202);

var _weakSet2 = _interopRequireDefault(_weakSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var LinkValue = __webpack_require__(200);
var CompletionRecord = __webpack_require__(175);
var ArrayValue = __webpack_require__(192);
var EvaluatorInstruction = __webpack_require__(193);
/**
 * Represents a value that maps directly to an untrusted local value.
 */

var privilegedThreads = new _weakSet2.default();

var SmartLinkValue = function (_LinkValue) {
	(0, _inherits3.default)(SmartLinkValue, _LinkValue);

	function SmartLinkValue(value, realm) {
		(0, _classCallCheck3.default)(this, SmartLinkValue);
		return (0, _possibleConstructorReturn3.default)(this, (SmartLinkValue.__proto__ || (0, _getPrototypeOf2.default)(SmartLinkValue)).call(this, value, realm));
	}

	(0, _createClass3.default)(SmartLinkValue, [{
		key: 'allowRead',
		value: function allowRead(name, e) {
			if (e && privilegedThreads.has(e)) return true;
			//if ( name === 'call' ) return true;
			//return true;
			if (name.indexOf('esper_') === 0) return true;
			if (name === 'hasOwnProperty') return true;
			var props = this.apiProperties;
			if (props === null) return true;
			return props.indexOf(name) !== -1;
		}
	}, {
		key: 'allowWrite',
		value: function allowWrite(name, e) {
			if (e && privilegedThreads.has(e)) return true;
			if (name.indexOf('esper_') === 0) name = name.substr(6);
			var allowed = [];
			var native = this.native;
			if (native.apiUserProperties) {
				Array.prototype.push.apply(allowed, native.apiUserProperties);
			}

			return allowed.indexOf(name) != -1;
		}
	}, {
		key: 'getPropertyValueMap',
		value: function getPropertyValueMap() {
			var list = {};
			for (var p in this.native) {
				var v = this.native[p];
				if (this.allowRead(p)) {
					list[p] = this.makeLink(v);
				}
			}
			return list;
		}
	}, {
		key: 'makeLink',
		value: function makeLink(value) {
			return this.realm.import(value, 'smart');
		}
	}, {
		key: 'ref',
		value: function ref(name, s) {
			var native = this.native;
			var owner = this;
			if ('esper_' + name in native) name = 'esper_' + name;

			return (0, _get3.default)(SmartLinkValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(SmartLinkValue.prototype), 'ref', this).call(this, name, s);
		}
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, value, s) {
			var evaluator, native;
			return _regenerator2.default.wrap(function set$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return EvaluatorInstruction.getEvaluator;

						case 2:
							evaluator = _context.sent;
							native = this.native;

							if (!(name in this.native)) {
								_context.next = 11;
								break;
							}

							if (this.allowWrite(name, evaluator)) {
								_context.next = 9;
								break;
							}

							_context.next = 8;
							return CompletionRecord.makeTypeError(s.realm, "Can't write to protected property: " + name);

						case 8:
							return _context.abrupt('return', _context.sent);

						case 9:
							_context.next = 13;
							break;

						case 11:
							if (!native.apiUserProperties) native.apiUserProperties = [];

							if (native.apiUserProperties.indexOf(name) == -1) {
								native.apiUserProperties.push(name);
							}

						case 13:
							return _context.delegateYield((0, _get3.default)(SmartLinkValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(SmartLinkValue.prototype), 'set', this).call(this, name, value, s), 't0', 14);

						case 14:
							return _context.abrupt('return', _context.t0);

						case 15:
						case 'end':
							return _context.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm, origional) {
			var evaluator, native;
			return _regenerator2.default.wrap(function get$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return EvaluatorInstruction.getEvaluator;

						case 2:
							evaluator = _context2.sent;
							native = this.native;

							if ('esper_' + name in this.native) name = 'esper_' + name;

							if (name in native) {
								_context2.next = 7;
								break;
							}

							return _context2.abrupt('return', Value.undef);

						case 7:
							if (this.allowRead(name, evaluator)) {
								_context2.next = 11;
								break;
							}

							_context2.next = 10;
							return CompletionRecord.makeTypeError(realm, "Can't read protected property: " + name);

						case 10:
							return _context2.abrupt('return', _context2.sent);

						case 11:
							return _context2.delegateYield((0, _get3.default)(SmartLinkValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(SmartLinkValue.prototype), 'get', this).call(this, name, realm, origional), 't0', 12);

						case 12:
							return _context2.abrupt('return', _context2.t0);

						case 13:
						case 'end':
							return _context2.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'apiProperties',
		get: function get() {
			var allowed = [];
			var native = this.native;

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
	}, {
		key: 'debugString',
		get: function get() {
			var props = this.apiProperties;
			return '[SmartLink: ' + this.native + ', props: ' + (props ? props.join(',') : '[none]') + ']';
		}
	}], [{
		key: 'make',
		value: function make(native, realm) {
			var wellKnown = realm.lookupWellKnown(native);
			if (wellKnown) return wellKnown;

			if (Array.isArray(native)) {
				var ia = new Array(native.length);
				for (var i = 0; i < native.length; ++i) {
					ia[i] = realm.import(native[i], 'smart');
				}
				return ArrayValue.make(ia, realm);
			}

			return new SmartLinkValue(native, realm);
		}
	}]);
	return SmartLinkValue;
}(LinkValue);

SmartLinkValue.makeThreadPrivileged = function (e) {
	privilegedThreads.add(e);
};

SmartLinkValue.isThreadPrivileged = function (e) {
	return privilegedThreads.has(e);
};

SmartLinkValue.makeThreadPrivlaged = SmartLinkValue.makeThreadPrivileged;

module.exports = SmartLinkValue;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(203), __esModule: true };

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(63);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
module.exports = __webpack_require__(15).WeakSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(168);
var validate = __webpack_require__(169);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(170)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(172)('WeakSet');


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(174)('WeakSet');


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(183);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esper = __webpack_require__(122);
var compiler = void 0;

function invokeCB(o, name) {
	if (!(name in o)) return;
	var args = Array.prototype.slice.call(arguments, 2);
	o[name].apply(o, args);
}

function detectStrict(body) {
	if (!body || body.length < 1) return;
	var first = body[0];
	if (first.type === 'ExpressionStatement') {
		var exp = first.expression;
		if (exp.type === 'Literal' && exp.value === 'use strict') {
			return true;
		}
	}
}

var ASTNode = function () {
	function ASTNode(o) {
		(0, _classCallCheck3.default)(this, ASTNode);

		this.visits = 0;
		this.dispatch = false;
		if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object') {
			for (var k in o) {
				this[k] = o[k];
			}
		}
	}

	(0, _createClass3.default)(ASTNode, [{
		key: 'addHiddenProperty',
		value: function addHiddenProperty(name, value) {
			(0, _defineProperty2.default)(this, name, {
				value: value,
				configurable: true
			});
		}
	}, {
		key: 'source',
		value: function source() {
			if (!this._source) return;
			if (!this.range) return;
			return this._source.substring(this.range[0], this.range[1]);
		}
	}, {
		key: 'toString',
		value: function toString() {
			var _this = this;

			var extra = (0, _keys2.default)(this).map(function (k) {
				var v = _this[k];
				if (v === null || typeof v === 'function') return;
				if (k == 'range' || k == 'loc' || k == 'nodeID') return;
				if (v instanceof ASTNode) return k + ': [ASTNode: ' + v.type + ']';
				if (Array.isArray(v)) return '[...]';else return k + ': ' + (0, _stringify2.default)(v);
			}).filter(function (v) {
				return !!v;
			}).join(', ');
			return '[ASTNode: ' + this.type + ' ' + extra + ']';
		}
	}]);
	return ASTNode;
}();

var ASTPreprocessor = function () {
	(0, _createClass3.default)(ASTPreprocessor, null, [{
		key: 'clone',
		value: function clone(ast, extra) {
			return JSON.parse((0, _stringify2.default)(ast), function (n, o) {
				if (o === null) return null;
				if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) !== 'object') return o;
				if (Array.isArray(o)) {
					return o;
				} else if (o.type) {
					var z = new ASTNode(o);
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
	}, {
		key: 'process',
		value: function process(ast, extra) {
			if ((typeof ast === 'undefined' ? 'undefined' : (0, _typeof3.default)(ast)) !== 'object') throw new TypeError('Provided AST is invalid (type is ' + (typeof ast === 'undefined' ? 'undefined' : (0, _typeof3.default)(ast)) + ')');
			var nast = ASTPreprocessor.clone(ast, extra);

			var options = extra || {};
			var cbs = new EsperASTInstructions(ast, options);
			new ASTPreprocessor(nast, extra).start(cbs);
			return nast;
		}
	}, {
		key: 'walker',
		value: /*#__PURE__*/_regenerator2.default.mark(function walker(ast, cbs, parent) {
			var me, _iterator, _isArray, _i, _ref, e, _iterator2, _isArray2, _i2, _ref2, _e, _iterator3, _isArray3, _i3, _ref3, _e2, _iterator4, _isArray4, _i4, _ref4, _e3, _iterator5, _isArray5, _i5, _ref5, _e4, _iterator6, _isArray6, _i6, _ref6, _e5, _iterator7, _isArray7, _i7, _ref7, _e6, p, n;

			return _regenerator2.default.wrap(function walker$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							me = function me(a) {
								return ASTPreprocessor.walker(a, cbs, ast);
							};

							if (!(!ast instanceof ASTNode)) {
								_context.next = 3;
								break;
							}

							throw new TypeError("Walked a non ASTNode");

						case 3:
							if (parent) ast.addHiddenProperty('parent', parent);
							invokeCB(cbs, 'enter', ast);
							invokeCB(cbs, 'enter' + ast.type, ast);
							_context.t0 = ast.type;
							_context.next = _context.t0 === 'Program' ? 9 : _context.t0 === 'BlockStatement' ? 25 : _context.t0 === 'NewExpression' ? 41 : _context.t0 === 'CallExpression' ? 41 : _context.t0 === 'WhileStatement' ? 58 : _context.t0 === 'DoWhileStatement' ? 58 : _context.t0 === 'VariableDeclaration' ? 62 : _context.t0 === 'VariableDeclarator' ? 78 : _context.t0 === 'FunctionDeclaration' ? 82 : _context.t0 === 'ClassBody' ? 87 : _context.t0 === 'ArrowFunctionExpression' ? 103 : _context.t0 === 'FunctionExpression' ? 103 : _context.t0 === 'ClassMethod' ? 103 : _context.t0 === 'Identifier' ? 107 : _context.t0 === 'ArrayExpression' ? 108 : _context.t0 === 'ObjectExpression' ? 126 : _context.t0 === 'Property' ? 144 : 147;
							break;

						case 9:
							_iterator = ast.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 10:
							if (!_isArray) {
								_context.next = 16;
								break;
							}

							if (!(_i >= _iterator.length)) {
								_context.next = 13;
								break;
							}

							return _context.abrupt('break', 24);

						case 13:
							_ref = _iterator[_i++];
							_context.next = 20;
							break;

						case 16:
							_i = _iterator.next();

							if (!_i.done) {
								_context.next = 19;
								break;
							}

							return _context.abrupt('break', 24);

						case 19:
							_ref = _i.value;

						case 20:
							e = _ref;
							return _context.delegateYield(me(e), 't1', 22);

						case 22:
							_context.next = 10;
							break;

						case 24:
							return _context.abrupt('break', 172);

						case 25:
							_iterator2 = ast.body, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

						case 26:
							if (!_isArray2) {
								_context.next = 32;
								break;
							}

							if (!(_i2 >= _iterator2.length)) {
								_context.next = 29;
								break;
							}

							return _context.abrupt('break', 40);

						case 29:
							_ref2 = _iterator2[_i2++];
							_context.next = 36;
							break;

						case 32:
							_i2 = _iterator2.next();

							if (!_i2.done) {
								_context.next = 35;
								break;
							}

							return _context.abrupt('break', 40);

						case 35:
							_ref2 = _i2.value;

						case 36:
							_e = _ref2;
							return _context.delegateYield(me(_e), 't2', 38);

						case 38:
							_context.next = 26;
							break;

						case 40:
							return _context.abrupt('break', 172);

						case 41:
							_iterator3 = ast.arguments, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

						case 42:
							if (!_isArray3) {
								_context.next = 48;
								break;
							}

							if (!(_i3 >= _iterator3.length)) {
								_context.next = 45;
								break;
							}

							return _context.abrupt('break', 56);

						case 45:
							_ref3 = _iterator3[_i3++];
							_context.next = 52;
							break;

						case 48:
							_i3 = _iterator3.next();

							if (!_i3.done) {
								_context.next = 51;
								break;
							}

							return _context.abrupt('break', 56);

						case 51:
							_ref3 = _i3.value;

						case 52:
							_e2 = _ref3;
							return _context.delegateYield(me(_e2), 't3', 54);

						case 54:
							_context.next = 42;
							break;

						case 56:
							return _context.delegateYield(me(ast.callee), 't4', 57);

						case 57:
							return _context.abrupt('break', 172);

						case 58:
							if (!ast.test) {
								_context.next = 60;
								break;
							}

							return _context.delegateYield(me(ast.test), 't5', 60);

						case 60:
							return _context.delegateYield(me(ast.body), 't6', 61);

						case 61:
							return _context.abrupt('break', 172);

						case 62:
							_iterator4 = ast.declarations, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

						case 63:
							if (!_isArray4) {
								_context.next = 69;
								break;
							}

							if (!(_i4 >= _iterator4.length)) {
								_context.next = 66;
								break;
							}

							return _context.abrupt('break', 77);

						case 66:
							_ref4 = _iterator4[_i4++];
							_context.next = 73;
							break;

						case 69:
							_i4 = _iterator4.next();

							if (!_i4.done) {
								_context.next = 72;
								break;
							}

							return _context.abrupt('break', 77);

						case 72:
							_ref4 = _i4.value;

						case 73:
							_e3 = _ref4;
							return _context.delegateYield(me(_e3), 't7', 75);

						case 75:
							_context.next = 63;
							break;

						case 77:
							return _context.abrupt('break', 172);

						case 78:
							invokeCB(cbs, 'decl', ast);

							if (!ast.init) {
								_context.next = 81;
								break;
							}

							return _context.delegateYield(me(ast.init), 't8', 81);

						case 81:
							return _context.abrupt('break', 172);

						case 82:
							invokeCB(cbs, 'decl', ast);
							invokeCB(cbs, 'enterFunction', ast);
							return _context.delegateYield(me(ast.body), 't9', 85);

						case 85:
							invokeCB(cbs, 'exitFunction', ast);
							return _context.abrupt('break', 172);

						case 87:
							_iterator5 = ast.body, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

						case 88:
							if (!_isArray5) {
								_context.next = 94;
								break;
							}

							if (!(_i5 >= _iterator5.length)) {
								_context.next = 91;
								break;
							}

							return _context.abrupt('break', 102);

						case 91:
							_ref5 = _iterator5[_i5++];
							_context.next = 98;
							break;

						case 94:
							_i5 = _iterator5.next();

							if (!_i5.done) {
								_context.next = 97;
								break;
							}

							return _context.abrupt('break', 102);

						case 97:
							_ref5 = _i5.value;

						case 98:
							_e4 = _ref5;
							return _context.delegateYield(me(_e4), 't10', 100);

						case 100:
							_context.next = 88;
							break;

						case 102:
							return _context.abrupt('break', 172);

						case 103:
							invokeCB(cbs, 'enterFunction', ast);
							return _context.delegateYield(me(ast.body), 't11', 105);

						case 105:
							invokeCB(cbs, 'exitFunction', ast);
							return _context.abrupt('break', 172);

						case 107:
							return _context.abrupt('break', 172);

						case 108:
							if (!ast.elements) {
								_context.next = 125;
								break;
							}

							_iterator6 = ast.elements, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

						case 110:
							if (!_isArray6) {
								_context.next = 116;
								break;
							}

							if (!(_i6 >= _iterator6.length)) {
								_context.next = 113;
								break;
							}

							return _context.abrupt('break', 125);

						case 113:
							_ref6 = _iterator6[_i6++];
							_context.next = 120;
							break;

						case 116:
							_i6 = _iterator6.next();

							if (!_i6.done) {
								_context.next = 119;
								break;
							}

							return _context.abrupt('break', 125);

						case 119:
							_ref6 = _i6.value;

						case 120:
							_e5 = _ref6;

							if (!_e5) {
								_context.next = 123;
								break;
							}

							return _context.delegateYield(me(_e5), 't12', 123);

						case 123:
							_context.next = 110;
							break;

						case 125:
							return _context.abrupt('break', 172);

						case 126:
							if (!ast.properties) {
								_context.next = 143;
								break;
							}

							_iterator7 = ast.properties, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

						case 128:
							if (!_isArray7) {
								_context.next = 134;
								break;
							}

							if (!(_i7 >= _iterator7.length)) {
								_context.next = 131;
								break;
							}

							return _context.abrupt('break', 143);

						case 131:
							_ref7 = _iterator7[_i7++];
							_context.next = 138;
							break;

						case 134:
							_i7 = _iterator7.next();

							if (!_i7.done) {
								_context.next = 137;
								break;
							}

							return _context.abrupt('break', 143);

						case 137:
							_ref7 = _i7.value;

						case 138:
							_e6 = _ref7;

							if (!_e6) {
								_context.next = 141;
								break;
							}

							return _context.delegateYield(me(_e6), 't13', 141);

						case 141:
							_context.next = 128;
							break;

						case 143:
							return _context.abrupt('break', 172);

						case 144:
							return _context.delegateYield(me(ast.key), 't14', 145);

						case 145:
							return _context.delegateYield(me(ast.value), 't15', 146);

						case 146:
							return _context.abrupt('break', 172);

						case 147:
							_context.t16 = _regenerator2.default.keys(ast);

						case 148:
							if ((_context.t17 = _context.t16()).done) {
								_context.next = 172;
								break;
							}

							p = _context.t17.value;
							n = ast[p];

							if (!(p === 'parent')) {
								_context.next = 153;
								break;
							}

							return _context.abrupt('continue', 148);

						case 153:
							if (!(p === 'loc')) {
								_context.next = 155;
								break;
							}

							return _context.abrupt('continue', 148);

						case 155:
							if (!(p === 'range')) {
								_context.next = 157;
								break;
							}

							return _context.abrupt('continue', 148);

						case 157:
							if (!(p === 'type')) {
								_context.next = 159;
								break;
							}

							return _context.abrupt('continue', 148);

						case 159:
							if (!(p === 'nodeID')) {
								_context.next = 161;
								break;
							}

							return _context.abrupt('continue', 148);

						case 161:
							if (!(p === 'parentFunction')) {
								_context.next = 163;
								break;
							}

							return _context.abrupt('continue', 148);

						case 163:
							if (!(p === 'funcs')) {
								_context.next = 165;
								break;
							}

							return _context.abrupt('continue', 148);

						case 165:
							if (!(n === null)) {
								_context.next = 167;
								break;
							}

							return _context.abrupt('continue', 148);

						case 167:
							if (!(typeof n.type !== 'string')) {
								_context.next = 169;
								break;
							}

							return _context.abrupt('continue', 148);

						case 169:
							return _context.delegateYield(me(n), 't18', 170);

						case 170:
							_context.next = 148;
							break;

						case 172:

							invokeCB(cbs, 'exit' + ast.type, ast);
							invokeCB(cbs, 'exit', ast);

						case 174:
						case 'end':
							return _context.stop();
					}
				}
			}, walker, this);
		})
	}]);

	function ASTPreprocessor(ast) {
		(0, _classCallCheck3.default)(this, ASTPreprocessor);

		this.ast = ast;
	}

	(0, _createClass3.default)(ASTPreprocessor, [{
		key: 'start',
		value: function start(cbs) {
			var gen = ASTPreprocessor.walker(this.ast, cbs);
			for (var _iterator8 = gen, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
				var _ref8;

				if (_isArray8) {
					if (_i8 >= _iterator8.length) break;
					_ref8 = _iterator8[_i8++];
				} else {
					_i8 = _iterator8.next();
					if (_i8.done) break;
					_ref8 = _i8.value;
				}

				var x = _ref8;
			}
		}
	}]);
	return ASTPreprocessor;
}();

ASTPreprocessor.ASTNode = ASTNode;

var EsperASTInstructions = function () {
	function EsperASTInstructions(ast, options) {
		(0, _classCallCheck3.default)(this, EsperASTInstructions);


		if (!compiler && esper.plugins['jit']) {
			compiler = new esper.plugins['jit'].Compiler();
		}

		this.ast = ast;
		this.options = options;
		this.counter = 0;
		this.depth = 0;

		var globalScope = (0, _create2.default)(null);
		var globalVars = (0, _create2.default)(null);
		var globalFuncs = (0, _create2.default)(null);

		if (options.locals) {
			for (var _iterator9 = options.locals, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
				var _ref9;

				if (_isArray9) {
					if (_i9 >= _iterator9.length) break;
					_ref9 = _iterator9[_i9++];
				} else {
					_i9 = _iterator9.next();
					if (_i9.done) break;
					_ref9 = _i9.value;
				}

				var o = _ref9;
				globalScope[o] = true;
			}
		}

		this.scopeStack = [globalScope];
		this.varStack = [globalVars];
		this.funcStack = [globalFuncs];
	}

	(0, _createClass3.default)(EsperASTInstructions, [{
		key: 'log',
		value: function log() {
			var str = Array.prototype.join.call(arguments, ', ');
			var indent = new Array(this.depth).join('  ');
			//console.log(indent + str);
		}
	}, {
		key: 'enter',
		value: function enter(a) {
			++this.depth;
			if (this.options.markNonUser) {
				a.nonUserCode = true;
			}
			a.nodeID = this.counter++;
			this.log('Entering', a.type);
		}
	}, {
		key: 'enterIdentifier',
		value: function enterIdentifier(a) {
			var fn = this.funcStack[0];
			var parent = a.parent;
			if (parent.type == "MemberExpression" && !parent.computed && parent.property == a) {
				return;
			}
			if (parent.type == "Property" && parent.key == a) {
				return;
			}
			fn.refs[a.name] = true;
		}
	}, {
		key: 'decl',
		value: function decl(a) {
			if (a.parent.type == 'VariableDeclaration') {
				if (a.parent.kind != 'var') {
					var _stack = this.scopeStack[0];
					_stack[a.id.name] = a;
					return;
				}
			}
			if (a.type == 'FunctionDeclaration') return;
			var stack = this.varStack[0];
			stack[a.id.name] = a;
		}
	}, {
		key: 'enterProgram',
		value: function enterProgram(a) {
			var scope = (0, _create2.default)(this.scopeStack[0]);

			a.addHiddenProperty('refs', (0, _create2.default)(null));
			a.addHiddenProperty('vars', (0, _create2.default)(null));
			a.addHiddenProperty('funcs', (0, _create2.default)(null));
			a.addHiddenProperty('ss', scope);

			this.funcStack.unshift(a);
			this.scopeStack.unshift(scope);
			this.varStack.unshift(a.vars);

			this.mangleBody(a);

			var strict = detectStrict(a.body);
			if (strict !== undefined) a.strict = strict;
		}
	}, {
		key: 'enterThisExpression',
		value: function enterThisExpression(a) {
			a.srcName = 'this';
		}
	}, {
		key: 'enterLabeledStatement',
		value: function enterLabeledStatement(a) {
			a.body.label = a.label.name;
		}
	}, {
		key: 'exitArrayExpression',
		value: function exitArrayExpression(a) {
			a.srcName = '[' + a.elements.map(function (e) {
				return e ? e.srcName : '';
			}).join() + ']';
		}
	}, {
		key: 'mangleBody',
		value: function mangleBody(a) {
			function prehoist(s) {
				if (s.type === 'VariableDeclaration' && s.kind == 'var') {
					for (var _iterator10 = s.declarations, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
						var _ref10;

						if (_isArray10) {
							if (_i10 >= _iterator10.length) break;
							_ref10 = _iterator10[_i10++];
						} else {
							_i10 = _iterator10.next();
							if (_i10.done) break;
							_ref10 = _i10.value;
						}

						var decl = _ref10;

						a.vars[decl.id.name] = decl;
						a.ss[decl.id.name] = decl;
					}
				} else if (s.type === 'FunctionDeclaration') {
					a.vars[s.id.name] = s;
					a.ss[s.id.name] = s;
				}
			}

			if (a.body.type === 'BlockStatement') {
				for (var _iterator11 = a.body.body, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);;) {
					var _ref11;

					if (_isArray11) {
						if (_i11 >= _iterator11.length) break;
						_ref11 = _iterator11[_i11++];
					} else {
						_i11 = _iterator11.next();
						if (_i11.done) break;
						_ref11 = _i11.value;
					}

					var stmt = _ref11;
					prehoist(stmt);
				}
			} else if (Array.isArray(a.body)) {
				for (var _iterator12 = a.body, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);;) {
					var _ref12;

					if (_isArray12) {
						if (_i12 >= _iterator12.length) break;
						_ref12 = _iterator12[_i12++];
					} else {
						_i12 = _iterator12.next();
						if (_i12.done) break;
						_ref12 = _i12.value;
					}

					var _stmt = _ref12;
					prehoist(_stmt);
				}
			} else {
				prehoist(a.body);
			}
		}
	}, {
		key: 'enterClassExpression',
		value: function enterClassExpression(a) {
			var scope = (0, _create2.default)(this.scopeStack[0]);
			this.scopeStack.unshift(scope);
			scope[a.id.name] = a;
			for (var _iterator13 = a.body.body, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);;) {
				var _ref13;

				if (_isArray13) {
					if (_i13 >= _iterator13.length) break;
					_ref13 = _iterator13[_i13++];
				} else {
					_i13 = _iterator13.next();
					if (_i13.done) break;
					_ref13 = _i13.value;
				}

				var x = _ref13;

				if (!x) continue;
				if (x.key) scope[x.key.name] = x;
				if (x.id) scope[x.id.name] = x;
			}
		}
	}, {
		key: 'enterFunction',
		value: function enterFunction(a) {
			this.funcStack.unshift(a);
			var scope = (0, _create2.default)(this.scopeStack[0]);
			this.scopeStack.unshift(scope);

			a.addHiddenProperty('refs', (0, _create2.default)(null));
			a.addHiddenProperty('vars', (0, _create2.default)(null));
			a.addHiddenProperty('funcs', (0, _create2.default)(null));
			a.addHiddenProperty('ss', scope);

			if (this.options.nonUserCode) {
				a.addHiddenProperty('nonUserCode', true);
			}

			for (var _iterator14 = a.params, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);;) {
				var _ref14;

				if (_isArray14) {
					if (_i14 >= _iterator14.length) break;
					_ref14 = _iterator14[_i14++];
				} else {
					_i14 = _iterator14.next();
					if (_i14.done) break;
					_ref14 = _i14.value;
				}

				var o = _ref14;

				if (o.type == 'Identifier') {
					scope[o.name] = a;
					a.vars[o.name] = a;
				} else if (o.type == 'RestElement') {
					scope[o.argument.name] = a;
					a.vars[o.argument.name] = a;
				}
			}

			this.mangleBody(a);

			var strict = detectStrict(a.body.body);
			if (strict !== undefined) a.strict = strict;

			this.varStack.unshift(a.vars);
		}
	}, {
		key: 'enterFunctionDeclaration',
		value: function enterFunctionDeclaration(a) {
			var parent = this.funcStack[0];
			//a.parentFunction = parent.nodeID;
			a.srcName = 'function ' + a.id.name + ' {';
			parent.funcs[a.id.name] = a;
		}
	}, {
		key: 'exitIdentifier',
		value: function exitIdentifier(a) {
			a.srcName = a.name;
		}
	}, {
		key: 'exitLiteral',
		value: function exitLiteral(a) {
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
	}, {
		key: 'exitBinaryExpression',
		value: function exitBinaryExpression(a) {
			a.srcName = a.left.srcName + ' ' + a.operator + ' ' + a.right.srcName;
		}
	}, {
		key: 'exitMemberExpression',
		value: function exitMemberExpression(a) {
			var left = a.object.srcName || '??';
			var right = a.property.srcName || '(intermediate value)';
			if (!a.computed) a.srcName = left + '.' + right;else a.srcName = a.srcName = left + '[' + right + ']';
		}
	}, {
		key: 'exitCallExpression',
		value: function exitCallExpression(a) {
			a.srcName = a.callee.srcName + '(...)';
		}
	}, {
		key: 'exitFunction',
		value: function exitFunction(a) {
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

			var target = this.funcStack[0];
			if (target && target.refs) {
				for (var v in upvars) {
					target.refs[v] = true;
				}for (var _v in free) {
					target.refs[_v] = true;
				}
			}

			if (compiler && this.options.compile === 'pre' && compiler.canCompile(a.body)) {
				a.body.dispatch = compiler.compileNode(a.body);
			}
			//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
		}
	}, {
		key: 'exitClassExpression',
		value: function exitClassExpression(a) {
			this.scopeStack.shift();
		}
	}, {
		key: 'exitProgram',
		value: function exitProgram(a) {
			this.scopeStack.shift();
			var vars = this.varStack.shift();
			//this.log("VARS:", Object.getOwnPropertyNames(a.vars).join(', '));
		}
	}, {
		key: 'exit',
		value: function exit(a) {
			this.log('Exiting', a.type);
			--this.depth;
		}
	}]);
	return EsperASTInstructions;
}();

ASTPreprocessor.ASTNode = ASTNode;
ASTPreprocessor.EsperASTInstructions = EsperASTInstructions;

module.exports = ASTPreprocessor;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var ObjectValue = __webpack_require__(180);
var CompletionRecord = __webpack_require__(175);

var EasyNativeFunction = function (_ObjectValue) {
	(0, _inherits3.default)(EasyNativeFunction, _ObjectValue);

	function EasyNativeFunction(realm) {
		(0, _classCallCheck3.default)(this, EasyNativeFunction);
		return (0, _possibleConstructorReturn3.default)(this, (EasyNativeFunction.__proto__ || (0, _getPrototypeOf2.default)(EasyNativeFunction)).call(this, realm, realm.FunctionPrototype));
	}

	(0, _createClass3.default)(EasyNativeFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, argz, scope, extra) {
			var profile,
			    start,
			    s,
			    o,
			    _args = arguments;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							profile = false;
							start = 0;
							_context.prev = 2;

							if (extra && extra.evaluator && extra.evaluator.debug) {
								profile = true;
								start = Date.now();
							}
							s = scope ? scope.createChild() : scope;

							if (s) s.strict = true;
							return _context.delegateYield(this.fn.apply(this.binding, _args, s, extra), 't0', 7);

						case 7:
							o = _context.t0;

							if (!(o instanceof CompletionRecord)) {
								_context.next = 10;
								break;
							}

							return _context.abrupt('return', o);

						case 10:
							if (!(o instanceof Value)) o = scope.realm.makeForForeignObject(o);
							if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.NORMAL, o));

						case 15:
							_context.prev = 15;
							_context.t1 = _context['catch'](2);

							if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.THROW, scope.realm.makeForForeignObject(_context.t1)));

						case 19:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this, [[2, 15]]);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			return _regenerator2.default.wrap(function makeThisForNew$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return CompletionRecord.makeTypeError(realm, 'function is not a constructor');

						case 2:
							return _context2.abrupt('return', _context2.sent);

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			return 'function() { [Native Code] }';
		}
	}], [{
		key: 'make',
		value: function make(realm, fx, binding) {
			var out = new EasyNativeFunction(realm);
			out.fn = fx;
			out.binding = binding;
			return out;
		}
	}, {
		key: 'makeForNative',
		value: function makeForNative(realm, fx) {
			var out = new EasyNativeFunction(realm);
			out.fn = /*#__PURE__*/_regenerator2.default.mark(function _callee(thiz, args) {
				var rargs, i, nt, nr;
				return _regenerator2.default.wrap(function _callee$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								rargs = new Array(args.length);

								for (i = 0; i < args.length; ++i) {
									rargs[i] = args[i].toNative();
								}
								nt = thiz.toNative();
								nr = fx.apply(nt, rargs);
								return _context3.abrupt('return', Value.fromNative(nr));

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee, this);
			});
			return out;
		}
	}]);
	return EasyNativeFunction;
}(ObjectValue);

EasyNativeFunction.prototype.clazz = 'Function';

module.exports = EasyNativeFunction;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectValue = __webpack_require__(180);
var EasyObjectValue = __webpack_require__(210);
var Value = __webpack_require__(153);
var NullValue = __webpack_require__(187);
var UndefinedValue = __webpack_require__(190);

var ObjectPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(ObjectPrototype, _EasyObjectValue);

	function ObjectPrototype(realm) {
		(0, _classCallCheck3.default)(this, ObjectPrototype);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ObjectPrototype.__proto__ || (0, _getPrototypeOf2.default)(ObjectPrototype)).call(this, realm));

		_this.setPrototype(null);
		return _this;
	}

	(0, _createClass3.default)(ObjectPrototype, null, [{
		key: 'hasOwnProperty$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function hasOwnProperty$e(thiz, args) {
			var name;
			return _regenerator2.default.wrap(function hasOwnProperty$e$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.delegateYield(args[0].toStringNative(), 't0', 1);

						case 1:
							name = _context.t0;

							if (thiz instanceof ObjectValue) {
								_context.next = 6;
								break;
							}

							return _context.abrupt('return', Value.false);

						case 6:
							if (!thiz.hasOwnProperty(name)) {
								_context.next = 8;
								break;
							}

							return _context.abrupt('return', Value.true);

						case 8:
							return _context.abrupt('return', Value.false);

						case 9:
						case 'end':
							return _context.stop();
					}
				}
			}, hasOwnProperty$e, this);
		})
	}, {
		key: 'isPrototypeOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function isPrototypeOf$e(thiz, args, s) {
			var target, pt, checked;
			return _regenerator2.default.wrap(function isPrototypeOf$e$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(args.length < 1)) {
								_context2.next = 2;
								break;
							}

							return _context2.abrupt('return', Value.false);

						case 2:
							target = args[0]; //TODO: Call ToObject();

							if (target.getPrototype) {
								_context2.next = 7;
								break;
							}

							_context2.next = 6;
							return CompletionRecord.makeTypeError(s.realm, 'No prototype.');

						case 6:
							return _context2.abrupt('return', _context2.sent);

						case 7:
							pt = target.getPrototype(s.realm);
							checked = [pt];

						case 9:
							if (!pt) {
								_context2.next = 18;
								break;
							}

							if (!(pt === thiz)) {
								_context2.next = 12;
								break;
							}

							return _context2.abrupt('return', Value.true);

						case 12:
							pt = pt.getPrototype(s.realm);

							if (!(checked.indexOf(pt) !== -1)) {
								_context2.next = 15;
								break;
							}

							return _context2.abrupt('break', 18);

						case 15:
							checked.push(pt);
							_context2.next = 9;
							break;

						case 18:
							return _context2.abrupt('return', Value.false);

						case 19:
						case 'end':
							return _context2.stop();
					}
				}
			}, isPrototypeOf$e, this);
		})
	}, {
		key: 'propertyIsEnumerable$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function propertyIsEnumerable$e(thiz, args) {
			var nam, pd;
			return _regenerator2.default.wrap(function propertyIsEnumerable$e$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(args[0].toStringNative(), 't0', 1);

						case 1:
							nam = _context3.t0;
							pd = thiz.properties[nam];
							return _context3.abrupt('return', this.fromNative(pd.enumerable));

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, propertyIsEnumerable$e, this);
		})
	}, {
		key: 'toLocaleString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toLocaleString$e(thiz, args) {
			return _regenerator2.default.wrap(function toLocaleString$e$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(ObjectPrototype.toString$e(thiz, args), 't0', 1);

						case 1:
							return _context4.abrupt('return', _context4.t0);

						case 2:
						case 'end':
							return _context4.stop();
					}
				}
			}, toLocaleString$e, this);
		})
	}, {
		key: 'toString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString$e(thiz, args) {
			return _regenerator2.default.wrap(function toString$e$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							if (!(thiz instanceof UndefinedValue)) {
								_context5.next = 2;
								break;
							}

							return _context5.abrupt('return', this.fromNative('[object Undefined]'));

						case 2:
							if (!(thiz instanceof NullValue)) {
								_context5.next = 4;
								break;
							}

							return _context5.abrupt('return', this.fromNative('[object Null]'));

						case 4:
							return _context5.abrupt('return', this.fromNative('[object ' + thiz.clazz + ']'));

						case 5:
						case 'end':
							return _context5.stop();
					}
				}
			}, toString$e, this);
		})
	}, {
		key: 'valueOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function valueOf$e(thiz, args) {
			return _regenerator2.default.wrap(function valueOf$e$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							if (!(thiz.specTypeName === 'object')) {
								_context6.next = 2;
								break;
							}

							return _context6.abrupt('return', thiz);

						case 2:
							return _context6.abrupt('return', thiz);

						case 3:
						case 'end':
							return _context6.stop();
					}
				}
			}, valueOf$e, this);
		})
	}]);
	return ObjectPrototype;
}(EasyObjectValue);

ObjectPrototype.prototype.wellKnownName = '%ObjectPrototype%';

module.exports = ObjectPrototype;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _getOwnPropertyDescriptor = __webpack_require__(119);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(211);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var PropertyDescriptor = __webpack_require__(181);
var ObjectValue = __webpack_require__(180);
var CompletionRecord = __webpack_require__(175);
var EasyNativeFunction = __webpack_require__(208);

var EasyObjectValue = function (_ObjectValue) {
	(0, _inherits3.default)(EasyObjectValue, _ObjectValue);

	function EasyObjectValue(realm) {
		(0, _classCallCheck3.default)(this, EasyObjectValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EasyObjectValue.__proto__ || (0, _getPrototypeOf2.default)(EasyObjectValue)).call(this, realm));

		var objProto = realm.ObjectPrototype;
		if (typeof _this.objPrototype === 'function') {
			objProto = _this.objPrototype(realm);
		} else if (typeof _this.call === 'function') {
			objProto = realm.FunctionPrototype;
		}
		if (_this.call == 'function') _this.clazz = 'Function';
		_this.setPrototype(objProto);

		_this._init(realm);
		_this.easyRef = (0, _getPrototypeOf2.default)(_this).constructor;
		return _this;
	}

	(0, _createClass3.default)(EasyObjectValue, [{
		key: '_init',
		value: function _init(realm) {
			var clazz = (0, _getPrototypeOf2.default)(this);
			for (var _iterator = (0, _getOwnPropertyNames2.default)(clazz.constructor), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var p = _ref;

				if (p === 'length') continue;
				if (p === 'name') continue;
				if (p === 'prototype') continue;
				if (p === 'constructor') continue;
				if (p === 'caller') continue;
				if (p === 'callee') continue;
				if (p === 'arguments') continue;
				var parts = p.split(/\$/);
				var flags = parts.length > 1 ? parts.pop() : '';
				var name = parts.join('');

				var d = (0, _getOwnPropertyDescriptor2.default)(clazz.constructor, p);
				var v = new PropertyDescriptor();
				var length = 1;

				if (d.get) {
					//Its a property
					var val = d.get();
					if (val instanceof Value) v.value = val;else v.value = this.fromNative(val);
				} else {
					if (d.value.esperLength !== undefined) length = d.value.esperLength;
					var rb = EasyNativeFunction.make(realm, d.value, this);
					var _rblen = new PropertyDescriptor(Value.fromNative(length));
					_rblen.configurable = false;
					_rblen.writable = false;
					_rblen.enumerable = false;
					rb.properties['length'] = _rblen;
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
				var pt = new PropertyDescriptor(this.callPrototype(realm));
				pt.configurable = false;
				pt.enumerable = false;
				pt.writable = false;
				this.properties['prototype'] = pt;
			}

			if (this.callLength !== undefined) {
				var rblen = new PropertyDescriptor(Value.fromNative(this.callLength));
				rblen.configurable = false;
				rblen.writable = false;
				rblen.enumerable = false;
				this.properties['length'] = rblen;
			}

			if (this.constructorFor) {
				var target = this.constructorFor(realm);
				if (target) {
					var cs = new PropertyDescriptor(this);
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
	}, {
		key: 'jsTypeName',
		get: function get() {
			return typeof this.call === 'function' ? 'function' : 'object';
		}
	}]);
	return EasyObjectValue;
}(ObjectValue);

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(212), __esModule: true };

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(213);
var $Object = __webpack_require__(15).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(19)('getOwnPropertyNames', function () {
  return __webpack_require__(77).f;
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var ClosureValue = __webpack_require__(191);
var Value = __webpack_require__(153);
var ObjectValue = __webpack_require__(180);
var CompletionRecord = __webpack_require__(175);
var PropertyDescriptor = __webpack_require__(181);

var BoundFunction = function (_ObjectValue) {
	(0, _inherits3.default)(BoundFunction, _ObjectValue);

	function BoundFunction(func, realm) {
		(0, _classCallCheck3.default)(this, BoundFunction);

		var _this = (0, _possibleConstructorReturn3.default)(this, (BoundFunction.__proto__ || (0, _getPrototypeOf2.default)(BoundFunction)).call(this, realm));

		_this.setPrototype(realm.FunctionPrototype);
		_this.func = func;
		_this.boundArgs = [];
		return _this;
	}

	(0, _createClass3.default)(BoundFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s, ext) {
			var tt, asConstructor, rargs;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							tt = thiz;
							asConstructor = ext && ext.asConstructor;


							if (!asConstructor) {
								tt = this.boundThis;
							}

							rargs = [].concat(this.boundArgs, args);
							return _context.delegateYield(this.func.call(tt, rargs, s, ext), 't0', 5);

						case 5:
							return _context.abrupt('return', _context.t0);

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'constructorOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function constructorOf(other, realm) {
			return _regenerator2.default.wrap(function constructorOf$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.delegateYield(this.func.constructorOf(other, realm), 't0', 1);

						case 1:
							return _context2.abrupt('return', _context2.t0);

						case 2:
						case 'end':
							return _context2.stop();
					}
				}
			}, constructorOf, this);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			return _regenerator2.default.wrap(function makeThisForNew$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(this.func.makeThisForNew(realm), 't0', 1);

						case 1:
							return _context3.abrupt('return', _context3.t0);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}]);
	return BoundFunction;
}(ObjectValue);

var FunctionPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(FunctionPrototype, _EasyObjectValue);

	function FunctionPrototype() {
		(0, _classCallCheck3.default)(this, FunctionPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (FunctionPrototype.__proto__ || (0, _getPrototypeOf2.default)(FunctionPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(FunctionPrototype, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s) {
			return _regenerator2.default.wrap(function call$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', EasyObjectValue.undef);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, call, this);
		})
	}], [{
		key: 'apply',
		value: /*#__PURE__*/_regenerator2.default.mark(function apply(thiz, args, s) {
			var vthis, arga, arr, length, i;
			return _regenerator2.default.wrap(function apply$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							vthis = args[0];
							arga = [];

							if (!(args.length > 1)) {
								_context5.next = 15;
								break;
							}

							arr = args[1];
							return _context5.delegateYield(arr.get('length'), 't0', 5);

						case 5:
							length = _context5.t0;
							return _context5.delegateYield(length.toNumberValue(), 't1', 7);

						case 7:
							length = _context5.t1.toNative();
							i = 0;

						case 9:
							if (!(i < length)) {
								_context5.next = 15;
								break;
							}

							return _context5.delegateYield(arr.get(i), 't2', 11);

						case 11:
							arga[i] = _context5.t2;

						case 12:
							++i;
							_context5.next = 9;
							break;

						case 15:
							return _context5.delegateYield(thiz.call(vthis, arga, s), 't3', 16);

						case 16:
							return _context5.abrupt('return', _context5.t3);

						case 17:
						case 'end':
							return _context5.stop();
					}
				}
			}, apply, this);
		})
	}, {
		key: 'bind',
		value: /*#__PURE__*/_regenerator2.default.mark(function bind(thiz, args, s) {
			var bthis, out, newlen;
			return _regenerator2.default.wrap(function bind$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							bthis = s.realm.globalScope.object; //TODO: is this actually null in scrict mode?

							if (args.length > 0) {
								if (args[0].jsTypeName !== 'undefined') bthis = args[0];
							}
							out = new BoundFunction(thiz, s.realm);

							if (args.length > 1) out.boundArgs = args.slice(1);
							out.boundThis = bthis;

							if (thiz.properties['length']) {
								newlen = thiz.properties['length'].value.toNative() - out.boundArgs.length;

								out.properties['length'] = new PropertyDescriptor(this.fromNative(newlen));
							}
							return _context6.abrupt('return', out);

						case 7:
						case 'end':
							return _context6.stop();
					}
				}
			}, bind, this);
		})
	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s) {
			var vthis;
			return _regenerator2.default.wrap(function call$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							vthis = Value.undef;

							if (args.length > 0) vthis = args.shift();
							return _context7.delegateYield(thiz.call(vthis, args, s), 't0', 3);

						case 3:
							return _context7.abrupt('return', _context7.t0);

						case 4:
						case 'end':
							return _context7.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'toString',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString(thiz, args, s) {
			var astsrc;
			return _regenerator2.default.wrap(function toString$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							if (!(thiz instanceof ClosureValue)) {
								_context8.next = 7;
								break;
							}

							astsrc = thiz.funcSourceAST.source();

							if (!astsrc) {
								_context8.next = 4;
								break;
							}

							return _context8.abrupt('return', this.fromNative(astsrc));

						case 4:
							return _context8.abrupt('return', this.fromNative('function() { [AST] }'));

						case 7:
							if (!(thiz instanceof BoundFunction)) {
								_context8.next = 11;
								break;
							}

							return _context8.abrupt('return', this.fromNative('function() { [bound function] }'));

						case 11:
							if (!(thiz instanceof EasyObjectValue.EasyNativeFunction)) {
								_context8.next = 15;
								break;
							}

							return _context8.abrupt('return', this.fromNative('function() { [native code] }'));

						case 15:
							if (!(thiz instanceof EasyObjectValue && thiz.call)) {
								_context8.next = 17;
								break;
							}

							return _context8.abrupt('return', this.fromNative('function() { [native code] }'));

						case 17:
							return _context8.abrupt('return', CompletionRecord.makeTypeError(s.realm, 'Function.prototype.toString is not generic'));

						case 18:
						case 'end':
							return _context8.stop();
					}
				}
			}, toString, this);
		})
	}, {
		key: 'caller$cew',
		get: function get() {
			return null;
		}
	}, {
		key: 'length$ew',
		get: function get() {
			return '?';
		}
	}, {
		key: 'name$ew',
		get: function get() {
			return '';
		}
	}]);
	return FunctionPrototype;
}(EasyObjectValue);

FunctionPrototype.prototype.wellKnownName = '%FunctionPrototype%';

module.exports = FunctionPrototype;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(211);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(defObjectProperty),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(getDescriptor),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(objOrThrow);

var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var CompletionRecord = __webpack_require__(175);
var Value = __webpack_require__(153);
var PropertyDescriptor = __webpack_require__(181);
var EmptyValue = __webpack_require__(188);
var BridgeValue = __webpack_require__(189);
var LinkValue = __webpack_require__(200);

function defObjectProperty(obj, name, desc, realm) {
	var value, v, enu, wri, conf, get, set;
	return _regenerator2.default.wrap(function defObjectProperty$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(name instanceof Value)) {
						_context.next = 3;
						break;
					}

					return _context.delegateYield(name.toStringNative(), 't0', 2);

				case 2:
					name = _context.t0;

				case 3:
					return _context.delegateYield(desc.get('value', realm), 't1', 4);

				case 4:
					value = _context.t1;
					v = new PropertyDescriptor(value);

					if (!desc.has('enumerable')) {
						_context.next = 12;
						break;
					}

					return _context.delegateYield(desc.get('enumerable', realm), 't2', 8);

				case 8:
					enu = _context.t2;

					if (!(enu instanceof EmptyValue)) {
						v.enumerable = enu.truthy;
					}
					_context.next = 13;
					break;

				case 12:
					v.enumerable = false;

				case 13:
					if (!desc.has('writable')) {
						_context.next = 19;
						break;
					}

					return _context.delegateYield(desc.get('writable', realm), 't3', 15);

				case 15:
					wri = _context.t3;

					if (!(wri instanceof EmptyValue)) {
						v.writable = wri.truthy;
					}
					_context.next = 20;
					break;

				case 19:
					v.writable = false;

				case 20:
					if (!desc.has('configurable')) {
						_context.next = 26;
						break;
					}

					return _context.delegateYield(desc.get('configurable', realm), 't4', 22);

				case 22:
					conf = _context.t4;

					if (!(conf instanceof EmptyValue)) {
						v.writable = conf.truthy;
					}
					_context.next = 27;
					break;

				case 26:
					v.writable = false;

				case 27:
					if (!desc.has('get')) {
						_context.next = 31;
						break;
					}

					return _context.delegateYield(desc.get('get', realm), 't5', 29);

				case 29:
					get = _context.t5;

					if (!(get instanceof EmptyValue)) {
						v.getter = get;
					}

				case 31:
					if (!desc.has('set')) {
						_context.next = 35;
						break;
					}

					return _context.delegateYield(desc.get('set', realm), 't6', 33);

				case 33:
					set = _context.t6;

					if (!(set instanceof EmptyValue)) {
						v.setter = set;
					}

				case 35:

					obj.rawSetProperty(name, v);
					return _context.abrupt('return', true);

				case 37:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getDescriptor(target, name, realm) {
	var pdesc, out;
	return _regenerator2.default.wrap(function getDescriptor$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					if (Object.hasOwnProperty.call(target.properties, name)) {
						_context2.next = 2;
						break;
					}

					return _context2.abrupt('return', Value.undef);

				case 2:
					pdesc = target.properties[name];
					out = new ObjectValue(realm);

					if (!pdesc.value) {
						_context2.next = 6;
						break;
					}

					return _context2.delegateYield(out.set('value', pdesc.value), 't0', 6);

				case 6:
					if (!pdesc.getter) {
						_context2.next = 8;
						break;
					}

					return _context2.delegateYield(out.set('get', pdesc.getter), 't1', 8);

				case 8:
					if (!pdesc.setter) {
						_context2.next = 10;
						break;
					}

					return _context2.delegateYield(out.set('set', pdesc.setter), 't2', 10);

				case 10:
					return _context2.delegateYield(out.set('writable', Value.fromNative(pdesc.writable)), 't3', 11);

				case 11:
					return _context2.delegateYield(out.set('enumerable', Value.fromNative(pdesc.enumerable)), 't4', 12);

				case 12:
					return _context2.delegateYield(out.set('configurable', Value.fromNative(pdesc.configurable)), 't5', 13);

				case 13:
					return _context2.abrupt('return', out);

				case 14:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function objOrThrow(i, realm) {
	var val;
	return _regenerator2.default.wrap(function objOrThrow$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					val = i ? i : Value.undef;

					if (!(val instanceof EmptyValue)) {
						_context3.next = 5;
						break;
					}

					_context3.next = 4;
					return CompletionRecord.makeTypeError(realm, 'Cannot convert undefined or null to object');

				case 4:
					return _context3.abrupt('return', _context3.sent);

				case 5:
					if (val instanceof ObjectValue) {
						_context3.next = 9;
						break;
					}

					_context3.next = 8;
					return CompletionRecord.makeTypeError(realm, 'Need an object');

				case 8:
					return _context3.abrupt('return', _context3.sent);

				case 9:
					return _context3.abrupt('return', val);

				case 10:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

var ObjectObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(ObjectObject, _EasyObjectValue);

	function ObjectObject() {
		(0, _classCallCheck3.default)(this, ObjectObject);
		return (0, _possibleConstructorReturn3.default)(this, (ObjectObject.__proto__ || (0, _getPrototypeOf2.default)(ObjectObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(ObjectObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s, ext) {
			var asConstructor;
			return _regenerator2.default.wrap(function call$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (!asConstructor) {
								_context4.next = 3;
								break;
							}

							return _context4.abrupt('return', new ObjectValue(s.realm));

						case 3:
						case 'end':
							return _context4.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.ObjectPrototype;
		}
		//objPrototype(realm) { return realm.Function; }

	}, {
		key: 'toNativeCounterpart',
		value: function toNativeCounterpart() {
			return Object;
		}
	}], [{
		key: 'create$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function create$e(thiz, args, s) {
			var v, p, propsobj, _iterator, _isArray, _i, _ref, _p, strval, podesc;

			return _regenerator2.default.wrap(function create$e$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							v = new ObjectValue(s.realm);
							p = Value.undef;

							if (args.length > 0) {
								p = args[0];
							}

							if (!(p.jsTypeName !== 'object' && p.jsTypeName !== 'function')) {
								_context5.next = 7;
								break;
							}

							_context5.next = 6;
							return CompletionRecord.makeTypeError(s.realm, 'Object prototype may only be an Object or null');

						case 6:
							return _context5.abrupt('return', _context5.sent);

						case 7:

							v.setPrototype(p);

							if (!(args.length > 1)) {
								_context5.next = 28;
								break;
							}

							propsobj = args[1];
							_iterator = propsobj.observableProperties(s.realm), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 11:
							if (!_isArray) {
								_context5.next = 17;
								break;
							}

							if (!(_i >= _iterator.length)) {
								_context5.next = 14;
								break;
							}

							return _context5.abrupt('break', 28);

						case 14:
							_ref = _iterator[_i++];
							_context5.next = 21;
							break;

						case 17:
							_i = _iterator.next();

							if (!_i.done) {
								_context5.next = 20;
								break;
							}

							return _context5.abrupt('break', 28);

						case 20:
							_ref = _i.value;

						case 21:
							_p = _ref;
							strval = _p.native;
							return _context5.delegateYield(propsobj.get(strval, s.realm), 't0', 24);

						case 24:
							podesc = _context5.t0;
							return _context5.delegateYield(defObjectProperty(v, _p, podesc, s.realm), 't1', 26);

						case 26:
							_context5.next = 11;
							break;

						case 28:
							return _context5.abrupt('return', v);

						case 29:
						case 'end':
							return _context5.stop();
					}
				}
			}, create$e, this);
		})
	}, {
		key: 'defineProperty',
		value: /*#__PURE__*/_regenerator2.default.mark(function defineProperty(thiz, args, s) {
			var target, name, desc;
			return _regenerator2.default.wrap(function defineProperty$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context6.t0;
							return _context6.delegateYield(args[1].toStringNative(), 't1', 3);

						case 3:
							name = _context6.t1;
							desc = args[2];
							return _context6.delegateYield(defObjectProperty(target, name, desc, s.realm), 't2', 6);

						case 6:
							return _context6.abrupt('return', Value.true);

						case 7:
						case 'end':
							return _context6.stop();
					}
				}
			}, defineProperty, this);
		})
	}, {
		key: 'defineProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function defineProperties(thiz, args, s) {
			var target, propsobj, _iterator2, _isArray2, _i2, _ref2, p, strval, podesc;

			return _regenerator2.default.wrap(function defineProperties$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context7.t0;
							return _context7.delegateYield(objOrThrow(args[1], s.realm), 't1', 3);

						case 3:
							propsobj = _context7.t1;
							_iterator2 = propsobj.observableProperties(s.realm), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

						case 5:
							if (!_isArray2) {
								_context7.next = 11;
								break;
							}

							if (!(_i2 >= _iterator2.length)) {
								_context7.next = 8;
								break;
							}

							return _context7.abrupt('break', 22);

						case 8:
							_ref2 = _iterator2[_i2++];
							_context7.next = 15;
							break;

						case 11:
							_i2 = _iterator2.next();

							if (!_i2.done) {
								_context7.next = 14;
								break;
							}

							return _context7.abrupt('break', 22);

						case 14:
							_ref2 = _i2.value;

						case 15:
							p = _ref2;
							strval = p.native;
							return _context7.delegateYield(propsobj.get(strval, s.realm), 't2', 18);

						case 18:
							podesc = _context7.t2;
							return _context7.delegateYield(defObjectProperty(target, p, podesc, s.realm), 't3', 20);

						case 20:
							_context7.next = 5;
							break;

						case 22:
							return _context7.abrupt('return', Value.true);

						case 23:
						case 'end':
							return _context7.stop();
					}
				}
			}, defineProperties, this);
		})
	}, {
		key: 'seal$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function seal$e(thiz, args, s) {
			var target, _iterator3, _isArray3, _i3, _ref3, p;

			return _regenerator2.default.wrap(function seal$e$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context8.t0;


							target.extensable = false;
							_iterator3 = (0, _keys2.default)(target.properties), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

						case 4:
							if (!_isArray3) {
								_context8.next = 10;
								break;
							}

							if (!(_i3 >= _iterator3.length)) {
								_context8.next = 7;
								break;
							}

							return _context8.abrupt('break', 18);

						case 7:
							_ref3 = _iterator3[_i3++];
							_context8.next = 14;
							break;

						case 10:
							_i3 = _iterator3.next();

							if (!_i3.done) {
								_context8.next = 13;
								break;
							}

							return _context8.abrupt('break', 18);

						case 13:
							_ref3 = _i3.value;

						case 14:
							p = _ref3;

							target.properties[p].configurable = false;

						case 16:
							_context8.next = 4;
							break;

						case 18:
							return _context8.abrupt('return', target);

						case 19:
						case 'end':
							return _context8.stop();
					}
				}
			}, seal$e, this);
		})
	}, {
		key: 'isSealed',
		value: /*#__PURE__*/_regenerator2.default.mark(function isSealed(thiz, args, s) {
			var target, _iterator4, _isArray4, _i4, _ref4, p, ps;

			return _regenerator2.default.wrap(function isSealed$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context9.t0;

							if (!target.extensable) {
								_context9.next = 4;
								break;
							}

							return _context9.abrupt('return', Value.false);

						case 4:
							_iterator4 = (0, _keys2.default)(target.properties), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

						case 5:
							if (!_isArray4) {
								_context9.next = 11;
								break;
							}

							if (!(_i4 >= _iterator4.length)) {
								_context9.next = 8;
								break;
							}

							return _context9.abrupt('break', 21);

						case 8:
							_ref4 = _iterator4[_i4++];
							_context9.next = 15;
							break;

						case 11:
							_i4 = _iterator4.next();

							if (!_i4.done) {
								_context9.next = 14;
								break;
							}

							return _context9.abrupt('break', 21);

						case 14:
							_ref4 = _i4.value;

						case 15:
							p = _ref4;
							ps = target.properties[p];

							if (!ps.configurable) {
								_context9.next = 19;
								break;
							}

							return _context9.abrupt('return', Value.false);

						case 19:
							_context9.next = 5;
							break;

						case 21:
							return _context9.abrupt('return', Value.true);

						case 22:
						case 'end':
							return _context9.stop();
					}
				}
			}, isSealed, this);
		})
	}, {
		key: 'freeze$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function freeze$e(thiz, args, s) {
			var target, p;
			return _regenerator2.default.wrap(function freeze$e$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context10.t0;

							target.extensable = false;
							_context10.t1 = _regenerator2.default.keys(target.properties);

						case 4:
							if ((_context10.t2 = _context10.t1()).done) {
								_context10.next = 12;
								break;
							}

							p = _context10.t2.value;

							if (Object.prototype.hasOwnProperty.call(target.properties, p)) {
								_context10.next = 8;
								break;
							}

							return _context10.abrupt('continue', 4);

						case 8:
							target.properties[p].configurable = false;
							target.properties[p].writable = false;
							_context10.next = 4;
							break;

						case 12:
							return _context10.abrupt('return', target);

						case 13:
						case 'end':
							return _context10.stop();
					}
				}
			}, freeze$e, this);
		})
	}, {
		key: 'isFrozen',
		value: /*#__PURE__*/_regenerator2.default.mark(function isFrozen(thiz, args, s) {
			var target, _iterator5, _isArray5, _i5, _ref5, p, ps;

			return _regenerator2.default.wrap(function isFrozen$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context11.t0;

							if (!target.extensable) {
								_context11.next = 4;
								break;
							}

							return _context11.abrupt('return', Value.false);

						case 4:
							_iterator5 = (0, _keys2.default)(target.properties), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

						case 5:
							if (!_isArray5) {
								_context11.next = 11;
								break;
							}

							if (!(_i5 >= _iterator5.length)) {
								_context11.next = 8;
								break;
							}

							return _context11.abrupt('break', 23);

						case 8:
							_ref5 = _iterator5[_i5++];
							_context11.next = 15;
							break;

						case 11:
							_i5 = _iterator5.next();

							if (!_i5.done) {
								_context11.next = 14;
								break;
							}

							return _context11.abrupt('break', 23);

						case 14:
							_ref5 = _i5.value;

						case 15:
							p = _ref5;
							ps = target.properties[p];

							if (!ps.configurable) {
								_context11.next = 19;
								break;
							}

							return _context11.abrupt('return', Value.false);

						case 19:
							if (!ps.writable) {
								_context11.next = 21;
								break;
							}

							return _context11.abrupt('return', Value.false);

						case 21:
							_context11.next = 5;
							break;

						case 23:
							return _context11.abrupt('return', Value.true);

						case 24:
						case 'end':
							return _context11.stop();
					}
				}
			}, isFrozen, this);
		})
	}, {
		key: 'preventExtensions$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function preventExtensions$e(thiz, args, s) {
			var target;
			return _regenerator2.default.wrap(function preventExtensions$e$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context12.t0;

							target.extensable = false;
							return _context12.abrupt('return', target);

						case 4:
						case 'end':
							return _context12.stop();
					}
				}
			}, preventExtensions$e, this);
		})
	}, {
		key: 'isExtensible$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function isExtensible$e(thiz, args, s) {
			var target;
			return _regenerator2.default.wrap(function isExtensible$e$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context13.t0;
							return _context13.abrupt('return', this.fromNative(target.extensable));

						case 3:
						case 'end':
							return _context13.stop();
					}
				}
			}, isExtensible$e, this);
		})
	}, {
		key: 'keys$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function keys$e(thiz, args, s) {
			var keys, _iterator6, _isArray6, _i6, _ref6, o, target, result, _iterator7, _isArray7, _i7, _ref7, p;

			return _regenerator2.default.wrap(function keys$e$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							if (!(args[0] instanceof BridgeValue)) {
								_context14.next = 2;
								break;
							}

							return _context14.abrupt('return', ArrayValue.make((0, _keys2.default)(args[0].native), s.realm));

						case 2:
							if (!(args[0] instanceof LinkValue)) {
								_context14.next = 20;
								break;
							}

							keys = [];
							_iterator6 = args[0].observableProperties(), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

						case 5:
							if (!_isArray6) {
								_context14.next = 11;
								break;
							}

							if (!(_i6 >= _iterator6.length)) {
								_context14.next = 8;
								break;
							}

							return _context14.abrupt('break', 19);

						case 8:
							_ref6 = _iterator6[_i6++];
							_context14.next = 15;
							break;

						case 11:
							_i6 = _iterator6.next();

							if (!_i6.done) {
								_context14.next = 14;
								break;
							}

							return _context14.abrupt('break', 19);

						case 14:
							_ref6 = _i6.value;

						case 15:
							o = _ref6;
							keys.push(o);

						case 17:
							_context14.next = 5;
							break;

						case 19:
							return _context14.abrupt('return', ArrayValue.make(keys, s.realm));

						case 20:
							return _context14.delegateYield(objOrThrow(args[0], s.realm), 't0', 21);

						case 21:
							target = _context14.t0;
							result = [];
							_iterator7 = (0, _keys2.default)(target.properties), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

						case 24:
							if (!_isArray7) {
								_context14.next = 30;
								break;
							}

							if (!(_i7 >= _iterator7.length)) {
								_context14.next = 27;
								break;
							}

							return _context14.abrupt('break', 40);

						case 27:
							_ref7 = _iterator7[_i7++];
							_context14.next = 34;
							break;

						case 30:
							_i7 = _iterator7.next();

							if (!_i7.done) {
								_context14.next = 33;
								break;
							}

							return _context14.abrupt('break', 40);

						case 33:
							_ref7 = _i7.value;

						case 34:
							p = _ref7;

							if (target.properties[p].enumerable) {
								_context14.next = 37;
								break;
							}

							return _context14.abrupt('continue', 38);

						case 37:
							result.push(p);

						case 38:
							_context14.next = 24;
							break;

						case 40:
							return _context14.abrupt('return', ArrayValue.make(result, s.realm));

						case 41:
						case 'end':
							return _context14.stop();
					}
				}
			}, keys$e, this);
		})
	}, {
		key: 'getOwnPropertyNames$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function getOwnPropertyNames$e(thiz, args, s) {
			var target;
			return _regenerator2.default.wrap(function getOwnPropertyNames$e$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							return _context15.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context15.t0;
							return _context15.abrupt('return', ArrayValue.make((0, _getOwnPropertyNames2.default)(target.properties), s.realm));

						case 3:
						case 'end':
							return _context15.stop();
					}
				}
			}, getOwnPropertyNames$e, this);
		})
	}, {
		key: 'getOwnPropertyDescriptor',
		value: /*#__PURE__*/_regenerator2.default.mark(function getOwnPropertyDescriptor(thiz, args, s) {
			var target, name;
			return _regenerator2.default.wrap(function getOwnPropertyDescriptor$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							return _context16.delegateYield(objOrThrow(args[0], s.realm), 't0', 1);

						case 1:
							target = _context16.t0;
							return _context16.delegateYield(args[1].toStringNative(), 't1', 3);

						case 3:
							name = _context16.t1;
							return _context16.delegateYield(getDescriptor(target, name, s.realm), 't2', 5);

						case 5:
							return _context16.abrupt('return', _context16.t2);

						case 6:
						case 'end':
							return _context16.stop();
					}
				}
			}, getOwnPropertyDescriptor, this);
		})
	}, {
		key: 'getPrototypeOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function getPrototypeOf(thiz, args, s) {
			var target, proto;
			return _regenerator2.default.wrap(function getPrototypeOf$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							target = EasyObjectValue.undef;

							if (args.length > 0) target = args[0];

							if (target.getPrototype) {
								_context17.next = 6;
								break;
							}

							_context17.next = 5;
							return CompletionRecord.makeTypeError(s.realm, 'No prototype.');

						case 5:
							return _context17.abrupt('return', _context17.sent);

						case 6:
							proto = target.getPrototype(s.realm);

							if (!proto) {
								_context17.next = 9;
								break;
							}

							return _context17.abrupt('return', proto);

						case 9:
							return _context17.abrupt('return', EasyObjectValue.null);

						case 10:
						case 'end':
							return _context17.stop();
					}
				}
			}, getPrototypeOf, this);
		})
	}]);
	return ObjectObject;
}(EasyObjectValue);

ObjectObject.prototype.wellKnownName = '%Object%';

module.exports = ObjectObject;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(118);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var ClosureValue = __webpack_require__(191);
var CompletionRecord = __webpack_require__(175);
var ASTPreprocessor = __webpack_require__(207);
var PropertyDescriptor = __webpack_require__(181);

var FunctionObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(FunctionObject, _EasyObjectValue);

	function FunctionObject() {
		(0, _classCallCheck3.default)(this, FunctionObject);
		return (0, _possibleConstructorReturn3.default)(this, (FunctionObject.__proto__ || (0, _getPrototypeOf2.default)(FunctionObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(FunctionObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope) {
			var an, i, code, ast, oast, fn;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							an = new Array(args.length - 1);
							i = 0;

						case 2:
							if (!(i < args.length - 1)) {
								_context.next = 8;
								break;
							}

							return _context.delegateYield(args[i].toStringValue(), 't0', 4);

						case 4:
							an[i] = _context.t0.toNative();

						case 5:
							++i;
							_context.next = 2;
							break;

						case 8:
							code = 'function name(' + an.join(', ') + ') {\n' + args[args.length - 1].toNative().toString() + '\n}';
							ast = void 0;
							_context.prev = 10;
							oast = scope.realm.parser(code, { loc: true });

							ast = ASTPreprocessor.process(oast);
							_context.next = 18;
							break;

						case 15:
							_context.prev = 15;
							_context.t1 = _context['catch'](10);
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.THROW, _context.t1));

						case 18:
							fn = new ClosureValue(ast.body[0], scope.global);

							fn.boundScope = scope.global;
							return _context.abrupt('return', fn);

						case 21:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this, [[10, 15]]);
		})
	}, {
		key: '_init',
		value: function _init(realm) {
			(0, _get3.default)(FunctionObject.prototype.__proto__ || (0, _getPrototypeOf2.default)(FunctionObject.prototype), '_init', this).call(this, realm);
			var cs = new PropertyDescriptor(this);
			cs.configurable = false;
			cs.enumerable = false;
			this.properties['constructor'] = cs;
		}
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.FunctionPrototype;
		}
	}, {
		key: 'callLength',
		get: function get() {
			return 1;
		}
		//objPrototype(realm) { return realm.Function; }

	}]);
	return FunctionObject;
}(EasyObjectValue);

module.exports = FunctionObject;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);

var NumberPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(NumberPrototype, _EasyObjectValue);

	function NumberPrototype() {
		(0, _classCallCheck3.default)(this, NumberPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (NumberPrototype.__proto__ || (0, _getPrototypeOf2.default)(NumberPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(NumberPrototype, null, [{
		key: 'valueOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function valueOf$e(thiz) {
			var pv;
			return _regenerator2.default.wrap(function valueOf$e$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(thiz.specTypeName === 'number')) {
								_context.next = 2;
								break;
							}

							return _context.abrupt('return', thiz);

						case 2:
							if (!(thiz.specTypeName === 'object')) {
								_context.next = 6;
								break;
							}

							pv = thiz.primativeValue;

							if (!(pv.specTypeName === 'number')) {
								_context.next = 6;
								break;
							}

							return _context.abrupt('return', pv);

						case 6:
							throw new TypeError('Couldnt get there.');

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, valueOf$e, this);
		})
	}, {
		key: 'toExponential$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toExponential$e(thiz, argz) {
			var a, num;
			return _regenerator2.default.wrap(function toExponential$e$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							a = void 0;

							if (!(argz.length > 0)) {
								_context2.next = 4;
								break;
							}

							return _context2.delegateYield(argz[0].toNumberNative(), 't0', 3);

						case 3:
							a = _context2.t0;

						case 4:
							return _context2.delegateYield(thiz.toNumberNative(thiz), 't1', 5);

						case 5:
							num = _context2.t1;
							return _context2.abrupt('return', this.fromNative(num.toExponential(a)));

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, toExponential$e, this);
		})
	}, {
		key: 'toFixed$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toFixed$e(thiz, argz) {
			var a, num;
			return _regenerator2.default.wrap(function toFixed$e$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							a = void 0;

							if (!(argz.length > 0)) {
								_context3.next = 4;
								break;
							}

							return _context3.delegateYield(argz[0].toNumberNative(), 't0', 3);

						case 3:
							a = _context3.t0;

						case 4:
							return _context3.delegateYield(thiz.toNumberNative(thiz), 't1', 5);

						case 5:
							num = _context3.t1;
							return _context3.abrupt('return', this.fromNative(num.toFixed(a)));

						case 7:
						case 'end':
							return _context3.stop();
					}
				}
			}, toFixed$e, this);
		})
	}, {
		key: 'toPrecision$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrecision$e(thiz, argz) {
			var a, num;
			return _regenerator2.default.wrap(function toPrecision$e$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							a = void 0;

							if (!(argz.length > 0)) {
								_context4.next = 4;
								break;
							}

							return _context4.delegateYield(argz[0].toNumberNative(), 't0', 3);

						case 3:
							a = _context4.t0;

						case 4:
							return _context4.delegateYield(thiz.toNumberNative(thiz), 't1', 5);

						case 5:
							num = _context4.t1;
							return _context4.abrupt('return', this.fromNative(num.toPrecision(a)));

						case 7:
						case 'end':
							return _context4.stop();
					}
				}
			}, toPrecision$e, this);
		})
	}, {
		key: 'toString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString$e(thiz, argz) {
			var a, num;
			return _regenerator2.default.wrap(function toString$e$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							a = void 0;

							if (!(argz.length > 0)) {
								_context5.next = 4;
								break;
							}

							return _context5.delegateYield(argz[0].toNumberNative(), 't0', 3);

						case 3:
							a = _context5.t0;

						case 4:
							return _context5.delegateYield(thiz.toNumberNative(thiz), 't1', 5);

						case 5:
							num = _context5.t1;
							return _context5.abrupt('return', this.fromNative(num.toString(a)));

						case 7:
						case 'end':
							return _context5.stop();
					}
				}
			}, toString$e, this);
		})
	}]);
	return NumberPrototype;
}(EasyObjectValue);

NumberPrototype.prototype.wellKnownName = '%NumberPrototype%';
module.exports = NumberPrototype;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var CompletionRecord = __webpack_require__(175);
var EmptyValue = __webpack_require__(188);
var ArrayValue = __webpack_require__(192);
var _g = __webpack_require__(176);

function wrapStringPrototype(name) {
	var fx = String.prototype[name];
	var genfx = /*#__PURE__*/_regenerator2.default.mark(function genfx(thiz, args, s) {
		var sv, argz, i, result, vals, _i, nv;

		return _regenerator2.default.wrap(function genfx$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!(thiz instanceof EmptyValue)) {
							_context.next = 4;
							break;
						}

						_context.next = 3;
						return CompletionRecord.makeTypeError(s.realm, 'called String function on null or undefined?');

					case 3:
						return _context.abrupt('return', _context.sent);

					case 4:
						return _context.delegateYield(thiz.toStringValue(s.realm), 't0', 5);

					case 5:
						sv = _context.t0;
						argz = new Array(args.length);

						for (i = 0; i < args.length; ++i) {
							argz[i] = args[i].toNative();
						}

						result = fx.apply(sv.toNative(), argz);

						if (!Array.isArray(result)) {
							_context.next = 15;
							break;
						}

						vals = new Array(result.length);

						for (_i = 0; _i < vals.length; ++_i) {
							vals[_i] = s.realm.fromNative(result[_i]);
						}
						return _context.abrupt('return', ArrayValue.make(vals, s.realm));

					case 15:
						nv = s.realm.fromNative(result);
						return _context.abrupt('return', nv);

					case 17:
					case 'end':
						return _context.stop();
				}
			}
		}, genfx, this);
	});
	genfx.esperLength = fx.length;
	return genfx;
}

var StringPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(StringPrototype, _EasyObjectValue);

	function StringPrototype() {
		(0, _classCallCheck3.default)(this, StringPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (StringPrototype.__proto__ || (0, _getPrototypeOf2.default)(StringPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(StringPrototype, null, [{
		key: 'valueOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function valueOf$e(thiz) {
			var pv;
			return _regenerator2.default.wrap(function valueOf$e$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(thiz.specTypeName === 'string')) {
								_context2.next = 2;
								break;
							}

							return _context2.abrupt('return', thiz);

						case 2:
							if (!(thiz.specTypeName === 'object')) {
								_context2.next = 6;
								break;
							}

							pv = thiz.primativeValue;

							if (!(pv.specTypeName == 'string')) {
								_context2.next = 6;
								break;
							}

							return _context2.abrupt('return', pv);

						case 6:
							throw new TypeError('Couldnt get there.');

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, valueOf$e, this);
		})
	}, {
		key: 'concat$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function concat$e(thiz, args, realm) {
			var base, realArgs, out;
			return _regenerator2.default.wrap(function concat$e$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(thiz.toStringNative(), 't0', 1);

						case 1:
							base = _context4.t0;
							return _context4.delegateYield(_g.map(args, /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
								return _regenerator2.default.wrap(function _callee$(_context3) {
									while (1) {
										switch (_context3.prev = _context3.next) {
											case 0:
												return _context3.delegateYield(v.toStringNative(), 't0', 1);

											case 1:
												return _context3.abrupt('return', _context3.t0);

											case 2:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee, this);
							})), 't1', 3);

						case 3:
							realArgs = _context4.t1;
							out = String.prototype.concat.apply(base, realArgs);
							return _context4.abrupt('return', realm.fromNative(out));

						case 6:
						case 'end':
							return _context4.stop();
					}
				}
			}, concat$e, this);
		})

		//TODO: Replacement arg can be a regex.

	}, {
		key: 'replace$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function replace$e(thiz, args, realm) {
			var base, realArgs, out;
			return _regenerator2.default.wrap(function replace$e$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(thiz.toStringNative(), 't0', 1);

						case 1:
							base = _context6.t0;
							return _context6.delegateYield(_g.map(args, /*#__PURE__*/_regenerator2.default.mark(function _callee2(v) {
								return _regenerator2.default.wrap(function _callee2$(_context5) {
									while (1) {
										switch (_context5.prev = _context5.next) {
											case 0:
												return _context5.delegateYield(v.toStringNative(), 't0', 1);

											case 1:
												return _context5.abrupt('return', _context5.t0);

											case 2:
											case 'end':
												return _context5.stop();
										}
									}
								}, _callee2, this);
							})), 't1', 3);

						case 3:
							realArgs = _context6.t1;
							out = String.prototype.replace.apply(base, realArgs);
							return _context6.abrupt('return', realm.fromNative(out));

						case 6:
						case 'end':
							return _context6.stop();
					}
				}
			}, replace$e, this);
		})
	}, {
		key: 'padEnd$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function padEnd$e(thiz, args, realm) {
			var base, length, hasPad, pad;
			return _regenerator2.default.wrap(function padEnd$e$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(thiz.toStringNative(), 't0', 1);

						case 1:
							base = _context7.t0;

							if (!(args.length < 1)) {
								_context7.next = 4;
								break;
							}

							return _context7.abrupt('return', thiz);

						case 4:
							return _context7.delegateYield(args[0].toIntNative(), 't1', 5);

						case 5:
							length = _context7.t1;
							hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';

							if (!hasPad) {
								_context7.next = 12;
								break;
							}

							return _context7.delegateYield(args[1].toStringNative(), 't3', 9);

						case 9:
							_context7.t2 = _context7.t3;
							_context7.next = 13;
							break;

						case 12:
							_context7.t2 = ' ';

						case 13:
							pad = _context7.t2;
							return _context7.abrupt('return', realm.fromNative(strPad(base, length, pad, false)));

						case 15:
						case 'end':
							return _context7.stop();
					}
				}
			}, padEnd$e, this);
		})
	}, {
		key: 'padStart$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function padStart$e(thiz, args, realm) {
			var base, length, hasPad, pad;
			return _regenerator2.default.wrap(function padStart$e$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.delegateYield(thiz.toStringNative(), 't0', 1);

						case 1:
							base = _context8.t0;

							if (!(args.length < 1)) {
								_context8.next = 4;
								break;
							}

							return _context8.abrupt('return', thiz);

						case 4:
							return _context8.delegateYield(args[0].toIntNative(), 't1', 5);

						case 5:
							length = _context8.t1;
							hasPad = args.length > 1 && args[1].jsTypeName != 'undefined';

							if (!hasPad) {
								_context8.next = 12;
								break;
							}

							return _context8.delegateYield(args[1].toStringNative(), 't3', 9);

						case 9:
							_context8.t2 = _context8.t3;
							_context8.next = 13;
							break;

						case 12:
							_context8.t2 = ' ';

						case 13:
							pad = _context8.t2;
							return _context8.abrupt('return', realm.fromNative(strPad(base, length, pad, true)));

						case 15:
						case 'end':
							return _context8.stop();
					}
				}
			}, padStart$e, this);
		})
	}, {
		key: 'toString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString$e(thiz) {
			return _regenerator2.default.wrap(function toString$e$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.delegateYield(StringPrototype.valueOf$e(thiz), 't0', 1);

						case 1:
							return _context9.abrupt('return', _context9.t0);

						case 2:
						case 'end':
							return _context9.stop();
					}
				}
			}, toString$e, this);
		})
	}, {
		key: 'length$cew',
		get: function get() {
			return StringPrototype.fromNative(0);
		}
	}]);
	return StringPrototype;
}(EasyObjectValue);

function strPad(base, length, pad, left) {
	if (length <= base.length) return base;
	var extra = length - base.length;
	var padding = new Array(1 + Math.ceil(extra / pad.length)).join(pad).substr(0, extra);
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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(forceArrayness),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(getLength),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(shiftRight),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(shiftLeft);

var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var PrimitiveValue = __webpack_require__(182);
var CompletionRecord = __webpack_require__(175);
var Value = __webpack_require__(153);
var _g = __webpack_require__(176);

function forceArrayness(v) {
	return _regenerator2.default.wrap(function forceArrayness$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (v.has('length')) {
						_context.next = 2;
						break;
					}

					return _context.delegateYield(v.set('length', Value.zero), 't0', 2);

				case 2:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getLength(v) {
	var m;
	return _regenerator2.default.wrap(function getLength$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					return _context2.delegateYield(v.get('length'), 't0', 1);

				case 1:
					m = _context2.t0;
					return _context2.delegateYield(m.toUIntNative(), 't1', 3);

				case 3:
					return _context2.abrupt('return', _context2.t1);

				case 4:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

var defaultSeperator = Value.fromNative(',');

function shiftRight(arr, start, amt) {
	var len, i, cur;
	return _regenerator2.default.wrap(function shiftRight$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					amt = amt || 1;
					return _context3.delegateYield(getLength(arr), 't0', 2);

				case 2:
					len = _context3.t0;
					i = len - 1;

				case 4:
					if (!(i >= start)) {
						_context3.next = 11;
						break;
					}

					return _context3.delegateYield(arr.get(i), 't1', 6);

				case 6:
					cur = _context3.t1;
					return _context3.delegateYield(arr.set(i + amt, cur), 't2', 8);

				case 8:
					--i;
					_context3.next = 4;
					break;

				case 11:
					return _context3.delegateYield(arr.set(start, Value.undef), 't3', 12);

				case 12:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

function shiftLeft(arr, start, amt) {
	var len, i, cur, _i;

	return _regenerator2.default.wrap(function shiftLeft$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					return _context4.delegateYield(getLength(arr), 't0', 1);

				case 1:
					len = _context4.t0;
					i = start;

				case 3:
					if (!(i < len)) {
						_context4.next = 10;
						break;
					}

					return _context4.delegateYield(arr.get(i), 't1', 5);

				case 5:
					cur = _context4.t1;
					return _context4.delegateYield(arr.set(i - amt, cur), 't2', 7);

				case 7:
					++i;
					_context4.next = 3;
					break;

				case 10:
					for (_i = len - amt; _i < len; ++_i) {
						delete arr.properties[_i];
					}
					return _context4.delegateYield(arr.set('length', Value.fromNative(len - amt)), 't3', 12);

				case 12:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

var ArrayPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(ArrayPrototype, _EasyObjectValue);

	function ArrayPrototype() {
		(0, _classCallCheck3.default)(this, ArrayPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (ArrayPrototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrayPrototype, null, [{
		key: 'concat$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function concat$e(thiz, args, s) {
			var fx, targ, out, toCopy, idx, _iterator, _isArray, _i2, _ref, arr, l, i, tv;

			return _regenerator2.default.wrap(function concat$e$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							out = [];
							toCopy = [thiz].concat(args);
							idx = 0;
							_iterator = toCopy, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 8:
							if (!_isArray) {
								_context5.next = 14;
								break;
							}

							if (!(_i2 >= _iterator.length)) {
								_context5.next = 11;
								break;
							}

							return _context5.abrupt('break', 39);

						case 11:
							_ref = _iterator[_i2++];
							_context5.next = 18;
							break;

						case 14:
							_i2 = _iterator.next();

							if (!_i2.done) {
								_context5.next = 17;
								break;
							}

							return _context5.abrupt('break', 39);

						case 17:
							_ref = _i2.value;

						case 18:
							arr = _ref;

							if (!(arr instanceof PrimitiveValue)) {
								_context5.next = 23;
								break;
							}

							out[idx++] = arr;
							_context5.next = 37;
							break;

						case 23:
							if (arr.has('length')) {
								_context5.next = 27;
								break;
							}

							out[idx++] = arr;
							_context5.next = 37;
							break;

						case 27:
							return _context5.delegateYield(getLength(arr), 't0', 28);

						case 28:
							l = _context5.t0;
							i = 0;

						case 30:
							if (!(i < l)) {
								_context5.next = 37;
								break;
							}

							return _context5.delegateYield(arr.get(i, s.realm), 't1', 32);

						case 32:
							tv = _context5.t1;

							out[idx++] = tv;

						case 34:
							++i;
							_context5.next = 30;
							break;

						case 37:
							_context5.next = 8;
							break;

						case 39:
							return _context5.abrupt('return', ArrayValue.make(out, s.realm));

						case 40:
						case 'end':
							return _context5.stop();
					}
				}
			}, concat$e, this);
		})
	}, {
		key: 'filter$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function filter$e(thiz, args, s) {
			var fx, targ, test, out, l, i, tv, tru;
			return _regenerator2.default.wrap(function filter$e$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							test = /*#__PURE__*/_regenerator2.default.mark(function test(v, i) {
								var res;
								return _regenerator2.default.wrap(function test$(_context6) {
									while (1) {
										switch (_context6.prev = _context6.next) {
											case 0:
												return _context6.delegateYield(fx.call(targ, [v, Value.fromNative(i), thiz], s), 't0', 1);

											case 1:
												res = _context6.t0;
												return _context6.abrupt('return', res.truthy);

											case 3:
											case 'end':
												return _context6.stop();
										}
									}
								}, test, this);
							});
							out = [];
							return _context7.delegateYield(getLength(thiz), 't0', 7);

						case 7:
							l = _context7.t0;
							i = 0;

						case 9:
							if (!(i < l)) {
								_context7.next = 18;
								break;
							}

							return _context7.delegateYield(thiz.get(i), 't1', 11);

						case 11:
							tv = _context7.t1;
							return _context7.delegateYield(test(tv, i), 't2', 13);

						case 13:
							tru = _context7.t2;

							if (tru) out.push(tv);

						case 15:
							++i;
							_context7.next = 9;
							break;

						case 18:
							return _context7.abrupt('return', ArrayValue.make(out, s.realm));

						case 19:
						case 'end':
							return _context7.stop();
					}
				}
			}, filter$e, this);
		})
	}, {
		key: 'every$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function every$e(thiz, args, s) {
			var fx, targ, test, l, i, tv, tru;
			return _regenerator2.default.wrap(function every$e$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							test = /*#__PURE__*/_regenerator2.default.mark(function test(v, i) {
								var res;
								return _regenerator2.default.wrap(function test$(_context8) {
									while (1) {
										switch (_context8.prev = _context8.next) {
											case 0:
												return _context8.delegateYield(fx.call(targ, [v, Value.fromNative(i), thiz], s), 't0', 1);

											case 1:
												res = _context8.t0;
												return _context8.abrupt('return', res.truthy);

											case 3:
											case 'end':
												return _context8.stop();
										}
									}
								}, test, this);
							});
							return _context9.delegateYield(getLength(thiz), 't0', 6);

						case 6:
							l = _context9.t0;
							i = 0;

						case 8:
							if (!(i < l)) {
								_context9.next = 18;
								break;
							}

							return _context9.delegateYield(thiz.get(i), 't1', 10);

						case 10:
							tv = _context9.t1;
							return _context9.delegateYield(test(tv, i), 't2', 12);

						case 12:
							tru = _context9.t2;

							if (tru) {
								_context9.next = 15;
								break;
							}

							return _context9.abrupt('return', Value.false);

						case 15:
							++i;
							_context9.next = 8;
							break;

						case 18:
							return _context9.abrupt('return', Value.true);

						case 19:
						case 'end':
							return _context9.stop();
					}
				}
			}, every$e, this);
		})
	}, {
		key: 'some$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function some$e(thiz, args, s) {
			var fx, targ, test, l, i, tv, tru;
			return _regenerator2.default.wrap(function some$e$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							test = /*#__PURE__*/_regenerator2.default.mark(function test(v, i) {
								var res;
								return _regenerator2.default.wrap(function test$(_context10) {
									while (1) {
										switch (_context10.prev = _context10.next) {
											case 0:
												return _context10.delegateYield(fx.call(targ, [v, Value.fromNative(i), thiz], s), 't0', 1);

											case 1:
												res = _context10.t0;
												return _context10.abrupt('return', res.truthy);

											case 3:
											case 'end':
												return _context10.stop();
										}
									}
								}, test, this);
							});
							return _context11.delegateYield(getLength(thiz), 't0', 6);

						case 6:
							l = _context11.t0;
							i = 0;

						case 8:
							if (!(i < l)) {
								_context11.next = 18;
								break;
							}

							return _context11.delegateYield(thiz.get(i), 't1', 10);

						case 10:
							tv = _context11.t1;
							return _context11.delegateYield(test(tv, i), 't2', 12);

						case 12:
							tru = _context11.t2;

							if (!tru) {
								_context11.next = 15;
								break;
							}

							return _context11.abrupt('return', Value.true);

						case 15:
							++i;
							_context11.next = 8;
							break;

						case 18:
							return _context11.abrupt('return', Value.false);

						case 19:
						case 'end':
							return _context11.stop();
					}
				}
			}, some$e, this);
		})
	}, {
		key: 'find$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function find$e(thiz, args, s) {
			var fx, targ, test, l, i, tv, tru;
			return _regenerator2.default.wrap(function find$e$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							test = /*#__PURE__*/_regenerator2.default.mark(function test(v, i) {
								var res;
								return _regenerator2.default.wrap(function test$(_context12) {
									while (1) {
										switch (_context12.prev = _context12.next) {
											case 0:
												return _context12.delegateYield(fx.call(targ, [v, Value.fromNative(i), thiz], s), 't0', 1);

											case 1:
												res = _context12.t0;
												return _context12.abrupt('return', res.truthy);

											case 3:
											case 'end':
												return _context12.stop();
										}
									}
								}, test, this);
							});
							return _context13.delegateYield(getLength(thiz), 't0', 6);

						case 6:
							l = _context13.t0;
							i = 0;

						case 8:
							if (!(i < l)) {
								_context13.next = 18;
								break;
							}

							return _context13.delegateYield(thiz.get(i), 't1', 10);

						case 10:
							tv = _context13.t1;
							return _context13.delegateYield(test(tv, i), 't2', 12);

						case 12:
							tru = _context13.t2;

							if (!tru) {
								_context13.next = 15;
								break;
							}

							return _context13.abrupt('return', tv);

						case 15:
							++i;
							_context13.next = 8;
							break;

						case 18:
							return _context13.abrupt('return', Value.undef);

						case 19:
						case 'end':
							return _context13.stop();
					}
				}
			}, find$e, this);
		})
	}, {
		key: 'map$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function map$e(thiz, args, s) {
			var fx, targ, l, out, i, tv, v;
			return _regenerator2.default.wrap(function map$e$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];

							if (fx.isCallable) {
								_context14.next = 7;
								break;
							}

							_context14.next = 6;
							return CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');

						case 6:
							return _context14.abrupt('return', _context14.sent);

						case 7:

							if (args.length > 1) targ = args[1];

							return _context14.delegateYield(getLength(thiz), 't0', 9);

						case 9:
							l = _context14.t0;
							out = new Array(l);
							i = 0;

						case 12:
							if (!(i < l)) {
								_context14.next = 25;
								break;
							}

							if (thiz.has(i)) {
								_context14.next = 15;
								break;
							}

							return _context14.abrupt('continue', 22);

						case 15:
							return _context14.delegateYield(thiz.get(i), 't1', 16);

						case 16:
							tv = _context14.t1;
							return _context14.delegateYield(fx.call(targ, [tv, Value.fromNative(i), thiz], s), 't2', 18);

						case 18:
							_context14.next = 20;
							return _context14.t2;

						case 20:
							v = _context14.sent;

							out[i] = v;

						case 22:
							++i;
							_context14.next = 12;
							break;

						case 25:
							return _context14.abrupt('return', ArrayValue.make(out, s.realm));

						case 26:
						case 'end':
							return _context14.stop();
					}
				}
			}, map$e, this);
		})
	}, {
		key: 'forEach$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function forEach$e(thiz, args, s) {
			var fx, targ, l, i, v, res;
			return _regenerator2.default.wrap(function forEach$e$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							fx = Value.undef;
							targ = Value.undef;

							if (args.length > 0) fx = args[0];
							if (args.length > 1) targ = args[1];

							return _context15.delegateYield(getLength(thiz), 't0', 5);

						case 5:
							l = _context15.t0;
							i = 0;

						case 7:
							if (!(i < l)) {
								_context15.next = 17;
								break;
							}

							if (thiz.has(i)) {
								_context15.next = 10;
								break;
							}

							return _context15.abrupt('continue', 14);

						case 10:
							return _context15.delegateYield(thiz.get(i), 't1', 11);

						case 11:
							v = _context15.t1;
							return _context15.delegateYield(fx.call(targ, [v, Value.fromNative(i), thiz], s), 't2', 13);

						case 13:
							res = _context15.t2;

						case 14:
							++i;
							_context15.next = 7;
							break;

						case 17:
							return _context15.abrupt('return', Value.undef);

						case 18:
						case 'end':
							return _context15.stop();
					}
				}
			}, forEach$e, this);
		})
	}, {
		key: 'indexOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function indexOf$e(thiz, args) {
			var l, match, start, startn, i, v;
			return _regenerator2.default.wrap(function indexOf$e$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							return _context16.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context16.t0;
							match = args[0] || Value.undef;
							start = args[1] || Value.zero;
							return _context16.delegateYield(start.toNumberValue(), 't1', 5);

						case 5:
							startn = _context16.t1.native;


							if (isNaN(startn)) startn = 0;else if (startn < 0) startn = 0;

							if (!(l > startn)) {
								_context16.next = 19;
								break;
							}

							i = startn;

						case 9:
							if (!(i < l)) {
								_context16.next = 19;
								break;
							}

							return _context16.delegateYield(thiz.get(i), 't2', 11);

						case 11:
							v = _context16.t2;

							if (!v) v = Value.undef;
							return _context16.delegateYield(v.tripleEquals(match), 't3', 14);

						case 14:
							if (!_context16.t3.truthy) {
								_context16.next = 16;
								break;
							}

							return _context16.abrupt('return', Value.fromNative(i));

						case 16:
							++i;
							_context16.next = 9;
							break;

						case 19:
							return _context16.abrupt('return', Value.fromNative(-1));

						case 20:
						case 'end':
							return _context16.stop();
					}
				}
			}, indexOf$e, this);
		})
	}, {
		key: 'lastIndexOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function lastIndexOf$e(thiz, args) {
			var l, match, startn, i, v;
			return _regenerator2.default.wrap(function lastIndexOf$e$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							return _context17.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context17.t0;
							match = args[0] || Value.undef;
							startn = l - 1;

							if (!(args.length > 1)) {
								_context17.next = 7;
								break;
							}

							return _context17.delegateYield(args[1].toIntNative(), 't1', 6);

						case 6:
							startn = _context17.t1;

						case 7:
							if (isNaN(startn)) startn = 0;
							if (startn < 0) startn += l;
							if (startn > l) startn = l;

							if (!(startn < 0)) {
								_context17.next = 12;
								break;
							}

							return _context17.abrupt('return', Value.fromNative(-1));

						case 12:
							i = startn;

						case 13:
							if (!(i >= 0)) {
								_context17.next = 25;
								break;
							}

							if (thiz.has(i)) {
								_context17.next = 16;
								break;
							}

							return _context17.abrupt('continue', 22);

						case 16:
							return _context17.delegateYield(thiz.get(i), 't2', 17);

						case 17:
							v = _context17.t2;

							if (!v) v = Value.undef;
							return _context17.delegateYield(v.tripleEquals(match), 't3', 20);

						case 20:
							if (!_context17.t3.truthy) {
								_context17.next = 22;
								break;
							}

							return _context17.abrupt('return', Value.fromNative(i));

						case 22:
							--i;
							_context17.next = 13;
							break;

						case 25:
							return _context17.abrupt('return', Value.fromNative(-1));

						case 26:
						case 'end':
							return _context17.stop();
					}
				}
			}, lastIndexOf$e, this);
		})
	}, {
		key: 'join$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function join$e(thiz, args) {
			var l, seperator, sepstr, strings, i, v, sv;
			return _regenerator2.default.wrap(function join$e$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							return _context18.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context18.t0;
							seperator = args[0] || defaultSeperator;
							return _context18.delegateYield(seperator.toStringValue(), 't1', 4);

						case 4:
							sepstr = _context18.t1.native;
							strings = new Array(l);
							i = 0;

						case 7:
							if (!(i < l)) {
								_context18.next = 24;
								break;
							}

							if (thiz.has(i)) {
								_context18.next = 10;
								break;
							}

							return _context18.abrupt('continue', 21);

						case 10:
							return _context18.delegateYield(thiz.get(i), 't2', 11);

						case 11:
							v = _context18.t2;

							if (v) {
								_context18.next = 16;
								break;
							}

							strings[i] = '';
							_context18.next = 21;
							break;

						case 16:
							if (!(v.specTypeName == 'undefined' || v.specTypeName == 'null')) {
								_context18.next = 18;
								break;
							}

							return _context18.abrupt('continue', 21);

						case 18:
							return _context18.delegateYield(v.toStringValue(), 't3', 19);

						case 19:
							sv = _context18.t3;

							if (sv) strings[i] = sv.native;else strings[i] = undefined; //TODO: THROW HERE?

						case 21:
							++i;
							_context18.next = 7;
							break;

						case 24:
							return _context18.abrupt('return', Value.fromNative(strings.join(sepstr)));

						case 25:
						case 'end':
							return _context18.stop();
					}
				}
			}, join$e, this);
		})
	}, {
		key: 'push$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function push$e(thiz, args) {
			var l, i, nl;
			return _regenerator2.default.wrap(function push$e$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							return _context19.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context19.t0;
							i = 0;

						case 3:
							if (!(i < args.length)) {
								_context19.next = 8;
								break;
							}

							return _context19.delegateYield(thiz.set(l + i, args[i]), 't1', 5);

						case 5:
							++i;
							_context19.next = 3;
							break;

						case 8:
							nl = Value.fromNative(l + args.length);
							return _context19.delegateYield(thiz.set('length', nl), 't2', 10);

						case 10:
							return _context19.abrupt('return', Value.fromNative(l + args.length));

						case 11:
						case 'end':
							return _context19.stop();
					}
				}
			}, push$e, this);
		})
	}, {
		key: 'pop$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function pop$e(thiz, args) {
			var l, val;
			return _regenerator2.default.wrap(function pop$e$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							return _context20.delegateYield(forceArrayness(thiz), 't0', 1);

						case 1:
							return _context20.delegateYield(getLength(thiz), 't1', 2);

						case 2:
							l = _context20.t1;

							if (!(l < 1)) {
								_context20.next = 5;
								break;
							}

							return _context20.abrupt('return', Value.undef);

						case 5:
							return _context20.delegateYield(thiz.get(l - 1), 't2', 6);

						case 6:
							val = _context20.t2;
							return _context20.delegateYield(thiz.set('length', Value.fromNative(l - 1)), 't3', 8);

						case 8:
							return _context20.abrupt('return', val);

						case 9:
						case 'end':
							return _context20.stop();
					}
				}
			}, pop$e, this);
		})
	}, {
		key: 'reverse$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function reverse$e(thiz, args, s) {
			var l, i, lv, rv;
			return _regenerator2.default.wrap(function reverse$e$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							return _context21.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context21.t0;
							i = 0;

						case 3:
							if (!(i < Math.floor(l / 2))) {
								_context21.next = 13;
								break;
							}

							return _context21.delegateYield(thiz.get(i), 't1', 5);

						case 5:
							lv = _context21.t1;
							return _context21.delegateYield(thiz.get(l - i - 1), 't2', 7);

						case 7:
							rv = _context21.t2;
							return _context21.delegateYield(thiz.set(l - i - 1, lv, s), 't3', 9);

						case 9:
							return _context21.delegateYield(thiz.set(i, rv, s), 't4', 10);

						case 10:
							++i;
							_context21.next = 3;
							break;

						case 13:
							return _context21.abrupt('return', thiz);

						case 14:
						case 'end':
							return _context21.stop();
					}
				}
			}, reverse$e, this);
		})
	}, {
		key: 'reduce$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function reduce$e(thiz, args, s) {
			var l, acc, fx, i, lv;
			return _regenerator2.default.wrap(function reduce$e$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							return _context22.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context22.t0;
							acc = void 0;
							fx = args[0];

							if (!(args.length < 1 || !fx.isCallable)) {
								_context22.next = 8;
								break;
							}

							_context22.next = 7;
							return CompletionRecord.makeTypeError(s.realm, 'First argument to reduce must be a function.');

						case 7:
							return _context22.abrupt('return', _context22.sent);

						case 8:

							if (args.length > 1) {
								acc = args[1];
							}

							i = 0;

						case 10:
							if (!(i < l)) {
								_context22.next = 23;
								break;
							}

							if (thiz.has(i)) {
								_context22.next = 13;
								break;
							}

							return _context22.abrupt('continue', 20);

						case 13:
							return _context22.delegateYield(thiz.get(i), 't1', 14);

						case 14:
							lv = _context22.t1;

							if (acc) {
								_context22.next = 18;
								break;
							}

							acc = lv;
							return _context22.abrupt('continue', 20);

						case 18:
							return _context22.delegateYield(fx.call(thiz, [acc, lv], s), 't2', 19);

						case 19:
							acc = _context22.t2;

						case 20:
							++i;
							_context22.next = 10;
							break;

						case 23:
							if (acc) {
								_context22.next = 27;
								break;
							}

							_context22.next = 26;
							return CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');

						case 26:
							return _context22.abrupt('return', _context22.sent);

						case 27:
							return _context22.abrupt('return', acc);

						case 28:
						case 'end':
							return _context22.stop();
					}
				}
			}, reduce$e, this);
		})

		//TODO: Factor some stuff out of reduce and reduce right into a common function.

	}, {
		key: 'reduceRight$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function reduceRight$e(thiz, args, s) {
			var l, acc, fx, i, lv;
			return _regenerator2.default.wrap(function reduceRight$e$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							return _context23.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context23.t0;
							acc = void 0;
							fx = args[0];

							if (!(args.length < 1 || !fx.isCallable)) {
								_context23.next = 8;
								break;
							}

							_context23.next = 7;
							return CompletionRecord.makeTypeError(s.realm, 'First argument to reduceRight must be a function.');

						case 7:
							return _context23.abrupt('return', _context23.sent);

						case 8:

							if (args.length > 1) {
								acc = args[1];
							}

							i = l - 1;

						case 10:
							if (!(i >= 0)) {
								_context23.next = 23;
								break;
							}

							if (thiz.has(i)) {
								_context23.next = 13;
								break;
							}

							return _context23.abrupt('continue', 20);

						case 13:
							return _context23.delegateYield(thiz.get(i), 't1', 14);

						case 14:
							lv = _context23.t1;

							if (acc) {
								_context23.next = 18;
								break;
							}

							acc = lv;
							return _context23.abrupt('continue', 20);

						case 18:
							return _context23.delegateYield(fx.call(thiz, [acc, lv], s), 't2', 19);

						case 19:
							acc = _context23.t2;

						case 20:
							--i;
							_context23.next = 10;
							break;

						case 23:
							if (acc) {
								_context23.next = 27;
								break;
							}

							_context23.next = 26;
							return CompletionRecord.makeTypeError(s.realm, 'Reduce an empty array with no initial value.');

						case 26:
							return _context23.abrupt('return', _context23.sent);

						case 27:
							return _context23.abrupt('return', acc);

						case 28:
						case 'end':
							return _context23.stop();
					}
				}
			}, reduceRight$e, this);
		})
	}, {
		key: 'shift$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function shift$e(thiz, args) {
			var l, val;
			return _regenerator2.default.wrap(function shift$e$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							return _context24.delegateYield(forceArrayness(thiz), 't0', 1);

						case 1:
							return _context24.delegateYield(getLength(thiz), 't1', 2);

						case 2:
							l = _context24.t1;

							if (!(l < 1)) {
								_context24.next = 5;
								break;
							}

							return _context24.abrupt('return', Value.undef);

						case 5:
							return _context24.delegateYield(thiz.get(0), 't2', 6);

						case 6:
							val = _context24.t2;
							return _context24.delegateYield(shiftLeft(thiz, 1, 1), 't3', 8);

						case 8:
							return _context24.abrupt('return', val);

						case 9:
						case 'end':
							return _context24.stop();
					}
				}
			}, shift$e, this);
		})
	}, {
		key: 'slice$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function slice$e(thiz, args, s) {
			var length, result, start, end, i;
			return _regenerator2.default.wrap(function slice$e$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							return _context25.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							length = _context25.t0;
							result = [];
							start = 0;
							end = length;

							if (!(args.length > 0)) {
								_context25.next = 8;
								break;
							}

							return _context25.delegateYield(args[0].toIntNative(), 't1', 7);

						case 7:
							start = _context25.t1;

						case 8:
							if (!(args.length > 1)) {
								_context25.next = 11;
								break;
							}

							return _context25.delegateYield(args[1].toIntNative(), 't2', 10);

						case 10:
							end = _context25.t2;

						case 11:

							if (start < 0) start = length + start;
							if (end < 0) end = length + end;

							if (end > length) end = length;
							if (start < 0) start = 0;

							i = start;

						case 16:
							if (!(i < end)) {
								_context25.next = 24;
								break;
							}

							_context25.t3 = result;
							return _context25.delegateYield(thiz.get('' + i), 't4', 19);

						case 19:
							_context25.t5 = _context25.t4;

							_context25.t3.push.call(_context25.t3, _context25.t5);

						case 21:
							++i;
							_context25.next = 16;
							break;

						case 24:
							return _context25.abrupt('return', ArrayValue.make(result, s.realm));

						case 25:
						case 'end':
							return _context25.stop();
					}
				}
			}, slice$e, this);
		})
	}, {
		key: 'splice$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function splice$e(thiz, args, s) {
			var result, deleteCount, len, start, deleted, toAdd, delta, i, _i3;

			return _regenerator2.default.wrap(function splice$e$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							//TODO: Call ToObject() on thisz;


							result = [];
							deleteCount = void 0;
							return _context26.delegateYield(getLength(thiz), 't0', 3);

						case 3:
							len = _context26.t0;
							start = len;

							if (!isNaN(len)) {
								_context26.next = 7;
								break;
							}

							return _context26.abrupt('return', thiz);

						case 7:
							if (!(args.length > 0)) {
								_context26.next = 10;
								break;
							}

							return _context26.delegateYield(args[0].toIntNative(), 't1', 9);

						case 9:
							start = _context26.t1;

						case 10:

							if (start > len) start = len;else if (start < 0) start = len + start;

							if (!(args.length > 1)) {
								_context26.next = 16;
								break;
							}

							return _context26.delegateYield(args[1].toIntNative(), 't2', 13);

						case 13:
							deleteCount = _context26.t2;
							_context26.next = 17;
							break;

						case 16:
							deleteCount = len - start;

						case 17:
							if (deleteCount > len - start) deleteCount = len - start;
							if (deleteCount < 0) deleteCount = 0;

							deleted = [];
							toAdd = args.slice(2);
							delta = toAdd.length - deleteCount;
							i = start;

						case 23:
							if (!(i < start + deleteCount)) {
								_context26.next = 31;
								break;
							}

							_context26.t3 = deleted;
							return _context26.delegateYield(thiz.get(i), 't4', 26);

						case 26:
							_context26.t5 = _context26.t4;

							_context26.t3.push.call(_context26.t3, _context26.t5);

						case 28:
							++i;
							_context26.next = 23;
							break;

						case 31:
							if (!(delta > 0)) {
								_context26.next = 33;
								break;
							}

							return _context26.delegateYield(shiftRight(thiz, start, delta), 't6', 33);

						case 33:
							if (!(delta < 0)) {
								_context26.next = 35;
								break;
							}

							return _context26.delegateYield(shiftLeft(thiz, start - delta, -delta), 't7', 35);

						case 35:
							_i3 = 0;

						case 36:
							if (!(_i3 < toAdd.length)) {
								_context26.next = 41;
								break;
							}

							return _context26.delegateYield(thiz.set(start + _i3, toAdd[_i3]), 't8', 38);

						case 38:
							++_i3;
							_context26.next = 36;
							break;

						case 41:
							return _context26.delegateYield(thiz.set('length', Value.fromNative(len + delta)), 't9', 42);

						case 42:
							return _context26.abrupt('return', ArrayValue.make(deleted, s.realm));

						case 43:
						case 'end':
							return _context26.stop();
					}
				}
			}, splice$e, this);
		})
	}, {
		key: 'sort$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function sort$e(thiz, args, s) {
			var length, vals, i, comp, fx, nue, _i4;

			return _regenerator2.default.wrap(function sort$e$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							return _context29.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							length = _context29.t0;
							vals = new Array(length);
							i = 0;

						case 4:
							if (!(i < length)) {
								_context29.next = 10;
								break;
							}

							return _context29.delegateYield(thiz.get(i), 't1', 6);

						case 6:
							vals[i] = _context29.t1;

						case 7:
							++i;
							_context29.next = 4;
							break;

						case 10:
							comp = /*#__PURE__*/_regenerator2.default.mark(function comp(left, right) {
								var l, r;
								return _regenerator2.default.wrap(function comp$(_context27) {
									while (1) {
										switch (_context27.prev = _context27.next) {
											case 0:
												return _context27.delegateYield(left.toStringValue(), 't0', 1);

											case 1:
												l = _context27.t0;

												if (l) {
													_context27.next = 4;
													break;
												}

												return _context27.abrupt('return', false);

											case 4:
												return _context27.delegateYield(right.toStringValue(), 't1', 5);

											case 5:
												r = _context27.t1;

												if (r) {
													_context27.next = 8;
													break;
												}

												return _context27.abrupt('return', true);

											case 8:
												return _context27.delegateYield(l.lt(r), 't2', 9);

											case 9:
												return _context27.abrupt('return', _context27.t2.truthy);

											case 10:
											case 'end':
												return _context27.stop();
										}
									}
								}, comp, this);
							});

							if (!(args.length > 0)) {
								_context29.next = 18;
								break;
							}

							fx = args[0];

							if (fx.isCallable) {
								_context29.next = 17;
								break;
							}

							_context29.next = 16;
							return CompletionRecord.makeTypeError(s.realm, 'Arg2 not calalble.');

						case 16:
							return _context29.abrupt('return', _context29.sent);

						case 17:
							comp = /*#__PURE__*/_regenerator2.default.mark(function comp(left, right) {
								var res;
								return _regenerator2.default.wrap(function comp$(_context28) {
									while (1) {
										switch (_context28.prev = _context28.next) {
											case 0:
												return _context28.delegateYield(fx.call(Value.undef, [left, right], s), 't0', 1);

											case 1:
												res = _context28.t0;
												return _context28.delegateYield(res.lt(Value.fromNative(0)), 't1', 3);

											case 3:
												return _context28.abrupt('return', _context28.t1.truthy);

											case 4:
											case 'end':
												return _context28.stop();
										}
									}
								}, comp, this);
							});

						case 18:
							return _context29.delegateYield(_g.sort(vals, comp), 't2', 19);

						case 19:
							nue = _context29.t2;
							_i4 = 0;

						case 21:
							if (!(_i4 < length)) {
								_context29.next = 26;
								break;
							}

							return _context29.delegateYield(thiz.set(_i4, nue[_i4]), 't3', 23);

						case 23:
							++_i4;
							_context29.next = 21;
							break;

						case 26:
							return _context29.abrupt('return', thiz);

						case 27:
						case 'end':
							return _context29.stop();
					}
				}
			}, sort$e, this);
		})
	}, {
		key: 'toString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString$e(thiz, args, s) {
			var joinfn, ots;
			return _regenerator2.default.wrap(function toString$e$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.delegateYield(thiz.get('join'), 't0', 1);

						case 1:
							joinfn = _context30.t0;

							if (!(!joinfn || !joinfn.isCallable)) {
								_context30.next = 9;
								break;
							}

							return _context30.delegateYield(s.realm.ObjectPrototype.get('toString'), 't1', 4);

						case 4:
							ots = _context30.t1;
							return _context30.delegateYield(ots.call(thiz, []), 't2', 6);

						case 6:
							return _context30.abrupt('return', _context30.t2);

						case 9:
							return _context30.delegateYield(joinfn.call(thiz, [defaultSeperator]), 't3', 10);

						case 10:
							return _context30.abrupt('return', _context30.t3);

						case 11:
						case 'end':
							return _context30.stop();
					}
				}
			}, toString$e, this);
		})
	}, {
		key: 'unshift$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function unshift$e(thiz, args, s) {
			var amt, len, i, nl;
			return _regenerator2.default.wrap(function unshift$e$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							amt = args.length;
							return _context31.delegateYield(getLength(thiz), 't0', 2);

						case 2:
							len = _context31.t0;

							if (isNaN(len)) len = 0;
							return _context31.delegateYield(shiftRight(thiz, 0, amt), 't1', 5);

						case 5:
							i = 0;

						case 6:
							if (!(i < amt)) {
								_context31.next = 11;
								break;
							}

							return _context31.delegateYield(thiz.set(i, args[i]), 't2', 8);

						case 8:
							++i;
							_context31.next = 6;
							break;

						case 11:
							nl = Value.fromNative(len + amt);
							return _context31.delegateYield(thiz.set('length', nl, s), 't3', 13);

						case 13:
							return _context31.abrupt('return', nl);

						case 14:
						case 'end':
							return _context31.stop();
					}
				}
			}, unshift$e, this);
		})
	}, {
		key: 'fill$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function fill$e(thiz, args, s) {
			var l, value, start, startn, end, endn, i;
			return _regenerator2.default.wrap(function fill$e$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							return _context32.delegateYield(getLength(thiz), 't0', 1);

						case 1:
							l = _context32.t0;
							value = args[0] || Value.undef;
							start = args[1] || Value.zero;
							return _context32.delegateYield(start.toNumberValue(), 't1', 5);

						case 5:
							startn = _context32.t1.native;
							end = args[2] || Value.fromNative(l);
							return _context32.delegateYield(end.toNumberValue(), 't2', 8);

						case 8:
							endn = _context32.t2.native;


							if (isNaN(startn)) startn = 0;else if (startn < 0) startn = l + startn;

							if (isNaN(endn)) endn = 0;else if (endn < 0) endn = l + endn;

							if (!(l > startn)) {
								_context32.next = 18;
								break;
							}

							i = startn;

						case 13:
							if (!(i < endn)) {
								_context32.next = 18;
								break;
							}

							return _context32.delegateYield(thiz.set(i, value, s), 't3', 15);

						case 15:
							++i;
							_context32.next = 13;
							break;

						case 18:
							return _context32.abrupt('return', thiz);

						case 19:
						case 'end':
							return _context32.stop();
					}
				}
			}, fill$e, this);
		})
	}]);
	return ArrayPrototype;
}(EasyObjectValue);

ArrayPrototype.prototype.wellKnownName = '%ArrayPrototype%';

module.exports = ArrayPrototype;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var CompletionRecord = __webpack_require__(175);

var ArrayObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(ArrayObject, _EasyObjectValue);

	function ArrayObject() {
		(0, _classCallCheck3.default)(this, ArrayObject);
		return (0, _possibleConstructorReturn3.default)(this, (ArrayObject.__proto__ || (0, _getPrototypeOf2.default)(ArrayObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrayObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s) {
			var len, result;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(args.length === 1 && args[0].jsTypeName === 'number')) {
								_context.next = 9;
								break;
							}

							len = args[0].toNative();

							if (!(len != len >> 0)) {
								_context.next = 6;
								break;
							}

							_context.next = 5;
							return CompletionRecord.makeRangeError(this.realm, "Invalid array length");

						case 5:
							return _context.abrupt('return', _context.sent);

						case 6:
							result = ArrayValue.make([], s.realm);
							return _context.delegateYield(result.set('length', args[0]), 't0', 8);

						case 8:
							return _context.abrupt('return', result);

						case 9:
							return _context.abrupt('return', ArrayValue.make(args, s.realm));

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.ArrayPrototype;
		}
	}, {
		key: 'constructorFor',
		value: function constructorFor(realm) {
			return realm.ArrayPrototype;
		}
		//objPrototype(realm) { return realm.Function; }


	}], [{
		key: 'isArray',
		value: /*#__PURE__*/_regenerator2.default.mark(function isArray(thiz, args) {
			return _regenerator2.default.wrap(function isArray$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(args.length < 1)) {
								_context2.next = 2;
								break;
							}

							return _context2.abrupt('return', EasyObjectValue.false);

						case 2:
							return _context2.abrupt('return', EasyObjectValue.fromNative(args[0] instanceof ArrayValue));

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, isArray, this);
		})
	}]);
	return ArrayObject;
}(EasyObjectValue);

module.exports = ArrayObject;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var CompletionRecord = __webpack_require__(175);
var PropertyDescriptor = __webpack_require__(181);

var StringObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(StringObject, _EasyObjectValue);

	function StringObject() {
		(0, _classCallCheck3.default)(this, StringObject);
		return (0, _possibleConstructorReturn3.default)(this, (StringObject.__proto__ || (0, _getPrototypeOf2.default)(StringObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(StringObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var asConstructor, len, pv, plen;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (asConstructor) {
								_context.next = 6;
								break;
							}

							if (!(args.length == 0)) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return', scope.realm.fromNative(''));

						case 4:
							return _context.delegateYield(args[0].toStringValue(), 't0', 5);

						case 5:
							return _context.abrupt('return', _context.t0);

						case 6:
							len = 0;

							if (!(args.length > 0)) {
								_context.next = 14;
								break;
							}

							return _context.delegateYield(args[0].toStringValue(), 't1', 9);

						case 9:
							pv = _context.t1;

							len = pv.native.length;
							thiz.primativeValue = pv;
							_context.next = 15;
							break;

						case 14:
							thiz.primativeValue = EasyObjectValue.emptyString;

						case 15:
							plen = new PropertyDescriptor(scope.realm.fromNative(len));

							plen.enumerable = false;
							plen.configurable = false;
							plen.writable = false;
							thiz.rawSetProperty('length', plen);
							return _context.abrupt('return', thiz);

						case 21:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.StringPrototype;
		}
	}, {
		key: 'constructorFor',
		value: function constructorFor(realm) {
			return realm.StringPrototype;
		}
	}], [{
		key: 'fromCharCode',
		value: /*#__PURE__*/_regenerator2.default.mark(function fromCharCode(thiz, args) {
			var argz, i;
			return _regenerator2.default.wrap(function fromCharCode$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							argz = new Array(args.length);
							i = 0;

						case 2:
							if (!(i < args.length)) {
								_context2.next = 8;
								break;
							}

							return _context2.delegateYield(args[i].toNumberValue(), 't0', 4);

						case 4:
							argz[i] = _context2.t0.toNative();

						case 5:
							++i;
							_context2.next = 2;
							break;

						case 8:
							return _context2.abrupt('return', this.fromNative(String.fromCharCode.apply(String, argz)));

						case 9:
						case 'end':
							return _context2.stop();
					}
				}
			}, fromCharCode, this);
		})
	}, {
		key: 'raw',
		value: /*#__PURE__*/_regenerator2.default.mark(function raw(thiz, args) {
			var raw, result, i;
			return _regenerator2.default.wrap(function raw$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(args[0].get('raw'), 't0', 1);

						case 1:
							raw = _context3.t0;
							return _context3.delegateYield(raw.get(0), 't1', 3);

						case 3:
							result = _context3.t1;
							i = 1;

						case 5:
							if (!(i < args.length)) {
								_context3.next = 16;
								break;
							}

							return _context3.delegateYield(result.add(args[i]), 't2', 7);

						case 7:
							result = _context3.t2;
							_context3.t3 = result;
							return _context3.delegateYield(raw.get(i), 't4', 10);

						case 10:
							_context3.t5 = _context3.t4;
							return _context3.delegateYield(_context3.t3.add.call(_context3.t3, _context3.t5), 't6', 12);

						case 12:
							result = _context3.t6;

						case 13:
							++i;
							_context3.next = 5;
							break;

						case 16:
							return _context3.abrupt('return', result);

						case 17:
						case 'end':
							return _context3.stop();
					}
				}
			}, raw, this);
		})
	}]);
	return StringObject;
}(EasyObjectValue);

module.exports = StringObject;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var CompletionRecord = __webpack_require__(175);

var NumberObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(NumberObject, _EasyObjectValue);

	function NumberObject() {
		(0, _classCallCheck3.default)(this, NumberObject);
		return (0, _possibleConstructorReturn3.default)(this, (NumberObject.__proto__ || (0, _getPrototypeOf2.default)(NumberObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(NumberObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var asConstructor, pv;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (asConstructor) {
								_context.next = 6;
								break;
							}

							if (!(args.length < 1)) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return', EasyObjectValue.zero);

						case 4:
							return _context.delegateYield(args[0].toNumberValue(), 't0', 5);

						case 5:
							return _context.abrupt('return', _context.t0);

						case 6:
							pv = EasyObjectValue.zero;

							if (!(args.length > 0)) {
								_context.next = 10;
								break;
							}

							return _context.delegateYield(args[0].toNumberValue(), 't1', 9);

						case 9:
							pv = _context.t1;

						case 10:
							thiz.primativeValue = pv;

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.NumberPrototype;
		}
	}, {
		key: 'constructorFor',
		value: function constructorFor(realm) {
			return realm.NumberPrototype;
		}
	}], [{
		key: 'MAX_VALUE$cew',
		get: function get() {
			return Number.MAX_VALUE;
		}
	}, {
		key: 'MIN_VALUE$cew',
		get: function get() {
			return Number.MIN_VALUE;
		}
	}, {
		key: 'POSITIVE_INFINITY$cew',
		get: function get() {
			return Number.POSITIVE_INFINITY;
		}
	}, {
		key: 'NEGATIVE_INFINITY$cew',
		get: function get() {
			return Number.NEGATIVE_INFINITY;
		}
	}, {
		key: 'NaN$cew',
		get: function get() {
			return EasyObjectValue.nan;
		}
	}]);
	return NumberObject;
}(EasyObjectValue);

NumberObject.prototype.wellKnownName = '%Number%';
module.exports = NumberObject;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(182);
var EasyObjectValue = __webpack_require__(210);
var Value = __webpack_require__(153);

var BooleanPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(BooleanPrototype, _EasyObjectValue);

	function BooleanPrototype() {
		(0, _classCallCheck3.default)(this, BooleanPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (BooleanPrototype.__proto__ || (0, _getPrototypeOf2.default)(BooleanPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(BooleanPrototype, null, [{
		key: 'toString$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString$e(thiz, argz) {
			var pv;
			return _regenerator2.default.wrap(function toString$e$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							pv = thiz;

							if (thiz.specTypeName !== 'boolean') {
								pv = thiz.primativeValue;
							}

							if (!pv.truthy) {
								_context.next = 6;
								break;
							}

							return _context.abrupt('return', Value.fromNative('true'));

						case 6:
							return _context.abrupt('return', Value.fromNative('false'));

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, toString$e, this);
		})
	}, {
		key: 'valueOf$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function valueOf$e(thiz) {
			var pv;
			return _regenerator2.default.wrap(function valueOf$e$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(thiz.specTypeName === 'boolean')) {
								_context2.next = 2;
								break;
							}

							return _context2.abrupt('return', thiz);

						case 2:
							if (!(thiz.specTypeName === 'object')) {
								_context2.next = 6;
								break;
							}

							pv = thiz.primativeValue;

							if (!(pv.specTypeName === 'boolean')) {
								_context2.next = 6;
								break;
							}

							return _context2.abrupt('return', pv);

						case 6:
							throw new TypeError('Couldnt get there.');

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, valueOf$e, this);
		})
	}]);
	return BooleanPrototype;
}(EasyObjectValue);

module.exports = BooleanPrototype;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var EasyObjectValue = __webpack_require__(210);

var Boolean = function (_EasyObjectValue) {
	(0, _inherits3.default)(Boolean, _EasyObjectValue);

	function Boolean() {
		(0, _classCallCheck3.default)(this, Boolean);
		return (0, _possibleConstructorReturn3.default)(this, (Boolean.__proto__ || (0, _getPrototypeOf2.default)(Boolean)).apply(this, arguments));
	}

	(0, _createClass3.default)(Boolean, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var asConstructor, pv;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (asConstructor) {
								_context.next = 5;
								break;
							}

							if (!(args.length < 1)) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return', Value.false);

						case 4:
							return _context.abrupt('return', args[0].truthy ? Value.true : Value.false);

						case 5:
							if (args.length > 0) {
								pv = args[0].truthy ? Value.true : Value.false;

								thiz.primativeValue = pv;
							} else {
								thiz.primativeValue = false;
							}

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.BooleanPrototype;
		}
	}, {
		key: 'constructorFor',
		value: function constructorFor(realm) {
			return realm.BooleanPrototype;
		}
	}]);
	return Boolean;
}(EasyObjectValue);

module.exports = Boolean;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(toRegexp);

var Value = __webpack_require__(153);
var ArrayValue = __webpack_require__(192);

var CompletionRecord = __webpack_require__(175);

var EasyObjectValue = __webpack_require__(210);
var _g = __webpack_require__(176);

function toRegexp(x, realm) {
	return _regenerator2.default.wrap(function toRegexp$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (x.regexp) {
						_context.next = 4;
						break;
					}

					_context.next = 3;
					return CompletionRecord.makeTypeError(realm, 'Calling regex method on non regex.');

				case 3:
					return _context.abrupt('return', _context.sent);

				case 4:
					return _context.abrupt('return', x.regexp);

				case 5:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

var RegExpProtoype = function (_EasyObjectValue) {
	(0, _inherits3.default)(RegExpProtoype, _EasyObjectValue);

	function RegExpProtoype(realm) {
		(0, _classCallCheck3.default)(this, RegExpProtoype);

		var _this = (0, _possibleConstructorReturn3.default)(this, (RegExpProtoype.__proto__ || (0, _getPrototypeOf2.default)(RegExpProtoype)).call(this, realm));

		_this.regexp = new RegExp();
		return _this;
	}

	(0, _createClass3.default)(RegExpProtoype, null, [{
		key: 'test',
		value: /*#__PURE__*/_regenerator2.default.mark(function test(thiz, args, s) {
			var rx, str;
			return _regenerator2.default.wrap(function test$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.delegateYield(toRegexp(thiz, s.realm), 't0', 1);

						case 1:
							rx = _context2.t0;
							str = undefined;

							if (!(args.length > 0)) {
								_context2.next = 6;
								break;
							}

							return _context2.delegateYield(args[0].toStringNative(), 't1', 5);

						case 5:
							str = _context2.t1;

						case 6:
							return _context2.abrupt('return', this.fromNative(rx.test(str)));

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, test, this);
		})
	}, {
		key: 'exec',
		value: /*#__PURE__*/_regenerator2.default.mark(function exec(thiz, args, s) {
			var rx, li, str, result, wraped, out;
			return _regenerator2.default.wrap(function exec$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(toRegexp(thiz, s.realm), 't0', 1);

						case 1:
							rx = _context4.t0;
							return _context4.delegateYield(thiz.get('lastIndex'), 't1', 3);

						case 3:
							li = _context4.t1;
							return _context4.delegateYield(li.toIntNative(), 't2', 5);

						case 5:
							li = _context4.t2;

							if (li < 0) li = 0; //Work around incorrect V8 behavior.
							rx.lastIndex = li;
							str = undefined;

							if (!(args.length > 0)) {
								_context4.next = 12;
								break;
							}

							return _context4.delegateYield(args[0].toStringNative(), 't3', 11);

						case 11:
							str = _context4.t3;

						case 12:
							result = rx.exec(str);
							return _context4.delegateYield(thiz.set('lastIndex', Value.fromNative(rx.lastIndex)), 't4', 14);

						case 14:
							if (!(result === null)) {
								_context4.next = 16;
								break;
							}

							return _context4.abrupt('return', Value.null);

						case 16:
							return _context4.delegateYield(_g.map(result, /*#__PURE__*/_regenerator2.default.mark(function _callee(c) {
								return _regenerator2.default.wrap(function _callee$(_context3) {
									while (1) {
										switch (_context3.prev = _context3.next) {
											case 0:
												return _context3.abrupt('return', Value.fromNative(c, s.realm));

											case 1:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee, this);
							})), 't5', 17);

						case 17:
							wraped = _context4.t5;
							out = ArrayValue.make(wraped, s.realm);
							return _context4.delegateYield(out.set('index', Value.fromNative(result.index)), 't6', 20);

						case 20:
							return _context4.delegateYield(out.set('input', Value.fromNative(result.input)), 't7', 21);

						case 21:
							return _context4.abrupt('return', out);

						case 22:
						case 'end':
							return _context4.stop();
					}
				}
			}, exec, this);
		})
	}, {
		key: 'compile',
		value: /*#__PURE__*/_regenerator2.default.mark(function compile(thiz, args, s) {
			var rv, regexp;
			return _regenerator2.default.wrap(function compile$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.delegateYield(toRegexp(thiz, s.realm), 't0', 1);

						case 1:
							return _context5.delegateYield(s.realm.RegExp.call(Value.null, args, s), 't1', 2);

						case 2:
							rv = _context5.t1;
							regexp = rv.regexp;

							thiz.regexp = regexp;
							return _context5.delegateYield(thiz.set('source', Value.fromNative(regexp.source)), 't2', 6);

						case 6:
							return _context5.delegateYield(thiz.set('global', Value.fromNative(regexp.global)), 't3', 7);

						case 7:
							return _context5.delegateYield(thiz.set('ignoreCase', Value.fromNative(regexp.ignoreCase)), 't4', 8);

						case 8:
							return _context5.delegateYield(thiz.set('multiline', Value.fromNative(regexp.multiline)), 't5', 9);

						case 9:
							return _context5.delegateYield(thiz.set('lastIndex', Value.zero), 't6', 10);

						case 10:
							return _context5.abrupt('return', Value.undef);

						case 11:
						case 'end':
							return _context5.stop();
					}
				}
			}, compile, this);
		})
	}, {
		key: 'toString',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString(thiz, args, s) {
			var rx;
			return _regenerator2.default.wrap(function toString$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(toRegexp(thiz, s.realm), 't0', 1);

						case 1:
							rx = _context6.t0;
							return _context6.abrupt('return', Value.fromNative(rx.toString()));

						case 3:
						case 'end':
							return _context6.stop();
					}
				}
			}, toString, this);
		})
	}, {
		key: 'source$cw',
		get: function get() {
			return Value.fromNative('(?:)');
		}
	}, {
		key: 'global$cw',
		get: function get() {
			return Value.fromNative(false);
		}
	}, {
		key: 'ignoreCase$cw',
		get: function get() {
			return Value.fromNative(false);
		}
	}, {
		key: 'multiline$cw',
		get: function get() {
			return Value.fromNative(false);
		}
	}, {
		key: 'lastIndex',
		get: function get() {
			return Value.fromNative(0);
		}
	}]);
	return RegExpProtoype;
}(EasyObjectValue);

RegExpProtoype.prototype.wellKnownName = '%RegExpProtoype%';
RegExpProtoype.prototype.clazz = 'RegExp';

module.exports = RegExpProtoype;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);

var EasyObjectValue = __webpack_require__(210);
var RegExpValue = __webpack_require__(195);

var RegExpObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(RegExpObject, _EasyObjectValue);

	function RegExpObject() {
		(0, _classCallCheck3.default)(this, RegExpObject);
		return (0, _possibleConstructorReturn3.default)(this, (RegExpObject.__proto__ || (0, _getPrototypeOf2.default)(RegExpObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(RegExpObject, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s) {
			var pattern, flags, rx;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							pattern = '';
							flags = '';

							if (!(args.length > 0 && args[0] instanceof RegExpValue)) {
								_context.next = 8;
								break;
							}

							if (!(args.length > 1 && args[1].truthy)) {
								_context.next = 7;
								break;
							}

							_context.next = 6;
							return CompletionRecord.makeTypeError(s.realm, 'Cannot supply flags when constructing one RegExp from another');

						case 6:
							return _context.abrupt('return', _context.sent);

						case 7:
							return _context.abrupt('return', RegExpValue.make(new RegExp(args[0].regexp), s.realm));

						case 8:
							if (!(args.length > 0 && args[0].jsTypeName !== 'undefined')) {
								_context.next = 11;
								break;
							}

							return _context.delegateYield(args[0].toStringNative(), 't0', 10);

						case 10:
							pattern = _context.t0;

						case 11:
							if (!(args.length > 1 && args[1].jsTypeName !== 'undefined')) {
								_context.next = 14;
								break;
							}

							return _context.delegateYield(args[1].toStringNative(), 't1', 13);

						case 13:
							flags = _context.t1;

						case 14:
							rx = void 0;
							_context.prev = 15;

							rx = new RegExp(pattern, flags);
							_context.next = 24;
							break;

						case 19:
							_context.prev = 19;
							_context.t2 = _context['catch'](15);
							_context.next = 23;
							return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(_context.t2, s.realm));

						case 23:
							return _context.abrupt('return', _context.sent);

						case 24:
							return _context.abrupt('return', RegExpValue.make(rx, s.realm));

						case 25:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this, [[15, 19]]);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.RegExpPrototype;
		}
	}, {
		key: 'callLength',
		get: function get() {
			return 2;
		}
	}]);
	return RegExpObject;
}(EasyObjectValue);

RegExpObject.prototype.wellKnownName = '%RegExp%';

module.exports = RegExpObject;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var EasyNativeFunction = __webpack_require__(208);
var Value = __webpack_require__(153);

var EsperObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(EsperObject, _EasyObjectValue);

	function EsperObject() {
		(0, _classCallCheck3.default)(this, EsperObject);
		return (0, _possibleConstructorReturn3.default)(this, (EsperObject.__proto__ || (0, _getPrototypeOf2.default)(EsperObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(EsperObject, null, [{
		key: 'dump$cew',
		value: /*#__PURE__*/_regenerator2.default.mark(function dump$cew(thiz, args) {
			return _regenerator2.default.wrap(function dump$cew$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							console.log('Esper#dump:', args);
							if (typeof window !== 'undefined') window.dumped = args[0];
							return _context.abrupt('return', Value.undef);

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, dump$cew, this);
		})
	}, {
		key: 'str$cew',
		value: /*#__PURE__*/_regenerator2.default.mark(function str$cew(thiz, args) {
			var t;
			return _regenerator2.default.wrap(function str$cew$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							t = Value.undef;

							if (args.length > 0) t = args[0];
							return _context2.abrupt('return', this.fromNative(t.debugString));

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, str$cew, this);
		})
	}, {
		key: 'stack$cew',
		value: /*#__PURE__*/_regenerator2.default.mark(function stack$cew(thiz, args, scope, extra) {
			return _regenerator2.default.wrap(function stack$cew$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', Value.fromNative(extra.evaluator.buildStacktrace().join('\n')));

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, stack$cew, this);
		})
	}, {
		key: 'globals$cew',
		value: /*#__PURE__*/_regenerator2.default.mark(function globals$cew(thiz, args, scope, extra) {
			return _regenerator2.default.wrap(function globals$cew$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', scope.global.object);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, globals$cew, this);
		})
	}, {
		key: 'scope$cew',
		value: /*#__PURE__*/_regenerator2.default.mark(function scope$cew(thiz, args, scope, extra) {
			return _regenerator2.default.wrap(function scope$cew$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', scope.object);

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, scope$cew, this);
		})
	}]);
	return EsperObject;
}(EasyObjectValue);

module.exports = EsperObject;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var PrimitiveValue = __webpack_require__(182);
var CompletionRecord = __webpack_require__(175);
var Value = __webpack_require__(153);

var ErrorPrototype = function (_EasyObjectValue) {
	(0, _inherits3.default)(ErrorPrototype, _EasyObjectValue);

	function ErrorPrototype() {
		(0, _classCallCheck3.default)(this, ErrorPrototype);
		return (0, _possibleConstructorReturn3.default)(this, (ErrorPrototype.__proto__ || (0, _getPrototypeOf2.default)(ErrorPrototype)).apply(this, arguments));
	}

	(0, _createClass3.default)(ErrorPrototype, null, [{
		key: 'toString',
		value: /*#__PURE__*/_regenerator2.default.mark(function toString(thiz, argz, s) {
			var name, message;
			return _regenerator2.default.wrap(function toString$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.delegateYield(thiz.get('name'), 't0', 1);

						case 1:
							return _context.delegateYield(_context.t0.toStringNative(), 't1', 2);

						case 2:
							name = _context.t1;
							return _context.delegateYield(thiz.get('message'), 't2', 4);

						case 4:
							return _context.delegateYield(_context.t2.toStringNative(), 't3', 5);

						case 5:
							message = _context.t3;

							if (!(name && message)) {
								_context.next = 10;
								break;
							}

							return _context.abrupt('return', Value.fromNative(name + ': ' + message));

						case 10:
							if (!message) {
								_context.next = 14;
								break;
							}

							return _context.abrupt('return', Value.fromNative(message));

						case 14:
							return _context.abrupt('return', Value.fromNative(name));

						case 15:
						case 'end':
							return _context.stop();
					}
				}
			}, toString, this);
		})
	}, {
		key: 'message',
		get: function get() {
			return Value.emptyString;
		}
	}, {
		key: 'name$',
		get: function get() {
			return Value.fromNative('Error');
		}
	}]);
	return ErrorPrototype;
}(EasyObjectValue);

ErrorPrototype.prototype.wellKnownName = '%ErrorPrototype%';

module.exports = ErrorPrototype;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var ArrayValue = __webpack_require__(192);
var PrimitiveValue = __webpack_require__(182);
var EmptyValue = __webpack_require__(188);
var ErrorValue = __webpack_require__(196);
var CompletionRecord = __webpack_require__(175);
var PropertyDescriptor = __webpack_require__(181);
var Value = __webpack_require__(153);

var ErrorObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(ErrorObject, _EasyObjectValue);

	function ErrorObject(realm) {
		(0, _classCallCheck3.default)(this, ErrorObject);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ErrorObject.__proto__ || (0, _getPrototypeOf2.default)(ErrorObject)).call(this, realm));

		_this.realm = realm;
		return _this;
	}

	(0, _createClass3.default)(ErrorObject, [{
		key: 'makeOne',
		value: function makeOne() {
			var nue = new ErrorValue(this.realm);
			var p = this.properties['prototype'];
			if (p) nue.setPrototype(p.value);
			return nue;
		}
	}, {
		key: 'make',
		value: function make(message, name) {
			var nue = this.makeOne();
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
	}, {
		key: 'makeFrom',
		value: function makeFrom(err) {
			var nue = this.makeOne();
			if (err.message) nue.setImmediate('message', Value.fromNative(err.message));
			if (err.name) nue.setImmediate('name', Value.fromNative(err.name));
			err.native = err;
			return nue;
		}
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', this.makeOne());

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s, ext) {
			var asConstructor;
			return _regenerator2.default.wrap(function call$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (!asConstructor) {
								thiz = this.makeOne();
							}

							if (!(args.length > 0)) {
								_context2.next = 4;
								break;
							}

							return _context2.delegateYield(thiz.set('message', args[0], s, { enumerable: false }), 't0', 4);

						case 4:
							if (!(args.length > 1)) {
								_context2.next = 6;
								break;
							}

							return _context2.delegateYield(thiz.set('fileName', args[1], s, { enumerable: false }), 't1', 6);

						case 6:
							if (!(args.length > 2)) {
								_context2.next = 8;
								break;
							}

							return _context2.delegateYield(thiz.set('lineNumber', args[2], s, { enumerable: false }), 't2', 8);

						case 8:
							return _context2.abrupt('return', thiz);

						case 9:
						case 'end':
							return _context2.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'makeErrorType',
		value: function makeErrorType(type) {
			var proto = new ObjectValue(this.realm);
			proto.setPrototype(this.realm.ErrorPrototype);
			proto.setImmediate('name', Value.fromNative(type.name));
			proto.properties.name.enumerable = false;
			proto.wellKnownName = '%' + type.name + 'Prototype%';
			proto.nativeClass = type;

			var obj = new ErrorObject(this.realm);
			obj.setPrototype(proto);
			obj.properties.prototype.value = proto;
			obj.wellKnownName = '%' + type.name + '%';
			proto.rawSetProperty('constructor', new PropertyDescriptor(obj, false));
			return obj;
		}
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.ErrorPrototype;
		}
	}]);
	return ErrorObject;
}(EasyObjectValue);

ErrorObject.prototype.wellKnownName = '%Error%';

module.exports = ErrorObject;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);

var ObjectValue = __webpack_require__(180);

var AssertFunction = function (_ObjectValue) {
	(0, _inherits3.default)(AssertFunction, _ObjectValue);

	function AssertFunction() {
		(0, _classCallCheck3.default)(this, AssertFunction);
		return (0, _possibleConstructorReturn3.default)(this, (AssertFunction.__proto__ || (0, _getPrototypeOf2.default)(AssertFunction)).apply(this, arguments));
	}

	(0, _createClass3.default)(AssertFunction, [{
		key: 'rawCall',
		value: /*#__PURE__*/_regenerator2.default.mark(function rawCall(n, evalu, scope) {
			var args, why, check, left, right, i, err;
			return _regenerator2.default.wrap(function rawCall$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(n.arguments.length == 0)) {
								_context.next = 2;
								break;
							}

							return _context.abrupt('return', Value.undef);

						case 2:
							args = new Array(n.arguments.length);
							why = '';
							check = n.arguments[0];
							_context.t0 = check.type;
							_context.next = _context.t0 === 'BinaryExpression' ? 8 : 16;
							break;

						case 8:
							return _context.delegateYield(evalu.branch(check.left, scope), 't1', 9);

						case 9:
							left = _context.t1;
							return _context.delegateYield(evalu.branch(check.right, scope), 't2', 11);

						case 11:
							right = _context.t2;
							return _context.delegateYield(evalu.doBinaryEvaluation(check.operator, left, right, scope), 't3', 13);

						case 13:
							args[0] = _context.t3;

							why = n.arguments[0].srcName + ' (' + left.debugString + ' ' + check.operator + ' ' + right.debugString + ')';
							return _context.abrupt('break', 19);

						case 16:
							why = n.arguments[0].srcName || '???';
							return _context.delegateYield(evalu.branch(n.arguments[0], scope), 't4', 18);

						case 18:
							args[0] = _context.t4;

						case 19:
							i = 1;

						case 20:
							if (!(i < args.length)) {
								_context.next = 26;
								break;
							}

							return _context.delegateYield(evalu.branch(n.arguments[i], scope), 't5', 22);

						case 22:
							args[i] = _context.t5;

						case 23:
							++i;
							_context.next = 20;
							break;

						case 26:
							if (!args[0].truthy) {
								_context.next = 28;
								break;
							}

							return _context.abrupt('return', Value.undef);

						case 28:
							if (!(args.length > 1)) {
								_context.next = 31;
								break;
							}

							return _context.delegateYield(args[1].toStringNative(), 't6', 30);

						case 30:
							why = _context.t6;

						case 31:
							err = scope.realm.Error.make(why, 'AssertionError');
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.THROW, err));

						case 33:
						case 'end':
							return _context.stop();
					}
				}
			}, rawCall, this);
		})
	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var val, reason, err;
			return _regenerator2.default.wrap(function call$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							val = Value.undef;

							if (!(args.length > 0)) {
								_context2.next = 3;
								break;
							}

							return _context2.abrupt('return', Value.undef);

						case 3:
							if (!val.truthy) {
								_context2.next = 5;
								break;
							}

							return _context2.abrupt('return', Value.undef);

						case 5:
							reason = '';

							if (!(args.length > 1)) {
								_context2.next = 11;
								break;
							}

							return _context2.delegateYield(args[1].toStringValue(), 't0', 8);

						case 8:
							reason = _context2.t0.toNative();
							_context2.next = 12;
							break;

						case 11:
							if (ext.callNode && ext.callNode.arguments[0]) {
								reason = ext.callNode.arguments[0].srcName || '???';
							}

						case 12:
							err = scope.realm.Error.make(reason, 'AssertionError');
							return _context2.abrupt('return', new CompletionRecord(CompletionRecord.THROW, err));

						case 14:
						case 'end':
							return _context2.stop();
					}
				}
			}, call, this);
		})
	}]);
	return AssertFunction;
}(ObjectValue);

module.exports = AssertFunction;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(210);
var Value = __webpack_require__(153);

function makeNumber(num) {
	return 0 + num.toNative();
}

function wrapMathFunction(name) {
	var fn = Math[name];
	return (/*#__PURE__*/_regenerator2.default.mark(function _callee(thiz, args, realm) {
			var length, argz, i, result;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							length = args.length;
							argz = new Array(length);

							for (i = 0; i < length; ++i) {
								if (i < args.length) argz[i] = args[i].toNative();else argz[i] = undefined;
							}

							result = fn.apply(Math, argz);
							return _context.abrupt('return', Value.fromPrimativeNative(result));

						case 5:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		})
	);
}

var MathObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(MathObject, _EasyObjectValue);

	function MathObject() {
		(0, _classCallCheck3.default)(this, MathObject);
		return (0, _possibleConstructorReturn3.default)(this, (MathObject.__proto__ || (0, _getPrototypeOf2.default)(MathObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(MathObject, null, [{
		key: 'E$cew',
		get: function get() {
			return Math.E;
		}
	}, {
		key: 'LN10$cew',
		get: function get() {
			return Math.LN10;
		}
	}, {
		key: 'LN2$cew',
		get: function get() {
			return Math.LN2;
		}
	}, {
		key: 'LOG10E$cew',
		get: function get() {
			return Math.LOG10E;
		}
	}, {
		key: 'LOG2E$cew',
		get: function get() {
			return Math.LOG2E;
		}
	}, {
		key: 'PI$cew',
		get: function get() {
			return Math.PI;
		}
	}, {
		key: 'SQRT1_2$cew',
		get: function get() {
			return Math.SQRT1_2;
		}
	}, {
		key: 'SQRT2$cew',
		get: function get() {
			return Math.SQRT2;
		}
	}]);
	return MathObject;
}(EasyObjectValue);

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
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(proxy);

var Value = __webpack_require__(153);
var CompletionRecord = __webpack_require__(175);

var EasyObjectValue = __webpack_require__(210);

function proxy(op, thiz, args, s) {
	var realm, printer, strings, i;
	return _regenerator2.default.wrap(function proxy$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					realm = s.realm;
					printer = realm.print;
					strings = new Array(args.length);
					i = 0;

				case 4:
					if (!(i < args.length)) {
						_context.next = 10;
						break;
					}

					return _context.delegateYield(args[i].toStringNative(), 't0', 6);

				case 6:
					strings[i] = _context.t0;

				case 7:
					++i;
					_context.next = 4;
					break;

				case 10:
					//console[op].apply(console, strings);
					printer.apply(realm, strings);
					return _context.abrupt('return', Value.undef);

				case 12:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

var Console = function (_EasyObjectValue) {
	(0, _inherits3.default)(Console, _EasyObjectValue);

	function Console() {
		(0, _classCallCheck3.default)(this, Console);
		return (0, _possibleConstructorReturn3.default)(this, (Console.__proto__ || (0, _getPrototypeOf2.default)(Console)).apply(this, arguments));
	}

	(0, _createClass3.default)(Console, null, [{
		key: 'log',
		value: /*#__PURE__*/_regenerator2.default.mark(function log(thiz, argz, s) {
			return _regenerator2.default.wrap(function log$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.delegateYield(proxy('log', thiz, argz, s), 't0', 1);

						case 1:
							return _context2.abrupt('return', _context2.t0);

						case 2:
						case 'end':
							return _context2.stop();
					}
				}
			}, log, this);
		})
	}, {
		key: 'info',
		value: /*#__PURE__*/_regenerator2.default.mark(function info(thiz, argz, s) {
			return _regenerator2.default.wrap(function info$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(proxy('info', thiz, argz, s), 't0', 1);

						case 1:
							return _context3.abrupt('return', _context3.t0);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, info, this);
		})
	}, {
		key: 'warn',
		value: /*#__PURE__*/_regenerator2.default.mark(function warn(thiz, argz, s) {
			return _regenerator2.default.wrap(function warn$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(proxy('warn', thiz, argz, s), 't0', 1);

						case 1:
							return _context4.abrupt('return', _context4.t0);

						case 2:
						case 'end':
							return _context4.stop();
					}
				}
			}, warn, this);
		})
	}, {
		key: 'error',
		value: /*#__PURE__*/_regenerator2.default.mark(function error(thiz, argz, s) {
			return _regenerator2.default.wrap(function error$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.delegateYield(proxy('error', thiz, argz, s), 't0', 1);

						case 1:
							return _context5.abrupt('return', _context5.t0);

						case 2:
						case 'end':
							return _context5.stop();
					}
				}
			}, error, this);
		})
	}, {
		key: 'trace',
		value: /*#__PURE__*/_regenerator2.default.mark(function trace(thiz, argz, s) {
			return _regenerator2.default.wrap(function trace$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(proxy('trace', thiz, argz, s), 't0', 1);

						case 1:
							return _context6.abrupt('return', _context6.t0);

						case 2:
						case 'end':
							return _context6.stop();
					}
				}
			}, trace, this);
		})
	}]);
	return Console;
}(EasyObjectValue);

module.exports = Console;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weakMap = __webpack_require__(161);

var _weakMap2 = _interopRequireDefault(_weakMap);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(183);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var EasyObjectValue = __webpack_require__(210);
var ObjectValue = __webpack_require__(180);
var PrimitiveValue = __webpack_require__(182);
var ArrayValue = __webpack_require__(192);
var CompletionRecord = __webpack_require__(175);

var JSONUtils = function () {
	function JSONUtils() {
		(0, _classCallCheck3.default)(this, JSONUtils);
	}

	(0, _createClass3.default)(JSONUtils, null, [{
		key: 'genJSONTokens',
		value: /*#__PURE__*/_regenerator2.default.mark(function genJSONTokens(arr, o, map, str, strincr) {
			var str2, length, i, m, first, _iterator, _isArray, _i, _ref, p, po, v;

			return _regenerator2.default.wrap(function genJSONTokens$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							str2 = str !== undefined ? str + strincr : undefined;

							if (!(o instanceof PrimitiveValue)) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return', arr.push((0, _stringify2.default)(o.native)));

						case 3:
							if (!map.has(o)) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', arr.push('[Circular]'));

						case 5:
							map.set(o, true);

							if (!(o instanceof ArrayValue)) {
								_context.next = 31;
								break;
							}

							arr.push('[');
							return _context.delegateYield(o.get('length'), 't0', 9);

						case 9:
							return _context.delegateYield(_context.t0.toIntNative(), 't1', 10);

						case 10:
							length = _context.t1;
							i = 0;

						case 12:
							if (!(i < length)) {
								_context.next = 27;
								break;
							}

							if (i > 0) arr.push(',');
							if (str !== undefined) arr.push('\n');
							return _context.delegateYield(o.get(i), 't2', 16);

						case 16:
							m = _context.t2;

							if (str !== undefined) arr.push(str2);

							if (!m) {
								_context.next = 24;
								break;
							}

							if (!(m.jsTypeName == 'undefined')) {
								_context.next = 23;
								break;
							}

							arr.push('null');
							_context.next = 24;
							break;

						case 23:
							return _context.delegateYield(JSONUtils.genJSONTokens(arr, m, map, str2, strincr), 't3', 24);

						case 24:
							++i;
							_context.next = 12;
							break;

						case 27:
							if (str !== undefined) arr.push('\n');
							if (str !== undefined) arr.push(str);
							arr.push(']');
							return _context.abrupt('return');

						case 31:

							arr.push('{');

							first = true;
							_iterator = (0, _keys2.default)(o.properties), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 34:
							if (!_isArray) {
								_context.next = 40;
								break;
							}

							if (!(_i >= _iterator.length)) {
								_context.next = 37;
								break;
							}

							return _context.abrupt('break', 59);

						case 37:
							_ref = _iterator[_i++];
							_context.next = 44;
							break;

						case 40:
							_i = _iterator.next();

							if (!_i.done) {
								_context.next = 43;
								break;
							}

							return _context.abrupt('break', 59);

						case 43:
							_ref = _i.value;

						case 44:
							p = _ref;
							po = o.properties[p];

							if (po.enumerable) {
								_context.next = 48;
								break;
							}

							return _context.abrupt('continue', 57);

						case 48:
							return _context.delegateYield(o.get(p), 't4', 49);

						case 49:
							v = _context.t4;

							if (!(v.jsTypeName === 'function')) {
								_context.next = 52;
								break;
							}

							return _context.abrupt('continue', 57);

						case 52:

							if (first) first = false;else arr.push(',');
							if (str !== undefined) arr.push('\n', str2);

							arr.push((0, _stringify2.default)(p), ':');
							if (str !== undefined) arr.push(' ');
							return _context.delegateYield(JSONUtils.genJSONTokens(arr, v, map, str2, strincr), 't5', 57);

						case 57:
							_context.next = 34;
							break;

						case 59:
							if (str !== undefined) arr.push('\n');
							arr.push('}');

						case 61:
						case 'end':
							return _context.stop();
					}
				}
			}, genJSONTokens, this);
		})
	}]);
	return JSONUtils;
}();

var JSONObject = function (_EasyObjectValue) {
	(0, _inherits3.default)(JSONObject, _EasyObjectValue);

	function JSONObject() {
		(0, _classCallCheck3.default)(this, JSONObject);
		return (0, _possibleConstructorReturn3.default)(this, (JSONObject.__proto__ || (0, _getPrototypeOf2.default)(JSONObject)).apply(this, arguments));
	}

	(0, _createClass3.default)(JSONObject, null, [{
		key: 'parse',
		value: /*#__PURE__*/_regenerator2.default.mark(function parse(thiz, args, s) {
			var str, out;
			return _regenerator2.default.wrap(function parse$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							str = Value.emptyString;

							if (!(args.length > 0)) {
								_context2.next = 4;
								break;
							}

							return _context2.delegateYield(args[0].toStringNative(), 't0', 3);

						case 3:
							str = _context2.t0;

						case 4:
							_context2.prev = 4;
							out = JSON.parse(str, function (k, o) {
								if (o === undefined) return Value.undef;
								if (o === null) return Value.null;

								var prim = Value.fromPrimativeNative(o);
								if (prim) return prim;

								if (Array.isArray(o)) {
									return ArrayValue.make(o, s.realm);
								}

								var v = new ObjectValue(s.realm);
								for (var p in o) {
									v.setImmediate(p, o[p]);
								}
								return v;
							});
							return _context2.abrupt('return', out);

						case 9:
							_context2.prev = 9;
							_context2.t1 = _context2['catch'](4);
							_context2.next = 13;
							return new CompletionRecord(CompletionRecord.THROW, Value.fromNative(_context2.t1, s.realm));

						case 13:
						case 'end':
							return _context2.stop();
					}
				}
			}, parse, this, [[4, 9]]);
		})
	}, {
		key: 'stringify',
		value: /*#__PURE__*/_regenerator2.default.mark(function stringify(thiz, args, s) {
			var arr, v, replacer, str, strincr, len;
			return _regenerator2.default.wrap(function stringify$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							arr = [];
							v = Value.undef;
							replacer = null;
							str = void 0;
							strincr = void 0;


							if (args.length > 0) v = args[0];
							if (args.length > 1) replacer = args[1];

							if (!(args.length > 2)) {
								_context3.next = 17;
								break;
							}

							str = '';

							if (!(args[2].jsTypeName === 'number')) {
								_context3.next = 15;
								break;
							}

							return _context3.delegateYield(args[2].toIntNative(), 't0', 11);

						case 11:
							len = _context3.t0;

							strincr = new Array(1 + len).join(' ');
							_context3.next = 17;
							break;

						case 15:
							return _context3.delegateYield(args[2].toStringNative(), 't1', 16);

						case 16:
							strincr = _context3.t1;

						case 17:
							if (!(v.jsTypeName === 'undefined')) {
								_context3.next = 19;
								break;
							}

							return _context3.abrupt('return', Value.undef);

						case 19:
							return _context3.delegateYield(JSONUtils.genJSONTokens(arr, v, new _weakMap2.default(), str, strincr), 't2', 20);

						case 20:
							return _context3.abrupt('return', Value.fromNative(arr.join('')));

						case 21:
						case 'end':
							return _context3.stop();
					}
				}
			}, stringify, this);
		})
	}]);
	return JSONObject;
}(EasyObjectValue);

module.exports = JSONObject;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(153);
var ObjectValue = __webpack_require__(180);
var EasyObjectValue = __webpack_require__(210);
var CompletionRecord = __webpack_require__(175);

var ProxyClass = function (_ObjectValue) {
	(0, _inherits3.default)(ProxyClass, _ObjectValue);

	function ProxyClass() {
		(0, _classCallCheck3.default)(this, ProxyClass);
		return (0, _possibleConstructorReturn3.default)(this, (ProxyClass.__proto__ || (0, _getPrototypeOf2.default)(ProxyClass)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProxyClass, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var asConstructor;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;

							if (asConstructor) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return', Value.fromNative(0));

						case 3:
							thiz.target = args[0];
							thiz.handler = args[1];
							thiz.realm = scope.realm;

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			return _regenerator2.default.wrap(function makeThisForNew$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', new ProxyValue(realm));

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}]);
	return ProxyClass;
}(ObjectValue);

var ProxyValue = function (_Value) {
	(0, _inherits3.default)(ProxyValue, _Value);

	function ProxyValue() {
		(0, _classCallCheck3.default)(this, ProxyValue);
		return (0, _possibleConstructorReturn3.default)(this, (ProxyValue.__proto__ || (0, _getPrototypeOf2.default)(ProxyValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProxyValue, [{
		key: 'handlerImplemented',
		value: /*#__PURE__*/_regenerator2.default.mark(function handlerImplemented(w) {
			var en;
			return _regenerator2.default.wrap(function handlerImplemented$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(this.handler.inOperator(Value.fromNative(w)), 't0', 1);

						case 1:
							en = _context3.t0.toNative();
							return _context3.abrupt('return', !!en);

						case 3:
						case 'end':
							return _context3.stop();
					}
				}
			}, handlerImplemented, this);
		})
	}, {
		key: 'ref',
		value: function ref(name, ctxthis) {
			var _this3 = this;

			return {
				name: name,
				object: this,
				isVariable: false,
				del: function del() {
					return false;
				}, //Doesnt support being a generator yet.
				getValue: function getValue() {
					return _this3.get(name, s);
				},
				setValue: function setValue(to, s) {
					return this.object.set(this.name, to, s);
				}
			};
		}
	}, {
		key: 'invokeHandler',
		value: /*#__PURE__*/_regenerator2.default.mark(function invokeHandler(w, args) {
			var _this4 = this;

			var fn;
			return _regenerator2.default.wrap(function invokeHandler$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(this.handler.get(w), 't0', 1);

						case 1:
							fn = _context4.t0;
							return _context4.delegateYield(fn.call(Value.under, args.map(function (x) {
								return _this4.realm.fromNative(x);
							}), this.realm.globalScope), 't1', 3);

						case 3:
							return _context4.abrupt('return', _context4.t1);

						case 4:
						case 'end':
							return _context4.stop();
					}
				}
			}, invokeHandler, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm, ctx) {
			return _regenerator2.default.wrap(function get$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.delegateYield(this.handlerImplemented('get'), 't0', 1);

						case 1:
							if (!_context5.t0) {
								_context5.next = 4;
								break;
							}

							return _context5.delegateYield(this.invokeHandler('get', [name]), 't1', 3);

						case 3:
							return _context5.abrupt('return', _context5.t1);

						case 4:
							return _context5.delegateYield(this.target.get(name, realm, ctx), 't2', 5);

						case 5:
							return _context5.abrupt('return', _context5.t2);

						case 6:
						case 'end':
							return _context5.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, value, realm, ctx) {
			return _regenerator2.default.wrap(function set$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(this.handlerImplemented('set'), 't0', 1);

						case 1:
							if (!_context6.t0) {
								_context6.next = 4;
								break;
							}

							return _context6.delegateYield(this.invokeHandler('set', [name, value]), 't1', 3);

						case 3:
							return _context6.abrupt('return', _context6.t1);

						case 4:
							return _context6.delegateYield(this.target.set(name, value, realm, ctx), 't2', 5);

						case 5:
							return _context6.abrupt('return', _context6.t2);

						case 6:
						case 'end':
							return _context6.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			return _regenerator2.default.wrap(function inOperator$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(this.handlerImplemented('has'), 't0', 1);

						case 1:
							if (!_context7.t0) {
								_context7.next = 4;
								break;
							}

							return _context7.delegateYield(this.invokeHandler('has', [other]), 't1', 3);

						case 3:
							return _context7.abrupt('return', _context7.t1);

						case 4:
							return _context7.delegateYield(this.target.inOperator(other, realm, ctx), 't2', 5);

						case 5:
							return _context7.abrupt('return', _context7.t2);

						case 6:
						case 'end':
							return _context7.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'delete',
		value: /*#__PURE__*/_regenerator2.default.mark(function _delete(name) {
			return _regenerator2.default.wrap(function _delete$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.delegateYield(this.handlerImplemented('delete'), 't0', 1);

						case 1:
							if (!_context8.t0) {
								_context8.next = 4;
								break;
							}

							return _context8.delegateYield(this.invokeHandler('delete', [other]), 't1', 3);

						case 3:
							return _context8.abrupt('return', _context8.t1);

						case 4:
							return _context8.delegateYield(this.target.delete(other, realm, ctx), 't2', 5);

						case 5:
							return _context8.abrupt('return', _context8.t2);

						case 6:
						case 'end':
							return _context8.stop();
					}
				}
			}, _delete, this);
		})
	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, ext) {
			var asConstructor, key;
			return _regenerator2.default.wrap(function call$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							asConstructor = ext && ext.asConstructor;
							key = 'apply';

							if (asConstructor) key = 'construct';
							return _context9.delegateYield(this.handlerImplemented(key), 't0', 4);

						case 4:
							if (!_context9.t0) {
								_context9.next = 7;
								break;
							}

							return _context9.delegateYield(this.invokeHandler(key, args), 't1', 6);

						case 6:
							return _context9.abrupt('return', _context9.t1);

						case 7:
							if (this.target.call) {
								_context9.next = 11;
								break;
							}

							return _context9.abrupt('return', CompletionRecord.makeTypeError(scope.realm, "Base object not invokeable."));

						case 11:
							return _context9.delegateYield(this.target.call(thiz, args, scope, ext), 't2', 12);

						case 12:
							return _context9.abrupt('return', _context9.t2);

						case 13:
						case 'end':
							return _context9.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			return _regenerator2.default.wrap(function makeThisForNew$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', this.target.makeThisForNew(realm));

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'toNative',
		value: function toNative() {
			return "[Proxy]";
		}
	}]);
	return ProxyValue;
}(Value);

module.exports = ProxyClass;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(129);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EvaluatorInstruction = __webpack_require__(193);

var DefaultRuntime = function () {
	function DefaultRuntime() {
		(0, _classCallCheck3.default)(this, DefaultRuntime);
	}

	(0, _createClass3.default)(DefaultRuntime, [{
		key: 'time',
		value: /*#__PURE__*/_regenerator2.default.mark(function time() {
			return _regenerator2.default.wrap(function time$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', Date());

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, time, this);
		})
	}, {
		key: 'wait',
		value: /*#__PURE__*/_regenerator2.default.mark(function wait(time) {
			var ev;
			return _regenerator2.default.wrap(function wait$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return EvaluatorInstruction.getEvaluator;

						case 2:
							ev = _context2.sent;

							if (!ev.dispose) ev.dispose = [];
							return _context2.abrupt('return', new _promise2.default(function (res, rej) {
								var id = setTimeout(function () {
									return res();
								}, time);
								ev.dispose.push(function () {
									clearTimeout(id);
								});
							}));

						case 5:
						case 'end':
							return _context2.stop();
					}
				}
			}, wait, this);
		})
	}]);
	return DefaultRuntime;
}();

module.exports = DefaultRuntime;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var esprima = __webpack_require__(237);

module.exports = {
	name: 'lang-javascript',
	esprima: esprima,
	parser: function parser(code, options) {
		options = options || {};
		var opts = { loc: true, range: true };
		if (options.inFunctionBody) {
			opts.tolerant = true;
			opts.allowReturnOutsideFunction = true;
		}

		var ast = esprima.parse(code, opts);
		var errors = [];
		if (ast.errors) {
			errors = ast.errors.filter(function (x) {
				if (options.inFunctionBody && x.message === 'Illegal return statement') return false;
			});
		}
		delete ast.errors;
		if (errors.length > 0) throw errors[0];
		return ast;
	}
};

/***/ }),
/* 237 */
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
/* 238 */
/***/ (function(module) {

module.exports = {"name":"esper.js","version":"0.3.0-dev","description":"Esper javascript interperter.","main":"src/index.js","scripts":{"doc":"esdoc -c esdoc.json","lint":"jshint src --show-non-errors","test":"mocha","repl":"node contrib/cli.js -i","webpack":"webpack","demo":"esdoc -c esdoc.json && node contrib/examine-corpus.js && webpack && webpack --env.test && webpack --env.test --env.profile=modern && node contrib/ui.js","cover":"./node_modules/istanbul/lib/cli.js cover node_modules/.bin/_mocha -- --reporter dot","dev-server":"webpack-dev-server src/index.js --content-base contrib/ui","preinstall":"node contrib/install-plugin-deps.js","prepublish":"node contrib/build.js","style":"jscs src plugins/*/*.js test/*.js"},"bin":{"esper":"./contrib/cli.js"},"repository":{"type":"git","url":"git+ssh://git@github.com/codecombat/esper.js.git"},"keywords":["esper","javascript","interperter","ast","eval"],"author":"Rob Blanckaert","license":"MIT","bugs":{"url":"https://github.com/codecombat/esper.js/issues"},"homepage":"https://github.com/codecombat/esper.js#readme","files":["dist/esper.js","dist/esper.min.js","dist/esper.modern.js","src","plugins","contrib/cli.js","contrib/install-plugin-deps.js","plugin-list.js"],"devDependencies":{"babel-core":"^6.24.1","babel-loader":"^7.1.4","babel-plugin-check-es2015-constants":"^6.22.0","babel-plugin-transform-es2015-arrow-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoped-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoping":"^6.24.1","babel-plugin-transform-es2015-classes":"^6.24.1","babel-plugin-transform-es2015-computed-properties":"^6.24.1","babel-plugin-transform-es2015-destructuring":"^6.23.0","babel-plugin-transform-es2015-for-of":"^6.23.0","babel-plugin-transform-es2015-function-name":"^6.24.1","babel-plugin-transform-es2015-literals":"^6.22.0","babel-plugin-transform-es2015-modules-commonjs":"^6.24.1","babel-plugin-transform-es2015-object-super":"^6.24.1","babel-plugin-transform-es2015-parameters":"^6.24.1","babel-plugin-transform-es2015-shorthand-properties":"^6.24.1","babel-plugin-transform-es2015-spread":"^6.22.0","babel-plugin-transform-es2015-sticky-regex":"^6.24.1","babel-plugin-transform-es2015-template-literals":"^6.22.0","babel-plugin-transform-es2015-typeof-symbol":"^6.23.0","babel-plugin-transform-es2015-unicode-regex":"^6.24.1","babel-plugin-transform-regenerator":"^6.24.1","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.23.0","babel-regenerator-runtime":"^6.5.0","babel-register":"^6.24.1","babel-runtime":"^6.23.0","chai":"^3.5.0","core-js":"^2.4.1","esdoc":"^0.5.2","istanbul":"^1.0.0-alpha.2","jscs":"^3.0.7","lodash":"^4.17.4","lua2js":"^0.0.11","mocha":"^6.1.2","mocha-loader":"^2.0.1","raw-loader":"^0.5.1","webpack":"^4.12.0","webpack-cli":"^3.0.8","webpack-dev-server":"^3.1.4"},"dependencies":{"commander":"^2.9.0","esprima":"^3.1.3"}};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ast-css/index.js": 240
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
webpackContext.id = 239;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(183);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(124);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esper = __webpack_require__(122);
var csswhat = __webpack_require__(241);
var ASTNode = esper.ASTPreprocessor.ASTNode;

var debug = function debug() {};
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
		exit: function exit(n) {
			//console.log("EVAL", n);
			for (var i = 0; i < matchers.length; ++i) {
				var result = matchers[i](n, root);
				if (result !== false) found.push([n, result]);
			}
		}
	};
	var gen = esper.ASTPreprocessor.walker(ast, cbs);
	for (var _iterator = gen, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var x = _ref;
	}
	return found;
}

function matches(m, selector, root) {

	var matches = find(m, selector, root);
	for (var i = 0; i < matches.length; ++i) {
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
			var siblings;
			var adjlist;
			var list;

			(function () {
				switch (o.type) {
					case 'universal':
						break;
					case 'pseudo':
						if (o.name === 'downto') {
							var _list = tagNames(o.data);
							var _parents = [];
							canidates.map(function (c) {
								var m = c.n;
								while (m !== root && m.parent) {
									m = m.parent;
									if (_list.indexOf(m.type) !== -1) break;
									_parents.push({ n: m });
								}
							});
							canidates = _parents;
							debug('NT', _list);
							debug('DT!', canidates.map(function (s) {
								return s.n.type + '#' + s.n.loc.start.line;
							}));
							break;
						} else if (o.name == 'matches') {
							canidates = canidates.filter(function (c) {
								return matches(c.n, o.data, root);
							});
							break;
						} else if (o.name == 'has') {
							canidates = canidates.filter(function (c) {
								var matches = match(c.n, o.data, root);
								return matches.length > 0;
							});
							break;
						} else if (o.name == 'not') {
							canidates = canidates.filter(function (c) {
								return !matches(c.n, o.data, root);
							});
							break;
						} else {
							throw new Error('Unknown psudo selector:' + o.name);
						}
						break;
					case 'descendant':
						var parents = [];
						canidates.map(function (c) {
							var m = c.n;
							while (m !== root && m.parent) {
								m = m.parent;
								parents.push({ n: m, p: c.n });
							}
						});
						canidates = parents;
						break;
					case 'child':
						canidates = canidates.filter(function (c) {
							return c.n !== root && c.n.parent;
						}).map(function (c) {
							return { n: c.n.parent, p: c.n };
						});
						break;
					case 'parent':
						var parents2 = [];
						canidates.map(function (c) {
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
						siblings = [];

						canidates.filter(function (c) {
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
						adjlist = [];

						canidates.filter(function (c) {
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
						list = tagNames(o.name);

						canidates = canidates.filter(function (c) {
							return list.indexOf(c.n.type) !== -1;
						});
						break;
					case 'attribute':
						if (o.name === 'class') {
							canidates = canidates.filter(function (c) {
								var test = c.n[o.value];
								if (!c.p) return !!test;
								if (Array.isArray(test)) return test.indexOf(c.p) !== -1;
								return test == c.p;
							});
							break;
						}
						canidates = canidates.filter(function (c) {
							var m = c.n;
							if (!(o.name in m)) return;
							var val = m[o.name];
							if (val.type && val.type === 'Identifier') val = val.name;else if (val.type && val.type === 'Literal') val = (0, _stringify2.default)(val.value);
							return o.value == val.toString();
						});
						break;
					default:
						throw new Error('Unknown CSS Selector Type: ' + o.type);
				}
			})();

			if (canidates.length > 0) {
				debug('MATCH@' + (0, _stringify2.default)(o));
				debug(canidates);
			} else {
				if (i < opts.length - 1) debug('FAIL@' + (0, _stringify2.default)(o));
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
		return find(this.ast, sel).map(function (x) {
			return x[0];
		});
	};
	esper.ASTPreprocessor.ASTNode.prototype.find = function (sel) {
		return find(this, sel, null).map(function (x) {
			return x[0];
		});
	};
	esper.ASTPreprocessor.ASTNode.prototype.matches = function (sel) {
		return matches(this, sel, null);
	};
}

var plugin = module.exports = {
	name: 'ast-css',
	find: find,
	init: init
};

/***/ }),
/* 241 */
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
/* 242 */
/***/ (function(module, exports) {

module.exports = {"ast-css":"bundle","lang-python":"addon","lang-coffeescript":"addon","lang-lua":"addon","babylon":"opt-in","pointers":"addon"};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ })
/******/ ]);
});