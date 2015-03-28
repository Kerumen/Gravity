'use strict';

angular.module('gravity')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/calendar', {
        templateUrl: 'views/calendar/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'vm'
      });
  });
