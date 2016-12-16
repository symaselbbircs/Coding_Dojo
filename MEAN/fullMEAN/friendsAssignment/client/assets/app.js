var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/friends.html',
    controller: 'newController',
    controllerAs: 'nCtrl'
  })
  .when('/edit/:id',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController',
    controllerAs: 'nCtrl'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html',
    controller: 'editController'
  })
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
  });
  $locationProvider.html5Mode(true).hashPrefix('!')
});
