var port = 8000,
    db = 'assignments';

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

var QuoteSchema = Schema({
  name: String,
  quote: String,
  created_at: { type: Date }
})

mongoose.model('Quotes', QuoteSchema);

var Quote = mongoose.model('Quotes');

app.get('/',function(req,res){
  res.render('index')
})

app.get('/quotes', function(req,res){
  Quote.find({},function(err,quote){
    if(err){
      res.json({err:err})
    } else{
      res.render('quotes',{quote:quote})
    }
  })
})

app.post('/quotes', function(req,res){
  var quote = new Quote({name: req.body.name, quote: req.body.quote, created_at: new Date()})

  quote.save(function(err){
    if(err){
      console.log("Could not write " + req.body + " to db.")
    }
    else{
      console.log("Db write successful!")
      res.redirect('/quotes')
    }
  })
})

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
