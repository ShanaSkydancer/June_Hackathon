'use strict';
var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var body_parser = require('body-parser');
var flash = require('express-flash');
var app = express();
app.use(body_parser.urlencoded({
	extended: false
}));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(flash());

app.listen(9000, function() {
	console.log('Server running on port 9000');
});


//home page
app.get('/', function(req, res) {
	res.render('home');
});

/* ***USER*** */

//category page
app.post('/category', function(req, res) {
	req.flash('info', 'All categories have been selected!');
	req.flash('error', 'Please select the categories!');
	res.render('reasons');
});

//story format page
app.post('/format', function(req, res) {
	res.render('format');
});

//text format
app.post('/text', function(req, res) {
	res.render('format');
});

//picture format
app.post('/images', function(req, res) {
	res.render('format');
});

//video format
app.post('/video', function(req, res) {
	res.render('format');
});

//audio format
app.post('/audio', function(req, res) {
	res.render('format', {
		audio: audio
	});
});

/* ***ADMIN*** */
