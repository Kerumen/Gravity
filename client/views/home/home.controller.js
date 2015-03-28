'use strict';

angular.module('gravity')
  .controller('HomeCtrl', function ($timeout, $location, $rootScope) {

    var vm = this;



    TweenLite.defaultEase = Power0.easeNone;

    var content = $('.wrapper');
    var o = new TimelineMax();
    o
      .set(content, {opacity: 0})
      .to(content, 1, {opacity: 1, delay: .5});

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
        'stroke-dashoffset 1s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';
    }

    $timeout(function () {
      var $title = $("#title");
      $title.css('opacity', 1);
      $title.find("object").contents().find("path").each(function() {
        simulatePathDrawing(this);
      });
      $timeout(function () {
        $title.find(".by-danone").css('opacity', 1);
      }, 1000)
    }, 1000);


    var danone = $(".danone");
    var title = $("#title");
    var forms = $(".login-forms");
    var t3 = new TimelineMax({delay: 5});
      t3
        .to(danone, 1, {y: -150, ease: 'Power2.easeOut'})
        .to(title, 1, {y: 250, ease: 'Power2.easeOut'}, "-=1")
        .to(forms, 0.2, {opacity: 1, ease: 'Power2.easeOut'});

    var login = $('input[id="login"]');
    var mdp = $('input[id="mdp"]');
    var button = $('#button-login');
    var or = $('.login-or');
    var linkedIn = $('#linkedin-login');
    vm.user = "";
    vm.login = function () {
      TweenMax.to(danone, .5, {y: -700, ease: 'Power2.easeOut'});
      TweenMax.to(title, .5, {y: 500, ease: 'Power2.easeOut'});
      TweenMax.to(login, .5, {x: 600, ease: 'Power2.easeOut'});
      TweenMax.to(mdp, .5, {x: -600, ease: 'Power2.easeOut'});
      TweenMax.to(button, .5, {x: 600, ease: 'Power2.easeOut'});
      TweenMax.to(or, .5, {opacity: 0, ease: 'Power2.easeOut'});
      TweenMax.to(linkedIn, .5, {x: -600, ease: 'Power2.easeOut'});

      $timeout(function () {
        if (vm.user == "greg@danone.com") {
          $rootScope.rootUi.danoner = true;
          $location.path('/profile-danone');
        } else {
          $location.path('/profile');
        }
      }, 1000);
    }

  });
