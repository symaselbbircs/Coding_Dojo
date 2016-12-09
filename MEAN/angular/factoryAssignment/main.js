var app = angular.module('app',[]);

app.factory("productFactory", function(){
  var factory = {}
  var all_products = []
  factory.add_product = function(product){
    all_products.push({
      name: product.name,
      price: product.price
    })
  }
  factory.get_products = function(){
    return all_products
  }
  factory.delete_product = function(id){
    all_products.splice(id,1)
  }

  return factory
})

app.filter('moneyFilter', function(){
  return function(input){
    return "$"+input;
  }
})

app.controller("productController", ['productFactory', '$scope', function(productFactory, $scope){
  this.product_view = productFactory.get_products()

  this.addProduct = function(){
    productFactory.add_product($scope.newProduct)
    for(row in $scope.newProduct){
      $scope.newProduct[row] = ""
    }
  }
  this.deleteProduct = function(id){
    productFactory.delete_product(id)
  }

}])
