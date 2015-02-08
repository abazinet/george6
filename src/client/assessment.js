'use strict';

var _ = require('lodash');

var React = require('react');
var elem = React.createElement;
var dom = React.DOM;

var Boostrap = require('react-bootstrap');
var input = Boostrap.Input;
var button = Boostrap.Button;

var http = require('./http-async').create();

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
    if(this.state.submitted) {
      return (dom.div(null, 'THANK YOU ' + this.state.firstname));
    }
    if(this.state.failed) {
      return (dom.div(null, 'Something went wrong. ' + JSON.stringify(this.state.failed)));
    }
    return (
      dom.div({className: 'row register-form '},
        dom.div({className: 'col-md-4'}),
        dom.div({className: 'col-md-4'},
            dom.div({className: 'panel panel-default'},
              dom.div({className: 'panel-body'},
                dom.div({className: 'form-horizontal'}, [
                  elem(input, {type: "text", labelClassName: 'col-md-3', wrapperClassName: 'col-md-9', label: 'First Name', onChange: this.onChange.bind(this, 'firstname'), value: this.state.firstname, placeholder: "first name"}),
                  elem(input, {type: "text", labelClassName: 'col-md-3 ', wrapperClassName: 'col-md-9', label: 'Last Name', onChange: this.onChange.bind(this, 'lastname'), value: this.state.lastname, placeholder: "last name"}),
                  dom.div({className: 'form-group'}, [
                    dom.div({className: 'col-md-9'}),
                    dom.div({className: 'col-md-3'}, [
                      elem(button, {className:"btn btn-primary btn-block", bsStyle: "primary", onClick: this.handleSubmit}, 'next')
                    ])
                  ])
                ])
              )
            )
        ),
        dom.div({className: 'col-md-4'})
      )
    );
  },

  onChange: function(field, e) {
    e.preventDefault();
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState)
  },

  handleSubmit: function(e) {
    e.preventDefault();

    http.post('api/vml/assessment', {firstname: this.state.firstname, lastname: this.state.firstname})
      .then(function() {
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