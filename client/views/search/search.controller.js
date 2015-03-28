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

    var $planet1 = $("#planet-1");
    var $planet2 = $("#planet-2");
    var $planet3 = $("#planet-3");
    var $mPlanet = $("#m-planet");
    var $bg = $(".back-stars");
    var t;
    angular.element(document).on('click', function(e) {
        if (angular.element($("#m-planet")).has(e.target).length > 0) {
          return;
        }
        else if (angular.element($planet1).is(e.target)) {
          vm.planetModal = true;
          t = new TimelineMax();
          t
            .set($mPlanet, {opacity: 0})
            //.to($bg, .5, {x: 720, y: 1950, scale: 5})
            .to($bg, .5, {x: 3200, y: 4350, scale: 5})
            .to($mPlanet, .5, {opacity: 1}, "-=.1");
          vm.currentDesc = vm.planets[0];
        } else if (angular.element($planet2).is(e.target)) {
          vm.planetModal = true;
          t = new TimelineMax();
          t
            .set($mPlanet, {opacity: 0})
            .to($bg, .5, {x: 5300, y: 3520, scale: 7})
            .to($mPlanet, .5, {opacity: 1}, "-=.1");
          vm.currentDesc = vm.planets[1];
        } else if (angular.element($planet3).is(e.target)) {
          vm.planetModal = true;
          t = new TimelineMax();
          t
            .set($mPlanet, {opacity: 0})
            .to($bg, .5, {x: 2300, y: 1010, scale: 5})
            .to($mPlanet, .5, {opacity: 1}, "-=.1");
          vm.currentDesc = vm.planets[2];
        } else {
          t = new TimelineMax();
          t
            .to($bg, .5, {x: 0, y: 0, scale: 1})
            .to($mPlanet, .5, {opacity: 0}, "-=.1");
          vm.planetModal = false;
        }
        $scope.$apply();
    });

    var button = $('.btn-menu');
    var planets = $('.planets');
    t = new TimelineMax();
    t
      .set(planets, {opacity: 0})
      .to(planets, 1, {opacity: 1})
      .to(button, 1, {opacity: 1}, "-=1");

    $('#p-planet-1').circleType({radius:184, dir: -1});
    $('#p-planet-2').circleType({radius:164, dir: -1});
    $('#p-planet-3').circleType({radius:184, dir: -1});

  });
