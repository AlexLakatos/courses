'use strict';

describe('Directive: recipe', function () {

  // load the directive's module
  beforeEach(module('formidableApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recipe></recipe>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the recipe directive');
  }));
});
