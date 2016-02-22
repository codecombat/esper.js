"use strict";

function parse(/*code, [name], [location]*/) {
    var code, name = "<unknown>", location = false;
    switch (arguments.length) {
        case 3:
            location = arguments[2];
        case 2:
            name = arguments[1];
        case 1:
            code = arguments[0];
    }

    var jsonStr = Packages.jdk.nashorn.api.scripting.ScriptUtils.parse(code, name, location);
    return JSON.parse(jsonStr,
        function (prop, value) {
            if (typeof(value) == 'string' && prop == "value") {
                // handle regexps and strings - both are encoded as strings but strings
                // do not start with '/'. If regexp, then eval it to make RegExp object
                if ( value.startsWith('/') ) {
			return eval(value);
		} else {
			return value.substring(1);
		}
            } else {
                // anythin else is returned "as is""
                return value;
            }
        });
}

module.exports = {
	parse: function(code) {
		var ast = parse(code, '<src>', true);
		return ast;
	}
}
