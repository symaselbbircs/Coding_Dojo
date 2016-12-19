var mongoose = require('mongoose'),
    Product = mongoose.model('Product');


function ProductController(){
  var _this = this;

  this.index = function(req,res){
    Product.find({}, function(err,orders){
      if(err){
        res.json(err)
      } else{
        res.json(orders)
      }
    })
  }

  this.create = function(req,res){
    product = new Product(req.body)
    product.save(function(err){
      if(err){
        console.log(err)
        res.json(err)
      } else {
        res.json(true)
      }
    })
  }

  this.update = function(req,res){
    Product.update({_id:req.params.id}, {quantity: req.body.quantity}, function(err){
      if(err){
        res.json(err)
      } else{
        res.json(true)
      }
    })
  }
}
module.exports = new ProductController();
