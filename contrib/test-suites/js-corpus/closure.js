let i = 0;
var v = 99;

function inspect(x) {
	console.log([++i, typeof x, x].join("\t"));
}

function counter1(initial) {
	var v = initial;
	return {
		add() { return ++v; },
		subtract() { return --v; },
		value() { return v; }
	}
}

function counter2(v) {
	return {
		add() { return ++v; },
		subtract() { return --v; },
		value() { return v; }
	}
}

function counter3(initial) {
	let v = initial;
	return {
		add() { return ++v; },
		subtract() { return --v; },
		value() { return v; }
	}
}

function test(fn) {

	let x = fn(10);
	let y = fn(0);

	let v = 20;
	inspect(x.value());
	inspect(x.add());
	inspect(y.add());
	inspect(x.subtract());
	inspect(v);

}

test(counter1);
test(counter2);
test(counter3);


