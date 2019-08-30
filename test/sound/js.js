// подсмотрел здесь https://habr.com/ru/post/275353/
// почитай комменты как сделать лучше...

function m_log(str){
	if(false){
		console.log(str);
	}
}


alert("Djn!");

return


//~ глобальные
var canvas = document.getElementById('myCanvas');
var cell_width = canvas.width/9;
var cell_height = canvas.height/9;

var map_color = "#7F7F7F";

// координаты предыдущего положения
// чтобы легче найти ошибку
var mx = 10;
var my = 10;

var color = [
"red",
"green",
"cyan",
"yellow",
"blue"
];

var m_score = 0;

