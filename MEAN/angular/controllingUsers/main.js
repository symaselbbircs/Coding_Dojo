var app = angular.module('myApp', []);
app.controller("Users", function($scope){
  var first_name,
      last_name,
      language;
  this.all_users = []
  this.submitForm = function(){
    var date = new Date()
    first_name = $scope.formData.first_name;
    last_name = $scope.formData.last_name;
    language = $scope.formData.language;
    this.all_users.push({first_name: first_name,
                         last_name: last_name,
                         language: language,
                         date_added: date})
    console.log(this.all_users)
    $scope.formData.first_name = ""
    $scope.formData.last_name = ""
    $scope.formData.language = ""
  }
  this.deleteUser = function(index){
    console.log("delete User!" + index)
    var tmp_users = [];
    for(user in this.all_users){
      if(user != index){
        tmp_users.push(this.all_users[user])
      }
    }
    this.all_users = tmp_users
  }
})
