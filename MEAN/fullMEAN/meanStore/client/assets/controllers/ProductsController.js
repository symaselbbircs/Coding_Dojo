var Pctrl = function($scope, productsFactory){
  $scope.number = 31

  var index = function(){
    productsFactory.index(function(all_products){
      console.log(all_products)
      $scope.products = all_products
    })
  }

  index();

  this.getNumber = function(number){
    return new Array(number);
  }

  this.addProduct = function(product){
    productsFactory.create(product, function(res){
      if(res.err){
        $scope.success = false
        $scope.error = res.err
      } else{
        $scope.error = false
        $scope.success = "Product added!"
        index();
        for(data in $scope.product){
          $scope.product[data] = ""
        }
      }
    })
  }
}


app.controller('productsController', ['$scope', 'productsFactory', Pctrl])
