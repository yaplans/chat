alert('Начало!')
/**
 * логируем если m_debug определен
 * */
var m_debug=true;
function m_log(x){
	if (typeof m_debug !== "undefined"){
		console.log(x);
	}
}

//~ Подключимся к серверу
const socket = io();
m_log(socket);


var v = document.getElementById("m_move");
v.textContent="Есть!"
console.log(v);

socket.emit("my_mess",'Вот!');

socket.on("m_server_data", function(mess){
	//~ m_log("socket.on user_name === ");
	//~ m_log(mess);
	v.textContent="mess="+mess+"=";
});
