'use strict';

describe('Controller: MainController', function () {

  
  beforeEach(module('angularBoilerplateApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should do your test', function () {
    //expect(MainController.awesomeThings.length).toBe(3);
    expect(true).toBe(true);
  });
});
