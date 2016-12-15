var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .when('/edit',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
});
