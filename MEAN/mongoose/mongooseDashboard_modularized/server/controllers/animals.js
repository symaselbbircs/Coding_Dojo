var mongoose = require('mongoose'),
    Animal = mongoose.model('Packs');


module.exports = {
  create: function(req, res){
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
  },
  read_all: function(req,res){
    Animal.find({}, function(err, animals){
      if(err){
        console.log("couldn't retrieve from db!")
      } else {
        console.log("Heck yes, animals!")
        res.render('index',{animals:animals})
      }
    })
  },
  showForm: function(req,res){
    res.render('mongooseform')
  },
  read_by_id: function(req,res){
    Animal.find({_id:req.params.id}, function(err,animal){
      if(err){
        res.json({err:err})
      } else{
        res.render('showmongoose', {animal:animal})
      }
    })
  },
  showEdit: function(req,res){
    Animal.find({_id:req.params.id}, function(err, animal){
      if(err){
        console.log("Error with pulling edit form")
        res.json({err:err})
      } else {
        res.render('editmongoose', {animal:animal})
      }
    })
  },
  update: function(req,res){
    Animal.update({_id:req.params.id}, {animal: req.body.animal, in_pack: req.body.in_pack, pack_type: req.body.pack_type}, function(err){
      if(err){
        console.log("Could not edit id ", req.params.id)
        res.redirect('/')
      } else{
        console.log("update for id " + req.params.id + " successful!")
        res.redirect('/')
      }
    })
  },
  _delete: function(req,res){
    Animal.remove({_id:req.params.id}, function(err){
      if(err){
        console.log("Could not remove record " + req.params.id)
      } else {
        console.log("Record removed!")
        res.redirect('/')
      }
    })
  }

}
