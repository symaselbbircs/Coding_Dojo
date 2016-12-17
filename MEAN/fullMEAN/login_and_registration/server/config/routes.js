var mongoose = require('mongoose');
    User = mongoose.model('User');
    users = require('./../controllers/users')

// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/users', function(req,res){
    users.index(req,res);
  })
  app.post('/users/:email', function(req,res){
    users.show(req,res);
  })
  app.post('/users', function(req,res){
    users.create(req,res)
  })
}
console.log('Routes loaded!');
