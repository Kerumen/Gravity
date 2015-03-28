'use strict';

angular.module('gravity')
  .controller('ProfileDanoneCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'ProfileDanoneCtrl'
    });

    vm.availabilities = [{
      icon: 'briefcase',
      title: 'A mission?',
      periodicity: -1,
      buttons: [{
        label: 'Add',
        selected: false
      }]
    }, {
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
      periodicity: 1,
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
        if (button.label == "Add") {
          vm.addProject();
        } else if (button.label == "Join") {
          vm.joinProject();
        }
      }
    };

    var content = $('#profile-view');
    var addProject = $('#add-project');
    var joinProject = $('#join-project');

    var t = new TimelineMax({delay: .5});

    t
      .set(addProject, {opacity: 0, y: -50, display: 'none'})
      .set(joinProject, {opacity: 0, y: -50, display: 'none'})
      .set(content, {opacity: 0, y: 50})
      .to(content, .5, {opacity: 1, y:0});

    vm.addProject = function () {
      var t = new TimelineMax();
      t
        .to(joinProject, .5, {opacity: 0, y:-50, display: 'none'})
        .to(addProject, .5, {opacity: 1, y:0, display: 'block'})
    };

    vm.joinProject = function () {
      var t = new TimelineMax();
      t
        .to(addProject, .5, {opacity: 0, y:-50, display: 'none'})
        .to(joinProject, .5, {opacity: 1, y:0, display: 'block'})
    }

  });
