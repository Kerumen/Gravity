'use strict';

angular.module('gravity')
  .controller('ProjectCtrl', function () {

    var vm = this;

    angular.extend(vm, {
    });

    var content = $('.project-inner');
    var t = new TimelineMax();
    t
      .set(content, {opacity: 0, y: 50})
      .to(content, .5, {opacity: 1, y:0});
  });
