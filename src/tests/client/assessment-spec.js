'use strict';

var _ = require('lodash');
var reactTest = require('react/lib/ReactTestUtils');
var registerView = require('../../client/assessment/index');

describe('a register form', function() {
  var inputs;

  beforeEach(function() {
    var view = reactTest.renderIntoDocument(registerView.view());
    inputs = reactTest.scryRenderedDOMComponentsWithTag(view, 'input');
  });

  it('has first name input', function() {
    var hasFirstName = _.any(inputs, function(input) {
      return input.props.label === 'First Name';
    });
    expect(hasFirstName).toBeTruthy();
  });

  it('has last name input', function() {
    var hasLastName = _.any(inputs, function(input) {
      return input.props.label === 'Last Name';
    });

    expect(hasLastName).toBeTruthy();
  });
});