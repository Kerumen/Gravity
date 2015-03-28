'use strict';

describe('profile-danone route', function () {

  beforeEach(function () {
    browser.get('/profile-danone');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ProfileDanoneCtrl');
  });

});
