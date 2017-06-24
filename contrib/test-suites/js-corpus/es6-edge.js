

function hasRest(a, b, ...c) {
	console.log(arguments.length, arguments, Array.prototype.join.call(arguments," "));
	console.log(c);
}

hasRest(1,2,3,4,5,6,7);
