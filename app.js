'use strict';
var express = require('express');
var exphbs  = require('express-handlebars');
var body_parser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var app = express();
app.use(body_parser.urlencoded({ extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
var path = require('path')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(flash());

//Port and environment variable
app.set('port', (process.env.PORT || 9000));

//home page
app.get('/', function (req, res) {
    res.render('home');
});

app.post('/category', function (req, res) {
    res.render('category');
});

app.post('/reasons', function (req, res){
	// req.flash('info', 'All categories have been selected!');
	// req.flash('error', 'Please select the categories!');
	res.render('reasons');
});

//story format page
app.get('/format-user', function (req, res) {
    res.render('format-user');
});

app.get('/format-admin', function (req, res) {
    res.render('format-admin');
});

app.get('/results', function (req, res) {
    res.render('results');
});

app.get('/web/viewer.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/web/story1.pdf'));
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
    res.render('format');
});

/* ***ADMIN*** */

app.get('/filter', function (req, res) {
	res.render('filter');
});

//Hosts my server
 var server = app.listen(9000, function() {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Greetings webapp listening at http://%s:%s', host, port);
 });
