'use strict';

var r = require('react');
var view = require('./assessment').view;

module.exports = {
  show: function() {
    r.render(view(), document.getElementById('evaluate-form'));
  }
};