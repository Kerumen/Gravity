'use strict';

describe('intro route', function () {

  beforeEach(function () {
    browser.get('/intro');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('IntroCtrl');
  });

});
