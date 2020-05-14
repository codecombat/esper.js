let X = 0;
let init = () => ++X

class C {
	a = init()
	static b = 20
}

class D extends C {
	e = 39
}

let c = new C();
console.log(c.a);
console.log(C.b);

let d = new D();
console.log(d.a);
console.log(D.b);
console.log(d.e);

console.log(JSON.stringify(c));
console.log(JSON.stringify(d));
