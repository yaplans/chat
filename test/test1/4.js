var ip = require('./ip.js')

var z = function(callback){
  callback()
}
z(function(){
 console.log('from 4 = '+ip)
 console.log('from 4 = '+ip.MY_IP)
 console.log('from 4 = '+ip.BROADCAST_IP)
})

 console.log('2 from 4 = '+ip)
 console.log('2 from 4 = '+ip.MY_IP)
 console.log('2 from 4 = '+ip.BROADCAST_IP)




/*
x = nt.MY_IP
 console.log('x2')
console.log(x)
 console.log('x3')
*/
