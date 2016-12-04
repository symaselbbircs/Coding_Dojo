var mongoose = require('mongoose'),
    Person = mongoose.model('Person');

  module.exports = {
    read: function(req,res){
      Person.find({}, function(err,people){
        if(err){
          res.json(err)
        }
        else{
          res.json(people)
        }
      })
    },
    read_person: function(req,res){
      Person.find({name:req.params.name}, function(err,people){
        if(err){
          res.json(err)
        } else {
          res.json(people)
        }
      })
    },
    create: function(req,res){
      var person = new Person({name: req.params.name});
      person.save(function(err){
        if(err){
          res.status(400)
          res.json(err)
        } else{
          console.log(req.params.name + " added!")
          res.redirect('/')
        }
      })
    },
    delete: function(req,res){
      Person.remove({name:req.params.name}, function(err){
        if(err){
          res.json(err)
        } else{
          res.redirect('/')
        }
      })
    }
  }
