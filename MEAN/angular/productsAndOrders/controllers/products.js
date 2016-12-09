app.controller("productController", ['inventoryFactory', '$scope', function(inventoryFactory, $scope){
  this.product_view = inventoryFactory.show_products()

  this.addProduct = function(){
    inventoryFactory.add_product($scope.newProduct)
    for(row in $scope.newProduct){
      $scope.newProduct[row] = ""
    }
  }
  this.deleteProduct = function(id){
    inventoryFactory.delete_product(id)
  }

}])
