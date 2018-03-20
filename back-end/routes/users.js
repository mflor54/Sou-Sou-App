const db = require('../db/queries');
var express = require('express');
const stripe = require('../constants/stripe');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', db.createUser);

module.exports = router;
