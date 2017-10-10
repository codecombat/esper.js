var i = 0;
function inspect(x) {
	console.log([++i, typeof x, x, JSON.stringify(x)].join("\t"));
}

var a = [1,2,3,4];
inspect(a);
a.length = 2;
inspect(a);
inspect(a[3]);
inspect(Object.getOwnPropertyNames(a));

var b = ['a','b','c'];
b.length = 6;
inspect(b);
inspect(Object.getOwnPropertyNames(b));
