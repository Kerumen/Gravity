'use strict';

angular.module('gravity')
  .controller('ProfileCtrl', function ($scope) {

    var vm = this;

    vm.indexTagsTitle = 0;
    vm.tagsTitle = ['Most used tags', 'Professional tags', 'Hobby tags'];
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
        { name: "Marketing", type: "tag-blue"}
      ],
      tags : [
        { name: "Evian", type: "tag-blue"},
        { name: "IT", type: "tag-red"},
        { name: "France", type: "tag-green"},
        { name: "Mobility", type: "tag-red"},
        { name: "Sales", type: "tag-red"},
        { name: "Activia", type: "tag-blue"},
        { name: "Volvic", type: "tag-red"},
        { name: "USA", type: "tag-green"},
        { name: "Language", type: "tag-blue"},
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

    vm.scrollTagsLeft = function () {
      vm.indexTagsTitle--;
      var content = $('.tag-pool');
      var t = new TimelineMax();

      t
        .to(content, .5, {x: "+=690"});
    };

    vm.scrollTagsRight = function () {
      vm.indexTagsTitle++;
      var content = $('.tag-pool');
      var t = new TimelineMax();

      t
        .to(content, .5, {x: "-=690"});
    };
  });
