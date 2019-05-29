var http = require('http');
var pid = process.pid;
// autocannon работает только если установить глобально

http.createServer((req, res) => {
 res.end('Hi!\n');
}).listen(8080, () =>{
  console.log('Server Started! '+`Pid = ${pid}`);
});


