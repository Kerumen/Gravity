'use strict';

angular.module('gravity')
  .directive('profileTags', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/profile-tags/profile-tags.html',
      link: function (scope, element) {

        scope.indexTagsTitle = 0;
        scope.tagsTitle = ['Recommended tags', 'Professional tags', 'Inspirational tags'];
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
        ];

        scope.tags = [
          { name: "Production", type: "tag-blue"},
          { name: "Supply", type: "tag-red"},
          { name: "International", type: "tag-green"},
          { name: "Mobility", type: "tag-red"},
          { name: "Innovation", type: "tag-blue"},
          {name: "Operation", type: "tag-green"},
          {name: "RH", type: "tag-green"},
          {name: "Marketing", type: "tag-red"},
          {name: "ISIT", type: "tag-green"},
          {name: "dd", type: "tag-green"},
          {name: "Vision", type: "tag-red"},
          {name: "Action", type: "tag-blue"},
          { name: "TeamLeader", type: "tag-red"},
          { name: "Activia", type: "tag-blue"},
          { name: "French", type: "tag-red"},
          { name: "Planning", type: "tag-green"},
          {name: "Salut6", type: "tag-blue"},
          {name: "Legal", type: "tag-green"},
          {name: "Compliance", type: "tag-red"},
          {name: "Sales", type: "tag-blue"},
          {name: "Digital", type: "tag-green"},
          {name: "Salut11", type: "tag-green"},
          {name: "TeamBuilding", type: "tag-blue"},
          {name: "Management", type: "tag-red"}
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
