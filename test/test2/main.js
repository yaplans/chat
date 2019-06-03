/**
 * Стартуем веб
 * */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
//  console.log(__dirname);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


/**
 * Ищем сервер
 * */

var get_server_ip = require('./api_get_server_ip.js');

get_server_ip.start_server()
get_server_ip.start_client()

