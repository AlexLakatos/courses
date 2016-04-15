'use strict';

describe('Filter: stars', function () {

  // load the filter's module
  beforeEach(module('formidableApp'));

  // initialize a new instance of the filter before each test
  var stars;
  beforeEach(inject(function ($filter) {
    stars = $filter('stars');
  }));

  it('should return the input prefixed and suffixes with "*"', function () {
    var text = 'angularjs';
    expect(stars(text)).toBe('*' + text + "*");
  });

});
