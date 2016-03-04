"use strict";
let server = require('http').createServer();
let path = require('path');
let fs = require('fs');
let port = process.env.PORT || 3000;

if ( !fs.existsSync(path.join(__dirname, '..', 'esper.js')) ) {
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

	if ( /\/?esper\.js$/.test(uri) ) {
		file = path.join(__dirname, '..', 'dist', 'esper.js');
		contentType = 'text/javascript';
	} else if ( /\/$/.test(uri) ) {
		contentType = 'text/html';
		file = path.join(__dirname, 'ui', 'index.html');
	} else if ( /\/[a-z]*\.js$/.test(uri) ) {
		file = path.join(__dirname, 'ui', uri);
		contentType = 'text/javascript';
	} else if ( /\/[a-z]*\.png$/.test(uri) ) {
		file = path.join(__dirname, 'ui', uri);
		contentType = 'iamge/png';
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