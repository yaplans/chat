function start_server(){

var PORT = 4554;
// Позже определить программно
//var BROADCAST_ADDR = '192.168.0.255'
//var MY_IP = "192.168.0.104"

var ip1 = require('./ip.js')
//var ip1 = require('./1.js')
//var BROADCAST_ADDR = '192.168.0.255'
//var MY_IP = "192.168.0.104"

console.log(ip1)

var BROADCAST_ADDR = ip1.BROADCAST_IP
var MY_IP = ip1.MY_IP
console.log("BROADCAST_ADDR ="+BROADCAST_ADDR)
console.log("MY_IP = "+MY_IP)
//
var MY_ID = "" + Date.now()

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//function start_server(){
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
    if( msg < MY_ID ){
      console.log(`${msg} < ${MY_ID}`)
    }
    if( msg > MY_ID ){
      console.log(`${msg} > ${MY_ID}`)
    }
    if( msg == MY_ID ){
      console.log(`${msg} == ${MY_ID}`)
    }
    if( msg === MY_ID ){
      console.log(`${msg} === ${MY_ID}`)
    }
  });

  server.bind(PORT);
}

//start_server()

module.exports.start_server = start_server

