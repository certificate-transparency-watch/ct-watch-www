'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LogServerCtrl', ['$scope', '$routeParams', 'logservers', function($scope, $routeParams, logservers) {
      $scope.logserver = $.grep(logservers.all(), function(e) { return e.id === $routeParams.id})[0];

      logservers.lookupSthForLogServer($scope.logserver).then(function(results) {
          $scope.logserver.sth = _.transform(results.data, function(accum, goodOrBadSet, k) {
	      accum[k] = _.map(goodOrBadSet, function(el) {
                  el.timestamp = moment(parseInt(el.timestamp,10));
                  return el;
	      });
	  });
      });
  }])
  .controller('LogServersCtrl', ['$scope', 'logservers', function($scope, logservers) {
      $scope.logservers = logservers.all();
  }]);
