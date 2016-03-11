#!/bin/sh


curl -L 'https://github.com/Samsung/jerryscript/archive/master.tar.gz' | tar -xz  --strip-components=2 -C test/ext jerryscript-master/tests/jerry 

mkdir -p test/ext/duktape 
curl -L 'https://github.com/svaarala/duktape/archive/master.tar.gz' | tar -xz  --strip-components=3 -C test/ext/duktape duktape-master/tests/ecmascript 

#mkdir -p test/ext/tiny-js
#curl -L 'https://github.com/gfwilliams/tiny-js/archive/master.tar.gz' | tar -xz  --strip-components=2 -C test/ext/tiny-js tiny-js-master/tests