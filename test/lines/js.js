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

var map_color = "#7F7F7F";
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

//~ Состояние
//~ mark - пометили шар
//~ wait - ждем отметки шара
//~ hod - нужно выкинуть шары
var state = "hod";
log_state(state,'log_state');

/**
 * Инициализируем карту
 * */
var balls = [];
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
	    //~ m_log("displayCanvas start");	
	    //~ displayCanvas();
	    //~ m_log("displayCanvas end!");	
	    /**
	     * Пошла игра
	     * */
	    if(state == "hod"){
				m_hod();
				state = "wait";
				log_state(state,'log_state');
			}
	    
		}
  , 1000);
}


function m_ball(color, x, y){

	var ctx = canvas.getContext('2d');
	var radiusClock=cell_width/3;

//~ перевод из номера в размер
	//~ var xx = cell_width/2 + (x-1)*cell_width;
	//~ var yy = cell_height/2 + (y-1)*cell_height;

	var xx = cell_width/2 + x*cell_width;
	var yy = cell_height/2 + y*cell_height;
	
	m_log("m_ball start");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xx, yy, radiusClock, 0, 2*Math.PI);
    ctx.moveTo(xx, yy);
    //~ ctx.stroke();
    ctx.fill();
    ctx.closePath();
	m_log("m_ball end!");
	
	if(color==map_color){
		balls[x][y]='';
	}else{
		balls[x][y]=color;
	}
}



//~ function displayCanvas(){
	
    // var canvasHTML = document.getElementById('myCanvas');
    // var contextHTML = canvasHTML.getContext('2d');

		// m_ball(contextHTML, "red", 1, 2);
		//~ m_ball("red", 1, 2);


//~ return;

//~ }



function displayMap(){
	
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    
    //~ закрасим прямоугольник
    contextHTML.fillStyle = map_color;
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
	//~ console.log(event);
	//~ console.log('clientX = '+event.clientX);
	//~ console.log('clientY = '+event.clientY);
	//~ console.log('layerX = '+event.layerX);
	//~ console.log('layerY = '+event.layerY);
	//~ console.log('pageX = '+event.pageX);
	//~ console.log('pageY = '+event.pageY);
	//~ console.log('screenX = '+event.screenX);
	//~ console.log('screenY = '+event.screenY);
	//~ console.log('x = '+event.x);
	//~ console.log('y = '+event.y);
	

	//~ return;
	
  //~ var x = event.x;
  //~ var y = event.y;
  var x = event.pageX;
  var y = event.pageY;
//~ console.log("x:" + x + " y:" + y);
  //~ var canvas = document.getElementById("myCanvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

//~ console.log("offsetLeft:" + canvas.offsetLeft + " offsetTop:" + canvas.offsetTop);

console.log("x:" + x + " y:" + y);

//~ округлим в большую сторону
	var xx = Math.ceil(x/cell_width)-1;
	var yy = Math.ceil(y/cell_height)-1;
	//~ alert("xx:" + xx + " yy:" + yy);
  //~ alert("x:" + x + " y:" + y);
  console.log("xx:" + xx + " yy:" + yy);

	var cc = color[m_rundom()];
  //~ console.log(cc);

	    /**
	     * Пошла игра
	     * */
	    if(state == "wait"){
				console.log('state == "wait"');
				if(balls[xx][yy]==''){
					console.log('ничего не делаем');
					// ничего не делаем
				}else{
					console.log('else balls');
					state = "mark";
					log_state(state,'log_state');
					mx = xx;
					my = yy;
					log_state('mx:'+mx+'my:'+my,'mark_state');
				}
			}else{
				console.log('else state == "wait"');
				if(state == "mark"){
					console.log('else state == "mark"');
					if(balls[xx][yy]==''){
						console.log('else state balls');
						cc = balls[mx][my];
						m_ball(cc, xx, yy);
						//~ balls[xx][yy]=cc;
						
						log_state('cc:'+cc+' mx:'+mx+' my:'+my,'mark_state');
						
						m_ball(map_color, mx, my);
						//~ balls[mx][my]='';
						
						state = "hod";
						log_state(state,'log_state');
						//~ console.log(balls);  
					}
					// ничего не делаем
				}
			}

  
		//~ m_ball(cc, xx, yy);
		//~ balls[xx][yy]=cc;
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
/**
		 * - создадим одномерный массив незаполненых ячеек
		 * - рандом N
*/
		 var emptyCells = [];
		 var n = 0;
			for(var j=0;j<9;j++){
				for(var i=0;i<9;i++){
					if(balls[j][i] == ''){
						emptyCells[n++] = {x:j, y:i};
					}
				}
			}
	console.log(emptyCells);
	console.log(n);

	for(var i=0;i<3;i++){
		var cc = color[m_rundom()];
		
		/**
		 * Теперь координаты
		 * */
		var z = Math.floor(getRandomArbitrary(0, emptyCells.length));

		//~ m_ball(cc, emptyCells[z].x, emptyCells[z].y);
		m_ball(cc, emptyCells[z].x, emptyCells[z].y);
		//~ balls[emptyCells[z].x][emptyCells[z].y]=cc;
		//~ var removedItem = fruits.splice(pos, 1); // так можно удалить элемент
		emptyCells.splice(z, 1); 
		//~ console.log(i);  
		//~ console.log(emptyCells);  
	}
	state = 'wait';
	console.log(emptyCells);  
	console.log(n);
	console.log(emptyCells.length);  
}



//~ function m_hod() {

	//~ for(var i=0;i<3;i++){
		//~ var cc = color[m_rundom()];
		// доработать
		//~ var z = Math.floor(getRandomArbitrary(0, 100) );
		//~ var n=0;
		//~ var m=0;
		//~ var nn=0;
		//~ var mm=0;

		//~ for(var j=0;j<z;j++){
			//~ if(balls[n][m]==''){
				// запомним индексы
				//~ nn=n;
				//~ mm=m;
				// следующая итерация
				//~ m++;
				//~ if(m==9){
					//~ n++;
					//~ m=0;
				//~ }
				//~ if(n==9){
					//~ n=0;
				//~ }
			//~ }
		//~ }


		//~ m_ball(cc, nn, mm);
		//~ balls[nn][mm]=cc;
	//~ }
	
	
//~ }



function log_state(st,el){
//~ switch(el) {
  //~ case 'log_state':  // if (x === 'value1')
    //~ ...
    //~ [break]

  //~ case 'mark_state':  // if (x === 'value2')
    //~ ...
    //~ [break]

  //~ default:
    //~ ...
    //~ [break]
//~ }
	
	//~ document.getElementById("log_state").innerHTML = st;
	document.getElementById(el).innerHTML = st;
	

}
