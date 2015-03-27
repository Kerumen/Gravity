'use strict';

angular.module('gravity')
  .directive('sideMenu', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/side-menu/side-menu.html',
      link: function (scope, element) {
        scope.navUi = {};
        scope.navUi.isOpen = true;

        angular.element(document).on('click', function(e) {
          if (angular.element(element).has(e.target).length > 0) {
            return ;
          }
          scope.navUi.isOpen = false;
          scope.$apply();
        });


        angular.element(window).resize(function () {
          scope.navUi.isOpen = angular.element(window).width() > 990;
          scope.$apply();
        });

      }
    };
  });
