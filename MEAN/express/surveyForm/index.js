var express = require('express'),
    bodyParse = require('body-parser'),
    session = require('express-session');

var app = express(),
    port = 8000;


app.use(express.static(__dirname + "/static"));
app.use(bodyParse.urlencoded({extended:true}));
app.use(session({secret:'Blarghy'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', function(req,res){
  res.render('index')
})
app.get('/result', function(req,res){
  if(req.session.name){
    res.render('results', {session: req.session})
  }
  else{
    res.redirect('/')
  }
})


app.post('/result', function(req,res){
  //I had originally decided to play with session, though not necessary, because
  //I wanted to see if there was a different process for printing out session
  //variables. UPDATE: There is not. still needs to be passed in render
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;
  res.render('results', {session: req.session})
})



app.listen(port, function(){
  console.log(`Listening on ${port}`)
})
