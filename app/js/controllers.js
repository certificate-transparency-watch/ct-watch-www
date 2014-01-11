'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LogServerCtrl', ['$scope', '$routeParams', 'logservers', function($scope, $routeParams, logservers) {
      $scope.logserver = $.grep(logservers.all(), function(e) { return e.id === $routeParams.id})[0];
      $scope.logserver.sth = logservers.lookupSthForLogServer($scope.logserver);
  }])
  .controller('LogServersCtrl', ['$scope', 'logservers', function($scope, logservers) {
      $scope.logservers = logservers.all();
  }]);
