/**
* Пуст ли объект
*/
function isEmpty(arg) {
  for (var item in arg) {
    return false;
  }
  return true;
}

var ip = require('./9.js')

var timerId = setInterval(function(){
  console.log(ip)
  console.log(isEmpty(ip))
  if(!isEmpty(ip)){
    clearInterval(timerId)
  }
},10)

