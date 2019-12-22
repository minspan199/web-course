var http = require('http');
var events = require('events');//import event module.
var eventEmitter = new events.EventEmitter();//create an eventEmitter object.

var server = http.createServer(function(req, res){
    eventEmitter.emit('request', 'TEST');//event trigger
    res.end('Server works.');
});

eventEmitter.on('request', function(data){
    console.log('A request has been sent on this server', data);
});//event listener
server.listen(3000, 'localhost', function(){
    console.log('server started on port: 3000');
});