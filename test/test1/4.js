var ip = require('./ip.js')



  var timerId = setInterval(function(){
	  if(!isEmpty(ip)){
	    clearInterval(timerId)
//	    mmm(obj)

 console.log('2 from 4 = '+ip)
 console.log('2 from 4 = '+ip.MY_IP)
 console.log('2 from 4 = '+ip.BROADCAST_IP)
	  }
	},10)



	

/*
x = nt.MY_IP
 console.log('x2')
console.log(x)
 console.log('x3')
*/


/**
* Пуст ли объект
*/
function isEmpty(arg) {
  for (var item in arg) {
    return false;
  }
  return true;
}


