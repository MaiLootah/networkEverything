Node.js: A platform where you can test run programs locally

open Node.js command promt 
>cd Desktop
>node hello.js
  Hello world!

use cd to move between differet directorys


//Server.js
// include libraries and declare global varatities: 
var express = require ('express'); 			// include the express library
var server = express ();					// create a server using express

// define the callback function that's called when
// a client makes a request:

function respondToClient( request, response ) {
	console.log(" got a request"); 		// print a message on the command line
	// write back to the client
	response.writeHead (200, {"Content-Type": "text/html"});
	response.write("Hello,client!");
	respond.end();

}

// start the server:
server.listen(8080);
// define what to do when the client requests something:
server.get("/*", respondToClient);
console.log('Server is listening to port 8080');
