var tFactory = function(){
  var factory = {},
      teams = []

  factory.create = function(team){
    teams.push({
      name: team.team_name
    })
  }

  factory.read = function(){
    return teams
  }

  factory.delete = function(index){
    teams.splice(index,1)
  }

  return factory
}

app.factory('teamFactory', tFactory)
