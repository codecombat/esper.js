function Rob() {

};

function test(n) {
	console.log(
		typeof n,
		Object.prototype.isPrototypeOf.call(n, Rob),
		Object.prototype.isPrototypeOf.call(Rob, n)
	);
}


test({});
test(0);

test(function() {});
test(new Rob());
test(Object.prototype);
