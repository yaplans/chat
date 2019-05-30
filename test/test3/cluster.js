var cluster = require('cluster');
var os = require('os');
var pid = process.pid;

if (cluster.isMaster) {
	var cpus = os.cpus().length;
	console.log(`CPUs = ${cpus}`);   	
	console.log('Master ' + `Pid = ${pid}`);
	for(var i=0; i<cpus-1;i++){
		const worker = cluster.fork();
		worker.on('exit', function (){
			console.log('=====================');
			console.log('worker died ' + `Pid = ${worker.process.pid}`);
			//const worker = 
			cluster.fork();
		});
		// !!! Не работает
		//worker.send('Hello from ' + `Pid = ${worker.process.pid}`);
		worker.send('Hello from ' + worker.process.pid);
	}
}


if (cluster.isWorker) {
	//var worker = 
	require('./worker');
	console.log('Worker ' + `Pid = ${pid}`);
//	worker.on('message', function (msg){
	process.on('message', function (msg){
		console.log('message ' + `: ${msg}`);
	});
}

