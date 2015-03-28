'use strict';

describe('calendar route', function () {

  beforeEach(function () {
    browser.get('/calendar');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('CalendarCtrl');
  });

});
