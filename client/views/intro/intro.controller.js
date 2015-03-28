'use strict';

angular.module('gravity')
  .controller('IntroCtrl', function ($location) {

    var vm = this;

    angular.extend(vm, {
      name: 'IntroCtrl',
      div1:true,
      div2:true,
      div3:true,
      dev3action:function() {
        vm.div3 = !vm.div3;
        if (!vm.div1 && !vm.div2 && !vm.div3) {
          $location.path("/");
        }
      }
    });

  });
