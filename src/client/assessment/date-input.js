'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');

var dom = React.DOM;
var elem = React.createElement;

var input = Bootstrap.Input;
var dropdown = Bootstrap.DropdownButton;
var menuItem = Bootstrap.MenuItem;

function div(classes, children) {
  return dom.div({className: classes}, children);
}

var view = React.createClass({
  propTypes: {
    label: React.PropTypes.node
  },

  getInitialState: function() {
    return {
      month: '',
      day: '',
      year: ''
    }
  },

  render: function() {
    return (
      div('form-group', [
        div('form-inline', [
          dom.label({className: 'control-label col-md-3'}, [
            dom.span(null, this.props.label)
          ]),
          div('col-md-9', [
            div('row', [
              div('col-xs-2', [
                elem(dropdown, {name: 'month', value: '', onChange: this.handleChange, title: 'Month'}, [
                  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September','October', 'November','December'].map(function(m) {
                      return elem(menuItem, {onSelect: this.monthSelect}, m);
                    }.bind(this))
                ])
              ]),
              div('col-xs-2', [dom.input({className: 'form-control', maxLength: 2, placeholder: 'day'})]),
              div('col-xs-2', [dom.input({className: 'form-control', maxLength: 4, placeholder: 'year'})])
            ])
          ])
        ])
      ])
    );
  },

  monthSelect: function(key, href, target) {
    // TODO: ALEX:
  }
});


module.exports = view;

