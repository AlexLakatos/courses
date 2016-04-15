'use strict';

describe('Service: RetryService', function () {

  // load the service's module
  beforeEach(module('formidableApp'));

  // instantiate service
  var RetryService;
  beforeEach(inject(function (_RetryService_) {
    RetryService = _RetryService_;
  }));

  it('should do something', function () {
    expect(!!RetryService).toBe(true);
  });

});
