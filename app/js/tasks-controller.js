var thingsToBeDoneApp = angular.module('thingsToBeDoneApp', []);

thingsToBeDoneApp.controller('TasksCtrl', function ($scope) {

  $scope.tasks = [
    {
      'description': 'Send the reports to the stakeholders',
       done: 0
    },
    {
      id: 2,
      'description': 'Schedule a meeting with investors',
      done: 0
    }
  ];
});
