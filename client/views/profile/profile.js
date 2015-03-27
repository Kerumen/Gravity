'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'views/profile/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm'
      });
  });
