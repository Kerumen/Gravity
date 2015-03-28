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
          "question" : "erhfk uefyguyerfg uyrfgryufr? ",
          "author" : "Pierr M.",
          "date" : "02-03-15",
          "answer" :[
            {
            "desc" : "erhfk uefyerg ergoijrg oi rgohergo uhgouehgoerhouerhg ou gouh eriugh rughrug rhugh roguheou rhgoueh gurhgu rgrgrg rg rg rg rg rg rgguyerfg uyrfgryufr ",
            "author" : "Maria P."
            },
            {
            "desc" : "erhfk uefyerg ergoijrg oi rgohergugh roguheou rhgoueh gurhgu rgrgrg rg rg rg rg rg rgguyerfg uyrfgryufr ",
            "author" : "Louis S."
            }
          ]
        },
        {
          "question" : "erhfk uefygu fefef fefefef efefefe yerfg ue efhrgiuh iugheriguh righrug rgurgurguir gyrfgryufr? ",
          "author" : "Anne C.",
          "date" : "23-03-15",
          "answer" :[]
        }
      ]
    });

  });
