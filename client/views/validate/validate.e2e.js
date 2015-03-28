'use strict';

describe('validate route', function () {

  beforeEach(function () {
    browser.get('/validate');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ValidateCtrl');
  });

});
