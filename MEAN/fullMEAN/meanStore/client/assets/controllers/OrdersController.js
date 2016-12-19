var Octrl = function($scope, productsFactory, customersFactory, ordersFactory){
  $scope.number = 31
  var index = function(){
    productsFactory.index(function(all_products){
      $scope.products = all_products
    })
    customersFactory.index(function(customers){
      $scope.customers = customers
    })
    ordersFactory.index(function(orders){
      $scope.orders = orders
    })
  }
  index();


  $scope.greaterThan = function(prop, val){
    return function(item){
      return item[prop] > val;
    }
  }
  $scope.getNumber = function(number){
    return new Array(number)
  }

  this.addOrder = function(order){
    productsFactory.placeOrder(order,function(res){
      if(res != true){
        console.log(res)
        console.log("error!")
        $scope.error = res.err
      } else{
        index();
      }
    })
  }
}


app.controller('ordersController', ['$scope','productsFactory', 'customersFactory', 'ordersFactory', Octrl])
