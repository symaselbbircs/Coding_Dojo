var uFactory = function($http){
  var factory = {};

  factory.read = function(callback){
    $http.get('/user').then(function(response){
      callback(response.data)
    })

  }

  factory.index = function(callback,uid){
    $http.get('/show/' + uid).then(function(response){
      callback(response.data)
    })
  }

  factory.delete = function(id){
    return $http.get(`/delete/${id}`).then(function(res){return res })
  }
  factory.add = function(user){
    return $http({
      method: "post",
      url: "/user",
      data: user
    }).then(function(res){ return res })
  }

  factory.update = function(user){
    return $http({
      method: "post",
      url: "/edit/" + user._id,
      data: user
    }).then(function(res){ return res})
  }

  return factory
}


app.factory('userFactory', ['$http', uFactory])
