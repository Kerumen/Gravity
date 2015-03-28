'use strict';

angular.module('gravity')
  .directive('profileTags', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/profile-tags/profile-tags.html',
      link: function (scope, element) {

        scope.indexTagsTitle = 0;
        scope.tagsTitle = ['Most used tags', 'Professional tags', 'Hobby tags'];
        scope.customTag = null;

        scope.addTag = function (tag) {
          var tagAdded = tag || {name: scope.customTag, type: 'tag-green'};
          scope.myTags.push(tagAdded);
          scope.customTag = null;
        };

        scope.removeTag = function (index) {
          scope.myTags.splice(index, 1);
        };

        scope.myTags = [
          {name: "Marketing", type: "tag-blue"}
        ];

        scope.tags = [
          {name: "Evian", type: "tag-blue"},
          {name: "IT", type: "tag-red"},
          {name: "France", type: "tag-green"},
          {name: "Mobility", type: "tag-red"},
          {name: "Sales", type: "tag-red"},
          {name: "Activia", type: "tag-blue"},
          {name: "Volvic", type: "tag-red"},
          {name: "USA", type: "tag-green"},
          {name: "Language", type: "tag-blue"},
          {name: "Travel", type: "tag-red"},
          {name: "Moto", type: "tag-green"},
          {name: "Salut", type: "tag-green"},
          {name: "Salut1", type: "tag-red"},
          {name: "Salut2", type: "tag-green"},
          {name: "Salut3", type: "tag-green"},
          {name: "Salut4", type: "tag-red"},
          {name: "Salut5", type: "tag-blue"},
          {name: "Salut6", type: "tag-blue"},
          {name: "Salut7", type: "tag-green"},
          {name: "Salut8", type: "tag-red"},
          {name: "Salut9", type: "tag-blue"},
          {name: "Salut10", type: "tag-green"},
          {name: "Salut11", type: "tag-green"},
          {name: "Salut12", type: "tag-blue"},
          {name: "Monocycle", type: "tag-red"}
        ];

        scope.scrollTagsLeft = function () {
          scope.indexTagsTitle--;
          var content = $('.tag-pool');
          TweenMax.to(content, .5, {x: "+=690"});
        };

        scope.scrollTagsRight = function () {
          scope.indexTagsTitle++;
          var content = $('.tag-pool');
          TweenMax.to(content, .5, {x: "-=690"});
        };
      }
    };
  });
