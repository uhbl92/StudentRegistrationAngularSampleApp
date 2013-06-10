'use strict';


// Declare app level module which depends on filters, and services
angular.module('myapp', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: AppCtrl});
    $routeProvider.when('/home', {templateUrl: 'partials/Home.html'});
    
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  
  }]);