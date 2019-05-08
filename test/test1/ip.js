var MY_IP
var BROADCAST_IP

var network = require('network')
var Addres4 = require('ip-address').Address4

network.get_active_interface(function(err, obj) {
  // главный ip (настроенный на шлюз)
  MY_IP = obj.ip_address
//
  console.log('       MY_IP = '+MY_IP)
  // маска сети
  var mask_net = obj.netmask
  // строка битов из маски сети
  var x= new Addres4(mask_net).mask()
  // строка битов из ip адреса
  var y= new Addres4(MY_IP).mask()

//  console.log('  hex my_ip = '+y)
  x=my_bit_broadcast(y,x)
//    console.log('  hex broad = '+BROADCAST_IP)
  BROADCAST_IP=my_bit_to_ip(x)
    console.log('BROADCAST_IP = '+BROADCAST_IP)
})

module.exports.BROADCAST_IP = my_ip(BROADCAST_IP)
module.exports.MY_IP = my_ip(MY_IP)
/**
* a - биты ip, c - биты маски сети.
* Возвращает биты широковещвтельного адреса.
*/
function my_bit_broadcast(a,c){
    var b = new Array(32)
    var d = new Array(32)
    for(var i=0;i<a.length;i++){
	b[i]=c[i]==1?'0':'1'
	d[i] = b[i] | a[i]
    }
    return d.join('')
}

/**
* Строку битов преобразует в строку ip
*/
function my_bit_to_ip(p){
  var x=''
  var n=0
  for(var i=p.length,j=0;i-->0;j++){
    n+=p[i]>0?2**j:0
    if(j>7){
      if(x==''){
        x=x+n
      } else {
        x=n+'.'+x
      }
      j=0
      n=0
    }
//    console.log(i+' '+j+' '+n+' '+x)
  }
  x=n+'.'+x
  return x
}

function my_ip(p){
  return p
}