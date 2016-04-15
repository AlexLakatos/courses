'use strict';

/**
 * @ngdoc function
 * @name formidableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formidableApp
 */
angular.module('formidableApp')
  .controller('MainCtrl', function(DataService, RetryService, $log, $scope, $window) {
    DataService.getRecipes()
      .then(function yes(response) {
        $log.log(response);
        $scope.recipes = response.data;
      }, function no(response) {
        $log.log("Server is Down, no data....");

        RetryService.retryCall(response.status)
          .then(function(promiseResolve) {
            $scope.recipes = promiseResolve;
          }, function(promiseReject) {
            $window.alert('Failed: ' + promiseReject);
          });
      });
  });
