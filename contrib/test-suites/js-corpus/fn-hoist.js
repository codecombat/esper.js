var x = 10;
console.log(x);
if ( true ) {
  console.log(x);
  x();
  function x() { console.log("hi"); }
}
console.log(x);