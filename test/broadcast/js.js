console.log("Hi!")

var express = require("express")
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});


//~ var vm = new Vue({
	//~ el: "#app",
	//~ data: {
		//~ m_state: "Disconnected!"
	//~ }
//~ })


//~ 1. Ищем сервер 7 сек


//~ - нашли

//~ - не нашли
