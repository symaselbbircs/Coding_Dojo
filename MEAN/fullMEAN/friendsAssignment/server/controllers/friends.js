console.log('friends controller');
var mongoose = require('mongoose'),
    Friend = mongoose.model("Friend")

function FriendsController(){
  var ErrMsg = function(res,message,code){
    res.status(code)
    res.json({error:message})
  }

  this.index = function(req,res){
    Friend.find({}, function(err,friends){
      if(err){
        res.json({err:err})
      } else{
        res.json(friends)
      }
    })
  };
  this.create = function(req,res){
    var friend = new Friend(req.body)
    friend.save(function(err){
      if(err){
        ErrMsg(res,err, 400)
      } else{
        res.json({response: "User saved!"})
      }
    })
  };
  this.update = function(req,res){
    Friend.update({_id:req.params.id}, {$set: req.body}, function(err){
      if(err){
        ErrMsg(res,err, 400)
      } else{
        res.json({message:"User Updated!"})
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id:req.params.id}, function(err){
      if(err){
        ErrMsg(res,err,400)
      } else{
        res.json({message:"user removed"})
      }
    })
  };
  this.show = function(req,res){
    Friend.find({_id:req.params.id}, function(err,user){
      if(err){
        ErrMsg(res,err,400)
      } else{
        res.json(user)
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?
