app.factory('ordersFactory', ['$http', function($http){
  var orders = [];

  function OrdersFactory(){
    var _this = this

    this.index = function(callback){
      $http.get('/orders').then(function(response){
        if(typeof(callback) === 'function'){
          callback(response.data)
        }
      })
    }

    this.create = function(order,callback){
      console.log("Creating order in DB")
      $http.post('/orders', order).then(function(response){
        console.log(response)
        if(typeof(callback) === 'function'){
          callback(response.data)
        }
      })
    }

  }

  return new OrdersFactory();
}])
