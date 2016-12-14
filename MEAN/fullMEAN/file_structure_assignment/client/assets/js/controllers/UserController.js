var UserCtrl = function(userFactory,$scope,$routeParams,$location){
    userFactory.read(function(users){
      $scope.users = users
    })

  $scope.add = function(user){
    userFactory.add(user)
    .then(function(res){
      console.log("just added a person!")
      $location.path("/")
    })
  }
  this.delete = function(id){
    userFactory.delete(id)
    .then(function(res){
      console.log("returning to path")
      $location.path("/show")
    })
  }
  this.update = function(id){
    return userFactory.update(id)
  }
}


app.controller("UserController", ['userFactory', '$scope', '$routeParams','$location', UserCtrl])
