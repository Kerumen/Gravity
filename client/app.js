'use strict';

angular.module('gravity', [
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  })
  .run(function ($rootScope) {

    $rootScope.rootUi = {
      navBar: false
    };

    $rootScope.$on('$routeChangeSuccess', function (e, route) {
      $rootScope.rootUi.navBar = route.$$route.hideNavBar ? false : true;

    });

  });
