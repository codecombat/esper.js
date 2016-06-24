"use strict";
let server = require('http').createServer();
let path = require('path');
let fs = require('fs');
let port = process.env.PORT || 3000;

if ( !fs.existsSync(path.join(__dirname, '..', 'dist', 'esper.js')) ) {
	console.log();
	console.log("esper.js distributable not built yet!");
	console.log("Build it with `npm run webpack`");
	console.log();
	process.exit(1);
}

server.on('request', (req, res) => {
	let uri = req.url;
	let file;
	let contentType = 'text/plain';
	let parts = uri.split('/');
	if ( /^\/?docs\/$/.test(uri) ) {
		file = path.join(__dirname, '..', 'esdoc', 'index.html');
		contentType = 'text/html';
	} else if ( /^\/?docs\/[a-zA-Z/_-]+[.](html|css|js|png|svg)/.test(uri) ) {
		file = path.join.apply(path, [__dirname, '..', 'esdoc'].concat(parts.slice(2)));
		var ext = uri.split('.').pop();
		switch ( ext ) {
			case 'html': contentType = 'text/html'; break;
			case 'css': contentType = 'text/css'; break;
			case 'js': contentType = 'text/javascript'; break;
			case 'png': contentType = 'image/png'; break;
			case 'svg': contentType = 'image/svg+xml'; break;
		}

	} else if ( /\/?esper\.js$/.test(uri) ) {
		file = path.join(__dirname, '..', 'dist', 'esper.js');
		contentType = 'text/javascript';
	} else if ( /\/?esper-test\.js$/.test(uri) ) {
		file = path.join(__dirname, '..', 'dist', 'esper-test.js');
		contentType = 'text/javascript';
	} else if ( /\/?esper-test\.modern\.js$/.test(uri) ) {
		file = path.join(__dirname, '..', 'dist', 'esper-test.modern.js');
		contentType = 'text/javascript';
	} else if ( /\/$/.test(uri) ) {
		contentType = 'text/html';
		file = path.join(__dirname, 'ui', 'index.html');
	} else if ( /\/test-modern/.test(uri) ) {
		contentType = 'text/html';
		file = path.join(__dirname, 'ui', 'test-modern.html');
	} else if ( /\/test/.test(uri) ) {
		contentType = 'text/html';
		file = path.join(__dirname, 'ui', 'test.html');
	} else if ( /\/[a-z]*\.js$/.test(uri) ) {
		file = path.join(__dirname, 'ui', uri);
		contentType = 'text/javascript';
	} else if ( /\/[a-z]*\.png$/.test(uri) ) {
		file = path.join(__dirname, 'ui', uri);
		contentType = 'image/png';
	}
	
	if ( !file ) {
		res.writeHead(404);
		res.end("404. File Not Found: " + uri);
		return;
	}

	fs.readFile(file, (err, content) => {
		if ( err && err.code == 'ENOENT' ) {
			res.writeHead(404);
			res.end("404. File Not Found.");
		} else if ( err ) {
			console.log(err);
			res.writeHead(500);
			res.end("500. Server Error.");
		} else {
			res.writeHead(200, {'Content-Type': contentType});
			res.end(content);
		}
	});
});

server.listen(port, () => {
	console.log("Esper UI Listening on Port " + port);
});
