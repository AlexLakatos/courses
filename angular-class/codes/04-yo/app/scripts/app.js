'use strict';

/**
 * @ngdoc overview
 * @name formidableApp
 * @description
 * # formidableApp
 *
 * Main module of the application.
 */
angular
  .module('formidableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "formidable.core"
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/recipe/:recipeId', {
        templateUrl: 'views/recipe.html',
        controller: 'RecipeCtrl',
        controllerAs: 'recipe'
      })
      .otherwise({
        redirectTo: '/'
      });
});
