app.factory('customersFactory', ['$http', function($http){
  var users = [];

  function CustomersFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/customers').then(function(response){
        if(response.data){
          users = [];
          for(i in response.data){
            users.push(response.data[i].name)
          }
          if(typeof(callback) === "function"){
            callback(response.data)
          }
        }
      })
    }

    this.create = function(user,callback){
      if(users.indexOf(user.name) >= 0){
        callback({err:"Name already taken!"})
      } else{
        $http.post('/customers', user).then(function(response){
          if(typeof(callback) === 'function'){
            callback(response.data)
          }
        })
      }
    }

    this.delete = function(uid, callback){
      $http.post('/customers/delete/' + uid).then(function(response){
        if(typeof(callback) === 'function'){
          callback(response.data)
        }
      })
    }
  }
  return new CustomersFactory();
}])
