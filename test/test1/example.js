var ip = require('./ip.js')

var timerId = setInterval(function(){
  console.log(ip)
  console.log(isEmpty(ip))
  if(!isEmpty(ip)){
    clearInterval(timerId)
    console.log('Ok!')
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
