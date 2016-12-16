var mongoose =require('mongoose'),
    User =  mongoose.model('users');

function catch_data(err,data){
  this.donut = "jelly";
  console.log('whatever');
  if (err){
    this.json(err);
    return
  }
  console.log(this.donut);
  this.json(data);
}

function ObjConstructor(){
  this.index = function(req,res){
    User.find({}, catch_data.bind(res));
  }
  this.create = function(data){
    var user = new User(data);
    user.save();
  }
  this.show = function(req,res){
    console.log(req.params)
    User.findOne(req.params, catch_data.bind(res)); //This doesn't look like it needs any modification. I'm confused by this assignment.
  }
}
module.exports = new ObjConstructor();
