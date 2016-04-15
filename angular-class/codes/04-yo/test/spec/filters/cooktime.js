'use strict';

describe('Filter: cooktime', function () {

  // load the filter's module
  beforeEach(module('formidableApp'));

  // initialize a new instance of the filter before each test
  var cooktime;
  beforeEach(inject(function ($filter) {
    cooktime = $filter('cooktime');
  }));

  it('should return the input prefixed with "cooktime filter:"', function () {
    var text = 'angularjs';
    expect(cooktime(text)).toBe('cooktime filter: ' + text);
  });

});
