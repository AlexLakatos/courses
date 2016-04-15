'use strict';

/**
 * @ngdoc filter
 * @name formidableApp.filter:cooktime
 * @function
 * @description
 * # cooktime
 * Filter in the formidableApp.
 */
angular.module('formidableApp')
  .filter('cooktime', function () {
    return function (input) {
      return input + " mins";
    };
  });
