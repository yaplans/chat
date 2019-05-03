var PORT = 4554;
// Позже определить программно
var BROADCAST_ADDR = '192.168.0.255'
var MY_IP = "192.168.0.104"
//
var MY_ID = "" + Date.now()


var dgram = require('dgram');
var client = dgram.createSocket('udp4');


// готовим ответы
client.on('error', (err) => {
  console.log(`client error:\n${err.stack}`);
  client.close();
});

client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

client.on('listening', () => {
  const address = client.address();
  console.log(`client listening ${address.address}:${address.port}`);
});


function l_send_request(){
  var message = new Buffer(MY_ID)
  client.send(message, 0, message.lenght, PORT, BROADCAST_ADDR, function(){
    console.log("Send: '" + message + "'")
  })
}
//подготовились ...

// пуляем запросы
client.bind(function() {
  client.setBroadcast(true)
  setInterval(l_send_request,500)
})



console.log('Ищем сервер')




//Поищем сервер
//const message = Buffer.from("Hello")
//const client = dgram.createSocket("udp4")

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

/*
client.on('close',function(){
// сервер не нашли "Я" - сервер

    console.log('Пока')
})
*/
function l_log(){
  console.log('Привет')
}
function l_close(){
  console.log('l_close')
  client.close()
}


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


/*

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true);
});

client.on('message', function (message, rinfo) {
    console.log('Message from: ' + rinfo.address + ':' + rinfo.port +' - ' + message);
});

client.bind(PORT);

*/