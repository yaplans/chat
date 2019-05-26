var express = require('express');
var app = express();


app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
//  res.send(index.html);
});


app.get('/index.html', function (req, res) {
//  res.end();
  res.send('index');

});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
