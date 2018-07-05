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

let y = 0;
for ( let y of [8,6,7,5,3,0,9] )
	console.log(y);

console.log(y);

//Array Find

console.log([1,2,3,4,5].find(function(t) {
	console.log(JSON.stringify(arguments));
	return t == 4;

}));

console.log([1,2,3,4,5].find(function(t) {
	return t == 0;
}));

console.log(`1 ${2} 3 ${4} ${typeof(Math)}`)
console.log `1 ${2} 3 ${4} ${typeof(Math)}`

function raw(s) { return s.raw.join('|') + Object.keys(s).join("%") }

console.log(raw `Two\nLines ${x}\nThree\nLines`)
console.log(String.raw `Two\nLines ${x}\nThree\nLines`)
console.log(String.raw({ raw: 'test' }, 0, 1, 2));
