var mongoose = require('mongoose'),
    Order = mongoose.model("Order"),
    Product = mongoose.model("Product");


function OrderController(){

  this.index = function(req,res){
    Order.find({})
    .populate('_product')
    .exec(function(err,orders){
      if(err){
        res.json(err)
      } else{
        console.log(orders)
        res.json(orders)
      }
    })
  }

  this.create = function(req,res){
    Product.findOne({_id:req.body.product_id}, function(err,product){
      var order = new Order(req.body)
      order._product = product._id
      order.save(function(err){
        if(err){
          res.json(err)
        } else{
          res.json(true)
        }
      })
    })
  }

}

module.exports = new OrderController();
