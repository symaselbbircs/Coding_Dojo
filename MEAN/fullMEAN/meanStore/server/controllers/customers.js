var mongoose = require('mongoose'),
    User = mongoose.model("Customer");

function CustomerController(){

  this.index = function(req,res){
    User.find({}, function(err,users){
      if(err){
        console.log(err)
        res.json(err)
      } else{
        res.json(users)
      }
    })
  };

  this.show = function(req,res){
    User.findOne({_id:req.params.id}, function(err,user){
      if(err){
        res.json(err)
      } else{
        res.json({"err": "Password invalid"})
        }

      }
    )
  };

  this.create = function(req,res){
    var user = new User(req.body)
    user.save(function(err){
      if(err){
        res.json(err)
      } else{
        res.json({response: "User Saved!"})
      }
    })
  }

  this.delete = function(req,res){
    User.remove({_id:req.params.id},function(err){
      if(err){
        res.json(err)
      } else{
        res.json(true)
      }
    })
  }
}


module.exports = new CustomerController();
