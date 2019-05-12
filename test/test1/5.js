//var ip = require('./ip.js')
console.log('1')

var z = function(callback){
  console.log('2')
  callback();
  console.log('3')
}

console.log('4')

z(function(){
  console.log('5')
});

console.log('6')

/*
x = nt.MY_IP
 console.log('x2')
console.log(x)
 console.log('x3')
*/
