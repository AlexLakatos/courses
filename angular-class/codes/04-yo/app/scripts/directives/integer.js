'use strict';

/**
 * @ngdoc directive
 * @name formidableApp.directive:integer
 * @description
 * # integer
 */
angular.module('formidableApp')
  .directive('integer', function() {
    return {
      require: "ngModel",
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                return true;
            }
            if (/^\-?\d+$/.test(viewValue)) {

                return true;
            }
            return false;
        };
      }
    };
  });
