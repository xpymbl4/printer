var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('site/laser/'));

app.get('/', function(req, res){
	res.sendFile('C:/inetpub/wwwroot/xrm/printer/site/laser/laser.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(8080, function(){
	console.log('listening on *:8080');
});