class A {
	static x() { console.log("A.x"); }
	x() { console.log("A::x", this.y); }
	static y() { console.log("A.y"); }
	constructor(n) { console.log("A()", n); }
}

class B extends A {
	constructor(n) { 
		super(n+1);
		console.log("B()", n); 
	}
	x() { 
		super.x();
		console.log("B::x", this.y);
	}
	static z() {
		super.y();
	}
}

function keys(o) {
	return (Object.getOwnPropertyNames(o)).sort();
}

console.log("A", keys(A));
console.log("B", keys(B));
console.log("A.prototype", keys(A.prototype));
console.log("B.prototype", keys(B.prototype));

let o = new B(4);
o.y = 10;
o.x();


o = new B(4);
o.x();

A.x();
B.y();
B.z();
