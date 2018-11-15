y = 1;
function a(b) {
	return function(c) { return (d) => d*c*b+y; };
}



console.log([2,3,4,5,6].map(a).map((x) => x(2)(3)));


/*
let stack = [];
for ( let i = 0; i < 10; ++i ) stack.push(() => console.log(i));
stack.forEach((v) => v());
*/
