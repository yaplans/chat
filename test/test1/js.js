var PORT = 4554;
var dgram = require('dgram');
//var client = dgram.createSocket('udp4');

//Поищем сервер
const message = Buffer.from("Hello")
const client = dgram.createSocket("udp4")

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

client.on('close',function(){
    console.log('Пока')
})

function l_log(){
  console.log('Привет')
}
function l_close(){
  console.log('l_close')
  client.close()
}


//setTimeout("alert('Привет')", 2000);
//setTimeout(l_log, 2000);
setTimeout(l_close, 14000);


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