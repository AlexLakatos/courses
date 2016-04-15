'use strict';

/**
 * @ngdoc service
 * @name formidableApp.DataService
 * @description
 * # DataService
 * Service in the formidableApp.
 */
angular.module('formidableApp')
  .service('DataService', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getRecipes = function dsGetRecipes() {
      return $http.get("data/recipies.json");
    };

    this.getRecipe = function dsGetRecipe(aRecipeId) {
      return $http.get("data/recipe" + aRecipeId + ".json");
    };

  });
