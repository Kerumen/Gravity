'use strict';

angular.module('gravity')
  .controller('HomeCtrl', function ($timeout) {

    var vm = this;


    TweenLite.defaultEase = Power0.easeNone;

    var rocketContainer1 = $('#rocketContainer1');
    var rocket1 = rocketContainer1.children('.rocket-layer');
    var rocketContainer2 = $('#rocketContainer2');
    var rocket2 = rocketContainer2.children('.rocket-layer');

    var t1 = new TimelineMax({ repeat: -1 });

    t1
      .set(rocket1, { x: 100, y: 400 })
      .to(
      rocket1,
      5,
      {
        bezier: { type:"thru", values: [
          {x: 100, y: 400 },
          {x: 450, y: 100 },
          {x: 450, y: 170 },
          {x: 80, y: 480 },
          {x: 100, y: 400 }
        ],
          autoRotate: ["x","y","rotation",false]
        }
      }
    );

    var rocketCtAnim1 = new TimelineMax({ repeat: -1 });
    rocketCtAnim1
      .set(rocketContainer1, { zIndex: 3 })
      .to(rocketContainer1, 2.5, { y: 100 })
      .set(rocketContainer1, { zIndex: 1 })
      .to(rocketContainer1, 2.5, { y: 0 });


    var t2 = new TimelineMax({ repeat: -1 });
    t2
      .set(rocket2, { x: 500, y: 400 })
      .to(
      rocket2,
      5,
      {
        bezier: { type:"thru", values: [
          {x: 500, y: 400 },
          {x: 450, y: 450 },
          {x: 230, y: 280 },
          {x: 180, y: 80 },
          {x: 500, y: 400 }
        ],
          autoRotate: ["x","y","rotation",false]
        }
      }
    );

    var rocketCtAnim2 = new TimelineMax({ repeat: -1 });
    rocketCtAnim2
      .set(rocketContainer2, { zIndex: 1 })
      .to(rocketContainer2, 2.5, { x: -100 })
      .set(rocketContainer2, { zIndex: 3 })
      .to(rocketContainer2, 2.5, { x: 0 });

    function simulatePathDrawing(path) {
      var length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 1.5s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';
    }

    $timeout(function () {
      var $title = $("#title");
      $title.css('opacity', 1);
      $title.contents().find("path").each(function() {
        simulatePathDrawing(this);
      });
    }, 1000);



  });
