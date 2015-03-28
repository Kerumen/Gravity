'use strict';

angular.module('gravity')
  .controller('DashboardCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'DashboardCtrl',
      showmodal: false,
      show:function(){
        vm.showmodal = true
      },
      externs: [
        {name:'Galeano', fname:'Eduardo', up:2, job:'Manager', country:'Uruguay', selected:true},
        {name:'Munro', fname:'alice', up:0, job:'supply-chain', country:'Canada', selected:true},
        {name:'Luna', fname:'diego', up:3, job:'supply-chain', country:'Mexique', selected:true},
        {name:'Quiroga', fname:'Horacio', up:0, job:'supply-chain', country:'Uruguay', selected:true},
        {name:'Machado', fname:'antonio', up:1, job:'supply-chain', country:'Espagne', selected:true},
        {name:'Yu', fname:'gao', up:2, job:'supply-chain', country:'China', selected:true},
        {name:'', fname:'Maria', up:1, job:'supply-chain', country:'Bresil', selected:true},
        {name:'Astier', fname:'lionel', up:1, job:'supply-chain', country:'France', selected:true},
        {name:'Stirling', fname:'linsay', up:0, job:'supply-chain', country:'US', selected:true}
      ],
      interns: [
        {name:'Perusse', fname:'françois', offer:14, job:'HRmanager', country:'Canada', selected:true},
        {name:'jayet', fname:'chloe', offer:14, job:'HRmanager', country:'France', selected:true},
        {name:'Semprun', fname:'jorge', offer:12, job:'HRmanager', country:'Espagne', selected:true},
        {name:'Perelman', fname:'gregori', offer:11, job:'HRmanager', country:'Russie', selected:true},
        {name:'Coulombe', fname:'guy', offer:10, job:'HRmanager', country:'Canada', selected:true},
        {name:'Khil', fname:'edouard', offer:9, job:'trolololo', country:'Russie', selected:true},
        {name:'Sanchez', fname:'Luis Leon', offer:1, job:'HRmanager', country:'Espagne', selected:true},
        {name:'Onetti', fname:'Juan Carlos', offer:1, job:'HRmanager', country:'Uruguay', selected:true},
        {name:'Paseyro', fname:'Ricardo', offer:4, job:'HRmanager', country:'Uruguay', selected:true},

      ],
      topprojects: [
        {name:'project1', nb:56},
        {name:'project2', nb:26},
        {name:'project3', nb:15},
        {name:'project4', nb:59},
        {name:'project5', nb:78},
        {name:'project6', nb:81},
        {name:'project7', nb:23},
        {name:'project8', nb:12},
        {name:'project9', nb:1},
        {name:'project10', nb:32}
      ],
      projects: [
        {name:'project3', description:"description project3", job:"commercial", date:"06/03/15"},
        {name:'project1', description:"description project1", job:"commercial", date:"18/02/15"},
        {name:'project2', description:"description project2", job:"commercial", date:"26/01/15"}
      ],
      recoms: [
        {name:'danoners1', comment:"comment1", job:"commercial", date:"06/03/15"},
        {name:'danoners2', comment:"comment2", job:"commercial", date:"18/02/15"},
        {name:'danoners3', comment:"comment2", job:"commercial", date:"26/01/15"}
      ]
    });

    vm.labels = ["offers", "demands"];
    vm.data = [11, 19];
    vm.labels2 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    vm.data2 = [
      [65, 59, 90, 81, 56, 55, 40]
    ];
  });
