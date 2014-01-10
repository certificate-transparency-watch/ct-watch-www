'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LogServerCtrl', ['$scope', '$routeParams', 'logservers', function($scope, $routeParams, logservers) {

      $scope.logserver = $.grep(logservers, function(e) { return e.id === $routeParams.id})[0];
      $scope.logserver.sth = {
            good: [
                { timestamp: moment(1318781876406), signature: 456},
                { timestamp: moment(1318781899999), signature: 457}
            ],
            bad: [
                { timestamp: moment(1234), signature: 45}
            ]
      };

  }])
  .controller('LogServersCtrl', ['$scope', 'logservers', function($scope, logservers) {
      $scope.logservers = logservers;
  }]);
