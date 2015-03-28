'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/intro', {
        templateUrl: 'views/intro/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'vm',
        hideNavBar: true
      });
  });
