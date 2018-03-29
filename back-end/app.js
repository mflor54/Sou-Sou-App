var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var session = require('cookie-session');
var bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");

const secret = require('./secret.js')
var index = require('./routes/index');
var users = require('./routes/users');
let groups = require('./routes/groups');
let stripeRoutes = require('./routes/stripe/stripe')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret:
      secret.secret,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users/stripe', stripeRoutes);
app.use('/users', users);
app.use('/groups', groups);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('404 Not Found' + req.url);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
