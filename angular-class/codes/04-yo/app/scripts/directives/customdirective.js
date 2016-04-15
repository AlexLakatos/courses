'use strict';

/**
 * @ngdoc directive
 * @name formidableApp.directive:customDirective
 * @description
 * # customDirective
 */
angular.module('formidableApp')
  .directive('customDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the customDirective directive');
      }
    };
  });
