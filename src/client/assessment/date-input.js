'use strict';

var React = require('react');
var elem = React.createElement;

var input = require('react-bootstrap').Input;
var datepicker = require('react-day-picker');

function dateInput(name, value, onChange, options) {
  return elem(input, {
    name: name,
    value: value,
    onChange: onChange,
    labelClassName: 'col-md-3',
    wrapperClassName: 'col-md-3',
    label: options.label}, [
      elem(datepicker, {
        onDayTouchTap: onChange
      })
  ]);
}

module.exports = dateInput;
