var ip = require('./ip.js')


//function applyForVisa(docs, resolve){
function applyForVisa(ip, resolve){
  console.log('Обработка ...')
  setTimeout(function() {
    let visa = {}
    resolve(visa)
  },2000)
}

applyForVisa({}, function(visa){
  console.info('Виза получена!')
  console.log(visa)
})

/*
var ip = require('./6.js')
console.log('1')
console.log(ip)
*/

/*
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
console.log(module)
*/
/*
x = nt.MY_IP
 console.log('x2')
console.log(x)
 console.log('x3')
*/
