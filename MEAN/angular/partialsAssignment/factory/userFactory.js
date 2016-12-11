var uFactory = function(){
  var factory = {}
  var users = []

  factory.index = function(){
    return users
  }

  factory.create = function(userObj){
    users.push({
      first_name: userObj.first_name,
      last_name: userObj.last_name,
      language: userObj.language
    })
  }

  factory.delete = function(index){
    users.splice(index,1)
  }

  factory.show = function(index){
    return users[index]
  }

  return factory
}



app.factory("userFactory", uFactory)
