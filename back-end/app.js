var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var session = require('cookie-session');
var bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');

const secret = require('./secret.js')
var index = require('./routes/index');
var users = require('./routes/users');
let groups = require('./routes/groups');
let profile = require('./routes/profile');
let stripeRoutes = require('./routes/stripe/stripe')
let charges = require('./routes/stripe/charge');
const db = require("./db/index");


var app = express();
let proxyValue = false;

if(process.env.PROXY_VALUE == '1') {
	//if there's a proxy, tell express to trust it.  used in production when serving node with nginx or similar
	app.set('trust proxy', 1);
	proxyValue = true;
}

app.use(cors());

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
// const pgSession = require("connect-pg-simple")(session);
// app.use(
//   session({
//     store: new pgSession({
//       pool: db.$pool
//     }),
// 		secret:
// 		      secret.secret,
//     resave: false,
//     saveUninitialized: true
//   })
// );
// app.use(session({
//  store: new (require('connect-pg-simple')(session))(),
//  secret:
//       secret.secret,
//  resave: false,
// 	saveUninitialized: true,
//  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
// }));

app.use(
  session({
    name: 'server-session-cookie-id',
    secret:
      secret.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
          secure: false,
          maxAge: 2160000000,
          httpOnly: false
				}
  })
);

app.use(function printSession(req, res, next) {
  console.log('req.session', req.session);
  return next();
});
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users/stripe', stripeRoutes);
app.use('/users', users);
app.use('/groups', groups);
app.use('/profile', profile);
// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.get('/', function initViewsCount(req, res, next) {
  if (typeof req.session.views === 'undefined') {
    req.session.views = 0;
    return res.end('Welcome to the file session demo. Refresh page!');
  }
  return next();
});
app.get('/', function incrementViewsCount(req, res, next) {
  console.assert(typeof req.session.views === 'number',
    'missing views count in the session', req.session);
  req.session.views++;
  return next();
});
app.use(function printSession(req, res, next) {
  console.log('req.session', req.session);
  return next();
});
app.get('/', function sendPageWithCounter(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>views: ' + req.session.views + '</p>\n');
  res.end();
});



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
