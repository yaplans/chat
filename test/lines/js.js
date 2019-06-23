// подсмотрел здесь https://habr.com/ru/post/275353/
// почитай комменты как сделать лучше...

function m_log(str){
	if(false){
		console.log(str);
	}
}

//~ глобальные
var canvas = document.getElementById('myCanvas');
var cell_width = canvas.width/9;
var cell_height = canvas.height/9;

var color = [
"red",
"green",
"cyan",
"yellow",
"blue"
];

//~ Состояние
//~ mark - пометили шар
//~ wait - ждем отметки шара
var state = "wait";



//~ var ball = [];
var balls = [];

//~ for(var j=0;j<9;j++){
	//~ for(var i=0;i<9;i++){
		//~ balls[i] = '';
	//~ }
	//~ balls[j] = ball;
//~ }

for(var i=0;i<9;i++){
	balls[i] = ['','','','','','','','',''];
}


console.log(balls);

window.onload = function(){
	
	displayMap();	    		
	//~ отловим клики
	canvas.addEventListener("mousedown", getPosition, false);
	
	
	m_log("displayMap start");	
  window.setInterval(
		function(){
	    var d = new Date();
	    //~ document.getElementById("clock").innerHTML = d.toLocaleTimeString();
	    m_log("displayCanvas start");	
	    //~ displayCanvas();
	    m_log("displayCanvas end!");	
		}
  , 1000);
}


function m_ball(color, x, y){

	var ctx = canvas.getContext('2d');
	var radiusClock=cell_width/3;

//~ перевод из номера в размер
	//~ var xx = cell_width/2 + (x-1)*cell_width;
	//~ var yy = cell_height/2 + (y-1)*cell_height;

	var xx = cell_width/2 + (x)*cell_width;
	var yy = cell_height/2 + (y)*cell_height;
	
	m_log("m_ball start");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xx, yy, radiusClock, 0, 2*Math.PI);
    ctx.moveTo(xx, yy);
    //~ ctx.stroke();
    ctx.fill();
    ctx.closePath();
	m_log("m_ball end!");
}



function displayCanvas(){
	
    //~ var canvasHTML = document.getElementById('myCanvas');
    //~ var contextHTML = canvasHTML.getContext('2d');

		//~ m_ball(contextHTML, "red", 1, 2);
		m_ball("red", 1, 2);


return;

}



function displayMap(){
	
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    
    //~ закрасим прямоугольник
    contextHTML.fillStyle = "#7F7F7F";
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);


    
    //~ рисуем рамку прямоугольника
    contextHTML.fillStyle = "#000аа0";
    contextHTML.lineWidth = 4;
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);



	//~ var cell_width = canvasHTML.width/9;
	//~ var cell_height = canvasHTML.height/9;

//~ вертикальные полоски
	for(var m = 1; m < 9; m++){
		contextHTML.beginPath();
		contextHTML.strokeStyle = 'black';
		contextHTML.lineWidth = 1;
		contextHTML.moveTo(m*cell_width, 0);
		contextHTML.lineTo(m*cell_width, canvasHTML.height);
		contextHTML.stroke();		
		contextHTML.closePath();
	} 
//~ горизонтальные полоски	
	for(var m = 1; m < 9; m++){
		contextHTML.beginPath();
		contextHTML.strokeStyle = 'black';
		contextHTML.lineWidth = 1;
		contextHTML.moveTo(0, m*cell_height);
		contextHTML.lineTo(canvasHTML.width, m*cell_height);
		contextHTML.stroke();		
		contextHTML.closePath();
	} 


return;
}


//~ canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  //~ var canvas = document.getElementById("myCanvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

//~ округлим в большую сторону
	var xx = Math.ceil(x/cell_width)-1;
	var yy = Math.ceil(y/cell_height)-1;
	//~ alert("xx:" + xx + " yy:" + yy);
  //~ alert("x:" + x + " y:" + y);
  console.log("xx:" + xx + " yy:" + yy);
  
  //~ return {xx, yy};

	var cc = color[m_rundom()];
  //~ console.log(m_rundom());
  //~ console.log(cc);
  
		m_ball(cc, xx, yy);
		balls[xx][yy]=cc;
console.log(balls);  
} 

function m_rundom() {
	// округлим вниз
	return Math.floor(getRandomArbitrary(0, color.length) );
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



function m_hod() {
	// округлим вниз

	for(var i=0;i<3;i++){
		var cc = color[m_rundom()];
		//~ доработать
		var z = Math.floor(getRandomArbitrary(0, 100) );
		var n=0;
		var m=0;
		var nn=0;
		var mm=0;

		for(var j=0;j<z;j++){
			if(balls[n][m]==''){
				//~ запомним индексы
				nn=n;
				mm=m;
				//~ следующая итерация
				m++;
				if(m==9){
					n++;
					m=0;
				}
				if(n==9){
					n=0;
				}
			}
		}


		m_ball(cc, xx, yy);
		balls[xx][yy]=cc;
	}
	
	
}



