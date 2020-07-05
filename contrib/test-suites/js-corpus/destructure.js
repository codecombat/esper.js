let {a,b} = {a:1, b:2};

console.log(a,b)

let [c,d] = [3,4];
console.log(c, d);


[d,c] = [c,d];
console.log(c, d);

let {a:e, b:f} = {a,b};
console.log(e,f);


let g, h;

[g=5, h=7] = [1];
console.log(g,h);


let [i, ...j] = [1,2,3,4,5];
console.log(i, typeof j, j);

let k = [5,6,7, ...j];
console.log(k);


function fn(a, ...b) {
	return [7, ...b, 7];
}

console.log(fn(1,2,3,4));
console.log(fn(...j));