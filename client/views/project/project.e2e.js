'use strict';

describe('project route', function () {

  beforeEach(function () {
    browser.get('/project');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ProjectCtrl');
  });

});
