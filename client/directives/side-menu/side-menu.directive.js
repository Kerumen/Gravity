'use strict';

angular.module('sideMenu')
  .directive('sideMenu', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/side-menu/side-menu.html',
      link: function (scope, element) {
        scope.ui = {};
        scope.ui.isOpen = true;

        angular.element(document).on('click', function(e) {
          if (angular.element(element).has(e.target).length > 0) {
            return ;
          }
          scope.ui.isOpen = false;
          scope.$apply();
        });

        angular.element(window).resize(function () {
          scope.ui.isOpen = angular.element(window).width() > 990;
          scope.$apply();
        });

      }
    };
  });
