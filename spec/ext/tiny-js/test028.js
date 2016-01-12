// test for array contains
var a = [1,2,4,5,7];
var b = ["bread","cheese","sandwich"];

result = a.indexOf(1) != -1 && a.indexOf(42) == -1 && b.indexOf("cheese") != -1 && b.indexOf("eggs") == -1;
