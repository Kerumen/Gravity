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
      }
    };

    var content = $('#profile-view');
    var t = new TimelineMax({delay: .5});

    t
      .set(content, {opacity: 0, y: 50})
      .to(content, .5, {opacity: 1, y:0});

  });
