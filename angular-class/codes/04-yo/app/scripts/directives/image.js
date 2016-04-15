'use strict';

/**
 * @ngdoc directive
 * @name recipesApp.directive:image
 * @description
 * # image
 */
angular.module('formidableApp')
  .directive('ebiImage', function() {
    return {
        require: "^^ebiRecipe",
      templateUrl: 'scripts/directives/ebi-image.html',
      restrict: 'E',
      scope: {
        imageSource: '=ngModel',
      },
      link: function postLink(scope, element, attr, ctrl) {
          scope = ctrl;
      }
    };
  });
