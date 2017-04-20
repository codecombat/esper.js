'use strict';

let esper = require('../../../src/index.js');
let expect = require('chai').expect;

if ( !esper.plugins['lang-coffeescript'] ) {
	return it('Plugin: lang-coffeescript [disabled]', function() {});
}


class Aether {
	constructor(config) {
		this.engine = new esper.Engine({language: "coffeescript"});
	}
	transpile(code) {
		this.problems = {
			errors: []
		};
		code = code.replace(/\s*$/,'')
		let lines = code.split(/\n/g);
		lines = lines.map((function(line) { return line.replace(/\t/g,'    ');}));
		let toTrim = lines[0].match(/^[ ]*/)[0].length;
		lines = lines.map(function (line) { return line.substring(toTrim); });
		code = lines.join('\n');

		try {
			this.fx = this.engine.functionFromSourceSync(code);
		} catch ( e ) {
			this.problems.errors.push(e);
		}
	}

	run() {
		if ( this.problems.errors.length > 0 ) return;
		let result;
		try {
			result = this.fx();
		} catch ( e ) {
			this.problems.errors.push(e);
		}
		return result;
	}

	createFunction() { }

	setLanguage(language) {
		expect(language).to.equal("coffeescript");
	}

	canTranspile() {
		return true;
	}
}

describe("CS test Suite!", function() {
	describe("CS compilation", function() {
		let aether = new Aether({language: "coffeescript"});
		return it("Should compile functions", function() {
			let code = `\
			return 1000\
			`;
			aether.transpile(code);
			expect(aether.run()).to.equal(1000);
			return expect(aether.problems.errors).to.deep.equal([]);
		});
	});

	describe("CS compilation with lang set after contruction", function() {
		let aether = new Aether();
		return it("Should compile functions", function() {
			let code = `\
			return 2000 if false
			return 1000\
			`;
			aether.setLanguage("coffeescript");
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			return expect(aether.problems.errors).to.deep.equal([]);
		});
	});

	describe("CS Test Spec #1", function() {
		let aether = new Aether({language: "coffeescript"});
		return it("mathmetics order", function() {
			let code = `\
			return (2*2 + 2/2 - 2*2/2)\
			`;
			aether.transpile(code);
			expect(aether.run()).to.equal(3);
			return expect(aether.problems.errors).to.deep.equal([]);
		});
	});

	describe("CS Test Spec #2", function() {
		let aether = new Aether({language: "coffeescript"});
		it("function call", function() {
			let code = `\
			fib = (n) ->
			  (if n < 2 then n else fib(n - 1) + fib(n - 2))
			chupacabra = fib(6)\
			`;
			aether.transpile(code);
			let fn = aether.createFunction();
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.equal(8); // fail
			return expect(aether.problems.errors).to.deep.equal([]);
		});
	});

	describe("Basics", function() {
		let aether = new Aether({language: "coffeescript"});
		it("Simple For", function() {
			let code = `\
			count = 0
			count++ for num in [1..10]
			return count\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.equal(10);
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Simple While", function() {
			let code = `\
			count = 0
			count++ until count is 100
			return count\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.equal(100);
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should Map", function() {
			// See: https://github.com/codecombat/aether/issues/97
			let code = "(num for num in ([10..1]).slice(0))";
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should Map properties", function() {
			let code = `\
			yearsOld = max: 10, ida: 9, tim: 11
			ages = for child, age of yearsOld
			  "#{child} is #{age}"
			return ages\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.deep.equal(["max is 10", "ida is 9", "tim is 11"]);
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should compile empty function", function() {
			let code = `\
			func = () ->
			return typeof func\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.equal('function');
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should compile objects", function() {
			let code = `\
			singers = {Jagger: 'Rock', Elvis: 'Roll'}
			return singers\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.deep.equal(({Jagger: 'Rock', Elvis: 'Roll'}));
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should compile classes", function() {
			let code = `\
			class MyClass
			  test: ->
			    return 1000
			myClass = new MyClass()
			return myClass.test()\
			`;
			aether.transpile(code);
			expect(aether.canTranspile(code)).to.equal(true);
			expect(aether.run()).to.equal(1000);
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		xit("Should compile super", function() {
		// super is not supported in CSR yet: https://github.com/michaelficarra/CoffeeScriptRedux/search?q=super&ref=cmdform&type=Issues
			let code = `\
			class Animal
			  constructor: (@name) ->
			  move: (meters) ->
			    @name + " moved " + meters + "m."
			class Snake extends Animal
			  move: ->
			    super 5
			sam = new Snake "Sammy the Python"
			sam.move()\
			`;
			aether.transpile(code);
			expect(aether.run()).to.equal("Sammy the Python moved 5m.");
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		it("Should compile string interpolation", function() {
			let code = `\
			meters = 5
			"Sammy the Python moved #{meters}m."\
			`;
			aether.transpile(code);
			expect(aether.run()).to.equal("Sammy the Python moved 5m.");
			return expect(aether.problems.errors).to.deep.equal([]);
		});

		return it("Should implicitly return the last statement", function() {
			aether.transpile('"hi"');
			expect(aether.run()).to.equal('hi');
			return expect(aether.problems.errors).to.deep.equal([]);
		});
	});

	describe("Errors", function() {
		let aether = new Aether({language: "coffeescript"});

		it("Bad indent", function() {
			let code = `\
			fn = ->
			  x = 45
			    x += 5
			  return x
			return fn()\
			`;
			aether.transpile(code);
			expect(aether.problems.errors.length).to.equal(1);
			// TODO: No range information for this error
			// https://github.com/codecombat/aether/issues/114
			return expect(aether.problems.errors[0].message.indexOf("Syntax error on line 3 column 7: unexpected '+'")).to.equal(0);
	 	});

		it("Transpile error, missing )", function() {
			let code = `\
			fn = ->
			  return 45
			  x = fn(
			  return x\
			`;
			aether.transpile(code);
			expect(aether.problems.errors.length).to.equal(1);
			// TODO: No range information for this error
			// https://github.com/codecombat/aether/issues/114
			return expect(aether.problems.errors[0].message.indexOf("Unclosed \"(\" at EOF")).to.equal(0);
		});

		xit("Missing @: x() row 0", function() {
			// TODO: error ranges incorrect
			// https://github.com/codecombat/aether/issues/153
			let code = "x()";
			aether.transpile(code);
			expect(aether.problems.errors.length).to.equal(1);
			expect(aether.problems.errors[0].message).to.equal("Missing `@` keyword; should be `@x`.");
			return expect(aether.problems.errors[0].range).to.equal([ { ofs: 0, row: 0, col: 0 }, { ofs: 3, row: 0, col: 3 } ]);
		});

		xit("Missing @: x() row 1", function() {
			let code = `\
			y = 5
			x()\
			`;
			aether.transpile(code);
			expect(aether.problems.errors.length).to.equal(1);
			return expect(aether.problems.errors[0].message).to.equal("Missing `@` keyword; should be `@x`.");
		});
		// https://github.com/codecombat/aether/issues/115
		// expect(aether.problems.errors[0].range).to.equal([ { ofs: 6, row: 1, col: 0 }, { ofs: 9, row: 1, col: 3 } ])

		xit("Missing @: x() row 3", function() {
			let code = `\
			y = 5
			s = 'some other stuff'
			if y is 5
				x()\
			`;
			aether.transpile(code);
			expect(aether.problems.errors.length).to.equal(1);
			return expect(aether.problems.errors[0].message).to.equal("Missing `@` keyword; should be `@x`.");
		});
		// https://github.com/codecombat/aether/issues/115
		// expect(aether.problems.errors[0].range).to.equal([ { ofs: 42, row: 3, col: 2 }, { ofs: 45, row: 3, col: 5 } ])

		xit("@getItems missing parentheses", function() {
			// https://github.com/codecombat/aether/issues/111
			let history = [];
			let getItems = () => [{'pos':1}, {'pos':4}, {'pos':3}, {'pos':5}];
			let move = i => history.push(i);
			let thisValue = {getItems, move};
			let code = `\
			@getItems\
			`;
			aether.transpile(code);
			let method = aether.createMethod(thisValue);
			aether.run(method);
			expect(aether.problems.errors.length).to.equal(1);
			expect(aether.problems.errors[0].message).to.equal('@getItems has no effect.');
			expect(aether.problems.errors[0].hint).to.equal('Is it a method? Those need parentheses: @getItems()');
			return expect(aether.problems.errors[0].range).to.equal([ { ofs : 0, row : 0, col : 0 }, { ofs : 10, row : 0, col : 10 } ]);
		});

		xit("@getItems missing parentheses row 1", function() {
		    // https://github.com/codecombat/aether/issues/110
		    let history = [];
		    let getItems = () => [{'pos':1}, {'pos':4}, {'pos':3}, {'pos':5}];
		    let move = i => history.push(i);
		    let thisValue = {getItems, move};
		    let code = `\
		    x = 5
		    @getItems
		    y = 6\
		    `;
		    aether.transpile(code);
		    let method = aether.createMethod(thisValue);
		    aether.run(method);
		    expect(aether.problems.errors.length).to.equal(1);
		    expect(aether.problems.errors[0].message).to.equal('@getItems has no effect.');
		    expect(aether.problems.errors[0].hint).to.equal('Is it a method? Those need parentheses: @getItems()');
		    return expect(aether.problems.errors[0].range).to.equal([ { ofs : 7, row : 1, col : 0 }, { ofs : 16, row : 1, col : 9 } ]);
		});

    	it("Incomplete string", function() {
    		let code = `\
    		s = 'hi
    		return s\
    		`;
    		aether.transpile(code);
    		expect(aether.problems.errors.length).to.equal(1);
    		return expect(aether.problems.errors[0].message).to.equal("Unclosed \"'\" at EOF");
    	});
    	// https://github.com/codecombat/aether/issues/114
    	// expect(aether.problems.errors[0].range).to.equal([ { ofs : 4, row : 0, col : 4 }, { ofs : 7, row : 0, col : 7 } ])

      	xit("Runtime ReferenceError", function() {
    		// TODO: error ranges incorrect
    		// https://github.com/codecombat/aether/issues/153
    		let code = `\
    		x = 5
    		y = x + z\
    		`;
    		aether.transpile(code);
    		aether.run();
    		expect(aether.problems.errors.length).to.equal(1);
    		expect(/ReferenceError/.test(aether.problems.errors[0].message)).toBe(true);
    		return expect(aether.problems.errors[0].range).to.equal([ { ofs : 14, row : 1, col : 8 }, { ofs : 15, row : 1, col : 9 } ]);
  		});
	});
});
