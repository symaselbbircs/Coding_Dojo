var _ = {
  map: function(arr, callback){
    var result = [];
    if(typeof(callback) === 'function'){
      for(var i = 0; i < arr.length; i++){
        result.push(callback(arr[i]))
      }
    }
    else{
      console.log('callback is of type: ', typeof(callback))
    };
    return result
  },
  reduce: function(arr, callback, accum){
    if(typeof(callback) === 'function'){
      var result;
      if(accum === undefined || typeof(accum) != "number"){
        result = 0;
      }
      else{
        result = accum
      }
      for(var i = 0; i < arr.length; i++){
        result = callback(arr[i],result)
      }
    }
    else{
      console.log('callback is of type: ', typeof(callback))
    };
    return result
  },
  _find: function(arr,callback){
    var result = undefined;
    if(typeof(callback) === 'function'){
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
          result = i;
          break
        }
      }
    }
    else{
      console.log('callback is of type: ', typeof(callback))
    };
    return result
  },
  filter: function(arr, callback){
    var result = [];
    if(typeof(callback) === 'function'){
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
          result.push(arr[i])
        }
      }
    }
    else{
      console.log('callback is of type: ', typeof(callback))
    };
    return result
  },
  reject: function(arr, callback){
    var result = [];
    if(typeof(callback) === 'function'){
      for(var i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
          result.push(arr[i])
        }
      }
    }
    else{
      console.log('callback is of type: ', typeof(callback))
    };
    return result
  }
}


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
var map = _.map([1,4,9,16,25,36], function(num){return Math.sqrt(num)})
console.log(map)
var reduce = _.reduce([0,1,2,3], function(num,accum){ return accum + num}, "cheese")
console.log(reduce)
var find = _._find([0,1,2,3,4,5,6], function(num){ return num >= 1})
console.log(find)
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); // if things are working right, this will return [2,4,6].
