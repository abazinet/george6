'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');

var dom = React.DOM;
var elem = React.createElement;

var input = Bootstrap.Input;
var dropdown = Bootstrap.DropdownButton;
var menuItem = Bootstrap.MenuItem;

var div = function(classes, children) {
  return dom.div({className: classes}, children);
};

function dateInput(name, value, onChange, options) {

  return (
    div('form-group', [
      div('form-inline', [
        dom.label({className: 'control-label col-md-3'}, [
          dom.span(null, options.label)
        ]),
        div('col-md-9', [
          div('row', [
            div('col-xs-2', [
              elem(dropdown, {title: 'Month'}, [
                elem(menuItem, null, 'January'),
                elem(menuItem, null, 'February'),
                elem(menuItem, null, 'March'),
                elem(menuItem, null, 'April'),
                elem(menuItem, null, 'May'),
                elem(menuItem, null, 'June'),
                elem(menuItem, null, 'July'),
                elem(menuItem, null, 'August'),
                elem(menuItem, null, 'September'),
                elem(menuItem, null, 'October'),
                elem(menuItem, null, 'November'),
                elem(menuItem, null, 'December')
              ])
            ]),
            div('col-xs-2', [dom.input({className: 'form-control', maxLength: 2, placeholder: 'day'})]),
            div('col-xs-2', [dom.input({className: 'form-control', maxLength: 4, placeholder: 'year'})])
          ])
        ])
      ])
    ])
  );
}

module.exports = dateInput;

