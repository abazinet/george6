var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/static'));
app.use('/api', routes);

module.exports = app;
