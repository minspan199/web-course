var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('<h1>Express working!</h1>');
})

app.get('/task', function(req, res){
    fs.readFile('./db.json', function(err, data){
        if(!err){
            var tasks = JSON.parse(data.toString()).tasks;
            res.send(tasks);
            // res.json(tasks);
        } else{
            res.send('database read error.');
        }
        
    });
})

app.listen(3000, function(){
    console.log('server listerning on prot: 3000');
})

server.listen(4000, function(){
    console.log('http server listerning on prot: 4000');
})