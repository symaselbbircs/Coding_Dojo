console.log('friends model');
var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var FriendsSchema = new Schema({
  first_name: {type:String, required:true},
  last_name: {type:String, required: true},
  birthday: {type:Date, required: true}
},{timestamp:true})


var Friend = mongoose.model("Friend", FriendsSchema)
