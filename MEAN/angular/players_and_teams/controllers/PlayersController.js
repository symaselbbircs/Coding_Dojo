var pCtrl = function(playerFactory, $scope){

  this.get_users = function(){
    return playerFactory.read()
  }

  this.add = function(user){
    playerFactory.create(user)
    for(data in user){
      user[data] = ""
    }
  }

  this.delete = function(index){
    playerFactory.delete(index)
  }
}

app.controller('PlayersController', ['playerFactory', '$scope', pCtrl])
