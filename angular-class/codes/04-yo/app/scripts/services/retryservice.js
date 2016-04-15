'use strict';

/**
 * @ngdoc service
 * @name formidableApp.RetryService
 * @description
 * # RetryService
 * Service in the formidableApp.
 */
angular.module('formidableApp')
  .service('RetryService', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.retryCall = function dsRetryCall(statusCode) {
      // perform some asynchronous operation, resolve or reject the promise when appropriate.
      return $q(function(resolve, reject) {
        setTimeout(function() {
          if (statusCode === 404) {
            resolve([{
              "recipeID": 1,
              "name": "Fish sticks and Rice",
              "price": 2.0,
              "time": 20,
              "image": "fishsticks-mine",
              "recipeIngredients": [],
              "recipeInstructions": []
            }]);
          } else {
            reject("No recipes for you");
          }
        }, 3000);
      });
    };
  });
