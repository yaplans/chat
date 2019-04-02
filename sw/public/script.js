// работает!
//~ alert("sdf;kjsdhfsd;lkf");
/**
 * логируем если m_debug определен
 * */
var m_debug=true;
function m_log(x){
	if (typeof m_debug !== "undefined"){
		console.log(x);
	}
}


const socket = io();
m_log(socket);


const vm = new Vue({
	el: "#app",
	data: {
		my_id: 0,
		players: [],
		my_name: "",
		bool_name: true,
	}
});

// Если уже представились
var v_my_name = localStorage.getItem('my_name');
m_log(v_my_name);

if(v_my_name!==null){
	vm.my_name = v_my_name;	
	vm.bool_name = false;	
}


m_log(vm.my_id);

socket.on("message", function(mess){
	
	m_log(mess);
	});

socket.on("user_id", function(mess){
	if(vm.my_id===0){
		vm.my_id=mess;
	} else {
		vm.players.push(mess);
	}
	m_log(mess);
});




function b_name(){
	//~ m_log("b_name");
	var l_name = document.getElementById("textName").value;
	//~ m_log(l_name);
	localStorage.setItem('my_name', l_name);
	vm.my_name = l_name;		
	vm.bool_name = false;
}



function m_play(){
	m_log("m_play");
	//~ alert("Js!")
	var id = l_get_id();
}
		
/**
 * Выдаст id
 * */
function l_get_id(){
	var ss = Date.now()/1000 | 0;
	//~ m_log(typeof(ss));
	//~ m_log("ss=" + ss);
	//~ ?? чисоа не совпадают ??
	var t = ss/10008;
	//~ m_log(t);
	var t = t | 0;
	//~ m_log(t);
	t = (ss /10008 - t) * 10000 | 0;
	m_log(t);
	return t;
}


