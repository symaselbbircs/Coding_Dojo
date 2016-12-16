var express = require('express');

var app = express(),
    port = 8000,
    users = [],
    all_sockets = [];

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/bower_components'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', function(req,res){
  res.render('index')
});

var server = app.listen(port, function(){
  console.log(`Listening on ${port}`)
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

  socket.on('add_new_user', function(name){
    users.push({id:socket.id,
                name:name})
    console.log(`${name} has entered the chat (${socket.id})!`)
    io.emit('add_user_to_chat', {id: socket.id,name:name})
  });

  socket.on('add_comment',function(message){
    for(user in users){
      if(users[user]['id'] == socket.id){
        io.emit('new_comment_added', {name:users[user]['name'], comment:message.comment})
        break;
      }
    }
  });

  socket.on('disconnect', function(){
    var name;
    for(user in users){
      if(users[user]['id'] == socket.id){
        name = users[user]['name']
        console.log(`${name} has left!`)
        users.splice(user,1)
        break;
      }
    }
    io.emit('user_disconnected', {id:socket.id,name:name})
  });
});
