'use strict';

/**
 * @ngdoc directive
 * @name formidableApp.directive:recipe
 * @description
 * # recipe
 */
angular.module('formidable.core', [])
  .directive('ebiRecipe', function () {
    return {
      templateUrl: 'scripts/directives/ebi-recipe.html',
      restrict: 'E',
      transclude: true,
      scope: {
          model: "=ngModel"
      },
      link: function postLink() {
      }
    };
  });
