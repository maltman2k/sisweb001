var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/EDEIOT',function(req,res){
  res.sendFile(__dirname + '/public/edeiot.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile(__dirname + '/public/sitemap.html');
});

app.listen(port);

console.log("Running at Port "+port);


/*
var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, world!</h1>');
    
}).listen(process.env.PORT || 8080);
*/