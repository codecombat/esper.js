function test(n) {
	var a = Number(n);
	var b = new Number(n);

	console.log(n, typeof a, a, a.toExponential(), a.toFixed(), a.toPrecision());
	console.log(n, typeof a, a, a.toExponential(3), a.toFixed(3), a.toPrecision(3));
	console.log(n, typeof b, b, b.toExponential(), b.toFixed(), b.toPrecision());
	console.log(n, typeof n, n, n.toExponential(), n.toFixed(), n.toPrecision());
}

test(0);
test(100)
test(NaN);
test(100)