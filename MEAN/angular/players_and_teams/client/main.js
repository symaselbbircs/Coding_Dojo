var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/players',{
      templateUrl: 'partials/players.html',
      controller: 'PlayersController',
      controllerAs: 'pCtrl'
    })
    .when('/teams',{
      templateUrl: 'partials/teams.html',
      controller: 'TeamsController',
      controllerAs: 'tCtrl'
    })
    .when('/associations',{
      templateUrl: 'partials/associations.html',
      controller: 'AssociationsController',
      controllerAs: 'aCtrl'
    })
    .when('/:teamname',{
      templateUrl: 'partials/teams.html',
      controller: 'TeamsController',
      controllerAs: 'tCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true)
}])
