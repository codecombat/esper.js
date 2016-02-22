"use strict";

/*global $:false, angular:false, window:false, ace:false, Esper:false, document:false */

var myAppModule = angular.module('MyApp', ['ui.ace', 'ui.bootstrap']);

myAppModule.controller('main', function ($scope, $timeout) { 
	$scope.brekpoints = [];
	$scope.code = window.localStorage.code || document.getElementById("exampleCode").innerText;
	$scope.opts = {forceVar: true, decorateLuaObjects: true, luaCalls: true, luaOperators: true,
		encloseWithFunctions: false, useStrict: false, noMutliReturnSquish: false };

	$scope.fix = function(c) { return c.reverse(); };

	$scope.runMode = function() {
		return typeof $scope.frames !== 'undefined';
	};

	$scope.aceLoaded = function(ai) {
		$scope.ace = ai;
		window.a = ai;
		$scope.Range = ace.require('ace/range').Range;
		
		ai.on("guttermousedown", function(e) { 

			var target = e.domEvent.target; 
			console.log(target, e);
			if (target.className.indexOf("ace_gutter-cell") == -1) 
				return; 
			if (!ai.isFocused()) 
				return; 
			if (e.clientX > 25 + target.getBoundingClientRect().left) 
				return; 

			console.log("OK");
			var row = e.getDocumentPosition().row;
			var bps = e.editor.session.getBreakpoints();
			if ( !bps[row] ) {
				e.editor.session.setBreakpoint(row);
			} else {
				e.editor.session.clearBreakpoint(row);
			}
			$scope.brekpoints = e.editor.session.getBreakpoints();
			e.stop();
		});

		ai.focus();
	};

	$scope.speed = 5;
	var timer = function timer() {
		if ( $scope.speed == 0 ) return $timeout(timer, 1000);
		if ( $scope.esper && $scope.auto ) $scope.step();
		var delay = 1000/Math.pow(10,($scope.speed-3)/3);
		if ( $scope.speed == 10 ) delay = 0;
		$timeout(timer, delay);
	};
	$timeout(timer, 100);

	$scope.names = function(o) {
		return Object.getOwnPropertyNames(o).join(", ");
	};

	$scope.isASTOpen = function(ast) {
		if (!ast) return false;
		return ast._open !== false;
	};

	$scope.tgl = function(ast) {
		if ( ast._open === false ) delete ast._open;
		else ast._open = false;
	};

	$scope.getChildNodes = function(ast) {
		var out = [];
		for (var p in ast) {
			let n = ast[p];
			if ( p === "parent" ) continue;
			if ( p === "loc" ) continue;
			if ( p === "type" ) continue;
			if ( p === "nodeID" ) continue;
			if ( n === null ) continue;
			if ( angular.isArray(n) ) {
				for ( var i in n ) {
					if ( typeof n[i].type === "string" ) out.push(n[i]);
				}
				continue;
			}
			if ( typeof n.type !== "string" ) {
				continue;
			}
			if ( n.type === "Identifier" || n.type === "Literal" ) continue;
			out.push(n);
		}
		return out;		
	};

	$scope.compile = function() {
		var epr = new Esper.Engine();
		try {
			epr.load($scope.code);
		} catch ( e ) {
			$scope.error = e.stack || e.toString();
			return;
		}
		$scope.output = "";
		epr.realm.print = function() {
			$scope.output += Array.prototype.join.call(arguments," ") + "\n";
		};
		delete $scope.error;
		$scope.esper = epr;
		$scope.ast = $scope.esper.evaluator.ast;
		window.esper = epr;
	};

	$scope.start = function() {
		$scope.compile();
		$scope.auto = true;
	};

	$scope.clear = function() {
		if ( $scope.marker ) {
			$scope.ace.session.removeMarker($scope.marker);
			delete $scope.marker;
		}
	};

	$scope.step = function() {
		var result;
		if ( !$scope.esper ) return;
		try {
			result = $scope.esper.step();
		} catch ( e ) {
			$scope.error = e.stack || e.toString();
			result = e;
			//delete $scope.esper;
			//delete $scope.gen;      
		}

		if ( result ) {
			delete $scope.esper;
			delete $scope.gen;
		} else {
			var frames = $scope.esper.evaluator.frames;
			var ast;
			for ( var i = 0; i < frames.length; ++i ) {
				if ( frames[i].ast ) {
					ast = frames[i].ast;
					break;
				}
			}
			
			function readScope(scope) {
				var vars = {};
				var props = scope.object.properties;
				var varz = Object.getOwnPropertyNames(props);
				for ( var z in varz ) {
					var vname = varz[z];
					var val = props[vname].value;
					vars[vname] = (val && val.debugString) ? val.debugString : val;
				}
				return vars;
			}
			var lines = [];
			for ( i = 0; i < frames.length; ++i ) {
				var f = frames[i];
				var o = {
					id: (frames.length - i),
					type: f.type,
					vars: {}
				};
				if ( f.ast ) o.node = f.ast.type;
				if ( f.ast ) o.name = f.ast.srcName;
				if ( f.ast ) o.loc = f.ast.loc.start.line + ":" + f.ast.loc.start.column;
				if ( f.value ) o.value = f.value.debugString;
				if ( f.scope ) {
					o.vars = readScope(f.scope);
					o.vars['this'] = f.scope.thiz && JSON.stringify(f.scope.thiz.toString());
				}
				lines.push(o);
			}
			

			if ( ast ) {

				$scope.clear();
				var range = ast.loc;
				var ln = range.start.line-1;
				if ( $scope.brekpoints[ln] && $scope.skipBP != ln ) {
					$scope.skipBP = ln;
					$scope.auto = false;
				} else if ( $scope.skipBP != ln ) {
					delete $scope.skipBP;
				}
				var rr = new $scope.Range(range.start.line-1, range.start.column, range.end.line-1, range.end.column);
				$scope.marker = $scope.ace.session.addMarker(rr,'executing', 'text');
				//$scope.ace.session.selection.setRange(rr);
				//$scope.output = JSON.stringify(frames,null,'  ');  
			}

			$scope.frames = lines;
		}

		
		
	};


	$scope.pause = function() { $scope.auto = false; };
	$scope.play = function() { $scope.auto = true; };

	$scope.stop = function() {
		$scope.clear();
		delete $scope.esper;
		delete $scope.gen;
		delete $scope.frames;
		$scope.auto = false;
	};

	$scope.aceChanged = _.debounce(function() {
		window.localStorage.code = $scope.code;
		$scope.clear();
		$scope.compile();
	},200);
	
	$scope.$watch('opts', function() {
		$scope.stop();
	}, true);
});