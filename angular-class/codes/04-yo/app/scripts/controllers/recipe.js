'use strict';

/**
 * @ngdoc function
 * @name formidableApp.controller:RecipeCtrl
 * @description
 * # RecipeCtrl
 * Controller of the formidableApp
 */
angular.module('formidableApp')
  .controller('RecipeCtrl', function (DataService, $scope, $log, $routeParams) {
      DataService.getRecipe($routeParams.recipeId)
        .then(function yes(response) {
          $log.log(response);
          $scope.recipe = response.data;
        }, function no() {
          $log.log("Server is Down, no data....");
        });
  });
