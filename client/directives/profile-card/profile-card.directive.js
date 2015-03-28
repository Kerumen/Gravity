'use strict';

angular.module('gravity')
  .directive('profileCard', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/profile-card/profile-card.html',
      link: function (scope, element) {
        scope.isDanoner = function() {
          if (scope.$root.rootUi.danoner) {
            return true;
          }
          return false;
        };
      }
    };
  });
