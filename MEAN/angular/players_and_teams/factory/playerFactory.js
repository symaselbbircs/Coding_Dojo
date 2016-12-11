var playerFactory = function(){
  var factory = {}
  var players = []

  factory.create = function(user){
    players.push({
      name: user.name,
      team: ""
    })
  }

  factory.update_team = function(index,team){
    players[index].team = team
  }

  factory.read = function(){
    return players
  }

  factory.delete_team = function(index){
    players[index].team = ""
  }

  factory.delete = function(index){
    players.splice(index,1)
  }

  return factory
}


app.factory("playerFactory", playerFactory)
