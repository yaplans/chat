// работает!
//~ alert("sdf;kjsdhfsd;lkf");

const socket = io();
console.log(socket);


function m_play(){
	console.log("m_play");
	//~ alert("Js!")
	var id = l_get_id();
}
		
/**
 * Выдаст id
 * */
function l_get_id(){
	var ss = Date.now()/1000 | 0;
	//~ console.log(typeof(ss));
	//~ console.log("ss=" + ss);
	//~ ?? чисоа не совпадают ??
	var t = ss/10008;
	//~ console.log(t);
	var t = t | 0;
	//~ console.log(t);
	t = (ss /10008 - t) * 10000 | 0;
	console.log(t);
	return t;
}
