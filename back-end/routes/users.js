const db = require('../db/queries');
var express = require('express');
const passport = require('passport');
const stripe = require('../constants/stripe');
var router = express.Router();

/*
-Save user name, username, password to db
-User navigates to stripe complete billing info
-User completes stripe account  get redirected back
-Stripe account id, token  gets sent back
-Stripe Id and token gets logged in db
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', db.createUser);

router.post('/login', passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user;
  res.json(req.user);
});

router.post('/signup', db.createUser);


module.exports = router;
