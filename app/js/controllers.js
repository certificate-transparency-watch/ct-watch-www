'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LogServerCtrl', ['$scope', '$routeParams', 'logservers', function($scope, $routeParams, logservers) {
      $scope.logserver = $.grep(logservers.all(), function(e) { return e.id === $routeParams.id})[0];

      logservers.lookupSthForLogServer($scope.logserver).then(function(results) {
          $scope.logserver.sth = _.transform(results.data, function(accum, goodOrBadSet, k) {
	      accum[k] = _.chain(goodOrBadSet)
				.map(function(el) {
				  el.timestamp = moment(parseInt(el.timestamp,10));
				  return el;
				})
				.sortBy('timestamp')
				.reverse()
				.value()
	  });
      });
  }])
  .controller('LogServersCtrl', ['$scope', 'logservers', function($scope, logservers) {
      $scope.logservers = logservers.all();
  }])
  .controller('ViewCertificateCtrl', function($scope) {
      $scope.submit = function() {
          window.location = "http://api.ctwatch.net/domain/" + $scope.domain;
      };
  });
