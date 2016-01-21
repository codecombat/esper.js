/* Javascript eval */

myfoo = eval("true && { foo: 42 }");

result = eval("4*10+2")==42 && myfoo.foo==42;
