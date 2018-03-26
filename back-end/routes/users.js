const db = require('../db/queries');
var express = require('express');
const stripe = require('../constants/stripe');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");
/*
-Save user name, username, password to db
-User navigates to stripe complete billing info
-User completes stripe account  get redirected back
-Stripe account id, token  gets sent back
-Stripe Id and token gets logged in db
*/

/* GET users listing. */
router.get('/', db.getAllUsers);


router.post('/register', db.createUser);

router.post('/login', passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user;
  res.json(req.user.stripe_id);
});

router.get('/profile', loginRequired, db.getUserInfo)
// router.get("/logout", loginRequired, db.logoutuser);

router.post('/signup', db.createUser);


module.exports = router;
