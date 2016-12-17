var lCtrl = function($scope, $location, usersFactory){
  $scope.error = ''
  console.log('In logout controller')
  var logout = function(){
    console.log('logging out')
    usersFactory.logout()
    $location.path('/')
  }

  logout();
}


app.controller('logoutController', ['$scope', '$location', 'usersFactory', lCtrl])
