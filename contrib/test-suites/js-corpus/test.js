var rob = 2*3+4;
console.log("Rob is", rob);
if ( rob % 2 == 1 ) {
	console.log("+");
} else {
	console.log("-");
}

var x = 2;
function d(x) {
	console.log("Rob is great!", x);
	return x*2;
	console.log("Nope");
}
var rob2 = d(10);
console.log("Okay");
d(rob2);
console.log(x);

//console.log(d(10))

function start(d) {
	var count = d;
	function p() {
		console.log(++count);
	}
	return p;
}

var z = start(10);
z()
z()
z()
var y = start(100)
y()
y()
z()
y()
var o = {a: 1, b: 2, c: 3};