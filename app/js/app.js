'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/logservers.html', controller: 'LogServersCtrl'});
  $routeProvider.when('/logserver/:id', {templateUrl: 'partials/logserver.html', controller: 'LogServerCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
