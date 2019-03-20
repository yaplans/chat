//chat on socket.io
//~ ???
//~ 1. var or const
//~ 2. express.static
//~ 3. ??? не понятно как сервер находит index.html

//~ так покороче, но понадобилась константа express
//~ var app = require('express')();
const express = require('express');
var app = express();
//

//~ это объект будущего сервера
var http = require('http').Server(app);
//~ создадим сокет
var io = require('socket.io')(http);

var path = require('path');
const publicPath = path.join(__dirname + "/../public");
app.use(express.static(publicPath));

//~ не требуется, т.к. ??? не понятно как сервер находит index.html
// выдача в браузер
//~ app.get('/', function(req, res){
  //~ res.send('<h1>Hello world</h1>');
  //~ res.sendFile(__dirname + "/../public/index.html");
//~ });

// ??? - здесь перестало работать
//~ io.on('connection',function (socket) {
	//~ console.log('connection on!');
	// создадим пользователя, т.к. кто-то подключился к серверу
	// с помощью socket
	//~ var user = Date.now();
	//~ console.log(user);
	// socket 
	// ??? - здесь перестало работать
	//~ io.emit('message', 'User ' + user + ' connected');
//~ });

//~ взял здесь
//~ https://socket.io/get-started/chat/
io.on('connection', function(socket){
  console.log('a user connected');
	// создадим пользователя, т.к. кто-то подключился к серверу
	// с помощью socket
	var user = Date.now();
	// на установленном сокете создаем событие
	//~ 	socket.emit('message', 'User ' + user + ' connected');
	io.emit('message', 'User ' + user + ' connected');
  
  socket.on('message.send', function(message){
    console.log('message.send = ' + message);
    // всем отправим
    //~ io.emit('message', message);
    // отправим назад
    //~ socket.emit('message', message);
    //~ всем кроме отправителя
    socket.broadcast.emit('message', user + ": " + message);
  }); 
  
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('message.send', function(message){
	console.log('message.send');
});


const port = process.env.PORT || 3000

http.listen(port, function(){
  //~ console.log('listening on *:3000');
  console.log(`listening on *:${port}`);
});
