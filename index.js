// var http = require("http");
// var MongoClient = require('mongodb').MongoClient
//    , assert = require('assert');
// var dburl = 'mongodb://localhost:27017/diting';

// MongoClient.connect(dburl, function(err, db){
// 	assert.equal(null, err);
// 	console.log("Connected succesfully to server");

// 	db.close();
// });

// var server = http.createServer(function(req, res){
// 	res.setHeader("Content-Type", "text/html; charset=UTf-8");
// 	res.end("Hello");
// });

// server.listen(3000, "127.0.0.1");

var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	switch(pathname) {
		case "/" :
		case "/wec/allMsg" :
			fs.readFile("./wecData/allMsg.json", function(err,data){
				res.writeHead(200,{"Content-Type":"text/html;charset=UTf-8"});
				res.end(data);
			});
			break;
		default:
		    res.writeHead(404,{"Content-Type":"text/html;charset=UTf-8"});
			res.end("some wrong");
			break;
	}
});

server.listen(3000, "127.0.0.1");