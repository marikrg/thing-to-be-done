describe('TasksCtrl', function(){

  beforeEach(module('thingsToBeDoneApp'));

  it('should create tasks model with 2 activities', inject(function($controller) {
    var scope = {},
        ctrl = $controller('TasksCtrl', {$scope:scope});

    expect(scope.tasks.length).toBe(2);
  }));
});
