var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {type: String, required: true},
  url: {type:String, required: true},
  description: {type:String, required: true},
  quantity: {type: Number, required: true}
}, {timestamps:{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}});

var Product = mongoose.model('Product', ProductSchema);

console.log("Product models uploaded!")
