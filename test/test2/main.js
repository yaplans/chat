/**
 * main.js
 * Основной модуль всей программы.
 * 
 * */

/**
 * Стартуем веб
 * */
var express = require('express');
var app = express();

// это объект будущего сервера
var http = require('http').Server(app);
// создадим сокет
var io = require('socket.io')(http);
// стартовая папка 
app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
	console.log("socket connection");
});





//~ app.listen(3000, function () {
  //~ console.log('Example app listening on port 3000!');
//~ })
http.listen(3000, function(){
  console.log('listening on *:3000');
});


/**
 * Ищем сервер
 * */

var get_server_ip = require('./api_get_server_ip.js');

get_server_ip.start_server()
get_server_ip.start_client()

console.log('work...');
