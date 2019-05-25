var PORT = 4554;
// Позже определить программно
//var BROADCAST_IP = '192.168.0.255'
//var MY_IP = "192.168.0.104"
var BROADCAST_IP = ''
var MY_IP = ""
//!!!!
var SERVER_IP = ""
var periodID = 0;
/**
 * Определяем свой и широковещательный 
 * адреса
 * */

var ip = require('./ip.js')

var timerId = setInterval(function(){
  if(!isEmpty(ip)){
    clearInterval(timerId)
    console.log('Ok!')
	BROADCAST_IP=ip.BROADCAST_IP
	MY_IP = ip.MY_IP
	console.log(BROADCAST_IP)
	console.log(MY_IP)
	
	start_client()
	start_server()
  }
},10)

/**
* Пуст ли объект
*/
function isEmpty(arg) {
  for (var item in arg) {
    return false;
  }
  return true;
}

// Получили...


//
var MY_ID = "" + Date.now()

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

function start_client(){

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

// пуляем запросы
client.bind(function() {
  client.setBroadcast(true)
  periodID = setInterval(l_send_request,500)
})

console.log('Ищем сервер')
}

function l_send_request(){
//  var message = new Buffer(MY_ID)
  var message = Buffer.from(MY_ID)
  client.send(message, 0, message.length, PORT, BROADCAST_IP, function(){
    console.log("> '" + message + "'")
  })
}

//start_client()
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

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
  if(rinfo.address != MY_IP){
    console.log(`< ${msg} from ${rinfo.address}:${rinfo.port}`);
  }
  if(msg<MY_ID){
	  console.log(`!!! NEW SERVER ID=`+msg+' IP='+rinfo.address);
	  SERVER_IP=rinfo.address;
	  SERVER_ID=msg;
	  console.log(`!!! STOP SERVER ID=`+MY_ID);
	  server.close();
	  console.log(`!!! STOP CLIENT ID=`+MY_ID);
	  
	  clearInterval(periodID)
	  client.close();
  }
});

server.bind(PORT);

}



