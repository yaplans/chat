каталог проекта
$ mkdir projects
$ cd projects
создадим package.json
$ npm init
установим зависимости
$ npm install
если нужен express делаем так ( --save добавит в dependencies в package.json)
$ npm install express --save
! пока создано только окружение

папка server содержит все связанное с сервером
$ mkdir server
echo "" > server/server.js
добавим в package.json в scripts (!!! раздели запятыми!!!)
"start": "node server/server.js"
чтобы запускать проект следующим образом
$ npm run start

папка public содержит все видимое клиенту (так, по крайней мере, должно быть)
$ mkdir public
добавим туда index.html, script.js (пока не знаю зачем, но может
какой код понадобится на "чистом"!?)
в сервере не забудь строки

const publicPath = path.join(__dirname + "/../public");
app.use(express.static(publicPath));

чтобы script.js прикрепился..., а то...

теперь все изменения в server.js должны сопровождаться 
выключением-включением сервера, т.е. npm run start
чтобы не париться ставим
$ npm install nodemon -D
флаг -D добавит nodemon в devDependencies, т.е. только пока разрабатываем
добавим в package.json в scripts (!!! раздели запятыми!!!)
"dev": "nodemon server/server.js"
теперь для разработки пользуемся
$ npm run dev

если нужен socket.io
$ npm install socket.io --save
и не забудь в index.html добавить
<script src="socket.io/socket.io.js"></script>
...
const socket = io()
работать будет т.к. в node_modules уже установлен (? как он туда попадает)
проверить можно так
http://localhost:3000/socket.io/socket.io.js
должна вернуться библиотека socket.io


1. vue приложение
-----------------
технологии: webpack
- должно быть:
node, npm, 
vue-cli
??? 
здесь
https://ru.vuejs.org/v2/guide/installation.html
сказано так
$ npm install vue
здесь
https://cli.vuejs.org/guide/installation.html
$ npm install -g @vue/cli
===
$ mkdir projects
$ cd projects
$ vue init webpack-simple my-test
                          |- название создаваемого каталога который наполнится нужным
           |- шаблон который будет использоватся при разработке
      |- команда инициировать проект
$ cd my-test
установим зависимости
$ npm install
запустим проект
$ npm run dev
построим проект
$ npm run build
