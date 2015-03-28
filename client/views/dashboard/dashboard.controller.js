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
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'Uruguay', selected:true},
        {name:'doe', fname:'jhon', up:0, job:'supply-chain', country:'Canada', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'Mexique', selected:true},
        {name:'doe', fname:'jhon', up:1, job:'supply-chain', country:'Bresil', selected:true},
        {name:'doe', fname:'jhon', up:5, job:'supply-chain', country:'US', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'France', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'Uruguay', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'Espagne', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'China', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'Bresil', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'France', selected:true},
        {name:'doe', fname:'jhon', up:3, job:'supply-chain', country:'US', selected:true}
      ],
      interns: [
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Canada', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'France', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Espagne', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Russie', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Canada', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Russie', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'US', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Uruguay', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Bresil', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'France', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Bresil', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'US', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'US', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Espagne', selected:true},
        {name:'jayet', fname:'chloe', offer:12, job:'HRmanager', country:'Uruguay', selected:true}
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
      ]
    });

    vm.labels = ["offers", "demands"];
    vm.data = [11, 19];
    vm.labels2 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    vm.data2 = [
      [65, 59, 90, 81, 56, 55, 40]
    ];
  });
