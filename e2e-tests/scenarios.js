'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /KeresesView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/KeresesView");
  });


  describe('KeresesView', function() {

    beforeEach(function() {
      browser.get('index.html#!/KeresesView');
    });


    it('should render KeresesView when user navigates to /KeresesView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('ReszletekView', function() {

    beforeEach(function() {
      browser.get('index.html#!/ReszletekView');
    });


    it('should render ReszletekView when user navigates to /ReszletekView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
