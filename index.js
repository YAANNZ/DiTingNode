// var http = require("http");
// var url = require("url");
// var fs = require("fs");
// var server = http.createServer(function(req, res){
// 	var pathname = url.parse(req.url).pathname;
// 	switch(pathname) {
// 		case "/" :
// 		case "/wec/allMsg" :
// 			fs.readFile("./wecData/allMsg.json", function(err,data){
// 				res.writeHead(200,{"Content-Type":"text/html;charset=UTf-8"});
// 				res.end(data);
// 			});
// 			break;
// 		default:
// 		    res.writeHead(404,{"Content-Type":"text/html;charset=UTf-8"});
// 			res.end("some wrong");
// 			break;
// 	}
// });

// server.listen(3000, "127.0.0.1");

var express = require('express');
var routes = require('./routes');
var config = require('config-lite')(__dirname);
var app = express();

routes(app);
app.listen(config.port);