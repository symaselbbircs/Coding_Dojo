var app = angular.module('app', ['ngRoute']);
/* configuration for angular route */
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'eC'
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
    })
    .otherwise({
      redirectTo: '/index'
    });
    $locationProvider.html5Mode(true)
  }]);
/* our angular app modularize, with config */

/*
  Our factory: This is going to control all of our data.
  Modularize into a folder called: 'factories' within 'client'
*/
