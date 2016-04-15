'use strict';

/**
 * @ngdoc filter
 * @name formidableApp.filter:stars
 * @function
 * @description
 * # stars
 * Filter in the formidableApp.
 */
angular.module('formidableApp')
  .filter('stars', function () {
    return function (input) {
      return '*' + input + "*";
    };
  });
