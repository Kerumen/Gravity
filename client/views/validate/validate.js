'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/validate', {
        templateUrl: 'views/validate/validate.html',
        controller: 'ValidateCtrl',
        controllerAs: 'vm'
      });
  });
