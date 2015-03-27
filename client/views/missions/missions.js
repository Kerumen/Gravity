'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/missions', {
        templateUrl: 'views/missions/missions.html',
        controller: 'MissionsCtrl',
        controllerAs: 'vm'
      });
  });
