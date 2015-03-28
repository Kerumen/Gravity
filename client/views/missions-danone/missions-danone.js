'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/missions-danone', {
        templateUrl: 'views/missions-danone/missions-danone.html',
        controller: 'MissionsDanoneCtrl',
        controllerAs: 'vm'
      });
  });
