var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider, $provide){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/users.html',
    controller: 'UserController',
    controllerAs: 'uCtrl'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html',
    controller: 'UserListController',
  })
  .when('/edit/:id',{
    templateUrl: 'partials/edit.html',
    controller: 'UserListController',
    controllerAs: 'ulCtrl'
  })
  .when('/new', {
    templateUrl: '/partials/new.html',
    controller: 'UserController',
    controllerAs: 'uCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
  });
  $locationProvider.html5Mode(true).hashPrefix('!')
})
