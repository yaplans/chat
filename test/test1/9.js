var network = require('network')
//var Addres4 = require('ip-address').Address4

//var obj = {}
//var z = 

var promise = new Promise(res,rej){
  console.log('rrr')
}

network.get_active_interface(function(err, obj) {
  // главный ip (настроенный на шлюз)
//  console.log(obj)
  module.exports.ip = obj
})