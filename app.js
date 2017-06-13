'use strict';
var express = require('express');
var exphbs  = require('express-handlebars');
var body_parser = require('body-parser');
var app = express();
app.use(body_parser.urlencoded({ extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(9000, function () {
	console.log('Server running on port 3000');
});


//home page
app.get('/', function (req, res) {
    res.render('home');
});

/* ***USER*** */

//category page
app.post('/category', function (req, res) {
    res.render('category');
});

//story format page
app.post('/format', function (req, res) {
    res.render('format');
});

//text format
app.post('/text', function (req, res) {
    res.render('format');
});

//picture format
app.post('/images', function (req, res) {
    res.render('format');
});

//video format
app.post('/video', function (req, res) {
    res.render('format');
});

//audio format
app.post('/audio', function (req, res) {
    res.render('format', {audio: audio});
});

/* ***ADMIN*** */
