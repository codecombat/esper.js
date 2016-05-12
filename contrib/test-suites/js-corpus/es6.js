'use strict';

var arrow = (x) => x*2;

console.log(arrow(10));

var arrow2 = (x) => {
	console.log("xyzzy");
}

arrow2();

class Clazz {
	whatever() { return 30; }
	static something() { return 40; }
}

var x = new Clazz();
console.log(typeof x.whatever, x.whatever());

console.log(typeof Clazz.whatever);
console.log(typeof Clazz.prototype.whatever);
console.log(typeof Clazz.something, Clazz.something());

for ( let y of [8,6,7,5,3,0,9] )
	console.log(y);