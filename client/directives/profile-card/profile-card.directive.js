'use strict';

angular.module('gravity')
  .directive('profileCard', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/profile-card/profile-card.html',
      link: function (scope, element) {
      }
    };
  });
