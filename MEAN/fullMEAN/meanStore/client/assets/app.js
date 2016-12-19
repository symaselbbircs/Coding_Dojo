var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html',
    controller: 'ordersController',
    controllerAs: 'oCtrl'
  })
  .when('/products', {
    templateUrl: 'partials/products.html',
    controller: 'productsController',
    controllerAs: 'pCtrl'
  })
  .when('/customers', {
    templateUrl: 'partials/customers.html',
    controller: 'customersController',
    controllerAs: 'cCtrl'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html',
    controller: 'ordersController',
    controllerAs: 'oCtrl'
  })
  .when('/settings', {
    templateUrl: 'partials/settings.html'
  })
  .otherwise({
    redirectTo: '/'
  })
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
  });
  $locationProvider.html5Mode(true).hashPrefix('!')
});
