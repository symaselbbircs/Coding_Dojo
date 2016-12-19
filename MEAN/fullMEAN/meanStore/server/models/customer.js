var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  name: {type: String, required: true}
}, {timestamps:{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}});

var Comment = mongoose.model('Customer', CustomerSchema);

console.log("Customer models uploaded!")
