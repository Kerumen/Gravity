'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/search/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'vm'
      });
  });
