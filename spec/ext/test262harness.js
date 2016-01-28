//-----------------------------------------------------------------------------
function arrayContains(arr, expected) {
    var found;
    for (var i = 0; i < expected.length; i++) {
        found = false;
        for (var j = 0; j < arr.length; j++) {
            if (expected[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}
function assert(mustBeTrue, message) {
    if (mustBeTrue === true) {
        return;
    }

    if (message === undefined) {
        message = 'Expected true but got ' + String(mustBeTrue);
    }
    $ERROR(message);
}

assert._isSameValue = function (a, b) {
    if (a === b) {
        // Handle +/-0 vs. -/+0
        return a !== 0 || 1 / a === 1 / b;
    }

    // Handle NaN vs. NaN
    return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
    if (assert._isSameValue(actual, expected)) {
        return;
    }

    if (message === undefined) {
        message = '';
    } else {
        message += ' ';
    }

    message += 'Expected SameValue(«' + String(actual) + '», «' + String(expected) + '») to be true';

    $ERROR(message);
};

assert.notSameValue = function (actual, unexpected, message) {
    if (!assert._isSameValue(actual, unexpected)) {
        return;
    }

    if (message === undefined) {
        message = '';
    } else {
        message += ' ';
    }

    message += 'Expected SameValue(«' + String(actual) + '», «' + String(unexpected) + '») to be false';

    $ERROR(message);
};

assert.throws = function (expectedErrorConstructor, func, message) {
    if (func === undefined) {
        $ERROR('assert.throws requires two arguments: the error constructor and a function to run');
        return;
    }
    if (message === undefined) {
        message = '';
    } else {
        message += ' ';
    }

    try {
        func();
    } catch (thrown) {
        if (typeof thrown !== 'object' || thrown === null) {
            message += 'Thrown value was not an object!';
            $ERROR(message);
        } else if (thrown.constructor !== expectedErrorConstructor) {
            message += 'Expected a ' + expectedErrorConstructor.name + ' but got a ' + thrown.constructor.name;
            $ERROR(message);
        }
        return;
    }

    message += 'Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all';
    $ERROR(message);
};

//-----------------------------------------------------------------------------
function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (b[i] !== a[i]) {
      return false;
    }
  }
  return true;
}

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// This code is governed by the BSD license found in the LICENSE file.

function testRun(id, path, description, codeString, result, error) {
  if (result!=="pass") {
      throw new Error("Test '" + path + "'failed: " + error);
  }
}


//Date_constants.js
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

var HoursPerDay = 24;
var MinutesPerHour = 60;
var SecondsPerMinute = 60;

var msPerDay = 86400000;
var msPerSecond = 1000;
var msPerMinute = 60000;
var msPerHour = 3600000;

var date_1899_end = -2208988800001;
var date_1900_start = -2208988800000;
var date_1969_end = -1;
var date_1970_start = 0;
var date_1999_end = 946684799999;
var date_2000_start = 946684800000;
var date_2099_end = 4102444799999;
var date_2100_start = 4102444800000;

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


function __consolePrintHandle__(msg){
	print(msg);
}

function $DONE(){
	if(!arguments[0])
		__consolePrintHandle__('Test262:AsyncTestComplete');
	else
		__consolePrintHandle__('Error: ' + arguments[0]);
}
//-----------------------------------------------------------------------------
var __globalObject = Function("return this;")();
function fnGlobalObject() {
     return __globalObject;
}
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function Test262Error(message) {
  this.message = message;
}

Test262Error.prototype.toString = function () {
  return "Test262 Error: " + this.message;
};

function testFailed(message) {
  throw new Test262Error(message);
}

function testPrint(message) {

}

/**
 * It is not yet clear that runTestCase should pass the global object
 * as the 'this' binding in the call to testcase.
 */
var runTestCase = (function(global) {
  return function(testcase) {
    if (!testcase.call(global)) {
      testFailed('test function returned falsy');
    }
  };
})(this);

function assertTruthy(value) {
  if (!value) {
    testFailed('test return falsy');
  }
}


/**
 * falsy means we expect no error.
 * truthy means we expect some error.
 * A non-empty string means we expect an error whose .name is that string.
 */
var expectedErrorName = false;

/**
 * What was thrown, or the string 'Falsy' if something falsy was thrown.
 * null if test completed normally.
 */
var actualError = null;

function testStarted(expectedErrName) {
  expectedErrorName = expectedErrName;
}

function testFinished() {
  var actualErrorName = actualError && (actualError.name ||
                                        'SomethingThrown');
  if (actualErrorName) {
    if (expectedErrorName) {
      if (typeof expectedErrorName === 'string') {
        if (expectedErrorName === actualErrorName) {
          return;
        }
        testFailed('Threw ' + actualErrorName +
                   ' instead of ' + expectedErrorName);
      }
      return;
    }
    throw actualError;
  }
  if (expectedErrorName) {
    if (typeof expectedErrorName === 'string') {
      testFailed('Completed instead of throwing ' +
                 expectedErrorName);
    }
    testFailed('Completed instead of throwing');
  }
}
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

var prec;
function isEqual(num1, num2)
{
        if ((num1 === Infinity)&&(num2 === Infinity))
        {
                return(true);
        }
        if ((num1 === -Infinity)&&(num2 === -Infinity))
        {
                return(true);
        }
        prec = getPrecision(Math.min(Math.abs(num1), Math.abs(num2)));  
        return(Math.abs(num1 - num2) <= prec);
        //return(num1 === num2);
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function getPrecision(num) {
	//TODO: Create a table of prec's,
	//      because using Math for testing Math isn't that correct.

	var log2num = Math.log(Math.abs(num)) / Math.LN2;
	var pernum = Math.ceil(log2num);
	return 2 * Math.pow(2, -52 + pernum);
}
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function ToInteger(p) {
  x = Number(p);

  if(isNaN(x)){
    return +0;
  }
  
  if((x === +0) 
  || (x === -0) 
  || (x === Number.POSITIVE_INFINITY) 
  || (x === Number.NEGATIVE_INFINITY)){
     return x;
  }

  var sign = ( x < 0 ) ? -1 : 1;

  return (sign*Math.floor(Math.abs(x)));
}
//-----------------------------------------------------------------------------
function checkSequence(arr, message) {
    arr.forEach(function(e, i) {
        if (e !== (i+1)) {
            $ERROR((message ? message : "Steps in unexpected sequence:") +
                   " '" + arr.join(',') + "'");
        }
    });
}

function isConfigurable(obj, name) {
    try {
        delete obj[name];
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }
    }
    return !Object.prototype.hasOwnProperty.call(obj, name);
}

function isEnumerable(obj, name) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) && 
            assert._isSameValue(prop, name)) {
            return true;
        }
    }

    return false;
}

function isEqualTo(obj, name, expectedValue) {
    var actualValue = obj[name];

    return assert._isSameValue(actualValue, expectedValue);
}

function isWritable(obj, name, verifyProp, value) {
    var newValue = value || "unlikelyValue";
    var hadValue = Object.prototype.hasOwnProperty.call(obj, name);
    var oldValue = obj[name];
    var writeSucceeded;

    try {
        obj[name] = newValue;
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }
    }

    writeSucceeded = isEqualTo(obj, verifyProp || name, newValue);

    // Revert the change only if it was successful (in other cases, reverting
    // is unnecessary and may trigger exceptions for certain property
    // configurations)
    if (writeSucceeded) {
      if (hadValue) {
        obj[name] = oldValue;
      } else {
        delete obj[name];
      }
    }

    return writeSucceeded;
}

function verifyEqualTo(obj, name, value) {
    if (!isEqualTo(obj, name, value)) {
        $ERROR("Expected obj[" + String(name) + "] to equal " + value +
                   ", actually " + obj[name]);
    }
}

function verifyWritable(obj, name, verifyProp, value) {
    if (!verifyProp) {
        assert(Object.getOwnPropertyDescriptor(obj, name).writable,
               "Expected obj[" + String(name) + "] to have writable:true.");
    }
    if (!isWritable(obj, name, verifyProp, value)) {
        $ERROR("Expected obj[" + String(name) + "] to be writable, but was not.");
    }
}

function verifyNotWritable(obj, name, verifyProp, value) {
    if (!verifyProp) {
        assert(!Object.getOwnPropertyDescriptor(obj, name).writable,
               "Expected obj[" + String(name) + "] to have writable:false.");
    }
    if (isWritable(obj, name, verifyProp)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be writable, but was.");
    }
}

function verifyEnumerable(obj, name) {
    assert(Object.getOwnPropertyDescriptor(obj, name).enumerable,
           "Expected obj[" + String(name) + "] to have enumerable:true.");
    if (!isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] to be enumerable, but was not.");
    }
}

function verifyNotEnumerable(obj, name) {
    assert(!Object.getOwnPropertyDescriptor(obj, name).enumerable,
           "Expected obj[" + String(name) + "] to have enumerable:false.");
    if (isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be enumerable, but was.");
    }
}

function verifyConfigurable(obj, name) {
    assert(Object.getOwnPropertyDescriptor(obj, name).configurable,
           "Expected obj[" + String(name) + "] to have configurable:true.");
    if (!isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] to be configurable, but was not.");
    }
}

function verifyNotConfigurable(obj, name) {
    assert(!Object.getOwnPropertyDescriptor(obj, name).configurable,
           "Expected obj[" + String(name) + "] to have configurable:false.");
    if (isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be configurable, but was.");
    }
}

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// This code is governed by the BSD license found in the LICENSE file.

var NotEarlyErrorString = "NotEarlyError";
var EarlyErrorRePat = "^((?!" + NotEarlyErrorString + ").)*$";
var NotEarlyError = new Error(NotEarlyErrorString);

function Test262Error(message) {
    this.message = message || "";
}

Test262Error.prototype.toString = function () {
    return "Test262Error: " + this.message;
};

var $ERROR;
$ERROR = function $ERROR(message) {
    throw new Test262Error(message);
};

function testFailed(message) {
    $ERROR(message);
}
//function Test262Error(message) {
//    if (message) this.message = message;
//}
//
//Test262Error.prototype.toString = function () {
//    return "Test262 Error: " + this.message;
//};
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that obj meets the requirements for built-in objects
 *     defined by the introduction of chapter 15 of the ECMAScript Language Specification.
 * @param {Object} obj the object to be tested.
 * @param {boolean} isFunction whether the specification describes obj as a function.
 * @param {boolean} isConstructor whether the specification describes obj as a constructor.
 * @param {String[]} properties an array with the names of the built-in properties of obj,
 *     excluding length, prototype, or properties with non-default attributes.
 * @param {number} length for functions only: the length specified for the function
 *     or derived from the argument list.
 * @author Norbert Lindenberg
 */

function testBuiltInObject(obj, isFunction, isConstructor, properties, length) {

    if (obj === undefined) {
        $ERROR("Object being tested is undefined.");
    }

    var objString = Object.prototype.toString.call(obj);
    if (isFunction) {
        if (objString !== "[object Function]") {
            $ERROR("The [[Class]] internal property of a built-in function must be " +
                    "\"Function\", but toString() returns " + objString);
        }
    } else {
        if (objString !== "[object Object]") {
            $ERROR("The [[Class]] internal property of a built-in non-function object must be " +
                    "\"Object\", but toString() returns " + objString);
        }
    }

    if (!Object.isExtensible(obj)) {
        $ERROR("Built-in objects must be extensible.");
    }

    if (isFunction && Object.getPrototypeOf(obj) !== Function.prototype) {
        $ERROR("Built-in functions must have Function.prototype as their prototype.");
    }

    if (isConstructor && Object.getPrototypeOf(obj.prototype) !== Object.prototype) {
        $ERROR("Built-in prototype objects must have Object.prototype as their prototype.");
    }

    // verification of the absence of the [[Construct]] internal property has
    // been moved to the end of the test
    
    // verification of the absence of the prototype property has
    // been moved to the end of the test

    if (isFunction) {
        
        if (typeof obj.length !== "number" || obj.length !== Math.floor(obj.length)) {
            $ERROR("Built-in functions must have a length property with an integer value.");
        }
    
        if (obj.length !== length) {
            $ERROR("Function's length property doesn't have specified value; expected " +
                length + ", got " + obj.length + ".");
        }

        var desc = Object.getOwnPropertyDescriptor(obj, "length");
        if (desc.writable) {
            $ERROR("The length property of a built-in function must not be writable.");
        }
        if (desc.enumerable) {
            $ERROR("The length property of a built-in function must not be enumerable.");
        }
        if (!desc.configurable) {
            $ERROR("The length property of a built-in function must be configurable.");
        }
    }

    properties.forEach(function(prop) {
        var desc = Object.getOwnPropertyDescriptor(obj, prop);
        if (desc === undefined) {
            $ERROR("Missing property " + prop + ".");
        }
        // accessor properties don't have writable attribute
        if (desc.hasOwnProperty("writable") && !desc.writable) {
            $ERROR("The " + prop + " property of this built-in object must be writable.");
        }
        if (desc.enumerable) {
            $ERROR("The " + prop + " property of this built-in object must not be enumerable.");
        }
        if (!desc.configurable) {
            $ERROR("The " + prop + " property of this built-in object must be configurable.");
        }
    });

    // The remaining sections have been moved to the end of the test because
    // unbound non-constructor functions written in JavaScript cannot possibly
    // pass them, and we still want to test JavaScript implementations as much
    // as possible.
    
    var exception;
    if (isFunction && !isConstructor) {
        // this is not a complete test for the presence of [[Construct]]:
        // if it's absent, the exception must be thrown, but it may also
        // be thrown if it's present and just has preconditions related to
        // arguments or the this value that this statement doesn't meet.
        try {
            /*jshint newcap:false*/
            var instance = new obj();
        } catch (e) {
            exception = e;
        }
        if (exception === undefined || exception.name !== "TypeError") {
            $ERROR("Built-in functions that aren't constructors must throw TypeError when " +
                "used in a \"new\" statement.");
        }
    }

    if (isFunction && !isConstructor && obj.hasOwnProperty("prototype")) {
        $ERROR("Built-in functions that aren't constructors must not have a prototype property.");
    }

    // passed the complete test!
    return true;
}

// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012-2013 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * This file contains shared functions for the tests in the conformance test
 * suite for the ECMAScript Internationalization API.
 * @author Norbert Lindenberg
 */


/**
 * @description Calls the provided function for every service constructor in
 * the Intl object, until f returns a falsy value. It returns the result of the
 * last call to f, mapped to a boolean.
 * @param {Function} f the function to call for each service constructor in
 *     the Intl object.
 *     @param {Function} Constructor the constructor object to test with.
 * @result {Boolean} whether the test succeeded.
 */
function testWithIntlConstructors(f) {
    var constructors = ["Collator", "NumberFormat", "DateTimeFormat"];
    return constructors.every(function (constructor) {
        var Constructor = Intl[constructor];
        var result;
        try {
            result = f(Constructor);
        } catch (e) {
            e.message += " (Testing with " + constructor + ".)";
            throw e;
        }
        return result;
    });
}


/**
 * Returns the name of the given constructor object, which must be one of
 * Intl.Collator, Intl.NumberFormat, or Intl.DateTimeFormat.
 * @param {object} Constructor a constructor
 * @return {string} the name of the constructor
 */
function getConstructorName(Constructor) {
    switch (Constructor) {
        case Intl.Collator:
            return "Collator";
        case Intl.NumberFormat:
            return "NumberFormat";
        case Intl.DateTimeFormat:
            return "DateTimeFormat";
        default:
            $ERROR("test internal error: unknown Constructor");
    }
}


/**
 * Taints a named data property of the given object by installing
 * a setter that throws an exception.
 * @param {object} obj the object whose data property to taint
 * @param {string} property the property to taint
 */
function taintDataProperty(obj, property) {
    Object.defineProperty(obj, property, {
        set: function(value) {
            $ERROR("Client code can adversely affect behavior: setter for " + property + ".");
        },
        enumerable: false,
        configurable: true
    });
}


/**
 * Taints a named method of the given object by replacing it with a function
 * that throws an exception.
 * @param {object} obj the object whose method to taint
 * @param {string} property the name of the method to taint
 */
function taintMethod(obj, property) {
    Object.defineProperty(obj, property, {
        value: function() {
            $ERROR("Client code can adversely affect behavior: method " + property + ".");
        },
        writable: true,
        enumerable: false,
        configurable: true
    });
}


/**
 * Taints the given properties (and similarly named properties) by installing
 * setters on Object.prototype that throw exceptions.
 * @param {Array} properties an array of property names to taint
 */
function taintProperties(properties) {
    properties.forEach(function (property) {
        var adaptedProperties = [property, "__" + property, "_" + property, property + "_", property + "__"];
        adaptedProperties.forEach(function (property) {
            taintDataProperty(Object.prototype, property);
        });
    });
}


/**
 * Taints the Array object by creating a setter for the property "0" and
 * replacing some key methods with functions that throw exceptions.
 */
function taintArray() {
    taintDataProperty(Array.prototype, "0");
    taintMethod(Array.prototype, "indexOf");
    taintMethod(Array.prototype, "join");
    taintMethod(Array.prototype, "push");
    taintMethod(Array.prototype, "slice");
    taintMethod(Array.prototype, "sort");
}



/**
 * Tests whether the named options property is correctly handled by the given constructor.
 * @param {object} Constructor the constructor to test.
 * @param {string} property the name of the options property to test.
 * @param {string} type the type that values of the property are expected to have
 * @param {Array} [values] an array of allowed values for the property. Not needed for boolean.
 * @param {any} fallback the fallback value that the property assumes if not provided.
 * @param {object} testOptions additional options:
 *     @param {boolean} isOptional whether support for this property is optional for implementations.
 *     @param {boolean} noReturn whether the resulting value of the property is not returned.
 *     @param {boolean} isILD whether the resulting value of the property is implementation and locale dependent.
 *     @param {object} extra additional option to pass along, properties are value -> {option: value}.
 * @return {boolean} whether the test succeeded.
 */
function testOption(Constructor, property, type, values, fallback, testOptions) {
    var isOptional = testOptions !== undefined && testOptions.isOptional === true;
    var noReturn = testOptions !== undefined && testOptions.noReturn === true;
    var isILD = testOptions !== undefined && testOptions.isILD === true;
    
    function addExtraOptions(options, value, testOptions) {
        if (testOptions !== undefined && testOptions.extra !== undefined) {
            var extra;
            if (value !== undefined && testOptions.extra[value] !== undefined) {
                extra = testOptions.extra[value];
            } else if (testOptions.extra.any !== undefined) {
                extra = testOptions.extra.any;
            }
            if (extra !== undefined) {
                Object.getOwnPropertyNames(extra).forEach(function (prop) {
                    options[prop] = extra[prop];
                });
            }
        }
    }

    var testValues, options, obj, expected, actual, error;

    // test that the specified values are accepted. Also add values that convert to specified values.
    if (type === "boolean") {
        if (values === undefined) {
            values = [true, false];
        }
        testValues = values.slice(0);
        testValues.push(888);
        testValues.push(0);
    } else if (type === "string") {
        testValues = values.slice(0);
        testValues.push({toString: function () { return values[0]; }});
    }
    testValues.forEach(function (value) {
        options = {};
        options[property] = value;
        addExtraOptions(options, value, testOptions);
        obj = new Constructor(undefined, options);
        if (noReturn) {
            if (obj.resolvedOptions().hasOwnProperty(property)) {
                $ERROR("Option property " + property + " is returned, but shouldn't be.");
            }
        } else {
            actual = obj.resolvedOptions()[property];
            if (isILD) {
                if (actual !== undefined && values.indexOf(actual) === -1) {
                    $ERROR("Invalid value " + actual + " returned for property " + property + ".");
                }
            } else {
                if (type === "boolean") {
                    expected = Boolean(value);
                } else if (type === "string") {
                    expected = String(value);
                }
                if (actual !== expected && !(isOptional && actual === undefined)) {
                    $ERROR("Option value " + value + " for property " + property +
                        " was not accepted; got " + actual + " instead.");
                }
            }
        }
    });

    // test that invalid values are rejected
    if (type === "string") {
        var invalidValues = ["invalidValue", -1, null];
        // assume that we won't have values in caseless scripts
        if (values[0].toUpperCase() !== values[0]) {
            invalidValues.push(values[0].toUpperCase());
        } else {
            invalidValues.push(values[0].toLowerCase());
        }
        invalidValues.forEach(function (value) {
            options = {};
            options[property] = value;
            addExtraOptions(options, value, testOptions);
            error = undefined;
            try {
                obj = new Constructor(undefined, options);
            } catch (e) {
                error = e;
            }
            if (error === undefined) {
                $ERROR("Invalid option value " + value + " for property " + property + " was not rejected.");
            } else if (error.name !== "RangeError") {
                $ERROR("Invalid option value " + value + " for property " + property + " was rejected with wrong error " + error.name + ".");
            }
        });
    }

    // test that fallback value or another valid value is used if no options value is provided
    if (!noReturn) {
        options = {};
        addExtraOptions(options, undefined, testOptions);
        obj = new Constructor(undefined, options);
        actual = obj.resolvedOptions()[property];
        if (!(isOptional && actual === undefined)) {
            if (fallback !== undefined) {
                if (actual !== fallback) {
                    $ERROR("Option fallback value " + fallback + " for property " + property +
                        " was not used; got " + actual + " instead.");
                }
            } else {
                if (values.indexOf(actual) === -1 && !(isILD && actual === undefined)) {
                    $ERROR("Invalid value " + actual + " returned for property " + property + ".");
                }
            }
        }
    }

    return true;
}


/**
 * Tests whether the named property of the given object has a valid value
 * and the default attributes of the properties of an object literal.
 * @param {Object} obj the object to be tested.
 * @param {string} property the name of the property
 * @param {Function|Array} valid either a function that tests value for validity and returns a boolean,
 *     an array of valid values.
 * @exception if the property has an invalid value.
 */
function testProperty(obj, property, valid) {
    var desc = Object.getOwnPropertyDescriptor(obj, property);
    if (!desc.writable) {
        $ERROR("Property " + property + " must be writable.");
    }
    if (!desc.enumerable) {
        $ERROR("Property " + property + " must be enumerable.");
    }
    if (!desc.configurable) {
        $ERROR("Property " + property + " must be configurable.");
    }
    var value = desc.value;
    var isValid = (typeof valid === "function") ? valid(value) : (valid.indexOf(value) !== -1);
    if (!isValid) {
        $ERROR("Property value " + value + " is not allowed for property " + property + ".");
    }
}


/**
 * Tests whether the named property of the given object, if present at all, has a valid value
 * and the default attributes of the properties of an object literal.
 * @param {Object} obj the object to be tested.
 * @param {string} property the name of the property
 * @param {Function|Array} valid either a function that tests value for validity and returns a boolean,
 *     an array of valid values.
 * @exception if the property is present and has an invalid value.
 */
function mayHaveProperty(obj, property, valid) {
    if (obj.hasOwnProperty(property)) {
        testProperty(obj, property, valid);
    }
}


/**
 * Tests whether the given object has the named property with a valid value
 * and the default attributes of the properties of an object literal.
 * @param {Object} obj the object to be tested.
 * @param {string} property the name of the property
 * @param {Function|Array} valid either a function that tests value for validity and returns a boolean,
 *     an array of valid values.
 * @exception if the property is missing or has an invalid value.
 */
function mustHaveProperty(obj, property, valid) {
    if (!obj.hasOwnProperty(property)) {
        $ERROR("Object is missing property " + property + ".");
    }
    testProperty(obj, property, valid);
}


/**
 * Tests whether the given object does not have the named property.
 * @param {Object} obj the object to be tested.
 * @param {string} property the name of the property
 * @exception if the property is present.
 */
function mustNotHaveProperty(obj, property) {
    if (obj.hasOwnProperty(property)) {
        $ERROR("Object has property it mustn't have: " + property + ".");
    }
}




/**
 * Tests that executing the provided function (which may use regular expressions
 * in its implementation) does not create or modify unwanted properties on the
 * RegExp constructor.
 */
function testForUnwantedRegExpChanges(testFunc) {
    regExpProperties.forEach(function (property) {
        RegExp[property] = regExpPropertiesDefaultValues[property];
    });
    testFunc();
    regExpProperties.forEach(function (property) {
        if (RegExp[property] !== regExpPropertiesDefaultValues[property]) {
            $ERROR("RegExp has unexpected property " + property + " with value " +
                RegExp[property] + ".");
        }
    });
}





/**
 * Tests that number formatting is handled correctly. The function checks that the
 * digit sequences in formatted output are as specified, converted to the
 * selected numbering system, and embedded in consistent localized patterns.
 * @param {Array} locales the locales to be tested.
 * @param {Array} numberingSystems the numbering systems to be tested.
 * @param {Object} options the options to pass to Intl.NumberFormat. Options
 *     must include {useGrouping: false}, and must cause 1.1 to be formatted
 *     pre- and post-decimal digits.
 * @param {Object} testData maps input data (in ES5 9.3.1 format) to expected output strings
 *     in unlocalized format with Western digits.
 */

function testNumberFormat(locales, numberingSystems, options, testData) {
    locales.forEach(function (locale) {
        numberingSystems.forEach(function (numbering) {
            var digits = numberingSystemDigits[numbering];
            var format = new Intl.NumberFormat([locale + "-u-nu-" + numbering], options);
    
            function getPatternParts(positive) {
                var n = positive ? 1.1 : -1.1;
                var formatted = format.format(n);
                var oneoneRE = "([^" + digits + "]*)[" + digits + "]+([^" + digits + "]+)[" + digits + "]+([^" + digits + "]*)";
                var match = formatted.match(new RegExp(oneoneRE));
                if (match === null) {
                    $ERROR("Unexpected formatted " + n + " for " +
                        format.resolvedOptions().locale + " and options " +
                        JSON.stringify(options) + ": " + formatted);
                }
                return match;
            }
            
            function toNumbering(raw) {
                return raw.replace(/[0-9]/g, function (digit) {
                    return digits[digit.charCodeAt(0) - "0".charCodeAt(0)];
                });
            }
            
            function buildExpected(raw, patternParts) {
                var period = raw.indexOf(".");
                if (period === -1) {
                    return patternParts[1] + toNumbering(raw) + patternParts[3];
                } else {
                    return patternParts[1] + 
                        toNumbering(raw.substring(0, period)) +
                        patternParts[2] +
                        toNumbering(raw.substring(period + 1)) +
                        patternParts[3];
                }
            }
            
            if (format.resolvedOptions().numberingSystem === numbering) {
                // figure out prefixes, infixes, suffixes for positive and negative values
                var posPatternParts = getPatternParts(true);
                var negPatternParts = getPatternParts(false);
                
                Object.getOwnPropertyNames(testData).forEach(function (input) {
                    var rawExpected = testData[input];
                    var patternParts;
                    if (rawExpected[0] === "-") {
                        patternParts = negPatternParts;
                        rawExpected = rawExpected.substring(1);
                    } else {
                        patternParts = posPatternParts;
                    }
                    var expected = buildExpected(rawExpected, patternParts);
                    var actual = format.format(input);
                    if (actual !== expected) {
                        $ERROR("Formatted value for " + input + ", " +
                        format.resolvedOptions().locale + " and options " +
                        JSON.stringify(options) + " is " + actual + "; expected " + expected + ".");
                    }
                });
            }
        });
    });
}


/**
 * Return the components of date-time formats.
 * @return {Array} an array with all date-time components.
 */

function getDateTimeComponents() {
    return ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
}


/**
 * Return the valid values for the given date-time component, as specified
 * by the table in section 12.1.1.
 * @param {string} component a date-time component.
 * @return {Array} an array with the valid values for the component.
 */

function getDateTimeComponentValues(component) {
    
    var components = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };
    
    var result = components[component];
    if (result === undefined) {
        $ERROR("Internal error: No values defined for date-time component " + component + ".");
    }
    return result;
}


/**
 * Tests that the given value is valid for the given date-time component.
 * @param {string} component a date-time component.
 * @param {string} value the value to be tested.
 * @return {boolean} true if the test succeeds.
 * @exception if the test fails.
 */

function testValidDateTimeComponentValue(component, value) {
    if (getDateTimeComponentValues(component).indexOf(value) === -1) {
        $ERROR("Invalid value " + value + " for date-time component " + component + ".");
    }
    return true;
}


/**
 * @description Tests whether timeZone is a String value representing a
 * structurally valid and canonicalized time zone name, as defined in
 * sections 6.4.1 and 6.4.2 of the ECMAScript Internationalization API
 * Specification.
 * @param {String} timeZone the string to be tested.
 * @result {Boolean} whether the test succeeded.
 */

function isCanonicalizedStructurallyValidTimeZoneName(timeZone) {
    /**
     * Regular expression defining IANA Time Zone names.
     *
     * Spec: IANA Time Zone Database, Theory file
     */
    var fileNameComponent = "(?:[A-Za-z_]|\\.(?!\\.?(?:/|$)))[A-Za-z.\\-_]{0,13}";
    var fileName = fileNameComponent + "(?:/" + fileNameComponent + ")*";
    var etcName = "(?:Etc/)?GMT[+-]\\d{1,2}";
    var systemVName = "SystemV/[A-Z]{3}\\d{1,2}(?:[A-Z]{3})?";
    var legacyName = etcName + "|" + systemVName + "|CST6CDT|EST5EDT|MST7MDT|PST8PDT|NZ|Canada/East-Saskatchewan";
    var zoneNamePattern = new RegExp("^(?:" + fileName + "|" + legacyName + ")$");

    if (typeof timeZone !== "string") {
        return false;
    }
    // 6.4.2 CanonicalizeTimeZoneName (timeZone), step 3
    if (timeZone === "UTC") {
        return true;
    }
    // 6.4.2 CanonicalizeTimeZoneName (timeZone), step 3
    if (timeZone === "Etc/UTC" || timeZone === "Etc/GMT") {
        return false;
    }
    return zoneNamePattern.test(timeZone);
}


/**
 * Verifies that the actual array matches the expected one in length, elements,
 * and element order.
 * @param {Array} expected the expected array.
 * @param {Array} actual the actual array.
 * @return {boolean} true if the test succeeds.
 * @exception if the test fails.
 */
function testArraysAreSame(expected, actual) {
    var i;
    for (i = 0; i < Math.max(actual.length, expected.length); i++) {
        if (actual[i] !== expected[i]) {
            $ERROR("Result array element at index " + i + " should be \"" +
                expected[i] + "\" but is \"" + actual[i] + "\".");
        }
    }
    return true;
}

// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


