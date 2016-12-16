var port = 8000,
    db = 'animals';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components/jquery/dist'));

app.set('views', __dirname +  '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/' + db)

var PackSchema = Schema({
  animal: String,
  in_pack: Number,
  pack_type: String
})

mongoose.model('Packs', PackSchema);

var Animal = mongoose.model('Packs');

var route_setter = require('./server/config/routes')

route_setter(app)

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
