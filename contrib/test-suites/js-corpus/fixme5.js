function a() {
	return new.target;
}

console.log(a());
console.log(new a);
console.log(new a());
