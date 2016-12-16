console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friend,callback){ // what parameters do we need?
      console.log(friend)
      $http.put(`/friends/${friend._id}`, friend).then(function(res){
        callback(res)
      });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id,callback){// what parameters do we need?
        $http.get(`/delete/${id}`).then(function(res){
          callback(res.data)
        })
    };
    this.show = function(id,callback){// what parameters do we need?
      console.log("in show friendsFactory")
        $http.get(`/friends/${id}`).then(function(friend){
          if(typeof(callback) === 'function'){
            console.log(friend.data)
            callback(friend.data)
          }
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(id,callback){
      console.log(friends)
        for(i in friends){
          if(friends[i]._id === id){
            friend = friends[i]
          }
        }
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
