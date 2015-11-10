'use strict';

describe('thingsToBeDoneApp', function() {

  describe('Tasks list view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should be possible flag a task as done', function() {
      expect(element.all(by.css('.task input')).first().isSelected()).toBeFalsy();
      expect(element.all(by.css('.task input')).get(1).isSelected()).toBeFalsy();

      element.all(by.css('.task input')).first().click();

      expect(element.all(by.css('.task input')).first().isSelected()).toBeTruthy();
      expect(element.all(by.css('.task input')).get(1).isSelected()).toBeFalsy();
    });

    it('should strike the description when the task is done', function() {
      element.all(by.css('.task input')).first().click();

      expect(element.all(by.css('.task span')).first().getAttribute('class')).toMatch('striked');
      expect(element.all(by.css('.task span')).get(1).getAttribute('class')).not.toMatch('striked');
    });
  });
});
