var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/users',{
      templateUrl: 'partials/customizeUsers.html',
      controller: 'CustomizeUsersController',
      controllerAs: 'umakeCtrl'
    })
    .when('/list',{
      templateUrl: 'partials/userList.html',
      controller: 'UserListsController',
      controllerAs: 'ulistCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true)
}])
