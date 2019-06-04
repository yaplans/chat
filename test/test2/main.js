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

app.use(express.static(__dirname + '/public'));
//  console.log(__dirname);

//~ это объект будущего сервера
var http = require('http').Server(app);
//~ создадим сокет
var io = require('socket.io')(http);

io.on('connection', function(socket){
	console.log(socket);
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


/**
 * Ищем сервер
 * */

var get_server_ip = require('./api_get_server_ip.js');

get_server_ip.start_server()
get_server_ip.start_client()

