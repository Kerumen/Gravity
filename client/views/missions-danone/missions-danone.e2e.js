'use strict';

describe('missions-danone route', function () {

  beforeEach(function () {
    browser.get('/missions-danone');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('MissionsDanoneCtrl');
  });

});
