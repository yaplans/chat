var PORT = 4554;
// Позже определить программно
var ip = require('./ip.js')
//var BROADCAST_ADDR = '192.168.0.255'
//var MY_IP = "192.168.0.104"
var BROADCAST_ADDR = ip.BROADCAST_IP
var MY_IP = ip.MY_IP
console.log(MY_IP)
console.log(BROADCAST_ADDR)
//
var MY_ID = "" + Date.now()

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var start_client = function (){

// готовим ответы
  client.on('error', (err) => {
    console.log(`client error:\n${err.stack}`);
    client.close();
  });

  client.on('close', () => {
    console.log(`client close`);
  });
/*
client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
*/
  client.on('listening', () => {
    const address = client.address();
    console.log(`client start ${address.address}:${address.port}`);
  });

/*
function l_send_request(){
//  var message = new Buffer(MY_ID)
  var message = Buffer.from(MY_ID)
  client.send(message, 0, message.length, PORT, BROADCAST_ADDR, function(){
    console.log("Send: '" + message + "'")
  })
}
*/
//подготовились ...

// пуляем запросы
  client.bind(function() {
    client.setBroadcast(true)
    setInterval(l_send_request,500)
  })

  console.log('Ищем сервер')
}

function l_send_request(){
//  var message = new Buffer(MY_ID)
  var message = Buffer.from(MY_ID)
  client.send(message, 0, message.length, PORT, BROADCAST_ADDR, function(){
//    console.log("Send: '" + message + "'")
    console.log("> '" + message + "'")
  })
}

module.exports.start_client = start_client
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
/*
function start_server(){
//Поищем сервер
const server = dgram.createSocket("udp4")

server.on('listening', function () {
    var address_ser = server.address();
    console.log('UDP Server listening on ' + address_ser.address + ":" + address_ser.port);
// ??? - вроде бы не нужно
//    server.setBroadcast(true);
});

server.on('message', (msg, rinfo) => {
  console.log(`< ${msg} from ${rinfo.address}:${rinfo.port}`);
//  server.send('eee',rinfo.port,rinfo.address)
});

server.bind(PORT);

}

start_server()
*/

/*

function l_listen() {
client.bind(function(){
  client.setBroadcast(true)
  client.send(message, 3000, "192.168.0.255", err => {
    if(err) {
      client.close()
      throw err
    }
  })
})
}


function l_server() {
client.bind(function(){
  client.setBroadcast(true)
  client.send(message, 3000, "192.168.0.255", err => {
    if(err) {
      client.close()
      throw err
    }
  })
})
}

*/

/*
client.on('close',function(){
// сервер не нашли "Я" - сервер

    console.log('Пока')
})
*/

/*
function l_log(){
  console.log('Привет')
}
function l_close(){
  console.log('l_close')
  client.close()
}
*/

//setTimeout("alert('Привет')", 2000);
//setTimeout(l_log, 2000);


//===================//
// Поищем сервер
//===================//
//l_listen()
//===================//
// Если сервер не нашли "Я" - сервер
//===================//
//setTimeout(l_close, 14000);



