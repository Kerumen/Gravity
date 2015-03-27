'use strict';

angular.module('gravity')
  .controller('ProfileCtrl', function ($scope) {

    var vm = this;

    angular.extend(vm, {
      addTag: function(tag) {
        vm.myTags.push(tag);
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
        { name: "Mobilité", type: "tag-red"},
        { name: "Sales", type: "tag-red"},
        { name: "Activia", type: "tag-blue"},
        { name: "RSE", type: "tag-red"},
        { name: "USA", type: "tag-green"},
        { name: "Danette", type: "tag-green"},
        { name: "Santé", type: "tag-blue"}
      ]
    });

  });
