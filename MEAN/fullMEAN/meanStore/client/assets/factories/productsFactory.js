app.factory('productsFactory', ['$http', function($http){
  var products = []

  function ProductsFactory(){
    var _this = this


    this.index = function(callback){
      $http.get('/products').then(function(response){
        if(response.data){
          products = [];
          for(i in response.data){
            products.push(response.data[i])
          }
          if(typeof(callback) === "function"){
            callback(response.data)
          }
        }
      })
    }

    this.placeOrder = function(order,callback){
      $http.get('/products').then(function(response){
        if(response.data){
          products = [];
          for(i in response.data){
            products.push(response.data[i])
          }
        }
      })
      for(p in products){
        if(products[p]._id === order.product_id){
          if((products[p].quantity - order.quantity) < 0){
            callback({err:`There is only ${products[p].quantity} of ${products[p].name}`})
          } else{
            order.quantity = products[p].quantity - order.quantity
            $http.post(`/products/update/${order.product_id}`, order).then(function(response){
              if(response.data.err){
                console.log(response.data.err)
                callback({err:err})
              } else{

                $http.post('/orders', order).then(function(response){
                  console.log(response)
                  if(typeof(callback) === 'function'){
                    callback(response.data)
                  }
                  return response.data
                })
              }
            })
          }
        }
      }
    }

    this.create = function(product,callback){
      $http.post('/products', product).then(function(response){
        if(typeof(callback) === "function"){
          callback(response.data)
        }
      })
    }
  }
  return new ProductsFactory();
}])
