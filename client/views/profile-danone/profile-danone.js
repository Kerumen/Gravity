'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile-danone', {
        templateUrl: 'views/profile-danone/profile-danone.html',
        controller: 'ProfileDanoneCtrl',
        controllerAs: 'vm'
      });
  });
