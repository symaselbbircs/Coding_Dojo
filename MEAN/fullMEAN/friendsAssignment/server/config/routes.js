var mongoose = require('mongoose');
    User = mongoose.model('Friend');
    friends = require('./../controllers/friends')

console.log('routes');
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/friends', function(req,res){
    friends.index(req,res);
  })
  app.get('/friends/:id', function(req,res){
    friends.show(req,res);
  })
  app.post('/friends', function(req,res){
    friends.create(req,res);
  })
  app.put('/friends/:id', function(req,res){
    friends.update(req,res);
  })
  app.get('/delete/:id', function(req,res){
    friends.delete(req,res);
  })
}
