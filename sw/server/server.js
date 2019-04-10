const express = require('express');
var app = express();
//~ это объект будущего сервера
var http = require('http').Server(app);
//~ создадим сокет
var io = require('socket.io')(http);

var path = require('path');
const publicPath = path.join(__dirname + "/../public");
app.use(express.static(publicPath));

//~ массив игроков - хранится на сервере
var players = [];



//~ взял здесь
//~ https://socket.io/get-started/chat/
io.on('connection', function(socket){

	// создадим пользователя, т.к. кто-то подключился к серверу
	// с помощью socket
	//~ var user = Date.now();
	//~ console.log('a user connected id=' + `${user}`);
	//~ console.log(socket);
	// на установленном сокете создаем событие
	//~ 	socket.emit('message', 'User ' + user + ' connected');

//~ players.push(i++);
//~ console.log(players);

	//~ io.emit('message', 'User ' + user + ' connected');
	//~ io.emit('user_id', user);




  
	//~ Кто там залогинился?
	// на полученный сокет (а их может быть много) навесим прослушку
	socket.on('m_login', function(message){
		//~ запомним игрока
		players.push({name: message, id: socket.id});
		console.log(players);
		// Разошлем всем - обновленный список игроков
		io.emit('user_name', players);
		
		
		
		//~ console.log('socket.on m_login === ' + message);
		//~ Разошлем клиентам - а нужно-ли?
		//~ io.emit('user_name', message);
		
		//~ отдельное имя не нужно - нужен весь массив
		//~ socket.broadcast.emit('user_name', message);
	});
  
	//~ socket.on('message.send', function(message){
		//~ console.log('socket.on message.send === ' + message);
		// всем отправим
		//~ io.emit('message', message);
		// отправим назад
		//~ socket.emit('message', message);
		// всем кроме отправителя
		//~ socket.broadcast.emit('socket.broadcast message', user + ": " + message);
	//~ }); 
	
	
	// на полученный сокет (а их может быть много) навесим прослушку
	socket.on('disconnect', function(message){
	//~ если, сокет отключился

		//~ console.log("id = " + socket.id);
		for(var i=0; i<players.length; i++){
			//~ console.log(i + " = " + players[i].id);
			if(players[i].id === socket.id){
				// нашли игрока из этого сокета
				players.splice(i, 1);// удаляем 1 элемент начиная с i-того
			}
		}
		console.log('user disconnected ====' + message);
		// Разошлем всем - обновленный список игроков
		io.emit('user_name', players);
	});
});



//~ запускаем сервер
const port = process.env.PORT || 3000
const host = process.env.HOST || "0.0.0.0"
http.listen(port, host, function(){
  //~ console.log('listening on *:3000');
  console.log(`listening on ${host}:${port}`);
});



//~ var http = require('http');
//~ var fs = require('fs');

//~ http.createServer(function (req, res) {
	//~ fs.readFile('index.html', function(err, data) {
		//~ res.writeHead(200, {'Content-Type': 'text/html'});
		//~ res.write(data);
		//~ res.end();
	//~ });	
//~ // res.writeHead(200, {'Content-Type': 'text/html'});
//~ // res.write(JSON.stringify({ message: "Hello World"})); 
//~ // res.end('Hello World!');
//~ }).listen(8080, "0.0.0.0");

