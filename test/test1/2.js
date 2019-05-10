var MY_IP =''
var BROADCAST_IP =''
var network = require('network')

 console.log('1')
 console.log(network)

//var obj = network.get_active_interface()
//.ip_address
// console.log(obj)


//var z = 
network.get_active_interface(function(err, obj) {
  // главный ip (настроенный на шлюз)
  console.log("555")
  MY_IP = obj.ip_address
  console.log('       MY_IP = '+MY_IP)
//  return obj
  console.log("777")
  console.log('       MY_IP = '+MY_IP)
})

//z()
  console.log('2')
//  console.log(obj)
//  MY_IP = z().ip_address
//
//  console.log(z)
//  console.log(network)
  // маска сети

module.exports.BROADCAST_IP = BROADCAST_IP
//(BROADCAST_IP)
module.exports.MY_IP = MY_IP
  console.log('3')
  console.log('       MY_IP = '+MY_IP)
