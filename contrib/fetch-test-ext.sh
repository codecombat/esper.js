#!/bin/sh


curl -L 'https://github.com/Samsung/jerryscript/archive/master.tar.gz' | tar -xz  --strip-components=2 -C contrib/test-suites jerryscript-master/tests/jerry 

mkdir -p contrib/test-suites/duktape 
curl -L 'https://github.com/svaarala/duktape/archive/master.tar.gz' | tar -xz  --strip-components=3 -C contrib/test-suites/duktape duktape-master/tests/ecmascript 

#mkdir -p contrib/test-suites/tiny-js
#curl -L 'https://github.com/gfwilliams/tiny-js/archive/master.tar.gz' | tar -xz  --strip-components=2 -C contrib/test-suites/tiny-js tiny-js-master/tests
