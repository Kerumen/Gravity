'use strict';

angular.module('gravity')
  .controller('DashboardCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'DashboardCtrl',
      showmodal: false,
      show:function(){
        vm.showmodal = true
      }
    });

  });
