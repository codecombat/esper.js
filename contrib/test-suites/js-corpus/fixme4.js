
let a = [];
for ( let i = 0; i < 9; ++i ) a.push(function() { return i; });

console.log(a.map(x => x()));
