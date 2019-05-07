var MY_IP
var BROADCAST_IP

var network = require('network')
var Addres4 = require('ip-address').Address4

network.get_active_interface(function(err, obj) {
  console.log(obj)
  MY_IP = obj.ip_address
  console.log('MY_IP = '+MY_IP)
  var mask_net = obj.netmask
  var address4 = new Addres4(mask_net)
//  console.log(address4.toHex())
  var x=address4.mask()
  console.log('hex netmask = '+x)

  address4 = new Addres4(MY_IP)
  var y=address4.mask()

//  console.log(address4.bigInteger())
//  console.log(address4.toHex())
//  console.log(address4.mask())
//  console.log(address4.bigInteger())
  console.log('  hex my_ip = '+y)
BROADCAST_IP=my_hex_invert(y,x)
//  console.log(my_hex_invert(y,x))
    console.log('  hex broad = '+BROADCAST_IP)
//    console.log(Addres4.fromHex(BROADCAST_IP))
//    console.log(Addres4.fromHex(x))

})

//console.log(~(10))

//console.log('ok')

function my_hex_invert(a,c){
    var b = new Array(32)
    var d = new Array(32)
//[a.length]dasdassa
    for(var i=0;i<a.length;i++){
	b[i]=c[i]==1?'0':'1'

//	console.log(a[i]+' '+b[i]+' '+ (b[i] | a[i]))

	d[i] = b[i] | a[i]
/*	console.log(i)
	console.log('====')

	console.log(a)
	console.log(b)
	console.log(a[i])
	console.log(b[i])
*/    
//	console.log(a[i])
    }

    return d.join('')
}

/*
console.log('1'|'1')
console.log('1'|'0')
console.log('0'|'1')
console.log('0'|'0')
console.log('1'&'1')
console.log('1'&'0')
console.log('0'&'1')
console.log('0'&'0')
*/