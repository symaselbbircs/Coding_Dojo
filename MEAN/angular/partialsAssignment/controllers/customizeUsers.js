var usrCtrl = function(userFactory,$scope){
  this.addUser = function(user){
    userFactory.create(user)
    for(data in user){
      user[data] = ""
    }
  }

  this.delUser = function(uid){
    userFactory.delete(uid)
  }

  this.get_users = function(){
    return userFactory.index()
  }

  this.say_hello = function(){
    return "hello!"
  }
}

app.controller("CustomizeUsersController", ['userFactory', '$scope',usrCtrl])
