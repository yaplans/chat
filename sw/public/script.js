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

function m_play(){
	m_log("m_play");
	//~ alert("Js!")
	//~ var id = l_get_id();

	var m_check = document.getElementById("customRadio");
	var m_check2 = document.getElementById("customRadio2");
	var m_ret = "";	
	if(m_check.checked){
		m_ret = m_check.value;
	}
	if(m_check2.checked){
		m_ret =  m_check2.value;
	}
	return alert(m_ret);
}

/**
 * Прога пошла
 */



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
m_log("v_my_name="+v_my_name);

if(v_my_name!==null){
	vm.my_name = v_my_name;
	vm.bool_name = false;
}

m_log(vm.my_id);

socket.emit("m_login",vm.my_name);





socket.on("user_name", function(mess){
	m_log("socket.on user_name === "+ mess);
});


socket.on("message", function(mess){
	m_log("socket.on message === "+ mess);
});

socket.on("user_id", function(mess){
	m_log("socket.on user_id === "+ mess);
	if(vm.my_id===0){
		vm.my_id=mess;
	} else {
		vm.players.push(mess);
	}
});


function b_name(){
	var l_name = document.getElementById("textName").value;
	localStorage.setItem('my_name', l_name);
	vm.my_name = l_name;		
	vm.bool_name = false;
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


