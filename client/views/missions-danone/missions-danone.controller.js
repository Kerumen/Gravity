'use strict';

angular.module('gravity')
  .controller('MissionsDanoneCtrl', function () {

    var vm = this;

    angular.extend(vm, {
    });

    var rocket = $('#rocket');
    var messages = $('.card');
    var t = new TimelineMax();
    t
      .set(messages, {opacity: 0, x: -30})
      .set(rocket, {y: 1000})
      .to(rocket, 1, {y: 0})
      .staggerTo(messages, 1, {opacity: 1, x: 0}, .2)


    vm.liked = false;
  });
