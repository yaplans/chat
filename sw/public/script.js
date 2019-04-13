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

	//~ var m_check = document.getElementById("customRadio");
	//~ var m_check2 = document.getElementById("customRadio2");
	//~ var m_ret = "";	
	//~ if(m_check.checked){
		//~ m_ret = m_check.value;
	//~ }
	//~ if(m_check2.checked){
		//~ m_ret =  m_check2.value;
	//~ }
	//~ return alert(m_ret);
	
	viewport();
	return alert(vm.pl_with);
}

/**
 * Прога пошла
 */
//~ Подключимся к серверу
const socket = io();
m_log(socket);

const vm = new Vue({
	el: "#app",
	data: {
		my_id: 0,
		players: [],
		my_name: "",
		bool_name: true,

		
		//~ m_comp: "comp",
		//~ m_man: "man",
		x: "",
		y: "",
		pl_with: "",
	},
	methods:{
		xx: function() {
			this.x = viewport().width;
			return;
		},
		yy: function() {
			this.y = viewport().height;
			return;
		},
		play_with: function(x) {
			alert(x.target.innerHTML);
			m_log(x.target.title);
		}
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
//~ Отправим свое имя
socket.emit("m_login",vm.my_name);




//~ Послушаем, кто в сети?
socket.on("user_name", function(mess){
	m_log("socket.on user_name === ");
	m_log(mess);
	//~ vm.players.push(mess);
	vm.players.length=0;//???
	for(var i=0; i<mess.length; i++){
		vm.players.push(mess[i]);
	}
});

//~ socket.on("message", function(mess){
	//~ m_log("socket.on message === "+ mess);
//~ });

//~ socket.on("user_id", function(mess){
	//~ m_log("socket.on user_id === "+ mess);
	//~ if(vm.my_id===0){
		//~ vm.my_id=mess;
	//~ } else {
		//~ vm.players.push(mess);
	//~ }
//~ });


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




function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  var ret = { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
  //~ return alert(ret.width + ' ' + ret.height);
  return ret;
}
