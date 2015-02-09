'use strict';

var elem = require('react').createElement;
var input = require('react-bootstrap').Input;

function textInput(name, value, onChange, options) {
  return elem(input, {
    type: "text",
    name: name,
    value: value,
    onChange: onChange,
    labelClassName: 'col-md-3',
    wrapperClassName: 'col-md-9',
    label: options.label,
    placeholder: options.placeholder});
}

module.exports = textInput;