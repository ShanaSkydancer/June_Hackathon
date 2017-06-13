'use strict';
var express = require('express');
var exphbs  = require('express-handlebars');
var body_parser = require('body-parser');
var app = express();
app.use(body_parser.urlencoded({ extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, function () {
	console.log('Server running on port 3000');
});

app.get('/', function (req, res) {
    res.render('home');
});