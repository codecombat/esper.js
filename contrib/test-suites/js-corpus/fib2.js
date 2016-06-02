
var results = {0:0,1:1,2:1};
function fib(x) {
	if ( !(x in results )) results[x] = fib(x-1) + fib(x-2);
	return results[x];
}


var val = fib(20);
console.log(val);
if ( val != 6765 ) throw new Error("Failed");
