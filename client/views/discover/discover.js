'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/discover', {
        templateUrl: 'views/discover/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'vm'
      });
  });
