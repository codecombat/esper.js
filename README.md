# Esper.js

A javascript self-interpreter with a focus on sandboxed execution and runtime introspection.

<h3 align="center">
<a href="http://esper.chessgears.com/">Demo</a> |
<a href="http://esper.chessgears.com/test">Run Tests</a>
</h3>

## Usage 

At the most basic level, esper's eval function can be used as a safe replacement for the native eval function.

```js
var four = esper.eval('2+2');
```

More functionality is available via an Engine object.

```js
var engine = esper({
	
});

engine.addGlobal('two', 2);
engine.load('2+two');
var result = engine.runSync();
result.toNative() === 4;
```

## Options

The `esper()` function takes an options object as it only parameter.

#### strict
Type: `boolean`
Default: `false`

If true, force all code to be run in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

#### `foreignObjectMode`
Type: `string`
Default: `enum`

#### `addInternalStack`
Type: `boolean`
Default: `false`

If true, the interpreter's internal stack will be added to the stack trace of exceptions.

#### `executionLimit`
Type: `Integer`
Default: `Infinity`

The number of AST nodes methods like `.runSync()` will evaluate before giving up.  Set this
to prevent infinite loops.

#### `exposeEsperGlobal`
Type: `boolean`
Default: `true`

Creates a global named `Esper` inside the interpreter with introspection and metaprogramming functions.

## Building

Esper utilizes the webpack build system to create a single file suitable for use in the browser.

#### `--profile=<profile>`

| Profile | Use |
| --- | --- |
| web | The default profile.  Creates an single ES5 compatible file with self contained regenerator-runtime and es6 polyfills.  |
| modern | Creates an single ES6 compatible file.  More performance than web, but requires a modern browser.  |
| nashorn | Crates a single file targeting the [Java Nashorn engine](http://openjdk.java.net/projects/nashorn/).  Uses Nashorn's parser instead of embedded esprima. |

#### `--test`

Creates a test builds that embeds the unit tests.  Including this file in a `<script>` tag will take over the page and
display the test output in real time.

#### `--min`

Minify the resulting build using UglifyJS.

## Contributing 

If you'd like to contribute, please [sign the CodeCombat contributor license agreement](http://codecombat.com/cla) so we can accept your pull requests.

Checklist for contributing:
- All tests pass. `npm run test`
- No code style problems. `npm run style`
- Code coverage increased. `npm run cover`
- `webpack --test` build passes  test in browser.

## License

[The MIT License](LICENSE.txt)




