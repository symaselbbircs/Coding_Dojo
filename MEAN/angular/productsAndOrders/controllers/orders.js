app.controller("ordersController", ['inventoryFactory', '$scope', function(inventoryFactory, $scope){
  this.product_view = inventoryFactory.show_products()

  this.buyProduct = function(id){
    inventoryFactory.buy_product(id)
  }

}])
