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

app.get('/',function(req,res){
  Animal.find({}, function(err, animals){
    if(err){
      console.log("couldn't retrieve from db!")
    } else {
      console.log("Heck yes, animals!")
      console.log(animals)
      res.render('index',{animals:animals})
    }
  });
})

app.get('/mongooses/new', function(req,res){
  res.render('mongooseform')
})

app.get('/mongooses/:id', function(req,res){
  Animal.find({_id:req.params.id}, function(err,animal){
    if(err){
      res.json({err:err})
    } else{
      console.log("Successful query for animal " + animal)
      res.render('showmongoose', {animal:animal})
    }
  });
})

app.get('/mongooses/edit/:id', function(req,res){
  Animal.find({_id:req.params.id}, function(err, animal){
    if(err){
      console.log("Couldn't delete!")
      res.json({err:err})
    } else {
      res.render('editmongoose', {animal:animal})
    }
  });
})

app.post('/mongooses', function(req,res){
  console.log(req.body)
  var animal = new Animal({animal: req.body.animal, in_pack: req.body.in_pack, pack_type: req.body.pack_type});

  animal.save(function(err){
    if(err){
      console.log("Could not write " + req.body + " to db.")
    }
    else{
      console.log("Db write successful!")
      res.redirect('/')
    }
  })
})

app.post('/mongooses/:id', function(req,res){
  Animal.update({_id:req.params.id}, {animal: req.body.animal, in_pack: req.body.in_pack, pack_type: req.body.pack_type}, function(err){
    if(err){
      console.log("Could not edit id ", req.params.id)
    } else{
      console.log("update for id " + req.params.id + " successful!")
      res.redirect('/')
    }
  });
})

app.post('/mongooses/destroy/:id', function(req,res){
  Animal.remove({_id:req.params.id}, function(err){
    if(err){
      console.log("Could not remove record " + req.params.id)
    } else {
      console.log("Record removed!")
      res.redirect('/')
    }
  })
})

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
