'use strict';

angular.module('gravity')
  .controller('HomeCtrl', function () {

    var vm = this;


    TweenLite.defaultEase = Power0.easeNone;

    var rocket = $('#layer-fusee');
    var rocketContainer = $('#rocketContainer');

    var t = new TimelineMax({ repeat: -1 });

    t
      .set(rocket, { x: 0, y: 300 })
      .to(
      rocket,
      5,
      {
        bezier: { type:"thru", values: [
          {x: 0, y: 300 },
          {x: 350, y: 0 },
          {x: 350, y: 70 },
          {x: -20, y: 380 },
          {x: 0, y: 300 }
        ],
          autoRotate: ["x","y","rotation",false]
        }
      }
    );

    var rocketCtAnim = new TimelineMax({ repeat: -1 });
    rocketCtAnim
      .set(rocketContainer, { zIndex: 3 })
      .to(rocketContainer, 2.5, { y: 100 })
      .set(rocketContainer, { zIndex: 1 })
      .to(rocketContainer, 2.5, { y: 0 });



  });
