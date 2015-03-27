'use strict';

angular.module('sideMenu')
  .directive('activeWhen', function ($location, $rootScope) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $rootScope.$on('$routeChangeSuccess', function(){
          if ($location.path() == attrs.activeWhen) {
            element.addClass('active');
          } else {
            element.removeClass('active');
          }
        });
      }
    };
  });
