var i = 0;
function inspect(a,b) {
	++i;
	console.log([i, typeof a, a, typeof b, b, a == b, a === b ].join("\t"));
	console.log([i, typeof b, b, typeof a, a, b == a, b === a ].join("\t"));

}

inspect(null, undefined);
inspect(null, 0);
inspect(undefined, 0);

inspect('0', 0);
inspect('true', true);
inspect({}, true);
inspect(function x() {}, true);
