'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project', {
        templateUrl: 'views/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'vm'
      });
  });
