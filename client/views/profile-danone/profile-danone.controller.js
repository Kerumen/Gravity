'use strict';

angular.module('gravity')
  .controller('ProfileDanoneCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'ProfileDanoneCtrl'
    });

    vm.availabilities = [{
      icon: 'coffee',
      title: 'A coffee?',
      periodicity: 3,
      buttons: [{
        label: 'Yes',
        type: 'success',
        selected: true
      }, {
        label: 'No',
        type: 'danger',
        selected: false
      }]
    }, {
      icon: 'briefcase',
      title: 'A project?',
      periodicity: 2,
      buttons: [{
        label: 'Add',
        selected: false
      }, {
        label: 'Join',
        selected: false
      }]
    }, {
      icon: 'fork',
      title: 'A lunch?',
      periodicity: 1,
      buttons: [{
        label: 'Yes',
        type: 'success',
        selected: false
      }, {
        label: 'No',
        type: 'danger',
        selected: true
      }]
    }, {
      icon: 'chatbubbles',
      title: 'A chat?',
      periodicity: 8,
      buttons: [{
        label: 'Yes',
        type: 'success',
        selected: true
      }, {
        label: 'No',
        type: 'danger',
        selected: false
      }]
    }];

    vm.toggleAvailability = function (item, button) {
      if (button.hasOwnProperty('type') && !button.selected) {
        angular.forEach(item.buttons, function (btn) {
          btn.selected = !btn.selected;
        });
      } else if (!button.hasOwnProperty('type')) {
        vm.addProject();
      }
    };

    var content = $('#profile-view');
    var addProject = $('#add-project');
    var t = new TimelineMax({delay: .5});

    t
      .set(addProject, {opacity: 0, y: -50})
      .set(content, {opacity: 0, y: 50})
      .to(content, .5, {opacity: 1, y:0});

    vm.addProject = function () {
      TweenMax.to(addProject, .5, {opacity: 1, y:0})
    }

  });
