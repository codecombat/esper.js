let testValues = [
    -1/0, -1e9, -1, -0, +0, +1, 1e9, 1/0, 0/0,
    '', 'foo', 'foo\0', 'foo\u1234', 'foo\u4321',
    {}, [], [1]
];

let ops = {
	'+': (a,b) => a+b,
	'-': (a,b) => a-b,
	'*': (a,b) => a*b,
	'/': (a,b) => a/b,
	'%': (a,b) => a%b,
	'>': (a,b) => a>b,
	'<': (a,b) => a<b,
	'>=': (a,b) => a>=b,
	'<=': (a,b) => a<=b,
	'==': (a,b) => a==b,
	'!=': (a,b) => a!=b,
	'===': (a,b) => a===b,
	'!==': (a,b) => a!==b,
}


for ( let i = 0; i < testValues.length; ++i ) {
	for ( let j = 0; j < testValues.length; ++j ) {
		let a = testValues[i];
		let b = testValues[j];
		for ( let op in ops ) {
			console.log([i,j,JSON.stringify(a),op,JSON.stringify(b),'=',ops[op](a,b)].join(' '))
		}
	}
}