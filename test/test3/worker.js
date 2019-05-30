var http = require('http');
var pid = process.pid;
// autocannon работает только если установить глобально

http.createServer((req, res) => {
	//for(var i =0; i<1e7;i++){	}
 res.end('Hi!\n');
}).listen(8080, () =>{
  console.log('Server Started! '+`Pid = ${pid}`);
});


