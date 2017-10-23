var fs = require("fs");

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.redirect('/wec/allMsg');
	});

	app.get('/wec/allMsg', function (req, res) {
		fs.readFile("./wecData/allMsg.json", function(err,data){
				res.writeHead(200,{"Content-Type":"text/html;charset=UTf-8"});
				res.end(data);
			});
	});

	app.use(function (req, res) {
		if (!res.headersSent) {
			res.writeHead(404,{"Content-Type":"text/html;charset=UTf-8"});
			res.end("some wrong");
		}
	});
};