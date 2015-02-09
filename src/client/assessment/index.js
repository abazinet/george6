'use strict';

var React = require('react');
var elem = React.createElement;
var dom = React.DOM;

var Boostrap = require('react-bootstrap');
var button = Boostrap.Button;

var textInput = require('./text-input');
var http = require('./../http-async').create();

var div = function(classes, children) {
  return dom.div({className: classes}, children);
};

var view = React.createClass({
  getInitialState: function() {
    return {
      submitted: false,
      failed: null,
      firstname: '',
      lastname: ''
    }
  },

  render: function() {
    var state = this.state;

    if(this.state.submitted) {
      return (dom.div(null, 'THANK YOU ' + state.firstname));
    }
    if(this.state.failed) {
      return (dom.div({}, 'Something went wrong. ' + JSON.stringify(state.failed)));
    }
    return (
      div('row register-form ', [
        div('col-md-3'),
        div('col-md-6',
            div('panel panel-default',
              div('panel-body',
                div('form-horizontal', [
                  textInput('firstname',
                    state.firstname,
                    this.handleChange, {
                      placeholder: 'first name',
                      label: 'First Name'
                    }),
                  textInput('lastname',
                    state.lastname,
                    this.handleChange, {
                      placeholder: 'last name',
                      label: 'Last Name'
                    }),
                  div('form-group', [
                    div('col-md-9'),
                    div('col-md-3', [
                      elem(button, {
                        className:"btn btn-primary btn-block",
                        bsStyle: "primary",
                        onClick: this.handleSubmit}, 'next')
                    ])
                  ])
                ])
              )
            )
        )],
        div('col-md-3')
      )
    );
  },

  handleChange: function(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },

  handleSubmit: function() {
    var state = this.state;

    http.post('api/vml/assessment', {
      firstname: state.firstname,
      lastname: state.lastname
    }).then(function() {
        this.setState({submitted: true});
      }.bind(this))
      .catch(function(e) {
        this.setState({failed: e});
      }.bind(this));
  }
});

module.exports = {
  view: view
};