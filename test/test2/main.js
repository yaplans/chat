var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


var get_server_ip = require('./api_get_server_ip.js');
//var my_debug = get_server_ip.my_debug
//my_debug = true;

get_server_ip.start_server()
get_server_ip.start_client()

//get_server_ip.SERVER_IP
