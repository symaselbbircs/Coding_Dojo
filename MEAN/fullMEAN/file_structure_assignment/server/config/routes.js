var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    user = require('./../controllers/users');


module.exports = function(app){
  app.get('/user', function(req,res){
    user.read(req,res)
  })

  app.get('/delete/:id', function(req,res){
    user.delete(req,res)
  })
  app.get('/show/:id', function(req,res){
    user.index(req,res)
  })
  app.post('/user', function(req,res){
    user.create(req,res)
  })
  app.post('/edit/:id', function(req,res){
    user.update(req,res)
  })
}
