'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      });
  });
