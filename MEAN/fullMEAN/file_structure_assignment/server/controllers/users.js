var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
  create: function(req,res){
    var user = new User(req.body)
    user.save(function(err){
      if(err){
        res.status(400)
        console.log("Could not save to db.")
      } else{
        res.json(true);
      }
    })
  },
  read: function(req,res){
    User.find({}, function(err,users){
      if(err){
        res.json({err:err})
      } else{
        res.json(users)
      }
    })
  },
  index: function(req,res){
    User.findOne({_id:req.params.id}, function(err,user){
      if(err){
        console.log("User controller could not find user " + req.params.id)
        res.json(err)
      } else{
        res.json(user)
      }
    })
  },
  update: function(req,res){
    u = req.body
    User.update({_id:req.params.id},{$set: {first_name:u.first_name,last_name: u.last_name, birthday: u.birthday}},function(err,user){
      if(err){
        console.log("Could now update from server")
        console.log(err)
      } else{
        res.json(true)
      }
    })
  },
  delete: function(req,res){
    User.remove({_id:req.params.id}, function(err){
      if(err){
        console.log("Server delete error")
        res.json(false)
      } else{
        res.json(true)
      }
    })
  }
}
