var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var port = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/client/static'));
app.use(express.static(__dirname + '/bower_components/jquery/dist'));

app.set('views', __dirname +  '/client/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose')

var route_setter = require('./server/config/routes')

route_setter(app)

 app.listen(port, function(){
   console.log(`Listening on port ${port}`)
 })
