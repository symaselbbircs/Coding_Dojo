var mongoose = require('mongoose');
    customers = require('./../controllers/customers'),
    products = require('./../controllers/products'),
    orders = require('./../controllers/orders');


// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){

  //ROUTES FOR CUSTOMERS CONTROLLER
  app.get('/customers', function(req,res){
    customers.index(req,res);
  })
  app.post('/customers/:id', function(req,res){
    customers.show(req,res);
  })
  app.post('/customers', function(req,res){
    customers.create(req,res)
  })
  app.post('/customers/delete/:id', function(req,res){
    customers.delete(req,res)
  })

  //ROUTES FOR PRODUCTS CONTROLLER
  app.get('/products', function(req,res){
    products.index(req,res)
  })
  app.post('/products', function(req,res){
    products.create(req,res)
  })
  app.post('/products/update/:id', function(req,res){
    products.update(req,res)
  })

  //ROUTES FOR ORDERS CONTROLLER
  app.get('/orders', function(req,res){
    orders.index(req,res)
  })
  app.post('/orders', function(req,res){
    orders.create(req,res)
  })
}
console.log('Routes loaded!');
