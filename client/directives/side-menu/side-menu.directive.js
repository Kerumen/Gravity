'use strict';

angular.module('gravity')
  .directive('sideMenu', function ($location) {
    return {
      restrict: 'E',
      templateUrl: 'directives/side-menu/side-menu.html',
      link: function (scope, element) {
        scope.navUi = {};
        scope.navUi.isOpen = false;

        angular.element(document).on('click', function(e) {
          if (scope.$root.rootUi.navBar && angular.element(element).has(e.target).length > 0) {
            return ;
          }
          scope.navUi.isOpen = false;
          scope.$apply();
        });

        scope.isBlue = function() {
          if ($location.path() == "/project" || $location.path() == "/discover") {
            return true;
          }
          return false;
        };


        angular.element(window).resize(function () {
          scope.navUi.isOpen = angular.element(window).width() > 990;
          scope.$apply();
        });

        scope.close = function () {
          scope.navUi.isOpen = false;
        };

      }
    };
  });
