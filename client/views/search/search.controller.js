'use strict';

angular.module('gravity')
  .controller('SearchCtrl', function ($scope) {

    var vm = this;

    angular.extend(vm, {
      planetModal: false,
      currentDesc: {},
      planets: [
        {
          name: "Take Off!",
          desc: "Join gravity Project team and take part in \"Renducing Car ben faut part in Manif env\"",
          tags: [
            { name: "CO2", type: "tag-green"},
            { name: "RSE", type: "tag-green"},
            { name: "Environment", type: "tag-blue"}
          ]
        },{
          name: "Discover!",
          desc: "Maria is production planer at Bonafont plant.",
          tags: [
            { name: "Teamleader", type: "tag-red"},
            { name: "Production", type: "tag-blue"},
            { name: "Career", type: "tag-blue"}
          ]
        },{
          name: "Discuss!",
          desc: "With Greg - Danoner's",
          tags: [
            { name: "Production", type: "tag-green"},
            { name: "Mobility", type: "tag-red"}
          ]
        }
      ]
    });

    angular.element(document).on('click', function(e) {
        if (angular.element($("#m-planet")).has(e.target).length > 0) {
          return;
        }
        else if (angular.element($("#planet-1")).is(e.target)) {
          vm.planetModal = true;
          vm.currentDesc = vm.planets[0];
        } else if (angular.element($("#planet-2")).is(e.target)) {
          vm.planetModal = true;
          vm.currentDesc = vm.planets[1];
        } else if (angular.element($("#planet-3")).is(e.target)) {
          vm.planetModal = true;
          vm.currentDesc = vm.planets[2];
        } else {
          vm.planetModal = false;
        }
        $scope.$apply();
    });

    $('#p-planet-1').circleType({radius:184, dir: -1});
    $('#p-planet-2').circleType({radius:164, dir: -1});
    $('#p-planet-3').circleType({radius:184, dir: -1});

  });
