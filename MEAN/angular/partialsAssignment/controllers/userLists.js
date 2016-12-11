var usrList = function(userFactory, $scope){
  this.get_users = function(uid){
    return userFactory.index(uid)
  }
}

app.controller("UserListsController", ['userFactory', '$scope', usrList])
