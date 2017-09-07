var http = require("http");

var server = http.createServer(function(req, res){
	res.setHeader("Content-Type", "text/html; charset=UTf-8");
	res.end("Hello");
});

server.listen(3000, "127.0.0.1");