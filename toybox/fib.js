
var fib = function fib(x) {
	if ( x == 1 ) return 1;
	if ( x == 2 ) return 1;
	return fib(x-1) + fib(x-2);
}

for ( var i = 1; i < 150; ++i ) {
	print(i);
	if ( i % 2 == 1 ) continue;
	var f = fib(i);
	print(i, "\t", f);

}
