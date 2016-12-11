var tCtrl = function(teamFactory, $scope, $routeParams){

  this.get_teams = function(){
    console.log($routeParams)
    return teamFactory.read()
  }

  this.add = function(team){
    teamFactory.create(team)
    for(data in team){
      team[data] = ""
    }
  }

  this.delete = function(index){
    teamFactory.delete(index)
  }
}


app.controller('TeamsController', ['teamFactory', '$scope', '$routeParams', tCtrl])
