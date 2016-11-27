module.exports = function(){
  return{
    add: function(num1,num2){
      return num1 + num2
    },
    multiply: function(num1,num2){
      return num1 * num2
    },
    square: function(num){
      return num * num
    },
    inbetween: function(num1,num2){
      var diff;
      if(num1 > num2){
        return (Math.random()*(num1 - num2))+num2
      }
      else{
        return (Math.random()*(num2 - num1))+num1
      }
    }
  }
}
