app.controller('newController', ['userFactory','$scope', '$location', function(userFactory,$scope, $location) {
  $scope.addUser = function(user){
    userFactory.create(user)
    console.log($scope.user);
    $location.url('/')
  }
}]);
