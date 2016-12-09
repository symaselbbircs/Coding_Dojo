var app = angular.module('app',[]);


app.filter('moneyFilter', function(){
  return function(input){
    return "$"+input;
  }
})
