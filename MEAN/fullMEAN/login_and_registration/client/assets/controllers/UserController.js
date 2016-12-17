var uCtrl = function($scope, $location, usersFactory){
  $scope.error = '' //this will mean all error messages get erased on jumping from partials
  var index = function(){
    usersFactory.index(function(all_users){
      console.log("available user emails written below")
      console.log(all_users)
    })
  }
  index();

  $scope.login = usersFactory.verify_login() //this will give a user object or false from the factory

  var ErrHandler = function(res,path){
    if(res.err){
      $scope.error = res.err
    } else{
      $location.path('/')
      }
  }
  this.addUser = function(user){
    console.log("adding user")
    if(user.password === user.password_confirm){
      usersFactory.create(user,function(res){ErrHandler(res,'/')})
    } else{
      $scope.error = "Passwords do not match!"
    }
  }

  this.login = function(user){
    console.log("User login Controller")
    usersFactory.login(user, function(res){
    ErrHandler(res,'/')
    if(res._id){
      $scope.error = false
      $scope.login = {first_name:res.first_name, last_name: res.last_name, email:res.email}
    }
    })
  }
}

app.controller('userController', ['$scope', '$location', 'usersFactory', uCtrl])
