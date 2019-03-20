var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	fs.readFile('index1.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});	
//~ res.writeHead(200, {'Content-Type': 'text/html'});
//~ res.write(JSON.stringify({ message: "Hello World"})); 
//~ res.end('Hello World!');
}).listen(8080, "0.0.0.0");

function m_play(){
	//~ var id = l_get_id();
console.log("Start");
	
	
}

