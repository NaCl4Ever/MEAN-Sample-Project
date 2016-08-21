var express = require('express');
var url = require('url');
var app = express();
	var ejs = require('ejs');
app.listen(8080);
app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// app.get('/find', function(req,res){
// 	var url_parts = url.parse(req.url, true);
// 	console.dir(url_parts);
// });
app.get('/home', function(req,res){
	res.render('home');
});
app.get('/help', function(req,res){
	res.render('help');
	
});