var ShowCtrl = function(userFactory, $scope, $routeParams,$location){

  userFactory.index(function(user){
    $scope.user = user
  },$routeParams.id)

  $scope.handleSubmit = function(){
    userFactory.update($scope.user)
      .then(function(res){
        $location.path(`/show/${$scope.user._id}`)
      })
  }
}


app.controller('UserListController', ['userFactory', '$scope', '$routeParams', '$location', ShowCtrl])
