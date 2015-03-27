'use strict';

angular.module('gravity')
  .animation('.push-item', function () {
    return {

      enter: function (element, done) {

        var el = angular.element(element);
        var w = el.outerWidth();
        var openDelay = el.siblings().length ? .25 : 0;

        var t = new TimelineMax();

        t
          .set(element, { width: 0, padding: 0, opacity: 0, x: -30 })
          .to(element, openDelay, { width: w, padding: 'auto' })
          .to(element, .25, { opacity: 1, x: 0 }, "-=0.25")
          .addCallback(done);

        return function (isCancelled) {
          if (isCancelled) {
            TweenMax.killTweensOf(t);
          }
        };
      },

      leave: function (element, done) {

        var t = new TimelineMax();

        var el = angular.element(element);

        t
          .to(element, .25, { opacity: 0, y: -20 })
          .to(element, .25, { width: 0, padding: 0 })
          .addCallback(done);

        return function (isCancelled) {
          if (isCancelled) {
          }
        };
      }

    };
  });
