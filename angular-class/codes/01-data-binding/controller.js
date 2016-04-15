(function(angular) {
    'use strict';
    angular.module('invoice', ['finance'])
        .controller('InvoiceController', ["MathUtilsService", "$scope", "$rootScope",
            function(MathUtilsService, $scope, $rootScope) {
                $rootScope.$on("customevent", function () {
                    console.log("upwards");
                });

                var childScope = $scope.$new();

                childScope.$on("customevent", function ($event) {
                    console.log("downwards");
                    console.log($event);
                });

                $scope.$emit("customevent");
                $scope.$broadcast("customevent");

                $scope.cost = 2;
                $scope.qty = 1;

                $scope.total = MathUtilsService.multiply;
            }
        ]);
})(window.angular);
