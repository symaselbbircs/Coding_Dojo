var aCtrl = function(playerFactory, teamFactory, $scope){

  this.get_players = function(){
    return playerFactory.read()
  }

  this.get_teams = function(){
    return teamFactory.read()
  }

  this.add = function(association){
    playerFactory.update_team(association.user,association.team)
  }

  this.clear_assignment = function(index){
    playerFactory.delete_team(index)
  }

}

app.controller('AssociationsController', ['playerFactory', 'teamFactory', '$scope', aCtrl])
