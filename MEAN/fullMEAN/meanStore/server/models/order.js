var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var OrderSchema = new Schema({
  _product: {type: Schema.Types.ObjectId, ref: "Product"},
  name: {type: String, required:true},
  quantity: {type:Number, required: true}
}, {timestamps:{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}});

var Order = mongoose.model('Order', OrderSchema);


console.log("Order models uploaded!")
