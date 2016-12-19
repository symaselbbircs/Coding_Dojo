var Cctrl = function($scope, $location, customersFactory){

  var index = function(){
    customersFactory.index(function(all_customers){
      $scope.customers = all_customers
    })
  }

  index();

  this.addUser = function(user){
    customersFactory.create(user,function(res){
      if(res.err){
        $scope.success = false
        $scope.error = res.err
      } else{
        $scope.error = false
        $scope.success = "User added!"
        index();
      }
      for(data in $scope.customer){
        $scope.customer[data] = ""
      }
    })
  }

  this.removeUser = function(uid){
    customersFactory.delete(uid, function(res){
      if(res){
        $scope.error = false
        $scope.success = false
        index();
      }
    })
  }

}


app.controller('customersController', ['$scope','$location','customersFactory', Cctrl])
