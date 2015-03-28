'use strict';

angular.module('gravity')
  .controller('DashboardCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'DashboardCtrl',
      showmodal: false,
      showmodal2:false,
      show:function(){
        vm.showmodal = true
      },
      show2:function(){
        vm.showmodal2 = true
      },
      externs: [
        {name:'Galeano', fname:'Eduardo', up:2, job:'Digital Manager', country:'Uruguay', selected:true},
        {name:'Munro', fname:'alice', up:0, job:'business dev', country:'Canada', selected:true},
        {name:'Luna', fname:'diego', up:3, job:'business controller', country:'Mexico', selected:true},
        {name:'Quiroga', fname:'Horacio', up:0, job:'Quality engineer', country:'Uruguay', selected:true},
        {name:'Machado', fname:'antonio', up:1, job:'supply-chain', country:'Spain', selected:true},
        {name:'Yu', fname:'gao', up:2, job:'brand manager', country:'China', selected:true},
        {name:'herrera', fname:'Roberta', up:1, job:'supply-chain', country:'Brazil', selected:true},
        {name:'Astier', fname:'lionel', up:1, job:'recruiter', country:'France', selected:true},
        {name:'Stirling', fname:'linsay', up:0, job:'internal communication', country:'US', selected:true}
      ],
      interns: [
        {name:'Perusse', fname:'françois', offer:14, job:'Product dev. manager', country:'Canada', selected:true},
        {name:'Gas', fname:'christine', offer:14, job:'internal comm. director', country:'France', selected:true},
        {name:'Perez', fname:'Maria', offer:8, job:'Production planner', country:'France', selected:true},
        {name:'Yang', fname:'lucy', offer:12, job:'internal controller', country:'china', selected:true},
        {name:'Perelman', fname:'gregori', offer:11, job:'HRmanager', country:'Russia', selected:true},
        {name:'puvenadrjah', fname:'imasso', offer:10, job:'IT manager', country:'Malaysia', selected:true},
        {name:'Khil', fname:'edouard', offer:9, job:'trolololo', country:'Russia', selected:true},
        {name:'Sanchez', fname:'Luis Leon', offer:1, job:'HRmanager', country:'Spain', selected:true},
        {name:'Onetti', fname:'Juan Carlos', offer:1, job:'Quality engineer', country:'Uruguay', selected:true},
        {name:'Paseyro', fname:'Ricardo', offer:4, job:'HRmanager', country:'Uruguay', selected:true},

      ],
      topprojects: [
        {name:'Brand the new activia packaging in Japan', country:'japan', sponsor:'Ken Watanabe'},
        {name:'What do you expect from your manager ?', country:'US', sponsor:'John Blake'},
        {name:'Waste management improvement', country:'Uruguay', sponsor:'Juan Carlos Onetti'},
        {name:'Better collaboration with 2.0 tools', country:'France', sponsor:'Thierry lefebvre'},
        {name:'New employer branding communication', country:'indonesia', sponsor:'Soraya poerbaningrat'}
      ],
      projects: [
        {name:'Maria\'s career path', type:'Discover :', job:"operation", date:"06/03/15"},
        {name:'Waste management improvement', type:'Take off :', job:"IT/Digital", date:"17/08/14"}
      ],
      projects2: [
        {name:'General manager Bledina plant', type:'Discuss :', job:"General management", date:"09/03/15"},
        {name:'Better collaboration with 2.0 tools', type:'Take off :', job:"CSR", date:"18/02/15"}
      ],
      recoms: [
        {name:'Maria P.', comment:"insightful comments and ideas on production in Brazil.", job:"operation", date:"06/03/15"}
      ]
    });

    vm.labels = ["offers", "demands"];
    vm.data = [11, 19];
    vm.labels2 =["Mobility", "Activia", "International", "innovation", "operation", "Brazil", "CSR"];

    vm.data2 = [
      [82, 61, 90, 68, 45, 70, 32]
    ];
  });
