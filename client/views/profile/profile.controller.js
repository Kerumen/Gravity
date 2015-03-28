'use strict';

angular.module('gravity')
  .controller('ProfileCtrl', function ($timeout, $location) {

    var vm = this;

    vm.indexTagsTitle = 0;
    vm.tagsTitle = ['Recommended tags', 'Professional tags', 'Hobby tags'];
    vm.customTag = null;

    angular.extend(vm, {
      addTag: function(tag) {
        var tagAdded = tag || { name: vm.customTag, type: 'tag-green' };
        vm.myTags.push(tagAdded);
        vm.customTag = null;
      },
      removeTag: function(index) {
        vm.myTags.splice(index, 1);
      },
      myTags : [
      ],
      tags : [
        { name: "Production", type: "tag-blue"},
        { name: "Supply", type: "tag-red"},
        { name: "International", type: "tag-green"},
        { name: "Mobility", type: "tag-red"},
        { name: "France", type: "tag-red"},
        { name: "Activia", type: "tag-blue"},
        { name: "Volvic", type: "tag-red"},
        { name: "Planning", type: "tag-green"},
        { name: "Innovation", type: "tag-blue"},
        { name: "Travel", type: "tag-red"},
        { name: "Moto", type: "tag-green"},
        { name: "Salut", type: "tag-green"},
        { name: "Salut1", type: "tag-red"},
        { name: "Salut2", type: "tag-green"},
        { name: "Salut3", type: "tag-green"},
        { name: "Salut4", type: "tag-red"},
        { name: "Salut5", type: "tag-blue"},
        { name: "Salut6", type: "tag-blue"},
        { name: "Salut7", type: "tag-green"},
        { name: "Salut8", type: "tag-red"},
        { name: "Salut9", type: "tag-blue"},
        { name: "Salut10", type: "tag-green"},
        { name: "Salut11", type: "tag-green"},
        { name: "Salut12", type: "tag-blue"},
        { name: "Monocycle", type: "tag-red"}
      ]
    });

    var content = $('#profile-view');
    var t = new TimelineMax({delay: .5});

    t
      .set(content, {opacity: 0, y: 50})
      .to(content, .5, {opacity: 1, y:0});

    vm.takeOff = function () {
      var profileCard = $('.profile-infos');
      var tagCard = $('.tag-card');
      var button = $('.btn-menu');
      var rocket = $('.rocket-take-off');
      var takeOffButton = $('.take-off-button');
      var loadingRocket = $('.loading-rocket');

      TweenMax.to(profileCard, .5, {x: -800, ease: 'Power2.easeOut'});
      TweenMax.to(tagCard, .5, {x: 800, ease: 'Power2.easeOut'});
      TweenMax.to(button, .5, {opacity: 0, ease: 'Power2.easeOut'});
      TweenMax.to(rocket, 3, {y: -300, x: 300, ease: 'Power2.easeOut'});
      TweenMax.to(takeOffButton, .5, {opacity: 0, ease: 'Power2.easeOut'});

      var t = new TimelineMax({delay: 1});
      t
        .set(loadingRocket, {x: 320, y: -600})
        .to(loadingRocket, 5, {rotation: 2000, transformOrigin:"50% 50%", ease: 'Power0.easeOut'})
        .to(loadingRocket, .5, {opacity: 1}, "-=5")
        .to(loadingRocket, 1, {opacity: 0, ease: 'Power0.easeOut'}, "-=1");

        $timeout(function () {
          $location.path('/search');
        }, 7000);

    }

  });
