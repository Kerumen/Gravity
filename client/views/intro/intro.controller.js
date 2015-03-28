'use strict';

angular.module('gravity')
  .controller('IntroCtrl', function ($timeout, $location) {

    var vm = this;

    var content = $('.content');
    angular.extend(vm, {
      swipeLeft: function () {
        TweenMax.to(content, 1, {x: "+=768px"})
      },
      swipeRight: function () {
        TweenMax.to(content, 1, {x: "-=768px"})
      },
      showHome: function () {
        $timeout(function () {
          $location.path('/');
        }, 1000);
      }
    });

  });
