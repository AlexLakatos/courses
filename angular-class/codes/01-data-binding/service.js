(function(angular) {
  'use strict';
angular.module('finance', []).factory('MathUtilsService', function() {
        function multiplY_me(a, b) {
            return a * b;
        }
      return {
          multiply: multiplY_me
      }
  });
})(window.angular);
