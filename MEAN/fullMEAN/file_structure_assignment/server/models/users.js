var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  birthday: {type: Date, required: true}
}, {timestamps: true});


var User = mongoose.model('User', UserSchema)
