app.factory('usersFactory', ['$http', function($http){
  var emails= [];
  var logged_in = {}

  function UsersFactory(){
    var _this = this;

    this.verify_login = function(){
      if(logged_in._id){
        return {first_name: logged_in.first_name,
                last_name: logged_in.last_name,
                email: logged_in.email}
      } else{
        return false
      }
    }

    this.index = function(callback){
      $http.get('/users').then(function(response){
        for(i in response.data){
          if(emails.indexOf(response.data[i].email) < 0){
            emails.push(response.data[i].email)
          }
        }
      });
    }

    this.create = function(new_user,callback){
      if(emails.indexOf(new_user.email) >= 0){
        callback({err:"User name already exists"})
      } else{
        $http.post('/users', new_user).then(function(response){
          if(typeof(callback) === 'function'){
            callback(response.data)
          }
        })
      }

    }

    this.login = function(user,callback){
      $http.post(`/users/${user.email}`, user).then(function(response){
        // console.log(response.data)
        if(typeof(callback) === 'function'){
          if(response.data._id){
            logged_in = response.data
          }
          callback(response.data)

        }
      })
    }


    this.logout = function(){
        logged_in = {}
    }
  }
  return new UsersFactory();
}]);
