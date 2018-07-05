let x = 10;
with ( Math ) {
	let x = 20;
	console.log(x, sin(PI));
}

let y = {x: 30}
let z = 'z';
with ( y ) {
	//y.z = 'Z';
	console.log(z);
}

console.log(x);
