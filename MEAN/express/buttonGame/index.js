var express = require('express'),
    bodyParse = require('body-parser'),
    session = require('express-session');

var app = express(),
    port = 8000,
    count;

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/bower_components'));

app.use(bodyParse.urlencoded({extended:true}));
app.use(session({secret:'Blarghy'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')


app.get('/', function(req,res){
  res.render('index')
})

var server = app.listen(port, function(){
  console.log(`Listening on ${port}`)
})
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.emit('inc_count', count)

  socket.on('reset_button', function(){
    count = 0;
    io.emit('reset_count', socket.id)
  });
  socket.on('epic_button',function(){
    if(!count){
      count = 0;
    }
    count += 1;
    io.emit('inc_count',count)
  })
});
