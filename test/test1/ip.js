var MY_IP =''
var BROADCAST_IP =''

var network = require('network')
var Addres4 = require('ip-address').Address4

var obj = {}
var z = network.get_active_interface(function(err, obj) {
  // главный ip (настроенный на шлюз)
  console.log(obj)
  return obj
//{BROADCAST_IP: BROADCAST_IP, MY_IP: MY_IP}
})

  console.log(obj)

//  MY_IP = obj.ip_address
  MY_IP = z.ip_address
//
  console.log(z)
  console.log(network)
  console.log(Addres4)
  console.log('1       MY_IP = '+MY_IP)
  // маска сети
//  var mask_net = obj.netmask
  var mask_net = z.netmask
  // строка битов из маски сети
  var x= new Addres4(mask_net).mask()
  // строка битов из ip адреса
  var y= new Addres4(MY_IP).mask()

//  console.log('  hex my_ip = '+y)
  x=my_bit_broadcast(y,x)
//    console.log('  hex broad = '+BROADCAST_IP)
  BROADCAST_IP=my_bit_to_ip(x)
    console.log('2 BROADCAST_IP = '+BROADCAST_IP)
//  return {BROADCAST_IP: BROADCAST_IP, MY_IP: MY_IP}
//})




//module.exports.BROADCAST_IP = my_b_ip
//(BROADCAST_IP)
//module.exports.MY_IP = my_ip
//(MY_IP)
//module.exports.z = z
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

/*
function my_ip(){
  return MY_IP
}

function my_b_ip(){
  return BROADCAST_IP
}
*/
module.exports.BROADCAST_IP = BROADCAST_IP
//(BROADCAST_IP)
module.exports.MY_IP = MY_IP

