var express = require('express');
var app = express();
var port = 3521;
var http = require('http');
// var logger = require('logger');
var iniparser = require('iniparser');
var responseTime = require('response-time');
var config = iniparser.parseSync("./config.ini");
var title = config.title;
app.set('view engine', 'pug'); //jade is deprecated
app.set('views', "./views");

app.use(express.static('./public'));
app.use(responseTime());
app.get('/', function(req,res){
    res.render('hello',{title, message:config.message});
});

http.createServer(app).listen(config.port,function(){
    console.log("app is started");
});
