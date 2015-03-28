'use strict';

angular.module('gravity')
  .controller('DiscoverCtrl', function () {

    var vm = this;

    angular.extend(vm, {

      question: "",
      addPost: function() {
        vm.topics.push({question: vm.question,
          author : "Roberta P.",
          date: "26-03-15"});
        vm.question = "";
      },
      topics : [
        {
          "question" : "Hello Maria, I'm workin for another big international company as demand planner. I was wondering, how easy it was for you to move from demand planner to production planner job in Danone, and what kind of challenges you faced? ",
          "author" : "Pierr M.",
          "date" : "02-03-15",
          "answer" :[
            {
            "desc" : "Hello Pierr, thank you for your message, It's been a heavy challenge for me in fact, due to the fact I had to change not only my job but the place where I leaved from as well. Specially the fact that I had to take the lead on a team. ",
            "author" : "Maria P."
            }
          ]
        }
      ]
    });

  });
