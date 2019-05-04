PORT = 4554

1. При запуске стартует файл 
js.js

здесь основной код

- запускаем cl.js
в течение 7 сек слушаем порт PORT
- если получаем сообщение в нем должен быть IP сервера
=отключаем cl.js
=и подключаемся к серверу
- если никто не подключился запускаем sv.js
= рассылает сообщения на PORT с информацией об IP



#############################################################

"новый" получает id и начинает искать сервер в сети, если нашел
проводит выборы и 
 - если он "не главный" - затыкается и tcp "игра"
 - если "главный" - слушает эфир 

PS
сервер сидит тихо и слушает PORT (чтобы не "гадить")
чтобы определить "главного" задай ему id = время в секундах

#############################################################

Подключаемся к серверу tcp для игры
server_ip=""
start_client_tcp(server_ip)
{
если server_ip недоступен запускаем
find_server(my_ip)
т.о. продолжаем основной (бесконечный) цикл
если сервер стартанул - играем
}

find_server(my_ip)
{
start_client_udp(my_ip)
start_server_udp()
}

start_client_udp(my_ip)
{
отправим широковещательный пакет на PORT
my_ip, my_id
}

start_server_udp()
{
слушаем на PORT
получаем адрес, порт и id клиента
если hi_id < my_id
  stop_client_udp()
  //stop_server_udp()
  server_ip=hi_ip
  start_client_tcp()
если hi_id > my_id
  server_ip=my_ip
  //stop_server_udp()
  //stop_client_udp()
setTimeinit(start_server_tcp,3000)
}

start_client_tcp(){
stop_server_tcp()

}

start_server_tcp(){
stop_client_tcp()

}

