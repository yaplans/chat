var cluster = require('cluster');
var os = require('os');
var pid = process.pid;

if (cluster.isMaster) {
	var cpus = os.cpus().length;
	console.log(`CPUs = ${cpus}`);   	
	console.log('Master ' + `Pid = ${pid}`);   	
	cluster.fork();
}


if (cluster.isWorker) {
	var worker = require('./worker');
	console.log('Worker ' + `Pid = ${pid}`);   	
}

