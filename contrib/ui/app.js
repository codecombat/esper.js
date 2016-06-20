'use strict';

/*global $:false, angular:false, window:false, ace:false, esper:false, document:false, _:false */

var myAppModule = angular.module('MyApp', ['ui.ace', 'ui.bootstrap']);

myAppModule.controller('main', function($scope, $timeout, $http, $q, $location) {
	var params = $location.search();

	$scope.brekpoints = [];
	if ( params.gist ) {
		$scope.code = '// Loading gist...';
		$http({
			url: 'https://api.github.com/gists/' + params.gist
		}).then(function(cb) {
			var result = cb.data;
			var name = Object.keys(result.files).pop();
			$scope.code = result.files[name].content;
		});
	} else {
		$scope.code = window.localStorage.code || document.getElementById('exampleCode').innerText;
	}

	$scope.opts = {forceVar: true, decorateLuaObjects: true, luaCalls: true, luaOperators: true,
		encloseWithFunctions: false, useStrict: false, noMutliReturnSquish: false};

	$scope.fix = function(c) { return c.reverse(); };

	$scope.runMode = function() {
		return $scope.engines && $scope.engines.length > 0;
	};

	$scope.aceLoaded = function(ai) {
		$scope.ace = ai;
		window.a = ai;
		$scope.Range = ace.require('ace/range').Range;

		ai.on('guttermousedown', function(e) {

			var target = e.domEvent.target;
			console.log(target, e);
			if (target.className.indexOf('ace_gutter-cell') == -1) return;
			if (!ai.isFocused()) return;
			if (e.clientX > 25 + target.getBoundingClientRect().left) return;

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

	$scope.speed = params.speed || 5;
	var timer = function timer() {
		if ( $scope.speed === 0 ) return $timeout(timer, 1000);
		if ( $scope.engines && $scope.auto ) $scope.step();
		var delay = 1000 / Math.pow(10,($scope.speed - 3) / 3);
		if ( $scope.speed == 10 ) delay = 0;
		$timeout(timer, delay);
	};
	$timeout(timer, 100);

	$scope.names = function(o) {
		return Object.getOwnPropertyNames(o).join(', ');
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
			if ( p === 'parent' ) continue;
			if ( p === 'loc' ) continue;
			if ( p === 'type' ) continue;
			if ( p === 'nodeID' ) continue;
			if ( n === null ) continue;
			if ( angular.isArray(n) ) {
				for ( var i in n ) {
					if ( typeof n[i].type === 'string' ) out.push(n[i]);
				}
				continue;
			}
			if ( typeof n.type !== 'string' ) {
				continue;
			}
			if ( n.type === 'Identifier' || n.type === 'Literal' ) continue;
			out.push(n);
		}
		return out;
	};

	$scope.compile = function() {
		var epr = new esper.Engine();
		epr.addGlobalFx('fetch', function(url) {
			return esper.FutureValue.make($http({
				url: url,
				method: 'GET',
				transformResponse: null
			}).then(function(data) {
				return epr.realm.fromNative(data.data);
			}, function(e) {
				return $q.reject(epr.realm.fromNative(new Error('Fetch failed.')));
			}));
		});

		epr.addGlobalFx('fork', function(yourFX) {
			var parent = $scope.esper;
			var fx = esper.Value.getBookmark(yourFX);
			var eng = parent.fork();
			var newThread = eng.evaluator;
			var scope = parent.globalScope.createChild();
			let c = fx.call(esper.Value.undef, [], scope);
			newThread.pushFrame({generator: c, type: 'program', scope: scope, ast: null});
			eng.generator = newThread.generator();
			$scope.engines.push(eng);
		});

		try {
			epr.load($scope.code);
		} catch ( e ) {
			$scope.error = e.stack || e.toString();
			return;
		}

		$scope.output = '';
		epr.realm.print = function() {
			$scope.output += Array.prototype.join.call(arguments,' ') + '\n';
		};
		delete $scope.error;
		$scope.esper = epr;
		$scope.engines = [epr];
		$scope.ast = epr.evaluator.ast;
		window.engine = epr;
	};

	$scope.start = function() {
		$scope.compile();
		$scope.auto = true;
	};

	$scope.clear = function() {
		angular.forEach($scope.marker, function(marker) {
			$scope.ace.session.removeMarker(marker);
		});
		$scope.marker = [];
	};

	$scope.step = function() {
		if ( !$scope.engines ) return;
		$scope.clear();
		var terminated = [];
		for ( var i in $scope.engines ) {
			var eng = $scope.engines[i];
			if ( stepOne(eng) ) {
				if ( eng == $scope.esper ) {
					delete $scope.esper;
					delete $scope.gen;
				}
				terminated.push(eng);
			}
		}
		var stillRunning = [];
		angular.forEach($scope.engines, function(e) {
			if ( terminated.indexOf(e) === -1 ) stillRunning.push(e);
		});

		$scope.engines = stillRunning;

	};

	function stepOne(engine) {
		var result;
		try {
			result = engine.step();
		} catch ( e ) {
			console.log(e);
			$scope.error = e.stack || e.toString();
			result = e;
			//delete $scope.esper;
			//delete $scope.gen;
		}

		if ( result ) {
			return true;
		} else {
			var frames = engine.evaluator.frames;
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
				if ( f.ast ) {
					o.node = f.ast.type;
					o.name = f.ast.srcName;
					o.loc = f.ast.loc.start.line + ':' + f.ast.loc.start.column;
				}
				if ( f.value ) o.value = f.value.debugString;
				if ( f.scope ) {
					o.vars = readScope(f.scope);
					o.vars['this'] = f.scope.thiz && JSON.stringify(f.scope.thiz.toString());
				}
				lines.push(o);
			}

			if ( ast ) {
				var range = ast.loc;
				var ln = range.start.line - 1;
				if ( $scope.brekpoints[ln] && $scope.skipBP != ln ) {
					$scope.skipBP = ln;
					$scope.auto = false;
				} else if ( $scope.skipBP != ln ) {
					delete $scope.skipBP;
				}
				var rr = new $scope.Range(range.start.line - 1, range.start.column, range.end.line - 1, range.end.column);
				$scope.marker.push($scope.ace.session.addMarker(rr,'executing', 'text'));
				//$scope.ace.session.selection.setRange(rr);
				//$scope.output = JSON.stringify(frames,null,'  ');
			}

			$scope.frames = lines;
		}

	}

	$scope.pause = function() { $scope.auto = false; };
	$scope.play = function() { $scope.auto = true; };

	$scope.stop = function() {
		$scope.clear();
		delete $scope.esper;
		delete $scope.gen;
		delete $scope.frames;
		$scope.engines = [];
		$scope.auto = false;
	};

	$scope.aceChanged = _.debounce(function() {
		window.localStorage.code = $scope.code;
		$scope.clear();
	},200);

	$scope.$watch('opts', function() {
		$scope.stop();
	}, true);

});
