(function(angular) {
  'use strict';
angular.module('invoice2', [])
  .factory('MathService', function() {
    return {
        total: function total(a, b) {
          return a * b;
        }
    };
  });
})(window.angular);
