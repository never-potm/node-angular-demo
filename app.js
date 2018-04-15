var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var appRouter = require('./routes/app');

var app = express();
mongoose.connect('mongodb://localhost:27017/node-angular');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// To allow CORS; add this middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  // Called so that the method accesses the next immediate function which uses routes function
  next();
});

app.use('/', appRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
