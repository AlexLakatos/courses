(function(angular) {
  'use strict';
angular.module('invoice1', ["invoice2"])
  .controller('InvoiceController', ["MathService", function(MathService) {
    this.qty = 1;
    this.cost = 2;

    this.total = MathService.total;
  }]);
})(window.angular);
