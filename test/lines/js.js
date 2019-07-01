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

var m_score = 0;


/**
 * Инициализируем карту
 * */
var balls = [];
for(var i=0;i<9;i++){
	balls[i] = ['','','','','','','','',''];
}
//~ console.log(balls);


//~ Состояние
//~ mark - пометили шар
//~ wait - ждем отметки шара
//~ hod - нужно выкинуть шары

//~ var state = "hod";
//~ log_state(state,'log_state');


window.onload = function(){
	
	displayMap();	    		
	//~ отловим клики
	canvas.addEventListener("mousedown", getPosition, false);
	
	
	m_log("displayMap start");	
  window.setInterval(
		function(){
	    var d = new Date();
	    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
	    document.getElementById("m_score").innerHTML = m_score;
		}
  , 1000);
  
  
m_hod();
  
  
}

/**
 * Рисуем круг ывета color по координатам x, y
 * */
function m_ball(color, x, y){

	var ctx = canvas.getContext('2d');
	var radiusClock=cell_width/3;

//~ перевод из номера в размер

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
		console.log(balls[x][y]);
		balls[x][y]=color;
	}
}


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

//~ console.log("x:" + x + " y:" + y);

//~ округлим в большую сторону
	var xx = Math.ceil(x/cell_width)-1;
	var yy = Math.ceil(y/cell_height)-1;
	//~ alert("xx:" + xx + " yy:" + yy);
  //~ alert("x:" + x + " y:" + y);
  //~ console.log("xx:" + xx + " yy:" + yy);

	var cc = color[m_rundom()];
  //~ console.log(cc);

	    /**
	     * Пошла игра
	     * */
	    if(state == "wait"){
				//~ console.log('state == "wait"');
				if(balls[xx][yy]==''){
					//~ console.log('ничего не делаем');
					// ничего не делаем
				}else{
					//~ console.log('else balls');
					state = "mark";
					log_state(state,'log_state');
					mx = xx;
					my = yy;
					log_state('mx:'+mx+'my:'+my,'mark_state');
				}
			}else{
				//~ console.log('else state == "wait"');
				if(state == "mark"){
					//~ console.log('else state == "mark"');
					if(balls[xx][yy]==''){
						//~ console.log('else state balls');
						cc = balls[mx][my];
						m_ball(cc, xx, yy);
						//~ balls[xx][yy]=cc;
						
						log_state('cc:'+cc+' mx:'+mx+' my:'+my,'mark_state');
						
						m_ball(map_color, mx, my);
						
						// проверим
						if(!is_line()){
							m_hod();
						}
						
						
						//~ console.log(balls);  
					}else{
					//~ if(balls[xx][yy]==''){
						mx = xx;
						my = yy;
						log_state('mx:'+mx+'my:'+my,'mark_state');
					}
					// ничего не делаем
				}
			}
	
  
		//~ m_ball(cc, xx, yy);
		//~ balls[xx][yy]=cc;
//~ console.log(balls);  
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
		 //~ var n = 0;
			for(var j=0;j<9;j++){
				for(var i=0;i<9;i++){
					if(balls[j][i] == ''){
						//~ emptyCells[n++] = {x:j, y:i};
						emptyCells.push({x:j, y:i});
					}
				}
			}
	//~ console.log(emptyCells);
	//~ console.log(n);

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
		
		//~ is_line();
		
	}
	state = 'wait';
	//~ console.log(emptyCells);  
	//~ console.log(n);
	//~ console.log(emptyCells.length);  
	
	//~ state = "wait";
	log_state(state,'log_state');
	
	
}



function log_state(st,el){
	document.getElementById(el).innerHTML = st;
}

/*
function is_line(){
	//~ console.log('++++ is_line ++++'+m_is_line++);
	//~ return;
	
	// Ищем горизонтальные цепочки
	var burn = [];
	var burned=false;
	
	for(var j=0;j<9;j++){// y
		for(var i=0;i<5;i++){// x если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[i][j]!=''){// если пуст - пропустим
				while(balls[i][j]==balls[i+1][j]){ // если соседи одного цвета
					burn.push({x:i,y:j}); // добавим в массив координату
					if(++i>7){ // инкремент
						break; // выходим, если дошли до последнего столбца
					}
				}
				if(burn.length>3){// если 4 и больше
					burn.push({x:i,y:j});//допишем последнюю пару координат
					for(var n=0;n<burn.length;n++){
						m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
					}
					burned=true;// установим флаг
				}
				while(burn.length>0){// чистим
					burn.pop();
				}
			}
			
		}
	}
	return burned;// возвратим флаг
}
*/


function is_line(){
	//~ console.log('++++ is_line ++++'+m_is_line++);
	//~ return;
	var burn_all = [];
	var burned=false;
	
	// Ищем горизонтальные цепочки
	var burn = [];

	for(var j=0;j<9;j++){// y
		for(var i=0;i<5;i++){// x если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[i][j]!=''){// если пуст - пропустим
				while(balls[i][j]==balls[i+1][j]){ // если соседи одного цвета
					burn.push({x:i,y:j}); // добавим в массив координату
					if(++i>7){ // инкремент
						break; // выходим, если дошли до последнего столбца
					}
				}
				if(burn.length>3){// если 4 и больше
					burn.push({x:i,y:j});//допишем последнюю пару координат
					for(var n=0;n<burn.length;n++){
						//~ m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
						burn_all.push({x:burn[n].x, y:burn[n].y});// сохраним для будущего удаления
					}
					burned=true;// установим флаг
				}
				while(burn.length>0){// чистим
					burn.pop();
				}
			}
			
		}
	}
	
// Ищем вертикальные цепочки

	for(var j=0;j<9;j++){// x
		for(var i=0;i<5;i++){// y если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[j][i]!=''){// если пуст - пропустим
				while(balls[j][i]==balls[j][i+1]){ // если соседи одного цвета
					burn.push({x:j,y:i}); // добавим в массив координату
					if(++i>7){ // инкремент
						break; // выходим, если дошли до последнего столбца
					}
				}
				if(burn.length>3){// если 4 и больше
					burn.push({x:j,y:i});//допишем последнюю пару координат
					for(var n=0;n<burn.length;n++){
						//~ m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
						burn_all.push({x:burn[n].x, y:burn[n].y});// сохраним для будущего удаления
					}
					burned=true;// установим флаг
				}
				while(burn.length>0){// чистим
					burn.pop();
				}
			}
			
		}
	}
	
	
// Ищем диагональные цепочки слева направо вниз

	for(var j=0;j<5;j++){// x
		for(var i=0;i<5;i++){// y если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[j][i]!=''){// если пуст - пропустим
				console.log("слева направо вниз");
				//~ console.log("j="+j+" i="+i);
				while(balls[j][i]==balls[j+1][i+1]){ // если соседи одного цвета
					burn.push({x:j,y:i}); // добавим в массив координату
					//~ console.log("j="+j+" i="+i);
					// if(++i>7 || ++j>7){ // инкремент
					// ++j может и не сработать!!!
					i++;j++;
					if(i>7 || j>7){ // инкремент
						break; // выходим, если дошли до последнего столбца
					}
				}
				//~ console.log("burn1");
				//~ console.log(burn);
				if(burn.length>3){// если 4 и больше
					burn.push({x:j,y:i});//допишем последнюю пару координат
				//~ console.log("burn2");
				//~ console.log(burn);
					for(var n=0;n<burn.length;n++){
						//~ m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
						burn_all.push({x:burn[n].x, y:burn[n].y});// сохраним для будущего удаления
				//~ console.log("burn3");
				//~ console.log(burn);
						
						//~ m_circle("#000000", burn[n].x, burn[n].y);
						
					}
					burned=true;// установим флаг
				}
				while(burn.length>0){// чистим
					burn.pop();
				}
			}
			
		}
	}


// Ищем диагональные цепочки справа налево вниз

	for(var j=8;j>3;j--){// x
		for(var i=0;i<5;i++){// y если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[j][i]!=''){// если пуст - пропустим
				console.log("справа налево вниз");
				//~ console.log("j="+j+" i="+i);
				while(balls[j][i]==balls[j-1][i+1]){ // если соседи одного цвета
					burn.push({x:j,y:i}); // добавим в массив координату
					//~ console.log("j="+j+" i="+i);
					// if(++i>7 || ++j>7){ // инкремент
					// ++j может и не сработать!!!
					i++;j--;
					if(i>7 || j<1){ // инкремент
						break; // выходим, если дошли до последнего столбца
					}
				}
				//~ console.log("burn1");
				//~ console.log(burn);
				if(burn.length>3){// если 4 и больше
					burn.push({x:j,y:i});//допишем последнюю пару координат
				//~ console.log("burn2");
				//~ console.log(burn);
					for(var n=0;n<burn.length;n++){
						//~ m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
						burn_all.push({x:burn[n].x, y:burn[n].y});// сохраним для будущего удаления
				//~ console.log("burn3");
				//~ console.log(burn);
						
						//~ m_circle("#000000", burn[n].x, burn[n].y);
						
					}
					burned=true;// установим флаг
				}
				while(burn.length>0){// чистим
					burn.pop();
				}
			}
			
		}
	}


	
	// сжигаем цепочку
	for(var n=0;n<burn_all.length;n++){
		m_ball(map_color, burn_all[n].x, burn_all[n].y);
		//~ m_ball("#ffffff", burn_all[n].x, burn_all[n].y);
		m_score++;
	}

	return burned;// возвратим флаг
}





function test_line(){
var c='';
	for(var j=0;j<9;j++){// x
		for(var i=0;i<9;i++){// y если цепочка не началась до середины, то дальше и ходить не нужно...

			c = balls[j][i];
			if(c==''){
				c=map_color;
			}
			m_ball(c, j, i);
			
			
		}
	}

}
function test_line1(){
	alert("test_line");
var burn=[];
	for(var j=0;j<9;j++){// x
		for(var i=0;i<9;i++){// y если цепочка не началась до середины, то дальше и ходить не нужно...

			if(balls[j][i]=='#ffffff'){
				//~ m_ball(map_color, burn[n].x, burn[n].y);// сжигаем цепочку
				m_ball(map_color, j, i);// сжигаем цепочку
			}
			
		}
	}
	
}



function m_circle(color, x, y){

	var ctx = canvas.getContext('2d');
	var radiusClock=cell_width/3;

//~ перевод из номера в размер

	var xx = cell_width/2 + x*cell_width;
	var yy = cell_height/2 + y*cell_height;
	
	//~ m_log("m_ball start");
    ctx.beginPath();
		 ctx.fillStyle = color;
		ctx.lineWidth = 4;
		 ctx.arc(xx, yy, radiusClock, 0, 2*Math.PI);
		 ctx.moveTo(xx, yy);
		 ctx.stroke();
		 //~ ctx.fill();
    ctx.closePath();
	//~ m_log("m_ball end!");
	
	//~ if(color==map_color){
		//~ balls[x][y]='';
	//~ }else{
		//~ console.log(balls[x][y]);
		//~ balls[x][y]=color;
	//~ }
}


